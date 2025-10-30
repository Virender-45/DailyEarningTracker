// Created by Ashish — Global App Styles

import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  // 🌆 Main Screen
  container: {
    flex: 1,
    padding: 16,
    paddingTop:70,
    backgroundColor: "#5B2E91", // PhonePe Purple base
  },

  // 🔹 Section Titles
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    color: "#EDE7F6",
    textAlign: "center",
    marginBottom: 8,
  },

  // 🔹 Date Filter
  dateFilterContainer: {
    backgroundColor: "#7E57C2",
    padding: 16,
    borderRadius: 14,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  dateInput: {
    backgroundColor: "#F8F9FA",
    borderWidth: 1,
    borderColor: "#B39DDB",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    fontSize: 14,
    color: "#000",
  },
  filterButton: {
    backgroundColor: "#4A148C",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  filterButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  // 🔹 Summary Bar
  summaryBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14,
    backgroundColor: "#9575CD",
    borderRadius: 12,
    marginVertical: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },

  // 🔹 List Items
  listContainer: {
    backgroundColor: "#6A1B9A",
    borderRadius: 12,
    padding: 10,
    marginVertical: 6,
  },
  listItem: {
    fontSize: 15,
    color: "#fff",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#D1C4E9",
  },
  listAmount: {
    fontWeight: "bold",
    color: "#C5E1A5",
  },

  // 🔹 Empty State
  emptyText: {
    textAlign: "center",
    color: "#E1BEE7",
    fontSize: 16,
    marginTop: 20,
  },
});     