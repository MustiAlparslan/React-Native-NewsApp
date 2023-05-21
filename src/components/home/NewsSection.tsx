import React from "react";
import { FlatList, Text, View } from "react-native";
import NewsItem from "./newsItem";

type SectionProps = {
  title: string;
  titleSize: number;
  titleColor?: string;
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
  titleColor,
  data,
  useDefaultHeight,
  titleWeight,
}) => {
  return (
    <View style={{ marginVertical: 15, paddingHorizontal: 10 }}>
      <Text
        style={{
          color: titleColor,
          fontSize: titleSize,
          marginBottom: 3,
          fontWeight: titleWeight == "bold" ? "bold" : "500",
        }}
      >
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
