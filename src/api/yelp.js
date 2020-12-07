import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer fyQ7t0rr7m-04Sx5qbPyEoAVJS_F4N9Yoj8aHLQRZdFICF42NH87yn2X833cGJfiyvOCfFF5zToE-X0Ms2l-Yq9o2z4thtelWDgkTIqjJFnnvlagLuCTomrXRXvMX3Yx'
    }
});

// Client ID
// GTpqXV3a5-Y_KoaJX1rBCA