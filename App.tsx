import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { usePushNotifications } from "./usePushNotification";

export default function App() {
  const { expoPushToken, notification } = usePushNotifications();

  const data = JSON.stringify(notification?.request.content, null, 2);

  console.log("expoPushToken", expoPushToken);

  return (
    <View style={styles.container}>
      <Text>Expo Push Token: {expoPushToken?.data}</Text>
      <Text>{data}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
