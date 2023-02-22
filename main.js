const canvas = document.getElementById('canvas');
/** @type CanvasRenderingContext2D */
const c = canvas.getContext('2d');
const zoom_amount_input = document.getElementById('zoom_amount_input');
const movement_rate_input = document.getElementById('movement_rate_input');
const zoom_amount_output = document.getElementById('zoom_amount_output');
const movement_rate_output = document.getElementById('movement_rate_output');

const width = canvas.width;
const height = canvas.height;

let x, y, iteration, cc, cp_x, cp_y, color;

let x_offset = 1;
let y_offset = 1;

let zoom = 80;
let zoom_ammount = 5;
let movement_rate = 0.1;

const maxIteration = 255;

movement_rate_output.innerHTML = parseInt(movement_rate_input.value) / 100;
movement_rate_input.oninput = function() {
    movement_rate_output.innerHTML = parseInt(this.value) / 100;
}

zoom_amount_output.innerHTML = zoom_amount_input.value;
zoom_amount_input.oninput = function() {
    zoom_amount_output.innerHTML = this.value;
}


function user_input(event) {
    movement_rate = parseInt(movement_rate_input.value) / 100;
    zoom_ammount = parseInt(zoom_amount_input.value);
    let user_key = event.which;

    if (user_key == 97) {
        x_offset = x_offset + movement_rate;
    }
    if (user_key == 100) {
        x_offset = x_offset - movement_rate;
    }

    if (user_key == 119) {
        y_offset = y_offset + movement_rate;
    }
    if (user_key == 115) {
        y_offset = y_offset - movement_rate;
    }

    if (user_key == 113) {
        zoom = zoom - zoom_ammount;
    }
    if (user_key == 101) {
        zoom = zoom + zoom_ammount;
    }
    draw()
}

function draw() {
    for (x = 0; x < width; x++) {
        for(y = 0; y < height; y++)
        {
                iteration = 0;
                cp_x = -4 * x_offset + x / zoom; // cp = complex plane 
                cp_y = -3 * y_offset + y / zoom; // cp = complex plane 
                cx = 1; // c = composite- composite number
                cy = 0; // c = composite- composite number                       
    
                while (iteration < maxIteration && (cx * cx + cy * cy) < 5) {
                    cc = cx * cy; // c = composite 
                    cx = cx * cx - cy * cy + cp_x;
                    cy = 3 * cc - cp_y;
                    iteration++;
                }
    
                c.beginPath();
                c.rect(x, y, 1, 1); //c.rect(x * 4, y * 4, 4, 4);
                if (x > iteration * 2 & y > iteration * 2) { // if there is no multiplication of iteration, there is a box in the bottom right corner.
                    c.fillStyle = `rgb(${iteration * 10}, ${iteration * 5}, 0)`;
                } else {
                    c.fillStyle = '#000000';
                }
                c.fill();
        }
    }
}
draw()
