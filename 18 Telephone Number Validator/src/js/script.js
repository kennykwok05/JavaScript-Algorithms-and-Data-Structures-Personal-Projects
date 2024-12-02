const check = document.getElementById("check-btn");
const input = document.getElementById("user-input");
const result = document.getElementById("results-div");
const clear = document.getElementById("clear-btn");

check.addEventListener("click", ()=> {
  const inputValue = input.value;
  if(inputValue === ""){
    alert("Please provide a phone number");
  } else{
    const validPhoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    
    if (validPhoneRegex.test(inputValue)) {
      result.textContent = `Valid US number: ${inputValue}`;
    } else {
      result.textContent = `Invalid US number: ${inputValue}`;
    }
  }

})


clear.addEventListener("click", () => {
  result.textContent = "";
  input.value = "";

});