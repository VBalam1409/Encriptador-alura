//constantes
const ingreseTexto = document.getElementById
("ingreseTexto")

const botonEncriptar = document.getElementById 
("botonEncriptar")

const botonDesencriptar = document.getElementById 
("botonDesencriptar")

const botonCopiar = document.getElementById 
("botonCopiar")

const Mensajefinal = document.getElementById 
("mensajeFinal")

const muñeco = document.getElementById 
("muñeco")

const MensajeFinal2 = document.getElementById 
("mensajeFinal2")

let remplazar = [
["e", "enter"],
["i", "imes"],
["a", "ai"],
["o", "ober"],
["u", "ufat"],
]

const replace = (nuevoValor) => {
  Mensajefinal.innerHTML=nuevoValor;

  //remplazo de la imagen
  muñeco.classList.add("oculto");
  ingreseTexto.value = "";
  MensajeFinal2.style.display = "none";
  botonCopiar.style.display = "block";
  derecha.classList.add("ajustar");
  Mensajefinal.classList.add("ajustar");
 };

 const reset = () => {
  Mensajefinal.innerHTML = "";
  muñeco.classList.remove("oculto");
  MensajeFinal2.style.display = "block";
  botonCopiar.style.display = "none";
  derecha.classList.remove("ajustar");
  Mensajefinal.classList.remove("ajustar");
  ingreseTexto.focus();

 }


/*Guardar en la consola con el boton encriptar*/
botonEncriptar.addEventListener("click", () => {
  const texto = ingreseTexto.value.toLowerCase()
  if(texto != ""){
  function Encriptar(newText) {
    for (let i = 0; i < remplazar.length; i++){
      if(newText.includes(remplazar[i][0])) {
        newText = newText.replaceAll(remplazar[i][0],
          remplazar[i][1]);
      };
    };
    return newText
   };  
  } else{
    alert ("ingrese texto a encriptar")
    reset();
   }
    
   
  // const textoEncriptado = Encriptar (texto)

  replace(Encriptar (texto))

   Mensajefinal.innerHTML = Encriptar (texto);
  });



  botonDesencriptar.addEventListener("click", () => {
    const texto = ingreseTexto.value.toLowerCase();
    if(texto != ""){
    function Desencriptar(newText) {
      for (let i = 0; i < remplazar.length; i++){
        if(newText.includes(remplazar[i][1])) {
          newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
        };
  };
  return newText
}
}else {
  alert ("ingrese texto a Desencriptar")
}
replace(Desencriptar(texto))
});


botonCopiar.addEventListener("click", () => {
  let texto = Mensajefinal;
  //navigator.clipboard.writeText(texto.value)
  texto.select();
  document.execCommand(`copy`);
  alert ("Texto Copiado");
  reset();

})
