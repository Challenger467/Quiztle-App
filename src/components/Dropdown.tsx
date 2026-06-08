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


  useEffect(() => {
    setter(selectedValue)
  },[selectedValue])
  return (
    <div className={`my-3 ml-10 ${visible}`}>
      <p className=" text-white py-2 text-xl mb-2">{title}</p>

            <Select  onValueChange={setSelectedValue}>
              <SelectTrigger className="w-[220px] text-white">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent className="bg-neutral-950 border-neutral-700 text-neutral-200">
                {options.map((opt,i) => 
                <SelectItem key={i} value={opt.id.toString()}>{opt.name}</SelectItem>)}
              </SelectContent>
            </Select>

    </div>
  )
}

export default Dropdown
