import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            <Text>We have found {results.length} results</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
});

export default SearchScreen;