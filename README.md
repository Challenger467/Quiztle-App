## Quiztle App
This App contains Trivial Questions in various categories with different difficulties with a dashboard that trackes
your score and recent activity

## Technologies Used
- React.js
- Typescript
- Tailwind CSS
- Shad CN
- React Router DOM

## Installation

```
npm install
npm run dev
```
or use to run build

```
npm run build
```

## How To Use

- Select suitable settings for a personalized test (category, difficulty, number of questions, number of choices)
- Start the quiz
- Answer each question carefully
- Check your result
- Check the dashboard for more details

## Code Example

Some code used in the Main page

```
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
                <Dropdown setter={qnum} visible="inline" title="Select number of questions" options={[{id:2,name:2},{id:3,name:3},{id:4,name:4},{id:5,name:5},{id:6,name:6},{id:7,name:7},{id:8,name:8},{id:9,name:9},{id:10,name:10}]}/>
                <Dropdown setter={diff} visible="inline" title="Select difficulity" options={[{id:1,name:"easy"},{id:2,name:"medium"},{id:3,name:"hard"}]}/>
                <Dropdown setter={cnum} visible="inline" title="Select number of choices" options={[{id:2,name:2},{id:3,name:3},{id:4,name:4}]}/>
            </div>
        </div>
    )
    }

export default Settings
```
## Notes
- This app is still in an early version and updates will be made to improve the App (improving the dashboard, more customization)
- New features may be implemented in newer versions
