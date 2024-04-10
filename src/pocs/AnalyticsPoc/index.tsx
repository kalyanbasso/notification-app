import { Button, View, Text, StyleSheet } from "react-native";
import { useAnalytics } from "../../../useAnalytics";

export function AnalyticsPoc() {
  const { analytics } = useAnalytics();

  async function handlePressButton() {
    await analytics
      .logSelectContent({
        content_type: "button",
        item_id: "button-1",
      })
      .then(() => {
        console.log("event logged successfully");
      });
    console.log("Button pressed");
  }

  return (
    <View style={styles.container}>
      <Text>Analytics POC</Text>
      <Button title="Press me" onPress={handlePressButton} />
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
