let intentos = 3;

function mostrarRegistro() {

  document.getElementById("login").style.display = "none";
  document.getElementById("registro").style.display = "block";
  document.getElementById("recuperar").style.display = "none";
}

function mostrarLogin() {

  document.getElementById("login").style.display = "block";
  document.getElementById("registro").style.display = "none";
  document.getElementById("recuperar").style.display = "none";
}

function mostrarRecuperar() {

  document.getElementById("login").style.display = "none";
  document.getElementById("registro").style.display = "none";
  document.getElementById("recuperar").style.display = "block";
}

function mostrarPassword(id) {

  let input = document.getElementById(id);

  if (input.type === "password") {

    input.type = "text";

  } else {

    input.type = "password";
  }
}

function formatearRut(input) {

  let valor = input.value.replace(/[^0-9kK]/g, "");

  if (valor.length > 1) {

    let cuerpo = valor.slice(0, -1);

    let dv = valor.slice(-1);

    cuerpo = cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    input.value = cuerpo + "-" + dv;

  } else {

    input.value = valor;
  }
}

function validarCaptchaLogin() {

  let captcha = grecaptcha.getResponse();

  if (captcha.length == 0) {

    alert("Debes verificar el CAPTCHA");

    return false;
  }

  iniciarSesion();
}

function validarCaptchaRegistro() {

  let captcha = grecaptcha.getResponse();

  if (captcha.length == 0) {

    alert("Debes verificar el CAPTCHA");

    return false;
  }

  validarPasswords();
}

function validarCaptchaRecuperar() {

  let captcha = grecaptcha.getResponse();

  if (captcha.length == 0) {

    alert("Debes verificar el CAPTCHA");

    return false;
  }

  enviarCorreo();
}

function iniciarSesion() {

  intentos--;

  if (intentos > 0) {

    alert(
      "Credenciales incorrectas.\nIntentos restantes: "
      + intentos
    );

  } else {

    alert(
      "Cuenta bloqueada temporalmente."
    );
  }
}

function enviarCorreo() {

  alert(
    "Se ha enviado un enlace de recuperación."
  );
}

document.addEventListener("keyup", function(event) {

  let caps = document.getElementById("caps");

  if (event.getModifierState("CapsLock")) {

    caps.style.display = "block";

  } else {

    caps.style.display = "none";
  }
});

function validarPasswords() {

  let pass1 =
    document.getElementById("passwordRegistro").value;

  let pass2 =
    document.getElementById("passwordRepetir").value;

  if (pass1 !== pass2) {

    alert(
      "Las contraseñas no coinciden"
    );

  } else {

    alert(
      "Cuenta creada correctamente"
    );
  }
}