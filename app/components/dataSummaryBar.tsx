// Created By Virender

// app/components/DataSummaryBar.tsx
import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/globalstyles";
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
    <View style={globalStyles.summaryBar}>
      <Text style={globalStyles.summaryText}>Entries: {totalEntries}</Text>
      <Text style={globalStyles.summaryText}>Total: ₹{totalAmount}</Text>
    </View>
  );
};

export default DataSummaryBar;

/* styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#0ab13cff",
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});*/