import { memo, useState } from "react";
import { ModesForm } from "./ModesForm";

export const Content = memo(({ modes }) => {
    // making it easier to access
    const modesArrayed = Object.keys(modes).map((key) => {
        return { mode: modes[key].field, key: key}
    })
    
    const [hovered, setHovered] = useState([])
    const [size, setSize] = useState(modesArrayed[0].mode)

    const onHover = e => {
        const item = `${e.currentTarget.parentElement.id},${e.currentTarget.id}`
        if (hovered.includes(item)) {
            setHovered(hovered.filter(el => el !== item))
            e.currentTarget.style.backgroundColor = "#fff";
        } else {
            setHovered([...hovered, item])
            e.currentTarget.style.backgroundColor = "#00a9ef";
        }
    }

    const fieldElemets = []
    const fieldRows = []

    for (let i = 1; i <= size; i++) {
        fieldElemets.push(<div onMouseEnter={(e) => onHover(e)} key={i} id={i} className={'item'}>{i}</div>)
    }
    
    for (let i = 1; i <= size; i++) {
        // const updatedKeys = [...fieldElemets,]
        fieldRows.push(<div key={i} id={i} className={'row'}>
            {fieldElemets}
        </div>)
    }

    return <div className={'field'}>
        <div className={'grid'}>
            <ModesForm modes={modesArrayed} setSize={setSize} setHovered={setHovered} />
            <div className={'gridWhrapper'}>
                {fieldRows}
            </div>
        </div>
        <div className={'infos'}>
            <h3>Hover squares</h3>
            {hovered.map(el => <p className={'info'} key={el}>row {el.split(',')[0]} col {el.split(',')[1]}</p>)}
        </div>
    </div>
})