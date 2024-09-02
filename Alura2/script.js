const x = document.querySelectorAll(".btn-proximo");

x.forEach(element=>{
    element.addEventListener('click', function(){
        const atual = document.querySelectorAll('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo')

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})