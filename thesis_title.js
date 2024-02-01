// Symmetry corresponding to the number of reflections. Change the number for different number of reflections 
let symmetry = 6;   
let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;


  
function setup() { 
  createCanvas(1500, 500);
  angleMode(DEGREES);
  background(191, 255, 0);

  // Creating the save button for the file
  saveButton = createButton('save');
  saveButton.mousePressed(saveFile);

  // Creating the clear screen button
  clearButton = createButton('clear');
  clearButton.mousePressed(clearScreen);

  // Creating the button for Full Screen
  fullscreenButton = createButton('full screen');
  fullscreenButton.mousePressed(screenFull);

}

// Save File Function
function saveFile() {
  save('design.png');
}

// Clear Screen function
function clearScreen() {
 background(191, 255, 0);
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
  
      let r = lerp(255, 255, interp); // Interpolate red component
      let g = lerp(0, 55, interp); // Interpolate green component
      let b = lerp(5, 250, interp);   // Interpolate blue component
  
      stroke(r, g, b); // Set stroke color
      
      if (mouseIsPressed) {
        let string='blur('+b+'px)';
      console.log(string);
      drawingContext.filter = string;


        for (let i = 0; i < symmetry; i++) {
          angleMode(DEGREES);
          rotate(angle);
          line(mx, my, pmx, pmy);
          strokeWeight(3);
          push();
          scale(1, -1);
          line(mx, my, pmx, pmy);
          pop();
        
        }
      }
    }
    
  }
  