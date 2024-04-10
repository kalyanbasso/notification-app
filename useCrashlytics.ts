import crashlytics from "@react-native-firebase/crashlytics";
import { useEffect } from "react";

export function useCrashlytics() {
  useEffect(() => {
    crashlytics().setCrashlyticsCollectionEnabled(true);
    console.log(crashlytics().isCrashlyticsCollectionEnabled);
    console.log("Crashlytics enabled");
  }, []);

  return {
    crashlytics: crashlytics(),
  };
}
