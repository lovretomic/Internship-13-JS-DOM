const dropdownInputs = document.querySelectorAll(
  ".main__form-box-input.dropdown"
);
const dropdowns = document.querySelectorAll(".main__form-box-input ~ div");

console.log(dropdownInputs);
console.log(dropdowns);

const dropdownStatus = {
  level: false,
  duration: false,
};

function toggleDropdown(index) {
  let keys = Object.keys(dropdownStatus);
  if (dropdownStatus[keys[index]] === false) {
    dropdowns[index].style.display = 'block';
    dropdownStatus[keys[index]] = true;
  } else {
    dropdowns[index].style.display = 'none';
    dropdownStatus[keys[index]] = false;
  }
}

for (let i = 0; i < dropdownInputs.length; i++) {
    dropdownInputs[i].addEventListener('focus', () => toggleDropdown(i));
    dropdownInputs[i].addEventListener('blur', () => toggleDropdown(i));
}
