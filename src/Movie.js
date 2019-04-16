import React, { Component } from 'react';
import ProTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{

    static proTypes ={
        title:ProTypes.string.isRequired,
        poster:ProTypes.string.isRequired
    }

    render(){
        return(
            <div className='Movie'>
                <h1>{this.props.title}</h1>
                <MoviePoster poster={this.props.poster} />
            </div>
        );
    }
}

// class MoviePoster extends Component{
//     static proTypes={
//         poster:ProTypes.string.isRequired
//     }

//     render(){
//         return(
//             <img  src={this.props.poster} alt='' />
//         );
//     }
// }

function MoviePoster({poster}){
    return(
        <img  src={poster} alt='' />
    )
}
  
  export default Movie;