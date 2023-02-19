const dropdownInputs = document.querySelectorAll('.main__form-box-input.dropdown');
const dropdowns = document.querySelectorAll('.main__form-box-input ~ div');
const dropdownOptions = document.querySelectorAll('.dropdown-select-option');

console.log(dropdownInputs);
console.log(dropdowns);
console.log(dropdownOptions);

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

function insertDropdownOption(index) {
    const optionValue = dropdownOptions[index].innerHTML;
    console.log(optionValue);
    if (index < 3) dropdownInputs[0].value = optionValue;
    else dropdownInputs[1].value = optionValue;
}

for (let i = 0; i < dropdownOptions.length; i++) {
    dropdownOptions[i].addEventListener('mouseover', () => {
        dropdownOptions[i].style.color = '#1360a0';
    });

    dropdownOptions[i].addEventListener('mouseout', () => {
        dropdownOptions[i].style.color = 'black';
    });
    
    dropdownOptions[i].addEventListener('mousedown', () => {
        insertDropdownOption(i);
    });
}

for (let i = 0; i < dropdownInputs.length; i++) {
    dropdownInputs[i].addEventListener('focus', () => toggleDropdown(i));
    dropdownInputs[i].addEventListener('blur', () => toggleDropdown(i));
}
