import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = () => {
  return (
    <TouchableOpacity>
      <Text className="bg-secondary rounded-xl min-h-[62px] justify-center items-center">
        CustomButton
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
