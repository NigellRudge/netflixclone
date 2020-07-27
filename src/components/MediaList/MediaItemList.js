import React, {Component} from 'react';
import propType from 'prop-types';

class MediaItem extends Component{

    constructor(props){
        super(props)
        this.sate = {
            item:this.props.item
        }
    }

    render(){
        return(
            <div>

            </div>
        );
    }
}

MediaItem.propType = {
    item: propType.isRequired
}


class MediaItemList extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: this.props.items
        }
    }

    render(){
        return(
            <div>
                {this.sate.item.map((item,key)=> {
                    return <MediaItem key={key} item={item} />
                })}
            </div>
        );
    }
}

MediaItemList.propType = {
    items:propType.isArray
}

export default MediaItemList;