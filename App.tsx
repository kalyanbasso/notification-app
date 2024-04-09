import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { usePushNotifications } from "./usePushNotification";
import analytics from "@react-native-firebase/analytics";

import crashlytics from "@react-native-firebase/crashlytics";
import { useEffect } from "react";

analytics().setAnalyticsCollectionEnabled(true);

analytics()
  .logEvent("app_opened")
  .then(() => {
    console.log("event logged successfully");
  });

analytics()
  .logScreenView({
    screen_name: "home",
    screen_class: "home",
  })
  .then(() => {
    console.log("event logged successfully");
  });
crashlytics().setCrashlyticsCollectionEnabled(true);
console.log(crashlytics().isCrashlyticsCollectionEnabled);

export default function App() {
  const { expoPushToken, notification } = usePushNotifications();

  const data = JSON.stringify(notification?.request.content, null, 2);

  async function onSignIn(user: any) {
    crashlytics().log("User signed in.");
    await Promise.all([
      crashlytics().setUserId(user.uid),
      crashlytics().setAttribute("credits", String(user.credits)),
      crashlytics()
        .setAttributes({
          role: "admin",
          followers: "13",
          email: user.email,
          username: user.username,
        })
        .then(() => {
          console.log("attributes set successfully");
        }),
    ]);
  }

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

  useEffect(() => {
    crashlytics().log("App mounted.");
  }, []);

  return (
    <View style={styles.container}>
      <Text>Expo Push Token: {expoPushToken?.data}</Text>
      <Text>{data}</Text>
      <Button title="Press me" onPress={handlePressButton} />
      <Button
        title="Sign In"
        onPress={() =>
          onSignIn({
            uid: "Aa0Bb1Cc2Dd3Ee4Ff5Gg6Hh7Ii8Jj9",
            username: "Joaquin Phoenix",
            email: "phoenix@example.com",
            credits: 42,
          })
        }
      />
      <Button title="Test Crash" onPress={() => crashlytics().crash()} />
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
    gap: 10,
  },
});
