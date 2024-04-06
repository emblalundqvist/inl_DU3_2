function render_statsContainer(parent_id) {
    const parentElement = document.getElementById(parent_id);
    const statsContainer = document.createElement('table');

    statsContainer.id = 'statsContainer';
    parentElement.appendChild(statsContainer);

    render_numberOfCafes('statsContainer', STATE);
    render_numberOfFika('statsContainer', STATE);
    render_numberOfFavourites('statsContainer', STATE);
};

 // statsContainer.innerHTML = `
    //     <tr>
    //         <td>Cafes:</td>
    //         <td id>nummer</td>
    //     </tr>
    //     <tr>
    //         <td>Fika:</td>
    //         <td>nummer</td>
    //     </tr>
    //     <tr>
    //         <td>Favourites</td>
    //         <td>nummer</td>
    //     </tr>
    // `;




