import * as Notifications from "expo-notifications";

export async function setLocalNotification() {
  await Notifications.cancelAllScheduledNotificationsAsync();
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(20);
  tomorrow.setMinutes(0);

  try {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldPlaySound: true,
        shouldSetBadge: false,
        shouldShowAlert: true,
      }),
    });
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Complete a quiz",
        body: "Don't forget to complete a quiz for today 😀",
      },
      trigger: {
        seconds: Math.round(tomorrow.getTime() / 1000),
        repeats: true,
      },
    });
  } catch (e) {
    console.warn(e);
  }
}
