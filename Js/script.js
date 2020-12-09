let arrow=document.querySelector('.arrow');

arrow.addEventListener('click',()=>
{

    window.scrollTo(
        {
            top:0,
            behavior:'smooth'
        });
});





let about =document.querySelector('.about');
let topabout=about.offsetTop;
console.log(topabout);


window.onscroll=()=>
{
    console.log(pageYOffset);

    if(pageYOffset>topabout)
    {
        arrow.classList.remove('show');
    }
    else
    {
        arrow.classList.add('show');
    }
}






