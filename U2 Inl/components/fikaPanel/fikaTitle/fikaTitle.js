function render_fikaTitle(parent_id) {
    const parentElement = document.getElementById(parent_id);
    const fikaTitleDiv = document.createElement('div');

    fikaTitleDiv.id = 'fikaTitle';
    parentElement.appendChild(fikaTitleDiv);

    fikaTitleDiv.textContent = 'Fika';
}