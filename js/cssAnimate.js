/*
 * jQuery Css Animate Plugin (cssAnimate)
 * Author - Hamza Emre
 * Web - hamzaemre.com
 * Mail - hamzaemre0@gmail.com
 * Version - 1.0
*/

(function($) {
  "use strict";
   
  $.fn.cssanimate = function(options) {
    var option = $.extend({
      effect : "bounce",
      infinite : false,
      action : "none",
      debug : false,
      autocolor: false,
      duration: 5
    }, options);
    

    /* Colorize */
    $.andcolor = function()
    {
        return ( Math.floor( Math.random() * 256 ) ) + ',' + ( Math.floor( Math.random() * 256 ) ) + ',' + ( Math.floor( Math.random() * 256 ) );
    }
    /* Colorize */


    return $(this).each(function() {
      var main = $(this);

      // Debug
      if ( option.debug ){

        var actions = ['none','click','mouseenter','dblclick','mouseover','mousemove'];
        if ( jQuery.inArray(option.action, actions) == -1 ){
          alert( option.action + " adında bir event tanımı yapamazsınız!\n[" + actions.join(', ') + "]");
        }

        var effects = [
          'none',
          'bounce',
          'flash',
          'pulse',
          'rubberBand',
          'shake',
          'swing',
          'tada',
          'wobble',
          'jello',
          'bounceIn',
          'bounceInDown',
          'bounceInLeft',
          'bounceInUp',
          'bounceOut',
          'bounceOutDown',
          'bounceOutLeft',
          'bounceOutRight',
          'bounceOutUp',
          'fadeIn',
          'fadeInDown',
          'fadeInDownBig',
          'fadeInLeft',
          'fadeInLeftBig',
          'fadeInRight',
          'fadeInRightBig',
          'fadeInUp',
          'fadeInUpBig',
          'fadeOut',
          'fadeOutDown',
          'fadeOutDownBig',
          'fadeOutLeft',
          'fadeOutLeftBig',
          'fadeOutRight',
          'fadeOutRightBig',
          'fadeOutUp',
          'fadeOutUpBig',
          'flipInX',
          'flipInY',
          'flipOutX',
          'flipOutY',
          'lightSpeedIn',
          'lightSpeedOut',
          'rotateIn',
          'rotateInDownLeft',
          'rotateInDownRight',
          'rotateInUpLeft',
          'rotateInUpRight',
          'rotateOut',
          'rotateOutDownLeft',
          'rotateOutUpLeft',
          'rotateOutUpRight',
          'hinge',
          'rollIn',
          'rollOut',
          'zoomIn',
          'zoomInDown',
          'zoomInLeft',
          'zoomInRight',
          'zoomInUp',
          'zoomOut',
          'zoomOutDown',
          'zoomOutLeft',
          'zoomOutRight',
          'zoomOutUp',
          'slideInDown',
          'slideInLeft',
          'slideInRight',
          'slideInUp',
          'slideOutDown',
          'slideOutLeft',
          'slideOutRight',
          'slideOutUp'];
        if ( jQuery.inArray(option.effect, effects) == -1 ){
          alert( option.effect + " adında bir efekt tanımı yapamazsınız!\n[" + effects.join(', ') + "]");
        }
      }
      // Debug

      if( option.infinite === true ) {
        var animate = 'animated infinite ' + option.effect;
      }else if ( option.infinite === false ) {
        var animate = 'animated ' + option.effect;
      }
      var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      
      if( option.action === 'click' ) {
          main.click(function () {
             if( option.autocolor === true ) {
              main.css( "background","rgb(" + $.andcolor() + ")" );
              main.css({
                "-webkit-transition-duration": ""+ option.duration +"s",
                "transition-duration": ""+ option.duration +"s"
              });
             }
             main.addClass(animate).one(animationend, function() {
              main.removeClass(animate);
            });
          });
      }else if ( option.action === 'mouseenter' ) {
          main.mouseenter(function () {
            if( option.autocolor === true ) {
              main.css( "background","rgb(" + $.andcolor() + ")" );
              main.css({
                "-webkit-transition-duration": ""+ option.duration +"s",
                "transition-duration": ""+ option.duration +"s"
              });
             }
            main.addClass(animate).one(animationend, function() {
              main.removeClass(animate);
            });
          });
      }else if ( option.action === 'dblclick' ) {
          main.dblclick(function () {
            if( option.autocolor === true ) {
              main.css( "background","rgb(" + $.andcolor() + ")" );
              main.css({
                "-webkit-transition-duration": ""+ option.duration +"s",
                "transition-duration": ""+ option.duration +"s"
              });
             }
            main.addClass(animate).one(animationend, function() {
              main.removeClass(animate);
            });
          });
      }else if ( option.action === 'mouseover' ) {
          main.mouseover(function () {
            if( option.autocolor === true ) {
              main.css( "background","rgb(" + $.andcolor() + ")" );
              main.css({
                "-webkit-transition-duration": ""+ option.duration +"s",
                "transition-duration": ""+ option.duration +"s"
              });
             }
            main.addClass(animate).one(animationend, function() {
              main.removeClass(animate);
            });
          });
      }else if ( option.action ==='none' ) {
          if( option.autocolor === true ) {
              main.css( "background","rgb(" + $.andcolor() + ")" );
              main.css({
                "-webkit-transition-duration": ""+ option.duration +"s",
                "transition-duration": ""+ option.duration +"s"
              });
             }
          main.addClass(animate).one(animationend, function() {
            main.removeClass(animate);
          });
      }else if ( option.action ==='mousemove' ) {
          if( option.autocolor === true ) {
              main.css( "background","rgb(" + $.andcolor() + ")" );
              main.css({
                "-webkit-transition-duration": ""+ option.duration +"s",
                "transition-duration": ""+ option.duration +"s"
              });
             }
          main.addClass(animate).one(animationend, function() {
            main.removeClass(animate);
          });
      }

    });
  }
})(jQuery);