import { plantList } from '../datas/plantList'
//import { plantItem } from './plantItem'
import { CareScale } from './CareScale'
import '../styles/shoppingList.css'

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
            <ul className="lmj-plant-list">
                {plantList.map((plant) => (
                    <li key={plant.id} className="lmj-plant-item">
                        {plant.name}
                        {plant.isSpecialOffer ? (
                            <div className="lmj-sales">Solde</div>
                        ) : null}
                        <CareScale careType="water" scaleValue={plant.water} />
                        <CareScale careType="light" scaleValue={plant.light} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
