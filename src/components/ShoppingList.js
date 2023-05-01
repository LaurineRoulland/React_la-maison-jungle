import { plantList } from '../datas/plantList'

export const ShoppingList = () => {
    const categories = plantList.reduce(
        (accumulator, plant) =>
            accumulator.includes(plant.category)
                ? accumulator
                : accumulator.concat(plant.category),
        []
    )

    return (
    <div>
            <ul>
                {categories.map((category) => (
                    <li key={category}> {category} </li>
                ))}
            </ul>
            <ul>
                {plantList.map((plant) => (
                    <li key={plant.id}> {plant.name} </li>
                ))}
            </ul>
        </div>
)
}
