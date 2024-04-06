function render_controlPanel(parent_id) {
    const parentElement = document.getElementById(parent_id);
    const controlPanelDiv = document.createElement("div");
   
    controlPanelDiv.id = 'controlPanel';
    parentElement.appendChild(controlPanelDiv);

    render_addThingContainer('controlPanel');
    render_statsContainer('controlPanel');

}