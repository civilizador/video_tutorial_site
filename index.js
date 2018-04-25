
var x = document.querySelector("#X");
var banner3 = document.querySelector(".banner3");
var close2  = document.querySelector("#close2"); 
    
    setTimeout( function delay() 
    { banner3.style.display="inline-block"; }, 3000);
 
   
    
    
    x.addEventListener("click", 
    function() 
    { banner3.style.display="none"; } );

    close2.addEventListener("click", 
    function() 
    { banner3.style.display="none"; } );

   