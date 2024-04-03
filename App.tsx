import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { usePushNotifications } from "./usePushNotification";
import analytics from "@react-native-firebase/analytics";

analytics().setAnalyticsCollectionEnabled(true);

analytics()
  .logEvent("app_opened")
  .then(() => {
    console.log("event logged successfully");
  });

export default function App() {
  const { expoPushToken, notification } = usePushNotifications();

  const data = JSON.stringify(notification?.request.content, null, 2);

  const handlePressButton = async () => {
    await analytics()
      .logSelectContent({
        content_type: "button",
        item_id: "button-1",
      })
      .then(() => {
        console.log("event logged successfully");
      });
    console.log("Button pressed");
  };

  console.log("expoPushToken", expoPushToken);

  return (
    <View style={styles.container}>
      <Text>Expo Push Token: {expoPushToken?.data}</Text>
      <Text>{data}</Text>
      <Button title="Press me" onPress={handlePressButton} />
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
