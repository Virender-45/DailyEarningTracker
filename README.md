# 💰 Daily Earning Tracker

A React Native (Expo + TypeScript) app that allows users to **track their daily earnings**, **filter them by date**, and view a **summary of total entries and total earnings**.  

---

## 👥 Team & Responsibilities

| Team Member | Responsibilities |
|--------------|------------------|
| **Virender Singh** | Set up the project folder and README. Created `DateFilter` to filter earnings by date and `DataSummaryBar` to show total entries and earnings. |
| **Lavi Choudhary** | Built `DailyEarningsInput` to capture daily earnings and `EarningsList` to display them dynamically. |
| **Shivam Sharma** | Created `ShowTotalButton` to calculate and display total earnings using functions and state. |
| **Tushar** | Built `Layout` to arrange all components (input, list, total, summary) neatly using Flexbox for clear presentation. |
| **Ashish** | Handled `AppStyling` to apply consistent colors, fonts, and spacing across components, making the UI readable and visually appealing. |

---

## 📱 Features

- 📆 **Date Filter** — Filter your earnings between specific start and end dates.  
- 💵 **Summary Bar** — Displays total entries and total earnings dynamically.  
- 🧾 **Earnings Input & List** — Add and view your daily earning records.  
- ⚙️ **Modular Components** — Clean, reusable, and well-structured codebase.  
- 🎨 **Consistent Styling** — Unified colors, fonts, and spacing for a neat UI.

---

## 🧩 Tech Stack

- **Framework:** [React Native](https://reactnative.dev/)  
- **Platform:** [Expo](https://expo.dev/)  
- **Language:** TypeScript  
- **Date Picker:** `@react-native-community/datetimepicker`

---

## 📁 Project Structure So Far


DailyEarningTracker/
│
├─ app/
│ ├─ components/
│ │ ├─ DateFilter.tsx # Date range selector
│ │ ├─ DataSummaryBar.tsx # Shows total entries & total earnings
│ │
│ ├─ screens/
│ │ └─ HomeScreen.tsx # Main screen combining all features
│ │
│ ├─ data/
│ │ └─ earnings.ts # Sample earnings data
│ │
│ ├─ _layout.tsx
│ └─ index.tsx # Entry point
│
├─ assets/ # App images & media
├─ package.json
├─ app.json
├─ tsconfig.json
├─ README.md



🧠 How It Works

1. The user selects a start and end date using the DateFilter component.
2. HomeScreen filters the earnings data based on the selected range.
3. The DataSummaryBar updates to show total entries and total earnings.


🧑‍🎨 Authors

Developed by the Daily Earning Tracker Team:

- Virender Singh
- Lavi Choudhary
- Shivam Sharma
- Tushar
- Ashish

