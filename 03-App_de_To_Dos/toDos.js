var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

//Converte o JSON em um Vetor
var toDos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderToDos() {
    listElement.innerHTML = '';
    for (toDo of toDos) {
        var toDoElement = document.createElement('li');
                                //Cria um texto dentro de um elemento
        var toDoText = document.createTextNode(toDo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#')

        var pos = toDos.indexOf(toDo);
        linkElement.setAttribute('onClick', 'deleteToDo('+pos+')');
        
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText)

        toDoElement.appendChild(toDoText)
        toDoElement.appendChild(linkElement)

        listElement.appendChild(toDoElement)
    }
}
renderToDos();

function addToDo() {
    var toDoText = inputElement.value;

    toDos.push(toDoText)
    inputElement.value = '';
    renderToDos();
    saveToStorage();
}

buttonElement.onclick = addToDo;

function deleteToDo(pos) {

    //função da array que substitui um item
            //  (posição inicial que vai substituir os itens, quantidade de itens que vão ser substituidos)
    toDos.splice(pos , 1);
    renderToDos();
    saveToStorage();
}

function saveToStorage() {
    //Define uma lista no localstorage, pega o vetor,  transforma em JSON e armazena dentro da lista

                    //  (Nome da lista,       vetor)
    localStorage.setItem('list_todos', JSON.stringify(toDos))
}