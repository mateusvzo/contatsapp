import { StatusBar} from "react-native";

import { Home } from "./src/home";
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";
import { Loading } from "@/components/loading";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </GestureHandlerRootView>
  );
}
