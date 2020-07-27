import React, { Component } from 'react';

class IconButton extends Component{
    constructor(props){
        super(props)
        this.state = {
            icon:this.props.icon,
            color:this.props.color
        }
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

class IconTextButton extends Component{
    constructor(props){
        super(props)
        this.state = {
            text:this.props.text,
            icon:this.props.icon,
            color:this.props.color
        }
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

class NormalButton extends Component{
    constructor(props){
        super(props)
        this.state = {
            text:this.props.text,
            color:this.props.color
        }
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default [IconButton,IconTextButton, NormalButton];