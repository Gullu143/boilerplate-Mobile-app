import ApolloProvider from "@/middlware/ApolloProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ApolloProvider>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} /> 
    </Stack>
    </ApolloProvider>
  );
}
