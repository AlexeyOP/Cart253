/**
 * Function calls
 * Alexey Openkov
 * 
 * This programm draw white page in orange background
 * 
 *  Uses:
 * p5.js and p5.sound
 * https://p5js.org/
 */



"use strict";

/**
 * Creates a 640x480 canvas for our masterpiece
 */

function setup() {
    // Create the canvas at a standard resolution
    createCanvas(640, 480);
}


/**
 * Draws a blank piece of paper on orange background
 */
function draw() {
    // A orange background
    background(219, 119, 13);
    // The blank piece of paper
    rect(200, 80, 240, 320);
}

