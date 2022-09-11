document.getElementById('minifiedProfil').addEventListener('click' | 'hover', ()=>{
    const hiddenFlex= document.getElementById('hiddenOnSmallProfil');

    hiddenFlex.style.display= (hiddenFlex.style.display=='none')?'flex':'none';
})