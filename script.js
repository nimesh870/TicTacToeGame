let buttons = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let newGame = document.querySelector("#new-game")
let msgCont = document.querySelector(".msg-container") 
let winMSg = document.querySelector("#winner")

let turnO = true; //player-x, player-y

const winPatterns = [

   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],
];

reset.addEventListener("click", () => {
  // Clear all boxes
  buttons.forEach(box => {
    box.innerText = ""; //This clears whatever text (either "X" or "O") was inside that button.

    box.disabled = false;  // enable clicking again because we used disable = true
  });

  // Reset turn to player O
  turnO = true;

  // Hide winner message
  msgCont.classList.add("hide");
  msgCont.innerText = "";

});


disableBtns = () => { // disables clicking of boxes after winner is declared
   for( let box of buttons)
       box.disabled = true;
}

const showWinner = (winner) => {
    msgCont.innerText = `Congratulations , winner is ${winner}`; // use backticks ``, not quotes ""
    msgCont.classList.remove("hide");
    disableBtns(); // fnc call
}

const checkWinner =() => {

   for(let pattern of winPatterns) {
       console.log(buttons[pattern[0]].innerText,
                        buttons[pattern[1]].innerText,
                         buttons[pattern[2]].innerText
                       );//checks each patterns of array

       let post1Val = buttons[pattern[0]].innerText; //post -> position
       let post2Val = buttons[pattern[1]].innerText;// individual var to check the value of boxes

       let post3Val = buttons[pattern[2]].innerText;

       if(post1Val != "" && post2Val != "" && post3Val != "" )
       {
           if(post1Val === post2Val && post2Val === post3Val) //checks winner
           {
               console.log("Winner",post1Val)
               showWinner(post1Val); // call only if winner found
               return;               // stop checking further patterns
           }
       }
   }
}

buttons.forEach((box) => //for each method executes each elements of an array
{

   box.addEventListener("click", () =>
   {
       console.log("Box was clicked!");

       if(turnO === true) //player-x
       {
           box.innerText = "O"
           turnO = false;
       }

       else{ //player-y

           box.innerText = "X";
           turnO = true;
       }

       box.disabled = true; //disables the double click change in O or X of box
       checkWinner();
   })


})
