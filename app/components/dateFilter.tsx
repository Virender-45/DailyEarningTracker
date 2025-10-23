// Created By Virender

// app/components/DateFilter.tsx
// import React, { useState } from "react";
// import { Button, StyleSheet, TextInput, View } from "react-native";

// interface DateFilterProps {
//   onFilter: (startDate: string, endDate: string) => void;
// }

// const DateFilter: React.FC<DateFilterProps> = ({ onFilter }) => {
//   const [startDate, setStartDate] = useState<string>("");
//   const [endDate, setEndDate] = useState<string>("");

//   const handleFilter = () => {
//     onFilter(startDate, endDate);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Start Date (YYYY-MM-DD)"
//         value={startDate}
//         onChangeText={setStartDate}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="End Date (YYYY-MM-DD)"
//         value={endDate}
//         onChangeText={setEndDate}
//         style={styles.input}
//       />
//       <Button title="Filter" onPress={handleFilter} />
//     </View>
//   );
// };

// export default DateFilter;

// const styles = StyleSheet.create({
//   container: { marginVertical: 10 },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     marginBottom: 5,
//     padding: 8,
//     borderRadius: 6,
//   },
// });







// For claender Popup


import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

interface DateFilterProps {
    onFilter: (startDate: string, endDate: string) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({ onFilter }) => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [showStartPicker, setShowStartPicker] = useState(false);
    const [showEndPicker, setShowEndPicker] = useState(false);

    const onChangeStart = (event: DateTimePickerEvent, selectedDate?: Date) => {
        setShowStartPicker(Platform.OS === "ios");
        if (selectedDate) setStartDate(selectedDate);
    };

    const onChangeEnd = (event: DateTimePickerEvent, selectedDate?: Date) => {
        setShowEndPicker(Platform.OS === "ios");
        if (selectedDate) setEndDate(selectedDate);
    };

    const handleFilter = () => {
        if (startDate && endDate) {
            const formattedStart = startDate.toISOString().split("T")[0];
            const formattedEnd = endDate.toISOString().split("T")[0];
            onFilter(formattedStart, formattedEnd);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Button title="Select Start Date" onPress={() => setShowStartPicker(true)} />
                <Text style={styles.dateText}>
                    {startDate ? startDate.toDateString() : "Not selected"}
                </Text>
            </View>

            <View style={styles.row}>
                <Button title="Select End Date" onPress={() => setShowEndPicker(true)} />
                <Text style={styles.dateText}>
                    {endDate ? endDate.toDateString() : "Not selected"}
                </Text>
            </View>

            {showStartPicker && (
                <DateTimePicker
                    value={startDate || new Date()}
                    mode="date"
                    display="default"
                    onChange={onChangeStart}
                />
            )}

            {showEndPicker && (
                <DateTimePicker
                    value={endDate || new Date()}
                    mode="date"
                    display="default"
                    onChange={onChangeEnd}
                />
            )}

            <Button title="Filter" onPress={handleFilter} />
        </View>
    );
};

export default DateFilter;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8
    },
    dateText: {
        marginLeft: 10,
        fontSize: 16
    },
    
});
