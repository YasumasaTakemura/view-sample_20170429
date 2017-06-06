/**
 * Created by YasumasaTakemura on 2017/05/29.
 */
import React, {Component} from 'react';
import Moment from 'moment'

let moment = new Moment()
let JP_formatForList = "YYYY年MM月DD日 HH:mm"


let style={
    root:{},
    container:{
        backgroundColor:'gray',
        borderRadius:'5px',
        border:'solid 1px black'
    },
    icon:{},
    username:{},
    timestamp:{},
    title:{},
    deadline:{},
}

export default class OfferBoard extends Component{

    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    timestamp:moment.format(JP_formatForList),
                    username:'jake',
                    country:'US',
                    state:'regular',
                    spot_price:'$100.00',
                    subscribe:'$10.00',
                    deadline:'2017/06/10',
                    description:'this is a test description',
                    response:{username:'test_user',password:'my_password',timestamp:moment.format(JP_formatForList)},
                    title:'here is a title',
                    skills:['Python','JS'],

                }, {
                    timestamp:moment.format(JP_formatForList),
                    username:'jake',
                    country:'US',
                    state:'regular',
                    spot_price:'$100.00',
                    subscribe:'$10.00',
                    deadline:'2017/06/10',
                    description:'this is a test description',
                    response:{username:'test_user',password:'my_password',timestamp:moment.format(JP_formatForList)},
                    title:'here is a title',
                    skills:['Python','JS'],

                }, {
                    timestamp:moment.format(JP_formatForList),
                    username:'jake',
                    country:'US',
                    state:'regular',
                    spot_price:'$100.00',
                    subscribe:'$10.00',
                    deadline:'2017/06/10',
                    description:'this is a test description',
                    response:{username:'test_user',password:'my_password',timestamp:moment.format(JP_formatForList)},
                    title:'here is a title',
                    skills:['Python','JS'],

                }, {
                    timestamp:moment.format(JP_formatForList),
                    username:'jake',
                    country:'US',
                    state:'regular',
                    spot_price:'$100.00',
                    subscribe:'$10.00',
                    deadline:'2017/06/10',
                    description:'this is a test description',
                    response:{username:'test_user',password:'my_password',timestamp:moment.format(JP_formatForList)},
                    title:'here is a title',
                    skills:['Python','JS'],

                }, {
                    timestamp:moment.format(JP_formatForList),
                    username:'jake',
                    country:'US',
                    state:'regular',
                    spot_price:'$100.00',
                    subscribe:'$10.00',
                    deadline:'2017/06/10',
                    description:'this is a test description',
                    response:{username:'test_user',password:'my_password',timestamp:moment.format(JP_formatForList)},
                    title:'here is a title',
                    skills:['Python','JS'],

                }
            ]

        }
    }




    render(){
        return(
            <ul style={style.root}>
                {this.state.data.map((item)=><li><JobOfferListItem item={item}/></li>)}
            </ul>

        )
    }
}

let JobOfferListItem = (props)=>{
    let {item} = props;

    return <div style={style.container}>
        <div style={style.icon}>{item.state}</div>
        <div style={style.icon}>{item.username}</div>
        <div style={style.icon}>{item.timestamp}</div>
        <div style={style.icon}>{item.title}</div>
        <div style={style.icon}>{item.deadline}</div>
    </div>
}
