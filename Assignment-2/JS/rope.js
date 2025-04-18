// Set starting position of rope
let position = -200;
// Set starting opacity of text boxes
let opacity = 1;
// Set starting position of zombie
let zombiePosition = 300;
// Use variables as shortcuts for referring to rope, curtain, hand, zombie
const rope = document.getElementById("rope").style;
const curtain = document.getElementById("curtain").style;
const hand = document.getElementById("hand").style;
const zombie = document.getElementById("zombie").style
// Boolean variables used to mark progress in the entire sequence; railroads user into following sequence in the correct order
let fall = false;
let zombieUp = false;
let zombieRising = false;
// True = left, false = right
let zombieDirection = true


function ropeOver() {
    if(fall == false) {
        let intervalID = setInterval(() => {
            position += 5;
            rope.top = position + 'px';
            if (position > -50) {
                clearInterval(intervalID)
            }
    
        }, 50);
    
    }
}

function curtainFall() {
    if (fall == false) {
        curtain.display = "block"
        // MUST BE DIFFERENT IN GITHUB REPO
        document.body.style.backgroundImage = "url(https://red-velvet-corridor396.github.io/CSCI-202-2/Assignment-2/images/cemetary.jpg)"
        document.getElementById("curtain_mp3").play()
        let intervalID = setInterval(() => {
            position += 12;
            curtain.top = position + 'px';
            if (position > window.outerHeight) {
                curtain.display = "none"
                clearInterval(intervalID)
            }

        }, 10);
        document.getElementById("grave").style.display = "block"

        setTimeout(() => {
            document.getElementById("howl").play()
        }, 3000)

        fall = true
    }
}

function blockVanish() {
    if (fall == true) {
        let intervalID = setInterval(() => {
            opacity -= 0.1;
            for (let i = 0; i < 6; i++) {
                document.getElementsByClassName("vanish")[i].style.opacity = opacity;
            }
            if (opacity < 0) {
                clearInterval(intervalID)
            }

        }, 50);
    }
}

function zombieHand() {
    // Checks that curtain sequence has occurred 
    if (fall == true) {
        // Checks if function has already been called so it can only be called once
        if (zombieUp == false) {
            // Starting position of hand below ground
            let handTop = 300
            document.getElementById("earth1").play()
            let intervalID = setInterval(() => {
                // Moves hand up 6px at a time
                handTop -= 6;
                hand.top = handTop + 'px';
                // Once hand is in the right position (top: 110px), stop moving up
                if (handTop < 111) {
                    clearInterval(intervalID)
                }

            }, 10);
        }
    }

    // Marks function as already called so that it cannot be called a second time
    zombieUp = true;
}

document.addEventListener("keydown", event => {
    // Checks if hand event is completed
    if (zombieUp == true) {
        // Checks if zombie is still partially underground
        if (zombiePosition > -241) {
            // Hides hand img
            hand.display = "none";
            // LEFT ARROW KEY
            if (event.key == "ArrowLeft") {
                // Make zombie face left
                zombie.transform = ""
                document.getElementById("dig").play()
                // Raise zombie by 12px
                zombiePosition -= 12;
            }
            // RIGHT ARROW KEY
            if (event.key == "ArrowRight") {
                //  Make zombie face right
                zombie.transform = "scaleX(-1)"
                document.getElementById("dig").play()
                zombiePosition -= 12;
            }

            // Apply counter to actual zombie position
            zombie.top = zombiePosition + 'px';

            // Execute the following when zombie has reached the surface completely
            if (zombiePosition < -239) {
                // Checks to see if sounds already played
                if (zombieRising == false) {
                    // Make sure zombie is facing left 
                    zombie.transform = ""
                    document.getElementById("growl_1").play()

                    document.getElementById("footsteps").play()
                    document.getElementById("footsteps").loop = true;

                    // Marks sounds as already played
                    zombieRising = true;
                }
                // Set zombie starting position
                let zombieRX = 10
                // Begin animation
                let intervalID2 = setInterval(() => {
                    // Zombie going left (default)
                    if (zombieDirection == true) {
                        zombie.transform = ""
                        zombieRX += 5;
                    }
                    // Zombie going right
                    else {
                        zombie.transform = "scaleX(-1)"
                        zombieRX -= 5;
                    }

                    // Apply counter to actual zombie position
                    zombie.right = zombieRX + 'px';

                    // Once zombie reaches left side of screen, turn around, go other way
                    if (zombieRX > window.innerWidth) {
                        zombieDirection = false;
                    }
                    // Once zombie reaches right side of screen, turn around, go other way
                    if (zombieRX < 0) {
                        zombieDirection = true;
                    }
                }, 24);
            }
        }
    }
})

function zombieClick() {
    document.getElementById("growl_2").play()
}
