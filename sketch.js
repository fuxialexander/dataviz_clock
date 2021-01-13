let arr = [];

function setup() {
  createCanvas(160 * 6 + 10, 160 * 4 + 10);
  for (let i = 1; i < 70; i++) {
    arr.push(i);
  }

}

function draw() {
  background(0);
  textAlign(CENTER, CENTER);

  let squaresize = 160
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 6; x++) {
      let xpos = x * squaresize + 10;
      let ypos = y * squaresize + 10;
      fill(255)
      stroke(0);
      rect(xpos, ypos, squaresize - 10, squaresize - 10);
    }
  }

  fill(0);
  stroke(0);
  for (let i = hour(); i < 25; i++) {
    rect(i % 6 * squaresize + 10, ~~(i / 6) * squaresize + 10, squaresize - 10, squaresize - 10)
  }

  let xmin = hour() % 6 * squaresize + 10;
  let ymin = ~~(hour() / 6) * squaresize + 10

  fill(255)
  let minsquaresize = (squaresize - 10) / 8
  for (let l = 0; l < 8; l++) {
    for (let m = 0; m < 8; m++) {
      let xminpos = l * minsquaresize + xmin;
      let yminpos = m * minsquaresize + ymin;

      fill(255);
      rect(xminpos + minsquaresize * 0.4 / 2, yminpos + minsquaresize * 0.4 / 2, minsquaresize * 0.4, minsquaresize * 0.4);
    }
  }

  fill(0);
  for (let o = minute(); o < 64; o++) {
    rect(o % 8 * minsquaresize + xmin, ~~(o / 8) * minsquaresize + ymin, minsquaresize, minsquaresize)
  }


  fill(255)
  if (second() % 60 == 0) {
    console.log(minute())
  }

  let s = (second() % 4 + 60)
  rect(s % 8 * minsquaresize + xmin + minsquaresize * 0.4 / 2, ~~(s / 8) * minsquaresize + ymin + minsquaresize * 0.4 / 2, 10, 10, 20)
}