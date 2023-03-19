function hesapla(){
    
    
    boslukHesaplama();

}

function boslukHesaplama(){
    var fiyat = document.getElementById("fiyat");
 
    
   // boş bıraklındığında tetiklenecek olay
    if(fiyat.value=="" || fiyat.value=="Lütfen değer giriniz !"){
            fiyat.value="Lütfen değer giriniz !";
            fiyat.style.color="red";

    }
    else{
        fiyat.style.color="black";
        butonKkontrol();
    }

    

}


function butonKkontrol(){
    var buton = document.getElementById("btnHesapla");
    if(buton.value=="Hesapla"){
        buton.value="Temizle";
        sonuc();

    }
    else {
        buton.value="Hesapla";
        temizle();
    }
}

function temizle(){
    document.getElementById("fiyat").value="";
    document.getElementById("taksitliFiyat").innerHTML="Taksitli Fiyatı : ";
    document.getElementById("fiyat").focus();
}

function tiklama(){
    document.getElementById("fiyat").value="";
}

function sonuc(){
    var fiyat = document.getElementById("fiyat").value; 
    
    if(document.getElementById("3").checked){

        var sayi = fiyat/3;

        if(fiyat%3==0){
            document.getElementById("taksitliFiyat").innerHTML= "Taksitli Fiyatı : "+ sayi.toFixed(0);

        }
        else{
            document.getElementById("taksitliFiyat").innerHTML= "Taksitli Fiyatı : "+ sayi.toFixed(2);

        }
      
       
        
      
    }
    else if(document.getElementById("6").checked){
        if(fiyat%6==0){
            document.getElementById("taksitliFiyat").innerHTML= "Taksitli Fiyatı : "+ Number((fiyat/6).toFixed(2));

        }
        else{
            document.getElementById("taksitliFiyat").innerHTML= "Taksitli Fiyatı : "+ Number((fiyat/6).toFixed(2));
        }
        
    } 
    else if(document.getElementById("9").checked){
        if(fiyat%9==0){
            document.getElementById("taksitliFiyat").innerHTML= "Taksitli Fiyatı : "+ Number((fiyat/9).toFixed(2));

        }
        else{
            document.getElementById("taksitliFiyat").innerHTML= "Taksitli Fiyatı : "+ Number((fiyat/9).toFixed(2));
        }
    }
   

}