const menuSection = document.getElementById('menu')

function displayMenuItems(menuItems) {
    menuSection.innerHTML = ' '
    menuItems.map(dish => {
        const div = document.createElement('div')
        const title = document.createElement('h2') //create H2
        const titleText = document.createTextNode(dish.title)//CREATE TITLE TEXT
         title.appendChild(titleText) //STICK TITLE TEXT INSIDE H2
         div.appendChild(title) //stick h2 into the div
        const description = document.createElement('p') //create p
        const descriptionText = document.createTextNode(dish.description)// create text for inside the p
        description.appendChild(descriptionText)
        div.appendChild(description)
        menuSection.appendChild(div)
    })
}

async function getMenuItems () {
    const respone = await fetch('https://codice-boca.web.app/menu')
    const menuItems = await respone.json()
    displayMenuItems(menuItems)
}

getMenuItems()