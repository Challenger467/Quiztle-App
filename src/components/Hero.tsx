import { Button } from "./ui/button"
import '../App.css'
const Hero = ({scrollToSettings}: {scrollToSettings: () => void}) => {

  return (
    <section className=" h-[200px] flex justify-center items-end mb-60 mt-80">
        <div className="absolute z-[0] w-[40%] h-[35%]
        top-0 left-0 pink__gradient"/>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-7xl text-center text-white font-bold mb-10"><span className="text-purple-800 purpleGradText">Fresh</span> Trivia Every <br/> Time You Play</h1>
        <p className="text-white text-center w-xl text-lg mb-10">This quiz app fetches multiple-choice questions from the Open Trivia DB API, covering various categories and difficulty levels, making every session fun, dynamic, and educational.</p>
        {/* <button className="cursor-pointer rounded-full px-9 py-2 bg-emerald-800 border hover:bg-emerald-900 text-lg">Quiz Me</button> */}
        <Button onClick={scrollToSettings} className="purpleGrad px-20" variant="default" size="lg">Get Started</Button>
      </div>
    </section>
  )
}

export default Hero
