let nameElement=document.querySelector(".js-username");
let passwordElement=document.querySelector(".js-password");
let confirmElement=document.querySelector(".js-confirm-password");
let buttonElement=document.querySelector(".js-button");
let form=document.querySelector(".form");

/*function view(){
  let name= nameElement.value;
  let password=passwordElement.value;
  console.log(name);
  console.log(password);
}
*/
/*buttonElement.addEventListener(click,()=>{
  function{
    let name= nameElement;
    let password= passwordElement;
    console.log(name);
    console
  }*/

//arow functions


form.addEventListener("submit",(event)=>{

  let name= isfilled( nameElement.value);
  let password=isfilled(passwordElement.value);
  let confirmPassword=(comfirmPassword.value);
  

  


});

function isfilled(input){

  if(input===""){
    alert("mblola magaye");
    return false;
  }

}
