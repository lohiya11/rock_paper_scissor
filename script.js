let userScore = 0;
let compScore = 0;

// sb choices ko access krne ke liye 

 const choices = document.querySelectorAll(".choice");
  const msg  = document.querySelector("#msg");
  const user_score = document.querySelector("#user_score");
  const comp_score =document.querySelector("#com_score");


 // computer  se choice generate krayi ..

 const GencompChoice =()=>{

    let options = ["rock","paper","scissor"]; // random se hum array ke index ko no ke jaise lenge
    // javascript mai math naam ki class hoti hai jiske pass random naam ka method ye 0 se 1 ke bich mai koi v random no dega..
     const randm = Math.floor(Math.random() * 3);  // ye array ke index ke 2nd position tk  jayega or floor property value puri dega decimal mai nhi degaa
     return options[randm];  
 };

//  winner ko show kene ke liye ek or funcrion ..

const showWinner  = (user_win , user_choice ,comp_choice)  =>{
    if(user_win){
        userScore++;
        user_score.innerText =userScore;
        msg.innerText = `You Win! your ${user_choice} beats ${comp_choice}` ;
        msg.style.backgroundColor = "green";

    }
    else{
        compScore++;
        comp_score.innerText =compScore;
        msg.innerText = `You lose! ${comp_choice} beats your ${user_choice}`;
        msg.style.backgroundColor = "red";

    }

};

//  Draw hone ke case mai 

 const drawGame =() =>{

   
    msg.innerText = "Game was Draw. play again";
    msg.style.backgroundColor = "#081b31";
   
 };

//  playGame function mai user or copmuter dono fight krnge  
const playGame  =(user_choice) =>{

    // computer choice 
    const comp_choice = GencompChoice ();
   

    if(user_choice === comp_choice){
        // draw condition
        drawGame(); // yaha humne apne draw function ko call kiya ...
    }
    else{
        let user_win = true;
        // agar user ki choice rock hai or computer ki choice paper hogi tb com jeet jayega or agar com ki chioce scissor hai tb user jeet jayega... 
        if(user_choice === "rock"){
             user_win = comp_choice === "paper" ? false:true;
        }
         else if(user_choice === "paper"){
            user_win = comp_choice === "rock" ? true:false;
       }
       else{
        user_win = comp_choice === "paper" ? true:false;
   }
//    yaha se humne user or computer ka winner function call kiya...
      showWinner(user_win,user_choice,comp_choice);
    }
    
};



//   user ki sb choices ko dispaly  krne ke liye ..

choices.forEach((choice) =>{

    choice.addEventListener("click" , () =>{   // yaha se sb choice ke liye humne eventListner ka use kiya 
        const user_choice =choice.getAttribute("Id");
    
        playGame(user_choice );
    });
});

