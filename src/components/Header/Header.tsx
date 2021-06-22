import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaSearch } from "react-icons/fa";

export type MovieType = {
    id: number;
    poster: string;
    title: any;
    year: string;
    director: string;
    cast: string;
    rating: number;
    description: string;
    imbdbID: any;
};


const Header = () => {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [search, setSearch] = useState("");
    const [found, setFound] = useState<MovieType[]>([]);

    useEffect(() => {
        fetch("https://mocki.io/v1/dfd35bf8-c954-4a22-8d3e-a11271f4035c")
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        setFound(
            movies.filter(item => {
                return item.title.toLowerCase() === search.toLocaleLowerCase();
            })
        )
    }, [search, movies])


        

    return (
        <div>
        <nav>
            <Link className="nav-title" to="/"><h3>WOOKIES <br /> MOVIES </h3></Link>
            <div className="search-option">
                <div className="search-button"><FaSearch className="search-icon" /></div>
                <input type="text" name="" id="" placeholder="Search..."
                    onBlur={(e) =>setSearch(e.target.value)}
                />
            </div>
        </nav>

        
        {
          found.map(data =>
            <div className="movies">
                <Link to={"/detail/" + data.id}>
                    <div className="movies-poster">
                        <img src={data.poster} alt="" />
                    </div>
                </Link>
                <div className="hover-to-center-movies-desc">
                    <h5 className="title">{data.title}</h5>
                </div>
            </div>
        )
         
        }
    </div>

    );
};

export default Header;