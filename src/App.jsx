import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

// Pages (Lazy loaded for Code Splitting)
const Index = lazy(() => import('./pages/main/Index'));
const Intro = lazy(() => import('./pages/main/Intro'));
const Story = lazy(() => import('./pages/theme/Story'));
const Concept = lazy(() => import('./pages/theme/Concept'));
const MasterPlan = lazy(() => import('./pages/theme/MasterPlan'));
const Highlight = lazy(() => import('./pages/complex/Highlight'));
const ArchitectureDesign = lazy(() => import('./pages/complex/ArchitectureDesign'));
const ExteriorDesign = lazy(() => import('./pages/complex/ExteriorDesign'));
const LandscapeDesign = lazy(() => import('./pages/complex/LandscapeDesign'));
const CommunityDesign = lazy(() => import('./pages/complex/CommunityDesign'));
const UnitDesign = lazy(() => import('./pages/unit/UnitDesign'));
const UnitCreate = lazy(() => import('./pages/unit/UnitCreate'));
const Items = lazy(() => import('./pages/unit/Items'));
const VrTour = lazy(() => import('./pages/vr/VrTour'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Router>
  );
}

export default App;
