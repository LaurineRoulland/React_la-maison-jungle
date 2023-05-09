import { CareScale } from './CareScale'
import '../styles/plantItem.css'

export const PlantItem = ({ name, cover, id, light, water }) => {

    // const handleClick = (plantName) => {
    //     alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix ✨`)
    // }
    function handleClick(e) {
        console.log(`Ceci est mon event :`, e)
    }

    return (

        <li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
            <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>
        </li>
    )
}
