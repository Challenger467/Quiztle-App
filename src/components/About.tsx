// import React from 'react'
import { Card, CardContent } from "./ui/card"
import '../App.css'
const About = () => {
  return (
    <div className="bg-neutral-950 h-[920px] flex justify-center items-start">
            <div className="absolute z-[0] w-[40%] h-[35%]
            top-0 pink__gradient"/>
        <Card className="bg-neutral-900 text-white text-2xl mt-50 border-3 border-purple-600 w-[40%]">
            <CardContent>
                <p>This website is created by <span className="purpleGradText">Anas Abdalkhaleq</span> as a frontend project using React.js, Tailwind CSS, Typescript, and ShadCN, This website fetches all the questions from Open Trivia DB API and tracks the user's actions and score in the Dashbard section, The user customizes properties of the quiz as needed such as Number of choices, Number of questions, and the difficulity </p>
            </CardContent>
        </Card>
      
    </div>
  )
}

export default About
