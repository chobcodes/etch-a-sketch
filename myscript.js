const container = document.querySelector('#container');

for (i=0;i<16;i++) {
    let row = document.createElement('div')
    row.setAttribute('style', 'display: flex; flex-direction: column;');
    row.setAttribute('id', "row");
    container.appendChild(row);
    for (j=0;j<16;j++) {
        const square = document.createElement('div');
        square.setAttribute('style', 'border: solid; border-width: 1px;height: 40px; width: 40px;');
        square.setAttribute('id', 'square');
        row.appendChild(square);
    };
};


let squares = document.querySelectorAll('#square');

squares.forEach((square) => {
    square.addEventListener('mouseenter', function (e) {
        console.log(this === square);
        square.style['background-color'] = 'grey';
    });
    /*square.addEventListener('mouseleave', function (e) {
        square.style['background-color'] = 'white';
    });*/
});

const btn = document.querySelector('#btn');

btn.addEventListener('click', function (e) {
    let num = parseInt(prompt("ayo how many squares u wan?"));
    console.log(num);
    rows = document.querySelectorAll('#row');
    rows.forEach((row) => {
        container.removeChild(row);
    });
    for (i=0;i<Math.min(num, 100);i++) {
        let row = document.createElement('div')
        row.setAttribute('style', 'display: flex; flex-direction: column; flex: 1');
        row.setAttribute('id', "row");
        container.appendChild(row);
        for (j=0;j<Math.min(num,100);j++) {
            const square = document.createElement('div');
            square.setAttribute('style', 'border: solid; border-width: 1px; flex: 1');
            square.setAttribute('id', 'square');
            row.appendChild(square);
        };
    };
    squares = document.querySelectorAll('#square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', function (e) {
            console.log(this === square);
            square.style['background-color'] = 'grey';
        });
        /*square.addEventListener('mouseleave', function (e) {
            square.style['background-color'] = 'white';
        });*/
    });
});

/*

for (i=0;i<Math.min(num, 100);i++) {
    const square = document.createElement('div');
    square.setAttribute('style', 'border: solid; border-width: 1px;height: 40px; width: 40px;');
    square.setAttribute('id', 'square');
    container.appendChild(square);
};

*/