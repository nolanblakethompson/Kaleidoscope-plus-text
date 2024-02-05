let symmetry = 6;
let angle;
let saveButton, clearButton, fullscreenButton, blurSlider;
let blurValue = 0;


function setup() {
  createCanvas(1500, 500);
  angle = 360 / symmetry;
  angleMode(DEGREES);
  background(0);
  colorMode(HSB, 360, 100, 100); // Set color mode to HSB
  stroke(255);
  smooth();
  

  // Creating div for buttons
  let buttonDiv = createDiv('');
  buttonDiv.position(10, 550);

  // Creating the save button for the file
  saveButton = createButton('save');
  saveButton.parent(buttonDiv);
  saveButton.mousePressed(saveFile);
  saveButton.class('button-style');

  // Creating the clear screen button
  clearButton = createButton('clear');
  clearButton.parent(buttonDiv);
  clearButton.mousePressed(clearScreen);
  clearButton.class('button-style');

  // Creating the button for Full Screen
  fullscreenButton = createButton('full screen');
  fullscreenButton.parent(buttonDiv);
  fullscreenButton.mousePressed(screenFull);
  fullscreenButton.class('button-style');


}



// Save File Function
function saveFile() {
  save('design.png');
}

// Clear Screen function
function clearScreen() {
  background(0);
}

// Full Screen Function
function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}




function draw() {
  translate(width / 2, height / 2);
  

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    let d = dist(mx, my, pmx, pmy); // Calculate distance between current and previous points
    let interp = map(d, 0, 100, 0, 1); // Map distance to a value between 0 and 1 for interpolation

    strokeWeight(2); // Set stroke weight

    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }

    
  }
}



