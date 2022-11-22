let iduser2 = 0;
var editar = false;
let tabla_ciclo = false;

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

  console.log(tabla_ciclo)

  let dia_efecto_ciclo = ((new Date).toISOString()).slice(0,10)  
    
    document.getElementById("txtfechaciclo").value = dia_efecto_ciclo
    $(".table tbody").html(""); //limpia la tabla
    var fecha = document.getElementById("fecha_ciclo").value;

if (tabla_ciclo == false) {
  fetch('https://apirest.gec.org.mx/api//riegos/getFormCiclosfecha/'+fecha+'')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(element => {
     
        //console.log(i, resp[i].humedad)
        $("#tbodyciclo-rep").append('<tr><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.id_rciclo+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        (element.fecha_formato)+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.cultivo_revisado+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.rancho_revisado+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.n_ciclo+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.tiempo_ciclo+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.n_base+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.status_producto+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.presion_riego_valvula+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.presion_riego_cintilla_manguera+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.ph_gotero+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.ce_gotero+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.mililitros_captacion+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.ph_dren+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.ce_dren+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.mililitros_dren+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.porcentaje_humedad+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.evapotranspiracion+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.comentario_general+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.fecha_actualizacion+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.usuario+'</b></td><td style="text-align:center;" class="table-active"><button class="eliminar btn-danger" data-fecha="'+element.fecha+'" data-id="'+element.id_rciclo+'">Eliminar</button></td></tr>')
    
    });
})
}else{
  fetch('https://apirest.gec.org.mx/api//riegos/getFormCiclosfecha/'+fecha+'')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(element => {
     
        //console.log(i, resp[i].humedad)
        $("#tbodyciclo-reg").append('<tr><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        (element.fecha_formato).slice(0,10)+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.cultivo_revisado+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.rancho_revisado+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.n_ciclo+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.fecha_actualizacion+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
        element.usuario+'</b></td><td style="text-align:center;" class="table-active"><button class="eliminar btn-danger" data-fecha="'+element.fecha+'" data-id="'+element.id_rciclo+'">Eliminar</button></td></tr>')
    
    });
})
}

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
    


    document.getElementById("saveciclo").addEventListener('submit', (event) => {
      event.preventDefault()
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
          usuario: sessionStorage.getItem('emailActivo')
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
  document.getElementById("saveciclo").reset();
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Registro Exitoso en ciclo',
    showConfirmButton: false,
    timer: 1500
  })
obtenerciclo();

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

    document.getElementById("menu-ciclos").addEventListener('click', () => {
      document.getElementById("detalle_ciclo").style.display = "inline";
      document.getElementById("detalle_suelo").style.display = "none";
      document.getElementById("detalle_estacion").style.display = "none";
      document.getElementById("img-fondo").style.display = "none";
      document.getElementById("btn-inicio").style.display = "inline";
      document.getElementById('consulta_fecha').style.display = 'none'
      document.getElementById('ciclo-rep').style.display = "none";
      tabla_ciclo = true;
      obtenerciclo()
     })
  
     document.getElementById("menu-ciclos-reportes").addEventListener('click', () => {
      document.getElementById("btn-inicio").style.display = "inline";
      document.getElementById("detalle_ciclo").style.display = "inline";
      document.getElementById("detalle_suelo").style.display = "none";
      document.getElementById("detalle_estacion").style.display = "none";
      document.getElementById("img-fondo").style.display = "none";
      document.getElementById('title-ciclo').innerHTML = "Reportes de ciclos por fecha"
  
      document.getElementById("btn-ciclo").style.display = "none";

      document.getElementById('ciclo-reg').style.display = "none";
      tabla_suelo = false;
      obtenerciclo()
     })

    let dia_efecto_ciclo = ((new Date).toISOString()).slice(0,10)  
    
    document.getElementById("txtfechaciclo").value = dia_efecto_ciclo

          