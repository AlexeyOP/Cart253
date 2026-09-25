/**
 * Mr. Furious
 * Alexey Openkov
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  x: 200,
  y: 200,
  size: 100,
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};

// Sky object for day-to-night transition
let sky = {
  r: 160,
  g: 180,
  b: 200
};

// Rage variable to control color and shaking
let rage = 0;

// Annoying bird object
let bird = {
  x: -50,
  y: 100,
  vx: 3,
  size: 30
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Increase rage slowly over time up to a limit of 1
  if (rage < 1) {
    rage += 0.001;
  }

  // Step 3: Turn sky from blue to black based on rage
  sky.r = lerp(160, 0, rage);
  sky.g = lerp(180, 0, rage);
  sky.b = lerp(200, 0, rage);
  background(sky.r, sky.g, sky.b);

  // Step 4: Update and draw the annoying bird with a sine wave bob
  bird.x += bird.vx;
  // Reset bird when it goes off screen
  if (bird.x > width + 50) {
    bird.x = -50;
    bird.y = random(50, 200);
  }
  // Sine wave bobbing up and down
  let birdOffsetY = sin(frameCount * 0.1) * 10;

  push();
  fill(255, 255, 0); // Yellow bird
  noStroke();
  ellipse(bird.x, bird.y + birdOffsetY, bird.size, bird.size * 0.6);
  pop();

  // Step 2 & 6: Make Mr. Furious turn red using the rage variable
  mrFurious.fill.g = map(rage, 0, 1, 225, 0);
  mrFurious.fill.b = map(rage, 0, 1, 225, 0);

  // Step 5 & 6: Calculate shake amount based on rage
  let shakeLimit = map(rage, 0, 1, 0, 15);
  let shakeX = random(-shakeLimit, shakeLimit);
  let shakeY = random(-shakeLimit, shakeLimit);

  // Draw Mr. Furious with shaking offset applied
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x + shakeX, mrFurious.y + shakeY, mrFurious.size);
  pop();
}

