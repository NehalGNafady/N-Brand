/*global $,alert,console*/

$(function () {
    
    'use strict';
    
	//adjust header height
	
    var myHeader = $('.header'),
		
        mySlider = $('.bxslider');
	
    myHeader.height($(window).height());
	
    $(window).resize(function () {
		
        myHeader.height($(window).height());
    });
    
        //links add active class
    $('.links li').click(function () {
		
        $(this).parent().addClass('active').siblings().removeClass('active');
   
        mySlider.each(function () {
			
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        });
    
    });
    
    //adjust bxslider list item center
    mySlider.each(function () {
		
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });
    
    //trigger the bx slider
    mySlider.bxSlider({
		
        pager: false
		
    });
    
    //smooth scroll to div
    $('.links li a').click(function () {
		
        $('html,body').animate({
			
            scrollTop: $('#' + $(this).data('value')).offset().top
			
        }, 1000);
		
    });
    
    //our auto slider code
    (function autoSlider() {
        $('.slider .active').each(function () {
        
            if (!$(this).is(':last-child')) {
				
                $(this).delay(3000).fadeOut(1000, function () {
					
                    $(this).removeClass('active').next().addClass('active').fadeIn();
               
                    autoSlider();
           
                });
         
            } else {
              
                $(this).delay(3000).fadeOut(1000, function () {
                    
					$(this).removeClass('active');
        
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
					autoSlider();
                                  
                });
            }
        });
    }());
    
    // trigger mixitup
    $('#Container').mixItUp();
	
    /// adjust shuffle links
    $('.shuffle li').click(function () {
		
	    $(this).addClass('selected').siblings().removeClass('selected');
 
    });
    
    //trigger nice scroll
    $('html').niceScroll({
		
        cursorcolor: '#aa206b',
        
		cursorwidth: '6px',
        
		cursorborder: '1px solid #aa206b',
        
		cursorborderradius: 0
    });
    
    
});
