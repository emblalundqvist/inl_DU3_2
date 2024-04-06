
// med css-koden (.listing mm)
// skapar instanser till table, tr i detta fallet, ich
// med css-koden (.listing mm) ändras färg på ★ 
// Fungerar för både både cafe och fika, därav slipper vi upprepning av två snarlika funktioner
// Bryta ut trash för att funktionen bara ska te emot två argument ist för tre ??


function render_row(container, arrayOfAllEntities, entity) {
    const tr = document.createElement('tr');
    tr.className = 'listing';

    const title = document.createElement('td');
    title.innerHTML = entity.title;

    const rank = document.createElement('td');
    rank.innerHTML = entity.rank;

    const favourite = document.createElement('td');
    favourite.innerHTML = '★';
    favourite.addEventListener('click', () => {
        entity.favourite = !entity.favourite;
        renderApp();
    });
    
    favourite.classList.add(entity.favourite ? 'isFavourite' : 'notFavourite');
    // gör samma sak som: 
    // if (entity.favourite === true) {
    //     favourite.classList.add('isFavourite')
    // }
    // else {
    //     favourite.classList.add('notFavourite')
    // }

    const trash = document.createElement('td');
    trash.innerHTML = '྾';
    trash.id = 'trash';
    trash.addEventListener('click', () => {
        const indexToRemove = arrayOfAllEntities.findIndex((item) => {
            return item.id === entity.id;
        });
        arrayOfAllEntities.splice(indexToRemove, 1);
        renderApp();
    });
    
    tr.appendChild(title);
    tr.appendChild(rank);
    tr.appendChild(favourite);
    tr.appendChild(trash);
    container.appendChild(tr);
};

