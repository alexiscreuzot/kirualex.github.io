
//
// Analytics

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-41264154-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

//
// Graph stuff
var getLessVar = function (name, prop) {
  var value = $('<div class="' + name + '"></div>').hide().appendTo('body').css(prop)
  $('.' + name).remove()
  return /^\d+/.test(value) ? +value : value
}

var refresh_graph = function (w,h,r) {

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

    bg.attr({path:randomPath(), stroke:getLessVar('myColor', 'color'), opacity: 1, fill:"none"});

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

//
// Handler on page change
var clicky = refresh_graph(w,h,r);


