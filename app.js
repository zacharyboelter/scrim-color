
function displayColors(colors){
    let myColorsHtml = colors.map(color => {
        return `<div class="my-color" style="background-color: ${color.value}"></div>`
    }).join('')
    
    console.log(myColorsHtml)

    document.body.innerHTML = `<div class="my-colors">
        ${myColorsHtml}
    </div>`
}


async function getColor(num) {
    let response = await fetch(`https://apis.scrimba.com/hexcolors/?count=${num}`)
    let data = await response.json()
    let colors = data.colors
    console.log(data)

    displayColors(colors)

}


let num = 1000
getColor(num)