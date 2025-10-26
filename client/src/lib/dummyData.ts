// TODO: remove mock functionality
// Dummy data for UK Financial Blueprint Dashboard

export const profileData = {
  name: "MyBluePrintUser1001",
  age: 34,
  location: "Manchester, UK",
  employment: "Senior Software Engineer",
  annualIncome: 65000,
  monthlyIncome: 5417,
  netWorth: 142500,
  savingsRate: 28,
  taxPaid: 15732,
};

export const dependantsData = {
  spouse: {
    name: "Partner",
    age: 32,
    employment: "Part-time Teacher",
    income: 18000,
  },
  children: [
    {
      name: "Child 1",
      age: 6,
      specialNeeds: false,
      education: "Primary School",
    },
    {
      name: "Child 2",
      age: 3,
      specialNeeds: true,
      specialNeedsDetails: "Autism Spectrum Disorder - requires additional support",
      education: "Nursery",
    },
  ],
};

export const childrensEducation = {
  currentCosts: [
    { child: "Child 1", stage: "Primary School", monthlyCost: 0, type: "State School" },
    { child: "Child 2", stage: "Nursery", monthlyCost: 850, type: "Private Nursery with SEN Support" },
  ],
  futurePlanning: [
    {
      child: "Child 1",
      stage: "University (2037)",
      estimatedCost: 45000,
      currentSavings: 8000,
    },
    {
      child: "Child 2",
      stage: "University (2040)",
      estimatedCost: 50000,
      currentSavings: 4000,
      additionalNeeds: "May require additional support services",
    },
  ],
  totalMonthlyCost: 850,
  totalAnnualCost: 10200,
};

export const specialLifeEvents = [
  {
    id: 1,
    event: "Daughter's Wedding",
    estimatedDate: "2045",
    estimatedCost: 15000,
    currentSavings: 2000,
    priority: "Medium",
  },
  {
    id: 2,
    event: "Home Renovation",
    estimatedDate: "2027",
    estimatedCost: 35000,
    currentSavings: 8000,
    priority: "Medium",
  },
  {
    id: 3,
    event: "Family Holiday (Annual)",
    estimatedDate: "Yearly",
    estimatedCost: 4500,
    currentSavings: 1500,
    priority: "Low",
  },
];

export const incomeBreakdown = [
  { source: "Salary", amount: 65000, percentage: 92 },
  { source: "Freelance", amount: 4800, percentage: 7 },
  { source: "Investments", amount: 700, percentage: 1 },
];

export const expenseBreakdown = [
  { category: "Housing", amount: 1200, percentage: 30 },
  { category: "Transport", amount: 350, percentage: 9 },
  { category: "Groceries", amount: 400, percentage: 10 },
  { category: "Utilities", amount: 180, percentage: 5 },
  { category: "Entertainment", amount: 280, percentage: 7 },
  { category: "Subscriptions", amount: 85, percentage: 2 },
  { category: "Healthcare", amount: 120, percentage: 3 },
  { category: "Other", amount: 285, percentage: 7 },
];

export const savingsData = {
  isaContributions: 12400,
  isaAllowance: 20000,
  pensionContributions: 8500,
  pensionAllowance: 60000,
  emergencyFund: 18000,
  emergencyFundTarget: 24000,
  investments: 45000,
};


export const taxBreakdown = {
  personalAllowance: 12570,
  basicRate: 9086,
  higherRate: 6646,
  nationalInsurance: 4234,
  totalTax: 15732,
};

export const financialGoals = [
  {
    id: 1,
    title: "House Deposit",
    target: 50000,
    current: 28000,
    deadline: "Dec 2026",
    priority: "High",
  },
  {
    id: 2,
    title: "Retirement Fund",
    target: 500000,
    current: 85000,
    deadline: "2055",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Emergency Fund",
    target: 24000,
    current: 18000,
    deadline: "Jun 2025",
    priority: "High",
  },
  {
    id: 4,
    title: "Children's Education Fund",
    target: 95000,
    current: 12000,
    deadline: "2037",
    priority: "High",
  },
  {
    id: 5,
    title: "Special Needs Trust Fund",
    target: 50000,
    current: 8000,
    deadline: "2040",
    priority: "High",
  },
];

export const riskTolerance = {
  score: 6,
  level: "Moderate",
  description: "Comfortable with some market volatility for potential growth",
};

export const lifestylePriorities = [
  { priority: "Financial Security", rank: 1 },
  { priority: "Career Growth", rank: 2 },
  { priority: "Work-Life Balance", rank: 3 },
  { priority: "Travel & Experiences", rank: 4 },
  { priority: "Home Ownership", rank: 5 },
];

export const insuranceCoverage = [
  {
    type: "Life Insurance",
    coverage: 250000,
    recommended: 325000,
    status: "Underinsured",
    premium: 28,
  },
  {
    type: "Income Protection",
    coverage: 0,
    recommended: 39000,
    status: "Not Covered",
    premium: 0,
  },
  {
    type: "Critical Illness",
    coverage: 100000,
    recommended: 150000,
    status: "Underinsured",
    premium: 45,
  },
  {
    type: "Home & Contents",
    coverage: 350000,
    recommended: 350000,
    status: "Adequate",
    premium: 32,
  },
];

export const emergencyFundData = {
  current: 18000,
  monthlyExpenses: 4000,
  monthsCovered: 4.5,
  target: 24000,
  targetMonths: 6,
};

export const mindsetScores = {
  spendingHabits: 7,
  savingDiscipline: 8,
  investmentConfidence: 6,
  financialLiteracy: 7,
};

export const actionPlan = [
  {
    id: 1,
    category: "Immediate",
    title: "Complete Emergency Fund",
    description: "Add £6,000 to reach 6-month target",
    priority: "High",
    impact: "Provides essential financial security buffer",
    timeframe: "Next 3 months",
    completed: false,
  },
  {
    id: 2,
    category: "Immediate",
    title: "Review Income Protection Insurance",
    description: "Get quotes for income protection cover of £39k annually",
    priority: "High",
    impact: "Protects income in case of illness or injury",
    timeframe: "Next 2 weeks",
    completed: false,
  },
  {
    id: 3,
    category: "Short-term",
    title: "Maximize ISA Allowance",
    description: "Contribute remaining £7,600 to ISA before year-end",
    priority: "Medium",
    impact: "Tax-free growth on investments",
    timeframe: "3-6 months",
    completed: false,
  },
  {
    id: 4,
    category: "Short-term",
    title: "Increase Life Insurance Coverage",
    description: "Add £75k to life insurance to reach recommended level",
    priority: "Medium",
    impact: "Better protection for dependents",
    timeframe: "3-6 months",
    completed: false,
  },
  {
    id: 5,
    category: "Medium-term",
    title: "Start Pension Salary Sacrifice",
    description: "Increase pension contributions via salary sacrifice for NI savings",
    priority: "Medium",
    impact: "Reduce tax burden while boosting retirement savings",
    timeframe: "6-12 months",
    completed: false,
  },
  {
    id: 6,
    category: "Medium-term",
    title: "Diversify Investment Portfolio",
    description: "Review and rebalance investment mix across ISA and pension",
    priority: "Low",
    impact: "Optimize risk-adjusted returns",
    timeframe: "6-12 months",
    completed: false,
  },
  {
    id: 7,
    category: "Long-term",
    title: "House Deposit Strategy",
    description: "Continue £900/month savings for house deposit target",
    priority: "High",
    impact: "Progress towards home ownership goal",
    timeframe: "12+ months",
    completed: false,
  },
  {
    id: 8,
    category: "Long-term",
    title: "Review Mortgage Options",
    description: "Research Help to Buy ISA and mortgage pre-approval",
    priority: "Medium",
    impact: "Prepare for property purchase in 2026",
    timeframe: "12+ months",
    completed: false,
  },
];
