import messaging from "@react-native-firebase/messaging";
import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";

async function requestUserPermission() {
  try {
    let deviceToken = null;
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      deviceToken = messaging().getToken();
    }
    return deviceToken;
  } catch (error) {
    console.error("Error requesting permission:", error);
    return null;
  }
}

export function useFcmPushNotification() {
  const [deviceToken, setDeviceToken] = useState<string | null>(null);
  useEffect(() => {
    requestUserPermission().then((token) => {
      setDeviceToken(token);
    });

    // Set up the notification handler for the app
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });

    // Handle push notifications when the app is in the background
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
      const notification = {
        title: remoteMessage.notification?.title,
        body: remoteMessage.notification?.body,
        data: remoteMessage.data, // optional data payload
      };

      // Schedule the notification with a null trigger to show immediately
      await Notifications.scheduleNotificationAsync({
        content: notification,
        trigger: null,
      });
    });

    // Handle push notifications when the app is in the foreground
    const handlePushNotification = async (remoteMessage: any) => {
      const notification = {
        title: remoteMessage.notification?.title,
        body: remoteMessage.notification?.body,
        data: remoteMessage.data, // optional data payload
      };

      await Notifications.scheduleNotificationAsync({
        content: notification,
        trigger: null,
      });
    };

    const unsubscribe = messaging().onMessage(handlePushNotification);

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    deviceToken,
  };
}
