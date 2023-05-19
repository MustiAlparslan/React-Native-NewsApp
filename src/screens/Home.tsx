import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import { GET_TRENDING_TOPICS, GET_BY_NAME_NEWS } from "../api/requests";
import NewsItem from "../components/home/newsItem";
import NewsSection from "../components/home/NewsSection";

const windowWidth = Dimensions.get("window").width;

const Home = () => {
  const [news, setNews] = useState([]);
  const [bbc, setBBC] = useState([]);
  const [cnn, setCNN] = useState([]);
  const [nbc, setNBC] = useState([]);

  const getTrendingTopics = async () => {
    const RESPONSE = await GET_TRENDING_TOPICS();
    if (RESPONSE.status === "ok") setNews(RESPONSE?.articles);
  };

  const getBBCNews = async () => {
    const RESPONSE = await GET_BY_NAME_NEWS("bbc-news");
    if (RESPONSE.status === "ok") setBBC(RESPONSE?.articles);
  };

  const getCNNNews = async () => {
    const RESPONSE = await GET_BY_NAME_NEWS("CNN");
    if (RESPONSE.status === "ok") setCNN(RESPONSE?.articles);
  };

  const getNBCNews = async () => {
    const RESPONSE = await GET_BY_NAME_NEWS("nbc-news");
    if (RESPONSE.status === "ok") setNBC(RESPONSE?.articles);
  };

  useEffect(() => {
    getTrendingTopics();
    getBBCNews();
    getCNNNews();
    getNBCNews();
  }, []);

  return (
    <ScrollView>
      {/* Trending Topics */}
      <NewsSection title={"Trending Topics"} titleSize={21} data={news} useDefaultHeight={true}/>

      {/* BBC */}
      <NewsSection title={"BBC News"} titleSize={16} data={bbc} />

      {/* CNN */}
      <NewsSection title={"CNN"} titleSize={16} data={cnn} />

      {/* NBC */}
      <NewsSection title={"NBC"} titleSize={16} data={nbc} />
    </ScrollView>
  );
};

export default Home;
