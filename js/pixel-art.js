var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorDeColor.style.backgroundColor= colorActual;

  })
);

//Variables que guardan elementos del HTML
let paleta = document.getElementById("paleta");
let grillaPixeles= document.getElementById("grilla-pixeles");
let indicadorDeColor= document.getElementById("indicador-de-color");
let cuerpo =document.getElementsByTagName("body");
let $borrarTodo = $("#borrar");
let $grillaPixeles=$("#grilla-pixeles");

let guardar = document.getElementById("guardar");




//función que recorre variable nombreColores paragenerar la paleta de colores
function colores(){
  for(let i=0; i<nombreColores.length;i++){
    let coloresPaleta= document.createElement("div");
    coloresPaleta.style.backgroundColor=nombreColores[i];
    coloresPaleta.className="color-paleta";
    paleta.appendChild(coloresPaleta);
    //console.log(nombreColores[i]);
  }
}
//función que va a crear los pixeles de grilla-pixeles

  
  function crearGrillaPixeles(){
    for(let i=0;i<1750;i++){
      let pixeles=document.createElement("div");
      pixeles.className="classPixeles";
      grillaPixeles.appendChild(pixeles);
      //console.log("1");
      
    }
  }
  

//función llamador CLICK sobre paleta de colores para el indicador-de-color
paleta.addEventListener("click", modificarBackground);
function modificarBackground(e){
  let colorFondo= e.target.style.backgroundColor;
  indicadorDeColor.style.backgroundColor= colorFondo;
}
//función para pintar un pixel de la grilla
grillaPixeles.addEventListener("click", modificarBackgroundColor);
function modificarBackgroundColor(e){
  let colorFondoIndicador= indicadorDeColor.style.backgroundColor;
  e.target.style.backgroundColor=colorFondoIndicador;
}
//Funciones mouse apretado o no
var mouseApretado=0;
addEventListener("mousedown",modificarApretado);
function modificarApretado(e){
  mouseApretado="apretado";
  //console.log(mouseApretado);
  }
  
addEventListener("mouseup",modificarNoApretado);
function modificarNoApretado(){
  mouseApretado="no apretado";
  //console.log(mouseApretado);
}
//Pintar en movimiento
grillaPixeles.addEventListener("mouseover", modificarBackgroundColor00);
function modificarBackgroundColor00(e){
  if(mouseApretado==="apretado"){
  let colorFondoIndicador= indicadorDeColor.style.backgroundColor;
  e.target.style.backgroundColor=colorFondoIndicador;
  }
}
//Función para hacer desaparecer lo dibujado con el Boton "Borrar Todo"
$borrarTodo.click(function(){
$grillaPixeles.children().animate({"backgroundColor":"white"},1500);
});

//funcion llamado guardar
guardar.addEventListener("click", guardarPixelArt);



//función llamado copiar las imagenes superheroes
$('.imgs li img').click(function(){
  var $superheroeImg = $(this).attr('id'); // id de la imagen clickeada$
  console.log($superheroeImg);
  console.log(flash);
  let superheroeTemporal;
  if($superheroeImg==="batman"){
superheroeTemporal= batman;
  }else if($superheroeImg==="wonder"){
    superheroeTemporal=wonder;
  }else if($superheroeImg==="flash"){
    superheroeTemporal=flash;
  }else if($superheroeImg==="invisible"){
    superheroeTemporal=invisible;
  }
  cargarSuperheroe(superheroeTemporal);
})

//invocación de funciones
window.onload = function(){
colores();
crearGrillaPixeles();
}

