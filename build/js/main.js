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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBjb2xvcldpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xvci1saXN0X19pdGVtIGEnKTtcclxuXHJcbkFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvbG9yV2luZG93KS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW0saSkge1xyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGZvcihlbCBvZiBjb2xvcldpbmRvdyl7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnY2hlY2snKTsgIFxyXG4gICAgfSk7XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
