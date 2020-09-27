import React from "react";
import withHocs from "./MoviesPageHoc"
import s from "./MoviesPage.module.css"
import {NavLink} from "react-router-dom";


const MoviesPage = (props)=> {
    const {data = {}} = props;
    const {movies = []} = data
    return <div className={s.body}>
        {movies.map(movie => {
            return (
                <div key={movie.id} className={s.body_coupon}>
                    <img src={movie.img}/>
                    <div className={s.body_coupon_info}>
                    <h1 className={s.body_coupon_info__title}>{movie.name}</h1>
                    <h6 className={s.body_coupon_info__about}>{movie.about}</h6>
                    <NavLink to={"/movie/" + movie.id}>Подробнее</NavLink>
                    </div>
                </div>
            );
        })}
    </div>
}

export default withHocs(MoviesPage)
