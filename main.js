const boxes = document.querySelectorAll(".btn");
const checkWinner = document.querySelector("#checkWinner");
const btn = document.querySelector("#btn")

//initialize
let currentPlayer = false;
let gridArea;
const winningPosition = [
    [0, 1 , 2],
    [3, 4, 5],
    [6, 7 , 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]


// add handler for button whose turn x or o
boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{

        //Swap the value of each box of boxes
        if(currentPlayer){
            box.innerHTML = "O"
            currentPlayer = false
        }
        else{
            box.innerHTML = "X"
            currentPlayer = true
        }
        
        //After swapping cursor will remove
        box.style.pointerEvents = "none"
        
        //call checkWinners() function
        checkWinners()
        
    })
})

//call showWinner(val1)  val1 is the parameter who won the game
function showWinner(val1){
    checkWinner.innerHTML = `Winner is : ${val1}`

    //after win the match Cursor will remove on the box of boxes
    boxes.forEach((box)=>{
        box.style.pointerEvents = "none"
        
    })

    
}


//checkwinner
function checkWinners(){
    for(let position of winningPosition){
        // console.log(position)
        let val1 = boxes[position[0]].innerHTML
        let val2 = boxes[position[1]].innerHTML
        let val3 = boxes[position[2]].innerHTML

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                // console.log("winner" , val1)
                // checkWinner.innerHTML = `Winner is - ${val1}`
                //Winner Print on UI
                showWinner(val1)

                //Add win class to change the background after win the match
                boxes[position[0]].classList.add("win")
                boxes[position[1]].classList.add("win")
                boxes[position[2]].classList.add("win")
                checkWinner.classList.add("win")
                
            }
        }
    }
}

//reset game 
btn.addEventListener("click" , ()=>{
    // Enable pointer events on all boxes
    boxes.forEach((box)=>{
        box.style.pointerEvents = "auto";
        box.innerHTML = "";
        box.classList.remove("win"); // Remove the 'win' class
    });

    // Clear the winner message
    checkWinner.innerHTML = "";
});
