import { useCallback, useEffect, useState } from "react"
import words from "./wordList.json"
import HangmanDrawing from "./HangmanDrawing"
import HangmanWord from "./HangmanWord"
import Keyboard from './Keyboard'

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}
function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 4
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter:string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  },
  [guessedLetters, isLoser, isWinner]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)

    }
    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])


  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if(key !== "enter") return
      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }
    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  return(
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }}>
      <div style= {{fontSize: "2rem", textAlign: "center"}}>{isLoser ? "You lost! Refresh to try again." : isWinner ? "You won! Refresh to play again" : "Hangman: game in progess.."}</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord 
      reveal={isLoser}
      guessedLetters={guessedLetters} 
      wordToGuess={wordToGuess}/>
      <div style={{alignSelf: "stretch"}}>
        <Keyboard
          disabled = {isWinner || isLoser}
          activeLetters={guessedLetters.filter(letter => 
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>

  )
}

export default App
