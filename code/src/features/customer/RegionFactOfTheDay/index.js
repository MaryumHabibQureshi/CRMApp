//RegionFactOfTheDay.js
import React, { useEffect } from "react";
import { Keyboard, View, Button, Text } from "react-native";
import { useListRegions } from "../hooks";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

const regions = useListRegions();

const onSubmit = (seconds) => {
  Keyboard.dismiss();
  const schedulingOptions = {
    content: {
      title: `Your Region Fact of the day is ${
        regions[Math.floor(Math.random() * regions.length)]
      }`,
      body: "Open the app to read more about your region of the day!",
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: "blue",
    },
    trigger: {
      seconds: seconds,
    },
  };
  // Notifications show only when app is not active.
  // (ie. another app being used or device's screen is locked)
  Notifications.scheduleNotificationAsync(schedulingOptions);
};

const handleNotification = () => {
  console.warn("Your notification ran, but won`t show up in the app!");
};

const askNotification = async () => {
  // We need to ask for Notification permissions for ios devices
  const { status } = await Notifications.requestPermissionsAsync();
  if (Constants.isDevice && status === "granted") {
    console.log("Notification permissions granted.");
  }
};

const RegionFactOfTheDay = () => {
  useEffect(() => {
    askNotification();

    const listener =
      Notifications.addNotificationReceivedListener(handleNotification);
    return () => listener.remove();
  }, []);

  return (
    <View>
      <Text>Press the button to get your very own region fact of the day!</Text>

      <Button onPress={() => onSubmit(5)} title="Schedule" />
    </View>
  );
};

export default RegionFactOfTheDay;
