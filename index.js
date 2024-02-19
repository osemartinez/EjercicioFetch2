fetch("https://api.escuelajs.co/api/v1/categories")
    .then(res => res.json())
    .then(data => {
        let card = '';
        for (let db of data) {
            card += `<div class="card mb-5s" >
                    <img src="${db.image}" class="card-img-top" alt="${db.name}">
                
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Nombre:</strong> ${db.name}</li>
                        </ul>
                        
                       
                        
                </div>`
        }
        document.getElementById("lista").innerHTML = card
    })