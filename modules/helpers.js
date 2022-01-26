function $qs(selector) {
    //判斷是否為id selector
    if (selector.includes('#') && !selector.includes(' ')) {
        //回傳Element
        return document.querySelector(selector);
    }

    //回傳NodeList集合
    let nodelist = document.querySelectorAll(selector);

    return nodelist.length == 1 ? nodelist[0] : nodelist;
}
function $gg(selector) {
    // nodelist 至少包含一個node - Element object
    // 如果沒有符合的，則會是一個empty Nodelist
    let nodelist = document.querySelectorAll(selector)

    if (nodelist.length == 0) {
        return null
    }
    //      如果長度 = 1 回傳 nodelist[0] 否則 回傳整個nodelist
    return nodelist.length == 1 ? nodelist[0] : nodelist
}

function $crEl(element, text) {
    let el = document.createElement(element)

    // debugger
    //判斷 text 參數是否合規?
    if (typeof (text) !== "undefined" && typeof (text) !== "" && typeof (text) !== null) {
        el.innerText = text;
    }
    return el
}

function $getbyid(selector) {
    return document.getElementById(selector)


}

export { $qs, $crEl, $getbyid };