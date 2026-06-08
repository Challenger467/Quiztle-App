import {useState, useRef} from 'react'
import Hero from './Hero'
import Quiz from './Quiz'
import Settings from './Settings'
import { Button } from './ui/button'
import '../App.css'

function Home() {
    const [category, setCategory] = useState("9")
    const [questNum, setQuestNum] = useState("0")
    const [difficulity, setDifficulity] = useState("0")
    const [choicesNum, setChoicesNum] = useState("0")
    const [started, setStarted] = useState(false)
    const settingsRef = useRef<HTMLDivElement>(null)

    const handleNewquiz = (result: boolean) => {
      setStarted(result)
    }
    
    const handleStart = () => {
      if (category && questNum && difficulity && choicesNum){
        setStarted(true)
      }
    }

  return (
    <div className="bg-neutral-950 w-[100%] items-center  px-20 flex justify-center flex-col font-sans tracking-tight">
      {!started && <Hero scrollToSettings={() => settingsRef.current?.scrollIntoView({ behavior: 'smooth' })}/>}
      {!started && <Settings refProp={settingsRef} catego={setCategory} qnum={setQuestNum} diff={setDifficulity} cnum={setChoicesNum}/>}
      {!started && <h2 className="text-red-500 my-4 text-xl">Please select settings</h2>}
      {!started &&<Button variant="default" size="lg" className="mo mb-30 purpleGrad" onClick={handleStart}>Start Quiz</Button>}
      {/* {started &&  <h2 className="text-white text-4xl mx-auto mt-30 leading-15">Choices: {choicesNum} <br/> Number of Questions: {questNum} <br/> Difficulity: {difficulity === 1 ? "easy" : difficulity === 2 ? "medium" : difficulity === 3 ? "hard" : ""} </h2>} */}
      {started && <Quiz catego={parseInt(category)} qnum={parseInt(questNum)} diff={difficulity === "1" ? "easy" : difficulity === "2" ? "medium" : difficulity === "3" ? "hard" : ""} cnum={parseInt(choicesNum)} start={started} newQuiz={handleNewquiz}/>}
    </div>


  )
}

export default Home
