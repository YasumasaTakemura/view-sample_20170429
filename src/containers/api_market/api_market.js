/**
 * Created by YasumasaTakemura on 2017/05/29.
 */
import React, {Component} from 'react';
import Viewer from '../../componets/api_market/viewer'
import OfferBoard from '../../componets/api_market/offer_board'
import MyHistoryBoard from '../../componets/api_market/my_history_board'
import PromotionDisplay from '../../componets/api_market/promotion_display'
import {ConsoleContainerSwitcher} from '../../componets/console/console'
import {APIMarketConsole} from '../../componets/console/api_market/api_market'

export default class APIMarket extends Component {
    constructor() {
        super();
        this.state = {
            path: window.location.href.split('/').slice(-1)[0],
            open: true,
        }
    }

    toggleOpen() {
        this.setState(
            {open: !this.state.open}
        )
    }

    render() {
        return (
            <div style={style.root}>

                <div style={style.content}>
                    <div style={style.promotionDisplay}>
                        <PromotionDisplay/>
                    </div>

                    <div style={style.offerBoard}>
                        <OfferBoard/>
                    </div>

                    <div style={style.viewer}>
                        <Viewer/>
                    </div>

                    <div style={style.myHistoryBoard}>
                        <MyHistoryBoard/>
                    </div>
                </div>


                <div style={style.console}>
                    <ConsoleContainerSwitcher
                        sticky={true}
                        label={'apiMarket'}
                        toggleOpen={this.toggleOpen.bind(this)}
                        {...this.props} {...this.state}
                    />
                </div>

            </div>

        )
    }
}

let style = {
    root: {
        backgroundColor:'white'
    },
    content:{},
    promotionDisplay: {},
    offerBoard: {},
    viewer: {},
    myHistoryBoard: {},
    console: {},

}