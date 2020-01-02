var numsquares = 6;
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay"); 
var messagedisplay = document.querySelector("#message");
var reset = document.getElementById("reset");
var h1 = document.querySelector("h1");
// var easybtn = document.querySelector("#easybtn");
// var hardbtn = document.querySelector("#hardbtn");
var modebuttons = document.querySelectorAll(".mode");
var colors = generaterandomcolor(numsquares);
var pickedcolor = pickcolor();
colordisplay.textContent = pickedcolor;

for(var i=0; i<modebuttons.length; i++)
{
    modebuttons[i].addEventListener("click", function(){
    modebuttons[0].classList.remove("selected");
    modebuttons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "EASY" ? numsquares = 3: numsquares = 6;
    resetme();
    });
}

function resetme(){
    colors = generaterandomcolor(numsquares);                         //generate random colors
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    reset.textContent = "NEW COLORS";
    messagedisplay.textContent = "";
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

// easybtn.addEventListener("click", function(){                    //EASY MODE
// easybtn.classList.add("selected");
// hardbtn.classList.remove("selected");
// numsquares =3;
// colors = generaterandomcolor(numsquares);
// pickedcolor = pickcolor();          //***************** */
// colordisplay.textContent = pickedcolor;
// for(i=0; i<squares.length; i++)
// if(colors[i])
// squares[i].style.backgroundColor = colors[i];
// else{
//     squares[i].style.display = "none";
// }
// });

// hardbtn.addEventListener("click", function(){                   //HARD MODE
// hardbtn.classList.add("selected");
// easybtn.classList.remove("selected");
// numsquares = 6;
// colors = generaterandomcolor(numsquares);
// pickedcolor = pickcolor();          //***************** */
// colordisplay.textContent = pickedcolor;
// for(i=0; i<squares.length; i++)
// {        
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
// }
// });

for(var i=0; i<squares.length; i++){
squares[i].style.backgroundColor = colors[i];

squares[i].addEventListener("click",function(){
    var clickedcolor = this.style.backgroundColor;
    if(clickedcolor === pickedcolor)                         //CORRECT COLOR
    {
        h1.style.backgroundColor = pickedcolor;
        changecolor(pickedcolor);
        messagedisplay.textContent = "correct";
        reset.textContent = "PLAY AGAIN ?";
    }else{
        this.style.backgroundColor = "#232323";              //..WORNG COLOR
        messagedisplay.textContent = "Try again";
    }
});
}

function changecolor(color)                                    //change random color for squares 
{
    for(var i=0; i<squares.length; i++)
    squares[i].style.backgroundColor = color;
}

function pickcolor(){                                         //randomly picked color by the system that has                                      
var random = Math.floor(Math.random() * colors.length);       //to be identified by the user.
return colors[random];
}

function generaterandomcolor(Num)                             //push selected random colors in array
{
    var arr=[];
    for(var i=0;i<Num;i++)
    {
     arr.push(randomcolor());
    }
    return arr;
}

function randomcolor()                                        //function to genearate random colors
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")";
}

reset.addEventListener("click", function(){                      //reset function
resetme();
});

