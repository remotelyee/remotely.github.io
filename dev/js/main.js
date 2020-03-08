
var count_fading_texts = 0;
var current_fading_text = new Array();
$('.fading-texts span').each(function(){
	var current_fading_element = $(this);
	count_fading_texts++;
	current_fading_text[count_fading_texts] = current_fading_element.html();
});
$('.fading-texts').before('<p class="fading-texts-container"></p>');
$('.fading-texts').hide();
var current_fading_no = 0;
$('.fading-texts-container').css({'opacity' : '0'});
function show_fading_texts() {
	current_fading_no++;
	if (current_fading_no > count_fading_texts) current_fading_no = 1;
	$('.fading-texts-container').html(current_fading_text[current_fading_no]).animate({opacity: 1.0}, 500);
	setTimeout(function() {
	  $('.fading-texts-container').animate({opacity: 0}, 500, show_fading_texts);
	}, 3000);
}
show_fading_texts();
