import { POST, URL ,GET}from '../constants'
import axios from 'axios';

export function generateRequest(method, url, options={}, headers={}) {
    return {
        method: method,
        url: `${URL}/${url}`,
        headers: {
            'Content-Type':'application/json',
            ...headers
        },
        ...options
    }
}

export function getMatchesBySportService(sport){

    var config = generateRequest(GET, `match?sport=${sport}` , {}, {});
    return axios(config)
    .then( response => response)
    .catch((errorMessage) => {
        return errorMessage
    });
}

export function generateMatchesResultService(){
    var config = generateRequest(GET, `match/update` , {}, {});
    return axios(config)
    .then( response => response)
    .catch((errorMessage) => {
        return errorMessage
    });
}

export function refreshMatchesService (){
    var config = generateRequest(GET, `match/refresh` , {}, {});
    return axios(config)
    .then( response => response)
    .catch((errorMessage) => {
        return errorMessage
    });
}