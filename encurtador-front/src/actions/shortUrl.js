const axios = require('axios').default;

const baseURL = 'http://localhost:3000/';

export default function ShortUrl(url){
    axios.post(`${baseURL}saveUrl`, {
        longUrl:url,
    }).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })
}