compute = document.querySelector("[data-displayCompute]");
answer = document.querySelector("[data-displayAnswer]");
calcKeypads = document.querySelector(".keypads");
operators = document.querySelectorAll("[data-operator]")
  


calcKeypads.addEventListener("click", e => {

    // ----------------------------for KEYPADS---------------------
 if ( e.target.matches("[data-calcNumber") || e.target.matches("[data-operator]")){
    
   if(compute.innerText.includes(".") & e.target.matches(".dot")) return ;//prevents multiple decimal points
   
   if(answer.innerText!="" & e.target.matches("[data-operator]")){                                              //replace compute with an answer if answer in not empty
      compute.innerText = answer.innerText;
      answer.innerText = "";

      } else if(answer.innerText!="" & e.target.matches("[data-calcNumber]") ){                                      
         answer.innerText = "";
         compute.innerText = "";
      }         
           
   compute.innerText+=e.target.innerText;                                  //appends number
     

// ----------------------------------for operators--------------------
   } else if (e.target.matches("[data-clear-all]")){                       //clears all inputs
         compute.innerText ="";
         answer.innerText ="";

        } else if (e.target.matches("[data-delete]")){                     //delete last input
            answer.innerText ="";
            compute.innerText = compute.innerText.slice(0,-1);

        } else if (e.target.matches("[data-equals]")){                     //computes answer

           mainAnswer = compute.innerText.replaceAll("÷","/");             //replace ÷ with / 
         
         
           try { answer.innerText = eval(mainAnswer);
         }catch(e){
            compute.innerText = "Syntax error";                            //syntax error
         }

        }
})

