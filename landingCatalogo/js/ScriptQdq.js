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
       var $section=$(this).parents('section'),
           
           $wrapper=$section.parents('.contactWrapper');
            $('.submenu', $wrapper).slideUp('fast');
            $('.submenu', $section).slideToggle('fast');
            $("span.plusSimbol", $wrapper).html('+');
            $("span.plusSimbol", $section).html('-');
 
   });//accordionOpener end
    
  $(".fotoVideoListItem").hover(function(){
  $(".fotoVideoItemInfo", this).toggleClass('show',1000);
});
 
    
});//Document ready end