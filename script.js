const numberInput = document.getElementById("user-input");
const result=document.getElementById("results-div");
const checkMessageButton = document.getElementById("check-btn");
const clearMessageButton = document.getElementById("clear-btn");
const numberRegex= /^(1?\s?)(\([0-9]{3}\)|[0-9]{3})((\s?)|-?)[0-9]{3}(\s?|-?)[0-9]{4}$/

checkMessageButton.addEventListener("click", ()=>
{if(numberInput.value===""){
  alert("Please provide a phone number.");
  return;
}
const isValid = (msg)=>numberRegex.test(msg);

result.textContent=isValid(numberInput.value) ? `Valid US number: ${numberInput.value}` : `Invalid US number: ${numberInput.value}`
});

clearMessageButton.addEventListener("click", ()=>{result.textContent=""})



