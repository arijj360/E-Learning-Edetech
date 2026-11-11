import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import AuthLayout from '../layouts/AuthLayout';
import LearnerLayout from '../layouts/LearnerLayout';
import ProtectedRoute from './ProtectedRoute';

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';

import LearnerDashboard from '../pages/learner/LearnerDashboard';
import Practice from '../pages/learner/Practice';
import AnalysisResults from '../pages/learner/AnalysisResults';
import Feedback from '../pages/learner/Feedback';
import Simulations from '../pages/learner/Simulations';
import Certifications from '../pages/learner/Certifications';
import Progress from '../pages/learner/Progress';

import Groups from '../pages/trainer/Groups';
import FeedbackValidation from '../pages/trainer/FeedbackValidation';

import Analytics from '../pages/establishment/Analytics';

import Profile from '../pages/profile/Profile';
import Settings from '../pages/profile/Settings';

const router = createBrowserRouter([
  /* ---- Public auth routes ---- */
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/forgot-password', element: <ForgotPassword /> },
    ],
  },

  /* ---- Protected app routes ---- */
  {
    element: (
      <ProtectedRoute>
        <LearnerLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: '/learner/dashboard', element: <LearnerDashboard /> },
      { path: '/learner/practice', element: <Practice /> },
      { path: '/learner/analysis', element: <AnalysisResults /> },
      { path: '/learner/feedback', element: <Feedback /> },
      { path: '/learner/simulations', element: <Simulations /> },
      { path: '/learner/certifications', element: <Certifications /> },
      { path: '/learner/progress', element: <Progress /> },
      { path: '/profile', element: <Profile /> },
      { path: '/settings', element: <Settings /> },
      /* Trainer routes */
      { path: '/trainer/dashboard', element: <div style={{ padding: '2rem' }}>Trainer Dashboard (coming soon)</div> },
      { path: '/trainer/groups', element: <Groups /> },
      { path: '/trainer/learners', element: <div style={{ padding: '2rem' }}>Learners List (coming soon)</div> },
      { path: '/trainer/feedback-validation', element: <FeedbackValidation /> },
      { path: '/trainer/topics', element: <div style={{ padding: '2rem' }}>Topics Management (coming soon)</div> },
      { path: '/trainer/alerts', element: <div style={{ padding: '2rem' }}>Alerts (coming soon)</div> },
      /* Establishment routes */
      { path: '/establishment/dashboard', element: <div style={{ padding: '2rem' }}>Establishment Dashboard (coming soon)</div> },
      { path: '/establishment/groups', element: <Groups /> },
      { path: '/establishment/learners', element: <div style={{ padding: '2rem' }}>Learners List (coming soon)</div> },
      { path: '/establishment/trainers', element: <div style={{ padding: '2rem' }}>Trainers Management (coming soon)</div> },
      { path: '/establishment/analytics', element: <Analytics /> },
      { path: '/establishment/attestations', element: <div style={{ padding: '2rem' }}>Attestations Management (coming soon)</div> },
    ],
  },

  /* ---- Default redirect ---- */
  { path: '/', element: <Navigate to="/login" replace /> },
  { path: '*', element: <Navigate to="/login" replace /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
