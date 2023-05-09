import { useState } from 'react'
import '../styles/footer.css'

export const Footer = () => {
    const [inputValue, setInputValue] = useState('')

    function Input(event) {
        setInputValue(event.target.value)
    }

    function isNotEmail() {
        if (!inputValue.includes('@')) {
            alert("Sans @, ce n'est pas une adresse mail !")
        }
    }

    return (
        <footer className="lmj-footer">
            <div className="lmj-footer-elem">
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className="lmj-footer-elem">
                <p>Laissez-nous votre mail :</p>
                <form className="lmj-footer-form">
                    <label>
                        <input
                            value={inputValue}
                            onChange={Input}
                            placeholder="Email"
                            onBlur={isNotEmail}
                        />
                        <button type="submit">Entrer</button>
                    </label>
                </form>
            </div>
        </footer>
    )
}
