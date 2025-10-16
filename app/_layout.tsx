import { Stack } from "expo-router";
const isLoggedIn = false;
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Protected guard={false}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={true}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}
