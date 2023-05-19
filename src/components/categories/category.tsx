import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import {
  BITCOIN_ICON,
  CAR_ICON,
  ECONOMY_ICON,
  EDUCATION_ICON,
  HEALTHY_ICON,
  MAGAZINE_ICON,
  MEDIA_ICON,
  POLITICS_ICON,
  SCIENCE_ICON,
  SPORTS_ICON,
  TECHNOLOGY_ICON,
  WORD_ICON,
} from "../../constants/icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
  icon: string;
  title: string;
};
type navigationProps = {
    CategoryDetails: { title: string };
    
}
type navigationProp = StackNavigationProp<navigationProps, "CategoryDetails">;

const windowWidth = Dimensions.get("window").width;

const Category: React.FC<Props> = ({ title, icon }) => {
    const navigation = useNavigation<navigationProp>()
  const selectedCategory = (icon: string) => {
    switch (icon.toLowerCase()) {
      case "bitcoin":
        return BITCOIN_ICON;
      case "economy":
        return ECONOMY_ICON;
      case "word":
        return WORD_ICON;
      case "sports":
        return SPORTS_ICON;
      case "technology":
        return TECHNOLOGY_ICON;
      case "science":
        return SCIENCE_ICON;
      case "healthy":
        return HEALTHY_ICON;
      case "politics":
        return POLITICS_ICON;
      case "media":
        return MEDIA_ICON;
      case "magazine":
        return MAGAZINE_ICON;
      case "education":
        return EDUCATION_ICON;
      case "car":
        return CAR_ICON;
      default:
        return "";
    }
  };

  return (
    <TouchableHighlight onPress={() => navigation.navigate("CategoryDetails",{title: title})}>
      <ImageBackground
        resizeMode="cover"
        imageStyle={{ width: "100%", opacity: 0.9, borderRadius: 12 }}
        source={{ uri: selectedCategory(icon) }}
        style={{
          width: (windowWidth / 2) - 10,
          height: 135,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
          borderRadius: 12,
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Roboto",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
      </ImageBackground>
    </TouchableHighlight>
  );
};

export default Category;
