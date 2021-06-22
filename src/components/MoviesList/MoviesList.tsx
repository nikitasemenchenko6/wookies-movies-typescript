import { useEffect, useState } from 'react';
// import FakeData from '../FakeData.json';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import './moviesList.css';

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

const MoviesList = () => {
    // const [movies, setMovies] = useState<MovieType[]>(FakeData);
    const [movies, setMovies] = useState<MovieType[]>([]);

    useEffect(() => {
        fetch("https://mocki.io/v1/dfd35bf8-c954-4a22-8d3e-a11271f4035c")
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <Header />
            <div className="movies-list">
                <div className="">
                    <h2 className="genre">Genre 1</h2>
                </div>
                {
                    movies.map(data =>
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
        </div>
    );
};




export default MoviesList;