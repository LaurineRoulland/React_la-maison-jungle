const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

export const ShoppingList = () => {
    return (
        <ul>
            {plantList.map((plant, index) => (
                <li key={`${plant}-${index}`}>{plant}</li>
            ))}
        </ul>
    )
}
