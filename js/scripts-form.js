/* SCRIPTS FORMULARIO FETCH API */
$(window).resize(function() {
  inputCargoWidth();
  inputUsoPruebasWidth();
})

// LOAD POLITICA DE PRIVACIDAD
function loadXMLDoc() {

  let importIframe =  document.getElementById("iframeTerminos");

  let windowHref = window.location.href

  let request = new XMLHttpRequest();
  if (windowHref.includes('pruebas-psicotecnicas/')) {
    request.open("GET", "./../terminos-condiciones.html", true);
  } else {
    request.open("GET", "./terminos-condiciones.html", true);
  }


  request.responseType = "document";
  request.send(null);
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      let doc = request.response;
      let elem = doc.getElementById("importHTML").innerHTML;
      // alert(elem.innerHTML);

      let importHTML = elem;

      importIframe.innerHTML = importHTML;

    }
  }
}
loadXMLDoc()

// OBJETO GLOBAL FORM VARIABLES
const formData = {
  nombreEmpresa: '',
  nit: '',
  telefono: '',
  nombresApellidos: '',
  correo: '',
  cargo: '',
  cargoOtro: '',
  usoPruebas: '',
  usoPruebasOtras: '',
  urlOrigenTipo: '',
  urlOrigen: '',
  urlLastVisited: '',
  urlHistorial: ''
}
// FORMULARIO ID
const formularioContacto = document.querySelector('#formulario-contacto');

// MENSAJES POR DEFECTO
const msnDefecto = 'Por favor, completa este campo';
const msnTelefono = 'Por favor, ingresa un número válido';
const msnCorreo = 'Incluye "@" en la dirección de correo electrónico';
const msnOpcion = 'Por favor, selecciona una opción';
const msnPoliticaPrivacidad = 'No has aceptado los términos y condiciones';
const msnCompletarCampos = 'Completa los campos que faltan';

// INPUTS QUERY SELECTOR
const nombreEmpresa = document.querySelector('#nombre-empresa');
const nit = document.querySelector('#nit');
const telefono = document.querySelector('#telefono');
const nombresApellidos = document.querySelector('#nombres-apellidos');
const correo = document.querySelector('#correo');
const cargo = document.querySelector('#cargo');
const cargoOtro = document.querySelector('#cargo-otro');
const usoPruebas = document.querySelector('#uso-pruebas');
const usoPruebasOtras = document.querySelector('#uso-pruebas-otras');
const politicaPrivacidad = document.querySelector('#checkbox-politica');

// PARENTS INPUTS
const padreNombreEmpresa = nombreEmpresa.parentElement;
const padreNit = nit.parentElement;
const padreTelefono = telefono.parentElement;
const padreNombresApellidos = nombresApellidos.parentElement;
const padreCorreo = correo.parentElement;
const padreCargo = cargo.parentElement;
const padreCargoOtro = cargoOtro.parentElement;
const padreUsoPruebas = usoPruebas.parentElement;
const padreUsoPruebasOtras = usoPruebasOtras.parentElement;
const padrePoliticaPrivacidad = politicaPrivacidad.parentElement;

// SUBMIT
const submitform = document.querySelector('#submit-form');
const padreSubmitForm = submitform.parentElement;

// UTM DECODE
const inputOrigenUrl = document.querySelector('#getUrlInicio');
const inputPrevUrl = document.querySelector('#getPreviousURL');
const inputGetUrl = document.querySelector('#getURL');
const inputGetUrlLastVisited = document.querySelector('#getLastVisitedURL');

const utmSetValues = () => {
  const valUrlOrigenTipo = inputGetUrl.value;
  formData.urlOrigenTipo = valUrlOrigenTipo;

  const valUrlOrigen = inputOrigenUrl.value;
  formData.urlOrigen = valUrlOrigen;

  const valUrlLastVisited = inputGetUrlLastVisited.value;
  formData.urlLastVisited  = valUrlLastVisited;
  
  const valUrlHistorial = inputPrevUrl.value;
  formData.urlHistorial = valUrlHistorial;

  // console.log(formData);
}
utmSetValues();

// FUNCION VALIDACION ON INPUT EVENT MOSTRAR MENSAJE
const mostrarCompletarCampos = (mensaje, tipoAlerta, elementoPadre) => {
  const alertaPrevia = document.querySelector('.alerta-input-completar-campos');
  if (alertaPrevia) {
    elementoPadre.querySelectorAll(".alerta-input-completar-campos").forEach( (e) => {
      e.remove();
    });
  }

  const alerta = document.createElement('P');
  alerta.textContent = mensaje;
  alerta.classList.add('alerta-input-completar-campos');

  if (tipoAlerta === false) {
    elementoPadre.appendChild(alerta);
  }
}

const mostrarAlerta = (mensaje, tipoAlerta, elementoPadre) => {
  const alertaPrevia = document.querySelector('.alerta-input');
  if (alertaPrevia) {
    elementoPadre.querySelectorAll(".alerta-input").forEach( (e) => {
      e.remove();
    });
  }

  const alerta = document.createElement('P');
  alerta.textContent = mensaje;
  alerta.classList.add('alerta-input');

  if (tipoAlerta === false) {
    elementoPadre.appendChild(alerta);
  }
}

const mostrarAlertaPoliticaPrivacidad = (mensaje, tipoAlerta, elementoPadre) => {
  const alertaPrevia = document.querySelector('.alerta-input');
  if (alertaPrevia) {
    elementoPadre.querySelectorAll(".alerta-input").forEach( (e) => {
      e.remove();
    });
  }

  const alerta = document.createElement('P');
  alerta.textContent = mensaje;
  alerta.classList.add('alerta-input');
  alerta.classList.add('grid-checkbox');

  if (tipoAlerta === false) {
    elementoPadre.appendChild(alerta);
  }
}

// Validar campo vacio
const validarCampoVacio = (tipoMsn, value, elementoPadre, caracteres) => {
  if ( value === '' || value.length < caracteres){
    mostrarAlerta(tipoMsn, false, elementoPadre);
  } else{
    mostrarAlerta('', true, elementoPadre);
  }
}

// Validar correo
const validarCorreo = (tipoMsn, value, elementoPadre, caracteres, msnCorreo) => {
  if ( value === '' || value.length < caracteres){
    mostrarAlerta(tipoMsn, false, elementoPadre);
  }
  else if (!value.includes('@') ) {
    mostrarAlerta(msnCorreo, false, elementoPadre);
  }
  else{
    mostrarAlerta('', true, elementoPadre);
  }
}

// Validar Telefono
const validarTelefono = (tipoMsn, value, elementoPadre, caracteres, msnTelefono) => {
  if ( value === ''){
    mostrarAlerta(tipoMsn, false, elementoPadre);
  }
  else if (value.length < caracteres) {
    mostrarAlerta(msnTelefono, false, elementoPadre);
  }
  else{
    mostrarAlerta('', true, elementoPadre);
  }
}

// Ingresa solo numeros a los inputs de Nit -> -
const soloNumerosNit = (evt) => {
  evt = (evt) ? evt : window.event;
  let charCode = (evt.which) ? evt.which : evt.keyCode;
  // if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  if ((charCode < 45 || charCode > 45) && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

// Ingresa solo numeros a los inputs de Telefono 0 -> 9
const soloNumeros = (evt) => {
  evt = (evt) ? evt : window.event;
  let charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

// Validar checkbox
const validarCheckboxPolitica = (tipoMsn, value, elementoPadre) => {
  if ( value === false){
    mostrarAlertaPoliticaPrivacidad(tipoMsn, false, elementoPadre);
  } else{
    mostrarAlertaPoliticaPrivacidad('', true, elementoPadre);
  }
}

// VALIDACION CAMPOS FRONTEND
// Nombre Empresa
const validarNombreEmpresaInput = () => {
  const value = nombreEmpresa.value;
  validarCampoVacio(msnDefecto, value, padreNombreEmpresa, 3);
}
nombreEmpresa.addEventListener('input', (event) => {
  const value = event.target.value;
  formData.nombreEmpresa = value;
  validarCampoVacio(msnDefecto, value, padreNombreEmpresa, 3);
});

// Nit
const validarNitInput = () => {
  const value = nit.value;
  validarCampoVacio(msnDefecto, value, padreNit, 3);
}
nit.addEventListener('input', (event) => {
  const value = event.target.value;
  formData.nit = value;
  validarCampoVacio(msnDefecto, value, padreNit, 3);
});

// Telefono
const validarTelefonoInput = () => {
  const value = telefono.value;
  validarTelefono(msnDefecto, value, padreTelefono, 10, msnTelefono);
}
telefono.addEventListener('input', (event) => {
  const value = event.target.value;
  formData.telefono = value;
  validarTelefono(msnDefecto, value, padreTelefono, 10, msnTelefono);
});

// Nombres Apellidos
const validarNombresApellidosInput = () => {
  const value = nombresApellidos.value;
  validarCampoVacio(msnDefecto, value, padreNombresApellidos, 3);
}
nombresApellidos.addEventListener('input', (event) => {
  const value = event.target.value;
  formData.nombresApellidos = value;
  validarCampoVacio(msnDefecto, value, padreNombresApellidos, 3);
});

// Correo
const validarCorreoInput = () => {
  const value = correo.value;
  validarCorreo(msnDefecto, value, padreCorreo, 1, msnCorreo);
}
correo.addEventListener('input', (event) => {
  const value = event.target.value;
  formData.correo = value;
  validarCorreo(msnDefecto, value, padreCorreo, 1, msnCorreo);
});

// Cargo
// SELECT EVENTS COLLAPSE
const inputCargoWidth = () => {
  $(window).resize(function() {
    const inputAncho = $('#cargo').outerWidth();
    if (($(window).width() < 992)){
      $('#collapseSelectCargo').css('width','100%');
    }
    else {
      $('#collapseSelectCargo').css('width',inputAncho+'px');
    }
  })

  $('#collapseSelectCargo').on('show.bs.collapse', function () {
    const inputAncho = $('#cargo').outerWidth();
    $('#collapseSelectCargo').css('width',inputAncho+'px');
    $('#collapseUsoPruebas').collapse('hide')
  })
}
inputCargoWidth();

const selectCargo = () => {
  $('.event-cargo').click( function(event){
    let dataClick = $(event.target).data('click');
    if (dataClick === 'Otro'){
      $('#cargo-otro').removeClass('d-none');
      $('#cargo-otro').focus();
  
      $('#collapseSelectCargo').collapse('hide');
      $('#cargo').attr('value', dataClick);
    }
    else{
      $('#cargo-otro').addClass('d-none');
  
      $('#collapseSelectCargo').collapse('hide');
      $('#cargo').attr('value', dataClick);
    }
  })
}
selectCargo();

const validarCargoInput = () => {
  const value = cargo.value;
  validarCampoVacio(msnOpcion, value, padreCargo, 2);
}
const validarSelectCargo = () => {
  $('#collapseSelectCargo').on('hidden.bs.collapse', function () {
    const value = cargo.value;
    formData.cargo = value;
    validarCampoVacio(msnOpcion, value, padreCargo, 2);
    if(value !== 'Otro') {
      mostrarAlerta('', true, padreCargoOtro);
    } else {
      validarCargoOtroInput();
    }
  })
}
validarSelectCargo();

const validarCargoOtroInput = () => {
  const value = cargoOtro.value;
  validarCampoVacio(msnDefecto, value, padreCargoOtro, 3);
}
cargoOtro.addEventListener('input', (event) => {
  const value = event.target.value;
  formData.cargoOtro = value;
  validarCampoVacio(msnDefecto, value, padreCargoOtro, 3);
});



// Uso pruebas
const inputUsoPruebasWidth = () => {
  $(window).resize(function() {
    const inputAncho = $('#cargo').outerWidth();
    if (($(window).width() < 992)){
      $('#collapseUsoPruebas').css('width','100%');
    }
    else {
      $('#collapseUsoPruebas').css('width',inputAncho+'px');
    }
  })

  $('#collapseUsoPruebas').on('show.bs.collapse', function () {
    const inputAncho = $('#uso-pruebas').outerWidth();
    $('#collapseUsoPruebas').css('width',inputAncho+'px');
    $('#collapseSelectCargo').collapse('hide');
  })
}
inputUsoPruebasWidth();

const selectUsoPruebas = () =>{
  $('.event-uso-pruebas').click( function(event){
    let dataClick = $(event.target).data('click');
    if (dataClick === 'Otra(s)'){
      $('#uso-pruebas-otras').removeClass('d-none')
      $('#uso-pruebas-otras').focus()
  
      $('#collapseUsoPruebas').collapse('hide')
      $('#uso-pruebas').attr('value', dataClick)
    }
    else{
      $('#uso-pruebas-otras').addClass('d-none')
  
      $('#collapseUsoPruebas').collapse('hide')
      $('#uso-pruebas').attr('value', dataClick)
    }
  })
}
selectUsoPruebas();

const validarUsoPruebasInput = () => {
  const value = usoPruebas.value;
  validarCampoVacio(msnOpcion, value, padreUsoPruebas, 2);
}
const validarSelectUsoPruebas = () => {
  $('#collapseUsoPruebas').on('hidden.bs.collapse', function () {
    const value = usoPruebas.value;
    formData.usoPruebas = value;
    validarCampoVacio(msnOpcion, value, padreUsoPruebas, 2);
    if(value !== 'Otra(s)') {
      mostrarAlerta('', true, padreUsoPruebasOtras);
    } else {
      validarUsoPruebasOtrasInput();
    }
  })
} 
validarSelectUsoPruebas();

const validarUsoPruebasOtrasInput = () => {
  const value = usoPruebasOtras.value;
  validarCampoVacio(msnDefecto, value, padreUsoPruebasOtras, 3);
}

usoPruebasOtras.addEventListener('input', (event) => {
  const value = event.target.value;
  formData.usoPruebasOtras = value;
  validarCampoVacio(msnDefecto, value, padreUsoPruebasOtras, 3);
});

// Politica de privacidad
politicaPrivacidad.addEventListener('click', () => {
  const estadoCheckbox = politicaPrivacidad.checked;
  if( estadoCheckbox === true); {
    const value = politicaPrivacidad.checked;
    validarCheckboxPolitica(msnPoliticaPrivacidad, value, padrePoliticaPrivacidad);
  }
});




// Contador de alertas en el DOM
const contadorAlertasInputs = () => {
  const countAlertasDom = document.querySelectorAll('.alerta-input');
  return countAlertasDom.length;
}

// Ejecuta las funciones de alertas de todos los inputs
const validarFormSend = () => {
  validarNombreEmpresaInput();
  validarNitInput();
  validarTelefonoInput();
  validarNombresApellidosInput();
  validarCorreoInput(); 
  validarCargoInput();
  validarUsoPruebasInput();
}

const blurFormContacto = () => {
  formularioContacto.addEventListener('click', () => {
    if (contadorAlertasInputs() === 0) {
      mostrarCompletarCampos('', true, padreSubmitForm);
    }
    else {
      mostrarCompletarCampos(msnCompletarCampos, false, padreSubmitForm);
    }
  })

  formularioContacto.addEventListener('mouseover', () => {
    if (contadorAlertasInputs() === 0) {
      mostrarCompletarCampos('', true, padreSubmitForm);
    }
    else {
      mostrarCompletarCampos(msnCompletarCampos, false, padreSubmitForm);
    }
  })
}

const sendForm = (pathPhp, pathJs) => {
  submitform.addEventListener('click', (event) => {
    //Prevent the event from submitting the form, no redirect or page reload
    event.preventDefault();
    validarFormSend();
    blurFormContacto();
    // console.log(pathPhp+' '+pathJs);
    
    // console.log(contadorAlertasInputs());
    if (contadorAlertasInputs() === 0) {
      mostrarCompletarCampos('', true, padreSubmitForm);
      submitform.classList.add('d-none');

      $("#formulario-contacto").addClass("animacion-form");
      if($("#formulario-contacto").hasClass("animacion-form")) {
        setTimeout( function(){ 
          $("#formulario-contacto").addClass("d-none");
          $('#ancla-seccion-form').scrollTop(0);
          $("#procesando-datos").removeClass("d-none");
          $("#procesando-datos").addClass("d-block suavizar-opacidad");
        }, 700);
      }
      else{
        $("#formulario-contacto").removeClass("animacion-form");
        $("#formulario-contacto").removeClass("d-none");
      }

      postData(formData, pathPhp, pathJs);
    } else {
      mostrarCompletarCampos(msnCompletarCampos, false, padreSubmitForm);
      // console.log(formData);
    }
  });
} 

const validatePathResponse = () => {
  const actualURL = window.location.href;
  const domainName = document.location.host;

  let pathPhp;
  let pathJs;

  if (actualURL.includes(`https://${domainName}/pruebas-psicotecnicas/`) || actualURL.includes(`http://${domainName}/pruebas-psicotecnicas/`)) {
    pathPhp = './../php/process-send-form.php';
    pathJs = './../mensaje-enviado.html';
  }
  else {
    pathPhp = './php/process-send-form.php';
    pathJs = './mensaje-enviado.html';
  }
  sendForm(pathPhp, pathJs);
}
validatePathResponse();

async function postData(formattedFormData, pathPhp, pathJs){
  const response = await fetch(pathPhp, {
    method: 'POST',
    body: JSON.stringify(formattedFormData)
  });

  const data = await response.text();
  // const data = await response.json();

  //This should later print out the values submitted through the form
  // console.log(data);
  if (data === "Completado") {
    formularioContacto.reset();
    window.location.href = pathJs;
  } else {
    console.log('Algo salio muy mal :(');
  }
}