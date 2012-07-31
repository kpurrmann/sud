var debug = true;

$(document).ready(function(){
	var baseurl = $('head base').attr('href');

	//    Servicenavigation in Lightbox
	$('#service-navigation a:first').click(function(){
		var url = baseurl + $(this).attr("href") + "?type=98";
		$.colorbox({
			href: url,
			width: "420px",
			innerHeight: "277px",
			scrolling: false,
			title: false,
			transition: "none",
			opacity: "0.7",
			iframe: true
		});
		return false;
	});
    
	// Issuu Link
	$('#issuu-link').click(function(){
		var url = baseurl + $(this).attr("href") + "&type=98";
		$.colorbox({
			href: url,
			width: "1036px",
			innerHeight: "550px",
			scrolling: false,
			title: false,
			transition: "none",
			opacity: "0.7",
			iframe: true
		});
		return false;
	});
    
	if( $('#issuu-link').length > 0 && $('#issuu-kontakt').length > 0 ) {
		$('#issuu-link').trigger('click');
	}
    
	$('#content').css('min-height', ($(window).height() - 176));
	//    #Facebooklinks austauschen
	$('.news:not(.news-detail)').each(function(){
		var localText = $(this).find('div.news-content').html();
		var newText = localText.split('---');
		var localHref = $(this).find('.facebook-like a').attr('href');
		var newFb = '<div style="position:relative; top:0.5em; left:0;"><iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.stuermer-draenger.de%2F'+ localHref +'&amp;layout=button_count&amp;show_faces=true&amp;width=450&amp;action=like&amp;colorscheme=light&amp;height=30" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:120px; height:30px;" allowTransparency="true"></iframe></div>';
		$(this).find('div.news-content').html(newText[0] + '<a href="#mehr" class="more-link uppercase" title="Mehr anzeigen">&nbsp;Mehr</a>').append('<div class="hidden">' + newText[1] + '<a href="#weniger" class="less-link uppercase">&nbsp; Weniger</a></div>').append(newFb).removeClass('hidden');
	});
    
	if($('.news-detail').length > 0) {
		var localText = $('.news-detail').html().replace('---', '');
		$('.news-detail').html(localText);
	}
    
	$('.more-link').live('click', function(){
		$(this).parent().siblings('div.hidden:first').slideDown('fast');
		$(this).hide();
		return false;
	});
    
	$('.less-link').live('click', function(){
		$(this).parents('div.hidden').slideUp('fast');
		$(this).parents('div.news-content').find('.more-link').show();
		return false;
	});
    
    
	$('#kids').animate({
		'bottom': '10px'
	}, 2000, function(){

		});
    
	//    Hovereffekt bei Referentlisten
	$('a.reference, .costumer-list a').hover(function(){
		$(this).children('img').toggleClass('hidden');
		$(this).children('.reference-description').show(0);
	}, function(){
		$(this).children('img').toggleClass('hidden');
		$(this).children('.reference-description').hide(0);
	});
    
	//    REFERENZEN
	var status = 0;
	$('a.further-information-link, a.close-information').click(function(){
		$('#further-information').slideToggle();
		if(!status) {
			$('html, body').animate({
				'scrollTop' : '80'
			}, 1000, function(){
				status =  1;
			});
		} else {
			status = 0;
		}
		return false;
	});
    
	var itemsCount = $('.references img').length;
	var items = $('.references img');
	var imgWidth = '836px';
	if(itemsCount > 1) {
		$.each(items, function(index, value){
			$(this).attr('id', 'item-'+index);
			if(index == 0) {
				$(this).addClass('active');
				$('#reference-detail-navigation').append('<a class="active" href="#item-'+ index +'" title="'+ $(this).attr('alt') +'"><img src="fileadmin/images/ico-reference-detail-sel.png" alt="Icon ausgewählt"></a>');
			} else {
				$(this).css('left', imgWidth);
				$(this).css('display', 'block');
				$('#reference-detail-navigation').append('<a href="#item-'+ index +'" title="'+ $(this).attr('alt') +'"><img src="fileadmin/images/ico-reference-detail.png" alt="Icon ausgewählt"></a>');
			}
		});
	} else {
		$('a.next, a.previous').hide();
	}
    
	$('#reference-detail-navigation a').live('click', function(){
		var id = $(this).attr('href');
		$(this).siblings('.active').removeClass('active').find('img').attr('src', 'fileadmin/images/ico-reference-detail.png');
		$(this).addClass('active').find('img').attr('src', 'fileadmin/images/ico-reference-detail-sel.png');
		$('.references img.active').stop().animate({
			'left' : '-836px'
		}, 1000, function(){
			$(this).removeClass('active');
			$(this).css('left', '836px');
		})
		$(id).stop().animate({
			'left': 0
		}, 1000, function(){
			$(this).addClass('active');
		});
        
		return false;
	});
    
	$('.next').live('click', function(){
		$('#reference-detail-navigation a:eq(' + ($('.references img.active').next('img:first').index()) + ')').trigger('click');
		return false;
	});
    
	$('.previous').live('click', function(){
		$('#reference-detail-navigation a:eq(' + ($('.references img.active').prev('img:first').index()) + ')').trigger('click');
		return false;
	});
    
	//    AJAX REQUEST
	$('#main-navigation a, .back-link, .reference-list a').click(function(){
		var width = $('#content-holder').css('width');
		var link = $(this).attr('href');
        
		$('#content-holder > *').css('width', width);
		$('#content-holder').animate({
			'width': 0
		}, 800, function(){
			$(this).hide();
			$('#content-holder').load(link + ' #load', function(response, status, xhr) {
				if (status == 'success') {
					$(this).show(0);
					$(this).animate({
						'width' : width
					}, 800, function(){
						document.location = (link);
					});
				}
				if (status == "error") {
					var msg = "Sorry but there was an error: ";
					$("#error").html(msg + xhr.status + " " + xhr.statusText);
				}
			});
		});
		return false;
	});


	if($('#kids').length > 0) {
		setInterval(function(){
			$('#kids img:visible').fadeOut(1000, function(){
				$(this).siblings('img').fadeIn(500);
			})
		}, 7500);
		
	}
});

jQuery.extend({
	log : function (msg) {
		if ((!$.browser.msie) && (debug) ) {
			console.log("Log:", msg);
		}
		return;
	},
	getHeight : function () {
		return $(document).height();
	},
	getWidth : function (msg) {
		return $(document).width();
	},
	random: function(X) {
		return Math.floor(X * (Math.random() % 1));
	},
	randomBetween: function(min, max) {
		return min + jQuery.random(max - min + 1);
	}
});
