// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigo =[];
function agregarAmigo() {
    let inputAmigo= document.getElementById('amigo');
    let nombreAmigo=inputAmigo.value;
    if (!nombreAmigo) {
        alert('Debes ingresar un nombre');
        return;        
    }
    amigo.push(nombreAmigo);
    console.log(amigo);
    
    inputAmigo.value='';
    inputAmigo.focus();
    mostrarAmigos()
    
    
    
}
function mostrarAmigos(){
   let listaAmigos= document.getElementById('listaAmigos')
    listaAmigos.innerHTML='';
   amigo.forEach(elemento => {
    let item=document.createElement('li');
    item.innerHTML=elemento
    listaAmigos.appendChild(item);
    let resultado=document.getElementById('resultado');
    resultado.innerHTML='';
    
   });
}
function sortearAmigo(){
    if(amigo.length===0){
         alert('No hay amigos para sortear')
         return
    }
    let amigoSorteado=amigo[Math.floor(Math.random()*amigo.length)];
    let resultado=document.getElementById('resultado');
    resultado.innerHTML=`El amigo sorteado es : ${amigoSorteado}`;
    listaAmigos.innerHTML='';
    amigo=[];

}
