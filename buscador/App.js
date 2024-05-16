import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from './componentes/SearchBar.js';
import ProductsList from './componentes/ProductList.js';
import products from './data';

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredProducts(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          value={search}
          onChangeText={(text) => handleSearch(text)}
          placeholder="Buscar productos"
        />
      </View>
      <View style={styles.productsContainer}>
        {search.length > 0 && filteredProducts.length > 0 ? (
          <ProductsList products={filteredProducts} />
        ) : search.length > 0 ? (
          <Text style={styles.noResultsText}>No se encontraron resultados</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginTop: 20,
  },
  searchContainer: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  productsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  noResultsText: {
    fontSize: 18,
    textAlign: 'center',
    padding: 20,
    color: '#555',
  },
});

export default App;
