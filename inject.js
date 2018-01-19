chrome.storage.sync.get(["obj"], (items) => {
    colorize(items.obj);
});


function colorize(obj) {
    for (let key in obj) {
        let { text, color } = obj[key];
        repl = `<span style="background-color:${color}">${text}</span>`;

        $("body").find(`:contains(${text})`)
            .contents()
            .filter(function () {
                return this.nodeType === 3;
            })
            .replaceWith(function () {
                const me = $(this);
                return me.text().replace(text, repl);
            })
    }
}