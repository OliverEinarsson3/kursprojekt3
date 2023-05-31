// ladda in alla varor
async function loadData() {


    return new Promise((resolve) => {
        fetch("./teams.json", { mode: "no-cors" }).then((respone) => (
            respone.json()
        )).then((jsonFromFile) => {
            resolve(jsonFromFile);
        }).catch((error) => {
            console.log(error);
            resolve([]);
        });
    })
  
  
  }
  
  async function displayProducts(id) {


    let output = "";
    // vänta på loadData har returnerat datan
    var data = await loadData();
  
  
    for (let item of data) {
        if(item.id == id){
    
            output += `
                <div id="teamsInfo">
                    <img src="${item.image}" alt="Lol">
                    <span>${item.namn}</span>
                    <h5>Vinster:${item.vinster}</h5>
                    <h5>Podium: ${item.podium}</h5>
                    <h5>Mästerskap: ${item.championships}</h5>
                    <h6>${item.historia}</h6>
                    <img src="${item.lagbild}" alt="Lol">
                    
                    
                    
                    </div>     
                    </div>    
                </div>
    
    
                `;
    
        }
        document.querySelector('.products').innerHTML = output;
    }

};