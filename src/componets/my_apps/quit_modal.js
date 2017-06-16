/**
 * Created by YasumasaTakemura on 2017/06/14.
 */
import React, {Component} from 'react';
import Modal from 'react-modal';

export default class QuitModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validate: false,
            username: 'demo'
        }
    }


    validateUsername(e) {
        console.log(e)
        if (e === this.state.username) this.setState({validate: true})
        else this.setState({validate: false})

    }

    render() {


        const {show, toggleQuitModal} = this.props;

        const styles = {
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
                position: 'absolute',
                top: '20%',
                left: '40px',
                right: '40px',
                bottom: '20%',
                border: '5px solid #ccc',
                background: '#fff',
                overflow: 'hidden',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '100px',
                width: '50%',
                height: '30%',
                margin: '0 auto'

            },
            cancel: {
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 150,
                padding: 10,
                textAlign: 'center'
            },

            quit: {
                backgroundColor: 'red',
                borderRadius: 20,
                width: 150,
                padding: 10,
                textAlign: 'center',
                margin: '0 10px 0 10px'
            },
            cantQuit: {
                backgroundColor: 'gray',
                borderRadius: 20,
                width: 150,
                padding: 10,
                textAlign: 'center',
                margin: '0 10px 0 10px'
            },
            buttonContainer: {
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: 50,
            },
            img: {
                width: 20,
                padding: 20,
            }
        }

        return <Modal
            isOpen={show}
            contentLabel="Quit"
            style={styles}
            shouldCloseOnOverlayClick={true}
        >
            <h3>Stop Subscribe your App</h3>
            <div> if you want to suspend or stop this app,please fill your username and click "stop"</div>
            <p>fill your name here</p>
            <div style={{height:20}}>
                <input style={{height:20}} onChange={(e)=>this.validateUsername(e.target.value)}/>
                <span>{this.state.validate ? <img style={styles.img}
                                                  src="https://www.2buy2.com/images/icons/other/green-outline/tick.png"/> : null}</span>
            </div>
            <div style={styles.buttonContainer}>
                {this.state.validate ?<div style={styles.quit} onClick={()=>toggleQuitModal()}>Quit</div>:
                <div style={styles.cantQuit}>Quit</div>}
                <div style={styles.cancel} onClick={()=>toggleQuitModal()}>Cancel</div>
            </div>
        </Modal>

    }
}