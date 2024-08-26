var Marcas


function cargar(){

    let urlParams = new URLSearchParams(window.location.search);
    var mc =  urlParams.get("M");
    var opc;
    if(mc==="I"){

       opc =["Iphone 11","Iphone 11 pro","Iphone 11 pro max","Iphone 12","Iphone 12 pro","Iphone 12 pro max","Iphone 13","Iphone 13 pro","Iphone 13 pro max","Iphone 14","Iphone 14 pro","Iphone 14 pro max", "Otro"]

        
        
    }

    if(mc==="Oppo"){

        opc =["Oppo Reno 7","Oppo Reno 6","Oppo Reno 5","Otro"]

        
        
    }

    if(mc==="Motorola"){

        opc =["Moto E20","Moto E40","Moto E6","Moto E7","Moto Edge20","Moto G100","Moto G20","Moto G22","Moto G30","Moto G4","Moto G5","Moto E4","Moto G50","Moto G51","Moto G5s","Moto G6","Moto G7","Moto G8","Otro",]


    }
    
    if(mc==="Vivo"){

        opc =["Vivo Y22s","Vivo V25","Vivo V21S","Vivo Y51s","Otro"]

    }


    var select = document.getElementById("listado");
        
        
        for(var i = 0; i <opc.length;i++){
            var opciones = document.createElement("option");
            opciones.text = opc[i];
        opciones.value = opc[i];
        select.appendChild(opciones);


        }
             

}

function Marca(m){
    Marcas=m;   
    window.location="Solicitud.html?M="+Marcas;
    

}