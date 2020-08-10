import React from 'react'
import './component.css'

function SortBtn (props) {
    return (
    <button id="sort-btn" onClick={props.changeSort}><i className=" material-icons">{(props.sort > 0)? `arrow_circle_down` : `arrow_circle_up`}</i></button>
    )
}

export default SortBtn;