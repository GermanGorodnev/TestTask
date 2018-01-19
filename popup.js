$(document).ready(function () {
    // load the list
    chrome.storage.sync.get(["obj"], (items) => {
        let obj = items.obj;
        for (let key in obj) {
            let col = obj[key].color;
            $(".main-table").append(`
                <tr>
                    <td>${obj[key].text}</td>
                    <td style='color:${col}'>${col}</td>
                </tr>
            `);
        }
    });
})