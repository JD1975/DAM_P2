import React from 'react';
import { FlatList } from "react-native";
import ProductsItems from "./ProductsItems.js";

const ProductsList = ({ products }) => {
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id} 
            renderItem={({ item }) => {
                return <ProductsItems product={item} />; 
            }}
        />
    );
}

export default ProductsList;
