/*Inhouse js*/

$(document).ready(function(){

//Mobile Nav open-close action
    
    $('.mobileNavIcon').bind('click', function(){
        
    var $mobileNavVisibility = jQuery(this).parent();
        $('.mobileNavIcon').toggleClass('mobileNavIconClose'); 
        $mobileNavVisibility.find('.navItems').toggleClass('show', 1000);
    });
    
//Contacto Accordion for each section, this toggle the open-close and change the + - icon.
    
    $('.accordionOpener').bind('click', function(){
        var $section = jQuery(this).parent();
        if(($section).siblings().hasClass('is-expanded')){
            
            $('.submenu').slideUp('fast');
            $section.siblings().removeClass('is-expanded');
        };
        $section.find('.submenu').slideToggle('fast');
        // apply the toggle to the ul
        $section.toggleClass('is-expanded', 5000000);
        if($section.hasClass("is-expanded")){
            $section.find( "span.plusSimbol" ).html("-");
        }else{
            $section.find( "span.plusSimbol" ).html("+");
        }
        event.preventDefault();
        
    });//accordionOpener end
    
});//Document ready end