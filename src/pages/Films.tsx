import { useState, useEffect } from 'react'
import FilmCard from "../components/FilmCard.tsx";
import Search from "../components/Search.tsx";
import type {FilmItem} from "../type/Film.ts";

function Films() {
    const [films, setFilms] = useState<FilmItem[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch("https://swapi.info/api/films")
            .then((res) => res.json())
            .then((data) => setFilms(data));
    }, []);

    const filteredFilms = films.filter((film) => {
        const searchableText = `${film.title} ${film.opening_crawl} ${film.release_date}`.toLowerCase();
        return searchableText.includes(searchTerm.toLowerCase());
    });

    return (
        <>
            <h1>Films</h1>
            <p>Les films</p>
            <Search
                id="search-films"
                label="Rechercher un film :"
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Titre, description ou date"
            />
            {filteredFilms.length === 0 ? (
                <p>Aucun film trouvé.</p>
            ) : (
                <FilmCard items={filteredFilms} />
            )}

        </>
    )
}
export default Films;