

//차례대로 색을 바꾸는 것을 시도했다...실패했다. 
// window.addEventListener("scroll", function(){
//     var scroll=window.pageYOffset;
//     console.log(scroll);

//     var n=1;
//     while(n<=8){

//     var col1=document.getElementsByClassName('box')[n-1].style.backgroundColor;
//     var col2=document.getElementsByClassName('box')[n].style.backgroundColor;  
  
//     if (scroll=50*n){
//         document.getElementsByClassName('box')[n-1].style.backgroundColor=col2;
//         // document.getElementsByClassName('box')[n].style.backgroundColor=col1;        
        
//     }   
//     n++;
//     console.log(n);
//     }
    
// });

// window.addEventListener('scroll',function(){

//     var scroll = window.pageYOffset;
//     console.log(scroll);
//     var n=0;
//     while(n<8){
//         if (scroll>40+10*n&&scroll<40+20*n){
//         document.getElementsByClassName('box')[n].style.visibility='visible'}
//         n++;
//         } 
// });

var n =0;

function color_change(){
    while(n<4){
    
    var col1 = document.getElementsByClassName('box')[n].style.backgroundColor;
    var col2 = document.getElementsByClassName('box')[7-n].style.backgroundColor;
    document.getElementsByClassName('box')[n].style.backgroundColor = col2;
    document.getElementsByClassName('box')[7-n].style.backgroundColor = col1;
    n++;
    }

};



