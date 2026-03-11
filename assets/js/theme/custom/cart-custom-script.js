let t, e, r; const o = { 1: 600, 2: 2e3, 3: 15e3, 4: 3e4, 5: 12e4 }, a = { 30: 'Spend £30 for free delivery' };
let l = 0, s = $("body"), n = $(".cart-progress-box");
function rP() {
    e !== o[1] && (e = null, l = 0, clearInterval(t), gCT())
}
function pC() {
    let r, a, s; l++, s = 5, a = Math.ceil(l / 5), r = Math.min(a, 5), o[r] !== e && (e = o[r], clearInterval(t), t = setInterval(gCT, e))
}
function gCT() {
    pC(), fetch("/api/storefront/cart", { credentials: "include" }).then((t => t.json())).then((t => {
        if (!t[0]) return void uP(0); let e = t[0].cartAmount || 0; e !== $("#cart-progress").attr("value") && uP(e)
    }))
}
function uP(t) {
    let e, r = $("#cart-progress"), o = $(".cart-bubble"), l = $("#cart-progress-remain"), ctr = $(".cart-truck");
    if (t > 0) { ctr.css("opacity", 1); }
    else { ctr.css("opacity", 1); }
    for ([tar, desc] of (r.attr("value", t), Object.entries(a)))
        if (tar > t) { e = tar - t; break }
    if (t == 0) {        
        let s = Math.min(100 / $("#cart-progress-container").attr("value") * t, 100);
        for (i of (r.css("width", s.toFixed(2) + "%"), o)) i.getAttribute("value") <= t ? i.style.backgroundColor = "#777" : i.style.backgroundColor = "#777"; l.html("Free delivery over £30"), sB();

    }
    else {
        if (t >= tar) return o.css("background-color", "#777"), r.css("width", "100%"), l.html("You've got free delivery"), ctr.css("opacity", 1), void hB();
        let s = Math.min(100 / $("#cart-progress-container").attr("value") * t, 100);
        for (i of (r.css("width", s.toFixed(2) + "%"), o)) i.getAttribute("value") <= t ? i.style.backgroundColor = "#777" : i.style.backgroundColor = "#777";
        l.html("Spend £" + e.toFixed(2) + "  for free delivery "), sB();
    }
}
function hB() {
    r || (r = setTimeout((() => { $(".cart-progress-box").css("bottom", "-3.5vh") }), 2e3))
}
function sB() {
    let t = $(".cart-progress-box"); clearTimeout(r), r = null, 0 != t.css("bottom") && t.css("bottom", 0)
}
function mB(t, e) {
    //let r = `<div class="cart-bubble" value="${t}" style="left: ${e}%;"></div>`; $("#cart-progress-container").append(r)
}
Object.entries(a).forEach((t => {
    mB(t[0], 100 / $("#cart-progress-container").attr("value") * t[0])
})), s.click(rP), s.on("keyup", rP), gCT();
