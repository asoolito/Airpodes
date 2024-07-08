
    // const UserList = document.querySelector(".list")
    // const UserInput = document.querySelector(".input")
    // fetch("https://raw.githubusercontent.com/diyor011/apibest/master/api.json")
    // .then(response => response.json())
    //     .then(data => {
    //         // console.log(data);
    //     data.forEach(element => {
    //         const userWrapper = document.createElement("li")
    //         userWrapper.className = "Wrapper";
    //         userWrapper.className ="Wrapper"
    //         const UserImg = document.createElement("img")
    //         UserImg.src = element.pic
    //         UserImg.classList.add("img")
    //         const UserName = document.createElement("h1");
    //         UserName.textContent = element.name;
    //         UserName.className = "name"
    //         const UserPrice = document.createElement("p");
    //         UserPrice.textContent = `price:${element.price}   `;
    //         UserPrice.className = "price"
    //         const UserDesc = document.createElement("p");
    //         UserDesc.textContent = element.fulldesc;
    //         userWrapper.append(UserImg, UserName, UserPrice, UserDesc)
    //         UserList.appendChild(userWrapper);
    //     }); 
    //     function search(UserName) {
    //         const found = element.find(element => element.name.toLowerCase() === UserName.toLowerCase());
    //         if (found) {
    //             console.log(` found : ${found.id}`);
    //         }
    //         return found ? [found] : [];
    //     }
        
    //     search.addEventListener('input', (event) => {
    //         const search= event.target.value.trim();
    //         const filtered = search ? search(search) : element(search);;
    //         renderPokemon(filteredPokemons, UserList);
    //         found.value = ''
    //     });
        
    //     renderPokemon(element, UserList);
    // })

    const UserList = document.querySelector(".list");
    const UserInput = document.querySelector(".input");
    
    fetch("https://raw.githubusercontent.com/diyor011/apibest/master/api.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                const userWrapper = document.createElement("li");
                userWrapper.className = "Wrapper";
                const UserImg = document.createElement("img");
                UserImg.src = element.pic;
                UserImg.classList.add("img");
                const UserName = document.createElement("h1");
                UserName.textContent = element.name;
                UserName.className = "name";
                const UserPrice = document.createElement("p");
                UserPrice.textContent = `price: ${element.price}`;
                UserPrice.className = "price";
                const UserDesc = document.createElement("p");
                UserDesc.textContent = element.fulldesc;
                userWrapper.append(UserImg, UserName, UserPrice, UserDesc);
                UserList.appendChild(userWrapper);
            });
    
            function search(UserName) {
                const found = data.find(element => element.name.toLowerCase() === UserName.toLowerCase());
                if (found) {
                    console.log(`found: ${found.id}`);
                }
                return found ? [found] : [];
            }
    
            UserInput.addEventListener('input', (event) => {
                const searchQuery = event.target.value.trim();
                const filtered = searchQuery ? search(searchQuery) : data;
                renderUsers(filtered, UserList);
            });
    
            function renderUsers(users, container) {
                container.innerHTML = '';
                users.forEach(element => {
                    const userWrapper = document.createElement("li");
                    userWrapper.className = "Wrapper";
                    const UserImg = document.createElement("img");
                    UserImg.src = element.pic;
                    UserImg.classList.add("img");
                    const UserName = document.createElement("h1");
                    UserName.textContent = element.name;
                    UserName.className = "name";
                    const UserPrice = document.createElement("p");
                    UserPrice.textContent = `price: ${element.price}`;
                    UserPrice.className = "price";
                    const UserDesc = document.createElement("p");
                    UserDesc.textContent = element.fulldesc;
                    userWrapper.append(UserImg, UserName, UserPrice, UserDesc);
                    container.appendChild(userWrapper);
                });
            }
    
            renderUsers(data, UserList);
        });
    