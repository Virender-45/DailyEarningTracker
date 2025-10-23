// Created By Virender

// app/screens/HomeScreen.tsx
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DataSummaryBar from "../components/dataSummaryBar";
import DateFilter from "../components/dateFilter";

interface Earning {
  date: string;   // e.g. "2025-10-20"
  amount: number;
}

const HomeScreen: React.FC = () => {
  const [earnings, setEarnings] = useState<Earning[]>([
    { date: "2025-10-20", amount: 200 },
    { date: "2025-10-21", amount: 150 },
    { date: "2025-10-23", amount: 300 },
  ]);

  const [filteredEarnings, setFilteredEarnings] = useState<Earning[]>(earnings);

  const handleFilter = (start: string, end: string) => {
    // Reset if empty fields
    if (!start || !end) {
      setFilteredEarnings(earnings);
      return;
    }

    const startDate = new Date(start);
    const endDate = new Date(end);

    const filtered = earnings.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= endDate;
    });

    setFilteredEarnings(filtered);
  };

  return (
    <View style={styles.container}>
      <DateFilter onFilter={handleFilter} />
      <DataSummaryBar earnings={filteredEarnings} />

      <FlatList
        data={filteredEarnings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.date} - ₹{item.amount}
          </Text>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  item: {
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
