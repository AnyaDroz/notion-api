import {useEffect, useState} from "react";
import Card from "./components/Card";
import styles from "./App.module.css"

interface ThingToLearn {
    label: string;
    url: string;
    status:string;
}




const App = () => {
    const [list, setList]= useState<ThingToLearn[]>([])
    useEffect(()=>{
        fetch("http://localhost:8000/")
            .then((response) => response.json())
            .then((payload:ThingToLearn[]) => {
                setList(payload)
                console.log(payload);
            });
},[])
return (
    <div className={styles.pageLayout}>
    <div className={styles.sideBar}></div>
    <div className={styles.pageGrid}>
            {list.map((item, index) => {
                return <Card key = {index} label={item.label}/>
            })}
    </div>
    </div>
)
}

export default App