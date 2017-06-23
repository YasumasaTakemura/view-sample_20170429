/**
 * Created by YasumasaTakemura on 2017/06/22.
 */
import axios from 'axios'

const domain = 'https://my-app-20170621.appspot.com/api';
const version = 'v1';

class APIEndpoint {
    constructor() {
    }

    getData() {
        const endpoint = 'get';
        const url = `${domain}/${version}/${endpoint}`;
        console.log(url)
        axios.get(url).then((data)=> {
            console.log(data);
            console.log(data.data.data);
            return data.data.data
        }
        ).catch((e)=>console.log(e))
    }

}

export default APIEndpoint