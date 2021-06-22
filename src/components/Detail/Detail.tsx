import { useParams } from 'react-router-dom';
import FakeData from '../FakeData.json';
import Header from '../Header/Header';
// import ReactStars from "react-rating-stars-component";
import './Detail.css';
interface movie {
    id: number;
    poster: string;
    title: any;
    year: string;
    director: string;
    cast: string;
    rating: number;
    description: string;
    imbdbID: any;
}


const Detail = () => {
    const { id }:any = useParams();
    const NumberCovert = parseInt(id)
    const movie:any = FakeData.find(res => (res.id === NumberCovert))

    return (
        <div className="movies-detial">
            <Header />
            <div className="movie-container">
                <div className="movie-poster">
                    <img src={movie.poster} alt="" />
                </div>
                <div className="movie-desc">
                    <div className="movie-title">
                        <h2>Title : {movie.title}hello world</h2>
                        {/* <p>Rating : <ReactStars
                                    count={5}
                                    size={35}
                                    value={movie.rating}
                                    edidt={false}
                                    activeColor="#ffd700"
                                /></p> */}
                    </div>
                    <div className="">
                        <div className="year-legnth-director">
                            <p>{movie.year} | </p>
                            <p>{movie.length} | </p>
                            <p>{movie.director}</p>
                        </div>
                        <p className="movie-cast">{movie.cast}</p>
                    </div>
                    <p className="movie-description">{movie.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Detail;