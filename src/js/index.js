document.getElementById('minifiedProfil').addEventListener('click', ()=>{
    const hiddenFlex= document.getElementById('hiddenOnSmallProfil');

    hiddenFlex.style.display= (hiddenFlex.style.display=='none')?'flex':'none';
})