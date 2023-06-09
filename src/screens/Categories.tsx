import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Category from "../components/categories/category";

const Categories = () => {
  return (
    <ScrollView style={{ flex: 1}}>
      <View style={styles.container}>
        <Category title="Bitcoin" icon="bitcoin" />
        <Category title="Economy" icon="economy" />
        <Category title="Word" icon="word" />
        <Category title="Sports" icon="sports" />
        <Category title="Technology" icon="technology" />
        <Category title="Science" icon="science" />

        <Category title="Healthy" icon="healthy" />
        <Category title="Politics" icon="politics" />
        <Category title="Media" icon="media" />
        <Category title="Magazine" icon="magazine" />
        <Category title="Education" icon="education" />
        <Category title="Cars" icon="car" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 4,
    marginBottom: 80
  },
});

export default Categories;
