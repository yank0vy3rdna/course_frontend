import {useEffect, useState} from "react";
import List from "../components/list";

class Excursion {
    constructor(name, description, duration, id) {
        this.name = name
        this.description = description
        this.duration = duration
        this.link = "/excursion/" + id
    }
}

export default function ExcursionsList() {
    const [excursions, setExcursions] = useState([])
    useEffect(() => {
        fetch("/api/excursions/").then(resp => resp.json().then(data => {
            setExcursions(data["results"].map((item) =>
                new Excursion(item['NAME'], item['DESCRIPTION'], item['DURATION'], item['id'])
            ))
        }))
    }, [])
    return <div>
        <h3>Экскурсии</h3>
        <div>Выбери экскурсию, которая тебе нравится больше всего</div>
        <List headers={["Название", "Описание", "Длительность"]} items={excursions} table_keys={["name", "description", "duration"]}
              link_key="link"/>
    </div>
}