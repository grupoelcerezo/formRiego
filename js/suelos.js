$(document).ready(function(){
  
  $("#txtfiltro_suelo_cr").on("keyup", function() {

    
    var value = $(this).val().toLowerCase();
    $("#tbodysuelo-rep tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});



let iduser = 0;
var editar = false;
let tabla_suelo = false;
let clave_suelo = 0;


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
 document.getElementById("txtfiltro_suelo_cr"). value = "";

  let dia_efecto = ((new Date).toISOString()).slice(0,10)  
   document.getElementById("txtfecha").value = dia_efecto

        var fecha = document.getElementById("fecha_suelo").value;

       
   
    $(".table tbody").html(""); //limpia la tabla
    
   if (tabla_suelo == false) {
    var r = "";
    let j = 1;
   fetch('https://apirest.gec.org.mx/api/riegos/getFormSuelosfecha/'+fecha+'')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(element => {

      fetch('https://api.gec.org.mx/api/getCecos/')
    .then(resp => resp.json())
    .then( respObj => {
     let i = 0;
      respObj.forEach(respuesta => {
       // console.log(respObj[i].CULTIVO,cultivo_suelo) 
       
        if (respObj[i].CODIGO == element.rancho_revisado && respObj[i].MEDIO == "SUELO") {
         
          r = respObj[i].CODIGO+"-"+respObj[i].DESCRIPCION;
         
            console.log(respObj[i].CODIGO,element.rancho_revisado)
          return r
        }
        
        i=i+1;
      });
      
    })
    .then(resp => {
if (sessionStorage.getItem('rolEmail').includes('ADMINISTRADOR')) {
        
  //console.log(j, r, element)
  $("#tbodysuelo-rep").append('<tr><th scope="row">'+j+'</th><td><b>'+
  element.id_rsuelo+'</td><td><b>'+
  (element.fecha_formato)+'</td><td><b>'+
  element.cultivo_revisado+'</td><td><b>'+
  r+'</td><td><b>'+
  element.metodo_aplicacion+'</td><td><b>'+
  element.status_producto+'</td><td><b>'+
  element.humedad+'</td><td><b>'+
  element.presion_riego_valvula+'</td><td><b>'+
  element.presion_riego_cintilla_manguera+'</td><td><b>'+
  element.ph_gotero+'</td><td><b>'+
  element.ph_bomba+'</td><td><b>'+
  element.ph_tierra+'</td><td><b>'+
  element.ce_gotero+'</td><td><b>'+
  element.ce_bomba+'</td><td><b>'+
  element.ce_tierra+'</td><td><b>'+
  element.evapotranspiracion+'</td><td><b>'+
  element.comentario_general+'</td><td><b>'+
  element.fecha_actualizacion+'</td><td><b>'+
  element.usuario+'</td><td><button class="eliminar btn-danger" data-fecha="'+element.fecha+'"  data-id="'+element.id_rsuelo+'">Eliminar</button><br><br><button class="editar_suelo btn-primary btn-block" data-id="'+element.id_rsuelo+'" data-cultivo="'+element.cultivo_revisado+'" data-codigo="'+element.rancho_revisado+'" data-toggle="modal" data-target="#Modal-suelo">Editar</button></td></tr>') 
  
  j = j+1;  
}else{
   if (sessionStorage.getItem('emailActivo') == element.usuario){
       console.log("respuesta",resp)
  $("#tbodysuelo-rep").append('<tr><th scope="row">'+j+'</th><td><b>'+
  element.id_rsuelo+'</td><td><b>'+
  (element.fecha_formato)+'</td><td><b>'+
  element.cultivo_revisado+'</td><td><b>'+
  r+'</td><td><b>'+
  element.metodo_aplicacion+'</td><td><b>'+
  element.status_producto+'</td><td><b>'+
  element.humedad+'</td><td><b>'+
  element.presion_riego_valvula+'</td><td><b>'+
  element.presion_riego_cintilla_manguera+'</td><td><b>'+
  element.ph_gotero+'</td><td><b>'+
  element.ph_bomba+'</td><td><b>'+
  element.ph_tierra+'</td><td><b>'+
  element.ce_gotero+'</td><td><b>'+
  element.ce_bomba+'</td><td><b>'+
  element.ce_tierra+'</td><td><b>'+
  element.evapotranspiracion+'</td><td><b>'+
  element.comentario_general+'</td><td><b>'+
  element.fecha_actualizacion+'</td><td><b>'+
  element.usuario+'</td><td><button class="eliminar btn-danger" data-fecha="'+element.fecha+'"  data-id="'+element.id_rsuelo+'">Eliminar</button><br><br><button class="editar_suelo btn-primary btn-block" data-id="'+element.id_rsuelo+'" data-cultivo="'+element.cultivo_revisado+'" data-codigo="'+element.rancho_revisado+'" data-toggle="modal" data-target="#Modal-suelo">Editar</button></td></tr>') 
  j = j+1;    
}
 }
    })

      
      
    });
})
   }else{
    fetch('https://apirest.gec.org.mx/api/riegos/getFormSuelosfecha/'+fecha+'')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(element => {

      fetch('https://api.gec.org.mx/api/getCecos/')
      .then(resp => resp.json())
      .then( respObj => {
       let i = 0;
        respObj.forEach(respuesta => {
         // console.log(respObj[i].CULTIVO,cultivo_suelo) 
         
          if (respObj[i].CODIGO == element.rancho_revisado && respObj[i].MEDIO == "SUELO") {
           
            r = respObj[i].CODIGO+"-"+respObj[i].DESCRIPCION;
           
              console.log(respObj[i].CODIGO,element.rancho_revisado)
            return r
          }
          
          i=i+1;
        });
        
      }).then(resp => {
        let i = 0;
        if (sessionStorage.getItem('emailActivo') == element.usuario){
          //console.log(i, resp[i].humedad)
        $("#tbodysuelo-reg").append('<tr class="table-success"><th scope="row">'+i+'</th></td><td><b>'+
        (element.fecha_formato)+'</td><td><b>'+
        element.cultivo_revisado+'</td><td><b>'+
        r+'</td><td><b>'+
        element.fecha_actualizacion+'</td><td><b>'+
        element.usuario+'</td><td><button class="eliminar btn-danger btn-block" data-fecha="'+element.fecha+'"  data-id="'+element.id_rsuelo+'">Eliminar</button><br><br><button class="editar_suelo btn-primary btn-block" data-id="'+element.id_rsuelo+'" data-cultivo="'+element.cultivo_revisado+'" data-codigo="'+element.rancho_revisado+'" data-toggle="modal" data-target="#Modal-suelo">Editar</button></td></tr>')
      }
      i = i+1;
      })
       
    });
})
   }
  }

$(document).on('click', '.editar_suelo', function () {
  clave_suelo = $(this).data("id"); 
  editar_suelo($(this).data("cultivo"))
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
  }
})

  setTimeout( ()=> {
    PintarSuelo(clave_suelo);
  },3000)
            });

            function PintarSuelo(clave_suelo){
              //console.log("CLAVE A EDITAR",clave_suelo)
        fetch('https://apirest.gec.org.mx/api//riegos/getFormSuelos/'+clave_suelo)
        .then(resp => resp.json())
        .then(resp => {
          resp.forEach(element => {
            cultivo = element.cultivo_revisado;
            let año = element.fecha.slice(0,4);
            let mes = element.fecha.slice(5,7);
            let dia = element.fecha.slice(8,10);
            fecha_c = año+"-"+mes+"-"+dia;
            $("#txtfecha").val(fecha_c);
            $("#txtcultivo_revisado").val(element.cultivo_revisado);
            $("#txtrancho_revisado").val(element.rancho_revisado);
            $("#txtmetodo_aplicacion").val(element.metodo_aplicacion);
            $("#txtstatus_producto").val(element.status_producto);
            $("#txthumedad").val(element.humedad);
            $("#txtpresion_riego_valvula").val(element.presion_riego_valvula);
            $("#txtpresion_riego_cintilla_manguera").val(element.presion_riego_cintilla_manguera);
            $("#txthp_gotero").val(element.ph_gotero);
            $("#txtph_bomba").val(element.ph_bomba);
            $("#txtph_tierra").val(element.ph_tierra);
            $("#txtce_gotero").val(element.ce_gotero);
            $("#txtce_bomba").val(element.ce_bomba);
            $("#txtce_tierra").val(element.ce_tierra);
            $("#txtevapotranspiracion").val(element.evapotranspiracion);
            $("#txtcomentario").val(element.comentario_general);
          })
    
          
        })
      
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

            fetch('https://apirest.gec.org.mx/api/riegos/getFormSuelos', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then( resp => resp.json())
            .then( resp => {
                //console.log(resp)
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
                        timer: 5000
                      }) 
                }
                
            } )
            .catch(error => {
                console.log("error de peticion")
                console.log(error)
            })
          
       
      }else{
        console.log("fecha no es vacia",$("#txtfechasuelo").val())
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
          comentario_general : $("#txtcomentario").val()
        }

            
            fetch('https://apirest.gec.org.mx/api/riegos/getFormSuelos/'+clave_suelo+'', {
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
document.getElementById("savesuelo").reset();
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Actualizacion con Exito en estación',
  showConfirmButton: true,
  timer: 1500
})

obtener();
$('#Modal-suelo').modal('hide')
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

document.getElementById("canselar_sue_down").addEventListener('click', () => {
  editar = false;
})

document.getElementById("canselar_sue_up").addEventListener('click', () => {
  editar = false;
})
  

$(document).on('click', '.eliminar', function () {
    iduser = $(this).data("id");
    fecha = $(this).data("fecha");
    document.getElementById("fecha_suelo").value = fecha.slice(0,10);
//console.log(iduser2)
var mensaje = "";
               
                  fetch('https://apirest.gec.org.mx/api/riegos/getFormSuelos/'+iduser+'', {
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
      

         
         cultivo_suelo = document.getElementById("txtcultivo_revisado").value;
       
       
         fetch('https://api.gec.org.mx/api/getCecos/')
   .then(resp => resp.json())
   .then( respObj => {
    let i = 0;
     respObj.forEach(respuesta => {
       console.log(respObj[i].CULTIVO,cultivo_suelo) 
       if (respObj[i].CULTIVO == cultivo_suelo && respObj[i].MEDIO == "SUELO") {
         $("#txtrancho_revisado").append("<option id='prueba' value="+respObj[i].CODIGO+">"+respObj[i].CODIGO+"-"+respObj[i].DESCRIPCION+"</option>")
       }
       
       i=i+1;
     });
     
   });

   })

   function editar_suelo(cult){
    fetch('https://api.gec.org.mx/api/getCecos/')
    .then(resp => resp.json())
    .then( respObj => {
     let i = 0;
      respObj.forEach(respuesta => {
       // console.log(respObj[i].CULTIVO,cultivo_suelo) 
        if (respObj[i].CULTIVO == cult && respObj[i].MEDIO == "SUELO") {
          $("#txtrancho_revisado").append("<option id='prueba' value="+respObj[i].CODIGO+">"+respObj[i].CODIGO+"-"+respObj[i].DESCRIPCION+"</option>")
        }
        
        i=i+1;
      });
      
    });
  }

  
       
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
    document.getElementById('title-suelo').innerHTML = "REPORTES DE SUELOS POR FECHA, CULTIVO Y RANCHO";
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