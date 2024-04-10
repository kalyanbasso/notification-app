import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { CrashlyticsPoc } from "./src/pocs/CrashlyticsPoc";
import { AnalyticsPoc } from "./src/pocs/AnalyticsPoc";
import { PushNotificationPoc } from "./src/pocs/PushNotificationPoc";

export default function App() {
  return (
    <View style={styles.container}>
      <PushNotificationPoc />

      <AnalyticsPoc />

      <CrashlyticsPoc />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 30,
    gap: 10,
  },
});
