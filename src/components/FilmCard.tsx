import '../components/Card.css';
import { useNavigate } from 'react-router-dom';
import type { CardFilmsProps } from '../type/Film.ts';

function FilmCard({ items }: CardFilmsProps) {
    const navigate = useNavigate();

    return (
        <div className="container">
            {items.map((film) => (
                <button
                    key={film.episode_id}
                    type="button"
                    className="card"
                    onClick={() => navigate(`/films/${film.episode_id}`)}
                >
                    <h2>Nom : {film.title}</h2>
                    <p>Description : {film.opening_crawl.substring(0, 100)}...</p>
                    <p>Date de sortie : {film.release_date}</p>
                </button>
            ))}
        </div>
    );
}

export default FilmCard;