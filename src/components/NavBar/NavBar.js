import React, {Component} from 'react';

class SearchInput extends Component{
    constructor(props){
        super(props)
        this.state = {
            query: ""
        }
    }

    render()
    {
        return(
            <div>

            </div>
        );
    }
}


class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.onLinkClick = this.onLinkClick.bind(this)
    }

    onLinkClick(){

    }

    render(){
        return(
            <div>

            </div>
        );
    }
}

export default [NavBar, SearchInput ];