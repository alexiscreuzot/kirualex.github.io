/*
 * Leclerc vote module
 * @author Alexis Creuzot
 */

/*jslint */
/*global $, Titanium, console, setTimeout, window, document, navigator, event, context:true, nb_max_votes:true */


// Variables
var vote_stack = [];
var nb_elem = context.details.length;
// UserAgent determination
var isMobile = new RegExp('/iphone|ipad|ipod|android|blackberry/i').test(navigator.userAgent.toLowerCase());


/**
* Return if element has been voted or not
*/
function voted(index) {
    'use strict';
    var i = 0;
	for (i in vote_stack) {
		if (vote_stack[i] === index) {return true; }
	}
	return false;
}

/**
* Refresh buttons
*/
function refreshUI(index) {
    'use strict';
	// Display status 
    $('#max_votes').text(nb_max_votes);
    $('#nb_elem').text(nb_elem);
    $('#nb_left').text(nb_max_votes - vote_stack.length);

	// Vote button + thumb overlay
	if (voted(index)) {
		$('#vote_button')
			.attr('src', 'img/previews/preview_' + index + '.png')
			.attr('class', 'voted')
			.attr('onClick', 'unvote(' + index + ')');
		$('#thumb' + index).addClass('voted');
	} else {
		$('#vote_button')
			.attr('class', 'normal')
			.attr('onClick', 'vote(' + index + ')');
        $('#thumb' + index).removeClass('voted');
	}

	// Next
	if (vote_stack.length === nb_max_votes) {
		$('#next_button').attr('class', 'active');
	} else {
		$('#next_button').removeAttr('class');
	}
}

/**
* Show pop up
*/
function showPopup(b) {
    'use strict';
	if (b) {
		$('#popup_details').addClass('show').css('z-index', 999);
		$('#details').addClass('show');
	} else {
        $('#popup_details').removeClass('show');
        $('#details').removeClass('show');
        setTimeout(function () {
            $('#popup_details').css('z-index', -1);
            Titanium.App.fireEvent('module_touch_event');
        }, 300);
	}
}

/**
* Display details
*/
function toggleDetails(index) {
    'use strict';
	if (index) {
	    
	  // Populate details
		$('#desc').text('Photo n°' + index + ', ' + context.details[index - 1].type);
		var image = $('#preview').attr('src', 'img/previews/preview_' + index + '.jpg');
		
		if (image.prop('complete')) {
			// Show popup
			showPopup(true);
		} else {
			image.load(function () {
				// Show popup
				showPopup(true);
			});
		}

		refreshUI(index);
	} else {
		showPopup(false);
	}
	Titanium.App.fireEvent('module_touch_event');
}


/**
* Populate list
*/
function populateList() {
    'use strict';
    var i = 1,
        thumb_base;
    
	for (i; i <= nb_elem; i += 1) {
		// Construct element based on thumb_base
		thumb_base = $('#thumb_base').clone();
		thumb_base.children('.thumb_img')
			.css('background-image', 'url(./img/thumbnails/thumb_' + i + '.jpg)')
			.attr('onclick', 'toggleDetails(' + i + ')');
		thumb_base.find('.overlay').attr('id', 'overlay' + i);
		thumb_base.attr('id', 'thumb' + i).show();

		// Append to list
		$('#liste').append(thumb_base);
	}
}


/**
* Vote
*/
function vote(index) {
    'use strict';
    var unvote_index;
    
	// Remove first voted and add new one
	if (vote_stack.length >= nb_max_votes) {
		// Update vote_stack
		unvote_index = vote_stack.shift();

		// Refresh UI
		refreshUI(unvote_index);
	}

	// Update vote_stack
	vote_stack.push(index);
	console.log(vote_stack);

	// Refresh UI
	refreshUI(index);

	// Close
	setTimeout(function () {
		showPopup(false);
	}, 400);
}

/**
* unvote
*/
function unvote(index) {
    'use strict';
    var vote_index;
    
	// Update vote_stack
	vote_index = vote_stack.indexOf(index);
	vote_stack.splice(vote_index, 1);
	console.log(vote_stack);
	
	// Refresh UI
	refreshUI(index);

	// Close
	setTimeout(function () {
		showPopup(false);
	}, 400);
}

/**
* send results
*/
function sendResults() {
    'use strict';
    var votes = [],
        i = 0;
    
	if (vote_stack.length === nb_max_votes) {

		// Send results
		Titanium.App.fireEvent('module_output_event', {
			context : context,
			winner : false,
			message : {
				votes : votes
			}
		});
	} else {
		$('#alert_nb').show();
	}

	Titanium.App.fireEvent('module_touch_event');
}


/**
* Init module
*/
function startModule(param) {
    'use strict';
	if (param) {
		context = param;
	}
	
    refreshUI(-1); //Init
    populateList();
}

/**
* OnLoad
*/

$(document).ready(function () {
    'use strict';
    
    $(document).ontouchmove = function (event) {
        event.preventDefault();
    };
    
    $('#details').mouseover(function (event) {
        event.stopPropagation();
    });
    
    $('#popup_details, #close_button').click(function () {
        toggleDetails();
    });
    
    $('#next_button').click(function () {
        sendResults();
    });
    
    startModule();
});