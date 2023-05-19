import { Dimensions, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import NewsDetails from "./src/screens/NewsDetails";
import "react-native-gesture-handler";
import Categories from "./src/screens/Categories";
import CategoryDetails from "./src/screens/CategoryDetails";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const windowWidth = Dimensions.get("window").width;

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
       <Tab.Screen
        name="Categories"
        component={Categories}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureResponseDistance: windowWidth / 2,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        >
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="NewsDetails"
            component={NewsDetails}
            options={{
              headerTransparent: true,
              headerTintColor: "#fff",
              headerTitle: "",
              headerStyle: {
                backgroundColor: "transparent",
              },
            }}
          />
           <Stack.Screen
            name="CategoryDetails"
            component={CategoryDetails}
            options={{
              headerTransparent: true,
              headerTintColor: "#fff",
              headerTitle: "",
              headerStyle: {
                backgroundColor: "transparent",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
