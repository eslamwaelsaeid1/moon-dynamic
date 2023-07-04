let    stars  = document.getElementById('stars');
let    moon   = document.getElementById('moon');
let mountain3 = document.getElementById('mountain3');
let mountain4 = document.getElementById('mountain4');
let   river   = document.getElementById('river');
let   boat    = document.getElementById('boat');
let nouvil= document.querySelector('.nouvil');

window.onscroll = function()
{ 
let value = scrollY; //scrollyبتحدد احداثى الصادى الى واقف فيه

stars.style.left = value + 'px';
moon .style. top = value *5 + 'px';
mountain3.style.top = value*2 +'px';
mountain4.style.top = value*1.5 +'px';
river.style.top = value + 'px';
boat.style.top  = value + 'px';
boat.style.left = value + 'px';

nouvil.style = value + 'px';


if( scrollY >= 67)
{
    nouvil.style.fontsize = 67 + 'px';
    nouvil.style.position = 'fixed' ;

    if (scrollY >= 478)
    {nouvil.style.display = 'none';}
    else{nouvil.style.display = 'block';}

        if(scrollY >= 88 )
        {document.querySelector('.main').style.background= 'linear-gradient(rgb(89, 76, 210),rgb(111, 111, 141)' 
        }else{document.querySelector('.main').style.background='linear-gradient(black,rgb(14, 14, 219))'}

}else{nouvil.style.fontsize = '30px'}
}
