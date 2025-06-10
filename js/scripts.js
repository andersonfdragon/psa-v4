$(document).ready(function() {
  validarInteraccionesScroll();
  redireccionAnclaFormulario();
  eventosSliderHome02();
  eventosSliderNosotros03();
  // videoHomeInteraction();
  sliderMultiplesClientes();
  $(window).resize(function() {
    validarInteraccionesScroll();
    eventosSliderHome02();
    eventosSliderNosotros03();
    sliderMultiplesClientes();
  })
  $(window).scroll(function() {
    validarInteraccionesScroll();
  })
})


const redireccionAnclaFormulario = () => {
  const urlPrevia = document.referrer;
  const domainName = document.location.host;
  let formAncla = document.querySelector('#ancla-seccion-form');

  if (urlPrevia.includes(`https://${domainName}/soporte-candidatos.html`) || urlPrevia.includes(`http://${domainName}/soporte-candidatos.html`)) {
    formAncla.scrollIntoView();
  } 
  else if (urlPrevia.includes(`https://${domainName}/terminos-condiciones.html`) || urlPrevia.includes(`http://${domainName}/terminos-condiciones.html`)) {
    formAncla.scrollIntoView();
  }
  else if (urlPrevia.includes(`https://${domainName}/blog`) || urlPrevia.includes(`http://${domainName}/blog`)) {
    formAncla.scrollIntoView();
  }

  document.addEventListener('click', (event) => {
    const detectarEvento = event.target;

    if (detectarEvento.hasAttribute('href')) {
      event.preventDefault();
      let eventHref = detectarEvento.getAttribute('href');
      // console.log('directo'+' '+eventHref);
      if (eventHref.includes('#ancla-seccion-form')) {
        formAncla.scrollIntoView();
      } 
    } 
    else {
      return true;
    }
  })
}

const validarInteraccionesNavMobile = () =>{
  if ($("#mainMenuPsa").hasClass("show")){
    $('header').removeClass("collapse-show");
    // $('#icon-menu-drop').prop("src","images/icon-hamburguesa.webp")
    $('#icon-menu-drop').removeClass("icon-menu-mobile-close")
    $('#icon-menu-drop').addClass("icon-menu-mobile-default")

    $('#collapsePruebasMobile').collapse('hide')
    // $('#icon-drop-main-menu-xs').prop("src","images/icon-desplegar-xs.webp")
    $('#icon-drop-main-menu-xs').removeClass("icon-arrow-up")
    $('#icon-drop-main-menu-xs').addClass("icon-arrow-down")

    $('#collapse-xs-01').removeClass('active')

    $('body').removeClass('stop-scrolling')

    $("#mainMenuPsa").removeClass('overflow-nav-principal');
  }
  else{
    $('header').addClass("collapse-show");
    // $('#icon-menu-drop').prop("src","images/icon-close-menu-hamburguesa.webp")
    $('#icon-menu-drop').removeClass("icon-menu-mobile-default")
    $('#icon-menu-drop').addClass("icon-menu-mobile-close")

    $('body').addClass('stop-scrolling')

    $("#mainMenuPsa").addClass('overflow-nav-principal');
    // $('#icon-drop-main-menu-xs').removeClass("icon-arrow-up")
    // $('#icon-drop-main-menu-xs').addClass("icon-arrow-down")
  }
}

// Validar interacciones scroll
const obtenerAltoHeader = () => {
  const offsetHeader = $("header").outerHeight();
  return offsetHeader;
}

const validarInteraccionesScroll = () => {
  // let offsetNav = $("#offset-nav-interactions").height();
  // let offsetHeader = $("header").outerHeight();
  let offsetMain = $(".offset-slide-main-home-psa").outerHeight();
  let offsetTotal = obtenerAltoHeader() + offsetMain;

  if ($(document).scrollTop() > 0 && $(document).scrollTop() < offsetMain){
  // if ($(document).scrollTop() > 0){
    $('#collapsePruebasWebFixed').collapse('hide')
    
    $('#icon-drop-main-menu-fixed').removeClass("icon-arrow-up")
    $('#icon-drop-main-menu-fixed').addClass("icon-arrow-down")
    $('#collapse-fixed-01').removeClass('active')

    $("#offset-nav-interactions").css("height",obtenerAltoHeader()+"px")

    detectarMouseoverCollapse(obtenerAltoHeader());
    detectarMouseleaveCollapse(obtenerAltoHeader()); 
  } 
  
  if($(window).scrollTop() > offsetTotal) {
    $('#collapsePruebasWebFixed').collapse('hide')
    
    $('#icon-drop-main-menu-fixed').removeClass("icon-arrow-up")
    $('#icon-drop-main-menu-fixed').addClass("icon-arrow-down")
    $('#collapse-fixed-01').removeClass('active')

    $("header").addClass("fixed")
    $("header").addClass("animation-nav")

    $("#offset-nav-interactions").css("height",obtenerAltoHeader()+"px")

    detectarMouseoverCollapse(obtenerAltoHeader());
    detectarMouseleaveCollapse(obtenerAltoHeader()); 
  } 
  else{
    $("header").removeClass("fixed")
    $("header").removeClass("animation-nav")

    $("#offset-nav-interactions").css("height",obtenerAltoHeader()+"px")

    detectarMouseoverCollapse(obtenerAltoHeader());
    detectarMouseleaveCollapse(obtenerAltoHeader()); 
  }
}


// Detectar mouseover collapse fixed web
const detectarMouseoverCollapse = (offset) => {
  $('#collapse-fixed-01').mouseover(function(){
    $('#collapsePruebasWebFixed').collapse('show')
    // $('#icon-drop-main-menu-fixed').prop("src","images/icon-contraer.webp")
    $('#icon-drop-main-menu-fixed').removeClass("icon-arrow-down")
    $('#icon-drop-main-menu-fixed').addClass("icon-arrow-up")
    $('#collapse-fixed-01').addClass('active')
  
    $(".collapse-menu-principal-fixed").css("top",offset+"px")
  })
}

// Detectar mouseleave collapse fixed web
const detectarMouseleaveCollapse = (offset) => {
  $('#offset-nav-interactions').mouseleave(function(){
    $('#collapsePruebasWebFixed').collapse('hide')
    // $('#icon-drop-main-menu-fixed').prop("src","images/icon-desplegar.webp")
    $('#icon-drop-main-menu-fixed').removeClass("icon-arrow-up")
    $('#icon-drop-main-menu-fixed').addClass("icon-arrow-down")
    $('#collapse-fixed-01').removeClass('active')
  
    $(".collapse-menu-principal-fixed").css("top",offset+"px")
  })
}

$("#btn-main-menu-xs, #cta-main-menu-mobile").click(function () {
  validarInteraccionesNavMobile();
});

// Change Icon Menu - Hamburguesa XS
$("#btn_nav_fixed_xs, .icon-close-agil-xs").on('click', function() {
  $("#btn_nav_fixed_xs").toggleClass('d-none')

  if ($("#navbarMenuAgilMobile").hasClass("show")){
    $("#backdrop-menu-agil").remove();

    $('body').removeClass('stop-scrolling')
  }else{
    $('<div id="backdrop-menu-agil" class="modal-backdrop"></div>').appendTo(document.body);

    $("#nav-contacto-agil").css('z-index','1200')
    $("#backdrop-menu-agil").css('z-index','1100')

    $('body').addClass('stop-scrolling')
    $("header").css('z-index','1000')
  }
});

// Cambiar fondo del header en interaccion de reescalado
// $(window).resize(function() {
//   if (($(window).width() > 991)){
//     $('header').removeClass("collapse-show")
//   }
//   else if (($(window).width() < 991) && $("#mainMenuPsa").hasClass("show")){
//     $('header').addClass("collapse-show")
//   } 
//   else {
//     $('header').removeClass("collapse-show")
//   }
// })

$(document).on("click",function(e) {
                    
  let container = $("#nav-contacto-agil");
                     
    if (!container.is(e.target) && container.has(e.target).length === 0) { 

      $("#navbarMenuAgilMobile").collapse('hide')
      $("#btn_nav_fixed_xs").removeClass('d-none')
      
      $('#img_flecha_fixed').removeClass("icon-slider-anterior-desplegable-abajo");
      $('#img_flecha_fixed').addClass("icon-slider-anterior-desplegable-arriba");

      $("#backdrop-menu-agil").remove();
      $("#nav-contacto-agil").css('z-index','800')

    }
});

// Change Icon Arrow dropdown menu XS
$("#collapse-xs-01").click(function () {
  if ($("#collapsePruebasMobile").hasClass("show")){
    $('#icon-drop-main-menu-xs').removeClass("icon-arrow-up")
    $('#icon-drop-main-menu-xs').addClass("icon-arrow-down")
    // $('#icon-drop-main-menu-xs').prop("src","images/icon-desplegar-xs.webp")
    $('#collapse-xs-01').removeClass('active')
  }
  else{
    $('#icon-drop-main-menu-xs').removeClass("icon-arrow-down")
    $('#icon-drop-main-menu-xs').addClass("icon-arrow-up")
    // $('#icon-drop-main-menu-xs').prop("src","images/icon-contraer-xs.webp")
    $('#collapse-xs-01').addClass('active')
  }
});

// Change Icon Arrow dropdown fixed web
$("#collapse-fixed-01").click(function () {
  if ($("#collapsePruebasWebFixed").hasClass("show")){
    // $('#icon-drop-main-menu-fixed').prop("src","images/icon-desplegar.webp")
    $('#icon-drop-main-menu-fixed').removeClass("icon-arrow-up")
    $('#icon-drop-main-menu-fixed').addClass("icon-arrow-down")
    $('#collapse-fixed-01').removeClass('active')
  }
  else{
    // $('#icon-drop-main-menu-fixed').prop("src","images/icon-contraer.webp")
    $('#icon-drop-main-menu-fixed').removeClass("icon-arrow-down")
    $('#icon-drop-main-menu-fixed').addClass("icon-arrow-up")
    $('#collapse-fixed-01').addClass('active')
  }
});


// OPEN CLOSE - COLLAPSE FIXED CONTACTO AGIL 
$("#btn-contacto-agil-web").click(function () {
  $('#btn-contacto-agil-web').addClass('d-none')
});
// OPEN CLOSE - COLLAPSE FIXED CONTACTO AGIL 
$("#close-collapse-contacto-agil-web").click(function () {
  $('#btn-contacto-agil-web').removeClass('d-none')
});


//BARRA DE CARGA SCROLL
// window.onscroll = function() { myFunction() };

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 105;
//   document.getElementById("progress-bar-xs").style.width = scrolled + "%";
// }

// const videoHomeInteractio = () => {
//   const videoHomePath = document.querySelector('#video-interaction');
//   const imgVideoHomePath = document.querySelector('#img-preview-video');

//   videoHomePath.addEventListener('click', () => {
//     imgVideoHomePath.classList.add('d-none');
//     const childVideoCount = videoHomePath.childElementCount;

//     if (childVideoCount < 2) {
//       const videoHome = document.createElement('VIDEO');
//       const videoHomeSrc = document.createElement('SOURCE');
//       const videoHomeSrcWebm = document.createElement('SOURCE');
  
//       videoHome.setAttribute('controls', 'controls');
//       videoHome.setAttribute('autoplay', 'autoplay');
  
//       videoHomeSrc.setAttribute('src', 'video/Pruebas_Psicotécnicas_PsicoAlianza.mp4');
//       videoHomeSrc.setAttribute('type', 'video/mp4');
//       videoHome.appendChild(videoHomeSrc);
  
//       videoHomeSrcWebm.setAttribute('src', 'video/Pruebas_Psicotécnicas_PsicoAlianza.webm');
//       videoHomeSrc.setAttribute('type', 'video/webm');
//       videoHome.appendChild(videoHomeSrcWebm);
      
//       videoHomePath.appendChild(videoHome);
//     } 
//     else {
//       console.log('Ya esta cargado el video en el DOM');
//     }
//   });
// } 
// videoHomeInteraction()

// const videoHomeInteraction01 = () => {
//   const videoHomePath = document.querySelector('#video-interaction-01');
//   const imgVideoHomePath = document.querySelector('#img-preview-video-01');

//   videoHomePath.addEventListener('click', () => {
//     imgVideoHomePath.classList.add('d-none');
//     const childVideoCount = videoHomePath.childElementCount;

//     if (childVideoCount < 2) {
//       const videoHome = document.createElement('VIDEO');
//       const videoHomeSrc = document.createElement('SOURCE');
//       const videoHomeSrcWebm = document.createElement('SOURCE');
  
//       videoHome.setAttribute('controls', 'controls');
//       videoHome.setAttribute('autoplay', 'autoplay');
  
//       videoHomeSrc.setAttribute('src', 'video/PSICOALIANZA_SITP_Testimonial_evaluación_psicotécnica.mp4');
//       videoHomeSrc.setAttribute('type', 'video/mp4');
//       videoHome.appendChild(videoHomeSrc);
  
//       videoHomeSrcWebm.setAttribute('src', 'video/PSICOALIANZA_SITP_Testimonial_evaluación_psicotécnica.webm');
//       videoHomeSrc.setAttribute('type', 'video/webm');
//       videoHome.appendChild(videoHomeSrcWebm);
      
//       videoHomePath.appendChild(videoHome);
//     } 
    // else {
    //   console.log('Ya esta cargado el video en el DOM');
    // }
//   });
// } 
// videoHomeInteraction01();

// const videoHomeInteraction02 = () => {
//   const videoHomePath = document.querySelector('#video-interaction-02');
//   const imgVideoHomePath = document.querySelector('#img-preview-video-02');

//   videoHomePath.addEventListener('click', () => {
//     imgVideoHomePath.classList.add('d-none');
//     const childVideoCount = videoHomePath.childElementCount;

//     if (childVideoCount < 2) {
//       const videoHome = document.createElement('VIDEO');
//       const videoHomeSrc = document.createElement('SOURCE');
//       const videoHomeSrcWebm = document.createElement('SOURCE');
  
//       videoHome.setAttribute('controls', 'controls');
//       videoHome.setAttribute('autoplay', 'autoplay');
  
//       videoHomeSrc.setAttribute('src', 'video/PSICOALIANZA_FLOTA_LA_MACARENA_Testimonial_evaluación_psicotécnica.mp4');
//       videoHomeSrc.setAttribute('type', 'video/mp4');
//       videoHome.appendChild(videoHomeSrc);
  
//       videoHomeSrcWebm.setAttribute('src', 'video/PSICOALIANZA_FLOTA_LA_MACARENA_Testimonial_evaluación_psicotécnica.webm');
//       videoHomeSrc.setAttribute('type', 'video/webm');
//       videoHome.appendChild(videoHomeSrcWebm);
      
//       videoHomePath.appendChild(videoHome);
//     } 
    // else {
    //   console.log('Ya esta cargado el video en el DOM');
    // }
//   });
// } 
// videoHomeInteraction02();

// SLIDES HOME 02
const eventosSliderHome02 = () => {
  $('#carouselHome02').on('slide.bs.carousel', function onSlide (ev) {
    const id = ev.relatedTarget.id;
    // console.log(id) 
    // console.log(ev.direction)
  
    switch (id) {
      case "ethikos-slide-home":
        $('#grid-pruebas-carousel').removeClass('active-tendisc active-potencial-comercial active-vp-test active-iq-factorial')
        $('.section-home-psa-03').removeClass('active-tendisc active-potencial-comercial active-vp-test active-iq-factorial')
  
        $('#grid-pruebas-carousel').addClass('active-ethikos')
        $('.section-home-psa-03').addClass('active-ethikos')
  
        $('#icon-prueba-ethikos').prop('src','images/new-home/icon-ethikos-slide-home-active.svg')
  
        $('#icon-prueba-potencial-comercial').prop('src','images/new-home/icon-potencial-comercial-slide-home.svg')
        $('#icon-prueba-vp-test').prop('src','images/new-home/icon-vp-test-slide-home.svg')
        $('#icon-prueba-iq-factorial').prop('src','images/new-home/icon-iq-factorial-slide-home.svg')
        $('#icon-prueba-tendisc').prop('src','images/new-home/icon-tendisc-slide-home.svg')
        break;
      case "potencial-comercial-slide-home":
        $('#grid-pruebas-carousel').removeClass('active-tendisc active-ethikos active-vp-test active-iq-factorial')
        $('.section-home-psa-03').removeClass('active-tendisc active-ethikos active-vp-test active-iq-factorial')
  
        $('#grid-pruebas-carousel').addClass('active-potencial-comercial')
        $('.section-home-psa-03').addClass('active-potencial-comercial')
  
        $('#icon-prueba-potencial-comercial').prop('src','images/new-home/icon-potencial-comercial-slide-home-active.svg')
  
        $('#icon-prueba-ethikos').prop('src','images/new-home/icon-ethikos-slide-home.svg')
        $('#icon-prueba-vp-test').prop('src','images/new-home/icon-vp-test-slide-home.svg')
        $('#icon-prueba-iq-factorial').prop('src','images/new-home/icon-iq-factorial-slide-home.svg')
        $('#icon-prueba-tendisc').prop('src','images/new-home/icon-tendisc-slide-home.svg')
        break;
      case "vp-test-slide-home":
        $('#grid-pruebas-carousel').removeClass('active-tendisc active-ethikos active-potencial-comercial active-iq-factorial')
        $('.section-home-psa-03').removeClass('active-tendisc active-ethikos active-potencial-comercial active-iq-factorial')
  
        $('#grid-pruebas-carousel').addClass('active-vp-test')
        $('.section-home-psa-03').addClass('active-vp-test')
  
        $('#icon-prueba-vp-test').prop('src','images/new-home/icon-vp-test-slide-home-active.svg')
  
        $('#icon-prueba-ethikos').prop('src','images/new-home/icon-ethikos-slide-home.svg')
        $('#icon-prueba-potencial-comercial').prop('src','images/new-home/icon-potencial-comercial-slide-home.svg')
        $('#icon-prueba-iq-factorial').prop('src','images/new-home/icon-iq-factorial-slide-home.svg')
        $('#icon-prueba-tendisc').prop('src','images/new-home/icon-tendisc-slide-home.svg')
        break;
      case "iq-factorial-slide-home":
        $('#grid-pruebas-carousel').removeClass('active-tendisc active-ethikos active-potencial-comercial active-vp-test')
        $('.section-home-psa-03').removeClass('active-tendisc active-ethikos active-potencial-comercial active-vp-test')
  
        $('#grid-pruebas-carousel').addClass('active-iq-factorial')
        $('.section-home-psa-03').addClass('active-iq-factorial')
  
        $('#icon-prueba-iq-factorial').prop('src','images/new-home/icon-iq-factorial-slide-home-active.svg')
  
        $('#icon-prueba-ethikos').prop('src','images/new-home/icon-ethikos-slide-home.svg')
        $('#icon-prueba-potencial-comercial').prop('src','images/new-home/icon-potencial-comercial-slide-home.svg')
        $('#icon-prueba-vp-test').prop('src','images/new-home/icon-vp-test-slide-home.svg')
        $('#icon-prueba-tendisc').prop('src','images/new-home/icon-tendisc-slide-home.svg')
        break;
      default:
        $('#grid-pruebas-carousel').removeClass('active-ethikos active-potencial-comercial active-vp-test active-iq-factorial')
        $('.section-home-psa-03').removeClass('active-ethikos active-potencial-comercial active-vp-test active-iq-factorial')
  
        $('#grid-pruebas-carousel').addClass('active-tendisc')
        $('.section-home-psa-03').addClass('active-tendisc')
  
        $('#icon-prueba-tendisc').prop('src','images/new-home/icon-tendisc-slide-home-active.svg')
  
        $('#icon-prueba-ethikos').prop('src','images/new-home/icon-ethikos-slide-home.svg')
        $('#icon-prueba-potencial-comercial').prop('src','images/new-home/icon-potencial-comercial-slide-home.svg')
        $('#icon-prueba-vp-test').prop('src','images/new-home/icon-vp-test-slide-home.svg')
        $('#icon-prueba-iq-factorial').prop('src','images/new-home/icon-iq-factorial-slide-home.svg')
        break;
    }
  })
}

// SLIDES HOME 02
const eventosSliderNosotros03 = () => {
  $('#carouselNosotros03').on('slide.bs.carousel', function onSlide (ev) {
    const id = ev.relatedTarget.id;
    // console.log(id) 
    // console.log(ev.direction)
  
    switch (id) {
      case "slide-nosotros-02":
        $('.section-nosotros-psa-03').removeClass('active-slide-01 active-slide-03')
        $('.section-nosotros-psa-03').addClass('active-slide-02')
        break;
      case "slide-nosotros-03":
        $('.section-nosotros-psa-03').removeClass('active-slide-01 active-slide-02')
        $('.section-nosotros-psa-03').addClass('active-slide-03')
        break;
      default:
        $('.section-nosotros-psa-03').removeClass('active-slide-02 active-slide-03')
        $('.section-nosotros-psa-03').addClass('active-slide-01')
        break;
    }
  })
}


// $('#slider-Home01').on('slide.bs.carousel', function onSlide (ev) {
//   var id = ev.relatedTarget.id;
//   // console.log(id) 
//   // console.log(ev.direction)
  
//   switch (id) {
//     case "item-slider-home-01-01":
//       $('#slider-Home01').addClass('custom-active')
//       $('#section-home-01').addClass('custom-active')
//       break;
//     default:
//       $('#slider-Home01').removeClass('custom-active')
//       $('#section-home-01').removeClass('custom-active')
//       break;
//   }
// })

// Anclas ID suavizada section pruebas
// const anclaSectionPruebas = () => {
//   validarInteraccionesScroll();
//   $("#btn-ancla-section-pruebas").click(function () {
//     // let offsetTop = $('#offset-nav-interactions').height();
//     $('html, body').stop().animate({
//       // scrollTop: $($(this).attr('href')).offset().top - offsetTop 
//       scrollTop: $($(this).attr('href')).offset().top
//     }, 400, 'linear');
//   });
// }

// Anclas ID suavizada section pruebas
// const anclaSectionForm = () => {
//   validarInteraccionesScroll();
//   $(".nav-link.cta").click(function () {
//     let offsetTop = $('#offset-nav-interactions').height();
//     $('html, body').stop().animate({
//       scrollTop: $($(this).attr('href')).offset().top - offsetTop 
//       // scrollTop: $($(this).attr('href')).offset().top
//     }, 400, 'linear');
//     $('#mainMenuPsa').collapse('hide');
//   });
// }

const sliderMultiplesClientes = () => {
  // $('#myCarousel').carousel({
  //   interval: 1000
  // })

  $('#carouselClientes.carousel .carousel-item').each(function() {
    let next = $(this).next();
  
    if (($(window).width() < 992)){
      let minPerSlide = 4;
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (let i = 0; i < minPerSlide; i++) {
          next = next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
          }

          next.children(':first-child').clone().appendTo($(this));
      }
    } else {
      let minPerSlide = 7;
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));


      for (let i = 0; i < minPerSlide; i++) {
          next = next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
          }

          next.children(':first-child').clone().appendTo($(this));
      }
    }

  });
}


/* PRUEBAS PSA */
//Intercalar imagenes slider 02 A web
$('#slider-web-02-a').on('slide.bs.carousel', function onSlide (ev) {
  var id = ev.relatedTarget.id;
  // console.log(id) 
  // console.log(ev.direction)
  
  switch (id) {
    case "item-slider-02-01-a":
      $('#tx-slider-02-02-a').removeClass('active')
      $('#tx-slider-02-03-a').removeClass('active')
      $('#tx-slider-02-01-a').addClass('active')

      $('#icon-slider-02-02-a').removeClass('on')
      $('#icon-slider-02-03-a').removeClass('on')
      $('#icon-slider-02-01-a').addClass('on')
      break;
    case "item-slider-02-02-a":
      $('#tx-slider-02-01-a').removeClass('active')
      $('#tx-slider-02-03-a').removeClass('active')
      $('#tx-slider-02-02-a').addClass('active')

      $('#icon-slider-02-01-a').removeClass('on')
      $('#icon-slider-02-03-a').removeClass('on')
      $('#icon-slider-02-02-a').addClass('on')
      break;
    default:
      $('#tx-slider-02-01-a').removeClass('active')
      $('#tx-slider-02-02-a').removeClass('active')
      $('#tx-slider-02-03-a').addClass('active')

      $('#icon-slider-02-01-a').removeClass('on')
      $('#icon-slider-02-02-a').removeClass('on')
      $('#icon-slider-02-03-a').addClass('on')
      break;
  }
})

//Intercalar imagenes slider 02 web
$('#slider-web-02').on('slide.bs.carousel', function onSlide (ev) {
  var id = ev.relatedTarget.id;
  // console.log(id) 
  // console.log(ev.direction)
  
  switch (id) {
    case "item-slider-02-01":
      $('#tx-slider-02-02').removeClass('active')
      $('#tx-slider-02-03').removeClass('active')
      $('#tx-slider-02-01').addClass('active')

      $('#icon-slider-02-02').removeClass('on')
      $('#icon-slider-02-03').removeClass('on')
      $('#icon-slider-02-01').addClass('on')
      break;
    case "item-slider-02-02":
      $('#tx-slider-02-01').removeClass('active')
      $('#tx-slider-02-03').removeClass('active')
      $('#tx-slider-02-02').addClass('active')

      $('#icon-slider-02-01').removeClass('on')
      $('#icon-slider-02-03').removeClass('on')
      $('#icon-slider-02-02').addClass('on')
      break;
    default:
      $('#tx-slider-02-01').removeClass('active')
      $('#tx-slider-02-02').removeClass('active')
      $('#tx-slider-02-03').addClass('active')

      $('#icon-slider-02-01').removeClass('on')
      $('#icon-slider-02-02').removeClass('on')
      $('#icon-slider-02-03').addClass('on')
      break;
  }
})


// Soporte Candidatos
// SCRIPTS ACCORDIONS
$( '#heading01' ).click(function() {
  $('#icon-02, #icon-03, #icon-04').removeClass('icon-arrow-up')

  $('#icon-02, #icon-03, #icon-04').addClass('icon-arrow-down')

  if($("#collapse-01").hasClass('show')) {
    $('#icon-01').removeClass('icon-arrow-up')
    $('#icon-01').addClass('icon-arrow-down')
  } else{
    $('#icon-01').removeClass('icon-arrow-down')
    $('#icon-01').addClass('icon-arrow-up')
  }
})

$( '#heading02' ).click(function() {
  $('#icon-01, #icon-03, #icon-04').removeClass('icon-arrow-up')

  $('#icon-01, #icon-03, #icon-04').addClass('icon-arrow-down')

  if($("#collapse-02").hasClass('show')) {
    $('#icon-02').removeClass('icon-arrow-up')
    $('#icon-02').addClass('icon-arrow-down')
  } else{
    $('#icon-02').removeClass('icon-arrow-down')
    $('#icon-02').addClass('icon-arrow-up')
  }
})

$( '#heading03' ).click(function() {
  $('#icon-01, #icon-02, #icon-04').removeClass('icon-arrow-up')

  $('#icon-01, #icon-02, #icon-04').addClass('icon-arrow-down')

  if($("#collapse-03").hasClass('show')) {
    $('#icon-03').removeClass('icon-arrow-up')
    $('#icon-03').addClass('icon-arrow-down')
  } else{
    $('#icon-03').removeClass('icon-arrow-down')
    $('#icon-03').addClass('icon-arrow-up')
  }
})

$( '#heading04' ).click(function() {
  $('#icon-01, #icon-02, #icon-03').removeClass('icon-arrow-up')

  $('#icon-01, #icon-02, #icon-03').addClass('icon-arrow-down')

  if($("#collapse-04").hasClass('show')) {
    $('#icon-04').removeClass('icon-arrow-up')
    $('#icon-04').addClass('icon-arrow-down')
  } else{
    $('#icon-04').removeClass('icon-arrow-down')
    $('#icon-04').addClass('icon-arrow-up')
  }
})
