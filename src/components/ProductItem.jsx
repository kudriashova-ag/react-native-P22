import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductItem = ({product}) => {
    return (
        <View style={styles.container}>
            <Text style={[
                styles.name,
                {
                    textDecorationLine: product.buy ? 'line-through' : 'none',
                    color: product.buy ? 'gray' : 'red'
                }
            ]}>{product.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        // Android
        elevation: 4,
        // iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3
    },
    name: {
        fontSize: 18
    }
})

export default ProductItem;
