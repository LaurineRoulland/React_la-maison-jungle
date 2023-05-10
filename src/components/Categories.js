import '../styles/categories.css'

export const Categories = ({ setActiveCategory, categories, activeCategory }) => {
    return (
        <div className="lmj-categories">
            <select
                value={activeCategory}
                onChange={(event) => setActiveCategory(event.target.value)}
                className="lmj-categories-select"
            >
                <option value="">---</option>

                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )
}
