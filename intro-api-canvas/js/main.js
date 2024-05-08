const canvas_rectangulo = document.getElementById("canvas_rectangulo");
const canvas_triangulo = document.getElementById("canvas_triangulo");
const canvas_pluma = document.getElementById("canvas_pluma");
const canvas_lineas = document.getElementById("canvas_lineas");
const canvas_arcos = document.getElementById("canvas_arcos");
const canvas_Bézier = document.getElementById("canvas_Bézier");
const canvas_rectangulo_2 = document.getElementById("canvas_rectangulo_2");
const canvas_Path2D = document.getElementById("canvas_Path2D");

//cuadrado dentro de otro 

function draw_rectangulo() {
    const ctx = canvas_rectangulo.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
}

//triangulo normal

function draw_triangulo() {
    const ctx = canvas_triangulo.getContext("2d");
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.moveTo(25, 100);
    ctx.lineTo(125, 100);
    ctx.lineTo(75, 25);
    ctx.fill();
}

//carita feliz

function draw_pluma() {
    const ctx = canvas_pluma.getContext("2d");
    ctx.strokeStyle = "rgb(115, 94, 54)";
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
    ctx.stroke();
}

//2 triangulos

function draw_lineas() {
    const ctx = canvas_lineas.getContext("2d");
    ctx.fillStyle = "rgb(255, 51, 215)";
    ctx.strokeStyle = "rgb(150, 21, 125)";
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
}

//lineas y circulos

function draw_arcos() {
    const ctx = canvas_arcos.getContext("2d");
    ctx.fillStyle = "rgb(142, 238, 234)";
    ctx.strokeStyle = "rgb(16, 178, 171)";
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            ctx.beginPath();
            const x = 25 + j * 50;
            const y = 25 + i * 50;
            const radius = 20;
            const startAngle = 0;
            const endAngle = Math.PI + (Math.PI * j) / 2;
            const counterclockwise = i % 2 !== 0;
            ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
            if (i > 1) {
                ctx.fill();
            } else {
                ctx.stroke();
            }
        }
    }
}


//simbolo conversacion
function draw_Bézier() {
    const ctx = canvas_Bézier.getContext("2d");
    ctx.fillStyle = "rgb(209, 209, 255)";
    ctx.strokeStyle = "rgb(31, 33, 210)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.fill();
    ctx.stroke();
}


//Pacman
function draw_rectangulo_2() {
    const ctx = canvas_rectangulo_2.getContext("2d");
    ctx.fillStyle = "rgb(52, 7, 148)";

    if (canvas_rectangulo_2.getContext) {
        roundedRect(ctx, 12, 12, 150, 150, 15);
        roundedRect(ctx, 19, 19, 150, 150, 9);
        roundedRect(ctx, 53, 53, 49, 33, 10);
        roundedRect(ctx, 53, 119, 49, 16, 6);
        roundedRect(ctx, 135, 53, 49, 33, 10);
        roundedRect(ctx, 135, 119, 25, 49, 10);

        ctx.beginPath();
        ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
        ctx.lineTo(31, 37);
        ctx.fill();

        for (let i = 0; i < 8; i++) {
            ctx.fillRect(51 + i * 16, 35, 4, 4);
        }

        for (let i = 0; i < 6; i++) {
            ctx.fillRect(115, 51 + i * 16, 4, 4);
        }

        for (let i = 0; i < 8; i++) {
            ctx.fillRect(51 + i * 16, 99, 4, 4);
        }

        ctx.beginPath();
        ctx.moveTo(83, 116);
        ctx.lineTo(83, 102);
        ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
        ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
        ctx.lineTo(111, 116);
        ctx.lineTo(106.333, 111.333);
        ctx.lineTo(101.666, 116);
        ctx.lineTo(97, 111.333);
        ctx.lineTo(92.333, 116);
        ctx.lineTo(87.666, 111.333);
        ctx.lineTo(83, 116);
        ctx.fill();

        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.moveTo(91, 96);
        ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
        ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
        ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
        ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
        ctx.moveTo(103, 96);
        ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
        ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
        ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
        ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
        ctx.fill();
    }
}

function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
}

function draw_Path2D() {
    const ctx = canvas_Path2D.getContext("2d");
    
    const rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);
  
    const circle = new Path2D();
    circle.arc(100, 35, 25, 0, 2 * Math.PI);
  
    ctx.stroke(rectangle);
    ctx.fill(circle);
}



draw_rectangulo();
draw_triangulo();
draw_pluma();
draw_lineas();
draw_arcos();
draw_Bézier();
draw_rectangulo_2();
draw_Path2D();
