/**
 * Module livre d'or
 * @author Alexis Creuzot
 */

/*jslint */
/*global $, Titanium, console, setTimeout, window, document, navigator, event, Image, alert */

/**
* Variables
*/
var options = {
        drawOnly: true,
        lineWidth: 0,
        background : 'transparent'
    },
    penButton = $('#button_pen'),
    commentArea = $('#comment'),
    output = $('.output'),
    handButton = $('#button_hand'),
    canvasArea = $('#sigPad canvas'),
    clearButton = $('#button_clear'),
    nextButton = $('#button_next'),
    editor  = $('#sigPad').signaturePad(options);

/**
* Comment section events
*/
function initCommentArea() {
    'use strict';
    
    // Remove pen button when comment area is touched
    commentArea.bind('touchstart click', function (event) {
        penButton.remove();
        handButton.addClass('bouncy');
        event.stopPropagation();
    });
    
    commentArea.keydown(function () {
        Titanium.App.fireEvent('module_touch_event');
    });
}

/**
* Signature section events
*/
function initSignatureArea() {
    'use strict';
    
    // Canvas touched
    canvasArea.bind('touchstart mousedown', function () {
        handButton.remove();
        clearButton.fadeIn();
        Titanium.App.fireEvent('module_touch_event');
    });
        
    // Clear canvas
    clearButton.bind('touchstart mousedown', function () {
        editor.clearCanvas();
        nextButton.removeClass('slidy');
        Titanium.App.fireEvent('module_touch_event');
    });

    // Animate next button
    canvasArea.bind('touchend click', function () {
        nextButton.addClass('slidy');
        Titanium.App.fireEvent('module_touch_event');
    });
}

/**
* Send module data to iDol
*/
function initNext() {
    'use strict';
    
    var objToSend = {};
    
    // Send module data to exit
    nextButton.click(function () {
        
        objToSend = {
            comment : commentArea.val(),
            misc : output.val()
        };
        
        Titanium.App.fireEvent('module_output_event', {
            misc : objToSend
		});
    });
}

/**
* Launch when page ready
*/
$(document).ready(function () {
    'use strict';
    
    // We don't want no motion !
    document.ontouchmove = function (event) {
        event.preventDefault();
    };
    
    $(document).bind('touchstart mousedown', function () {
        document.activeElement.blur();
        commentArea.blur();
        Titanium.App.fireEvent('module_touch_event');
    });
    
    initCommentArea();
    initSignatureArea();
    initNext();
});