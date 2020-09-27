import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import s from "./Movie.module.css";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

const Movie = (props) => (
     <Query
        query={gql`
      query moviesQuery{
    movie(id: "${props.match.params.id}") {
      id
      name
      genre
      rate
      img
      country
      about
    }
  }
   `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            const {movie = []} = data
            return (
                <div className={s.body}>
                    <div key={movie.id} className={s.body_coupon}>
                        <img src={movie.img}/>
                        <div className={s.body_coupon_info}>
                        <h1 className={s.center}>{movie.name}</h1>
                        <h4>{movie.genre}</h4>
                        <h4>{movie.rate}</h4>
                        <h4>{movie.country}</h4>
                        <div>{movie.about}</div>
                        <button onClick={()=>{props.history.push('/movies')}}>Back</button>
                        </div>
                    </div>
                </div>
            );
        }}
    </Query>
);

export default withAuthRedirect(Movie);
