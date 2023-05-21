import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import useWindowSize from "../../hooks/useWindowSize";
import { PageType } from "../../utils/pages";

type Props = {
  item: {
    author: string;
    title: string;
    urlToImage: string;
  };
  height: number;
};

type RootStackParamList = {
  NewsDetails: { details: object };
};

type navigationProp = StackNavigationProp<RootStackParamList, PageType.NEWS_DETAILS>;


const NewsItem: React.FC<Props> = ({ item, height}) => {
  const navigation = useNavigation<navigationProp>();
  const {width} = useWindowSize();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(PageType.NEWS_DETAILS, {
          details: item,
        })
      }
      style={{...styles.container, height: height}}
    >
      <Image
        style={{ borderRadius: 10, width: width - 30, height: height, backgroundColor: "#ccc", }}
        source={{ uri: item.urlToImage }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          height: 50,
          justifyContent: "center",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingHorizontal: 15,
          backgroundColor: "rgba(0,0,0, 0.6)",
          width: "100%",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 14 }}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    position: "relative",
  },
});

export default NewsItem;
