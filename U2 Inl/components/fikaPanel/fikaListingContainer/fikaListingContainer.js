function render_fikaListingContainer(parent_id) {
    const parentElement = document.getElementById(parent_id);
    const fikaListingContainer = document.createElement('table');

    fikaListingContainer.id = 'fikaListingContainer';
    parentElement.appendChild(fikaListingContainer);

    STATE.fika.forEach(function (fika) {
        render_row(fikaListingContainer, STATE.fika, fika);
    })
}