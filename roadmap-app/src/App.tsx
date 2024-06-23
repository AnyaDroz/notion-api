import {useState} from "react";


interface ThingToLearn {
    label: string;
    url: string;
    status:string;
}

const App = () => {
    const [list, setList]= useState<ThingToLearn[]>([])
return (
    <div>
        <h1>Things to Learn</h1>
        <button
            type="button"
            onClick={() => {
                fetch("http://localhost:8000/")
                    .then((response) => response.json())
                    .then((payload:ThingToLearn[]) => {
                      setList(payload)
                        console.log(payload);
                    });
            }}
        >

            Fetch List
        </button>
        <ol>
            {list.map((item, index) => {
                return <li key={index}><a href={item.url}>{item.label}</a><div>{item.status}</div></li>
            })}
        </ol>
    </div>
)
}

export default App