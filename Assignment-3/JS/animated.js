// let angle = 0; 
let angle2 = 0;
let angle3 = 0;
let angle4 = 0;
let angle5 = 0;
let angle6 = 0;
let angle7 = 0;
let angle8 = 0;
let angle9 = 0;

let whichTriangle = 0;

let angle = [0,0,0,0,0,0,0,0]

function setup() {
  createCanvas(550, 550);
}

function draw() {
  background((200, 190, 180)); // White background

  strokeWeight(7)


//   Red triangle
  push();
  let a22 = 476, b22 = 79;
  let a23 = 476, b23 = 550;
  let a24 = 280, b24 = 314;

  let cx8 = (a22 + a23 + a24) / 3;  // (476 + 476 + 280) / 3 = 410.67
  let cy8 = (b22 + b23 + b24) / 3;  // (79 + 550 + 314) / 3 = 314.33

  translate(cx8, cy8)
  rotate(angle[7])
  stroke(179,44,15)
  fill(179,44,15)
  // triangle(476,79,476,550,280,314)
  triangle(
    a22 - cx8, b22 - cy8,
    a23 - cx8, b23 - cy8,
    a24 - cx8, b24 - cy8
  )
  pop();
// Beige triangle top center
  push();
  let a19 = 276, b19 = 307;
  let a20 = 276, b20 = 0;
  let a21 = 414, b21 = 143;

  let cx7 = (a19 + a20 + a21) / 3;  // (276 + 276 + 414) / 3 = 322
  let cy7 = (b19 + b20 + b21) / 3;  // (307 + 0 + 143) / 3 = 150
  
  translate(cx7, cy7)
  rotate(angle[4])
  stroke(232,225,215)
  fill(232,225,215)
  // triangle(276,307,276,0,414,143)
  triangle(
    a19 - cx7, b19 - cy7, 
    a20 - cx7, b20 - cy7,
    a21 - cx7, b21 - cy7
  )
  pop();
//   Black triangle
  push();
  let a16 = 269, b16 = 471;
  let a17 = 269, b17 = 20;
  let a18 = 20,  b18 = 271;

  let cx6 = (a16 + a17 + a18) / 3;  // (269 + 269 + 20) / 3 = 186
  let cy6 = (b16 + b17 + b18) / 3;  // (471 + 20 + 271) / 3 = 254

  translate(cx6,cy6)
  rotate(angle[1])
  stroke("black")
  fill("black")
  // triangle(269,471,269,20,20,271)
  triangle(
    a16 - cx6, b16 - cy6,
    a17 - cx6, b17 - cy6,
    a18 - cx6, b18 - cy6
  )
  pop();
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
  
  //   Gray triangle top left
  push();
  
  let a1 = 212, b1 = 72, a2 = 72, b2 = 72, a3 = 72, b3 = 212;
  let cx1 = (a1 + a2 + a3) / 3;
  let cy1 = (b1 + b2 + b3) / 3;
  
  translate(cx1,cy1)
  rotate(angle[0])
  strokeWeight(7)
  stroke(197, 200, 207);
  fill(197, 200, 207);
  triangle(
    a1 - cx1, b1 - cy1,
    a2 - cx1, b2 - cy1,
    a3 - cx1, b3 - cy1
  );
  pop();
  
  strokeWeight(7)
  
//   Beige triangle bottom left
  push();
  
  let a7 = 76,  b7 = 478;
  let a8 = 270, b8 = 478;
  let a9 = 161, b9 = 392;

  let cx3 = (a7 + a8 + a9) / 3;  // (76 + 270 + 161) / 3 = 169
  let cy3 = (b7 + b8 + b9) / 3;  // (478 + 478 + 392) / 3 = 449.33

  translate(cx3,cy3)
  rotate(angle[3])
  stroke(232,225,215);
  fill(232,225,215);
  // triangle(76,478,270,478,161,392);
  triangle(
    a7 - cx3, b7 - cy3,
    a8 - cx3, b8 - cy3,
    a9 - cx3, b9 - cy3
  );
  pop();
//   Yellow triangle bottom left
  push();
  
  let a4 = 72,  b4 = 473;
  let a5 = 156, b5 = 388;
  let a6 = 72,  b6 = 322;

  let cx2 = (a4 + a5 + a6) / 3;  // (72 + 156 + 72) / 3 = 100
  let cy2 = (b4 + b5 + b6) / 3;  // (473 + 388 + 322) / 3 = 394.33

  translate(cx2,cy2)
  rotate(angle[2])
  fill(217,170,2);
  stroke(217,170,2);
  // triangle(72,473,156,388,72,322);
  triangle(
    a4 - cx2, b4 - cy2,
    a5 - cx2, b5 - cy2,
    a6 - cx2, b6 - cy2
  );
  pop();
  
//   Grey triangle bottom center
  push();
  let a10 = 276, b10 = 478;
  let a11 = 408, b11 = 478;
  let a12 = 277, b12 = 322;

  let cx4 = (a10 + a11 + a12) / 3;  // (276 + 408 + 277) / 3 = 320.33
  let cy4 = (b10 + b11 + b12) / 3;  // (478 + 478 + 322) / 3 = 426

  translate(cx4,cy4)
  rotate(angle[5])
  stroke(197, 200, 207);
  fill(197, 200, 207);
  // triangle(276,478,408,478,277,322)
  triangle(
    a10 - cx4, b10 - cy4,
    a11 - cx4, b11 - cy4,
    a12 - cx4, b12 - cy4
  )
  pop();
  
  
//   Dark gray triangle top right
  push();
  let a13 = 359, b13 = 73;
  let a14 = 470, b14 = 73;
  let a15 = 419, b15 = 136;

  let cx5 = (a13 + a14 + a15) / 3;  // (359 + 470 + 419) / 3 = 416
  let cy5 = (b13 + b14 + b15) / 3;  // (73 + 73 + 136) / 3 = 94

  translate(cx5, cy5)
  rotate(angle[6])
  fill(126,125,130)
  strokeWeight(10)
  stroke(126,125,130)
  // triangle(359,73,470,73,419,136)
  triangle(
    a13 - cx5, b13 - cy5,
    a14 - cx5, b14 - cy5, 
    a15 - cx5, b15 - cy5
  )
  pop();

  if (angle[whichTriangle] < TWO_PI) {
    angle[whichTriangle] += 0.1;}
  else {
    whichTriangle += 1
  }
  
  if (whichTriangle > 7){
    for (i = 0; i < 8; i++){
      angle[i] = 0;
      whichTriangle = 0
    }
  }
  
  

    
  
  
  
}