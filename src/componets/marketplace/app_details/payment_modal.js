/**
 * Created by YasumasaTakemura on 2017/06/14.
 */
import React, {Component} from 'react';
import ScrollLock from 'react-scrolllock';
import Modal from 'react-modal';

export default class PaymentModal extends Component {
    render() {

        const {payment} = this.props;

        const styles = {
            width: '100%',
            height: '100%',
            position: 'absolute'
        };

        if (!payment) return null;
        return <div>


            {/*<ScrollLock />*/}

            <Modal
                isOpen={payment}
                contentLabel="Modal"
            >
                <h1>Modal Content</h1>
                <p>Etc.</p>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>

        </div>
    }
}