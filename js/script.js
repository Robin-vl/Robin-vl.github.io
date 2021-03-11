window.sr = ScrollReveal();
sr.reveal('html',{
    duration: 1000,
    origin:'left'});
    sr.reveal('#deel1',{
    duration: 2500,
    origin:'left',
    distance:'500px',
    viewFactor:0.3});
    sr.reveal('#deel2',{
    duration: 2500,
    origin:'right',
    distance:'500px',
    viewFactor:0.3});

function klik(){
   var x = document.getElementById('hybrid');
   if(x.style.display==='none'){
       x.style.display ='block';
   }
   else{
    x.style.display ='none'
   }
}
