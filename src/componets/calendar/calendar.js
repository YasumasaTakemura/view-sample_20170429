import React, {Component} from 'react';


class Calender extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render() {
        return (
            <div>
            
            </div>
        );
    }
}

const band = () => (
    <div></div>
);


const  cell = () => (
    <div></div>
);

const  day = () => (
    <div></div>
);


const  week = () => (
    <div></div>
);

const  month = (props) => {
    let {days,weeks,label} = props
    

    for(){

    }

    return <div>
        <table>
            <dateLabel label={label}/>

        </table>
    </div>
};

const  dateLabel = (props) => {
    let {label} = props

    return <thead>
        {label.map((item)=><th>{item}</th>)}
    </thead>
};



export default Calender;