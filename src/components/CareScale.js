import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

export const CareScale = ({ scaleValue, careType }) => {
    const range = [1, 2, 3]
    const scaleType =
        careType === 'light' ? (
            <img src={sun} alt="sun-icon" />
        ) : (
            <img src={water} alt="water-icon" />
        )
    const quantity = { 1: 'peu', 2: 'modérément', 3: 'beaucoup' }

    function handleClick() {
        alert(
            `Cette plante recquiert ${quantity[scaleValue]} ${
                careType === 'light' ? 'de lumière' : "d'arrosage"
            }`
        )
    }

    return (
        <div onClick={handleClick}>
            {range.map((rangeElement) =>
                scaleValue >= rangeElement ? (
                    <span key={rangeElement.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}
