import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
} from "@expo-google-fonts/source-sans-pro";
import { View, ActivityIndicator, StatusBar } from "react-native";
import { SplashScreen } from "./src/screens/SplashScreen";
import { theme } from "./src/themes";
import { ThemeProvider } from "styled-components";
import { HomeScreen } from "./src/screens/HomeScreen";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { DatailScreen } from "./src/screens/DatailScreen";
import { Favorites } from "./src/screens/Favorites";
import { Search } from "./src/screens/Search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const routeIcons = {
  HomeScreen: "home-outline",
  Search: "search-outline",
  Favorites: "heart-outline",
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={routeIcons[route.name]}
            size={size}
            color={focused ? theme.colors.red : theme.colors.white}
          />
        ),
        tabBarActiveTintColor: theme.colors.red,
        tabBarInactiveTintColor: theme.colors.white,
        tabBarStyle: {
          backgroundColor: theme.colors.black,
          height: theme.metrics.px(64),
          paddingTop: theme.metrics.px(5),
          paddingBottom: theme.metrics.px(5),
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarItemStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ tabBarLabel: "Pesquisar" }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{ tabBarLabel: "Favoritos" }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          backgroundColor: "#161616",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#E60C0D" />
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={theme.colors.dark}
        />
      </View>
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="SplashScreen"
          >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="HomeScreen" component={BottomTabs} />
            <Stack.Screen name="DatailScreen" component={DatailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>

      <View style={{ top: getStatusBarHeight() + 17 }}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={theme.colors.dark}
        />
      </View>
    </>
  );
}
