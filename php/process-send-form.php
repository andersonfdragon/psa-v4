<?php

$errorMSG = "";

$formData = json_decode(file_get_contents('php://input'), true);

// URL ORIGEN TIPO
if (empty($formData["urlOrigenTipo"])) {
  $errorMSG = utf8_decode("Completa este campo");
} else {
  $urlOrigenTipo = $formData["urlOrigenTipo"];
}

// URL ORIGEN
if (empty($formData["urlOrigen"])) {
  $errorMSG = utf8_decode("Completa este campo");
} else {
  $urlOrigen = $formData["urlOrigen"];
}

// URL LAST VISITED
if (empty($formData["urlLastVisited"])) {
  $errorMSG = utf8_decode("Completa este campo");
} else {
  $urlLastVisited = $formData["urlLastVisited"];
}

// URL HISTORIAL
if (empty($formData["urlHistorial"])) {
  $errorMSG = utf8_decode("Completa este campo");
} else {
  $urlHistorial = $formData["urlHistorial"];
}


// NOMBRE EMPRESA
if (empty($formData["nombreEmpresa"])) {
  $errorMSG = utf8_decode("Completa este campo");
} else {
  $nombreEmpresa = $formData["nombreEmpresa"];
}

// NIT
if (empty($formData["nit"])) {
  $errorMSG = utf8_decode("Completa este campo");
} else {
  $nit = $formData["nit"];
}

// TELEFONO
if (empty($formData["telefono"])) {
  $errorMSG = utf8_decode("Completa este campo");
} else {
  $telefono = $formData["telefono"];
}

// NOMBRE Y APELLIDO
if (empty($formData["nombresApellidos"])) {
  $errorMSG = utf8_decode("Completa este campo");
} else {
  $nombresApellidos = $formData["nombresApellidos"];
}

// CORREO
if (empty($formData["correo"])) {
  $errorMSG = utf8_decode("Completa este campo");
} else {
  $correo = $formData["correo"];
}

// CARGO -> COLLAPSE SELECT INPUT
if (empty($formData["cargo"])) {
  $errorMSG = utf8_decode("Completa este campo");
} else {
  $cargo = $formData["cargo"];
}
$cargoOtro = $formData["cargoOtro"];

// USO PRUEBAS -> COLLAPSE SELECT INPUT
if (empty($formData["usoPruebas"])) {
  $errorMSG = utf8_decode("Completa este campo");
} else {
  $usoPruebas = $formData["usoPruebas"];
}
$usoPruebasOtras = $formData["usoPruebasOtras"];


$filterEvaluacion360 = "/evaluacion-360.html";
 
if(strpos($urlLastVisited, $filterEvaluacion360) !== false){
  /****************************** ENVIAR A CRM SALES UP - TAG EV 360******************************/
  $url = 'https://api.salesup.com/v4/integraciones/P02APD36DCD1E-D4D2-492A-BDDE-C6F4D4C8DEDF';
  $params = array(
      'empresa' => ($nombreEmpresa), 
      'nombre' => ($nombresApellidos),
      'puesto' => ($cargo)." | ".($cargoOtro),
      'movil' => ($telefono),
      'correo' => ($correo),
      'origen' => ($urlOrigenTipo),
      'comentarios' => ("Nuevo lead PSA 2021: Formulario Evaluacion 360")." | ".("NIT: ".$nit)." | ".("Uso pruebas psicotécnicas: ".$usoPruebas)." | ".("Otra(s) pruebas: ".$usoPruebasOtras)." | ".("Call UTM: ".$urlOrigen)." | ".("Historial Navegacion: ".$urlHistorial)
  );

  $request = curl_init();
  curl_setopt($request, CURLOPT_URL, $url);
  curl_setopt($request, CURLOPT_POST, 1);
  curl_setopt($request, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($request, CURLOPT_POSTFIELDS, http_build_query($params));
  curl_setopt($request, CURLOPT_CONNECTTIMEOUT, 60);
  curl_setopt($request, CURLOPT_TIMEOUT, 60);

  $result = curl_exec($request);

  curl_close($request);

  //print_r($result); -> Not use
} else{
  /****************************** ENVIAR A CRM SALES UP - TAG GENERAL ******************************/
  $url = 'https://api.salesup.com/integraciones/P02APBC2557AB-840C-4D43-A33A-4E2BDEA84B2F';
  $params = array(
      'empresa' => ($nombreEmpresa), 
      'nombre' => ($nombresApellidos),
      'puesto' => ($cargo)." | ".($cargoOtro),
      'movil' => ($telefono),
      'correo' => ($correo),
      'origen' => ($urlOrigenTipo),
      'comentarios' => ("Nuevo lead PSA 2021: Formulario Contacto")." | ".("NIT: ".$nit)." | ".("Uso pruebas psicotécnicas: ".$usoPruebas)." | ".("Otra(s) pruebas: ".$usoPruebasOtras)." | ".("Call UTM: ".$urlOrigen)." | ".("Historial Navegacion: ".$urlHistorial)
  );

  $request = curl_init();
  curl_setopt($request, CURLOPT_URL, $url);
  curl_setopt($request, CURLOPT_POST, 1);
  curl_setopt($request, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($request, CURLOPT_POSTFIELDS, http_build_query($params));
  curl_setopt($request, CURLOPT_CONNECTTIMEOUT, 60);
  curl_setopt($request, CURLOPT_TIMEOUT, 60);

  $result = curl_exec($request);

  curl_close($request);

  //print_r($result); -> Not use
}




/****************************** ENVIAR EMAIL ******************************/
// CONTACTOS Y ASUNTO
$Contacts = array('soluciones@grupo-alianza.com');
$Subject = "Nuevo lead PSA 2021: Formulario Contacto";

// BODY 
$Body = "";

$Body .= utf8_decode("Empresa: ");
$Body .= utf8_decode($nombreEmpresa);
$Body .= "\n";

$Body .= utf8_decode("NIT: ");
$Body .= utf8_decode($nit);
$Body .= "\n";

$Body .= utf8_decode("Nombre y Apellido: ");
$Body .= utf8_decode($nombresApellidos);
$Body .= "\n";

$Body .= utf8_decode("Celular: ");
$Body .= utf8_decode($telefono);
$Body .= "\n";

$Body .= utf8_decode("Correo eletrónico: ");
$Body .= utf8_decode($correo);
$Body .= "\n";

$Body .= utf8_decode("Cargo: ");
$Body .= utf8_decode($cargo);
$Body .= "\n";

$Body .= utf8_decode("Otro cargo: ");
$Body .= utf8_decode($cargoOtro);
$Body .= "\n";

$Body .= utf8_decode("Uso pruebas psicotecnicas: ");
$Body .= utf8_decode($usoPruebas);
$Body .= "\n";

$Body .= utf8_decode("Otra(s) prueba(s): ");
$Body .= utf8_decode($usoPruebasOtras);
$Body .= "\n";

$Body .= utf8_decode("Origen: ");
$Body .= utf8_decode($urlOrigenTipo);
$Body .= "\n";

$Body .= utf8_decode("Call UTM: ");
$Body .= utf8_decode($urlOrigen);
$Body .= "\n";

$Body .= utf8_decode("Historial Navegacion: ");
$Body .= utf8_decode($urlHistorial);
$Body .= "\n";


// SEND EMAIL
foreach ($Contacts as $Contact){
  $to =  $Contact;
  $success = mail($to, $Subject, $Body, "From:".$correo);
}

// VALIDAR ESTADO DE VARIABLES Y ENVIO DE DATOS POR EMAIL Y AL CRM API
if ($success && $errorMSG == ""){
  echo "Completado";
}
else{
  if($errorMSG == ""){
    echo "Algo salío mal :(";
  }
  else {
    echo $errorMSG;
  }
}

?>