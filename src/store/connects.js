/**
 * Created by YasumasaTakemura on 2017/03/31.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from '../store/actions/data'
import {TaskManager as _TaskManager} from '../containers/task_manager/task_manager'




const mapStateToProps = (state)=> {

    return {
        data: state.data,

    }
}

const mapDispatchToProps = (dispatch)=> {

    return bindActionCreators({
        getData: action.data,

    }, dispatch)
}

export const TaskManager = connect(mapStateToProps, mapDispatchToProps)(_TaskManager);




