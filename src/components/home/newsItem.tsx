import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

type Props = {
  item: {
    author: string;
    title: string;
    urlToImage: string;
  };
};
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const NewsItem: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ borderRadius: 20, width: windowWidth - 30, height: 250 }}
        source={{ uri: item.urlToImage }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
  },
});

export default NewsItem;
