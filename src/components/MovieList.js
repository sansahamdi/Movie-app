import React from 'react'
import MovieCard from './MovieCard'

const MovieList=(props)=>{

    const {film}=props

    return(
        <MovieCard author={film} movie={props.movie} />
    )
}

export default MovieList