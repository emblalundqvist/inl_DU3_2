function render_cafePanel(parent_id) {
    const parentElement = document.getElementById(parent_id);
    const cafePanelDiv = document.createElement("div");

    cafePanelDiv.id = 'cafePanel';
    parentElement.appendChild(cafePanelDiv);

    render_cafeTitle('cafePanel');
    render_cafeListingContainer('cafePanel');
}