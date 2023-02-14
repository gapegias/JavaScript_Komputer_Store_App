// Elements
const balanceElement = document.getElementById("balance")
const loanListElement = document.getElementById("loans")
const loanButtonElement = document.getElementById("loanButton")
const payElement = document.getElementById("pay")
const workButtonElement = document.getElementById("workButton")
const bankButtonElement = document.getElementById("bankButton")
const payButtonElement = document.getElementById("repayLoanButton")
const laptopsMenuElement = document.getElementById("laptops")
const featuresListElement = document.getElementById("features")
const laptopImageElement = document.getElementById("laptopImage")
const laptopTitleElement = document.getElementById("laptopTitle")
const laptopDescriptionElement = document.getElementById("laptopDescription")
const laptopPriceElement = document.getElementById("laptopPrice")
const buyButtonElement = document.getElementById("buyButton")
const buyMessageElement = document.getElementById("buyMessage")

// Initializes
balanceElement.innerText = 200
payElement.innerText = 0

// Variables
let laptops = []

// Fetch elements from API
fetch("https://hickory-quilled-actress.glitch.me/computers") // Fetch data from API
    .then(response => response.json())                       // Transform to json format
    .then(data => laptops = data)                            // Append data to array laptops
    .then(laptops => addLaptopsToMenu(laptops))              // Function to create laptop items - options

// EventListeners
// Get a loan
loanButtonElement.addEventListener("click", () => {
    const loanElement = Number(prompt('Type loan ammount: ')) // Get value from prompt window
    if(loanListElement.getElementsByTagName("li").length === 0){
        if(loanElement <= 0)
            alert("Error: Loan can not be negative, zero or empty") // Show a message
        else if(isNaN(loanElement))
            alert("Error: Loan can not be character or string") // Show a message
        else{
            if(loanElement > 2 * parseFloat(balanceElement.innerText))
                alert(`Error: You can request up to ${2 * parseFloat(balanceElement.innerText)}`) // Show a message
            else{
                balanceElement.innerText = parseFloat(balanceElement.innerText) + parseFloat(loanElement) // Update bank balance
                const loanItemElement = document.createElement('li') // Create item element
                loanItemElement.innerText = `loan ${loanElement} Kr.` // Set text of item element
                loanListElement.append(loanItemElement) // Append item element to item list
                payButtonElement.style.visibility = 'visible'
            }
        }
    }
    else
        alert("Error: You have an outstanding loan") // Show a message
    buyMessageElement.innerText = "" // Set empty message
})
// Increase payment
workButtonElement.addEventListener("click", () => {
    payElement.innerText = parseFloat(payElement.innerText) + 100 // Update payment
    buyMessageElement.innerText = "" // Set empty message
})
// Transfer money from payment to bank balance
bankButtonElement.addEventListener("click", () => {
    if(loanListElement.getElementsByTagName("li").length > 0){
        const loan = loanListElement.getElementsByTagName("li")[0] // Get loan item element
        let loanAmmount = Number(loan.innerText.split(" ")[1]) // Get ammount of loan
        loanAmmount -= 0.1 * parseFloat(payElement.innerText) // 10 % of payment go to loan
        if(loanAmmount <= 0){
            loan.parentNode.removeChild(loan)
            payButtonElement.style.visibility = 'hidden' // Hide the pay button
            payElement.innerText = 0.9 * parseFloat(payElement.innerText) - loanAmmount
        }
        else{
            loan.innerText = `loan ${loanAmmount} Kr.` // Set text of item element
            payElement.innerText = 0.9 * parseFloat(payElement.innerText) // 90 % of payment will go to bank
        }
    }
    balanceElement.innerText = parseFloat(balanceElement.innerText) + parseFloat(payElement.innerText) // Update bank balance
    payElement.innerText = 0 // Update payment
    buyMessageElement.innerText = "" // Set empty message
})
// Pay loan
payButtonElement.addEventListener("click", () => {
    const loan = loanListElement.getElementsByTagName("li")[0] // Get loan item element
    let loanAmmount = Number(loan.innerText.split(" ")[1]) // Get ammount of loan
    loanAmmount -= parseFloat(payElement.innerText) // Update loan
    if(loanAmmount <= 0){
        loan.parentNode.removeChild(loan) // Remove loan item element 
        payElement.innerText = - loanAmmount // Update payment
        payButtonElement.style.visibility = 'hidden' // Hide the pay button
    }
    else{
        loan.innerText = `loan ${loanAmmount} Kr.` // Set text of item element
        payElement.innerText = 0 // Update payment
    }
    buyMessageElement.innerText = "" // Set empty message
})
//
buyButtonElement.addEventListener("click", () => {
    let price = parseFloat(laptopPriceElement.innerText)
    let balance = parseFloat(balanceElement.innerText)
    if(price > balance){
        buyMessageElement.style.color = "red"
        buyMessageElement.innerText = 'Error: You can not afford this laptop'
    }
    else{
        balanceElement.innerText = balance - price // Update bank balance
        buyMessageElement.style.color = "green"
        buyMessageElement.innerText = 'You bought this laptop succesfully'
    }
})
// Change laptop descriptions using option menu
laptopsMenuElement.addEventListener("change", (e)=>{
    while (featuresListElement.firstChild) 
        featuresListElement.removeChild(featuresListElement.firstChild) // Remove previous features
    const selectedLaptop = laptops[e.target.selectedIndex] // Get selected laptop
    selectedLaptop.specs.forEach(s => {
        const specElement = document.createElement("li") // Create li element for each specs
        specElement.innerText = s // Load string spec
        featuresListElement.appendChild(specElement) // Append spec element
    })
    laptopImageElement.src = "https://hickory-quilled-actress.glitch.me/" + selectedLaptop.image // Append image path to src
    laptopImageElement.alt = "https://hickory-quilled-actress.glitch.me/" + selectedLaptop.image // Append image path to alt
    laptopTitleElement.innerText = selectedLaptop.title // Set laptop title
    laptopDescriptionElement.innerText = selectedLaptop.description // Set laptop description
    laptopPriceElement.innerText = selectedLaptop.price + ' Kr.'// Set laptop price
    buyMessageElement.innerText = "" // Set empty message
})

// Functions
// Append laptops to menu and initialize to first laptop option
const addLaptopsToMenu = (laptops) => {
    laptops.forEach(l => addLaptopToMenu(l))
    const selectedLaptop = laptops[0] // Get first laptop
    selectedLaptop.specs.forEach(s => {
        const specElement = document.createElement("li") // Create li element for each specs
        specElement.innerText = s // Load string spec
        featuresListElement.appendChild(specElement) // Append spec element
    })
    laptopImageElement.src = "https://hickory-quilled-actress.glitch.me/" + selectedLaptop.image // Append image path to src
    laptopImageElement.alt = "https://hickory-quilled-actress.glitch.me/" + selectedLaptop.image // Append image path to alt
    laptopTitleElement.innerText = selectedLaptop.title // Set laptop title
    laptopDescriptionElement.innerText = selectedLaptop.description // Set laptop description
    laptopPriceElement.innerText = selectedLaptop.price + ' Kr.' // Set laptop price
}
// Append laptop to menu
const addLaptopToMenu = (laptop) => {
    const laptopElement = document.createElement("option")
    laptopElement.value = laptop.id
    laptopElement.appendChild(document.createTextNode(laptop.title))
    laptopsMenuElement.appendChild(laptopElement)
}

// const IntlNfNO = new Intl.NumberFormat('no-NO', { style: 'currency', currency: 'NOK'  }), Intl_NOK = v => IntlNfNO.format( v ).replace('NOK', 'kr') 
