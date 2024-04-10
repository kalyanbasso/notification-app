import analytics from "@react-native-firebase/analytics";
import { useEffect } from "react";

export function useAnalytics() {
  useEffect(() => {
    analytics().setAnalyticsCollectionEnabled(true);
    analytics().logEvent("app_opened");
    console.log("Analytics enabled");
  }, []);

  return {
    analytics: analytics(),
  };
}
