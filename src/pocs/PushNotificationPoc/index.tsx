import { View, Text, StyleSheet } from "react-native";
import { usePushNotifications } from "../../../usePushNotification";
import { useFcmPushNotification } from "../../../useFcmPusNotification";

export function PushNotificationPoc() {
  const { expoPushToken, notification } = usePushNotifications();

  const { deviceToken } = useFcmPushNotification();

  const data = JSON.stringify(notification?.request.content, null, 2);

  console.log("expoPushToken: ", expoPushToken);
  console.log("deviceToken: ", deviceToken);

  return (
    <View style={styles.container}>
      <Text>Push Notification POC</Text>

      <Text>Expo Push Token: {expoPushToken?.data}</Text>
      <Text>Firebase Cloud Messaging Token: {deviceToken}</Text>
      <Text>{data ? data : "Ainda não recebeu notificação"}</Text>
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
