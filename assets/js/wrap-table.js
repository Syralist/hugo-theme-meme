// Wrap `<table>` to make it responsive
// Reference: https://github.com/stone-zeng/stone-zeng.github.io/blob/master/js/script.js

window.addEventListener("DOMContentLoaded", event => {
    document.querySelectorAll('table').forEach((e) => {
        e.outerHTML = `<div class="table-container">${e.outerHTML}</div>`;
    });
}, {once: true});
