import React, { FunctionComponent } from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { BasicExample } from "./screens/BasicExample";

export const App: FunctionComponent = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BasicExample />
        {/* <FlatListExample /> */}
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default App;
