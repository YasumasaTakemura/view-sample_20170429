/**
 * Created by YasumasaTakemura on 2017/06/14.
 */
import axios from 'axios'
import {accounting} from 'accounting';

export const w = window.innerWidth;
export const h = window.innerHeight;


export default class Utils {

    countStars(reviews) {
        let sum_start = 0;
        for (let review of reviews) {
            sum_start += review.stars
        }
        return sum_start / reviews.length;

    }

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

}