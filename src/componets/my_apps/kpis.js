/**
 * Created by YasumasaTakemura on 2017/06/14.
 */
import React, {Component} from 'react';
import Utils from '../../utils/utils';

const utils = new Utils();

export default class KPIs extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    calculate() {

    }

    aggregate(apps) {
        let sum_of_month = 0;
        let sum_of_t_fee = 0;
        let sum_of_price = 0;


        for (const app of apps) {

            for (const item of app.month) {
                sum_of_month += item;
            }

            for (const item of app.t_fee) {
                sum_of_t_fee += item;
            }

            for (const item of app.price) {
                sum_of_price += item;
            }
        }

        return {
            month: sum_of_month,
            t_fee: sum_of_t_fee,
            price: sum_of_price
        }
    }


    render() {
        const {apps, currency, styles} = this.props;

        return <div style={styles}>
            <Row apps={apps} currency={currency} aggregate={this.aggregate}/>
        </div>
    }

}

const Row = (props)=> {
    const {apps, aggregate, currency} = props;
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            margin: '0 0 20px 0',
            borderBottom: 'solid 1px gray',
            color: 'white'
        },
        icon: {},
        img: {
            width: 40,
            height: 40,
        },
        title: {},
        price: {},
        monthly: {},
        t_fee: {},
        stop: {},
        detail: {},
        share: {},
        button: {}
    };


    let sums = aggregate(apps);

    return <div style={styles.container}>

        <div style={styles.title}>
            <div>Date</div>
            <div>This Month</div>
        </div>
        <div style={styles.price}>
            <div>Cost</div>
            <div>{utils.convertCurrency(currency, sums.price)}</div>
        </div>
        <div style={styles.monthly}>
            <div>monthly</div>
            <div>{utils.convertCurrency(currency, sums.month)}</div>
        </div>
        <div style={styles.t_fee}>
            <div>t/fee</div>
            <div>{utils.convertCurrency(currency, sums.t_fee)}</div>
        </div>

    </div>
};
