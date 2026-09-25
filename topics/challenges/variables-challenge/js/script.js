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

canvas {
      border: 1px solid #000;
    }
  </style>
</head>
<body>
  <canvas id="myCanvas" width="100" height="100"></canvas>
  <script>
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');

    // Координаты центра и радиус
    const centerX = 50;
    const centerY = 50;
    const radius = 40;

    // Рисуем две дуги — четверти окружности
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, Math.PI / 2, false); // Первая четверть (верхняя)
    context.arc(centerX + radius * 2, centerY, radius, Math.PI / 2, Math.PI, false); // Вторая четверть (нижняя)

    // Стили
    context.fillStyle = 'white'; // Цвет заливки (белый)
    context.strokeStyle = 'white'; // Цвет контура
    context.lineWidth = 3; // Толщина линии

    // Рисуем
    context.fill(); // Закрашиваем область
    context.stroke(); // Обводим контур
  </script>


