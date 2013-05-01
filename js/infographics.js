Raphael(function () {

    var w = $('#holder').width();
    var h = $('#holder').height();
    var r = Raphael("holder", w, h);
    var padding = 5;
    var bg = r.path();

    function randomPath() {

        var length = Math.round(w/8);
        var path = "";
        var   x = 0;
        var   y = 0;

        for (var i = 0; i < length; i++) {
            curY = Math.round(Math.random() * (h-padding));

            if(i==0){
                path += "M0,"+h;
            }else if(i==(length -1)){
                path += ","+w+","+h;
            }else{
                x += Math.round(w/length);
                y = curY;
                path += "," + [x, y];
            }
        }
        return path;
    }

    bg.attr({path:randomPath(), stroke:'#ECF0F1', opacity: 1, fill:"#2C3E50"});

    var animation = function () {
        var anim = Raphael.animation({path: randomPath()}, 1000, "linear");
        bg.animate(anim);
    };
    animation();
    setInterval(function(){animation()}, 1000);
});