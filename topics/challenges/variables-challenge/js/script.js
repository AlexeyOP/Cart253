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


  <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Чайка в VS Code</title>
    <style>
        body {
            background-color: #a0c4ff; /* Небо */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        /* Силуэт чайки */
        .gull {
            position: relative;
            width: 150px;
            height: 50px;
        }

        /* Левое и правое крыло через псевдоэлементы */
        .gull::before, .gull::after {
            content: "";
            position: absolute;
            width: 80px;
            height: 40px;
            border-radius: 50px 50px 0 0;
            border-top: 6px solid #ffffff; /* Цвет чайки */
            background: transparent;
        }

        /* Левое крыло */
        .gull::before {
            left: 0;
            transform: rotate(-20deg);
        }

        /* Правое крыло */
        .gull::after {
            right: 0;
            transform: rotate(20deg);
        }
    </style>
</head>
<body>

    <!-- Сама чайка -->
    <div class="gull"></div>

</body>
</html>
