function cong(){
    var t = document.getElementById("nhap").value;
    document.getElementById("nhap").value = parseInt(t) + 1;
}

function tru(){
    var t = document.getElementById("nhap").value;
    if ( parseInt(t) > 1 )
        document.getElementById("nhap").value = parseInt(t) - 1;
}
