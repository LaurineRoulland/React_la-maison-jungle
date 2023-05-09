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

    return (
        <div>
            {range.map((rangeElement) =>
                scaleValue >= rangeElement ? (
                    <span key={rangeElement.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}
