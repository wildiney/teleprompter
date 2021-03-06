import React, { useState, useEffect } from 'react'
import { BsFillStopwatchFill, BsStopFill, BsPlayFill, BsPauseFill, BsFonts, BsViewList, BsViewStacked } from 'react-icons/bs'

import Teleprompter from './components/Teleprompter/Teleprompter'
import Menu from './components/Menu/Menu'
import MenuButton from './components/Menu/MenuButton/MenuButton'
import Options from './components/Options/Options'

import { getItems, saveItem, deleteItem } from './API/api'

import './App.css'

function App () {
  const [texts, setTexts] = useState([])

  const [textPrompter, setTextPrompter] = useState({ title: 'Teleprompter', text: 'Open menu and create your text' })
  const [fontSize, setFontSize] = useState(80)
  const [speed, setSpeed] = useState(1000)
  const [position, setPosition] = useState(0)

  const [start, setStart] = useState(false)
  const [pause, setPause] = useState(false)
  const [menu, setMenu] = useState(false)
  const [ease, setEase] = useState(true)

  const showHandler = (index) => {
    setTextPrompter({ id: index, title: texts[index].title, text: texts[index].text })
    setMenu(false)
  }

  const deleteHandler = (index) => {
    deleteItem(index)
    setTexts(getItems())
  }

  const saveTextHandler = (newTitle, newText) => {
    saveItem({ title: newTitle, text: newText })
    setTexts(getItems())
  }

  const menuHandler = () => {
    setMenu(!menu)
  }

  const startHandler = () => {
    setStart(!start)
    setPause(false)
    setPosition((window.innerHeight / 3) - (fontSize * 1.5 / 2))
  }

  const pauseHandler = () => {
    if (start) {
      setPause(true)
      setStart(false)
    } else {
      setPause(false)
      setStart(true)
    }
  }

  useEffect(() => {
    setTexts(getItems())
    let interval
    if (start) {
      interval = setInterval(() => {
        if (ease) {
          setPosition(prevPosition => prevPosition - (fontSize * 1.5))
        } else {
          setPosition(prevPosition => prevPosition - 10)
        }
      }, speed)
    }
    if (pause) {
      clearInterval(interval)
    }

    return () => { clearInterval(interval) }
  }, [position, start, fontSize, speed, pause, ease])

  return (
    <>
      <section id="content">
        <MenuButton menuHandler={menuHandler} />

        <Teleprompter
          fontSize={fontSize}
          position={position}
          title={textPrompter.title}
          text={textPrompter.text}
          ease={ease}
        />

        <Menu
          menu={menu}
          showHandler={showHandler}
          texts={texts}
          deleteHandler={deleteHandler}
          saveTextHandler={saveTextHandler}
        />
      </section>

      <footer>
        <Options label={<BsFonts />}>
          <input
            type="number"
            value={fontSize}
            onChange={(e) => { setFontSize(e.target.value) }}
          />
        </Options>
        <Options label={<BsFillStopwatchFill />}>
          <input
            type="number"
            step='10'
            value={speed}
            onChange={(e) => { setSpeed(e.target.value) }}
          />
        </Options>
        <Options label={ease ? <BsViewList /> : <BsViewStacked />}>
          <input
            type="checkbox"
            value={ease}
            onChange={() => {
              setEase(!ease)
              if (!ease) {
                setSpeed(1000)
              } else {
                setSpeed(100)
              }
            }}
          />
        </Options>
        <Options>
          <button
            type="button"
            className={start ? 'red btn_play_stop' : 'green btn_play_stop'}
            onClick={startHandler}>{start ? <BsStopFill /> : <BsPlayFill />}
          </button>
        </Options>
        <Options>
          <button
            type="button"
            className={pause ? 'red btn_pause' : 'green btn_pause'}
            onClick={pauseHandler}>
            <BsPauseFill />
          </button>
        </Options>
      </footer>
    </>
  )
}

export default App
