import styles from "./Keyboard.module.css"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
 
type KeyboardProps ={
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter:string) => void,
    disabled?: boolean
}

export default function Keyboard({
    disabled = false,
    activeLetters,
    inactiveLetters,
    addGuessedLetter,
    }: KeyboardProps) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
                gap: ".5rem"
            }}
        >
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key)
                const isInActive = inactiveLetters.includes(key)
                return (
                <button 
                    onClick={() => addGuessedLetter(key)}
                    className={`${styles.btn} ${isActive ? styles.active : ""} ${isInActive ? styles.inactive : ""}`} 
                    key={key}
                    disabled={isActive || isInActive || disabled}
                >
                    {key}
                </button>
            )})}
        </div>
    )
}