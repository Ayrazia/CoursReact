type SearchFilmsProps = {
    id: string
    label: string
    value: string
    onChange: (value: string) => void
    placeholder?: string
}

function Search({ id, label, value, onChange, placeholder }: SearchFilmsProps) {
    return (
        <div className="search-bar" role="search">
            <label htmlFor={id}>{label}</label>
            <input
                type="search"
                id={id}
                name={id}
                value={value}
                placeholder={placeholder}
                autoComplete="off"
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    )
}

export default Search
