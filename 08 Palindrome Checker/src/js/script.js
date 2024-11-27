const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const input = textInput.value.trim();
  if(input === "") {
    alert("Please input a value");
    return;
  }
  const palindromeCheck = isPalindrome(input);
  if (palindromeCheck) {
    result.textContent = `${input} is a palindrome`;
  } else {
    result.textContent = `${input} is not a palindrome`;
  }
});

const isPalindrome = (str) => {
  const cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
};