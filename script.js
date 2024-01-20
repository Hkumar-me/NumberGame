
function startGame() {
    let score = 0;
    let hitVal = ""
    function makeBubble() {
        let clutter = "";
        for (let i = 0; i < 150; i++) {
            let randomNum = Math.floor(Math.random() * 10)
            clutter += `<div class="bubble">${randomNum}</div>`
        }

        document.querySelector(".main .panel .panelBtm").innerHTML = clutter

    }

    function timer() {
        let timer = 60
        let timerId = setInterval(() => {
            if (timer > 0) {
                timer--
                document.querySelector(".timer").textContent = timer
            }
            else {
                clearInterval(timerId)
                document.querySelector(".panelBtm").innerHTML = `<h1 class="gO">Game Over</h1>`
                document.querySelector(".panelBtm").innerHTML += `\n<h1>Your Score : ${score}</h1>`
                document.querySelector(".panelBtm").innerHTML += `<button class="playAgain">Play Again</button>`
                document.querySelector(".main .panel .panelBtm .playAgain").addEventListener("click", () => {
                    startGame()
                })
            }
        }, 1000)
    }

    function newHitValue() {
        hitVal = Math.floor(Math.random() * 10)
        document.querySelector(".hitValue").textContent = hitVal
    }

    function scoreUpdate() {
        score += 10
        document.querySelector(".score").textContent = score
    }

    document.querySelector(".panelBtm")
        .addEventListener("click", (dets) => {
            let clickedNum = Number(dets.target.textContent)
            if (clickedNum == hitVal) {
                scoreUpdate()
                newHitValue()
                makeBubble()
            }
        })


    newHitValue()
    timer()
    makeBubble()
}


startGame()



let flag = 0
document.querySelector(".main i")
    .addEventListener("click", () => {
        if (flag == 0) {
            document.querySelector(".main .info")
                .style.opacity = 1
            flag = 1
        }
        else{
            document.querySelector(".main .info")
            .style.opacity = 0
        flag = 0
        }

        setInterval(()=>{
            document.querySelector(".main .info")
            .style.opacity = 0
        }, 5000)
    })