
/* jQuery Cycle Plugin
 * Documentation at: http://jquery.malsup.com/cycle/
 */
$(function() {
    $('#cycle1').cycle({
	fx: 'fade',
	speed: 1000,
	timeout: 6000,
	delay: -2000,
	activePagerClass: 'current',
	pager: $('#cycle1').parent().find('.pager')
    });
    
    $('#cycle2').cycle({
	fx: 'fade',
	speed: 1000,
	timeout: 6000,
	delay: 0,
	activePagerClass: 'current',
	pager: $('#cycle2').parent().find('.pager')
    });
    
    $('#cycle3').cycle({
	fx: 'fade',
	speed: 1000,
	timeout: 6000,
	delay: 2000,
	activePagerClass: 'current',
	pager: $('#cycle3').parent().find('.pager')
    });
});
