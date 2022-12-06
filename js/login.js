$('#login-button').click(function(){
    
    $('#login-button').fadeOut("slow",function(){
      $("#container").fadeIn();
    });
  });
  
  $(document).ready(() => {

  })

  $(".close-btn").click(function(){
    $("#container, #forgotten-container").fadeOut(800, function(){
      $("#login-button").fadeIn(800);
    });
  });
  
  /* Forgotten Password */
  $('#forgotten').click(function(){
    $("#container").fadeOut(function(){
      $("#forgotten-container").fadeIn();
    });
  });

 document.getElementById('btnIngesar').addEventListener('click', () => {
    let email = document.getElementById('txtemail').value;
    let password = document.getElementById('txtpassword').value;

   fetch("https://apirest.gec.org.mx/api/login/getusuarioExiste/"+email +"/"+password+"")
   .then(resp => resp.json())
   .then(resp => {

   console.log(resp)
    if (resp[0].length>0) {

      resp.forEach(element => {
          console.log("rol",element[0].roles)
      
          sessionStorage.setItem('emailActivo', email)
          sessionStorage.setItem('rolEmail', element[0].roles)
          sessionStorage.setItem('nombre', element[0].nombre)
        console.log(sessionStorage.getItem('emailActivo'), sessionStorage.getItem('rolEmail'), sessionStorage.getItem('nombre'))
       validar()
        
      });
   } else{
       Swal.fire({
           position: 'top-end',
           icon: 'error',
           title: 'Datos no validos',
           showConfirmButton: false,
           timer: 3000
         })
      }
   })
})

  function validar() {
    if (sessionStorage.getItem('emailActivo')) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'bienvenida '+sessionStorage.getItem('nombre'),
        showConfirmButton: true,
        timer: 3000
      })

      setTimeout( ()=> {
        window.location.href = "index.html"; 
      },4000)
        
          
       }
}