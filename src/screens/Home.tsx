import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import {
  GET_TRENDING_TOPICS,
  GET_NEWS_BY_CHANNEL,
} from "../utils/api/requests";
import NewsSection from "../components/home/NewsSection";
import { useCategoryStore } from "../stores/categories";

const Home = () => {
  const { news, bbc, cnn, nbc, setNews, setBBC, setCNN, setNBC } =
    useCategoryStore();

  const getTrendingTopics = async () => {
    const RESPONSE = await GET_TRENDING_TOPICS();
    if (RESPONSE.status === "ok") setNews(RESPONSE?.articles);
  };

  const getBBCNews = async () => {
    const RESPONSE = await GET_NEWS_BY_CHANNEL("bbc-news");
    if (RESPONSE.status === "ok") setBBC(RESPONSE?.articles);
  };

  const getCNNNews = async () => {
    const RESPONSE = await GET_NEWS_BY_CHANNEL("CNN");
    if (RESPONSE.status === "ok") setCNN(RESPONSE?.articles);
  };

  const getNBCNews = async () => {
    const RESPONSE = await GET_NEWS_BY_CHANNEL("nbc-news");
    if (RESPONSE.status === "ok") setNBC(RESPONSE?.articles);
  };

  useEffect(() => {
    getTrendingTopics();
    getBBCNews();
    getCNNNews();
    getNBCNews();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{flex: 1, marginBottom: 80}}>
        {/* Trending Topics */}
        <NewsSection
          title={"Trending Topics"}
          titleColor="#274472"
          titleWeight="bold"
          titleSize={21}
          data={news}
          useDefaultHeight={true}
        />

        {/* BBC */}
        <NewsSection title={"BBC News"} titleSize={16} data={bbc} />

        {/* CNN */}
        <NewsSection title={"CNN"} titleSize={16} data={cnn} />

        {/* NBC */}
        <NewsSection title={"NBC"} titleSize={16} data={nbc} />
      </View>
    </ScrollView>
  );
};

export default Home;
