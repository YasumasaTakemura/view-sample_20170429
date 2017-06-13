/**
 * Created by YasumasaTakemura on 2017/06/13.
 */
import React, {Component} from 'react';
import {accounting} from 'accounting';
import {w, h} from '../../../componets/shared_components/shared_components'


export class Details extends Component {

    convertYesOrNo(val) {
        if (val === true) return 'Yes';
        else if (val === false)return 'No';
        else return val
    }

    convertCurrency(currency, price) {
        const currencyMapper = {
            usd: '$',
            jpy: '¥',
            eur: '€',
            gbp: '£',
        }

        return accounting.formatMoney(price, currencyMapper[currency], 2, ",", ".");
    }


    render() {

        const styles = {
            container: {
                marginTop: 20,
                marginRight: 40,
                height: `${h * 0.9}`
                // float:'right',
            },
            subContainer: {
                marginBottom: 20,
            },
            price: {
                backgroundColor: 'white',
                borderTop: 'solid 1px #4B5F7C',
                borderBottom: 'solid 1px #4B5F7C',
                overflow: 'auto',
                height: `${h * 0.35}`,

            },
            description: {
                backgroundColor: 'white',
                borderTop: 'solid 1px #4B5F7C',
                borderBottom: 'solid 1px #4B5F7C',
                overflow: 'auto',
                height: `${h * 1}`
            },
            badge: {
                // backgroundColor:'red',
                // width:50,
                // height:50,
                // borderRadius:'50%',
                position: 'absolute',
                right: 0,
                top: -10,
                textAlign: 'center',
            },
        };

        return <div style={styles.container}>
            <Price styles={styles}
                   convertYesOrNo={this.convertYesOrNo}
                   convertCurrency={this.convertCurrency}
                   {...this.props}/>
            <Description styles={styles} {...this.props}/>

        </div>
    }

}

const Price = (props)=> {
    const {app, convertYesOrNo, convertCurrency} = props;
    const price = app.price;
    const currency = price.currency;
    const spot = price.spot;
    const subscription = price.subscription;
    const transferFee = price.transferFee;
    const monthly = price.monthly;
    const discount = price.discount;
    const refund = price.refund;
    const onSale = price.onSale;
    const campaign = price.campaign;
    const c_spot = campaign.spot;
    const c_condition = campaign.condition;
    const c_from = campaign.from;
    const c_to = campaign.to;
    const c_monthly = campaign.monthly;
    const c_subscription = campaign.subscription;
    const c_discount = campaign.discount;
    const c_reund = campaign.refund;

    return <div style={props.styles.subContainer}>

        <div style={{
            position: 'relative',
            fontWeight: 500,
            fontSize: 18,
        }}>Price<OnSaleBudge {...props}/></div>

        <div style={props.styles.price}>

            <table>
                <tbody>
                <tr>
                    <td>Price</td>
                    <td>{convertCurrency(currency, spot)}</td>
                </tr>
                <tr>
                    <td>Subscribe</td>
                    <td>{convertYesOrNo(subscription)}</td>
                </tr>
                <tr>
                    <td>Monthly</td>
                    <td>{convertCurrency(monthly)}</td>
                </tr>
                <tr>
                    <td>T/Fee</td>
                    <td>{convertYesOrNo(transferFee)}</td>
                </tr>

                <tr>
                    <td>Discount</td>
                    <td>{convertYesOrNo(discount)}</td>
                </tr>
                <tr>
                    <td>refund</td>
                    <td>{convertYesOrNo(refund)}</td>
                </tr>
                <tr>
                    <td>onSale</td>
                    <td>{convertYesOrNo(onSale)}</td>
                </tr>


                </tbody>
            </table>
        </div>

    </div>
};

const OnSaleBudge = (props)=> {
    const {styles} = props
    return <span style={styles.badge}>
       <img style={{width: 60, height: 60}} src="http://graphichive.net/uploaded/fordesigner/1313333402.jpg"/>
    </span>
}

const Description = (props)=> {
    return <div style={props.styles.subContainer}>
        <div style={{
            fontWeight: 500,
            fontSize: 18,
        }}>Description</div>
        <div style={props.styles.description}>{props.app.description}</div>
    </div>
};