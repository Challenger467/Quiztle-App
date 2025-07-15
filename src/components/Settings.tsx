import {useEffect, useState, type Dispatch, type SetStateAction} from 'react'
import Dropdown from './Dropdown'

type SettingsProps = {
    refProp : React.RefObject<HTMLDivElement | null>;
    catego : Dispatch<SetStateAction<string>>;
    qnum : Dispatch<SetStateAction<string>>;
    diff : Dispatch<SetStateAction<string>>;
    cnum : Dispatch<SetStateAction<string>>;

}

const Settings = ({refProp, catego, qnum, diff, cnum} : SettingsProps) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("https://opentdb.com/api_category.php")
        .then(res => res.json())
        .then(obj => setCategories(obj["trivia_categories"]))

    },[])

    return (
        <div ref={refProp} className={"flex flex-row justify-center"}>
            <div className="flex flex-col justify-between ">
                <Dropdown setter={catego} visible="inline" title="Select a category" options={categories}/>
                <Dropdown setter={qnum} visible="inline" title="Select number of questions" options={[{id:2,name:"question numbers"},{id:2,name:2},{id:3,name:3},{id:4,name:4},{id:5,name:5},{id:6,name:6},{id:7,name:7},{id:8,name:8},{id:9,name:9},{id:10,name:10}]}/>
                <Dropdown setter={diff} visible="inline" title="Select difficulity" options={[{id:1,name:"difficulity"},{id:1,name:"easy"},{id:2,name:"medium"},{id:3,name:"hard"}]}/>
                <Dropdown setter={cnum} visible="inline" title="Select number of choices" options={[{id:2,name:"choices numbers"},{id:2,name:2},{id:3,name:3},{id:4,name:4}]}/>
            </div>
        </div>
    )
    }

export default Settings