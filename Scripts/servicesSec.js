document.addEventListener('DOMContentLoaded',function(){
    function selection() {
    let selectedVisa = document.querySelectorAll('.visa-option');
    selectedVisa.forEach(visa=> {
        visa.addEventListener('click', function() {
            selectedVisa.forEach(item=> {
                item.classList.remove('selected-visa');
            });
            this.classList.add('selected-visa');
            
        });
    });
    }
    selection();
});