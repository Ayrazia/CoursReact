import { useEffect, useMemo, useState } from 'react'
import PlaneteCard from '../components/PlaneteCard.tsx'
import Search from '../components/Search.tsx'
import type { PlaneteItem } from '../type/Planete.ts'

function Planetes() {
    const [planetes, setPlanetes] = useState<PlaneteItem[]>([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetch('https://swapi.info/api/planets')
            .then((response) => response.json())
            .then((data: PlaneteItem[]) => setPlanetes(data))
    }, [])

    const filteredPlanetes = useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase()

        if (!normalizedSearch) {
            return planetes
        }

        return planetes.filter((planete) => {
            const searchableText = [planete.name, planete.climate, planete.population]
                .join(' ')
                .toLowerCase()

            return searchableText.includes(normalizedSearch)
        })
    }, [planetes, searchTerm])

    return (
        <>
            <h1>Planètes</h1>
            <p>Les planètes</p>
            <Search
                id="search-planetes"
                label="Rechercher une planète :"
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Nom, climat ou population"
            />
            {filteredPlanetes.length === 0 ? (
                <p>Aucune planète trouvée.</p>
            ) : (
                <PlaneteCard items={filteredPlanetes} />
            )}
        </>
    )
}

export default Planetes
