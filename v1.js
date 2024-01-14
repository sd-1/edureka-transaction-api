function simple(){
    var l, d,w,v;
    l=parseFloat(document.getElementById("box1").value);
    w=parseFloat(document.getElementById("box2").value);   
    d=parseFloat(document.getElementById("box3").value);


    v=d*l*w*Math.pow(10,-6)
    
    
    document.getElementById("box4").value=Math.round(1000*parseFloat(v))/1000;
    
    }