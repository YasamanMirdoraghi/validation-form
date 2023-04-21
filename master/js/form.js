
const signin = document.querySelector("#signin")
const up = document.querySelector("#signup")
const container= document.querySelector(".container")
console.log(container);

signin.addEventListener("click",  () =>{
    container.classList.remove("mode")
})

up.addEventListener("click", () =>{
    container.classList.add("mode")
})

//form1

function _Form(){
   let user = document.forms['form']['user'].value
   let pass =  document.forms['form']['pass'].value

    // input1
    
   if( user == '' || user == null || (user.search(/<script/))>=0){

    document.getElementById('lab1').innerText="Enter your username...!"
    document.getElementById('input1').style.border=" 2px solid #DC143C "
    document.getElementById('Ic').style.color="  #DC143C "
   }else{
    document.getElementById('lab1').innerText=""
    document.getElementById('input1').style.border=" 2px solid green"
    document.getElementById('Ic').style.color=" green "

   }

   //input2

   if( pass == '' || pass == null || (pass.search(/<script/))>=0){
    document.getElementById('lab2').innerText="Enter your password...!"
    document.getElementById('input2').style.border=" 2px solid #DC143C "
    document.getElementById('Ic2').style.color="  #DC143C "
   }else
   if(pass.length < 8){
    document.getElementById('lab2').innerText="Your password is less than 8 characters...! "
    document.getElementById('input2').style.border=" 2px solid #DC143C "
        document.getElementById('Ic2').style.color="  #DC143C "

   }  else
   
   if((pass.search(/[A-Z]/)) == -1){
    document.getElementById('lab2').innerText="Your password must contain uppercase letters A-z !"
    document.getElementById('input2').style.border=" 2px solid #DC143C "
        document.getElementById('Ic2').style.color="  #DC143C "

   } 
    else
   if((pass.search(/[~!@#$%^&*()_+]/))==-1){
    document.getElementById('lab2').innerText="Your password must contain special characters..!"
    document.getElementById('input2').style.border=" 2px solid #DC143C "
        document.getElementById('Ic2').style.color="  red "

   }else
   
   if((pass.search(/[0-9]/)) == -1){
    document.getElementById('lab2').innerText="Your password must contain numbers..!"
    document.getElementById('input2').style.border=" 2px solid #DC143C "
        document.getElementById('Ic2').style.color="  #DC143C "

   } else 
   if((pass.search(/[a-z]/)) == -1){
    document.getElementById('lab2').innerText="Your password must contain lowercase letters a-z !"
    document.getElementById('input2').style.border=" 2px solid #DC143C "
        document.getElementById('Ic2').style.color="  #DC143C "

   }
   else{

       document.getElementById('lab2').innerText=""
       document.getElementById('input2').style.border=" 2px solid green"
           document.getElementById('Ic2').style.color=" green"

}
   return false
}

//form2

function _Form1(){
    let user = document.forms['formm']['userr'].value
    let pass =  document.forms['formm']['pass1'].value
    let email =  document.forms['formm']['email'].value
 console.log(user);

//  input1

    if( user == '' || user == null || (user.search(/<script/))>=0){
 
     document.getElementById('lab3').innerText="Enter your username...!"
     document.getElementById('_IOP').style.border=" 2px solid #DC143C "
     document.getElementById('_O').style.color="  #DC143C "
    }else{
     document.getElementById('lab3').innerText=""
     document.getElementById('_IOP').style.border=" 2px solid green"
     document.getElementById('_O').style.color=" green "
 
    }
 

    //input2

    let _at = email.match(/@/g)
    if( email == '' || email == null || (email.search(/<script/))>=0){
 
        document.getElementById('lab4').innerText="Enter your email...!"
        document.getElementById('_IO').style.border=" 2px solid #DC143C "
        document.getElementById('_L').style.color="  #DC143C "
       
    }else if((email.search(/@/)) < 3 ||
    (_at.length) != 1 ){
        document.getElementById('lab4').innerText="You must at least put an ( @ ) "
        document.getElementById('_IO').style.border=" 2px solid #DC143C "
        document.getElementById('_L').style.color="  #DC143C "
    }else if(email.length < 10){
        document.getElementById('lab4').innerText="Your email is less than 10 ..!"
        document.getElementById('_IO').style.border=" 2px solid #DC143C "
        document.getElementById('_L').style.color="  #DC143C "
    }
       else{
        document.getElementById('lab4').innerText=""
        document.getElementById('_IO').style.border=" 2px solid green"
        document.getElementById('_L').style.color=" green "
    
       }

    //input3
 
    if( pass == '' || pass == null || (pass.search(/<script/))>=0
    ){
     document.getElementById('lab5').innerText="Enter your password...!"
     document.getElementById('_U').style.border=" 2px solid #DC143C "
         document.getElementById('_F').style.color="  #DC143C "
 
    }else
    if(pass.length < 8){
     document.getElementById('lab5').innerText="Your password is less than 8 characters...! "
     document.getElementById('_U').style.border=" 2px solid #DC143C "
         document.getElementById('_F').style.color="  #DC143C "
 
    }  else
    
    if((pass.search(/[A-Z]/)) == -1){
     document.getElementById('lab5').innerText="Your password must contain uppercase letters A-z !"
     document.getElementById('_U').style.border=" 2px solid #DC143C "
         document.getElementById('_F').style.color="  #DC143C "
 
    } 
     else
    if((pass.search(/[~!@#$%^&*()_+]/))==-1){
     document.getElementById('lab5').innerText="Your password must contain special characters..!"
     document.getElementById('_U').style.border=" 2px solid #DC143C "
         document.getElementById('_F').style.color="  #DC143C "
 
    }else
    
    if((pass.search(/[0-9]/)) == -1){
     document.getElementById('lab5').innerText="Your password must contain numbers..!"
     document.getElementById('_U').style.border=" 2px solid #DC143C "
         document.getElementById('_F').style.color="  #DC143C "
 
    } else 
    if((pass.search(/[a-z]/)) == -1){
     document.getElementById('lab5').innerText="Your password must contain lowercase letters a-z !"
     document.getElementById('_U').style.border=" 2px solid #DC143C "
         document.getElementById('_F').style.color="  #DC143C "
 
    }
    else{
 
        document.getElementById('lab5').innerText=""
        document.getElementById('_U').style.border=" 2px solid green"
            document.getElementById('_F').style.color=" green"
 
 }
 return false
}
