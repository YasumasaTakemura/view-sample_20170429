/**
 * Created by YasumasaTakemura on 2017/06/16.
 */
import React, {Component} from 'react';
import 'react-date-picker/index.css'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const _styles = {

    subContainer: {padding: 5}
};

function onChange(dateString, {dateMoment, timestamp}) {
    console.log(dateString)
}

let dateFormat = "YYYY/MM/DD"

class Scheduler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date:moment(),
            startDate: moment(),
            endDate:moment(),
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date, e) {
        this.setState({
            date: date
        });
                console.log(this.state.date._d)
    }

    handleChangeStart(date, e) {
        this.setState({
            startDate: date
        });
                console.log(this.state.startDate._d, this.state.endDate._d)
        console.log(typeof this.state.startDate._d, typeof this.state.endDate._d)
    }

    handleChangeEnd(date, e) {
        this.setState({
            endDate: date
        });

        console.log(this.state.startDate._d, this.state.endDate._d)
        console.log(typeof this.state.startDate._d, typeof this.state.endDate._d)
    }


    render() {
        const _props = {
            handleChangeStart: this.handleChangeStart,
            handleChangeEnd: this.handleChangeEnd,
            handleChange: this.handleChange,
            ...this.state
        };

        const {styles, name, range = false} = this.props;

        return <div style={_styles.subContainer}>
            <div style={styles.header}>{name}</div>
            {range ? <Range {..._props}/> : <Single {..._props}/>}
        </div>
    }

}


const Single = (props)=> {
    const {date, handleChange} = props
    return <span style={{marginRight: 10}}>
                <DatePicker
                    dateFormat={dateFormat}
                    popoverAttachment="bottom right"
                    popoverTargetAttachment="top right"
                    popoverTargetOffset="0px 0px"
                    dropdownMode="select"
                    selected={date}
                    selectsStart
                    onChange={handleChange}
                />
            </span>
}

const Range = (props)=> {
    const {startDate, endDate, handleChangeStart, handleChangeEnd} = props;
    return <div>
        <span style={{marginRight: 10}}>
                <DatePicker
                    dateFormat={dateFormat}
                    popoverAttachment="bottom right"
                    popoverTargetAttachment="top right"
                    popoverTargetOffset="0px 0px"
                    dropdownMode="select"
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    onChange={handleChangeStart}
                />
            </span> <span>
                <DatePicker
                    dateFormat={dateFormat}
                    popoverAttachment="bottom right"
                    popoverTargetAttachment="top right"
                    popoverTargetOffset="0px 0px"
                    dropdownMode="select"
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    onChange={handleChangeEnd}
                />
            </span>
    </div>
}

export default Scheduler