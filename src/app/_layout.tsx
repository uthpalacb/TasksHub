import * as Notifications from 'expo-notifications';
import { Stack } from 'expo-router';

// Configure notification handler so alerts appear even when the app is open
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function RootLayout() {
  return (
    <Stack>
      {/* Main tabs screen group */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* Add task screen rendered as a modal */}
      <Stack.Screen 
        name="add-task" 
        options={{ 
          title: 'Add New Task',
          presentation: 'modal' 
        }} 
      />
    </Stack>
  );
}