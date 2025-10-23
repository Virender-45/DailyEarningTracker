// Created By Virender

// app/components/DataSummaryBar.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Earning {
  date: string;
  amount: number;
}

interface Props {
  earnings: Earning[];
}

const DataSummaryBar: React.FC<Props> = ({ earnings }) => {
  const totalEntries = earnings.length;
  const totalAmount = earnings.reduce((sum, e) => sum + e.amount, 0);

  return (
    <View style={styles.bar}>
      <Text style={styles.text}>Entries: {totalEntries}</Text>
      <Text style={styles.text}>Total: ₹{totalAmount}</Text>
    </View>
  );
};

export default DataSummaryBar;

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
