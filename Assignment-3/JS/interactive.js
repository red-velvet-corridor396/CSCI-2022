function setup() {
    createCanvas(550, 550);
  }

colors = [
  [197,200,207], /* row 0, triangle 1 */
  [0,0,0], /* row 1, triangle 2 */
  [217,170,2], /* row 2, triangle 3 */
  [232,225,215], /* row 3, triangle 4 */
  [232,225,215], /* row 4, triangle 5 */
  [197, 200, 207], /* row 5, triangle 6 */
  [126,125,130], /* row 6, triangle 7*/ 
  [179,44,15] /* row 7, triangle 8*/
]

  function draw() {
  strokeWeight(7)
//   Gray triangle top left
    stroke(colors[0][0],colors[0][1], colors[0][2]);
    fill(colors[0][0],colors[0][1], colors[0][2]);
    triangle(212, 72, 72, 72, 72, 212);
    
//   Beige triangle bottom left
    stroke(colors[3][0],colors[3][1], colors[3][2]);
    fill(colors[3][0],colors[3][1], colors[3][2]);
    triangle(76,478,270,478,161,392);
    
//   Yellow triangle bottom left
    stroke(colors[2][0],colors[2][1], colors[2][2]);
    fill(colors[2][0],colors[2][1], colors[2][2]);
    triangle(72,473,156,388,72,324);
    
//   Grey triangle bottom center
    stroke(colors[5][0],colors[5][1], colors[5][2]);
    fill(colors[5][0],colors[5][1], colors[5][2]);
    triangle(277,478,408,478,277,324)
    strokeWeight(10)
    
//   Dark gray triangle top right
    stroke(colors[6][0],colors[6][1], colors[6][2]);
    fill(colors[6][0],colors[6][1], colors[6][2]);
    triangle(361,73,470,73,418,135)
    
//   Red triangle
    stroke(colors[7][0],colors[7][1], colors[7][2]);
    fill(colors[7][0],colors[7][1], colors[7][2]);
    triangle(476,81,476,550,280,314)
    
// Beige triangle top center
    stroke(colors[4][0],colors[4][1], colors[4][2]);
    fill(colors[4][0],colors[4][1], colors[4][2]);
    triangle(279,301,279,0,412,142)
    
//   Black triangle
    push();
    stroke(colors[1][0],colors[1][1], colors[1][2]);
    fill(colors[1][0],colors[1][1], colors[1][2]);
    triangle(269,471,269,20,20,271)
    
//   Beige box frame
    noFill()
    stroke(242,235,227);
    strokeWeight(7);
    square(65,65,420);
    
// Black "background"
    stroke("black")
    strokeWeight(123)
    square(0,0,550)

  }
