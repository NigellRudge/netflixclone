import React, {Component} from 'react';

class HomePage extends Component {
    constructor(props){
        super(props)
        this.OnPlayClick = this.OnPlayClick.bind(this);
        this.OnMoreInfoClick = this.OnMoreInfoClick.bind(this);
        this.state = {
            loading: true,
            nowPlayingItem: null,
            featuredItem: null,
            trendingItems: [],
            popularItems: [],
            topRatedItems: [],
            categories: [],
            categoryItems1: {
                name: null,
                items: []
            },
            categoryItems2: {
                name: null,
                items: []
            },
            categoryItems3: {
                name: null,
                items: []
            },

        }
    }

    componentWillMount(){

    }

    /**
     * Get The Popular Movies/Series
     * 
     */
    getPopularItems(){

    }

    /**
     * Get The TopRated Movies/Series
     * 
     */
    getTopRatedItems(){

    }

    
    /**
     * Get a now Playing Item
     * 
     */
    getNowPlayongItem(){

    }

    getFeaturedItem(){

    }

    getCategories(){

    }

    getItemPerCategory(categoryId){
        return []
    }


    /**
     * This function will navigate to the watch screen 
     * and pass the selected item as a parameter
     * @param {item} item 
     */
    OnPlayClick(item){
        
    }

    /**
     * This function will navigate to the more Info screen 
     * and pass the selected item as a parameter
     * @param {item} item 
     */
    OnMoreInfoClick(item){

    }


    render(){
        return(
            <div>
                
            </div>
        );
    }
}