import '../components/Card.css'
import { useNavigate } from 'react-router-dom'
import type { PersonnageCardProps } from '../type/Personnage.ts'

function PersonnageCard({ items }: PersonnageCardProps) {
    const navigate = useNavigate()

    return (
        <div className="container">
            {items.map((personnage) => (
                <button
                    key={personnage.url}
                    type="button"
                    className="card"
                    onClick={() => navigate(`/personnages/${personnage.url.split('/').reverse()[0]}`)}
                >
                    <h2>Nom du personnage : {personnage.name}</h2>
                    <p>Genre : {personnage.gender}</p>
                    <p>Taille : {personnage.height} cm</p>
                </button>
            ))}
        </div>
    )
}

export default PersonnageCard