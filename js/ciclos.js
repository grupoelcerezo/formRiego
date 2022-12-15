let iduser2 = 0;
var editar = false;
let tabla_ciclo = false;
let clave_ciclo = 0;

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

  //console.log(tabla_ciclo)

  let dia_efecto_ciclo = ((new Date).toISOString()).slice(0,10)  
    
    document.getElementById("txtfechaciclo").value = dia_efecto_ciclo
    $(".table tbody").html(""); //limpia la tabla
    var fecha = document.getElementById("fecha_ciclo").value;

if (tabla_ciclo == false) {
  fetch('https://apirest.gec.org.mx/api//riegos/getFormCiclosfecha/'+fecha+'')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(element => {
 //console.log("ubica variedad",element)
      if (sessionStorage.getItem('rolEmail').includes('ADMINISTRADOR')){
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
    element.variedad+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
    element.comentario_general+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
    element.fecha_actualizacion+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
    element.usuario+'</b></td><td style="text-align:center;" class="table-active"><button class="eliminar btn-danger btn-block" data-fecha="'+element.fecha+'" data-id="'+element.id_rciclo+'">Eliminar</button><br><br><button class="editar_ciclo btn-primary btn-block" data-id="'+element.id_rciclo+'" data-cultivo="'+element.cultivo_revisado+'" data-codigo="'+element.rancho_revisado+'" data-toggle="modal" data-target="#Modal-detalle-ciclos">Editar</button></td></tr>')
      }else{
        if (sessionStorage.getItem('emailActivo') == element.usuario){
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
    element.variedad+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
    element.comentario_general+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
    element.fecha_actualizacion+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
    element.usuario+'</b></td><td style="text-align:center;" class="table-active"><button class="eliminar btn-danger btn-block" data-fecha="'+element.fecha+'" data-id="'+element.id_rciclo+'">Eliminar</button><br><br><button class="editar_ciclo btn-primary btn-block" data-id="'+element.id_rciclo+'" data-cultivo="'+element.cultivo_revisado+'" data-codigo="'+element.rancho_revisado+'" data-toggle="modal" data-target="#Modal-detalle-ciclos">Editar</button></td></tr>')
        }
      }
    
    });
})
}else{
  fetch('https://apirest.gec.org.mx/api//riegos/getFormCiclosfecha/'+fecha+'')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(element => {

      if (sessionStorage.getItem('emailActivo') == element.usuario){
 //console.log(i, resp[i].humedad)
 $("#tbodyciclo-reg").append('<tr><td style="text-align:center;" class="table-active"><b id="strong-td">'+
 (element.fecha_formato).slice(0,10)+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
 element.cultivo_revisado+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
 element.rancho_revisado+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
 element.n_ciclo+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
 element.fecha_actualizacion+'</b></td><td style="text-align:center;" class="table-active"><b id="strong-td">'+
 element.usuario+'</b></td><td style="text-align:center;" class="table-active"><button class="eliminar btn-danger btn-block" data-fecha="'+element.fecha+'" data-id="'+element.id_rciclo+'">Eliminar</button><br><br><button class="editar_ciclo btn-primary btn-block" data-id="'+element.id_rciclo+'" data-cultivo="'+element.cultivo_revisado+'" data-codigo="'+element.rancho_revisado+'" data-toggle="modal" data-target="#Modal-detalle-ciclos">Editar</button></td></tr>')
      }
    
    });
})
}

}

$(document).on('click', '.editar_ciclo', function () {
  clave_ciclo = $(this).data("id"); 
  editar_ciclo($(this).data("cultivo"))
  editarCicloVariedad($(this).data("codigo"))
  editar = true;

  let timerInterval
Swal.fire({
  title: 'Cargando datos para actualizar!',
  timer: 2500,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    //console.log('I was closed by the timer')
  }
})

  setTimeout( ()=> {
    PintarCiclo(clave_ciclo);
  },3000)
           
        });

        function PintarCiclo(clave_ciclo){
          console.log("CLAVE A EDITAR",clave_ciclo)
    fetch('https://apirest.gec.org.mx/api//riegos/getFormCiclos/'+clave_ciclo)
    .then(resp => resp.json())
    .then(resp => {
      
      resp.forEach(element => {
        console.log("afsdfsdfsdf",element.rancho_revisado)
        cultivo = element.cultivo_revisado;
        let año = element.fecha.slice(0,4);
        let mes = element.fecha.slice(5,7);
        let dia = element.fecha.slice(8,10);
        fecha_c = año+"-"+mes+"-"+dia;
        $("#txtfechaciclo").val(fecha_c);
        $("#txtcultivociclo_revisado").val(element.cultivo_revisado);
        $("#txtranchociclo_revisado").val(element.rancho_revisado);
        $("#txtnciclo_ciclo").val(element.n_ciclo);
        $("#txttiempociclo_ciclo").val(element.tiempo_ciclo);
        $("#txtnciclo_base").val(element.n_base);
        $("#txtstatusciclo_producto").val(element.status_producto);
        $("#txtpresionciclo_riego_valvula").val(element.presion_riego_valvula);
        $("#txtpresionciclo_riego_cintilla_manguera").val(element.presion_riego_cintilla_manguera);
        $("#txtphciclo_gotero").val(element.ph_gotero);
        $("#txtceciclo_gotero").val(element.ce_gotero);
        $("#txtmililitrosciclo_captacion").val(element.mililitros_captacion);
        $("#txtphciclo_dren").val(element.ph_dren);
        $("#txtceciclo_dren").val(element.ce_dren);
        $("#txtmililitrosciclo_dren").val(element.mililitros_dren);
        $("#txtporcentajeciclo_humedad").val(element.porcentaje_humedad);
        $("#txtevapotranspiracionciclo").val(element.evapotranspiracion);
        $("#txtcomentariociclo").val(element.comentario_general);
        $("#txtvariedadciclo").val(element.variedad);
      })

      
    })
  
}

function editar_ciclo(cult){
  fetch('https://api.gec.org.mx/api/getCecos//')
.then(resp => resp.json())
.then( respObj => {
 let i = 0;
  respObj.forEach(respuesta => {
    if (respObj[i].CULTIVO == cult && respObj[i].MEDIO == "SUSTRATO") {
      $("#txtranchociclo_revisado").append("<option id='prueba2' value="+respObj[i].CODIGO+">"+respObj[i].CODIGO+"-"+respObj[i].DESCRIPCION+"</option>")
      //console.log('ciclo_ciclo', respObj[i].CODIGO)
    }
    
    i=i+1;
  });
  
});
}

function editarCicloVariedad(cod) {
  //console.log("codioooo",cod)
  fetch('https://api.gec.org.mx/api/getCCVarierdad/')
  .then(resp => resp.json())
  .then( respObj => {
   let i = 0;
    respObj.forEach(respuesta => {
      if (respObj[i].centro_costo == cod) {
       //console.log("ciclo_ciclo",respObj[i].VARIERDAD)
        $("#txtvariedadciclo").append("<option id='prueba2' value="+respObj[i].VARIERDAD+">"+respObj[i].VARIERDAD+"</option>")
      }
      
      i=i+1;
    });
    
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
          usuario: sessionStorage.getItem('emailActivo'),
          variedad : $("#txtvariedadciclo").val()
            }
          
            fetch('https://apirest.gec.org.mx/api//riegos/getFormciclos', {
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
                        timer: 5000
                      }) 
                }
                
            } )
            .catch(error => {
                console.log("error de peticion")
                console.log(error)
            })
      }else{
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
          variedad : $("#txtvariedadciclo").val()
            }

            fetch('https://apirest.gec.org.mx/api//riegos/getFormciclos/'+clave_ciclo+'', {
              method: 'PUT',
              body: JSON.stringify(data),
              headers: {
                  'Content-Type': 'application/json'
              }
            })
            .then( resp => resp.json())
            .then( resp => {
              console.log("si estoy aqui",resp.status)
              if (resp.status == 'Correcto') {
document.getElementById("saveciclo").reset();
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Actualizacion con Exito en ciclos',
  showConfirmButton: true,
  timer: 1500
})

obtenerciclo();
$('#Modal-detalle-ciclos').modal('hide')
              }else{
                  Swal.fire({
                      position: 'top-end',
                      icon: 'error',
                      title: resp.message,
                      showConfirmButton: false,
                      timer: 5000
                    }) 
              }
              
          } )
          .catch(error => {
              console.log("error de peticion")
              console.log(error)
          })
                
                
                editar = false;
      }
})

document.getElementById("canselar_cic_down").addEventListener('click', () => {
  editar = false;
})

document.getElementById("canselar_cic_up").addEventListener('click', () => {
  editar = false;
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
                        title: resp.message,
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
var codigo = "";
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

    document.getElementById('txtranchociclo_revisado').addEventListener('change', () => {

      $("#txtvariedadciclo").find('option').not(':first').remove();

    codigo = document.getElementById('txtranchociclo_revisado').value;
      fetch('https://api.gec.org.mx/api/getCCVarierdad/')
      .then(resp => resp.json())
      .then( respObj => {
       let i = 0;
        respObj.forEach(respuesta => {
          console.log(codigo)
          if (respObj[i].centro_costo == codigo) {
            $("#txtvariedadciclo").append("<option id='prueba2' value="+respObj[i].VARIERDAD+">"+respObj[i].VARIERDAD+"</option>")
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
      document.getElementById('title-ciclo').innerHTML = "REPORTES DE CICLOS POR FECHA"
  
      document.getElementById("btn-ciclo").style.display = "none";

      document.getElementById('ciclo-reg').style.display = "none";
      tabla_suelo = false;
      obtenerciclo()
     })

    let dia_efecto_ciclo = ((new Date).toISOString()).slice(0,10)  
    
    document.getElementById("txtfechaciclo").value = dia_efecto_ciclo

          