var app = document.querySelector('div#app');
var inputElement = document.querySelector('input[name=user]');
var btnElement = document.querySelector('div#app button');


async function getRepositoriesList() {

    var ulElement = document.createElement('ul');
    app.appendChild(ulElement);
    var loadElement = document.createElement('li');
    ulElement.appendChild(loadElement);
    loadElement.textContent = "Carregando..."

    

    entrada = inputElement.value;
    
    await axios.get(`https://api.github.com/users/${entrada}/repos`)
        .then(function (response) {
            for( var i = 0; i < response.data.length; i++ ){
                
                app.appendChild(ulElement);
                var listItemElement = document.createElement('li');
                ulElement.appendChild(listItemElement);
                listItemElement.textContent = response.data[i].name

            }

            ulElement.removeChild(loadElement);
      
        })
        .catch(function (error){
                window.alert('Usuário não encontrado')
                console.log(error);
        });

}