function goBack(path) {
    this.window.location.replace(path);
}

function doSecret() {
    $(".secret").one("click", function(e) {
        e.preventDefault();
        
        $("body").css({ backgroundColor: "#ff0000"})
        $(".text").css({ color: "#ffffff"})
        $(".text p, .secret span").text("ВЫХОДА НЕТ")
        
        $("#logo").animate({ opacity: 0}, 1000)
        $("#footer").animate({ opacity: 0}, 1000)
        $("").anim
    })
}

function prikol() {
    var rick = $("#rick")
    rick.prop("volume", 0.1)
    rick.trigger("play")
}