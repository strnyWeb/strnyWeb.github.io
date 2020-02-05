
/*
  Masked Input plugin for jQuery
  Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
  Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
  Version: 1.3.1
*/
(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);




 var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      var player, player2;

      function onYouTubeIframeAPIReady() { player = new YT.Player('player', { 
          videoId: '2XrOh8BH2Zs', 
          // playerVars: { 'controls': 0 }, 
          events: { 'onStateChange': onPlayerStateChange } });
          player2 = new YT.Player('player2', { 
          videoId: 'XMoyahQHe-M', 
          // playerVars: { 'controls': 0 }, 
          events: { 'onStateChange': onPlayerStateChange } }); }
      var done = false;

      function onPlayerStateChange(event) { if (event.data == YT.PlayerState.PLAYING && !done) { setTimeout(stopVideo, 92000); } }

      function stopVideo() { player.stopVideo(); }

      function playVideo() { player.playVideo(); }


      $('input[type=tel]').mask('+7(999) 999 99 99');

      $('.popup__close').on('click', function(){
        $(this).parents('.popup').fadeOut();
      })
      $('.openPopup').on('click', function(){
        let name = $(this).data('name'),
            formName = $('.popupFormName');

        formName.val(name);
        $('.popup__call').fadeIn();
      })

      $('.sendForm').on('click', function(e){
        e.preventDefault()
        let form = $(this).parent('form'),
            tel = form.find('input[type=tel]'),
            name = form.find('input[type=text]'),
            nameVal = $.trim(name.val()),
            calcResult = form.find('input[name=calcResult]'),
            testResult="",
            activetep = $('.culculator__step.active').index(); 


            
            if(activetep){
              $('.culculator__step input:checked').each(function(index, el) {
                testResult += $(el).attr('name')+': '+$(el).val()+'; '
              });
              calcResult.val('Пройден шаг '+(activetep)+'; И его результат: '+testResult)
            } else {
              calcResult.val('Тест не проходился')
            }
            // console.log(calcResult.val())


            if (tel.val().length == 0 || tel.val() == '+7 (___) ___-__-__' || tel.val().indexOf('_') > 0) {
               tel.addClass('error'); 
               tel.keyup(function(event) {
                 if (tel.val().length == 0 || tel.val() == '+7 (___) ___-__-__' || tel.val().indexOf('_') > 0) {
                   tel.addClass('error'); 
             
                  }  else { 
                    tel.removeClass('error'); 
                  }
               });
              }  else { 
                tel.removeClass('error'); 
              }

            if(nameVal===""){
               name.addClass('error'); 
               name.keyup(function(event) {
                let nameVal = $.trim(name.val());
                 if(nameVal===""){
                   name.addClass('error'); 
                 } else{
                    name.removeClass('error');
                 }
               });
             } else{
                name.removeClass('error');
             }

             form.find('.error').each(function(index, el) {
                  $(el).addClass('error__animate')
                  setTimeout(function() { 
                      $(el).removeClass('error__animate')
                   }, 500);
             });


        if(form.find('.error').length<1){
          
          let msg = form.serialize();
          $.ajax({
              type: 'POST',
              url: 'sntmail.php',
              data: msg,
              success: function(data) {
                  $('.popup').fadeOut();
                  form[0].reset();
                  $('.popup__thanks').fadeIn();
                   location="thanks";
              },
              error: function(data) {

              }
          });

        } else {
          console.log('not')
        }
        
      })


      $('.nextStep').on('click', function(){
          let step = $(this).parent('.culculator__step'),
              stepIndex = step.index(),
              stepRadio = step.find('input[type=radio]:checked')
              label = step.find('label'),
              maxStep = $('.culculator__step').length;

              
              if(stepRadio.length > 0){
                step.removeClass('active');
                $('.culculator__step:eq('+(stepIndex+1)+')').addClass('active');
                if((stepIndex+2)===maxStep){
                  timer()
                }
              } else {
                label.each(function(index, el) {
                  $(el).addClass('error__animate')
                  setTimeout(function() { 
                      $(el).removeClass('error__animate')
                   }, 500);
                });
              }
      })

      function timer(){
        let hour = $('.culculator__timer--number:eq(1)'),
            hourVal = +hour.text(),
            minutes = $('.culculator__timer--number:eq(2)'),
            minutesVal = +minutes.text()
            second = $('.culculator__timer--number:eq(3)'),
            secondVal = +second.text();

          --secondVal
          if(secondVal<0){
            secondVal=59;
            --minutesVal
            if(minutesVal<0){
              if(hourVal>0){
                minutesVal=59;
               --hourVal
              } else {
                return false
              }
              if(hourVal<0){
                hourVal=0
              }
            }
          }

          secondVal = timeNormalize(secondVal)
          minutesVal= timeNormalize(minutesVal)
          hourVal = timeNormalize(hourVal)

          second.text(secondVal)
          minutes.text(minutesVal)
          hour.text(hourVal)

          setTimeout(function() {
             timer()
           }, 1000);
      } 
      function timeNormalize(arr){
        if(arr<10){
          arr='0'+arr
        }
        return arr
      }


