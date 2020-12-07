import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data)
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    
    return (
        <View>
            <Text style={styles.headerStyle}>{result.name}</Text>
            <View style={styles.descriptionStyle}>
                <Text>Phone: {result.display_phone}</Text>
                <Text>Review Count: {result.review_count}</Text>
                <Text>Rating: {result.rating}</Text>
            </View>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.imageStyle} source={{ uri: item }}/>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 200,
        marginBottom: 5,
        marginLeft: 15
    },
    headerStyle: {
        fontSize: 20,
        marginTop: 5,
        marginLeft: 15,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    descriptionStyle: {
        fontSize: 16,
        marginBottom: 5,
        marginLeft: 15
    }
});

export default ResultsShowScreen;