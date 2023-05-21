import { useRoute, RouteProp } from "@react-navigation/native";
import React from "react";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { dateFormat } from "../utils/dateFormat";
import useWindowSize from "../hooks/useWindowSize";
import { DATA } from "../types";
import { PageType } from "../utils/pages";

type RouteParams = {
  NewsDetails: {
    details: DATA;
  };
};

const NewsDetails = () => {
  const { params } = useRoute<RouteProp<RouteParams, PageType.NEWS_DETAILS>>();
  const { width } = useWindowSize();

  return (
    <View>
      <TouchableHighlight onPress={() => Linking.openURL(params.details.url)}>
        <Image
          style={{ width: width, height: 250 }}
          source={{ uri: params.details.urlToImage }}
        />
      </TouchableHighlight>
      <ScrollView style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Text style={styles.newsBox}>News</Text>
          <Text style={{ color: "#BDC3CB", fontSize: 14, fontWeight: "500" }}>
            {dateFormat(params.details.publishedAt)}
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#3333",
            paddingBottom: 10,
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            {params.details.title}
          </Text>
        </View>

        <View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: "500" }}>
              {params.details.description}
            </Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text>{params.details.content}</Text>
          </View>

          {params.details.author && (
            <View>
              <Text style={{ fontSize: 12, color: "#BDC3CB" }}>
                Source - {params.details.author}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  newsBox: {
    textAlign: "center",
    fontWeight: "600",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
    backgroundColor: "#0E86D4",
    color: "#fff",
    width: 50,
  },
});
export default NewsDetails;
