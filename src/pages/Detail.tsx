import { useParams } from 'react-router-dom'

type DetailIdParams = {
    id: string
}

export default function Detail() {
    const { id } = useParams<DetailIdParams>()

    return (
        <main>
            <h1>Détail du film</h1>
            <p>Episode sélectionné : {id}</p>
        </main>
    )
}