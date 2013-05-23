var draw = function (w,h,r) {
    
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
                path += "M0,"+Math.round(h/2);
            }else if(i==(length -1)){
                path += ","+w+","+Math.round(h/2);
            }else{
                x += Math.round(w/length);
                y = curY;
                path += "," + [x, y];
            }
        }
        return path;
    }

    bg.attr({path:randomPath(), stroke:'#48c9b0', opacity: 1, fill:"#2C3E50"});

    var animation = function () {
        var anim = Raphael.animation({path: randomPath()}, 0.2, "linear");
        bg.animate(anim);
        //bg.attr({path:randomPath(), stroke:'#48c9b0', opacity: 1, fill:"#2C3E50"});
    };
    return animation;
    
};
var w = $('#holder').width();
var h = $('#holder').height();
var r = Raphael("holder", w, h);
var graphy = draw(w,h,r);