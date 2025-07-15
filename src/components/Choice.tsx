import  { useEffect, useState, } from 'react'

interface ChoiceProps {
  value : string[]
  checked : (param:string) => void
  current : number
}
const Choice = ({value,checked,current}: ChoiceProps) => {
  const [selectedValue, setSelectedValue] = useState("")

  useEffect(() => {
    checked(selectedValue)
    console.log(selectedValue);  
  },[selectedValue])

  return (
    <>
    {value.map((_,ele) => <div key={ele} className="flex items-center justify-between bg-neutral-900 p-4 border-purple-600 border-3 mb-3 rounded-xl w-full">
        <label className="text-xl px-4 py-3 text-white" htmlFor="Choise">{value[ele]}</label>
        <input className="w-7 h-7 pb-5" type="radio" checked={selectedValue+current === value[ele]+current} onChange={(e) => setSelectedValue(e.target.value)} value={value[ele]} name="Choise" id="" />   
    </div>)}
    </>
  )
}

export default Choice
