import React from "react";
import { FlatList, View } from "react-native";
import CategoryItem from "./CategoryItem";

function Categories({ active, setactive, commonCategories }) {
  return (
    <View>
      <FlatList
        data={commonCategories}
        renderItem={({ item, index }) => (
          <CategoryItem
            name={item.name}
            imageSrc={item.imageSrc}
            index={index}
            active={item.name === active}
            handlePress={() => setactive(item.name)}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.name}
      />
    </View>
  );
}

export default Categories;
