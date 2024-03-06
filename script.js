const container = document.querySelector('#container');
for(let i=0;i<16;i++){
    for(let j=0; j<16;j++){
        const square = document.createElement('div');
        square.style.borderColor = 'black';
        square.style.height = '25px';
        square.style.width = '25px';
        square.style.flexBasis = 'auto';
        square.style.borderStyle = 'solid';
        // square.style.borderWidth = '1px';
        square.style.minHeight = '1px';
        container.appendChild(square);
        square.onmouseover = function() {mouseOver()};
        function mouseOver(){
            square.style.backgroundColor = 'green';
        }
        
    }
}

