function openMer(){
    closecard()
    document.getElementById("mer").style.borderColor="white";
    document.getElementById("card1").style.display="block";
    
}
function openV(){
    closecard()
    document.getElementById("v").style.borderColor="white";
    document.getElementById("card2").style.display="block";
}
function openE(){
    closecard()
    document.getElementById("e").style.borderColor="white";
    document.getElementById("card3").style.display="block";
}
function openMars(){
    closecard()
    document.getElementById("mar").style.borderColor="white";
    document.getElementById("card4").style.display="block";
}
function openJup(){
    closecard()
    document.getElementById("j").style.borderColor="white";
    document.getElementById("card5").style.display="block";
}
function openSat(){
    closecard()
    document.getElementById("s").style.borderColor="white";
    document.getElementById("card6").style.display="block";
}
function openU(){
    closecard()
    document.getElementById("u").style.borderColor="white";
    document.getElementById("card7").style.display="block";
}
function openNep(){
    closecard()
    document.getElementById("n").style.borderColor="white";
    document.getElementById("card8").style.display="block";
}
function closecard(){
    document.getElementById("mer").style.borderColor="#333030";
    document.getElementById("v").style.borderColor="#333030";
    document.getElementById("e").style.borderColor="#333030";
    document.getElementById("mar").style.borderColor="#333030";
    document.getElementById("j").style.borderColor="#333030";
    document.getElementById("s").style.borderColor="#333030";
    document.getElementById("u").style.borderColor="#333030";
    document.getElementById("n").style.borderColor="#333030";
    document.getElementById("card1").style.display="none";
    document.getElementById("card2").style.display="none";
    document.getElementById("card3").style.display="none";
    document.getElementById("card4").style.display="none";
    document.getElementById("card5").style.display="none";
    document.getElementById("card6").style.display="none";
    document.getElementById("card7").style.display="none";
    document.getElementById("card8").style.display="none";
}
function trans(){
    if(document.getElementById("val").innerHTML=="3D"){
        document.getElementById("transf").style.transform="rotateX(70deg)";
        document.getElementById("val").innerHTML="2D";
        document.getElementById("transf").style.top="50%";
        document.getElementById("planets").style.marginTop="32rem";
    }
    else{
        document.getElementById("transf").style.transform="none";
        document.getElementById("val").innerHTML="3D";
        document.getElementById("transf").style.top="78%";
        document.getElementById("planets").style.marginTop="68rem";
    }
}