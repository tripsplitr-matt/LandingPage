const icons = document.querySelectorAll('.fab')

icons.forEach(element => {
    element.addEventListener('mouseover', function(event){
        event.target.style.color = '#A0001E';
    });
})