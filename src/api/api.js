/**
 * Created by YasumasaTakemura on 2017/06/22.
 */
import axios from 'axios'

class APIEndpoint {
    constructor(){
        this.domain = 'https://my-app-20170621.appspot.com/api/get';
        this.version = 'v1';
    };

    getData(){
        axios.get()
    }

}