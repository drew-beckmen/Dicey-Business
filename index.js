const generate = document.getElementById("generate")
const roll = document.getElementById("roll")
const sum = document.getElementById("sum")
const diceContainer = document.getElementById("dice-container")

class Die {
    constructor() {
        this.div = document.createElement("div")
        this.div.classList.add("die")
        this.generateRandomFaceValue()

        this.div.addEventListener("dblclick", () => {
            Die.all = Die.all.filter(die => die !== this)
            this.div.remove()
        })

        this.div.addEventListener("click", () => {
            this.generateRandomFaceValue()
        })

        diceContainer.appendChild(this.div)
    }

    generateRandomFaceValue() {
        let randomNum = Math.floor(Math.random() * 5) + 1
        this.div.innerText = randomNum
    }
}

generate.addEventListener("click", () => {
    let newDie = new Die()
    Die.all.push(newDie)
})

roll.addEventListener("click", () => {
    Die.all.forEach(die => {
        die.generateRandomFaceValue()
    })
})

sum.addEventListener("click", () => {
    const total = Die.all.reduce((acc, die) => acc + parseInt(die.div.innerText), 0)
    alert(`The sum of all the die is ${total}`)
})

Die.all = []; 