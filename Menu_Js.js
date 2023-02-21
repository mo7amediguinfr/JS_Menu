var btnOpen=document.getElementById('open');
var btnClose=document.getElementById('close');
var container10=document.querySelector('.container9');
btnClose.onclick=function(){
    container10.classList.add('hide');
    btnClose.classList.add('hide'); //hit hna khdam ela btnClose idan this katrj3 elih
    btnOpen.classList.remove('hide');
};
btnOpen.onclick=function(){
    this.classList.add('hide');
    btnClose.classList.remove('hide');
    container10.classList.remove('hide');
};