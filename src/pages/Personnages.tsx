import { useEffect, useMemo, useState } from 'react'
import PersonnageCard from '../components/PersonnageCard.tsx'
import Search from '../components/Search.tsx'
import type { PersonnageItem } from '../type/Personnage.ts'

function Personnages() {
    const [personnages, setPersonnages] = useState<PersonnageItem[]>([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetch('https://swapi.info/api/people')
            .then((response) => response.json())
            .then((data: PersonnageItem[]) => setPersonnages(data))
    }, [])

    const filteredPersonnages = useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase()

        if (!normalizedSearch) {
            return personnages
        }

        return personnages.filter((personnage) => {
            const searchableText = [personnage.name, personnage.gender, personnage.height]
                .join(' ')
                .toLowerCase()

            return searchableText.includes(normalizedSearch)
        })
    }, [personnages, searchTerm])

    return (
        <>
            <h1>Personnages</h1>
            <p>Les personnages</p>
            <Search
                id="search-personnages"
                label="Rechercher un personnage :"
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Nom, genre ou taille"
            />
            {filteredPersonnages.length === 0 ? (
                <p>Aucun personnage trouvé.</p>
            ) : (
                <PersonnageCard items={filteredPersonnages} />
            )}
        </>
    )
}

export default Personnages
