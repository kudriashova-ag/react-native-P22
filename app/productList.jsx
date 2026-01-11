import React, { useEffect, useReducer, useState } from "react";
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import ProductItem from "../src/components/ProductItem";
import productReducer from "../reducers/productReducer";
import ProductForm from "../src/components/ProductForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useStorage from "../hooks/useStorage";
import { typeProducts } from "../reducers/typeProducts";


const initialData = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    buy: false,
  },
];

const ProductList = () => {
  const [products, dispatch] = useReducer(productReducer, initialData);
  useStorage("products", products, dispatch, typeProducts.load);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={100}
      >
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductItem
              product={item}
              buyProduct={() =>
                dispatch({ type: typeProducts.buy, payload: { id: item.id } })
              }
              removeProduct={() =>
                dispatch({
                  type: typeProducts.remove,
                  payload: { id: item.id },
                })
              }
            />
          )}
        />

        <ProductForm
          addProduct={(name) =>
            dispatch({ type: typeProducts.add, payload: { name, price: 5 } })
          }
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductList;
