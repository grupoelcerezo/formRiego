let iduser3 = 0;
var editar = false;
let tabla_estacion = false;

let dia_estacion = parseInt( ((new Date).toISOString()).slice(8,10) );
if(dia_estacion != 0){

  if (dia_estacion <=9) {
    let dias_estacion = '0'+dia;
    let ayer_estacion = ((new Date).toISOString()).slice(0,8)+dias_estacion
   
    document.getElementById("fecha_estacion").value = ayer_estacion;
  }else{
    let ayer_estacion = ((new Date).toISOString()).slice(0,8)+dia_estacion
   
    document.getElementById("fecha_estacion").value = ayer_estacion;
  }
  obtenerestacion()
}
 


function obtenerestacion(){

  let dia_efecto_estacion = ((new Date).toISOString()).slice(0,10)  
    document.getElementById("txtfechaestacion").value = dia_efecto_estacion

    $(".table tbody").html(""); //limpia la tabla
    var fecha = document.getElementById("fecha_estacion").value;

 if (tabla_estacion == false) {
  fetch('https://apirest.gec.org.mx/api//riegos/getFormEstacionesfecha/'+fecha+'')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(element => {
     
   
        $("#tbodyestaciones-rep").append('<tr><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.id_rhidro+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        (element.fecha).slice(0,10)+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.cultivo_revisado+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.rancho_revisado+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.n_estacion+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.mililitros_captacion+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.ph_entrada+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.ce_entrada+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.mililitros_dren+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.ph_dren+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.ce_dren+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.variedad+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.comentario_general+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.fecha_actualizacion+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.usuario+'</b></td><td style="text-align:center;" class="table-active"><button class="eliminar btn-danger" data-fecha="'+element.fecha+'" data-id="'+element.id_rhidro+'">Eliminar</button></td></tr>')
      
    });
})
 }else{
  fetch('https://apirest.gec.org.mx/api//riegos/getFormEstacionesfecha/'+fecha+'')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(element => {
     
   
        $("#tbodyestaciones-reg").append('<tr><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        (element.fecha).slice(0,10)+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.cultivo_revisado+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.rancho_revisado+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.fecha_actualizacion+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.usuario+'</b></td><td style="text-align:center;" class="table-active"><button class="eliminar btn-danger" data-fecha="'+element.fecha+'" data-id="'+element.id_rhidro+'">Eliminar</button></td></tr>')
      
    });
})
 }

    
}

$(document).on('click', '.editar', function () {
           iduser3 = $(this).data("id");  
           PintarUsuario(iduser3);
           editar = true;
        });

        function PintarUsuario(iduser3){

$.get("https://apirest.gec.org.mx/api//riegos/getFormEstaciones" + iduser3)
.done(function( response ) {
    
    $("#txtnombres").val(response.Name),
    $("#txtdescription").val(response.Description),
    $("#txtdocument").val(response.Quantity)
  });
}
    


    document.getElementById("saveestacion").addEventListener('click', () => {
  console.log("hola")
      if (editar == false) {

        document.getElementById("fecha_estacion").value = $("#txtfechaestacion").val();

        var data = {
          fecha : $("#txtfechaestacion").val(),
          cultivo_revisado : $("#txtcultivoestacion_revisado").val(),
          rancho_revisado : $("#txtranchoestacion_revisado").val(),
          n_estacion : $("#txtnestacion_estacion").val(),
          mililitros_captacion : $("#txtmililitroscicloestacion_captacion").val(),
          ph_entrada : $("#txtphestacion_entrada").val(),
          ce_entrada : $("#txtceestacion_entrada").val(),
          mililitros_dren : $("#txtmililitrosestacion_dren").val(),
          ph_dren : $("#txtphestacion_dren").val(),
          ce_dren : $("#txtceestacion_dren").val(),
          variedad : $("#txtvariedadestacion").val(),
          comentario_general : $("#txtcomentarioestacion").val(),
          usuario: 'dev.ti@grupoelcerezo.com'
            }

            fetch('https://apirest.gec.org.mx/api//riegos/getFormEstaciones', {
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
  document.getElementById("miForm-estacion").reset();
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Registro Exitoso en estación',
    showConfirmButton: false,
    timer: 1500
  })
  
  obtenerestacion();
  $('#Modal-estaciones').modal('hide')
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
                  id : iduser3,
                  cultivo_revisado : $("#txtcultivoestacion_revisado").val(),
                  rancho_revisado : $("#txtranchoestacion_revisado").val(),
                  n_estacion : $("#txtnestacion_estacion").val(),
                  mililitros_captacion : $("#txtmililitroscicloestacion_captacion").val(),
                  ph_entrada : $("#txtphestacion_entrada").val(),
                  ce_entrada : $("#txtceestacion_entrada").val(),
                  mililitros_dren : $("#txtmililitrosestacion_dren").val(),
                  ph_dren : $("#txtphestacion_dren").val(),
                  ce_dren : $("#txtceestacion_dren").val(),
                  variedad : $("#txtvariedadestacion").val(),
                  comentario_general : $("#txtcomentarioestacion").val(),
            }

                $.ajax({
                method: "PUT",
                url: "https://apirest.gec.org.mx/api//riegos/getFormEstaciones"+iduser3,
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
    iduser3 = $(this).data("id");
    fecha = $(this).data("fecha");
 
    document.getElementById("fecha_estacion").value = fecha.slice(0,10);

    fetch('https://apirest.gec.org.mx/api//riegos/getFormEstaciones/'+iduser3+'', {
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
        obtenerestacion();
    })
    .catch(error => {
        console.log("error de peticion")
        console.log(error)
    })
    
});



var cultivo = "";
        //CULTIVOS

     

         document.getElementById("txtcultivoestacion_revisado").addEventListener('change', () => {
  console.log("ciclos")
          $("#txtranchoestacion_revisado").find('option').not(':first').remove();
          $("#txtvariedadestacion").find('option').not(':first').remove();
          
          cultivo = document.getElementById("txtcultivoestacion_revisado").value;
        
         
          fetch('https://api.gec.org.mx/api/getCecos//')
    .then(resp => resp.json())
    .then( respObj => {
     let i = 0;
      respObj.forEach(respuesta => {
      
        if (respObj[i].CULTIVO == cultivo && respObj[i].MEDIO == "SUSTRATO") {
          $("#txtranchoestacion_revisado").append("<option id='prueba2' value="+respObj[i].CODIGO+">"+respObj[i].CODIGO+"-"+respObj[i].DESCRIPCION+"</option>")
        }
        
        i=i+1;
      });
      
    });

    fetch('https://api.gec.org.mx/api/getCCVarierdad/')
    .then(resp => resp.json())
    .then( respObj => {
     let i = 0;
      respObj.forEach(respuesta => {
      
        if (respObj[i].cultivo == cultivo) {
          $("#txtvariedadestacion").append("<option id='prueba2' value="+respObj[i].VARIERDAD+">"+respObj[i].VARIERDAD+"</option>")
        }
        
        i=i+1;
      });
      
    });

    })

    document.getElementById("menu-estaciones").addEventListener('click', () => {
      document.getElementById("detalle_estacion").style.display = "inline";
      document.getElementById("detalle_suelo").style.display = "none"
      document.getElementById("detalle_ciclo").style.display = "none";
      document.getElementById("img-fondo").style.display = "none";
      document.getElementById("btn-inicio").style.display = "inline";
      document.getElementById('consulta_estacion').style.display = "none"
      document.getElementById('estacion-reg').style.display = "none";
      tabla_estacion = true;
      obtenerestacion()
     })
  
     document.getElementById("menu-estaciones-reportes").addEventListener('click', () => {
      document.getElementById("detalle_estacion").style.display = "inline";
      document.getElementById("detalle_suelo").style.display = "none"
      document.getElementById("detalle_ciclo").style.display = "none";
      document.getElementById("img-fondo").style.display = "none";
      document.getElementById('title-estacion').innerHTML = "Reportes de estaciones por fecha"
    
      document.getElementById("btn-estacion").style.display = "none";
  
      document.getElementById("btn-inicio").style.display = "inline";

      document.getElementById('estacion-rep').style.display = "none";
      tabla_estacion = false;
      obtenerestacion()
     })
  

    let dia_efecto_estacion = ((new Date).toISOString()).slice(0,10)  
    document.getElementById("txtfechaestacion").value = dia_efecto_estacion