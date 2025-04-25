let tri;
let triCount;
let RGB;
let increment;
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
          triCount = tri + 1;
          document.getElementById("trianglenum").textContent = "Triangle: " + triCount
          break;
        case "2":
          tri = 1;
          triCount = tri + 1;
          document.getElementById("trianglenum").textContent = "Triangle: " + triCount
          break;
        case "3":
          tri = 2;
          triCount = tri + 1;
          document.getElementById("trianglenum").textContent = "Triangle: " + triCount
          break;
        case "4":
          tri = 3;
          triCount = tri + 1;
          document.getElementById("trianglenum").textContent = "Triangle: " + triCount
          break;
        case "5":
          tri = 4;
          triCount = tri + 1;
          document.getElementById("trianglenum").textContent = "Triangle: " + triCount
          break;
        case "6":
          tri = 5;
          triCount = tri + 1;
          document.getElementById("trianglenum").textContent = "Triangle: " + triCount
          break;
        case "7":
          tri = 6;
          triCount = tri + 1;
          document.getElementById("trianglenum").textContent = "Triangle: " + triCount
          break;
        case "8":
          tri = 7;
          triCount = tri + 1;
          document.getElementById("trianglenum").textContent = "Triangle: " + triCount
          break;
        case "ArrowUp":
            if (typeof increment !== 'undefined') {
                // Makes sure that RGB value stops at 255
              if (colors[tri][RGB] + increment > 255 ){
                colors[tri][RGB] = 255;
              }
              else {
                // Regular incrementing
                colors[tri][RGB] += increment;
              }
              
            }
            else {
                alert("Please choose an increment amount first.");
            }
                
            break;
        case "ArrowDown":
            if (typeof increment !== 'undefined') {
              // Makes sure that RGB value stops at 0
              if (colors[tri][RGB] - increment < 0 ){
                colors[tri][RGB] = 0;
              }
              else {
                // Regular incrementing
                colors[tri][RGB] -= increment;
              }
              
            }
            else {
                alert("Please choose an increment amount first.");
            }
          break;
      }
    //   This is only for testing purposes
      console.log(RGB, tri)
    }

    
)

function oneClick(){
    increment = 1;
    document.getElementById("one").style.color = "orange"
    document.getElementById("five").style.color = ""
    document.getElementById("ten").style.color = ""
    document.getElementById("fift").style.color = ""
}

function fiveClick(){
    increment = 5;
    document.getElementById("one").style.color = ""
    document.getElementById("five").style.color = "orange"
    document.getElementById("ten").style.color = ""
    document.getElementById("fift").style.color = ""
}

function tenClick(){
    increment = 10;
    document.getElementById("one").style.color = ""
    document.getElementById("five").style.color = ""
    document.getElementById("ten").style.color = "orange"
    document.getElementById("fift").style.color = ""
}

function fiftClick(){
    increment = 50;
    document.getElementById("one").style.color = ""
    document.getElementById("five").style.color = ""
    document.getElementById("ten").style.color = ""
    document.getElementById("fift").style.color = "orange"
}