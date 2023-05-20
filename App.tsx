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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Fragment } from "react";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const windowWidth = Dimensions.get("window").width;

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 25,
          right: 20,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 80,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Fragment>
              <Icon name="home" color={focused ? "#274472" : color} size={26} />
              <Text
                style={{fontWeight: '500', fontSize: 12, color: focused ? "#274472" : color }}
              >
                Home
              </Text>
            </Fragment>
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Fragment>
              <Icon
                name="card-multiple"
                color={focused ? "#274472" : color}
                size={26}
              />
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 12,
                  color: focused ? "#274472" : color,
                }}
              >
                Categories
              </Text>
            </Fragment>
          ),
        }}
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
            options={({ route }) => ({
              gestureEnabled: false,
              headerShadowVisible: true,
              headerTintColor: "#000",
              headerTitle: route.params.title,
              headerStyle: {
                backgroundColor: "transparent",
              },
            })}
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
  shadow: {
    shadowColor: "#274472",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
