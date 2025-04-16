let position = -200;
const rope = document.getElementById("rope").style


function ropeOver() {
    let intervalID = setInterval(() => {
        position += 5;
        rope.top = position + 'px';
        if (position > -50) {
            clearInterval(intervalID)
        }

    }, 50);

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

