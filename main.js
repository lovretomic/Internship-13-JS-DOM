const COLOR_RED = '#b30000';
const COLOR_BLUE_1 = '#1360a0';
const COLOR_BLUE_2 = '#00447c';
const COLOR_BLUE_3 = '#f5fafe';
const COLOR_GREY = '#414141';

const dropdownInputs = document.querySelectorAll('.main__form-box-input.dropdown');
const dropdowns = document.querySelectorAll('.main__form-box-input ~ div');
const dropdownOptions = document.querySelectorAll('.dropdown-select-option');

const dropdownStatus = {
  level: false,
  duration: false,
};

const inputs = document.querySelectorAll('.main__form-box-input');
const labels = document.querySelectorAll('.main__form-box-label');
const errors = document.querySelectorAll('.main__form-box-error');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', () => {
        inputs[i].style.border = `1px solid ${COLOR_BLUE_1}`;
        inputs[i].style.outline = 'none';
        labels[i].style.color = COLOR_BLUE_1;
        removeError(i);
    })

    inputs[i].addEventListener('blur', () => {
        if (!inputs[i].value) inputs[i].style.border = '1px solid black';
        labels[i].style.color = COLOR_GREY;
    })

    inputs[i].addEventListener('mouseover', () => {
        inputs[i].style.background = COLOR_BLUE_3;
    })

    inputs[i].addEventListener('mouseout', () => {
        if (!inputs[i].value) inputs[i].style.background = 'white';
    })
}

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
    let x = 0;
    if (index >= 3) x = 1;
    dropdownInputs[x].value = optionValue;
    dropdownInputs[x].style.border = `1px solid ${COLOR_BLUE_2}`;
    dropdownInputs[x].style.fontWeight = 'bold';
    dropdownInputs[x].style.background = COLOR_BLUE_3;
    dropdownInputs[x].style.color = COLOR_BLUE_1;
}

for (let i = 0; i < dropdownOptions.length; i++) {
    dropdownOptions[i].addEventListener('mouseover', () => {
        dropdownOptions[i].classList.add('selected');
    });

    dropdownOptions[i].addEventListener('mouseout', () => {
        dropdownOptions[i].classList.remove('selected');
    });
    
    dropdownOptions[i].addEventListener('mousedown', () => {
        insertDropdownOption(i);
    });
}

for (let i = 0; i < dropdownInputs.length; i++) {
    dropdownInputs[i].addEventListener('focus', () => toggleDropdown(i));
    dropdownInputs[i].addEventListener('blur', () => toggleDropdown(i));
}

document.querySelector('.main__form-button-changes').addEventListener('click', (e) => {
    e.preventDefault();
    const formData = {
        firstName: null,
        lastName: null,
        level: null,
        duration: null
    }
    let formDataKeys = Object.keys(formData);
    for (let i = 0; i < inputs.length; i++) {
        let inputValue = inputs[i].value;
        if (inputValue) formData[formDataKeys[i]] = inputValue;
        else setError(i);
    }

    for (data in formData) if (!formData[data]) return;
    localStorage.setItem('data', JSON.stringify(formData));
})

function setError(index) {
    inputs[index].style.border = `1px solid ${COLOR_RED}`;
    errors[index].style.display = 'block';
}

function removeError(index) {
    errors[index].style.display = 'none';
}