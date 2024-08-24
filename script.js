function highlight() {
    let strongElements = document.querySelectorAll('p strong');

    strongElements.forEach(strong => {
        strong.style.color = 'green';
    });
}

function return_normal() {
    let strongElements = document.querySelectorAll('p strong');
        strongElements.forEach(strong => {
        strong.style.color = '';
    });
}
