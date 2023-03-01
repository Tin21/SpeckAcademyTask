const items = document.getElementById("items")
const errorEl = document.getElementById("error")

const addItem = () => {
    const itemCount = items.childElementCount;
    console.log(itemCount)
    errorEl.innerHTML = null
    const input = document.getElementById("techStack")
    const inputValue = input.value

    const isInputValid = inputValue.length > 24 ? false : true

    if (inputValue) {
        if (isInputValid) {
            if(itemCount <= (10-1)){
                const newItem = document.createElement("div")
                newItem.id = "item"
                newItem.innerText = inputValue
    
                items.appendChild(newItem)
            }else {
                errorEl.innerHTML = "<p class='errMsg'>Can't add more items.</p>"
            }
            
        } else {
            errorEl.innerHTML = "<p class='errMsg'>String length can't be greater than 24.</p>"
        }

    }else {
        errorEl.innerHTML = "<p class='errMsg'>String length must be greater than 0.</p>"
    }
}

const removeAllItems = () => {
    if (items.innerHTML !== "") items.innerHTML = null
    else errorEl.innerHTML = "<p class='errMsg'>There is nothing to remove.</p>"
}

