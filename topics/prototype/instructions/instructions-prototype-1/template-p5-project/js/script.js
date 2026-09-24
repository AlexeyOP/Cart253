/**
 * R2D2 Robot
 * Alexey Openkov
 * 
 * We will draw a R2D2 robot from star wars
 */

"use strict";

/**
 * I tried inserting an image as a background, but it didn't work.
*/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  
  // Center the robot in the canvas
  translate(width / 2, height / 2);
  
  // Styling defaults
  stroke(40);
  strokeWeight(3);
  rectMode(CENTER);
  
  // 1. LEGS (Left and Right)
  fill(220); // Silver/White
  rect(-55, 30, 20, 110, 5);  // Left leg
  rect(55, 30, 20, 110, 5);   // Right leg
  
  // Feet
  fill(180);
  arc(-55, 85, 35, 20, 0, PI, CHORD); // Left foot
  arc(55, 85, 35, 20, 0, PI, CHORD);  // Right foot
  
  // 2. BODY (Main Torso)
  fill(240); // White body
  rect(0, 20, 80, 110, 0, 0, 10, 10); 
  
  // Blue Body Details
  fill(219, 82, 13); // R2 orange
  rect(0, -25, 60, 10);
  rect(-20, 10, 20, 40);
  rect(20, 10, 20, 40);
  rect(0, 45, 60, 15);
  
  // 3. DOME (Head)
  fill(190); // Silver dome
  // arc(x, y, width, height, start, stop, [mode])
  arc(0, -35, 80, 80, PI, 0, CHORD); 
  
  // Dome orange Panels
  fill(219, 82, 13);
  arc(0, -35, 80, 80, PI + 0.3, PI + 0.9, CHORD);
  arc(0, -35, 80, 80, TWO_PI - 0.9, TWO_PI - 0.3, CHORD);
  rect(0, -45, 25, 12);
  
  // 4. EYES & LIGHTS (Primary Sensors)
  // Main Eye (Primary Photoreceptor)
  fill(10);
  circle(0, -55, 14);
  
  // Bottom Lens
  fill(20, 80, 180);
  rect(-18, -42, 10, 10);
  fill(10);
  circle(-18, -42, 4);
  
  // Process Indicator Light (Red)
  fill(255, 0, 50);
  noStroke();
  circle(15, -42, 6);
}
