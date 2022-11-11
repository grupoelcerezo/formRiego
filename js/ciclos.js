let iduser2 = 0;
var editar = false;

let dia_ciclo = parseInt( ((new Date).toISOString()).slice(8,10) );
if (dia_ciclo != 0) {

    if (dia_ciclo <=9) {
        let dias_ciclo = '0'+dia_ciclo;
        let ayer_ciclo = ((new Date).toISOString()).slice(0,8)+dias_ciclo
       
        document.getElementById("fecha_ciclo").value = ayer_ciclo;
      }else{
        let ayer_ciclo = ((new Date).toISOString()).slice(0,8)+dia_ciclo
       
        document.getElementById("fecha_ciclo").value = ayer_ciclo;
      }
obtenerciclo();
}
    


function obtenerciclo(){

  let dia_efecto_ciclo = ((new Date).toISOString()).slice(0,10)  
    
    document.getElementById("txtfechaciclo").value = dia_efecto_ciclo
    $(".table tbody").html(""); //limpia la tabla
    var fecha = document.getElementById("fecha_ciclo").value;


fetch('https://apirest.gec.org.mx/api//riegos/getFormCiclosfecha/'+fecha+'')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(element => {
     
        //console.log(i, resp[i].humedad)
        $("#tbodyciclo").append('<tr><td style="text-align:center;" class="table-active">'+
        element.id_rciclo+'</td><td style="text-align:center;" class="table-active">'+
        (element.fecha).slice(0,10)+'</td><td style="text-align:center;" class="table-active">'+
        element.cultivo_revisado+'</td><td style="text-align:center;" class="table-active">'+
        element.rancho_revisado+'</td><td style="text-align:center;" class="table-active">'+
        element.n_ciclo+'</td><td style="text-align:center;" class="table-active">'+
        element.tiempo_ciclo+'</td><td style="text-align:center;" class="table-active">'+
        element.n_base+'</td><td style="text-align:center;" class="table-active">'+
        element.status_producto+'</td><td style="text-align:center;" class="table-active">'+
        element.presion_riego_valvula+'</td><td style="text-align:center;" class="table-active">'+
        element.presion_riego_cintilla_manguera+'</td><td style="text-align:center;" class="table-active">'+
        element.ph_gotero+'</td><td style="text-align:center;" class="table-active">'+
        element.ce_gotero+'</td><td style="text-align:center;" class="table-active">'+
        element.mililitros_captacion+'</td><td style="text-align:center;" class="table-active">'+
        element.ph_dren+'</td><td style="text-align:center;" class="table-active">'+
        element.ce_dren+'</td><td style="text-align:center;" class="table-active">'+
        element.mililitros_dren+'</td><td style="text-align:center;" class="table-active">'+
        element.porcentaje_humedad+'</td><td style="text-align:center;" class="table-active">'+
        element.evapotranspiracion+'</td><td style="text-align:center;" class="table-active">'+
        element.comentario_general+'</td><td style="text-align:center;" class="table-active">'+
        element.fecha_actalizacion+'</td><td style="text-align:center;" class="table-active">'+
        element.usuario+'</td><td style="text-align:center;" class="table-active"><button class="eliminar btn-danger" data-fecha="'+element.fecha+'" data-id="'+element.id_rciclo+'">Eliminar</button></td></tr>')
    
    });
})
}

$(document).on('click', '.editar', function () {
           iduser2 = $(this).data("id");  
           PintarUsuario(iduser2);
           editar = true;
        });

        function PintarUsuario(iduser2){

$.get("https://apirest.gec.org.mx/api//riegos/getFormCiclos" + iduser2)
.done(function( response ) {
    
    $("#txtnombres").val(response.Name),
    $("#txtdescription").val(response.Description),
    $("#txtdocument").val(response.Quantity)
  });
}
    


    document.getElementById("saveciclo").addEventListener('click', () => {
      if (editar == false) {

        document.getElementById("fecha_ciclo").value = $("#txtfechaciclo").val();

        var data = {
            fecha : $("#txtfechaciclo").val(),
          cultivo_revisado : $("#txtcultivociclo_revisado").val(),
          rancho_revisado : $("#txtranchociclo_revisado").val(),
          n_ciclo : $("#txtnciclo_ciclo").val(),
          tiempo_ciclo : $("#txttiempociclo_ciclo").val(),
          n_base : $("#txtnciclo_base").val(),
          status_producto : $("#txtstatusciclo_producto").val(),
          presion_riego_valvula : $("#txtpresionciclo_riego_valvula").val(),
          presion_riego_cintilla_manguera : $("#txtpresionciclo_riego_cintilla_manguera").val(),
          ph_gotero : $("#txtphciclo_gotero").val(),
          ce_gotero : $("#txtceciclo_gotero").val(),
          mililitros_captacion : $("#txtmililitrosciclo_captacion").val(),
          ph_dren : $("#txtphciclo_dren").val(),
          ce_dren: $("#txtceciclo_dren").val(),
          mililitros_dren : $("#txtmililitrosciclo_dren").val(),
          porcentaje_humedad : $("#txtporcentajeciclo_humedad").val(),
          evapotranspiracion : $("#txtevapotranspiracionciclo").val(),
          comentario_general : $("#txtcomentariociclo").val(),
          usuario: 'usuario prueba'
            }
          
            fetch('https://apirest.gec.org.mx/api//riegos/getFormCiclos', {
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
  document.getElementById("miForm-ciclo").reset();
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Registro Exitoso en ciclo',
    showConfirmButton: false,
    timer: 1500
  })
  let dia_ciclo = parseInt( ((new Date).toISOString()).slice(8,10) );
if (dia_ciclo != 0) {

    if (dia_ciclo <=9) {
        let dias_ciclo = '0'+dia_ciclo;
        let ayer_ciclo = ((new Date).toISOString()).slice(0,8)+dias_ciclo
       
        document.getElementById("fecha_ciclo").value = ayer_ciclo;
      }else{
        let ayer_ciclo = ((new Date).toISOString()).slice(0,8)+dia_ciclo
       
        document.getElementById("fecha_ciclo").value = ayer_ciclo;
      }
obtenerciclo();
}
  $('#Modal-detalle-ciclos').modal('hide')
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
                  id : iduser2,
                  cultivo_revisado : $("#txtcultivo_revisado").val(),
                  n_ciclo : $("#txtn_ciclo").val(),
                  tiempo_ciclo : $("#txttiempo_ciclo").val(),
                  status_producto : $("#txtstatus_producto").val(),
                  humedad : $("#txthumedad").val(),
                  n_base : $("#n_base").val(),
                  status_producto : $("#txtstatus_producto").val(),
                  presion_riego_valvula : $("#txtpresion_riego_valvula").val(),
                  presion_riego_cintilla_manguera : $("#txtpresion_riego_cintilla_manguera").val(),
                  ph_gotero : $("#txtph_gotero").val(),
                  ce_gotero : $("#txtce_gotero").val(),
                  mililitros_captacion : $("#txtmililitros_captacion").val(),
                  ph_dren : $("#txtph_dren").val(),
                  ce_dren: $("#txtce_dren").val(),
                  mililitros_dren : $("#txtmililitros_dren").val(),
                  porcentaje_humedad : $("#txtporcentaje_humedad").val(),
                  comentario_general : $("#txtcomentario").val(),
                  usuario: 'dev.ti@grupoelcerezo.com'
            }

            fetch('https://apirest.gec.org.mx/api//riegos/getFormCiclos', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then( resp => resp.json() )
.then( console.log )
.catch( error=> {
    console.log('error en la peticion')
    console.log(error)
} );

                editar = false;
      }
})

  

    $(document).on('click', '.eliminar', function () {
            iduser2 = $(this).data("id");
            fecha = $(this).data("fecha");
     
            let ayer_ciclo = ((new Date).toISOString()).slice(0,8)+fecha.slice(0,10)

  console.log(iduser2)
            fetch('https://apirest.gec.org.mx/api//riegos/getFormCiclos/'+iduser2+'', {
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
                obtenerciclo();
            })
            .catch(error => {
                console.log("error de peticion")
                console.log(error)
            })
            
        });



var cultivo = "";
        //CULTIVOS

     

         document.getElementById("txtcultivociclo_revisado").addEventListener('change', () => {
  console.log("ciclos")
          $("#txtranchociclo_revisado").find('option').not(':first').remove();

          
          cultivo = document.getElementById("txtcultivociclo_revisado").value;
        
         
          fetch('https://api.gec.org.mx/api/getCecos//')
    .then(resp => resp.json())
    .then( respObj => {
     let i = 0;
      respObj.forEach(respuesta => {
      
        if (respObj[i].CULTIVO == cultivo && respObj[i].MEDIO == "SUSTRATO") {
          $("#txtranchociclo_revisado").append("<option id='prueba2' value="+respObj[i].CODIGO+">"+respObj[i].CODIGO+"-"+respObj[i].DESCRIPCION+"</option>")
        }
        
        i=i+1;
      });
      
    });

    })


    let dia_efecto_ciclo = ((new Date).toISOString()).slice(0,10)  
    
    document.getElementById("txtfechaciclo").value = dia_efecto_ciclo

          