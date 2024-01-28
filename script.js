document.addEventListener('DOMContentLoaded', function() {
    var display = document.getElementById('hasil');
    var buttons = document.querySelectorAll('button');
    var currentExpression = '';

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (button.value === '=') {
                    var result = new Function('return ' + currentExpression)();
                    display.value = result;
                    currentExpression = result.toString();
            } else if (button.value === 'C') {
                display.value = '';
                currentExpression = '';
            } else {
                currentExpression += button.value;
                display.value = currentExpression;
            }
        });
    });
});