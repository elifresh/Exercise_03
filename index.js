function buldHeader(){
    const header = document.createElement('header');
    header.textContent = 'Exercise 3';
    header.classList.add('header');
    return header; 
}
function cityText(){
    const div= document.createElement('div');
    div.setAttribute('id','citytext');
    const h2= document.createElement('h2');
    h2.textContent='who we are';
    const p= document.createElement('p');
    p.textContent = 'ygbu bkuygkuy kuygk kuygvku utv';
    div.appendChild(h2);
    div.appendChild(p);

    return div;
}
function windwo(){
    const div= document.createElement('div');
    div.setAttribute('id','windwo');
    div.textContent='558 460';
    return div;
}
function ilGrid (){
    const div=document.createElement('div');
    div.setAttribute('id','ilgrid');
    const h2_1=document.createElement('h2');
    const h2_2=document.createElement('h2');
    const h2_3=document.createElement('h2');
    const p1=document.createElement('p');
    const p2=document.createElement('p');
    const p3=document.createElement('p');
    h2_1.textContent='Our Mission';
    h2_2.textContent='Our Vision';
    h2_3.textContent='Our Valuse';
    p1.textContent='by5dtfmht  yf,yfbu';
    p2.textContent='mthfmht tfbmrf';
    p3.textContent='y5vdj ybjdybf';
    div.appendChild(h2_1)
    div.appendChild(p1)
    div.appendChild(h2_2)
    div.appendChild(p2)
    div.appendChild(h2_3)
    div.appendChild(p3)
    return div;
}
function disflex(){
    const div=document.createElement('div');
    div.setAttribute('id','flex');
    div.appendChild(windwo()); 
    div.appendChild(ilGrid());
    return div;
}
function textFooter(){
    const footer=document.createElement('footer');
    footer.classList.add('footer');
    footer.textContent='@copy WEBSCHOOL';
    return footer;
}


function buildPage (){
    const body=document.querySelector('body');
    body.classList.add('body');
    body.appendChild(buldHeader());
    body.appendChild(cityText());
    body.appendChild(disflex());
    body.appendChild(textFooter());

}
buildPage();