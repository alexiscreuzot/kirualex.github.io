
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
// Hack to get less var
var getLessVar = function (name, prop) {
  var value = $('<div class="' + name + '"></div>').hide().appendTo('body').css(prop)
  $('.' + name).remove()
  return /^\d+/.test(value) ? +value : value
}

//
// Wiggly graph, my signature !
var Graphy = (function() {
  var w = $('#holder').width();
  var h = $('#holder').height();
  var r = Raphael("holder", w, h);
  var padding = 5;
  var bg = r.path();
  var refreshIntervalId;

  function randomPath() {
    var length = Math.round(w/8);
    var path = "";
    var   x = 0;
    var   y = 0;

    for (var i = 0; i < length; i++) {
        curY = Math.round(Math.random() * (h-padding));

        if(i==0){
            path += "M"+0+","+curY;
        }else if(i==(length -1)){
            path += ","+w+","+curY;
        }else{
            x += Math.round(w/length);
            y = curY;
            path += "," + [x, y];
        }
    }
    return path;
  }

  function animation() {
        var anim = Raphael.animation({path: randomPath()}, 100, "linear");
        bg.animate(anim);
    }

return { 
    animation :function () {
        animation();
    },startLoading : function(){
        refreshIntervalId = setInterval(function(){animation()}, 105);
    },stopLoading : function(){
        clearInterval(refreshIntervalId);
    },init : function(){
        bg.attr({path: randomPath(),stroke:getLessVar('myColor', 'color'), opacity: 1, fill:"none"});
    }
};
})();


Graphy.init();