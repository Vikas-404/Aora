import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        {/* Added scrollview as it would be easier to scroll for smaller devices user as the content may get out of their screen and height 100% allows us to make the whole screen scrollable*/}

        {/* Logo and Card Image */}
        <View className="w-full items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px}"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          {/* Text & Button*/}
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image 
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
              />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovation: Embark on a journey of limitless exploration with Aora</Text>
          <CustomButton></CustomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
