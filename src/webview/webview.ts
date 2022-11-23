//import jQuery from "./demo";

function delays(namespace, name, timeout, func) {
    if (namespace[name] != null)
        clearTimeout(namespace[name]);

    namespace[name] = setTimeout(func, timeout);
}

const $container = document.querySelector(".container");

$container.innerHTML = String("webview");