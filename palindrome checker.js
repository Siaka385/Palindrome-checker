window.onload=function(){
    var button=document.getElementById("btn");

    button.onclick=()=>{
        var answer=document.getElementById("ans").value;
         var sentence=((palindrome)=>{
               let lowersentence=palindrome.toLowerCase().replaceAll(" ","");

               return lowersentence === lowersentence.split("").reverse().join("") 
         })(answer)

               console.log(sentence)
          if(sentence){
            document.getElementById("checker").innerHTML="This word is a palindrome";

          }else{
             document.getElementById("checker").innerHTML="This word is not a palindrome";
          }
    }
    
}