import React, { useState } from 'react'

import TextBlock from './TextBlock/TextBlock'

// import { saveItem } from '../../API/api'

import './Menu.css'


function Menu({ menu, saveTextHandler, showHandler, texts, deleteHandler }) {

    const [ contentTitle, setContentTitle ] = useState('')
    const [ contentText, setContentText ] = useState('')

    const saveText = () => {
        saveTextHandler(contentTitle, contentText)
        setContentTitle('')
        setContentText('')
    }

    return (
        <aside className={ menu ? 'showMenu' : 'hideMenu' }>
            <div className="wrapper formGrid">
                <h2>Add Text</h2>
                <div className="formAdd">
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" value={ contentTitle } onChange={ (e) => { setContentTitle(e.target.value) } } />
                    </div>
                    <div className="form-group">
                        <label>Text</label>
                        <textarea value={ contentText } onChange={ (e) => { setContentText(e.target.value) } }>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn_salvar" onClick={ () => { saveText() } }>Save</button>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <h2>All texts</h2>
                {
                    texts && texts.map(
                        (content, index) => {
                            return (
                                <TextBlock
                                    key={ index }
                                    index={ index }
                                    contentTitle={ content.title }
                                    contentText={ content.text }
                                    showHandler={ showHandler }
                                    deleteHandler={ deleteHandler }
                                />
                            )
                        }
                    )
                }
                { !texts && "Não há textos salvos" }
            </div>
        </aside >
    )
}

export default Menu
