const paintCanvas = document.getElementById( 'draw-canvas' );
const context = paintCanvas.getContext( '2d' );
context.lineCap = 'round';
paintCanvas.width = document.body.clientWidth; //document.width is obsolete
paintCanvas.height = document.body.clientHeight; //document.height is obsolete

const colorPicker = document.querySelector( '.js-color-picker');

context.lineWidth = 5;
// console.log(lineWidthLabel.innerHTML);

let x = 0, y = 0;
let isMouseDown = false;

const stopDrawing = () => { isMouseDown = false; }
const startDrawing = event => {
    isMouseDown = true;   
   [x, y] = [event.offsetX, event.offsetY];  
}
const drawLine = event => {
    if ( isMouseDown ) {
        const newX = event.offsetX;
        const newY = event.offsetY;
        context.beginPath();
        context.moveTo( x, y );
        context.lineTo( newX, newY );
        context.stroke();
        //[x, y] = [newX, newY];
        x = newX;
        y = newY;
    }
}

paintCanvas.addEventListener( 'mousedown', startDrawing );
paintCanvas.addEventListener( 'mousemove', drawLine );
paintCanvas.addEventListener( 'mouseup', stopDrawing );
paintCanvas.addEventListener( 'mouseout', stopDrawing );

canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchmove', drawLine);
canvas.addEventListener('touchend', stopDrawing);