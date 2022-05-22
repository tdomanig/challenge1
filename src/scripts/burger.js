window.addEventListener('DOMContentLoaded', ()=>{
    const menuBtn= document.getElementById('menubtn')
    const dropdown=document.getElementById('dropdown')

    menuBtn.addEventListener('click',()=>{
        if(dropdown.classList.contains('hidden')){
            dropdown.classList.remove('hidden')
            dropdown.classList.add('flex')
        }else{
            dropdown.classList.remove('flex')
            dropdown.classList.add('hidden')
        }
    })
})