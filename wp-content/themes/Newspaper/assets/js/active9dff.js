(function($){"use strict";jQuery(document).ready(function($){$('[data-toggle="tooltip"]').tooltip();$(window).on('scroll',function(){var scroll=$(window).scrollTop();if(scroll<150){$(".navbar").removeClass("sticky");}else{$(".navbar").addClass("sticky");}});var owl=$('.owl-carousel');owl.owlCarousel({loop:false,nav:false,dots:true,margin:30,lazyLoad:true,autoplayHoverPause:true,responsive:{0:{items:1},480:{items:1},640:{items:2},768:{items:2},992:{items:4},1200:{items:4},1440:{items:4}}})
var map;map=new GMaps({el:'#map',zoom:16,lat:-12.043333,lng:-77.028333,scrollwheel:false});map.addControl({position:'top_right',content:'Geolocate',style:{margin:'5px',padding:'1px 6px',border:'solid 1px #717B87',background:'#fff'},events:{click:function(){GMaps.geolocate({success:function(position){map.setCenter(position.coords.latitude,position.coords.longitude);},error:function(error){alert('Geolocation failed: '+error.message);},not_supported:function(){alert("Your browser does not support geolocation");}});}}});$('body').scrollspy({target:'.navbar-collapse',offset:100});var wow=new WOW({animateClass:'animated',offset:100,callback:function(box){console.log("WOW: animating <"+box.tagName.toLowerCase()+">")}});wow.init();document.getElementById('header_section').onclick=function(){var section=document.createElement('section');section.className='section--purple wow fadeInDown';this.parentNode.insertBefore(section,this);};$('.timer').countTo();$('.couner-time').appear(function(){$('.timer').countTo();},{accY:-200});});}(jQuery))