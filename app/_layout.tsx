import { tokenCache } from "@/cache";
import InitialLayout from "@/components/InitialLayout";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey){
  throw new Error("Missing publishable key!");
  
}

export default function RootLayout() {

  return(
     <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}> 
      <ClerkLoaded>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <InitialLayout/>
        </SafeAreaView>
      </SafeAreaProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
