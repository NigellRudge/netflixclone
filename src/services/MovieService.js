import axios from 'axios';


class MovieService {

    constructor(){
        this.apiKey = 'a28d205a378cece6baa18ba20119765b';
        this.url = 'https://api.themoviedb.org/3';
        this.category ='/movie'
    }

    async GetPopularMovies(page = 1){
        let path = this.url + '/movie/popular';    
        return await axios.get(path,{
            params: {
                    api_key:this.apiKey,
                    page:page
                }
            })
            .then(response =>{
                response.data.results.map((item)=>{
                    item.poster_path =  'https://image.tmdb.org/t/p/w500' + item.poster_path; 
                    return item
                });
                return (response.data.results)
            })
            .catch(error =>{
                console.log(error)
            })
    }

    async GetNowPlayingMovies(page = 1){
        let path = this.url + this.category + '/now_playing';    
        return await axios.get(path,{
                params: {
                        api_key:this.apiKey,
                        page:page

                    }
                })
                .then(response =>{
                    response.data.results.map((item)=>{
                        item.poster_path =  'https://image.tmdb.org/t/p/w500/' + item.poster_path; 
                        return item
                    });
                    return (response.data.results)
                })
                .catch(error =>{
                    console.log(error)
                }
            );
    }

    async SearchMovies(searchString,page=1){
        let path = this.url + '/search/movie';
        console.log('path:'+path)
        return await axios.get(path,{
            params: {
                    api_key: this.apiKey,
                    query: searchString,
                    page:page
                }
            })
            .then(response =>{
                response.data.results.map((item)=>{
                    item.poster_path =  'https://image.tmdb.org/t/p/w500/' + item.poster_path; 
                    return item
                });
                return (response.data.results)
            })
            .catch(error =>{
                console.log(error)
            }
        );
    }

    async GetMovieInfo(movieId){
        let path =this.url + this.category + '/' + movieId;
        console.log('path:'+path)
        return await axios.get(path,{
            params: {
                    api_key: this.apiKey,
                }
            })
            .then(response =>{
                console.log(response.data)
                return response.data;
            })
            .catch(error =>{
                console.log(error)
            }
        );
    }

    async GetMovieCast(movieId){
        let path = this.url +this.category + '/' + movieId + '/credits';
        console.log('path:'+path)
        return await axios.get(path,{
            params: {
                    api_key: this.apiKey,
                }
            })
            .then(response =>{
                console.log(response.data)
                return response.data;
            })
            .catch(error =>{
                console.log(error)
            }
        );
    }

    async GetMovieByCategory(categoryId){
        
    }

    async GetCategories(){
        
    }
}

export default MovieService;