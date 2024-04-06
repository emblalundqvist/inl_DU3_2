function render_cafeTitle(parent_id) {
    const parentElement = document.getElementById(parent_id);
    const cafeTitleDiv = document.createElement('div');

    cafeTitleDiv.id = 'cafeTitle';
    parentElement.appendChild(cafeTitleDiv);

    cafeTitleDiv.textContent = 'Cafes';
    
}