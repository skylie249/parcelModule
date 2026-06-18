window.initUnit = function() {
  const IMAGE_BASE = '../../resource/images/design/';
  const DATA_URL   = '../../resource/data/unit_mock.json';
  const MOBILE_BREAKPOINT = 768; // 모바일 분기점 설정

 $.ajax({
    url: DATA_URL,
    dataType: 'json',
    success: function (data) {
      // 1. 디바이스 환경에 따른 조건부 렌더링 실행
      initResponsiveRendering(data.types);

      // 2. 창 크기 조절 (리사이즈) 대응
      let lastWidth = window.innerWidth;
      $(window).on('resize', function() {
        const currentWidth = window.innerWidth;
        const wasMobile = lastWidth <= MOBILE_BREAKPOINT;
        const isMobile = currentWidth <= MOBILE_BREAKPOINT;

        // PC <-> 모바일 환경이 교차될 때만 새로고침하여 DOM 꼬임 방지
        if (wasMobile !== isMobile) {
          location.reload();
        }
        lastWidth = currentWidth;
      });
    },
    error: function () {
      console.error('unit_mock.json 로드 실패');
    }
  });

  // 화면 크기를 감지하여 필요한 함수만 호출하는 분기 로직
  function initResponsiveRendering(types) {
    if (window.innerWidth <= MOBILE_BREAKPOINT) {
      // 모바일 렌더링
      renderFloorPlanMo(types);
      initFloorPlanMoTabs();
    } else {
      // PC 렌더링
      renderFloorPlan(types);
      initFloorPlanTabs();
    }
  }

  /* ===================== PC ===================== */
  function renderFloorPlan(types) {
    const $container = $('.floor-plan-contents');
    $container.empty();

    types.forEach(function (typeData) {
      const $content = $('<div>', { class: 'floor-plan-content', 'data-type': typeData.type });

      // 내부 옵션 nav 생성 (h4 타입명 + ul)
      const $navUl = $('<ul>');
      typeData.options.forEach(function (opt, idx) {
        $navUl.append(
          $('<li>').append(
            $('<button>', { type: 'button', 'data-option': idx })
              .append($('<span>', { class: 'label', text: opt.label }))
          )
        );
      });
      $content.append(
        $('<div>', { class: 'floor-plan-content-nav' })
          .append($('<h4>', { text: typeData.type }))
          .append($navUl)
      );

      // 옵션별 content-body 생성
      typeData.options.forEach(function (opt, idx) {
        const isInterior = idx === 0;
        const $innerDiv = buildDescInner(opt, isInterior);
        const $body = $('<div>', { class: 'floor-plan-content-body', 'data-option': idx })
          .append(
            $('<div>', { class: 'photo' })
              .append($('<img>', { src: IMAGE_BASE + opt.image, alt: opt.alt }))
          )
          .append(
            $('<div>', { class: 'desc ' + typeData.type }).append($innerDiv)
          );
        $content.append($body);
      });

      $container.append($content);
    });
  }

  function initFloorPlanTabs() {
    const $typeButtons = $('.floor-plan-nav button');
    const $typeContents = $('.floor-plan-content');

    // 외부 탭 초기 활성화
    $typeButtons.first().addClass('active');
    $typeContents.first().addClass('active').siblings('.floor-plan-content').hide();

    // 내부 탭 초기 활성화
    $typeContents.each(function () {
      const $c = $(this);
      $c.find('.floor-plan-content-nav button').first().addClass('active');
      $c.find('.floor-plan-content-body').first().addClass('active')
        .siblings('.floor-plan-content-body').hide();
      // data-option="0" 이 기본 active이므로 wht 추가
      $c.find('.floor-plan-content-nav h4').addClass('wht');
    });

    // 초기 active 패널 desc 애니메이션 — 스크롤 진입 시 1회 실행
    animatePcDescOnScroll($typeContents.first().find('.floor-plan-content-body.active'));

    // 외부 탭 클릭: 타입 전환
    $typeButtons.on('click', function () {
      const type = $(this).data('type');
      $typeButtons.removeClass('active');
      $(this).addClass('active');
      const $activeContent = $typeContents.hide().removeClass('active')
        .filter('[data-type="' + type + '"]')
        .show().addClass('active');
      animatePcDesc($activeContent.find('.floor-plan-content-body.active'));
    });

    // 내부 탭 클릭: 옵션 전환
    $(document).on('click', '.floor-plan-content-nav button', function () {
      const $c = $(this).closest('.floor-plan-content');
      const option = $(this).data('option');
      $c.find('.floor-plan-content-nav button').removeClass('active');
      $(this).addClass('active');
      const $targetBody = $c.find('.floor-plan-content-body').hide().removeClass('active')
        .filter('[data-option="' + option + '"]')
        .show().addClass('active');
      animatePcDesc($targetBody);
      // data-option="0" 활성 시 wht 추가, 나머지는 제거
      $c.find('.floor-plan-content-nav h4').toggleClass('wht', option === 0);
    });
  }

  // 탭 클릭 시 즉시 실행
  function animatePcDesc($body) {
    if (!$body.length || typeof gsap === 'undefined') return;
    const targets = $body.find('.desc .tit, .desc .t1, .desc .t2, .desc .dot-lists').toArray();
    if (!targets.length) return;
    gsap.fromTo(targets,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out' }
    );
  }

  // 초기 로드 시 뷰포트 진입 시점에 1회 실행
  function animatePcDescOnScroll($body) {
    if (!$body.length || typeof gsap === 'undefined') return;
    const targets = $body.find('.desc .tit, .desc .t1, .desc .t2, .desc .dot-lists').toArray();
    if (!targets.length) return;
    gsap.fromTo(targets,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: {
          trigger: $body[0],
          start: 'top 80%',
          once: true
        }
      }
    );
  }

  /* ===================== Mobile ===================== */
  function renderFloorPlanMo(types) {
    const $container = $('.floor-plan-mo-contents');
    $container.empty();

    types.forEach(function (typeData) {
      // 옵션 하나당 floor-plan-mo-content 1개 생성
      typeData.options.forEach(function (opt, idx) {
        const isInterior = idx === 0;
        const $moContent = $('<div>', {
          class: 'floor-plan-mo-content',
          'data-type': typeData.type,
          'data-option': idx
        });

        // .top: h4 + 상단 nav (옵션 0, 1)
        const $topNav = $('<div>', { class: 'nav' });
        typeData.options.slice(0, 2).forEach(function (o, i) {
          $topNav.append(
            $('<button>', { type: 'button', 'data-option': i })
              .append($('<span>', { class: 'label', text: o.label }))
          );
        });
        $moContent.append(
          $('<div>', { class: 'top' })
            .append($('<h4>', { text: typeData.type }))
            .append($topNav)
        );

        // .photo (imageMo 우선, 없으면 image)
        $moContent.append(
          $('<div>', { class: 'photo' })
            .append($('<img>', { src: IMAGE_BASE + (opt.imageMo || opt.image), alt: opt.alt }))
        );

        // 하단 nav (옵션 2+)
        if (typeData.options.length > 2) {
          const $bottomNav = $('<div>', { class: 'nav' });
          typeData.options.slice(2).forEach(function (o, i) {
            $bottomNav.append(
              $('<button>', { type: 'button', 'data-option': i + 2 })
                .append($('<span>', { class: 'label', text: o.label }))
            );
          });
          $moContent.append($bottomNav);
        }

        // .desc
        const $innerDiv = buildDescInner(opt, isInterior);
        $moContent.append($('<div>', { class: 'desc' }).append($innerDiv));

        $container.append($moContent);
      });
    });
  }

  function initFloorPlanMoTabs() {
    const $typeButtons = $('.floor-plan-mo-nav button');
    const $allMoContents = $('.floor-plan-mo-content');

    // 초기 활성화: 첫 번째 타입의 첫 번째 옵션(Interior)만 표시
    const firstType = $typeButtons.first().data('type');
    $typeButtons.first().addClass('active');
    $allMoContents.hide();

    const $firstPanel = $allMoContents.filter('[data-type="' + firstType + '"][data-option="0"]');
    $firstPanel.show().addClass('active');
    $firstPanel.find('.nav button[data-option="0"]').addClass('active');

    // 외부 타입 탭 클릭
    $typeButtons.on('click', function () {
      const type = $(this).data('type');
      $typeButtons.removeClass('active');
      $(this).addClass('active');

      $allMoContents.hide().removeClass('active');
      const $firstOfType = $allMoContents.filter('[data-type="' + type + '"][data-option="0"]');
      $firstOfType.show().addClass('active');
      $firstOfType.find('.nav button').removeClass('active');
      $firstOfType.find('.nav button[data-option="0"]').addClass('active');
    });

    // 내부 옵션 버튼 클릭 (상단·하단 nav 공통)
    $(document).on('click', '.floor-plan-mo-content .nav button', function () {
      const option = $(this).data('option');
      const type   = $(this).closest('.floor-plan-mo-content').data('type');

      const $typeContents = $allMoContents.filter('[data-type="' + type + '"]');
      $typeContents.hide().removeClass('active');

      const $target = $typeContents.filter('[data-option="' + option + '"]');
      $target.show().addClass('active');
      $target.find('.nav button').removeClass('active');
      $target.find('.nav button[data-option="' + option + '"]').addClass('active');
    });
  }

  /* ===================== 공통 desc 빌더 ===================== */
  function buildDescInner(opt, isInterior) {
    const $innerDiv = $('<div>', { class: isInterior ? 'interior' : 'basic' });
    $innerDiv.append($('<h5>', { class: 'tit', text: opt.title }));

    if (isInterior) {
      if (opt.t1) $innerDiv.append($('<p>', { class: 't1', text: opt.t1 }));
      if (opt.t2) $innerDiv.append($('<p>', { class: 't2' }).html(opt.t2));
    } else {
      if (opt.t1) $innerDiv.append($('<p>', { class: 't1', text: opt.t1 }));
      if (opt.details && opt.details.length) {
        const $ul = $('<ul>', { class: 'dot-lists' });
        opt.details.forEach(function (txt) {
          $ul.append($('<li>', { text: txt }));
        });
        $innerDiv.append($ul);
      }
    }
    return $innerDiv;
  }
};
