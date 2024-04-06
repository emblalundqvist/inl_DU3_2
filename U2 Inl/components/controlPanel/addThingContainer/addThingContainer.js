function render_addThingContainer(parent_id) {
    const parentElement = document.getElementById(parent_id);

    const addThingContainer = document.createElement("div");
    addThingContainer.id = 'addThingContainer';

    //skapar container för input och select
    const inputDataContainer = document.createElement('div');
    inputDataContainer.id = 'inputDataContainer';

        //skapar input 
        const inputText = document.createElement('input');
        inputText.id = 'inputText';
        inputText.setAttribute('placeholder', 'Title: Cafe or Fika');

        //skapar select och array för att få options
        // om rate = false visas Välj, om rate = true visas rate :)
        const inputSelect = document.createElement('select');
        inputSelect.id = 'inputSelect';
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((rate) => {
            const option = document.createElement('option');
            option.setAttribute('value', rate);
            option.innerHTML = rate || 'Välj...';
            inputSelect.appendChild(option);
        });
      
    // skapar button
    const cafeButton = document.createElement('button');
    cafeButton.id = 'cafeButton';
    cafeButton.innerHTML = 'CAFE';

    // Klick -> anropar update_state som lägger till nytt cafe i STATE
    cafeButton.addEventListener('click', ()=> {
        update_state(STATE.cafes);
    });
    
    // skapar button
    const fikaButton = document.createElement('button');
    fikaButton.id = 'fikaButton';
    fikaButton.innerHTML = 'FIKA';
    
    // Klick -> anropar update_state som lägger till nytt fika i STATE
    fikaButton.addEventListener('click', () => {
        update_state(STATE.fika);
    });

    inputDataContainer.appendChild(inputText);
    inputDataContainer.appendChild(inputSelect);
    addThingContainer.appendChild(inputDataContainer);
    addThingContainer.appendChild(cafeButton);
    addThingContainer.appendChild(fikaButton);
    parentElement.appendChild(addThingContainer);
}



