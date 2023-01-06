$(document).ready(function(){
  $("#txtfiltro_estacion_cr").on("keyup", function() {

    
    var value = $(this).val().toLowerCase();
    $("#tbodyestaciones-rep tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $("#txtfiltro_estacion_rr").on("keyup", function() {

    console.log("holaestacion_rr")
    var value = $(this).val().toLowerCase();
    $("#tbodyestaciones-rep tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


let iduser3 = 0;
let clave_estacion = 0;
var editar = false;
let tabla_estacion = false;
var cultivo = "";
var codigo = "";
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
  let i = 0;
  let j = 1;
  let r = "";
  fetch('https://apirest.gec.org.mx/api//riegos/getFormEstacionesfecha/'+fecha+'')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(element => {

      fetch('https://api.gec.org.mx/api/getCecos//')
      .then(resp => resp.json())
      .then( respObj => {
       let i = 0;
        respObj.forEach(respuesta => {
        
          if (respObj[i].CODIGO == element.rancho_revisado && respObj[i].MEDIO == "SUSTRATO") {
            r = respObj[i].CODIGO+"-"+respObj[i].DESCRIPCION;
         
            //console.log(respObj[i].CODIGO,element.rancho_revisado)
          return r
          
          }
          
          i=i+1;
        });
        
      }).then(resp => {
        if (sessionStorage.getItem('rolEmail').includes('ADMINISTRADOR')) {
          console.log(fecha)
          $("#tbodyestaciones-rep").append('<tr class="table-success"><th scope="row">'+j+'</th><td><b>'+
          element.id_rhidro+'</td><td><b>'+
          (element.fecha_formato)+'</td><td><b>'+
          element.cultivo_revisado+'</td><td><b>'+
          r+'</td><td><b>'+
          element.n_estacion+'</td><td><b>'+
          element.mililitros_captacion+'</td><td><b>'+
          element.ph_entrada+'</td><td><b>'+
          element.ce_entrada+'</td><td>'+
          element.mililitros_dren+'</td><td><b>'+
          element.ph_dren+'</td><td><b>'+
          element.ce_dren+'</td><td><b>'+
          element.variedad+'</td><td><b>'+
          element.comentario_general+'</td><td><b>'+
          element.fecha_actualizacion+'</td><td><b>'+
          element.usuario+'</td><td><button  class="eliminar btn-danger btn-block" data-fecha="'+element.fecha+'" data-id="'+element.id_rhidro+'">Eliminar</button><br><button class="editar_estacion btn-primary btn-block" data-id="'+element.id_rhidro+'" data-cultivo="'+element.cultivo_revisado+'" data-codigo="'+element.rancho_revisado+'" data-toggle="modal" data-target="#Modal-estaciones">Editar</button></td></tr>')
        j=j+1;
        }else{
          if (sessionStorage.getItem('emailActivo') == element.usuario){
            $("#tbodyestaciones-rep").append('<tr class="table-success"><th scope="row">'+j+'</th><td><b>'+
            element.id_rhidro+'</td><td><b>'+
            (element.fecha_formato)+'</td><td><b>'+
            element.cultivo_revisado+'</td><td><b>'+
            r+'</td><td><b>'+
            element.n_estacion+'</td><td><b>'+
            element.mililitros_captacion+'</td><td><b>'+
            element.ph_entrada+'</td><td><b>'+
            element.ce_entrada+'</td><td><b>'+
            element.mililitros_dren+'</td><td><b>'+
            element.ph_dren+'</td><td><b>'+
            element.ce_dren+'</td><td><b>'+
            element.variedad+'</td><td><b>'+
            element.comentario_general+'</td><td><b>'+
            element.fecha_actualizacion+'</td><td><b>'+
            element.usuario+'</td><td><button  class="eliminar btn-danger btn-block" data-fecha="'+element.fecha+'" data-id="'+element.id_rhidro+'">Eliminar</button><br><button class="editar_estacion btn-primary btn-block" data-id="'+element.id_rhidro+'" data-cultivo="'+element.cultivo_revisado+'" data-codigo="'+element.rancho_revisado+'" data-toggle="modal" data-target="#Modal-estaciones">Editar</button></td></tr>')
            j=j+1;
          }
        }
      })
      i = i+1; 
    });
})
 }else{
  fetch('https://apirest.gec.org.mx/api//riegos/getFormEstacionesfecha/'+fecha+'')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(element => {

      fetch('https://api.gec.org.mx/api/getCecos//')
      .then(resp => resp.json())
      .then( respObj => {
       let i = 0;
        respObj.forEach(respuesta => {
        
          if (respObj[i].CODIGO == element.rancho_revisado && respObj[i].MEDIO == "SUSTRATO") {
            r = respObj[i].CODIGO+"-"+respObj[i].DESCRIPCION;
         
            //console.log(respObj[i].CODIGO,element.rancho_revisado)
          return r
          
          }
          
          i=i+1;
        });
        
      }).then(resp => {
        let i = 1;
        if (sessionStorage.getItem('emailActivo') == element.usuario) {
          $("#tbodyestaciones-reg").append('<tr class="table-success"><th scope="row">'+i+'</th><td><b>'+
          (element.fecha_formato).slice(0,10)+'</td><td><b>'+
          element.cultivo_revisado+'</td><td><b>'+
          element.rancho_revisado+'</td><td><b>'+
          element.fecha_actualizacion+'</td><td><b>'+
          element.usuario+'</td><td><button  class="eliminar btn-danger btn-block" data-fecha="'+element.fecha+'" data-id="'+element.id_rhidro+'">Eliminar</button><br><button class="editar_estacion btn-primary btn-block" data-id="'+element.id_rhidro+'" data-cultivo="'+element.cultivo_revisado+'" data-codigo="'+element.rancho_revisado+'" data-toggle="modal" data-target="#Modal-estaciones">Editar</button></td></tr>')
        }
      })
     i = i+1;
      
      
    });
})
 }

    
}

$(document).on('click', '.editar_estacion', function () {
  clave_estacion = $(this).data("id"); 
  editar_estacion($(this).data("cultivo"))
  editarEstacionVariedad($(this).data("codigo"))
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
    console.log('I was closed by the timer')
  }
})

  setTimeout( ()=> {
    PintarEstacion(clave_estacion);
  },3000)
           
        });

        function PintarEstacion(clave_estacion){
          console.log("CLAVE A EDITAR",clave_estacion)
    fetch('https://apirest.gec.org.mx/api//riegos/getFormEstaciones/'+clave_estacion)
    .then(resp => resp.json())
    .then(resp => {
      resp.forEach(element => {
        cultivo = element.cultivo_revisado;
        let año = element.fecha.slice(0,4);
        let mes = element.fecha.slice(5,7);
        let dia = element.fecha.slice(8,10);
        fecha_c = año+"-"+mes+"-"+dia;
      $("#txtfechaestacion").val(fecha_c)
    $("#txtcultivoestacion_revisado").val(element.cultivo_revisado)
    $("#txtranchoestacion_revisado").val(element.rancho_revisado)
    $("#txtnestacion_estacion").val(element.n_estacion)
    $("#txtmililitrosestacion_captacion").val(element.mililitros_captacion)
    $("#txtphestacion_entrada").val(element.ph_entrada)
    $("#txtceestacion_entrada").val(element.ce_entrada)
    $("#txtmililitrosestacion_dren").val(element.mililitros_dren)
    $("#txtphestacion_dren").val(element.ph_dren)
    $("#txtceestacion_dren").val(element.ce_dren)
    $("#txtvariedadestacion").val(element.variedad)
    $("#txtcomentarioestacion").val(element.comentario_general)
      })

      
    })
  
}
    


    document.getElementById("saveestacion").addEventListener('submit', (event) => {
  event.preventDefault()
  console.log(editar)
      if (editar == false) {

        document.getElementById("fecha_estacion").value = $("#txtfechaestacion").val();

        var data = {
          fecha : $("#txtfechaestacion").val(),
          cultivo_revisado : $("#txtcultivoestacion_revisado").val(),
          rancho_revisado : $("#txtranchoestacion_revisado").val(),
          n_estacion : $("#txtnestacion_estacion").val(),
          mililitros_captacion : $("#txtmililitrosestacion_captacion").val(),
          ph_entrada : $("#txtphestacion_entrada").val(),
          ce_entrada : $("#txtceestacion_entrada").val(),
          mililitros_dren : $("#txtmililitrosestacion_dren").val(),
          ph_dren : $("#txtphestacion_dren").val(),
          ce_dren : $("#txtceestacion_dren").val(),
          variedad : $("#txtvariedadestacion").val(),
          comentario_general : $("#txtcomentarioestacion").val(),
          usuario: sessionStorage.getItem('emailActivo')
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
  document.getElementById("saveestacion").reset();
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Registro Exitoso en estación',
    showConfirmButton: true,
    timer: 1500
  })
  
  obtenerestacion();
  $('#Modal-estaciones').modal('hide')
                }else{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: resp.mensaje,
                        showConfirmButton: true,
                        timer: 5000
                      }) 
                }
                
            } )
            .catch(error => {
                console.log("error de peticion")
                console.log(error)
            })
          
      }else{
        console.log("fecha no es vacia",$("#txtfechaestacion").val())
        var data = {
          fecha : $("#txtfechaestacion").val(),
          cultivo_revisado : $("#txtcultivoestacion_revisado").val(),
          rancho_revisado : $("#txtranchoestacion_revisado").val(),
          n_estacion : $("#txtnestacion_estacion").val(),
          mililitros_captacion : $("#txtmililitrosestacion_captacion").val(),
          ph_entrada : $("#txtphestacion_entrada").val(),
          ce_entrada : $("#txtceestacion_entrada").val(),
          mililitros_dren : $("#txtmililitrosestacion_dren").val(),
          ph_dren : $("#txtphestacion_dren").val(),
          ce_dren : $("#txtceestacion_dren").val(),
          variedad : $("#txtvariedadestacion").val(),
          comentario_general : $("#txtcomentarioestacion").val(),
            }

            
            fetch('https://apirest.gec.org.mx/api//riegos/getFormEstaciones/'+clave_estacion+'', {
              method: 'PUT',
              body: JSON.stringify(data),
              headers: {
                  'Content-Type': 'application/json'
              }
            })
            .then( resp => resp.json())
            .then( resp => {
              console.log(resp.status)
              if (resp.status = 'Correcto') {
document.getElementById("saveestacion").reset();
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Actualizacion con Exito en estación',
  showConfirmButton: true,
  timer: 1500
})

obtenerestacion();
$('#Modal-estaciones').modal('hide')
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

document.getElementById("canselar_est_down").addEventListener('click', () => {
  editar = false;
})

document.getElementById("canselar_est_up").addEventListener('click', () => {
  editar = false;
})

  

$(document).on('click', '.eliminar', function () {
    iduser3 = $(this).data("id");
    fecha = $(this).data("fecha");
 console.log(iduser3)
    document.getElementById("fecha_estacion").value = fecha.slice(0,10);

    
               
                  fetch('https://apirest.gec.org.mx/api/riegos/getFormEstaciones/'+iduser3+'', {
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




        //CULTIVOS

     

         document.getElementById("txtcultivoestacion_revisado").addEventListener('change', () => {
  
          $("#txtranchoestacion_revisado").find('option').not(':first').remove();
          
          
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

    })

    function editar_estacion(cult){
      fetch('https://api.gec.org.mx/api/getCecos//')
    .then(resp => resp.json())
    .then( respObj => {
     let i = 0;
      respObj.forEach(respuesta => {
        if (respObj[i].CULTIVO == cult && respObj[i].MEDIO == "SUSTRATO") {
          $("#txtranchoestacion_revisado").append("<option id='prueba2' value="+respObj[i].CODIGO+">"+respObj[i].CODIGO+"-"+respObj[i].DESCRIPCION+"</option>")
          //console.log(respObj[i].CODIGO)
        }
        
        i=i+1;
      });
      
    });
    }

    document.getElementById('txtranchoestacion_revisado').addEventListener('change', () => {

      $("#txtvariedadestacion").find('option').not(':first').remove();
      codigo = document.getElementById('txtranchoestacion_revisado').value;

      fetch('https://api.gec.org.mx/api/getCCVarierdad/')
    .then(resp => resp.json())
    .then( respObj => {
     let i = 0;
      respObj.forEach(respuesta => {
      
        if (respObj[i].centro_costo == codigo) {
          $("#txtvariedadestacion").append("<option id='prueba2' value="+respObj[i].VARIERDAD+">"+respObj[i].VARIERDAD+"</option>")
        }
        
        i=i+1;
      });
      
    });
    })
    
function editarEstacionVariedad(cod) {
  //console.log("codioooo",cod)
  fetch('https://api.gec.org.mx/api/getCCVarierdad/')
  .then(resp => resp.json())
  .then( respObj => {
   let i = 0;
    respObj.forEach(respuesta => {
      if (respObj[i].centro_costo == cod) {
      //  console.log("estacion",respObj[i].VARIERDAD)
        $("#txtvariedadestacion").append("<option id='prueba2' value="+respObj[i].VARIERDAD+">"+respObj[i].VARIERDAD+"</option>")
      }
      
      i=i+1;
    });
    
  });
}


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
      document.getElementById('title-estacion').innerHTML = "REPORTES DE ESTACIONES POR FECHA, CULTIVO Y RANCHO"
    
      document.getElementById("btn-estacion").style.display = "none";
  
      document.getElementById("btn-inicio").style.display = "inline";

      document.getElementById('estacion-rep').style.display = "none";
      tabla_estacion = false;
      obtenerestacion()
     })
  

    let dia_efecto_estacion = ((new Date).toISOString()).slice(0,10)  
    document.getElementById("txtfechaestacion").value = dia_efecto_estacion