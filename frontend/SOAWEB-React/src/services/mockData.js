/**
 * Comprehensive Mock Data for ORALIS Platform
 * All data structures ready for Spring Boot API integration
 */

// ===== FEEDBACK & EXERCISES =====
export const mockFeedbackHistory = [
  {
    id: 'f001',
    recordingDate: '2024-11-08',
    language: 'Français',
    cefrLevel: 'C1',
    overallScore: 87,
    status: 'validated',
    topic: 'Transition écologique & souveraineté industrielle',
    duration: '04:32',
    trainerName: 'Marc V.',
  },
  {
    id: 'f002',
    recordingDate: '2024-11-05',
    language: 'Français',
    cefrLevel: 'C1',
    overallScore: 84,
    status: 'validated',
    topic: 'Intelligence artificielle & enseignement',
    duration: '03:58',
    trainerName: 'Sophie M.',
  },
  {
    id: 'f003',
    recordingDate: '2024-11-02',
    language: 'Français',
    cefrLevel: 'B2',
    overallScore: 81,
    status: 'pending',
    topic: 'Diplomatie culturelle & soft power',
    duration: '05:00',
    trainerName: null,
  },
];

export const mockDetailedFeedback = {
  id: 'f001',
  recordingDate: '2024-11-08',
  topic: 'Transition écologique & souveraineté industrielle',
  overallScore: 87,
  criteria: [
    {
      name: 'Prononciation',
      score: 88,
      strengths: [
        'Phonèmes nasaux [/ɔ̃/, /ɑ̃/] d\'une grande netteté académique',
        'Articulation des liaisons en [z] parfaitement maîtrisée',
      ],
      weaknesses: [
        'Deux liaisons obligatoires en [t] omises ("dont on", "tout autre")',
        'Légère friction sur les "s" sourds en position finale',
      ],
      recommendations: [
        'Pratiquer les liaisons obligatoires avec des exercices ciblés',
        'Exercices de phonétique sur les consonnes sourdes finales',
      ],
    },
    {
      name: 'Fluidité',
      score: 82,
      strengths: [
        'Débit naturel de 134 mots/minute',
        'Pauses respiratoires bien placées',
      ],
      weaknesses: [
        'Hésitation notable à 02:40 sur le vocabulaire économique',
        '6 pauses d\'hésitation lexicales',
      ],
      recommendations: [
        'Enrichir le vocabulaire économique spécialisé',
        'Exercices de reformulation rapide',
      ],
    },
    {
      name: 'Intonation',
      score: 84,
      strengths: [
        'Courbes interrogatives bien marquées',
        'Emphase rhétorique dosée',
      ],
      weaknesses: [
        'Quelques phrases déclaratives monotones',
      ],
      recommendations: [
        'Varier l\'intonation dans les phrases longues',
      ],
    },
    {
      name: 'Vocabulaire',
      score: 91,
      strengths: [
        'Richesse lexicale niveau C2',
        'Registre académique soutenu parfaitement maîtrisé',
      ],
      weaknesses: [],
      recommendations: [
        'Continuer à enrichir le vocabulaire spécialisé',
      ],
    },
    {
      name: 'Grammaire',
      score: 89,
      strengths: [
        'Subjonctif imparfait correctement employé',
        'Tournures passives complexes maîtrisées',
      ],
      weaknesses: [
        'Un accord du participe passé manquant',
      ],
      recommendations: [
        'Réviser les accords du participe passé avec les verbes pronominaux',
      ],
    },
    {
      name: 'Cohérence',
      score: 83,
      strengths: [
        'Connecteurs logiques efficaces',
        'Progression argumentative claire',
      ],
      weaknesses: [
        'Conclusion un peu abrupte',
      ],
      recommendations: [
        'Travailler les transitions vers la conclusion',
      ],
    },
  ],
};

export const mockExercises = [
  {
    id: 'ex001',
    title: 'Liaisons obligatoires et facultatives',
    type: 'pronunciation',
    difficulty: 'C1',
    duration: '15 min',
    description: 'Exercice ciblé sur les liaisons en [t], [z] et [n] dans des phrases complexes',
    completed: false,
  },
  {
    id: 'ex002',
    title: 'Vocabulaire économique avancé',
    type: 'vocabulary',
    difficulty: 'C2',
    duration: '20 min',
    description: 'Enrichissement du lexique économique spécialisé (PIB, inflation, souveraineté)',
    completed: false,
  },
  {
    id: 'ex003',
    title: 'Subjonctif imparfait en contexte',
    type: 'grammar',
    difficulty: 'C1',
    duration: '25 min',
    description: 'Maîtriser l\'emploi du subjonctif imparfait dans les propositions subordonnées',
    completed: true,
  },
  {
    id: 'ex004',
    title: 'Fluidité et reformulation rapide',
    type: 'fluency',
    difficulty: 'B2',
    duration: '15 min',
    description: 'Exercices de reformulation pour réduire les hésitations lexicales',
    completed: false,
  },
  {
    id: 'ex005',
    title: 'Transitions et connecteurs logiques',
    type: 'coherence',
    difficulty: 'C1',
    duration: '18 min',
    description: 'Améliorer la cohérence du discours avec des connecteurs avancés',
    completed: false,
  },
];

// ===== SIMULATIONS =====
export const mockSimulations = [
  {
    id: 'sim001',
    name: 'DELF B1',
    language: 'Français',
    cefrLevel: 'B1',
    duration: '10-15 min',
    preparationTime: '10 min',
    structure: 'Entretien dirigé + Exercice en interaction + Expression d\'un point de vue',
    completed: 8,
    avgScore: 75,
  },
  {
    id: 'sim002',
    name: 'DELF B2',
    language: 'Français',
    cefrLevel: 'B2',
    duration: '20 min',
    preparationTime: '30 min',
    structure: 'Présentation et défense d\'un point de vue',
    completed: 12,
    avgScore: 81,
  },
  {
    id: 'sim003',
    name: 'DALF C1',
    language: 'Français',
    cefrLevel: 'C1',
    duration: '30 min',
    preparationTime: '60 min',
    structure: 'Exposé + Entretien avec le jury',
    completed: 15,
    avgScore: 86,
  },
  {
    id: 'sim004',
    name: 'DALF C2',
    language: 'Français',
    cefrLevel: 'C2',
    duration: '30 min',
    preparationTime: '60 min',
    structure: 'Compte rendu + Développement personnel + Débat',
    completed: 5,
    avgScore: 82,
  },
  {
    id: 'sim005',
    name: 'TCF Expression Orale',
    language: 'Français',
    cefrLevel: 'A1-C2',
    duration: '12 min',
    preparationTime: 'Variable',
    structure: '3 tâches progressives',
    completed: 6,
    avgScore: 78,
  },
  {
    id: 'sim006',
    name: 'IELTS Speaking',
    language: 'Anglais',
    cefrLevel: 'B1-C2',
    duration: '11-14 min',
    preparationTime: 'Aucun',
    structure: 'Introduction + Long turn + Discussion',
    completed: 3,
    avgScore: 7.5,
  },
];

export const mockSimulationTopics = [
  'La transition écologique en France',
  'L\'intelligence artificielle dans l\'éducation',
  'La diplomatie culturelle française',
  'Les enjeux de la souveraineté numérique',
  'L\'avenir du travail à l\'ère du numérique',
  'La place du français dans le monde',
];

// ===== CERTIFICATIONS =====
export const mockCertifications = [
  {
    id: 'cert001',
    name: 'DELF B2',
    description: 'Diplôme d\'Études en Langue Française niveau B2',
    requiredLevel: 'B2',
    language: 'Français',
    format: 'Compréhension + Production écrite et orale',
    duration: '2h30',
    provider: 'France Éducation International',
  },
  {
    id: 'cert002',
    name: 'DALF C1',
    description: 'Diplôme Approfondi de Langue Française niveau C1',
    requiredLevel: 'C1',
    language: 'Français',
    format: 'Compréhension + Production écrite et orale',
    duration: '4h00',
    provider: 'France Éducation International',
  },
  {
    id: 'cert003',
    name: 'DALF C2',
    description: 'Diplôme Approfondi de Langue Française niveau C2',
    requiredLevel: 'C2',
    language: 'Français',
    format: 'Compréhension et production + Compte rendu + Débat',
    duration: '3h30',
    provider: 'France Éducation International',
  },
  {
    id: 'cert004',
    name: 'TCF Tout Public',
    description: 'Test de Connaissance du Français',
    requiredLevel: 'A1-C2',
    language: 'Français',
    format: 'Test adaptatif informatisé',
    duration: '1h30',
    provider: 'France Éducation International',
  },
  {
    id: 'cert005',
    name: 'IELTS Academic',
    description: 'International English Language Testing System',
    requiredLevel: 'B1-C2',
    language: 'Anglais',
    format: 'Listening, Reading, Writing, Speaking',
    duration: '2h45',
    provider: 'British Council / IDP',
  },
];

export const mockAttestations = [
  {
    id: 'att001',
    certificationName: 'Attestation ORALIS C1',
    issueDate: '2024-10-15',
    level: 'C1',
    status: 'Délivrée',
    description: 'Attestation de niveau basée sur 15 simulations complètes',
  },
  {
    id: 'att002',
    certificationName: 'Attestation ORALIS B2',
    issueDate: '2024-08-20',
    level: 'B2',
    status: 'Délivrée',
    description: 'Attestation de niveau basée sur 12 simulations complètes',
  },
];

// ===== PROGRESS TRACKING =====
export const mockProgressHistory = [
  { month: 'Mai', score: 72 },
  { month: 'Juin', score: 75 },
  { month: 'Juil', score: 78 },
  { month: 'Août', score: 80 },
  { month: 'Sept', score: 83 },
  { month: 'Oct', score: 86 },
];

export const mockSkillsRadar = {
  pronunciation: 88,
  fluency: 82,
  intonation: 84,
  vocabulary: 91,
  grammar: 89,
  coherence: 83,
};

export const mockLearningHistory = [
  {
    id: 'lh001',
    type: 'exercise',
    title: 'Subjonctif imparfait en contexte',
    date: '2024-11-08',
    score: 92,
  },
  {
    id: 'lh002',
    type: 'simulation',
    title: 'DALF C1 - Exposé argumentatif',
    date: '2024-11-07',
    score: 87,
  },
  {
    id: 'lh003',
    type: 'recording',
    title: 'Pratique libre - Transition écologique',
    date: '2024-11-06',
    score: 85,
  },
];

// ===== GROUPS MANAGEMENT =====
export const mockGroups = [
  {
    id: 'grp001',
    name: 'DALF C1 - Préparation Intensive',
    cefrLevel: 'C1',
    language: 'Français',
    learnerCount: 12,
    startDate: '2024-09-01',
    endDate: '2025-01-31',
    status: 'active',
    trainer: 'Marc Valentin',
    avgScore: 84,
  },
  {
    id: 'grp002',
    name: 'DELF B2 - Session Automne',
    cefrLevel: 'B2',
    language: 'Français',
    learnerCount: 18,
    startDate: '2024-09-15',
    endDate: '2024-12-20',
    status: 'active',
    trainer: 'Sophie Martine',
    avgScore: 78,
  },
  {
    id: 'grp003',
    name: 'TCF Préparation Rapide',
    cefrLevel: 'B1-B2',
    language: 'Français',
    learnerCount: 8,
    startDate: '2024-10-01',
    endDate: '2024-11-30',
    status: 'active',
    trainer: 'Jean Dubois',
    avgScore: 75,
  },
  {
    id: 'grp004',
    name: 'DALF C2 - Excellence',
    cefrLevel: 'C2',
    language: 'Français',
    learnerCount: 5,
    startDate: '2024-08-01',
    endDate: '2025-02-28',
    status: 'active',
    trainer: 'Marc Valentin',
    avgScore: 88,
  },
  {
    id: 'grp005',
    name: 'DELF B1 - Débutants Avancés',
    cefrLevel: 'B1',
    language: 'Français',
    learnerCount: 15,
    startDate: '2024-06-01',
    endDate: '2024-11-30',
    status: 'completed',
    trainer: 'Claire Rousseau',
    avgScore: 72,
  },
];

export const mockGroupLearners = [
  {
    id: 'usr001',
    firstName: 'Camille',
    lastName: 'Laurent',
    email: 'camille.laurent@sorbonne.fr',
    currentLevel: 'C1',
    avgScore: 86,
    sessionsCompleted: 15,
    lastActivity: '2024-11-08',
    status: 'active',
  },
  {
    id: 'usr002',
    firstName: 'Alexandre',
    lastName: 'Dubois',
    email: 'alexandre.dubois@sorbonne.fr',
    currentLevel: 'C1',
    avgScore: 83,
    sessionsCompleted: 12,
    lastActivity: '2024-11-07',
    status: 'active',
  },
  {
    id: 'usr003',
    firstName: 'Emma',
    lastName: 'Martin',
    email: 'emma.martin@sorbonne.fr',
    currentLevel: 'B2',
    avgScore: 79,
    sessionsCompleted: 10,
    lastActivity: '2024-11-05',
    status: 'warning',
  },
];

// ===== TRAINER VALIDATION =====
export const mockPendingEvaluations = [
  {
    id: 'eval001',
    learnerName: 'Camille Laurent',
    recordingDate: '2024-11-08',
    language: 'Français',
    cefrLevel: 'C1',
    autoScore: 87,
    status: 'pending',
    topic: 'Transition écologique',
    duration: '04:32',
  },
  {
    id: 'eval002',
    learnerName: 'Alexandre Dubois',
    recordingDate: '2024-11-07',
    language: 'Français',
    cefrLevel: 'C1',
    autoScore: 83,
    status: 'pending',
    topic: 'Intelligence artificielle',
    duration: '03:45',
  },
  {
    id: 'eval003',
    learnerName: 'Emma Martin',
    recordingDate: '2024-11-06',
    language: 'Français',
    cefrLevel: 'B2',
    autoScore: 79,
    status: 'attention',
    topic: 'Diplomatie culturelle',
    duration: '04:15',
  },
];

export const mockEvaluationDetail = {
  id: 'eval001',
  learner: {
    name: 'Camille Laurent',
    email: 'camille.laurent@sorbonne.fr',
    currentLevel: 'C1',
  },
  recording: {
    date: '2024-11-08',
    duration: '04:32',
    topic: 'Transition écologique & souveraineté industrielle',
    audioUrl: '/mock-audio.mp3',
  },
  transcript: `Je voudrais aborder la question de la transition écologique sous l'angle de la souveraineté industrielle française. 

Il me semble que ces deux enjeux sont intrinsèquement liés. D'une part, nous devons réduire notre empreinte carbone et respecter nos engagements climatiques. D'autre part, nous devons maintenir notre capacité industrielle et notre indépendance stratégique.

La question se pose notamment pour les batteries électriques, les panneaux solaires et les éoliennes. Comment produire ces équipements en France tout en respectant des normes environnementales strictes ?

Je pense que la solution réside dans l'innovation technologique et dans des partenariats européens renforcés.`,
  aiEvaluation: {
    overallScore: 87,
    criteria: [
      { name: 'Prononciation', score: 88 },
      { name: 'Fluidité', score: 82 },
      { name: 'Intonation', score: 84 },
      { name: 'Vocabulaire', score: 91 },
      { name: 'Grammaire', score: 89 },
      { name: 'Cohérence', score: 83 },
    ],
    strengths: [
      'Phonèmes nasaux d\'une grande netteté académique',
      'Richesse lexicale niveau C2',
      'Maîtrise des structures complexes',
    ],
    weaknesses: [
      'Deux liaisons obligatoires omises',
      'Hésitation à 02:40 sur le vocabulaire économique',
      'Conclusion un peu abrupte',
    ],
  },
};

// ===== INSTITUTIONAL ANALYTICS =====
export const mockInstitutionStats = {
  totalLearners: 248,
  totalTrainers: 12,
  totalGroups: 18,
  activeLearners: 187,
  avgScore: 81,
  certificationReadiness: 68,
  successRate: 89,
};

export const mockCefrDistribution = [
  { level: 'A1', count: 12 },
  { level: 'A2', count: 28 },
  { level: 'B1', count: 54 },
  { level: 'B2', count: 78 },
  { level: 'C1', count: 62 },
  { level: 'C2', count: 14 },
];

export const mockPerformanceByGroup = [
  { groupName: 'DALF C2 - Excellence', avgScore: 88 },
  { groupName: 'DALF C1 - Préparation Intensive', avgScore: 84 },
  { groupName: 'DELF B2 - Session Automne', avgScore: 78 },
  { groupName: 'TCF Préparation Rapide', avgScore: 75 },
  { groupName: 'DELF B1 - Débutants Avancés', avgScore: 72 },
];

export const mockInstitutionalAlerts = [
  {
    id: 'alert001',
    type: 'low_progress',
    learnerName: 'Lucas Bernard',
    message: 'Aucune activité depuis 14 jours',
    severity: 'high',
  },
  {
    id: 'alert002',
    type: 'declining_performance',
    groupName: 'DELF B2 - Session Automne',
    message: 'Score moyen en baisse de 8% ce mois',
    severity: 'medium',
  },
  {
    id: 'alert003',
    type: 'certification_ready',
    learnerName: 'Camille Laurent',
    message: 'Prête pour la certification DALF C1',
    severity: 'low',
  },
];
