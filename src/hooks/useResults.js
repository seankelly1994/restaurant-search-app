import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (e) {
            setErrorMessage('Something went wrong');
        }
    }

    // BAD CODE
    // searchApi('pasta'); -- creates an infinite loop by causing it to re render
    // use the useEffect hook, when you only want to run code once
    useEffect(() => {
        searchApi('pizza');
    }, []);

    return [searchApi, results, errorMessage];
};