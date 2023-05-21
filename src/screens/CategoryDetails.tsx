import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { GET_CATEGORY_BY_NAME } from "../utils/api/requests";
import CategoryItem from "../components/categories/categoryItem";
import { FlatList } from "react-native-gesture-handler";
import { PageType } from "../utils/pages";

type RouteParams = {
  CategoryDetails: {
    title: string;
  };
};

const CategoryDetails = () => {
  const { params } = useRoute<RouteProp<RouteParams, PageType.CATEGORY_DETAILS>>();
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategoryByName = async () => {
    setLoading(true);
    const RESPONSE = await GET_CATEGORY_BY_NAME(params?.title.toLowerCase())
    if (RESPONSE.status === "ok") setCategoryData(RESPONSE?.articles);
    setLoading(false);
  };


  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="small" color="#0000ff" />;
  };

  useEffect(() => {
    getCategoryByName();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CategoryItem item={item} />}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc'
  },
});

export default CategoryDetails;
