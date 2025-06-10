const validarUtm = (urlInicioSesion, urlPrevia, urlLastVisited) => {
  const inputOrigenUrl = document.querySelector('#getUrlInicio');
  const inputPrevUrl = document.querySelector('#getPreviousURL');
  const inputGetUrl = document.querySelector('#getURL');
  const inputGetUrlLastVisited = document.querySelector('#getLastVisitedURL');

  const inputUrlInicio = urlInicioSesion;
  const inputUrlAnterior = urlPrevia;
  const inputUrlLastVisited = urlLastVisited;

  inputOrigenUrl.setAttribute('value',inputUrlInicio);
  inputPrevUrl.setAttribute('value',inputUrlAnterior);
  inputGetUrlLastVisited.setAttribute('value',inputUrlLastVisited);
  // console.log(inputUrlInicio+" "+inputUrlAnterior);

  if (inputOrigenUrl.value.includes('pauta-facebook-ads')) {
    inputGetUrl.setAttribute('value','pauta-facebook-ads');
  }
  else if (inputOrigenUrl.value.includes('pauta-google-search')) {
    inputGetUrl.setAttribute('value','pauta-google-search');
  }
  else if (inputOrigenUrl.value.includes('pauta-webs-externas')) {
    inputGetUrl.setAttribute('value','pauta-webs-externas');
  }
  else if (inputOrigenUrl.value.includes('pauta-gmail')) {
    inputGetUrl.setAttribute('value','pauta-gmail');
  }
  else if (inputOrigenUrl.value.includes('pauta-linkedin-ads')) {
    inputGetUrl.setAttribute('value','pauta-linkedin-ads');
  }
  else if (inputOrigenUrl.value.includes('pauta-youtube')) {
    inputGetUrl.setAttribute('value','pauta-youtube');
  }
  else if (inputOrigenUrl.value.includes('google-my-business')) {
    inputGetUrl.setAttribute('value','google-my-business');
  }
  else if (inputOrigenUrl.value.includes('mailing')) {
    inputGetUrl.setAttribute('value','mailing');
  } 
  else if (inputOrigenUrl.value.includes('linkedin-organico')) {
    inputGetUrl.setAttribute('value','linkedin-organico');
  } 
  else if (inputOrigenUrl.value.includes('pauta-display')) {
    inputGetUrl.setAttribute('value','pauta-display');
  } 
  else if (inputOrigenUrl.value.includes('youtube-organico')) {
    inputGetUrl.setAttribute('value','youtube-organico');
  } 
  else if (inputOrigenUrl.value.includes('facebook-organico')) {
    inputGetUrl.setAttribute('value','facebook-organico');
  } 
  else if (inputOrigenUrl.value.includes('instagram-organico')) {
    inputGetUrl.setAttribute('value','instagram-organico');
  } 
  else {
    inputGetUrl.setAttribute('value','seo-sitio-web');
  }
}

const addHistorial = (url) => {
  rutaNavegacion = [];
  rutaNavegacion.push(url);

  const splitRegistro = rutaNavegacion[0].split('?registroSesion=');
  // console.log(splitRegistro);

  const urlInicioSesion = splitRegistro[splitRegistro.length - 1];
  const urlPrevia = splitRegistro;
  const urlLastVisited = splitRegistro[0];

  validarUtm(urlInicioSesion, urlPrevia, urlLastVisited);
}

const obtenerRastreoNavegacion = () => {
  const actualURL = window.location.href;
  let newActualUrl;

  if (actualURL.includes("#")) {
    newActualUrl = actualURL.replace('#', '');
  } 
  else if (actualURL.includes("http://")) {
    newActualUrl = actualURL.replace('http://', '');
  }
  else if (actualURL.includes("https://")) {
    newActualUrl = actualURL.replace('https://', '');
  }
  else {
    newActualUrl = window.location.href;
  }

  // LISTA URLS DEL WEBSITE
  const urlSesion = `?registroSesion=${newActualUrl}`;

  document.addEventListener('click', (event) => {
    // event.preventDefault();
    const detectarEvento = event.target;
    const padreDetectarEvento = detectarEvento.parentElement;

    if (detectarEvento.hasAttribute('href')) {
      event.preventDefault();
      let eventHref = detectarEvento.getAttribute('href');
      // console.log('directo'+' '+eventHref);
      if (eventHref === "./") {
        window.location.href = `${eventHref}${urlSesion}`;
      } 
      else if (eventHref === "./../") {
        window.location.href = `${eventHref}${urlSesion}`;
      }
      else if (eventHref.includes("soporte-candidatos.html")) {
        window.location.href = `${eventHref}${urlSesion}`;
      }
      else if (eventHref.includes("sobre-nosotros.html")) {
        window.location.href = `${eventHref}${urlSesion}`;
      }
      else if (eventHref.includes("nuevas-actualizaciones.html")) {
        window.location.href = `${eventHref}${urlSesion}`;
      }
      else if (eventHref.includes("pruebas-psicotecnicas/tendisc.html")) {
        window.location.href = `${eventHref}${urlSesion}`;
      }
      else if (eventHref.includes("pruebas-psicotecnicas/ethikos.html")) {
        window.location.href = `${eventHref}${urlSesion}`;
      }
      else if (eventHref.includes("pruebas-psicotecnicas/potencial-comercial.html")) {
        window.location.href = `${eventHref}${urlSesion}`;
      }
      else if (eventHref.includes("pruebas-psicotecnicas/v&p-test.html")) {
        window.location.href = `${eventHref}${urlSesion}`;
      }
      else if (eventHref.includes("pruebas-psicotecnicas/iq-factorial.html")) {
        window.location.href = `${eventHref}${urlSesion}`;
      }
      else if (eventHref.includes("pruebas-psicotecnicas/evaluacion-360.html")) {
        window.location.href = `${eventHref}${urlSesion}`;
      }
      else if (eventHref.includes("pruebas-psicotecnicas/terminos-condiciones.html")) {
        window.location.href = `${eventHref}${urlSesion}`;
      }
      else if (eventHref.includes("#ancla-seccion-form")) {
        // window.location.href = `${eventHref}`;
        window.location.href = `${eventHref}${urlSesion}`;
      }
      else{
        window.location.href = `${eventHref}`;
        // window.location.href = `${eventHref}`;
      }
    }       
    else if (padreDetectarEvento.hasAttribute('href')) {
      event.preventDefault();
      let eventHref = padreDetectarEvento.getAttribute('href');
      // console.log('padre'+' '+eventHref);
      if (eventHref === "./") {
        window.location.href = `${eventHref}${urlSesion}`;
      } 
      else if (eventHref === "./../") {
        window.location.href = `${eventHref}${urlSesion}`;
      } 
      else if (eventHref.includes("pruebas-psicotecnicas/tendisc.html")) {
        window.location.href = `${eventHref}${urlSesion}`;
      }
      else if (eventHref.includes("pruebas-psicotecnicas/ethikos.html")) {
        window.location.href = `${eventHref}${urlSesion}`;
      }
      else if (eventHref.includes("pruebas-psicotecnicas/potencial-comercial.html")) {
        window.location.href = `${eventHref}${urlSesion}`;
      }
      else if (eventHref.includes("pruebas-psicotecnicas/v&p-test.html")) {
        window.location.href = `${eventHref}${urlSesion}`;
      }
      else if (eventHref.includes("pruebas-psicotecnicas/iq-factorial.html")) {
        window.location.href = `${eventHref}${urlSesion}`;
      }
      else if (eventHref.includes("pruebas-psicotecnicas/evaluacion-360.html")) {
        window.location.href = `${eventHref}${urlSesion}`;
      }
      else {
        window.location.href = `${eventHref}`;
      }
    }
    else{
      return true;
    }
  });

  addHistorial(actualURL);
}

obtenerRastreoNavegacion();

