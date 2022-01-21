import {useState} from "react";
import {useNavigate} from "react-router-dom";

function ListItem({item, table_keys, link}) {
    const navigate = useNavigate()
    const [hover, setHover] = useState(false);

    return <tr
        onMouseEnter={link ? () => {
            setHover(true);
        } : undefined}
        onMouseLeave={link ? () => {
            setHover(false);
        } : undefined}
        style={
            hover ? {
                background: 'lightgrey'
            } : {}
        } onClick={link ? () =>
            navigate(link)
        : undefined}>
        {
            table_keys.map(
                (key, j) => <td key={j}>{item[key]}</td>
            )
        }
    </tr>
}

export default function List({items, headers, table_keys, link_key}) {
    return <table>
        <thead>
        <tr>
            {headers.map((header, i) => <th key={i}>{header}</th>)}
        </tr>
        </thead>
        <tbody>
        {
            items.map(
                (item, i) => <ListItem key={i} item={item} table_keys={table_keys}
                                       link={link_key ? item[link_key] : undefined}/>
            )
        }
        </tbody>
    </table>
}