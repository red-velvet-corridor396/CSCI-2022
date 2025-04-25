function setup() {
    createCanvas(550, 550);
  }
  
  
  function draw() {
  strokeWeight(7)
  //   Gray triangle top left
    stroke(197, 200, 207);
    fill(197, 200, 207);
    triangle(212, 72, 72, 72, 72, 212);
  //   Beige triangle bottom left
    stroke(232,225,215);
    fill(232,225,215);
    triangle(76,478,270,478,161,392);
  //   Yellow triangle bottom left
    fill(217,170,2);
    stroke(217,170,2);
    triangle(72,473,156,388,72,324);
  //   Grey triangle bottom center
    stroke(197, 200, 207);
    fill(197, 200, 207);
    triangle(277,478,408,478,277,324)
    strokeWeight(10)
  //   Dark gray triangle top right
    fill(126,125,130)
    stroke(126,125,130)
    triangle(361,73,470,73,418,135)
  //   Red triangle
    stroke(179,44,15)
    fill(179,44,15)
    triangle(476,81,476,550,280,314)
  // Beige triangle top center
    stroke(232,225,215)
    fill(232,225,215)
    triangle(279,301,279,0,412,142)
  //   Black triangle
    push();
    stroke("black")
    fill("black")
    triangle(269,471,269,20,20,271)
  //   
  //   
  //   
  //   
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