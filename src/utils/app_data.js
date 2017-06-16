/**
 * Created by YasumasaTakemura on 2017/06/14.
 */
import axios from 'axios'
export class GetAppData{

    getAppIcon(app_id){
    return 'https://image.flaticon.com/icons/svg/118/118793.svg'
    }

    getRanking(ranking_name) {
        const endpoint = `https://sample.com/${ranking_name}`;
        axios.get(endpoint).then()
    }

    getAppData(app_id) {
        const endpoint = ''
        const params= {app_id:app_id}
        axios.get(endpoint,params);
    }

}