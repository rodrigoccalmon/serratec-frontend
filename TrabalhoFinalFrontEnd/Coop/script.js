    //Cards topo com destaques
    
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => {
        let author = data.results;     
        let output = "";

        author.forEach(function(lists){
                output += `
                <div class="col-sm-2">
                <div class="card h-100" style="width: 10rem;">                  
                        <img src="${lists.picture.large}" class="card-img-top" alt="profile">
                            <div class="card-body">
                                <h5 class="card-title">${lists.name.first} ${lists.name.last}, ${lists.dob.age}</h5>
                                <p class="card-text">${lists.location.timezone.description}</p>
                            </div>                            
                            <div class="card-footer bg-transparent border-success"><a href="clientes.html" class="btn btn-primary btn-sm" id="btn-cards">Clientes</a></div>
                </div>          
                </div>`;
        });

        document.getElementById('output').innerHTML = output;

    }).catch((error) => {
        alert("SEM ACESSO A API");
        console.log(error);
    });