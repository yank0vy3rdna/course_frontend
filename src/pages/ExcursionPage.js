import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import List from "../components/list";
import {isLogin} from "../utils/auth";
import {api} from "../utils/api";

export default function ExcursionPage({token}) {
    const {id} = useParams()
    const [reset, setReset] = useState(false)
    const [excursionObj, setExcursionObj] = useState(null)
    useEffect(() => {

        fetch("/api/excursions/" + id).then(resp => resp.json().then(data => {
            setExcursionObj({
                name: data["NAME"],
                description: data["DESCRIPTION"],
                museums: data["museum"],
                expositions: data["exhibition"],
                exhibits: data["exhibit"],
                groups: data["group_set"].map((value) => {
                    return {
                        date: value["TIME"],
                        slots: value["free_slots"] + " / " + value["NUMBER_SEATS"],
                        id: value['id'],
                    }
                })
            })
        }))
    }, [id])
    if (excursionObj === null) {
        return <div>Loading...</div>
    }
    return <div>
        <h3>{excursionObj["name"]}</h3>
        <h4>Описание экскурсии</h4>
        <div>{excursionObj["description"]}</div>
        <br/>
        <h4>В ходе экскурсии мы посетим:</h4>
        <h5>{excursionObj["museums"].length < 2 ? "Музей" : "Музеи"}:</h5>
        {excursionObj["museums"].map((museum, i) =>
            <li key={i}>{museum}</li>
        )}

        <h5>{excursionObj["expositions"].length < 2 ? "Выставку" : "Выставки"}:</h5>
        {excursionObj["expositions"].map((exposition, i) =>
            <li key={i}>{exposition}</li>
        )}
        <h4>Своими глазами увидим</h4>
        <h5>{excursionObj["exhibits"].length < 2 ? "Экспонат" : "Экспонаты"}:</h5>
        {excursionObj["exhibits"].map((museum, i) =>
            <li key={i}>{museum}</li>
        )}
        <h4>Ближайшие экскурсии</h4>
        <List headers={["Дата экскурсии", "Количество оставшихся мест"]} items={excursionObj["groups"].map((o) => {
            o["button"] = <button onClick={() => {
                fetch(
                    "/api/add/?group_id=" + o['id'],
                    {
                        "method": "post",
                        "headers": {
                            "authorization": "Bearer " + token["access"]
                        }
                    }
                ).then(() => {
                    setReset(!reset)
                })
            }}>Присоединиться</button>;
            return o
        })} table_keys={["date", "slots", isLogin(token) ? "button" : undefined]}/>
    </div>
}