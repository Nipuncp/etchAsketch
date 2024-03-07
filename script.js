const container = document.querySelector('#container');
const btn = document.querySelector('button');

for(let i=0;i<256;i++){
    // for(let j=0; j<16;j++){
        const square = document.createElement('div');
        square.style.borderColor = 'black';
        square.style.height = '10px';
        square.style.width = '10px';
        square.style.flexBasis = 'auto';
        square.style.borderStyle = 'solid';
        square.style.borderTopWidth='1px';
        square.style.borderBottomWidth='1px';
        square.style.borderLeftWidth = '1px';
        square.style.borderRightWidth = '1px';
        // square.style.borderWidth = '1px';
        square.style.minHeight = '1px';
        container.appendChild(square);
        square.onmouseover = function() {mouseOver()};
        function mouseOver(){
            square.style.backgroundColor = 'green';
        }
        
    }
btn.addEventListener('click',btnClick);
function btnClick(){
    const container = document.querySelector('#container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let gridSize = prompt("Please enter the grid size less tahn or equal to 100");
    
    container.style.width = (gridSize*12+5).toString()+'px';
    container.style.height = (gridSize*12+5).toString()+'px';
    container.style.display = 'flex';

    for(let i=0;i<gridSize*gridSize;i++){
        // for(let j=0; j<16;j++){
            const square = document.createElement('div');
            square.style.borderColor = 'black';
            square.style.height = '10px';
            square.style.width = '10px';
            square.style.flexBasis = 'auto';
            square.style.borderStyle = 'solid';
            square.style.borderTopWidth='1px';
            square.style.borderBottomWidth='1px';
            square.style.borderLeftWidth = '1px';
            square.style.borderRightWidth = '1px';
            // square.style.borderWidth = '1px';
            square.style.minHeight = '1px';
            container.appendChild(square);
            square.onmouseover = function() {mouseOver()};
            function mouseOver(){
                square.style.backgroundColor = 'green';
            }
            
        }

}


// }

