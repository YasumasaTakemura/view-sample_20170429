/**
 * Created by YasumasaTakemura on 2017/05/27.
 */
import React, {Component} from 'react';

export class Sticky extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollingLock: false
        };
        // example how to bind object in React ES6
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {

        if (window.scrollY > 100) {
            console.log("should lock");
            this.setState({
                scrollingLock: true
            });
        } else if (window.scrollY < 100) {
            console.log("not locked" );
            this.setState({
                scrollingLock: false
            });
        }

    }

    render() {

        return (
            <div style={{ width: "100%", position: this.state.scrollingLock ? "fixed" : "relative"}}>
                {this.props.children}
            </div>
        )
    }
}


export const InnerNavigationBar = (props) => {

    const {clickedID,innerNavigatorBarProps,changeTab} = props
    const tabs = innerNavigatorBarProps.tabs
    const mapper = innerNavigatorBarProps.mapper
    const tabWidth = 100 / tabs

    const styles = {
        clicked: {
            color: 'white',
            backgroundColor: '#4B5F7C',
            width: `${tabWidth}%`
        },
        unClicked: {
            width: `${tabWidth}%`
        }
    }

    return <div className="navigation-bar container">
        {mapper.map((item)=> <label onClick={()=>changeTab(item.id)} style={clickedID === `${item.id}` ? styles.clicked : styles.unClicked }>{item.text}</label>)}

    </div>

}



