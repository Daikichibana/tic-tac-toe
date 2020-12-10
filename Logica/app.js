let turn = 0;
let movimientos = 0;
let positions = [0,0,0,0,0,0,0,0,0];
const allCuadrante = document.querySelectorAll('.cuadrante');
const cuadrantes = [];

allCuadrante.forEach((cuadrante, i) => {
    cuadrantes[i] = cuadrante; 
});


function verifyState(shape) {
    //Horizontal rules
    if(positions[0] === shape && positions[1] === shape && positions[2] === shape) return true;
    if(positions[3] === shape && positions[4] === shape && positions[5] === shape) return true;
    if(positions[6] === shape && positions[7] === shape && positions[8] === shape) return true;

    //Vertical Rules
    if(positions[0] === shape && positions[3] === shape && positions[6] === shape) return true;
    if(positions[1] === shape && positions[4] === shape && positions[7] === shape) return true;
    if(positions[2] === shape && positions[5] === shape && positions[8] === shape) return true;

    //Diagonal Rules
    if(positions[0] === shape && positions[4] === shape && positions[8] === shape) return true;
    if(positions[6] === shape && positions[4] === shape && positions[2] === shape) return true;

    return false;
}

function createShape(cuadrante, shape) {
    let container = document.createElement('p');
    let shapeContainer = document.createTextNode(shape);
    container.appendChild(shapeContainer);
    cuadrante.appendChild(container);
    cuadrante.classList.add('ocupado');
}

function drawShape(cuadrante, posicion) {
    if(turn === 0 && cuadrante.classList[1] != 'ocupado'){
        createShape(cuadrante, 'X', posicion);
        positions[posicion] = 'X';
        if(verifyState('X')){
            alert('Felicidades ficha X, haz ganado.');
            location.reload();
        }

        turn = 1;
    } else if(turn === 1 && cuadrante.classList[1] != 'ocupado') { 
        createShape(cuadrante, 'O', posicion);
        positions[posicion] = 'O';
        if(verifyState('O')){
            alert('Felicidades ficha O, haz ganado.');
            location.reload();
        }

        turn = 0;
    }
    movimientos++;

    if(movimientos >= 9) {
        alert('Empate tecnico');
        location.reload();
    }
}

cuadrantes.forEach((cuadrante, i)=>{
    cuadrante.addEventListener('click', () => {
        drawShape(cuadrante, i);
    });
});