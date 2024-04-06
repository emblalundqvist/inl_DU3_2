function update_state(entities) {
    if (inputSelect.value == '0') {
        return
    }

    if(inputText.value.trim() === '') {
        return
    }

    const newRow = {
        id: entities.reduce((prev, curr) => {
            return prev.id > curr.id ? prev : curr
        }).id + 1,
        // crypto.randomUUID(), ?? Enklare, unikt id varje gång
        title: inputText.value,
        rank: parseInt(inputSelect.value),
        favourite: false,
    };

    entities.push(newRow);
    renderApp();
}

//Funktionen tar emot entities, i vilka anropen skickar med antingen
// cafe eller fika som argument. Detta gör att funktionen 
// fungerar för både cafe och fika = minde kod :)