import { View, Text, StyleSheet, Button } from "react-native";
import { usePushNotifications } from "../../../usePushNotification";

export function PushNotificationPoc() {
  const { expoPushToken, notification } = usePushNotifications();

  const data = JSON.stringify(notification?.request.content, null, 2);

  console.log("expoPushToken", expoPushToken);

  return (
    <View style={styles.container}>
      <Text>Push Notification POC</Text>

      <Text>Expo Push Token: {expoPushToken?.data}</Text>
      <Text>{data}</Text>

      <Button title="Send Push Notification" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    gap: 10,
  },
});
