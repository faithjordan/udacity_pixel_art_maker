// set variable for color picker value
const pickColor = document.getElementById('colorPicker');
let color= pickColor.value;


//event listener to change the value of color when ever the color picker changes
pickColor.addEventListener('change', ()=> {
    color = pickColor.value;
});

//invoke makeGrid and prevent page from reloading when form submitted.
const whenSubmitted = document.getElementById('sizePicker');
whenSubmitted.addEventListener('submit', (event)=>{
    event.preventDefault();
    makeGrid();
}); 

/*tried to find a way to remove color when the color and color picker value are already equal. value of color picker logs as a hex, but isn't?? so I decided to remove the style attribute from target if it has a style.*/

//--------------------------this is evil ------------------------------>

const colorCells = (target)=>{
    if (target.hasAttribute('style')){
        target.removeAttribute('style');
    }else{
        target.style.backgroundColor = color;
    }
};
//------------------------- end of evil ------------------------------>

//make Grid and begins to color cell through an event listener
const makeGrid = () => {
    let rowCount = Number(document.getElementById('inputHeight').value);
    let cellCount = Number(document.getElementById('inputWidth').value);
    let table = document.getElementById('pixelCanvas');
    table.innerHTML = "";

    for(let i =0; i<rowCount; i++){
        let newRow =table.insertRow(-1);
        for(let j =0; j<cellCount; j++){
            let cell = newRow.insertCell();
            cell.addEventListener('click', (event) => colorCells(event.target));
        }    
    }
};
