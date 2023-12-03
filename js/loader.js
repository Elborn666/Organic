document.body.onload = function() {
    setTimeout(function(){
        let loader = document.querySelector('.js-load');
        if(!loader.classList.contains('done')){
            loader.classList.add('done')
        }
    }, 2000)
}