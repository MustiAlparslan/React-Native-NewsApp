import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

const CategoryDetails = () => {
  const { params } = useRoute();

  return (
    <View>
      <Text>Category details</Text>
    </View>
  );
};

export default CategoryDetails;
