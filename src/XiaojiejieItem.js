import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return false
        }else{
            return true
        }
    }
    
    render() { 
        return ( 
            <li onClick={this.handleClick}>
            {this.props.content}
            </li>
        );
    }

    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}

XiaojiejieItem.propTypes={
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
 
export default XiaojiejieItem;