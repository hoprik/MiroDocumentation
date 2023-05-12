let tugi = false
let isShow = false
let lastMessge = ""
const arrayAbouts = ["новое поколение в сюжете", "простота в использование", "открытый исходный код", "крутая документация!", "движок за 3 недели!", "движок для создания сюжета в майнкрафте"]
// let tran 


document.querySelector(".tudi").addEventListener("click", ()=>{
    if (!tugi){
        let gif = "https://media.tenor.com/8rDsZRGVnQEAAAAd/%D0%B1%D0%B0%D1%80%D1%85%D0%B0%D1%82%D0%BD%D1%8B%D0%B5-%D1%82%D1%8F%D0%B3%D0%B8.gif"
        document.body.style.background = `url(${gif})`
        document.body.style.backgroundSize = "cover"
        tugi = true;
    }
    else{
        document.body.style.background = ``
        document.body.style.backgroundSize = "cover"
        tugi = false;
    }
})

setTimeout(writeText, 1, "", arrayAbouts[1])

function removeText(word){
    if (word[0] != undefined){
        word = word.slice(0, -1);
        let text = document.querySelector(".mainText")
        text.innerHTML = "MiroEngine - "+word
        setTimeout(removeText, 50, word)
    }
    else{
        let run = true;
        while (run){
            const random = Math.floor(Math.random() * arrayAbouts.length)
            if (arrayAbouts[random] != lastMessge){
                run = false;
                writeText("", arrayAbouts[random])
            }
        }
    }
}


function writeText(word, textFromArray){
    if (word != textFromArray){
        word = word + textFromArray[word.length]
        let text = document.querySelector(".mainText")  
        text.innerHTML = "MiroEngine - "+word
        setTimeout(writeText, 100, word, textFromArray)
    }
    else{
        lastMessge = textFromArray;
        setTimeout(removeText, 5000, word)
    }
}

document.querySelector("button.apiShows").addEventListener("click", ()=>{
    const showWrapper = document.querySelector(".apiShowWrapper")
    let procentWidht = 0;
    const idInterval = setInterval(()=>{
        if (procentWidht <100){
            procentWidht+=1;
            showWrapper.setAttribute("style", `opacity:${procentWidht}%;`)
        }
    }, 0.1)
})

// document.querySelectorAll("a.transit").forEach(e=>{
//     e.addEventListener("click", (event)=>{
//         event.defaultPrevented()
//         tran = document.createElement("div")
//         tran.className = "transition"
//         tran.style.width = 0;
//         document.querySelector(".wrapper").appendChild(tran)
//         setTimeout(openTrasit, 100, px+0.1)
//     })
// })

// function openTrasit(px){
//     console.log(openTrasit);
//     tran.style.width = px+0.1+"vw"
//     setTimeout(openTrasit, 100, px+0.1)
// }