document.getElementById('btn').addEventListener('click', () => {
    fetch(`http:localhost:3000/false`);
});

document.getElementById('btn_get').addEventListener('click', () => {
    chrome.tabs.query( {active:true, currentWindow:true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {message: 'getname'}, (content) => {
            if(!content){
                alert(`Cannot Get! Try Reload First! ${content}`);
                return;
            }
            document.getElementById('title').value = content
            fetch(`http:localhost:3000/update?room=${content}`);
        });
    });
});