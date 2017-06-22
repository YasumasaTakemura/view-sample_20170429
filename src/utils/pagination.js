/**
 * Created by YasumasaTakemura on 2017/06/20.
 */

function pagenation(datasets) {
        return (
            <ul className="pagination">
                {this.state.pageIndex == 0 ? <li >Prev</li> :
                    <li onClick={()=>this.setState({pageIndex: this.state.pageIndex - 1})}>Prev</li>}


                {datasets.map((item, index)=><li key={index} onClick={()=>this.setState({pageIndex: index})}>{index + 1}</li>)}

                {this.state.pageIndex == datasets.length - 1 ? <li>Next</li> :
                    <li onClick={()=>this.setState({pageIndex: this.state.pageIndex + 1})}> Next</li>}
            </ul>
        )
    }