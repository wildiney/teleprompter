import React from 'react'
import { BsTrash } from 'react-icons/bs'

import './TextBlock.css'

function TextBlock({ contentTitle, contentText, index, showHandler, deleteHandler }) {
    return (
        <div key={ index }>
            <div className="textBlock" >
                <h3>{ contentTitle }<button className="btn_delete" type="button" onClick={ () => { deleteHandler(index) } }><BsTrash /></button></h3>
                <div className="content">{ contentText }</div>
                <button className="btn_show" type="button" onClick={ (e) => { showHandler(index) } }>Show</button>
            </div>
        </div>
    )
}

export default TextBlock
