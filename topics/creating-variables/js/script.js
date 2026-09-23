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
let holeSize = 180;

function setup() {
    // Create the canvas
    createCanvas(480, 480);
}

function draw() {
    // Cheese colour (yellow)
    background(255, 255, 0);
    
    // Draw a hole in the upper left
    push();
    noStroke();
    fill(0);
    ellipse(140, 175, holeSize);
    pop();
}