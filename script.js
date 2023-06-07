let users = [];

fetch ("https://randomuser.me/api/?results=20")
    .then (response => { return response.json() })
    .then (data => {
        console.log(data);
        users = data.results;
        users
        // .filter(u=>u.gender ==="male")
        // .splice(0,2)
        .map((u) => {

            const dateRegistered = new Date (u.registered.date);
            const today = new Date();
            const dateDiff = today - dateRegistered;
            document.body.innerHTML +=`
        <div class="card0">
            <img scr=${u.picture.medium}/>
            <div class="gender">${u.gender}</div>          
            <div class="last">${u.name.last}</div>
            <div class="first">${u.name.first}</div>
            <div class="email">${u.email}</div>
            <div id="dateRegistered">Inscrit depuis ${Math.floor(
                dateDiff / (1000 * 60 * 60 *24)
            )} jours </div>
        </div>`
        })
        
    });