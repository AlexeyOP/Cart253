/**
 * creating variables
 * Alexey Openkov
 * 
 * learning how to create variables
 * 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
 // Create the canvas
    createCanvas(480, 480);
}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    // Cheese colour (yellow)
    background(255, 255, 0);

     // Draw a hole in the upper left
    push();
    noStroke();
    fill(0);
    // When we only provide a width argument we get a circle
    // with that diameter
    // https://p5js.org/reference/p5/ellipse/
    ellipse(140, 175, 180);
    pop();

}
