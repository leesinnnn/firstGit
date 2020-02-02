import React, {Component,Fragment} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.inputChange=this.inputChange.bind(this)
        this.addlist=this.addlist.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
        this.state={
            inputValue:'',
            list:['基础按摩','精油推背']
        }
        
    }

    render(){
        return(
            <Fragment>
                <div>
                    <label htmlFor='jspang'>加入服务：</label>
                    <input ref={(input)=>{this.input=input}} className='input' id='jspang' value={this.state.inputValue} onChange={this.inputChange}/> 
                    <button onClick={this.addlist}> 增加服务 </button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                /*<li 
                                    key={index+item}
                                    onClick={this.deleteItem.bind(this,index)}
                                    dangerouslySetInnerHTML={{__html:item}}
                                >
                                </li>*/
                                <XiaojiejieItem 
                                key={item+index}
                                content={item}
                                index={index}
                                deleteItem={this.deleteItem}
                                />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange(/*e*/){
        this.setState({
            //inputvalue:e.target.value
            inputValue:this.input.value
        })
    }

    addlist(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }

    deleteItem(index){
         let list = this.state.list
         list.splice(index,1)
        this.setState({
            list:list
        })
    }
}

export default Xiaojiejie


