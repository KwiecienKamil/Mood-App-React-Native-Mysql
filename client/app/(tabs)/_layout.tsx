import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          color: "#333",
        },
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "#6c757d",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="overview"
        options={{
          tabBarLabel: "Overview",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "list" : "list-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};
