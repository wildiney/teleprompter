const TABLE = 'teleprompter_texts'

export const saveItem = (item) => {
    let items = []
    if (localStorage.getItem(TABLE) === null) {
        items.unshift(item)
        localStorage.setItem(TABLE, JSON.stringify(items))
    } else {
        items = JSON.parse(localStorage.getItem(TABLE))
        items.unshift(item)
        localStorage.setItem(TABLE, JSON.stringify(items))
    }
    console.log(`[LS] data saved`)
}

export const getItems = () => {
    let items = JSON.parse(localStorage.getItem(TABLE))
    console.log(`[LS] data collected`)
    return items
}

export const deleteItem = (index) => {
    let items = getItems()
    items.splice(index, 1)
    localStorage.setItem(TABLE, JSON.stringify(items))
}

