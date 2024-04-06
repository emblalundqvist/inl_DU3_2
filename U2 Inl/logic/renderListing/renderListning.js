
function render_numberOfCafes(parent_id, data) {
    const parentElement = document.getElementById(parent_id);

    const tr = document.createElement('tr');
    tr.className = 'numberOfRows';

    const title = document.createElement('td');
    title.innerHTML = 'Cafes';

    const number = document.createElement('td');
    number.innerHTML = `${data.cafes.length}`;

    tr.appendChild(title);
    tr.appendChild(number);

    parentElement.appendChild(tr);

};

function render_numberOfFika(parent_id, data) {
    const parentElement = document.getElementById(parent_id);

    const tr = document.createElement('tr');
    tr.className = 'numberOfRows';

    const title = document.createElement('td');
    title.innerHTML = 'Fika';

    const number = document.createElement('td');
    number.innerHTML = `${data.fika.length}`;

    tr.appendChild(title);
    tr.appendChild(number);

    parentElement.appendChild(tr);

};

function render_numberOfFavourites(parent_id, data) {
    const parentElement = document.getElementById(parent_id);

    const tr = document.createElement('tr');
    tr.className = 'numberOfRows';

    const title = document.createElement('td');
    title.innerHTML = 'Favourites';

    //slår ihop både cafe ocg fika enteties och kör filter på den arrayen
    const number = document.createElement('td');
    number.innerHTML = `${
        [...STATE.cafes, ...STATE.fika].filter(item => item.favourite === true).length
    }`;

    tr.appendChild(title);
    tr.appendChild(number);

    parentElement.appendChild(tr);

};



