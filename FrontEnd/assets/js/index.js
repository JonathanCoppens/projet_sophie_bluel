const url = `http://localhost:5678/api/works`;

const allBtn = document.querySelector('#all-btn');

const objectBtn = document.querySelector('#object-btn');
const appartBtn = document.querySelector('#appart-btn');
const hotelRestaurantBtn = document.querySelector('#hotel-restaurant-btn');

function showAllPics() {
    fetch(url) //call the URL
        //if response ok run if not ok => catch error
        .then(response => response.json()) 
        // after keep all api's works 
        .then(works => {
            // list all of the items with map
            //gallery
            works.forEach(work => {
                const gallery = document.querySelector('.gallery');
                const figure = document .createElement('figure');
                const imageElement = document.createElement('img');
                const figcaption = document.createElement('figcaption');
                
                // by using the selector element o
                // woohoo I did it !! !!!!! order of operations and elements !!!!!!

                // put image Element and figcaption in figure element in a first time, gallery take gigure after
                    figure.appendChild(imageElement);
                    figure.appendChild(figcaption);
                    gallery.appendChild(figure);
                    
                    imageElement.src = work.imageUrl; // attribute api's url to the image
                    imageElement.atl = work.title; // attribute the title to alt in img element
                    figcaption.innerHTML = work.title; // show title to users by push it in HTML code
                    

                    /* gallery.style.display = 'flex';
                    gallery.style.flexWrap = 'wrap'; */
                    
                });
                console.log(works);
            })

            .catch(error => {
            console.log(error);
            });
}

document.addEventListener("DOMContentLoaded" /* || "click" */, showAllPics);
//document.addEventListener("click", showAllPics); 