import { useEffect, useState } from 'react'
import Choice from './Choice'
import he from "he"
import { Button } from './ui/button'
import { Spinner } from './ui/spinner'

interface QuizProps {
  catego : number;
  qnum : number;
  diff : string;
  cnum : number;
  start : boolean;
  newQuiz : (p: boolean) => void;
}

interface Question {  
    type: string,
    difficulty: string,
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]  
}


const Quiz = ({catego ,qnum,diff,cnum,start,newQuiz}: QuizProps) => {
  const [quiz, setQuiz] = useState("")
  const [curr, setCurr] = useState(0)
  const [choices, setChoices] = useState(["","","",""])
  const [grade, setGrade] = useState(0)
  const [questionsObj, setQuestionObj] = useState<{results:Question[]}>({results:[]})
  const [isLoading, setIsLoading] = useState(false)
  const [quizNumState, setQuizNumState] = useState(0)
  const [newPercentage, setNewPercentage] = useState(0)


  const isChecked = (ans: string) => {
    if(ans===questionsObj.results[curr-1].correct_answer){
      setGrade(g => g + 1)
    }
  }

  useEffect(() => {
    
      if (quiz === "Ended"){
        let quizzesTaken = parseInt(localStorage.getItem("quizzesTaken") ?? "0") || 0
        let totalGrades = parseInt(localStorage.getItem("totalGrades")  ?? "0") || 0
        let prevGrade = parseInt(localStorage.getItem("lastQuizPercentage")  ?? "0") || 0
        
        if (newPercentage >= prevGrade){
          localStorage.setItem("highestGrade",newPercentage.toString())
        }

        const currentDate = new Date();

        let newScore = quizzesTaken+1
        let newTotalGrades = totalGrades + grade
        localStorage.setItem("quizzesTaken",newScore.toString() || "0")
        localStorage.setItem("totalGrades",newTotalGrades.toString())
        localStorage.setItem("lastQuizPercentage",`${newPercentage}`)
        localStorage.setItem("lastQuizDate",`${currentDate.getDate()}-${currentDate.getMonth()+1}-${currentDate.getFullYear()}`)
        localStorage.setItem("lastQuizCnum",cnum.toString())


      }
  },[quiz])
  
  useEffect(() => {
  

      
      const url =`https://opentdb.com/api.php?amount=${qnum}&category=${catego}&difficulty=${diff}&type=multiple`
      fetch(url)
      .then(res => res.json())
      .then(obj => {
        setQuestionObj(obj)
        setIsLoading(true)
      })      
      return () => {
        setGrade(0)
        setCurr(0)

      }
  }, [])

  const handleNext = () => {
    if(curr < qnum){
      setCurr(c => c + 1)
      const choiceArr = []
      for (let i = 0; i<cnum-1;i++){
        choiceArr.push(he.decode(questionsObj.results[curr].incorrect_answers[i]))
      }
      choiceArr.splice(Math.floor(Math.random() * cnum), 0, he.decode(questionsObj.results[curr].correct_answer))
      setChoices(choiceArr)
  
    }}

  const handleReady = () => {

    
    if(cnum && qnum && catego && diff){
      if (start){
        setQuiz("Started")
      }
      const choiceArr = []
      for (let i = 0; i<cnum-1;i++){
        choiceArr.push(he.decode(questionsObj.results[curr].incorrect_answers[i]))
      }
      choiceArr.splice(Math.floor(Math.random() * 10), 0, he.decode(questionsObj.results[curr].correct_answer))
      setChoices(choiceArr)

      setCurr(c => c+1)
    }else{
      setQuiz("Error")
    }


  }

  const handleEnd = () => {
    setQuiz("Ended")
    const newCount = quizNumState + 1
    setQuizNumState(newCount)
    let gradePercentage = Math.trunc((grade/qnum) * 100)
    setNewPercentage(gradePercentage)

  }

  return (
    <section className="b border-purple-800 p-10 bg-neutral-950 flex justify-between text-white mx-50 min-h-[729px]">

        {quiz === "Started" && <div className="flex flex-col justify-evenly">
          <div className="flex items-center gap-4 bg-neutral-900 w-sm mb-10">
            <h1 className="text-6xl text-white mb-10  p-5 w-md">{curr}</h1>
            <p className="text-xl p-3"> Choices: {cnum} Questions: {qnum}  Difficulity: {diff} </p>
          </div>

            <h1 className="text-4xl mb-10 text-white">{he.decode(questionsObj.results[curr-1].question)}</h1>
            <div>
                 <Choice checked={isChecked} value={choices} current={curr}/>
            </div>
 

        </div>}
        <div className="flex items-start">
          {isLoading && curr===0 ? <Button onClick={handleReady} variant="default" size="lg" className="mt-50">Ready</Button> : !isLoading ? <Spinner className="text-white mt-50" size="large" /> : ""}
            {curr-1 !== qnum-1 && quiz === "Started"  && <Button className="mt-15" variant="default" size="lg" onClick={handleNext}>Next</Button>}
            {curr-1 === qnum-1 && <Button onClick={handleEnd} variant="default" size="lg" className={`${quiz === "Ended" && "hidden"} mt-15`}>Submit</Button>}
        </div>
        {quiz === "Ended" && <div className="flex flex-col justify-center gap-x-5 items-center w-full">
          <h1 className="text-4xl text-white mb-10">Your Grade is: </h1>
          <h1 className="text-6xl text-white mb-10">{grade}/{qnum}</h1>
          <Button variant="default" size="lg" onClick={() => newQuiz(false)}>New Quiz</Button>
        </div>}

    </section>
  )
}

export default Quiz

