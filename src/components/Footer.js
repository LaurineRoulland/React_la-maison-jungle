import { useState } from 'react'
import '../styles/footer.css'

export const Footer = () => {
    const [inputValue, setInputValue] = useState('')

    const Input = (event) => {
        setInputValue(event.target.value)
    }

    const isNotEmail = () => {
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
        }
    }

    return (
        <footer className="lmj-footer">
            <p className="lmj-footer-elem">Pour les passionné·e·s de plantes 🌿🌱🌵</p>
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
