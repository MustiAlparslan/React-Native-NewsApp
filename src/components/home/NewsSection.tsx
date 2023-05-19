import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import NewsItem from "./newsItem";

type SectionProps = {
  title: string;
  titleSize: number;
  data: {
    author: string;
    title: string;
    urlToImage: string;
  }[];
  useDefaultHeight?: boolean;
  titleWeight?: string;
};

const NewsSection: React.FC<SectionProps> = ({
  title,
  titleSize,
  data,
  useDefaultHeight,
  titleWeight
}) => {
  return (
    <View style={{ marginVertical: 15, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: titleSize, marginBottom: 3, fontWeight: "500" }}>
        {title}
      </Text>
      <FlatList
        horizontal={true}
        data={data}
        pagingEnabled
        renderItem={({ item }) => (
          <NewsItem item={item} height={useDefaultHeight ? 250 : 200} />
        )}
      />
    </View>
  );
};

export default NewsSection;
