$(document).ready(function() {
   	
	//placeholder
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        })
    });
		
	//
	$(".text-opener").click(function (){
		$(this).prev('.text-limit').toggleClass('open');
		$(this).text(function(i, text){
			return text === "развернуть текст" ? "свернуть текст" : "развернуть текст";
		})
		return false;
	});
	
	//
    $('select, .file-inp, .check input').styler();
	
	//range
	jQuery("#filter-slider").slider({
		min: 5500,
		max: 900000,
		values: [5500,765400],
		range: true,
		stop: function(event, ui) {
			jQuery("input#minCost").val(jQuery("#filter-slider").slider("values",0));
			jQuery("input#maxCost").val(jQuery("#filter-slider").slider("values",1));
		},
		slide: function(event, ui){
			jQuery("input#minCost").val(jQuery("#filter-slider").slider("values",0));
			jQuery("input#maxCost").val(jQuery("#filter-slider").slider("values",1));
		}
	});
	
	//
    $('.head-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
		dots: true,
        arrows: false
    });
	
	$('.slider-partns').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1
	});
	
	$('.tov-slider-f').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1 
	});
	
	$('.tov-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1  
	});
		
	$('.team-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1
	});
	
	$('.doc-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1 
	});
	
	
    //
    $('.fancy').fancybox();
	
	//	
	$('.js-open').click(function() {
	  $(this).hide();
	  $(this).parent().next('.info-more').slideDown(300);
	  return false;
    }); 
	
	//
	$(window).scroll(function() {	 
		if($(this).scrollTop() > 200) {
		$('.up').fadeIn(300);
		} else { 
		$('.up').fadeOut(300); 
		} 
	}); 
	$('.up').click(function() {
		$('body,html').animate({scrollTop:0 },800);
		return false;
    });
	
	//
	$('.deliv-list a, .ancors a').on('click', function(event){     
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top - 10}, 800);
	});

	//
	$(".scroll").mCustomScrollbar({
		axis:"y",
		scrollButtons:{enable:false},
		advanced:{autoExpandHorizontalScroll:true},
		scrollInertia: 0
	});

	//
	$(".acc .opener").click(function (){
		$(this).parent().parent().find('.opener').not($(this)).removeClass('active');
		$(this).parent().parent().find('.drop').not($(this).next('.drop')).hide();
		$(this).toggleClass('active');
		$(this).next('.drop').toggle();
		return false;
	});
	
	//.open-search
	$(".open-search").click(function (){
		$('.acc > li.hid').show();
		$(this).hide();
		$('.close-search').show();
		return false;
	});
	$(".close-search").click(function (){
		$('.acc > li.hid').hide();
		$(this).hide();
		$('.open-search').show();
		return false;
	});
	
	//js-open-pop
	$(".js-open-pop").click(function (){
		$('.search-pop').fadeIn(300);
		return false;
	});
	$(".search-pop .close").click(function (){
		$(this).parent('.search-pop').fadeOut(300);
		return false;
	});
	
	//
	$(".positions a").click(function (){
		$('.set-cont').toggle();
		return false;
	});

	
	//
	$('.numb').each(function() {  
	  var asd = $(this);  
	  asd.find('span.minus').click(function() {
	   var data = asd.find('input').val();
	   if(data > 0) {
		asd.find('input').val(parseInt(data) - 1);
	   }
	   return false
	  });  
	  asd.find('span.plus').click(function() {
	   var data = asd.find('input').val();
	   asd.find('input').val(parseInt(data) + 1);
	   return false
	  });	  
	});
	
	//
	function showDiv() {
		if ($(window).scrollTop() > 286 && $('.comparison').data('positioned') == 'false') {
			$(".comparison").hide().css({"position": "fixed"}).fadeIn(0).data('positioned', 'true');
			$(".comparison").addClass('fix');
		} else if ($(window).scrollTop() <= 286 && $('.comparison').data('positioned') == 'true') {
			$(".comparison").fadeOut(0, function() {
				$(this).css({"position": "relative"}).show();
				$(".comparison").removeClass('fix');
			}).data('positioned', 'false');
		}
		
		var he1 = $('.des-tovar').offset().top + $('.des-tovar').height();
		var he2 = $('.state-blocks').offset().top + $(".state-blocks").height() - $(".abs-block").height();
		
		if ($(window).scrollTop() > he1 && $(window).scrollTop() <= he2 && $('.abs-block').data('positioned') == 'false') {
			$(".abs-block").hide().css({"position": "fixed", "top":0}).fadeIn(0).data('positioned', 'true');
			$(".abs-block").addClass('fix');
			
		}
		if ($(window).scrollTop() > he1 && $(window).scrollTop() > he2) {
			$(".abs-block").css({"position": "absolute", "top":he2 -150}).data('positioned', 'false');
			$(".abs-block").removeClass('fix');
		}
		else if ($(window).scrollTop() <= he1 && $('.abs-block').data('positioned') == 'true') {
			$(".abs-block").fadeOut(0, function() {
				$(this).css({"position": "relative", "top":0}).show();
				$(".abs-block").removeClass('fix');
			}).data('positioned', 'false');
		}
	}
	$(window).scroll(showDiv);
	$('.comparison').data('positioned', 'false');
	$('.abs-block').data('positioned', 'false');
	
	//tabs
	$('.pane:first-child').addClass('active');
	$('.tabs li:first-child').addClass('active');
	$('.tabs li a').click(function() {
	  var idx = $(this).parent().index();
	  $('.pane').not($('.pane').eq(idx)).removeClass('active');
	  $('.pane').eq(idx).addClass('active');
	  $('.tabs li').removeClass('active');
	  $(this).parent('li').addClass('active');
	  return false;
    });
	
	//
	 $('.slider-for').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,		 
		  fade: true,
		  asNavFor: '.slider-nav',
		  arrows:true
		});
		$('.slider-nav').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.slider-for',
		  dots: false, 
		  arrows: false,
		  centerMode: false,
		  focusOnSelect: true,
		  infinite: false
		});
	$('.slider-nav').on('mouseenter', '.slick-slide', function (e) {
	var $currTarget = $(e.currentTarget), 
		index = $currTarget.data('slick-index'),
		slickObj = $('.slider-for').slick('getSlick');

	slickObj.slickGoTo(index);

	});
	
	//
	$(".more-par").click(function (){
		$('.table-ch .hid').show();
		$(this).hide();
		return false;
	});
	
	//show-map
	$(".show-map").click(function (){
		$(this).parents('.address-item').find('.map-hid').toggleClass('open');
		return false;
	});
	
	//brend
	$(".brend .more").click(function (){
		$(this).parents('.brend').find('li.hid').show();
		$(this).hide();
		return false;
	});
	
	//more-local
	$(".acc .more-local").click(function (){
		$(this).parent('.drop').find('.hid').toggle();
		return false;
	});
	
		
	// op-drop
	$(".op-drop").click(function (){
		$(this).parents('.state-in').find('.drop-block').toggle();
		return false;
	});
	
	//close-block
	$(".close-block").click(function (){
		$(this).next('.b-toggle').toggle();
		$(this).addClass('closed');
		return false;
	});
	
	//
	$(".b-toggle .show-all").click(function (){
		$(this).parents('.b-toggle').find('.state-in.hid').toggle();
		return false;
	});
	
	//
	$(".acc-li .opener").click(function (){
		$(this).next('.drop').toggle();
		$(this).toggleClass('active');
	});
	
});

