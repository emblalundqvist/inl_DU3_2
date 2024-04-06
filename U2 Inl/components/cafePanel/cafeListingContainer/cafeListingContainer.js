function render_cafeListingContainer(parent_id) {
    const parentElement = document.getElementById(parent_id);
    const cafeListingContainer = document.createElement('table');

    cafeListingContainer.id = 'cafeListingContainer';
    parentElement.appendChild(cafeListingContainer);

    STATE.cafes.forEach(function (cafe) {
        render_row(cafeListingContainer, STATE.cafes, cafe);
    })
}

