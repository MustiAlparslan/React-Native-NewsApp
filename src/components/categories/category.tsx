import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
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
} from "../../icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import useWindowSize from "../../hooks/useWindowSize";
import { PageType } from "../../utils/pages";
import { CategoryType } from "../../types";

type Props = {
  icon: string;
  title: string;
};
type navigationProps = {
  CategoryDetails: { title: string };
};
type navigationProp = StackNavigationProp<
  navigationProps,
  PageType.CATEGORY_DETAILS
>;

const Category: React.FC<Props> = ({ title, icon }) => {
  const navigation = useNavigation<navigationProp>();
  const { width } = useWindowSize();

  const selectedCategory = (icon: string) => {
    switch (icon.toLowerCase()) {
      case CategoryType.BITCOIN:
        return BITCOIN_ICON;
      case CategoryType.ECONOMY:
        return ECONOMY_ICON;
      case CategoryType.WORD:
        return WORD_ICON;
      case CategoryType.SPORTS:
        return SPORTS_ICON;
      case CategoryType.TECHNOLOGY:
        return TECHNOLOGY_ICON;
      case CategoryType.SCIENCE:
        return SCIENCE_ICON;
      case CategoryType.HEALTHY:
        return HEALTHY_ICON;
      case CategoryType.POLITICS:
        return POLITICS_ICON;
      case CategoryType.MEDIA:
        return MEDIA_ICON;
      case CategoryType.MAGAZINE:
        return MAGAZINE_ICON;
      case CategoryType.EDUCATION:
        return EDUCATION_ICON;
      case CategoryType.CAR:
        return CAR_ICON;
      default:
        return "";
    }
  };

  return (
    <TouchableOpacity
      style={{ marginBottom: 20 }}
      onPress={() =>
        navigation.navigate(PageType.CATEGORY_DETAILS, { title: title })
      }
    >
      <ImageBackground
        resizeMode="cover"
        imageStyle={{ width: "100%", opacity: 0.9, borderRadius: 12 }}
        source={{ uri: selectedCategory(icon) }}
        style={{ width: width / 2 - 10, ...styles.imageBackground }}
      >
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: 135,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontFamily: "Roboto",
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Category;
