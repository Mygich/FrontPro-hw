document.addEventListener('DOMContentLoaded', function () {

    const textField = document.getElementById('textField');
    const hiddenDiv = document.getElementById('hiddenDiv');

    textField.addEventListener('focus', function () {
        hiddenDiv.style.display = 'block';
    });

    textField.addEventListener('blur', function () {
        hiddenDiv.style.display = 'none';
    });

});