
/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(0, 0, 0);
  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();


// Seagull positioning and dimensions
        const centerX = 200;
        const centerY = 150;
        const radius = 40; // The radius of our quarter-circle wings

        ctx.strokeStyle = '#ffffff'; // White color for the seagull
        ctx.lineWidth = 5;          // Thickness of the wings
        ctx.lineCap = 'round';       // Smooth rounded ends for the wings

        ctx.beginPath();

        // 1. Left Wing: Draw a quarter circle from 180° (Math.PI) to 270° (1.5 * Math.PI)
        // This creates an upward arching curve from left to center.
        ctx.arc(centerX - radius, centerY + radius, radius, Math.PI, 1.5 * Math.PI, false);

        // 2. Right Wing: Draw a quarter circle from 270° (1.5 * Math.PI) to 360°/0° (0)
        // This continues from the center and arches back down to the right.
        ctx.arc(centerX + radius, centerY + radius, radius, 1.5 * Math.PI, 0, false);

}