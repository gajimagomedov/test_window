let colorWindow = document.querySelectorAll('.color-list__item a');

Array.prototype.slice.call(colorWindow).forEach(function(elem,i) {
    elem.addEventListener('click',function(e){
        e.preventDefault();
        for(el of colorWindow){
            el.classList.remove('check');
        }
        this.classList.add('check');  
    });
});