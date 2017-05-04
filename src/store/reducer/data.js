/**
 * Created by YasumasaTakemura on 2017/04/30.
 */
import * as types from '../actions/data'


export function data(state = {} ,action) {
    switch (action.type) {

        case types.DATA:
            return {...state, ...action.state};


        default:
            return state
    }
}