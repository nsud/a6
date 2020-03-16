let prog = $("#pr").width();
let add = 0;

function bt1() {
    add = parseInt($("button[type=button][id=bt1]").val());
}
function bt3() {
    add = parseInt($("button[type=button][id=bt3]").val());
}
function bt7() {
    add = parseInt($("button[type=button][id=bt7]").val());
}

function progress() {
    $("button[type=button]").click(function () {
        prog += add;
        console.log(prog)
        $("#pr").css({'width': `${prog}%`})
    })
}
console.log(prog, add)
progress()
