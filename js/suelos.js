

let iduser = 0;
var editar = false;
let tabla_suelo = false;

let dia = parseInt( ((new Date).toISOString()).slice(8,10) );
if(dia != 0){

  if (dia <=9) {
    let dias = '0'+dia;
    let ayer = ((new Date).toISOString()).slice(0,8)+dias
    //console.log(ayer)
    document.getElementById("fecha_suelo").value = ayer;
  }else{
    let ayer = ((new Date).toISOString()).slice(0,8)+dia
   // console.log(ayer)
    document.getElementById("fecha_suelo").value = ayer;
  }
obtener()
   
}
   

function obtener(){

  let dia_efecto = ((new Date).toISOString()).slice(0,10)  
   document.getElementById("txtfecha").value = dia_efecto

        var fecha = document.getElementById("fecha_suelo").value;

       
   
    $(".table tbody").html(""); //limpia la tabla
    
   if (tabla_suelo == false) {
    fetch('https://apirest.gec.org.mx/api//riegos/getFormSuelosfecha/'+fecha+'')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(element => {

      if (sessionStorage.getItem('rolEmail').includes('ADMINISTRADOR')) {
       //console.log(i, resp[i].humedad)
       $("#tbodysuelo-rep").append('<tr class="table-active"><td class="table-active"><b id="strong-td">'+
       element.id_rsuelo+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       (element.fecha_formato)+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.cultivo_revisado+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.rancho_revisado+'</b></td><td style="text-align:center;" style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.metodo_aplicacion+'</b></td><td style="text-align:center;"class="table-active"><b id="strong-td">'+
       element.status_producto+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.humedad+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.presion_riego_valvula+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.presion_riego_cintilla_manguera+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.ph_gotero+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.ph_bomba+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.ph_tierra+'</b></td><td style="text-align:center;" sclass="table-active"><b id="strong-td">'+
       element.ce_gotero+'</b></td><td style="text-align:center;" sclass="table-active"><b id="strong-td">'+
       element.ce_bomba+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.ce_tierra+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.evapotranspiracion+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.comentario_general+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.fecha_actualizacion+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.usuario+'</b></td><td style="text-align:center;" class="table-active"><button class="eliminar btn-danger" data-fecha="'+element.fecha+'"  data-id="'+element.id_rsuelo+'">Eliminar</button></tr>') 
      }else{
        if (sessionStorage.getItem('emailActivo') == element.usuario){
            //console.log(i, resp[i].humedad)
       $("#tbodysuelo-rep").append('<tr class="table-active"><td class="table-active"><b id="strong-td">'+
       element.id_rsuelo+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       (element.fecha_formato)+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.cultivo_revisado+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.rancho_revisado+'</b></td><td style="text-align:center;" style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.metodo_aplicacion+'</b></td><td style="text-align:center;"class="table-active"><b id="strong-td">'+
       element.status_producto+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.humedad+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.presion_riego_valvula+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.presion_riego_cintilla_manguera+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.ph_gotero+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.ph_bomba+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.ph_tierra+'</b></td><td style="text-align:center;" sclass="table-active"><b id="strong-td">'+
       element.ce_gotero+'</b></td><td style="text-align:center;" sclass="table-active"><b id="strong-td">'+
       element.ce_bomba+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.ce_tierra+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.evapotranspiracion+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.comentario_general+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.fecha_actualizacion+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
       element.usuario+'</b></td><td style="text-align:center;" class="table-active"><button class="eliminar btn-danger" data-fecha="'+element.fecha+'"  data-id="'+element.id_rsuelo+'">Eliminar</button></tr>') 
        }
      }
     
       
    });
})
   }else{
    fetch('https://apirest.gec.org.mx/api//riegos/getFormSuelosfecha/'+fecha+'')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(element => {

      if (sessionStorage.getItem('emailActivo') == element.usuario){
          //console.log(i, resp[i].humedad)
        $("#tbodysuelo-reg").append('<tr class="table-active"></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        (element.fecha_formato)+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.cultivo_revisado+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.rancho_revisado+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.fecha_actualizacion+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.usuario+'</b></td><td style="text-align:center;" class="table-active"><button class="eliminar btn-danger" data-fecha="'+element.fecha+'"  data-id="'+element.id_rsuelo+'">Eliminar</button></tr>')
      }
       
    });
})
   }



}

$(document).on('click', '.editar', function () {
           iduser = $(this).data("id");  
           PintarUsuario(iduser);
           editar = true;
        });

        function PintarUsuario(iduser){

$.get("https://apirest.gec.org.mx/api//riegos/getFormFormSuelos" + iduser)
.done(function( response ) {
    
    $("#txtnombres").val(response.Name),
    $("#txtdescription").val(response.Description),
    $("#txtdocument").val(response.Quantity)
  });
}
    


    document.getElementById("savesuelo").addEventListener('submit', (event) => {
     event.preventDefault()
      document.getElementById("fecha_suelo").value = $("#txtfecha").val();

      if (editar == false) {
        var data = {
          fecha : $("#txtfecha").val(),
          cultivo_revisado : $("#txtcultivo_revisado").val(),
          rancho_revisado : $("#txtrancho_revisado").val(),
          metodo_aplicacion : $("#txtmetodo_aplicacion").val(),
          status_producto : $("#txtstatus_producto").val(),
          humedad : $("#txthumedad").val(),
          presion_riego_valvula : $("#txtpresion_riego_valvula").val(),
          presion_riego_cintilla_manguera : $("#txtpresion_riego_cintilla_manguera").val(),
          ph_gotero : $("#txthp_gotero").val(),
          ph_bomba : $("#txtph_bomba").val(),
          ph_tierra : $("#txtph_tierra").val(),
          ce_gotero : $("#txtce_gotero").val(),
          ce_bomba : $("#txtce_bomba").val(),
          ce_tierra : $("#txtce_tierra").val(),
          evapotranspiracion: $("#txtevapotranspiracion").val(),
          comentario_general : $("#txtcomentario").val(),
          usuario: sessionStorage.getItem('emailActivo')
            }

            fetch('https://apirest.gec.org.mx/api//riegos/getFormSuelos', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then( resp => resp.json())
            .then( resp => {
                console.log(resp)
                if (resp.status != 'ERROR') {
  document.getElementById("savesuelo").reset();
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Registro Exitoso en suelos',
    showConfirmButton: false,
    timer: 1500
  })

  obtener();
  $('#Modal-suelo').modal('hide')
                }else{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: resp.mensaje,
                        showConfirmButton: false,
                        timer: 2000
                      }) 
                }
                
            } )
            .catch(error => {
                console.log("error de peticion")
                console.log(error)
            })
          
       
      }else{
        var data = {
                  id : iduser,
          Cultivo_Revisado : $("#txtcultivo_revisado").val(),
          Rancho_revisado : $("#txtrancho_revisado").val(),
          Metodo_aplicacion : $("#txtmetodo_aplicacion").val(),
          Status_producto : $("#txtstatus_producto").val(),
          Humedad : $("#txthumedad").val(),
          Presion_riego_valvula : $("#txpresion_riego_valvula").val(),
          Presion_riego_cintilla_manguera : $("#txpresion_riego_cintilla_manguera").val(),
          Ph_gotero : $("#txthp_gotero").val(),
          ph_bomba : $("#txtph_bomba").val(),
          ph_tierra : $("#txtph_tierra txtph_tierra").val(),
          Ce_gotero : $("#txtce_gotero").val(),
          Ce_bomba : $("#txtce_bomba").val(),
          Ce_tierra : $("#txce_tierra").val(),
          Evapotranspiracion: $("#txtevapotranspiracion").val(),
          Comentario : $("#txtcomentario").val(),
            }

                $.ajax({
                method: "PUT",
                url: "https://apirest.gec.org.mx/api//riegos/getFormSuelos"+iduser,
                contentType: 'application/json',
                data: JSON.stringify(data), // access in body
                })
                .done(function( response ) {
                    console.log(response);
                    if(response){
                        alert("Se guardaron los cambios");
                      
                    }else{
                        alert("Error al Modificar")
                    }
                });
                editar = false;
      }
})

  

$(document).on('click', '.eliminar', function () {
    iduser = $(this).data("id");
    fecha = $(this).data("fecha");
    document.getElementById("fecha_suelo").value = fecha.slice(0,10);
console.log(iduser2)
    fetch('https://apirest.gec.org.mx/api//riegos/getFormSuelos/'+iduser+'', {
        method: 'DELETE',
    })
    .then( resp => {
        console.log(resp.status)
        if(resp.status == 201){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Registro Eliminado',
                showConfirmButton: false,
                timer: 2000
              })
        }
        obtener()
    })
    
    .catch(error => {
        console.log("error de peticion")
        console.log(error)
    })
    
});


             //RANCHOS-ESTACIÓN
   
            
          
        
        var cultivo_suelo = "";
        //CULTIVOS

    

        document.getElementById("txtcultivo_revisado").addEventListener('change', () => {

         
         $("#txtrancho_revisado").find('option').not(':first').remove();
      

         
         cultivo_estacion = document.getElementById("txtcultivo_revisado").value;
       
       
         fetch('https://api.gec.org.mx/api/getCecos/')
   .then(resp => resp.json())
   .then( respObj => {
    let i = 0;
     respObj.forEach(respuesta => {
       console.log(respObj[i].CULTIVO,cultivo_estacion) 
       if (respObj[i].CULTIVO == cultivo_estacion && respObj[i].MEDIO == "SUELO") {
         $("#txtrancho_revisado").append("<option id='prueba' value="+respObj[i].CODIGO+">"+respObj[i].CODIGO+"-"+respObj[i].DESCRIPCION+"</option>")
       }
       
       i=i+1;
     });
     
   });

   })
       
   document.getElementById("menu-suelos").addEventListener('click', () => {
    document.getElementById("fecha-consulta-suelo").style.display = "inline";
    document.getElementById("detalle_ciclo").style.display = "none";
    document.getElementById("detalle_estacion").style.display = "none";
    document.getElementById("img-fondo").style.display = "none";
    document.getElementById("btn-inicio").style.display = "inline";
    document.getElementById('suelo-rep').style.display = "none";
    tabla_suelo = true;
    obtener()
   })

   document.getElementById("menu-suelos-reportes").addEventListener('click', () => {
    document.getElementById("fecha-consulta-suelo").style.display = "inline";
    document.getElementById("btn-inicio").style.display = "inline";
    document.getElementById("img-fondo").style.display = "none";
    document.getElementById('btn-suelo').style.display = "none";
    document.getElementById('detalle_suelo').style.display = "inline";
    document.getElementById('title-suelo').innerHTML = "REPORTES DE SUELOS POR FECHA";
    document.getElementById('suelo-reg').style.display = "none";
    tabla_suelo = false;
    obtener()
   })
   

   document.getElementById("btn-inicio").addEventListener( 'click', () =>{
    window.location.href = 'index.html';
   })
         
   let dia_efecto = ((new Date).toISOString()).slice(0,10)  
   document.getElementById("txtfecha").value = dia_efecto

   if (!sessionStorage.getItem('emailActivo')) {
    window.location.href = "login.html";
   }else{
    console.log(sessionStorage.getItem('emailActivo'))
   }

   document.getElementById('nombre').innerHTML = sessionStorage.getItem('nombre');