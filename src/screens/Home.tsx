import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { GET_NEWS } from "../api/requests";
import NewsItem from "../components/home/newsItem";

const Home = () => {
  const [news, setNews] = useState([]);

  const handle = async () => {
    const RESPONSE = await GET_NEWS();
    if (RESPONSE.status === "ok") setNews(RESPONSE?.articles);
  };

  useEffect(() => {
    handle();
  }, []);

  return (
    <View>
        <Text>Trending Topics</Text>
      <FlatList
        horizontal={true}
        data={news}
        renderItem={({ item }) => <NewsItem item={item} />}
      />
    </View>
  );
};

export default Home;
