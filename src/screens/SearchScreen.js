import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // There are 3 options for price
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            <ScrollView>
                <ResultsList navigation={navigation} results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultsList navigation={navigation} results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultsList navigation={navigation} results={filterResultsByPrice('$$$')} title="Big Spender" />
                <ResultsList navigation={navigation} results={filterResultsByPrice('$$$$')} title="Cash Money" />
            </ScrollView>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
        </>
    );
};

const styles = StyleSheet.create({
});

export default SearchScreen;