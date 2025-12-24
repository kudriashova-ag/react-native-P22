import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductItem from '../src/components/ProductItem';

const initialData = [
    {
        id: 1,
        name: 'Product 1',
        price: 10.99,
        buy: false
    }
]

const ProductList = () => {
    const [products, setProducts] = useState(initialData);

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item })=> <ProductItem product={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductList;
