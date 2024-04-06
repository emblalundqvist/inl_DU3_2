function render_fikaPanel(parent_id) {
    const parentElement = document.getElementById(parent_id);
    const fikaPanelDiv = document.createElement('div');

    fikaPanelDiv.id = 'fikaPanel';
    parentElement.appendChild(fikaPanelDiv);

    render_fikaTitle('fikaPanel');
    render_fikaListingContainer('fikaPanel');
}