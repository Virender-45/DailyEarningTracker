// Created By Virender

// app/data/earnings.ts
export interface Earning {
  id: number;
  date: string;
  amount: number;
}

const earningsData: Earning[] = [
  { id: 1, date: '2023-10-20', amount: 50 },
  { id: 2, date: '2024-10-21', amount: 75 },
  { id: 3, date: '2025-10-22', amount: 100 },
];

export default earningsData;
