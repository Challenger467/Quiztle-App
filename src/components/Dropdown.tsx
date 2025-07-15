import { useEffect, useState, type Dispatch, type SetStateAction} from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

type DropdownProps = {
    setter : Dispatch<SetStateAction<string>>;
    visible : string;
    title : string;
    options : {id : number, name: string | number}[];
}

const Dropdown = ({setter, visible, title, options} : DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState("")
  // const selectRef = useRef<any>(null)
  // const handleChange = () => {
  //   setter(selectRef.current.value)
  
  // }

  useEffect(() => {
    setter(selectedValue)
  },[selectedValue])
  return (
    <div className={`my-3 ml-10 ${visible}`}>
      <p className=" text-white py-2 text-xl mb-2">{title}</p>
      {/* <select ref={selectRef} onChange={handleChange} className="text-white w-3xs h-xl border p-3 border-white rounded-full hover:bg-">
        {options.map((opt,i) => 
        <option key={i} className="bg-neutral-900 text-white border border-white rounded-full p-2 hover:bg-neutral-900" value={opt.id}>{opt.name}</option>)} */}
            <Select  onValueChange={setSelectedValue}>
              <SelectTrigger className="w-[220px] text-white">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent className="bg-neutral-950 border-neutral-700 text-neutral-200">
                {options.map((opt,i) => 
                <SelectItem key={i} value={opt.id.toString()}>{opt.name}</SelectItem>)}
              </SelectContent>
            </Select>

      {/* </select> */}
    </div>
  )
}

export default Dropdown
