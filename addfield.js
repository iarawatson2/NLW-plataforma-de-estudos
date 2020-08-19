//Procurar o botão
document.querySelector("#add-time")
.addEventListener('click',cloneField)
//Quando clicar no botão

//Executar uma ação
function  cloneField(){

  //Duplicar os campos, que campos?
const newFieldcontainer = document.querySelector('.schedule-item').cloneNode(true);

//Pegar os campos,quais campos?
const fields= newFieldcontainer.querySelectorAll('input')

//Para cada campo limpar
fields.forEach(function(field){
  //pegar o field do momento e limpa
  field.value=""
})


//onde colocar na página
document.querySelector('#schedule-itms').appendChild(newFieldcontainer)

}
  




