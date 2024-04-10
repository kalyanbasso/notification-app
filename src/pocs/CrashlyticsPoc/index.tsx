import { Button, Text, View, StyleSheet } from "react-native";
import { useCrashlytics } from "../../../useCrashlytics";

export function CrashlyticsPoc() {
  const { crashlytics } = useCrashlytics();

  async function onSignIn(user: any) {
    crashlytics.log("User signed in.");
    await Promise.all([
      crashlytics.setUserId(user.uid),
      crashlytics.setAttribute("credits", String(user.credits)),
      crashlytics
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

  return (
    <View style={styles.container}>
      <Text>Crashlytics POC</Text>
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
      <Button title="Test Crash" onPress={() => crashlytics.crash()} />
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
