import React, {Component} from 'react';


// child component of Console
export class ___ extends Component {

// TaskListContainerInConsole
    white = 'white'
    black = 'black'

    listBackgroundColor = 'white'
    logBackgroundColor = 'black'
    listTextColor = 'black'
    logTextColor = 'white'

    //if log tab is clicked
    _listBackgroundColor = 'black'
    _logBackgroundColor = 'white'
    _listTextColor = 'white'
    _logTextColor = 'black'

    list = {backgroundColor: this.listBackgroundColor, color: this.listTextColor}
    log = {backgroundColor: this.logBackgroundColor, color: this.logTextColor}

    _list = {backgroundColor: this._listBackgroundColor, color: this._listTextColor}
    _log = {backgroundColor: this._logBackgroundColor, color: this._logTextColor}

    constructor() {
        super();
        this.state = {
            on: 'list',
            onHover:{
                taget:'',
                state:false},
             focusedCategory:'list',
             categories:[
                {
                    label:'list',
                    component:'search',
                },
                {
                    label:'log',
                    component:'',
                },
                 ],
                 targetComponent:'search'
           
        }
    }



    onHoverHadeler(target){
        this.setState({
            onHover:{
                target:target,
            state:true
        }})}

    

    offHoverHadeler(target){
        this.setState({
            onHover:{
                target:target,
            state:false
        }})}

    changeCategory(target){
        this.setState({focusedCategory:target})
}

    changeTargetComponent(target){
        this.setState({
            targetComponent:target
        })
    }

    changeStatus(key) {
        this.setState({on: key})

    }

    renderListComponent() {

         return <div style={this.styles.listContainer} className="taskList-container">

            <div>
                <button className="list" style={this.list} onClick={() => this.changeStatus('list')}>list</button>
                <button className="log" style={this.log} onClick={() => this.changeStatus('log')}>logs</button>
            </div>
            <input onChange={e => this.props.taskListUpdater(e.target.value)}/>
        </div>
    }

    renderLogsComponent() {
        return <div style={this.styles.logContainer} className="taskList-container">
            <div>
                <button className="list" style={this._list} onClick={() => this.changeStatus('list')}>list</button>
                <button className="log" style={this._log} onClick={() => this.changeStatus('log')}>logs</button>
            </div>
            <input onChange={e => this.props.taskLogUpdater(e.target.value)}/>
        </div>
    }


    styles={
        listContainer:{
            paddingTop:'5px',
            marginTop:'25px',
            // backgroundColor:'black',
            width:'100%'
        },
        logContainer:{
            padding:'5px',
            marginTop:'25px',
            backgroundColor:'red'
        }
    }

    render() {
        // let handle=".draggable"
        // let defaultPosition={x: 0, y: 0}
        // let position={}
        // let grid=[1, 1]

        return <div style={this.styles.listContainer}>
             <CategoryNavigation

              onHoverHadeler={this.onHoverHadeler.bind(this)} 
              offHoverHadeler={this.offHoverHadeler.bind(this)} 
              changeCategory={this.changeCategory.bind(this)}
               {...this.state}

               /> 
             <FocusedCategory 
                changeTargetComponent ={this.changeTargetComponent.bind(this)}
                changeCategory={this.changeCategory.bind(this)}
                {...this.state}
                {...this.props}/> 
             </div>

        // if (this.state.on === 'list')return this.renderListComponent();
        // if (this.state.on === 'log')return this.renderLogsComponent();

    }
}

let CategoryNavigation = (props) => {

    let {categories,onHover,onHoverHadeler,offHoverHadeler,changeCategory,focusedCategory} = props;
    let styles={
        container:{ 
            display:'flex',
            justifyContent:'space-around',        
            // marginTop:'25px',
            // backgroundColor:'#2F363D',
            width:'100%'
        },
        cell:{
            width:'90%',
            color:'white', 
            textAlign:'center'
           
        },
        cellOnHover:{
            width:'90%',
            color:'white', 
            borderBottom:'solid 2px white',
            // backgroundColor:'red',
            textAlign:'center' 
        },
        cellOnFocused:{
            width:'90%',
            color:'white', 
            borderBottom:'solid 2px white',
            // backgroundColor:'red',
            textAlign:'center' 
        },
    }

    return(
        <div style={styles.container}>
                {categories.map((category)=>
                    {
                        if(focusedCategory === category.label )return <div 
                            style={styles.cellOnFocused}
                            onMouseEnter={()=>onHoverHadeler(category.label)}
                            onMouseLeave={()=>offHoverHadeler('')}
                            onClick={()=>changeCategory(category.label)}

                            > {category.label} </div>
                        return <div 
                            style={onHover.state && onHover.target == category.label?styles.cellOnHover:styles.cell}
                            onMouseEnter={()=>onHoverHadeler(category.label)}
                            onMouseLeave={()=>offHoverHadeler('')}
                            onClick={()=>changeCategory(category.label)}
                
                            > {category.label} </div>
                    })
                }
        </div>
    )
}


let FocusedCategory = (props) => {
    let {focusedCategory} = props;
    
    let styles={
        container:{
            //  padding:'5px',
            // marginTop:'25px',
            backgroundColor:'white',
            width:'100%'
        },
        cell:{},
        // cell/:{},

    }


    switch(focusedCategory){
        case 'list':
            return  <div style={styles.container}><TaskListSwitcherWrapper target={'list'} {...props}/></div>
        case 'log':
            return  <div><TaskLog target={'log'} {...props}/></div>
            

    }

}

let TaskListSwitcherWrapper = (props) => {
    let {changeTargetComponent} = props
    return <div>
            <div>
                        <button onClick={()=>{changeTargetComponent('search')}}>Search</button>
                        <button onClick={()=>{changeTargetComponent('register')}}>Register</button>
            </div>

        
         <TaskListSwitcher {...props}/> 
         
         </div>
}


let TaskListSwitcher = (props) => {
    let { taskListUpdater,focusedCategory ,targetComponent}= props

    let styles={
        container:{
            marginTop:'25px',
            backgroundColor:'red',
            width:'100%'
        },
        cell:{},
        // cell/:{},

    }

    switch(targetComponent){
        case 'search':
            return  <div style={styles.container}>

                <input type='checkbox'
                />
                <TaskListSearcher {...props}/></div>
        case 'register':
            return  <div><TaskLog {...props}/></div>
            
        default:
        return <div style={styles.container}>
                <input type='check-box'
                />
                <TaskListSearcher {...props}/></div>

            

    }
}

let ConsoledTaskListRegister = (props) => {
    let { taskListUpdater }= props

    let styles={
        container:{
            marginTop:'25px',
            backgroundColor:'red',
            width:'100%'
        },
        cell:{},
        // cell/:{},

    }

    return(
        <div style={styles.container}>
               XXXXXXXXXXXX
               <input onChange={ e => taskListUpdater(e.target.value)}/>
        </div>
    )
}

let TaskListSearcher = (props) => {
    let { taskListUpdater }= props

    let styles={
        container:{
            marginTop:'25px',
            backgroundColor:'red',
            width:'100%'
        },
        cell:{},
        // cell/:{},

    }

    return(
        <div style={styles.container}>
               XXXXXXXXXXXX
               <input onChange={ e => taskListUpdater(e.target.value)}/>
        </div>
    )
}

let TaskLog = (props) => {


    let styles={
        container:{
            marginTop:'25px',
            backgroundColor:'yellow',
            width:'100%'
        },
        cell:{},
        // cell/:{},

    }

    return(
        <div style={styles.container}>
               AAAAAAAAAA
        </div>
    )
}


export class NaviConsole extends Component {
    render() {
        const {taskListUpdater} = this.props

        return <div>
            NABVITIME
            <input onChange={e => taskListUpdater(e.target.value)}/>
        </div>

    }

}