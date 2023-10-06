const url = `http://localhost:5678/api/works`;

const allBtn = document.querySelector('#all-btn');

const objectBtn = document.querySelector('#object-btn');
const appartBtn = document.querySelector('#appart-btn');
const hotelRestaurantBtn = document.querySelector('#hotel-restaurant-btn');

const works = [];

function showAllPics() {
    fetch(url) //call the URL
        //if response ok run if not ok => catch error
        .then(response => response.json()) 
        // after keep all api's works 
        .then(works => {

            const gallery = document.querySelector('.gallery');

            works.forEach(work => {
                const figure = document.createElement('figure'); // create figure element
                const imageElement = document.createElement('img'); // create img element
                const figcaption = document.createElement('figcaption'); // create figcaption element
        
                // by using the selector element of the inspector
                //!!!!! order of operations and elements and organisation of DOM !!!!!!
                // woohoo I did it !! 
        
                // put image Element and figcaption in figure element in a first time, gallery take gigure after
                figure.appendChild(imageElement);
                figure.appendChild(figcaption);
                gallery.appendChild(figure);
                        
                imageElement.src = work.imageUrl; // attribute api's url to the image
                imageElement.alt = work.title; // attribute the title to alt in img element
                figcaption.innerHTML = work.title; // show title to users by push it in HTML code
            })            
        })
        .catch(error => {
            console.log(error);
        });
}

//document.addEventListener("DOMContentLoaded", showAllPics);
document.addEventListener("click", showAllPics);

function showImages(filters, works) {
    // filters pictures based on selected filter
    const filteredWorks = works.filter(work => {
        return filters.some(filter => filter.name === work.name);
    });

    // show different filtered pictures on the web page
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';

    // if pictures have not been filtered yet
    if (!this.isFiltered) {
        this.isFiltered = true;
        filteredWorks.forEach(work => {
            const figure = document.createElement('figure');
            const imageElement = document.createElement('img');
            const figcaption = document.createElement('figcaption');

            imageElement.src = work.imageUrl;
            imageElement.alt = work.title;
            figcaption.innerHTML = work.title;

            figure.appendChild(imageElement);
            figure.appendChild(figcaption);
            gallery.appendChild(figure);
        });
    }
}

// add click event to different filter
objectBtn.addEventListener('click', () => {
    if (objectBtn.filter){
        showImages([objectBtn.filter], works);
    }
});

appartBtn.addEventListener('click', () => {
    if (appartBtn.filter) {
        showImages([appartBtn.filter], works);
    }
});

hotelRestaurantBtn.addEventListener('click', () => {
    if (hotelRestaurantBtn.filter) {    
        showImages([hotelRestaurantBtn.filter], works);
    }
});
