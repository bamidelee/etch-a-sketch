const container = document.querySelector('.container');
const range = document.querySelector('#range');
const color = document.querySelector('.color');
const rainbow = document.querySelector('.rainbow');
const clear = document.querySelector('.clear');



//storing the value of range to be used for pixel
let rangeChange = 16;
//storing the value of color
let colorChange = '#000000';
//autos in grid container
let gridColumn = '';

divPush();
canvas();
// displaying random colors for each grid
rainbow.addEventListener('click',(e) =>
{
    const gridItem = document.querySelectorAll('.canvas');
    gridItem.forEach(grid =>
    {
        grid.addEventListener('mouseover', (e) =>
        {
            e.target.style.backgroundColor = randomColor();
        })
    })
})
//creating random colors for rainbow button
function randomColor ()
{
   
  let r = Math.floor(Math.random()*257);
  let g = Math.floor(Math.random()*257);
  let b = Math.floor(Math.random()*257);
   let newColor = `rgb(${r}, ${g}, ${b})`
    return newColor;
}
//grid column initial value
for(i = 0; i < 16; i++)
{
    gridColumn += 'auto ';
}
  //setting container column to grid column
   container.style.setProperty('grid-template-columns', gridColumn);
   container.style.setProperty('grid-template-rows', gridColumn);


//add created divs to html
function divPush ()
{
    for(i = 1; i <= rangeChange; i++)
    {
        for(j = 1; j <= rangeChange; j++)
        {
            //grid items
            const div = document.createElement('div'); 
            div.classList.add('canvas');
            container.appendChild(div);
        }


    }
}


//add hover eventlistener ove all created grids
function canvas()
{
    const gridItem = document.querySelectorAll('.canvas');
    gridItem.forEach(grid =>
    {
        grid.addEventListener('mouseover', (e) =>
        {
            e.target.style.backgroundColor = colorChange;
        })
    })
}

//increase number of grid when range input changed
range.addEventListener('change', (e) =>
{
    rangeChange = range.value;
    //saving the number of auto to make columns for grid container
    gridColumn = '';
    for (i = 0; i < rangeChange; i++)
    {
        gridColumn += 'auto ';
    }
    container.style.setProperty('grid-template-columns', gridColumn);
    container.style.setProperty('grid-template-rows', gridColumn);
    divPush();
    canvas();
});

//change color when color input changed
color.addEventListener('change', (e) =>
{
    colorChange = color.value;
    canvas();
   
});
//clear canvas when clear button clicked
clear.addEventListener('click', (e) =>
{
    const gridItem = document.querySelectorAll('.canvas');
    gridItem.forEach(grid =>
    {
        grid.style.backgroundColor = 'white';
    })
})







 
 
 



