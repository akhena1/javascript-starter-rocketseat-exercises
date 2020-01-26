

axios.get('https://api.github.com/users/akhena1')
    .then(function (response)  {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });