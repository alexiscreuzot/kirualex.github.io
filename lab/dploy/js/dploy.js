$(document).ready(function() {
    $('.dropzone').click(function(){
        $('.dropzone').toggleClass('uploading');
        $('.dropzone').toggleClass('in');
        if ($(".dropzone.finished")[0]){
           $('.dropzone').toggleClass('finished');
        }else{
            setTimeout(function() {
               $('.dropzone').toggleClass('finished');
               $('#build_link').focus();
               $('#build_link').select();
            }, 3000);
        }

    });
});
$(document).bind('dragover', function (e) {
    var dropZone = $('.dropzone'),
    timeout = window.dropZoneTimeout;
    if (!timeout) {
        dropZone.addClass('in');
    } else {
        clearTimeout(timeout);
    }
    if (e.target === dropZone[0]) {
        dropZone.addClass('hover');
    } else {
        dropZone.removeClass('hover');
    }
    window.dropZoneTimeout = setTimeout(function () {
        window.dropZoneTimeout = null;
        dropZone.removeClass('in hover');
    }, 100);
});
