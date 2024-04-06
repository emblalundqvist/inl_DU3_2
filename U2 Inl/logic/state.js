const STATE = {
    cafes: [
        {
            id: 1,
            title: 'Mormors Stenugnsbageri',
            rank: 7,
            favourite: false,
        }
    ],
    fika: [
        {
            id:1,
            title: 'Kardemummabulle',
            rank: 10,
            favourite: false,
        }
    ],
};

function renderApp() {
    document.getElementById("app").innerHTML = '';
    
    render_controlPanel("app");
    render_cafePanel("app");
    render_fikaPanel("app");
}

renderApp();