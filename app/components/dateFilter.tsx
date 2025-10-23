// Created By Virender

// app/components/DateFilter.tsx
import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface DateFilterProps {
  onFilter: (startDate: string, endDate: string) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({ onFilter }) => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleFilter = () => {
    onFilter(startDate, endDate);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Start Date (YYYY-MM-DD)"
        value={startDate}
        onChangeText={setStartDate}
        style={styles.input}
      />
      <TextInput
        placeholder="End Date (YYYY-MM-DD)"
        value={endDate}
        onChangeText={setEndDate}
        style={styles.input}
      />
      <Button title="Filter" onPress={handleFilter} />
    </View>
  );
};

export default DateFilter;

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 5,
    padding: 8,
    borderRadius: 6,
  },
});