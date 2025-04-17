let position = -200;
let opacity = 1;
const rope = document.getElementById("rope").style;
const curtain = document.getElementById("curtain").style;
let fall = false;


function ropeOver() {
    let intervalID = setInterval(() => {
        position += 5;
        rope.top = position + 'px';
        if (position > -50) {
            clearInterval(intervalID)
        }

    }, 50);

    fall = true;

    // let intervalID = setInterval(() => {
    //     position -= 5;
    //     rope.top = position + 'px';
    //     if (position > 0) {
    //         clearInterval(intervalID)
    //     }

    // }, 50);

    // let intervalID = setInterval(() => {
    //     position -= 5;
    //     rope.top = position + 'px';
    //     if (position == -400) {
    //         clearInterval(intervalID)
    //     }

    // }, 50);

    // anotherInterval();
}

// function anotherInterval() {
//     let intervalID = setInterval(() => {
//         position += 5;
//         rope.top = position + 'px';
//         if (position == -50) {
//             clearInterval(intervalID)
//         }

//     }, 50);
// }

function curtainFall() {
    if(fall == true) {
        curtain.display = "block"
        document.body.style.backgroundImage = "url(https://red-velvet-corridor396.github.io/CSCI-202-2/Assignment-2/images/cemetary.jpg)"
        let intervalID = setInterval(() => {
            position += 5;
            curtain.top = position + 'px';
            if (position > window.outerHeight) {
                curtain.display = "none"
                clearInterval(intervalID)
            }
    
        }, 10);
    }
}

function blockVanish() {
    if(fall == true) {
        let intervalID = setInterval(() => {
            opacity -= 0.1;
            for(let i = 0; i < 5; i++) {
                document.getElementsByClassName("entry")[i].style.opacity = opacity;
            }
            if (position == 0) {
                clearInterval(intervalID)
            }
    
        }, 50);
    }
}
