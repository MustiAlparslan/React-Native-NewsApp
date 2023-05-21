import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import useWindowSize from "../../hooks/useWindowSize";
import { dateFormat } from "../../utils/dateFormat";
import { DATA } from "../../types";

type Props = {
  item: DATA;
};

const CategoryItem: React.FC<Props> = ({ item }) => {
  const { width } = useWindowSize();
  return (
    <View style={styles.container}>
      <View
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: "hidden",
          width: width - 20,
          height: 250,
        }}
      >
        <ImageBackground
          source={{
            uri:
              item.urlToImage ||
              "https://redgardencicekcilik.com/cicekslider.gif",
          }}
          resizeMode="cover"
          imageStyle={{
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ccc",
          }}
        />
      </View>
      <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
        <View
          style={{
            marginBottom: 5,
            borderBottomColor: "#eee",
            paddingBottom: 5,
            borderBottomWidth: 1,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600" }}>{item.title}</Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 14, fontWeight: "500" }}>
            {item.description}
          </Text>
        </View>
        <View>
          <Text>{item.content}</Text>
        </View>
        <View style={{ paddingBottom: 10, paddingTop: 25 }}>
          <Text style={styles.dateText}>
            {dateFormat(item.publishedAt, false)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 20,
  },
  dateText: {
    color: "#0008",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "right",
  },
});
export default CategoryItem;
