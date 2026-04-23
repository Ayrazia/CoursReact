import '../components/Card.css'
import { useNavigate } from 'react-router-dom'
import type { PlaneteCardProps } from '../type/Planete.ts'

function PlaneteCard({ items }: PlaneteCardProps) {
    const navigate = useNavigate()

    return (
        <div className="container">
            {items.map((planete) => (
                <button
                    key={planete.url}
                    type="button"
                    className="card"
                    onClick={() => navigate(`/planetes/${planete.url.split('/').reverse()[0]}`)}
                >
                    <h2>Nom : {planete.name}</h2>
                    <p>Population : {planete.population}</p>
                    <p>Climat : {planete.climate}</p>
                </button>
            ))}
        </div>
    )
}

export default PlaneteCard
