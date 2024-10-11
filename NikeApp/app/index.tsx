import {  View, StyleSheet, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import product from "@/assets/data/product";
export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.item} >
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="dark" translucent={true} hidden={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, 
  },
  image: {
    width: "100%", 
    aspectRatio: 1, 
    borderRadius: 10, 
  },
  item: {
    flex: 1, // This will make the item take up equal space in the row
    margin: 10, // Space between grid items
  }

});