/**
 * Created by YasumasaTakemura on 2017/06/14.
 */
import React, {Component} from 'react';
import ScrollLock from 'react-scrolllock';
import Modal from 'react-modal';

export default class Payment extends Component {
    render() {

        const {payment} = this.props;

        const styles = {
            width: '100%',
            height: '100%',
            // backgroundColor: 'rgba(51,51,51,0.8)',
            // opacity:0.6,
            // zIndex: 110,
            position: 'absolute'
        };

        if(!payment) return null;
        return <div style={styles}>

            <div>
                {/*<ScrollLock />*/}

                <Modal
                    isOpen={payment}
                    contentLabel="Modal"
                >
                    <h1>Modal Content</h1>
                    <p>Etc.</p>
                    <input/>
                </Modal>

            </div>

        </div>
    }
}