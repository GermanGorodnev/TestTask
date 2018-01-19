chrome.windows.onCreated.addListener(() => {
    fetch(chrome.runtime.getURL("words.json"))
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            chrome.storage.sync.set({
                obj: json
            })
        })
        .catch((e) => {
        });
});
