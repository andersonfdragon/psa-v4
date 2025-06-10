/* MENU CONTACTO AGIL */
// INICIALIZAR EL CHATBOT

const btnChatbot = document.querySelector('#chatbot-btn');
const collapseChatbotSmall = document.querySelector('#collapseSmallChatbot');
const statusChatbot = document.querySelectorAll('.status-chatbot');
// const contenedorBtnChatbot = document.querySelector('#contendor-btn');

// Online status chatbot
const chatbotStatus = (from, to, id, hour, day) => {
  // console.log(day)

  for (let i= 0; i < statusChatbot.length; i++) {
    if(day > 5){
      id[i].classList.add('d-none');
    } 
    else {
      if (hour < from || hour > to) {
        id[i].classList.add('d-none');
      }
      else{
        id[i].classList.remove('d-none');
      }
    }
  }
}

const getTime = () => {
  const fecha = new Date(); 
  const dia = fecha.getDay(); //local day
  const hora = fecha.getHours(); //local hours
  const minutos = fecha.getMinutes(); //local minutes

  if (minutos < 10) {
    const horaTexto = hora.toString() + '0' + minutos.toString();
    const horaValida = parseInt(horaTexto);
    // console.log(horaValida);
    chatbotStatus(730,1730,statusChatbot,horaValida,dia);
    // chatbotStatus(200,1000,statusChatbot,horaValida);
  } else {
    const horaTexto = hora.toString() + minutos.toString();
    const horaValida = parseInt(horaTexto);
    // console.log(horaValida);
    chatbotStatus(730,1730,statusChatbot,horaValida,dia);
    // chatbotStatus(200,1000,statusChatbot,horaValida);
  }

  // chatbotStatus(730,1730,statusChatbot,horaValida);
  // chatbotStatus(200,1000,statusChatbot,horaValida);
}
getTime();


audioPlay = (url) => {
  const audio = new Audio(url);
  audio.play();
}

notificationNumbers = (tiempo1=250, tiempo2=0) => {
  const msnItem = document.querySelector('.contador-msn');
  const msnItems = document.querySelectorAll('.contador-msn');

  const contenedorBtnChatbot = document.querySelector('#contendor-btn');

  setTimeout(() => {
    const contadorMsn = document.createElement('P');
    contadorMsn.textContent = '2';
    contadorMsn.classList.add('contador-msn');
    contenedorBtnChatbot.appendChild(contadorMsn);

    if (msnItem) {
      msnItems.forEach( (e) => {
        e.remove();
      });
    }
  }, tiempo1);

  // setTimeout(() => {
  //   const contadorMsn = document.querySelector('.contador-msn');
  //   contadorMsn.textContent = '2';
  // }, tiempo2);
}


// window.onload = () => {
//   setTimeout(() => {
//     // notificationAudios(0);
//     notificationNumbers(0);
//   }, 5000);
// }

validatePathAudio = () => {
  const actualURL = window.location.href;
  const domainName = document.location.host;

  let pathAudio;

  if (actualURL.includes(`https://${domainName}/pruebas-psicotecnicas/`) || actualURL.includes(`http://${domainName}/pruebas-psicotecnicas/`)) {
    pathAudio = './../audio/notification-sound.mp3';
  }
  else {
    pathAudio = './audio/notification-sound.mp3';
  }

  audioPlay(pathAudio);
}

notificationAudios = (tiempo1=0, tiempo2=0) => {
  setTimeout(() => {
    // audioPlay('./audio/notification-sound.mp3');
    validatePathAudio();
  }, tiempo1);

  // setTimeout(() => {
  //   validatePathAudio();
  // }, tiempo2);
}

// COUNT GLOBAL FISRT CLICK ON BTN BOT
const countSoundsChatbot = (value=0) => {
  if (value < 1) {
    return 0;
  } else {
    notificationAudios(0);
    notificationNumbers(250);
  }
}   


// Animations
const bodySmall = document.querySelector('.body-chatbot-small');
const bodyFullInicio = document.querySelector('#content-inicio');
const animacionesChatbotIn = (element) => {
  element.classList.add('transition');
}

// SHOW HIDE EVENTS COLLAPSE CHATBOT SMALL
$('#collapseSmallChatbot').on('hide.bs.collapse', function () {
  countSoundsChatbot(0);

  // const contadorMsn = document.querySelector('.contador-msn');
  // contenedorBtnChatbot.removeChild(contadorMsn);
});
$('#collapseSmallChatbot').on('show.bs.collapse', function () {
  clearTimeout(timeOutShowChatbotInitialAudio);
  clearTimeout(timeOutShowChatbotInitialNumbers);
  clearTimeout(timeOutShowChatbotSmall);
  countSoundsChatbot(1);
  animacionesChatbotIn(bodySmall);
});

// SHOW HIDE EVENTS COLLAPSE CHATBOT FULL
$('#collapseFullChatbot').on('hide.bs.collapse', function () {
  countSoundsChatbot(0);

  if (($(window).width() < 768)){
    $('body').removeClass('stop-scrolling');
    $('.head-chabot-full').removeClass('fixed');
  }
  // const contadorMsn = document.querySelector('.contador-msn');
  // contenedorBtnChatbot.removeChild(contadorMsn);
});
$('#collapseFullChatbot').on('show.bs.collapse', function () {
  clearTimeout(timeOutShowChatbotInitialAudio);
  clearTimeout(timeOutShowChatbotInitialNumbers);
  clearTimeout(timeOutShowChatbotSmall);
  countSoundsChatbot(1);
  animacionesChatbotIn(bodyFullInicio);

  if (($(window).width() < 768)){
    $('body').addClass('stop-scrolling');
    $('.head-chabot-full').addClass('fixed');
  }
});

const openSmallChatbotWindowTimer = () => {
  if (collapseChatbotSmall.classList.contains('show')) {
    return;
  } else {
    $('#collapseSmallChatbot').collapse('show');
  }
}

// Timeouts Begin Page
const timeOutShowChatbotInitialAudio = setTimeout(notificationAudios, 4750);
const timeOutShowChatbotInitialNumbers = setTimeout(notificationNumbers, 5000);
const timeOutShowChatbotSmall = setTimeout(openSmallChatbotWindowTimer, 15000);

// Direccion scroll
// let scrollDirection = 0;
// window.addEventListener('scroll', () => {
//   if ((document.body.getBoundingClientRect()).top > scrollDirection) {
//     // console.log('UP');
//   }
//   else {
//     // console.log('DOWN');
//     chatbotScrollInteractions();
//   }
//   scrollDirection = (document.body.getBoundingClientRect()).top;
// });

// const scrollEventChatbot = (tipoEvento) => {
//   if (tipoEvento === 1) {
//     clearTimeout(timeOutShowChatbotInitialAudio);
//     clearTimeout(timeOutShowChatbotInitialNumbers);
//     countSoundsChatbot(1);
//   }
//   if (tipoEvento === 2) {
//     clearTimeout(timeOutShowChatbotInitialAudio);
//     clearTimeout(timeOutShowChatbotInitialNumbers);
//     clearTimeout(timeOutShowChatbotSmall);
//     countSoundsChatbot(1);
//     $('#collapseSmallChatbot').collapse('show');
//   } 
// }

// const chatbotScrollInteractions = () => {
//   let winScroll = window.pageYOffset || document.documentElement.scrollTop;
//   let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   let scrolled = Math.floor((winScroll / height) * 100);

//   // console.log(scrolled);
//   if (scrolled === 25) {
//     const eventScrollBot01 = 1;
//     scrollEventChatbot(1);
//   }
//   if (scrolled === 65) {
//     scrollEventChatbot(2);
//   }
// }

// TRANSITIONS
const transicionStepsChatbot = () => {
  const btnSmallToFull = document.querySelector('#step-small-to-full');
  const btnFullToBegin = document.querySelector('#step-full-to-small');

  const btnStepContentInicio = document.querySelector('#step-link-screen-01');
  const btnStepContentAsesoria  = document.querySelector('#step-link-screen-02');
  const btnStepCallForm  = document.querySelector('#step-form-chatbot');

  const contentInicio = document.querySelector('#content-inicio');
  const contentAsesoria = document.querySelector('#content-asesoria');
  const bodyAsesoria = document.querySelector('.body-chatbot-full');
  
  const resetContent = () => {
    contentAsesoria.classList.add('d-none');
    bodyAsesoria.classList.remove('step-asesoria');
    contentInicio.classList.remove('d-none');
  }

  btnSmallToFull.addEventListener('click', () => {
    btnChatbot.classList.add('d-none');
    $('#collapseSmallChatbot').collapse('hide');
    // countSoundsChatbot(2);
  })

  btnFullToBegin.addEventListener('click', () => {
    btnChatbot.classList.remove('d-none');

    resetContent();
  })

  btnStepContentInicio.addEventListener('click', () => {
    animacionesChatbotIn(contentAsesoria);
    countSoundsChatbot(1);

    contentInicio.classList.add('d-none');
    bodyAsesoria.classList.add('step-asesoria');
    contentAsesoria.classList.remove('d-none');
  });

  btnStepContentAsesoria.addEventListener('click', () => {
    animacionesChatbotIn(contentInicio);
    countSoundsChatbot(1);
    resetContent();
  });

  btnStepCallForm.addEventListener('click', () => {
    btnChatbot.classList.remove('d-none');
    $('#collapseSmallChatbot').collapse('hide');
    $('#collapseFullChatbot').collapse('hide');

    resetContent();
  })
}
transicionStepsChatbot();



