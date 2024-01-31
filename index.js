const getColorBtn = document.querySelector('.get-btn')
const color = document.querySelector('#color')
const mode = document.querySelector('#mode')
const hexColorList = document.querySelector('.hex-color-list')

getColorBtn.addEventListener("click", function () {
    console.log("button clicked")
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch(`https://www.thecolorapi.com/scheme?hex=${color.value.substring(1)}&mode=${mode.value}&count=5`, options)
        .then(res => res.json())
        .then(d => {
            let html = ``
            d.colors.map( (c) => {
                html += `
                            <div class="hex-colors" style="background-color:${c.hex.value};"><p>${c.hex.value}</p></div>
                        `
            })
            hexColorList.innerHTML = html;
        })
})
