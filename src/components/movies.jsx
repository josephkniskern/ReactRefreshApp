import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'

class Movies extends Component {

  state = { 
    movies: getMovies()
   }

  render() { 
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

    )

    
  }
}
 
export default Movies;