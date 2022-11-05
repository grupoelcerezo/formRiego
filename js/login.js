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
    if (email == 'dev.ti@grupoelcerezo.com' && password == '123') {
       sessionStorage.setItem('emailActivo', email)
       sessionStorage.setItem('rolEmail', 1)
     console.log(sessionStorage.getItem('emailActivo'), sessionStorage.getItem('rolEmail'))
     validar()
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

  function validar() {
    if (sessionStorage.getItem('emailActivo')) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Datos correctos',
            showConfirmButton: false,
            timer: 2000
          })
          window.location.href = "index.html"
       }
}