    //Javascript
function Parametr(a,b,c) {
    a=document.getElementById("Para").value;
    b=4;
    c=b*parseInt(a);
    document.getElementById("jvb").innerHTML=c;
}
function Yuzasi(a,b,c) {
    a=document.getElementById("Para3").value;
    a=document.getElementById("Para3").value;
    c=parseInt(a)*parseInt(a);
    document.getElementById("jvb1").innerHTML=c;
}
function Turburyuz(a,b,c) {
a=document.getElementById("Para5").value;
b=document.getElementById("Para6").value;
c=parseInt(a)*parseInt(b);
    document.getElementById("jvb2").innerHTML=c;
}
function Turpar(a,b,d,c) {
    a=document.getElementById("Para5").value;
    b=document.getElementById("Para6").value;
    d=2;
    c=(parseInt(a)+parseInt(b))*d;
    document.getElementById("jvb2").innerHTML=c;
}
function Adiametri(a,b,c) {
    a=document.getElementById("Para7").value;
    b=3.14;
    c=parseInt(a)*b;
    document.getElementById("jvb3").innerHTML=c;
}
function urtacha(a,b,d,c) {
    a=document.getElementById("Para1").value;
    b=document.getElementById("Para2").value;
    d=2;
    c=(parseInt(a)+parseInt(b))/d;
    document.getElementById("jvb4").innerHTML=c;
}
    function geometri(a,b,c) {
        a=document.getElementById("Para8").value;
        b=document.getElementById("Para9").value;
        c=parseInt(a)*parseInt(b);
        document.getElementById("jvb7").innerHTML=c;

}
function sirti(a,b,d,c) {
    a=document.getElementById("Para10").value;
    c=parseInt(a)*parseInt(a)*parseInt(a);
    document.getElementById("jvb9").innerHTML=c;
}
    function hajmini(a,b,d,c) {
        a=document.getElementById("Para11").value;
        b=6;
        c=parseInt(b)*(parseInt(a)*parseInt(a));
        document.getElementById("jvb12").innerHTML=c;
    }
    function phajmi(a,b,c,d) {
        a=document.getElementById("Para14").value;
        b=document.getElementById("Para15").value;
        d=document.getElementById("Para16").value;
        c=parseInt(a)*parseInt(b)*parseInt(d)
        document.getElementById("jvb15").innerHTML=c;
    }
    function psirt(a,b,c,d,e) {
        a=document.getElementById("Para14").value;
        b=document.getElementById("Para15").value;
        d=document.getElementById("Para16").value;
        e=2;
        c=parseInt(e)*(parseInt(a)*parseInt(b)+parseInt(b)*parseInt(d)+parseInt(d)*parseInt(a))
        document.getElementById("jvb15").innerHTML=c;
    }
    function radius(a,b,c,d,e) {
        a=document.getElementById("Para20").value;
        d=3.14;
        e=2;
        c=e*d*parseInt(a);
        document.getElementById("jvb20").innerHTML=c;

    }
    function yuza(a,b,c,d,e) {
        a=document.getElementById("Para20").value;
        d=3.14;
        e=2;
        c=d*(parseInt(a)*parseInt(a));
        document.getElementById("jvb20").innerHTML=c;

    }