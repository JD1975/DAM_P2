import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const ProductsItems = ({ product }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>{product.name}</Text>
            <Text style={styles.textDescription}>{product.description}</Text>
            <Text style={styles.textPrice}>{product.price}</Text>
            <View style={styles.containerImage}>
                <Image source={{ uri: product.url }} style={styles.image} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    textDescription: {
        fontSize: 16,
    },
    textPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    containerImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        overflow: 'hidden', // Para recortar la imagen si es más grande que el contenedor
        alignItems: 'center', // Para centrar la imagen horizontalmente
        justifyContent: 'center', // Para centrar la imagen verticalmente
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Para que la imagen se ajuste correctamente al contenedor
    },
});

export default ProductsItems;
