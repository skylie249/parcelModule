window.initIntro = function() {

  const box = document.querySelectorAll('.intro-vs-form .checkForm')
  const infoWrap = document.querySelector('.intro-infos')
  const inners = document.querySelectorAll('.intro-infos-inner')

  const showTarget = (target) => {
    gsap.set(infoWrap, { display: 'flex' })
    gsap.set(target, { display: 'block' })
    gsap.fromTo(target,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
    )
  }

  box.forEach(el => {
    const input = el.querySelector('input')
    input.addEventListener('change', () => {
      box.forEach(b => b.classList.remove('checked'))
      if (input.checked) {
        el.classList.add('checked')

        const targetType = input.value === 'Y' ? '1' : '2'
        const target = document.querySelector(`.intro-infos-inner[data-type="${targetType}"]`)

        // 현재 보이는 inner 찾기
        const currentVisible = Array.from(inners).find(
          inner => inner !== target && getComputedStyle(inner).display !== 'none'
        )

        if (currentVisible) {
          // fade-out 완료 후 fade-in 시작
          gsap.to(currentVisible, {
            opacity: 0,
            duration: 0.2,
            ease: 'power2.in',
            onComplete: () => {
              gsap.set(currentVisible, { display: 'none' })
              showTarget(target)
            }
          })
        } else {
          showTarget(target)
        }
      }
    })
  })

};
