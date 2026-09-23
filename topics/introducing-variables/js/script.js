/**
 * introducing variables
 * Alexey Openkov
 * 
 * learning what a variable is and does
 * 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
// Create the canvas
    createCanvas(640, 640);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(0);
    
    // Draw a circle in the centre of the canvas
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(320, 320, 100, 100);
    pop();
}