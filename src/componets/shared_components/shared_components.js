/**
 * Created by YasumasaTakemura on 2017/05/27.
 */
import React, {Component} from 'react';

export const w = window.innerWidth;
export const h = window.innerHeight;

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


export class Hover extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hover:false,
        };
    }

    onHover(){
        this.setState({hover:true});

    }
    offHover() {
        this.setState({hover: false})
    }

    render(){
        const {on,off} = this.props;
        const {hover} = this.state;
        return <div style={hover?on:off} onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.offHover.bind(this)}>
            {this.props.children}
        </div>
    }
}