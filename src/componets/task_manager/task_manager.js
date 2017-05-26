/**
 * Created by YasumasaTakemura on 2017/04/30.
 */
import React, {Component} from 'react';
import axios from 'axios'
import Modal from 'react-modal'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {Motion, spring} from 'react-motion'
import SearchInput, {createFilter} from 'react-search-input'
import './task_manager.css'

export class GroupSelector extends Component {

    render() {
        return <div>
            <Select
                name="group-selector"
                value="one"
                options={this.props.options}
                onChange={() => this.props.logChange()}/>
        </div>

    }
}
