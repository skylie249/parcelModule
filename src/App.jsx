import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Index from './pages/main/Index';
import Intro from './pages/main/Intro';
import Story from './pages/theme/Story';
import Concept from './pages/theme/Concept';
import MasterPlan from './pages/theme/MasterPlan';
import Highlight from './pages/complex/Highlight';
import ArchitectureDesign from './pages/complex/ArchitectureDesign';
import ExteriorDesign from './pages/complex/ExteriorDesign';
import LandscapeDesign from './pages/complex/LandscapeDesign';
import CommunityDesign from './pages/complex/CommunityDesign';
import UnitDesign from './pages/unit/UnitDesign';
import UnitCreate from './pages/unit/UnitCreate';
import Items from './pages/unit/Items';
import VrTour from './pages/vr/VrTour';
import ErrorPage from './pages/ErrorPage';

// [Code Review] 현재 모든 페이지 컴포넌트를 한 번에 import 하고 있습니다.
// 애플리케이션 규모가 커질 경우 초기 로딩 속도 지연을 방지하기 위해 React.lazy()를 활용한 Code Splitting 도입을 강력히 권장합니다.
// 예: const Intro = lazy(() => import('./pages/main/Intro'));
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/intro" replace />} />
        <Route path="/intro" element={<Intro />} />
        
        <Route element={<Layout />}>
          <Route path="main" element={<Index />} />
          
          <Route path="theme">
            <Route path="story" element={<Story />} />
            <Route path="concept" element={<Concept />} />
            <Route path="master-plan" element={<MasterPlan />} />
          </Route>

          <Route path="complex">
            <Route path="highlight" element={<Highlight />} />
            <Route path="architecture-design" element={<ArchitectureDesign />} />
            <Route path="exterior-design" element={<ExteriorDesign />} />
            <Route path="landscape-design" element={<LandscapeDesign />} />
            <Route path="community-design" element={<CommunityDesign />} />
          </Route>

          <Route path="unit">
            <Route path="unit-design" element={<UnitDesign />} />
            <Route path="unit-create" element={<UnitCreate />} />
            <Route path="items" element={<Items />} />
          </Route>

          <Route path="vr">
            <Route path="vr-tour" element={<VrTour />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
