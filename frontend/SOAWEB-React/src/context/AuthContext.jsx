import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

// Mock user data
const MOCK_USER = {
  id: '8f2d4c91-b3a2-492e-9f1d-7c3e8a042b65',
  firstName: 'Camille',
  lastName: 'Laurent',
  email: 'camille.laurent@sorbonne-universite.fr',
  role: 'learner', // 'learner' | 'trainer' | 'institution'
  cefrLevel: 'C1',
  targetLevel: 'C2',
  targetExam: 'DALF C2',
  targetLanguage: 'FLE',
  institution: 'Sorbonne Université',
  examDate: '24 Mai 2025',
  trainer: 'Marc V. (CIEP/FEI)',
  avatarInitials: 'CL',
  studioQuota: { used: '14h 20m', total: '20h', percent: 72 },
  score: 86,
  sessionsThisMonth: 42,
  speakingTime: '18h 45m',
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(MOCK_USER);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    // Mock login — always succeeds
    setUser({ ...MOCK_USER, email });
    setIsAuthenticated(true);
    return Promise.resolve({ success: true });
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const switchRole = (role) => {
    setUser(prev => ({ ...prev, role }));
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
