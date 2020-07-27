import React, {Component} from 'react';

class WatchPage extends Component{
    constructor(props){
        super(props)
        this.state =  {
            item:this.props.item,
            itemVideos: [],
            playing: false,
            loading:true,
        }
    }

    render(){
        return (
            <div>
                
            </div>
        );
    }
}