/**
 * ORALIS API Service Layer
 * Currently uses mock data. Ready for Spring Boot / Keycloak integration.
 *
 * To integrate:
 *  1. Set VITE_API_BASE_URL in your .env file
 *  2. Replace mock functions with real axios calls
 *  3. Add Keycloak token interceptor to the axios instance
 */

import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// ---- Mock data ----

export const mockCefrScores = {
  pronunciation: 88,
  fluency: 82,
  intonation: 84,
  vocabulary: 91,
  grammar: 89,
  coherence: 83,
};

export const mockWeeklyActivity = [
  { day: 'Lun', minutes: 18, target: 25 },
  { day: 'Mar', minutes: 32, target: 25 },
  { day: 'Mer', minutes: 25, target: 25 },
  { day: 'Jeu', minutes: 40, target: 25 },
  { day: 'Ven', minutes: 22, target: 25 },
  { day: 'Sam', minutes: 15, target: 25 },
  { day: 'Dim', minutes: 0, target: 25 },
];

export const mockSessions = [
  {
    id: 204,
    date: '24 Oct 2024',
    duration: '04:32',
    topic: 'Transition écologique & souveraineté industrielle',
    score: 87,
    level: 'C1',
    exam: 'DALF C1',
  },
  {
    id: 203,
    date: '21 Oct 2024',
    duration: '03:58',
    topic: 'Intelligence artificielle & enseignement supérieur',
    score: 84,
    level: 'C1',
    exam: 'DALF C1',
  },
  {
    id: 202,
    date: '18 Oct 2024',
    duration: '05:00',
    topic: 'Diplomatie culturelle & soft power',
    score: 81,
    level: 'B2',
    exam: 'DELF B2',
  },
];

export const mockAnalysisResult = {
  sessionId: 204,
  date: '24 Oct 2024',
  duration: '04:32',
  topic: 'Analyse • Transition écologique & souveraineté industrielle',
  exam: 'DALF C1 • Synthèse Critique',
  overallScore: 87,
  cefrLevel: 'C1 AVANCÉ',
  percentile: 94,
  criteria: [
    {
      id: 1,
      name: 'Prononciation',
      subtitle: 'Phonétique & Articulation',
      score: 88,
      icon: 'mic',
      color: 'primary',
      strengths: ['Phonèmes nasaux [/ɔ̃/, /ʻ̃/] d\'une grande netteté académique.'],
      warnings: ['Deux liaisons obligatoires en [t] omises ("dont on", "tout autre").'],
    },
    {
      id: 2,
      name: 'Fluidité',
      subtitle: 'Débit & Enchaînement',
      score: 82,
      icon: 'speed',
      color: 'secondary',
      wpm: 134,
      pauses: 6,
      note: 'Rythme global très naturel, malgré une hésitation sur le paragraphe de transition économique à 02:40.',
    },
    {
      id: 3,
      name: 'Intonation & Prosodie',
      subtitle: 'Courbe mélodique',
      score: 84,
      icon: 'graphic_eq',
      color: 'primary',
      note: 'Courbes interrogatives et emphase rhétorique bien dosées.',
    },
    {
      id: 4,
      name: 'Vocabulaire & Registre',
      subtitle: 'Richesse lexicale',
      score: 91,
      icon: 'menu_book',
      color: 'success',
      note: 'Richesse lexicale C2 remarquable, registre académique soutenu.',
    },
    {
      id: 5,
      name: 'Morphosyntaxe',
      subtitle: 'Structures complexes',
      score: 89,
      icon: 'spellcheck',
      color: 'primary',
      note: 'Maîtrise du subjonctif imparfait et des tournures passives complexes.',
    },
    {
      id: 6,
      name: 'Cohérence du Discours',
      subtitle: 'Connecteurs logiques',
      score: 83,
      icon: 'account_tree',
      color: 'warning',
      note: 'Connecteurs logiques efficaces, conclusions parfois un peu abruptes.',
    },
  ],
};

// ---- API stubs (replace with real calls when backend is ready) ----

export const authApi = {
  login: (email, password) => Promise.resolve({ token: 'mock-token', user: { email } }),
  register: (data) => Promise.resolve({ success: true }),
  forgotPassword: (email) => Promise.resolve({ success: true }),
};

export const sessionApi = {
  getSessions: () => Promise.resolve(mockSessions),
  getAnalysis: (id) => Promise.resolve(mockAnalysisResult),
};
