/**
 * Created by YasumasaTakemura on 2017/06/14.
 */
import React, {Component} from 'react';

export default class AppList extends Component {

    render() {
        const {apps,toggleQuitModal} = this.props;

        const styles = {
            container: {
                width: '90%',
                margin: '0 auto'
            },
        };

        return <div style={styles.container}>
            {apps.map((item,index)=> <Item app={item} index={index} toggleQuitModal={toggleQuitModal}/>)}
        </div>
    }

}

const Item = (props)=> {
    const {app,toggleQuitModal,index} = props
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            margin:'0 0 20px 0',
            borderBottom:'solid 1px gray',
            backgroundColor: '',
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
    }
    return <div key={index} style={styles.container}>

        <div style={styles.icon}>
            <img style={styles.img} src="https://image.flaticon.com/icons/svg/118/118793.svg"/>
        </div>
        <div style={styles.title}>
            <div>title</div>
            <div>TITLE</div>
        </div>
        <div style={styles.price}>
            <div>price</div>
            <div>$10.00</div>
        </div>
        <div style={styles.monthly}>
            <div>monthly</div>
            <div>$5.0</div>
        </div>
        <div style={styles.t_fee}>
            <div>t/fee</div>
            <div>$3.0</div>
        </div>
        <div style={styles.button}>
            <button onClick={()=>toggleQuitModal()} style={styles.stop}>X</button>
            <button style={styles.detail}>...</button>
            <button style={styles.share}>S</button>
        </div>

    </div>
};
