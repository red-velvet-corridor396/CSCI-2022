let tri;
let RGB;
let increment = 10;
// will add functionality later to choose between 1, 5, 10, 50
document.addEventListener("keydown", event => {
    // Checks to make sure a triangle has been selected before displaying RGB information
    if (typeof tri !== 'undefined'){
        document.getElementById("tricolor").textContent = colors[tri].join(", ") + "\n" 

    }
    switch(event.key) {
        // Cases for choosing whether to edit R, G, or B color values
        case "r":
          RGB = 0;
          document.getElementById("R").style.color = "red"
          document.getElementById("G").style.color = ""
          document.getElementById("B").style.color = ""
          break;
        case "g":
          RGB = 1;
          document.getElementById("R").style.color = ""
          document.getElementById("G").style.color = "green"
          document.getElementById("B").style.color = ""
          break;
        case "b":
          RGB = 2;
          document.getElementById("R").style.color = ""
          document.getElementById("G").style.color = ""
          document.getElementById("B").style.color = "blue"
          break;
        // Cases for selecting which triangle to edit
        case "1":
          tri = 0;
          break;
        case "2":
          tri = 1;
          break;
        case "3":
          tri = 2;
          break;
        case "4":
          tri = 3;
          break;
        case "5":
          tri = 4;
          break;
        case "6":
          tri = 5;
          break;
        case "7":
          tri = 6;
          break;
        case "8":
          tri = 7;
          break;
        case "ArrowUp":
            // Makes sure that RGB value stops at 255
            if (colors[tri][RGB] + increment > 255 ){
                colors[tri][RGB] = 255;
            }
            else {
                // Regular incrementing
                colors[tri][RGB] += increment;
            }
          break;
        case "ArrowDown":
            // Makes sure that RGB value stops at 0
            if (colors[tri][RGB] - increment < 0 ){
                colors[tri][RGB] = 0;
            }
            else {
                // Regular incrementing
                colors[tri][RGB] -= increment;
            }
          break;
      }
    //   This is only for testing purposes
      console.log(RGB, tri)
    }

    
)