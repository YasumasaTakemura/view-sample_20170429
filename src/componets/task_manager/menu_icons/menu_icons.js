/**
 * Created by YasumasaTakemura on 2017/05/28.
 */
import React, {Component} from 'react';
import {Sticky} from '../../shared_components/shared_components'

export const MenuIconContainerSwitcher = (props) => {
    let {popUpState} = props;
    return popUpState?<MenuIconContainer/>:null
};


class MenuIconContainer extends Component {

    state = {
        hoverOn: '',
        hover: false,
    }

    onHover(target) {
        this.setState({
            hover: true,
            hoverOn: target
        })

    }

    offHover(target) {

        this.setState({
            hover: false,
            hoverOn: target
        })
    }

    render(target) {
        let {icons} = this.props;
        return (
            <div style={style.container} className="menu-icon-container">
                {icons.map((item) => {
                    return <MenuIconItem icon={item} state={this.state} onHover={this.onHover.bind(this)} offHover={this.offHover.bind(this)}/>
                })}
            </div>
        )
    }

}

let MenuIconItem = (props) => {
    let {icon, state,onHover,offHover} = props;
    return <div style={style.iconContainer} onMouseEnter={() => onHover(icon.label)} onMouseLeave={() => offHover(icon.label)}>
        {state.hover && icon.label === state.hoverOn? <MenuIconItemPopUpContainer content={icon.content}/> : null}
        <img style={style.icon} src={icon.img} />
    </div>
};

let MenuIconItemPopUpContainer = (props) => {
    console.log(props.content)
    return <div style={style.popup}>
        {props.content.map((item,index)=> <MenuIconItemPopUpDescription key={index} item={item}/>)}
    </div>
};

let MenuIconItemPopUpDescription = (props) => {
    let {read,description,timestamp,key} = props.item;
        if(!read)return <div key={key} style={style.popup.description}>
            <p>
                <div>{timestamp}</div>
                <div style={style.popup.description}>{description}</div>
            </p>
        </div>
};

let style = {
    container: {
        height: '100%',
        position: 'fixed',
        right: '55px',
        top: '45px',
        display: 'flex',
        flexDirection: 'column',
        zIndex:100
        // justifyContent: '',
    },

    iconContainer: {
        marginBottom: '35px',
        borderStyle: '0',
    },

    icon: {
        width: '48px',
        height: '48px',
        boxShadow: '0 5px 15px 5px rgba(0,0,0,0.4)',
        backgroundColor: 'white'
    },
    popup: {
        position:'absolute',
        padding:'5px',
        right:'55px',
        marginRight:'10px',
        width:'150px',
        // height:'100px',
        backgroundColor:'white',
        color:'black',
        border:'solid 1px black',
        borderRadius:'5px',
        description:{
            fontWeight:'300'
        }
    },

}
