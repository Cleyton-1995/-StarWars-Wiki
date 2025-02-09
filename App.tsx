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

const Stack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
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
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DatailScreen" component={DatailScreen} />
            <Stack.Screen name="Favorites" component={Favorites} />
            <Stack.Screen name="Search" component={Search} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>

      <View style={{top: getStatusBarHeight() + 17 }}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={theme.colors.dark}
        />
      </View>
    </>
  );
}
