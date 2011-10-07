$(document).ready(function() {


/* SCRIPT PRINT */


$(".PrintAll").live("click", function () {
$(".FAQ .Accordeon div").css("display",'block');
window.print();
$(".FAQ .Accordeon div").css("display",'none');
})




/* SCRIPT MENU SELECT HOME */

$('#langues').mSelect();


/* SCRIPT PAGE ABONNEMENT & ALERTE */



    $("#dejamembre").live("submit",function() {

    erroremail=false;
    errorepass=false;
    email =$("#email").val();
     if (email == "" || !isValidEmailAddress(email)) {
        $("#email").parent().find("label").css("color","#ff0000");
        erroremail=true;
         }
        else {
        $("#email").parent().find("label").css("color","#6D6D6D");
        erroremail=false;
        }

    if ($("#pass").val() == "") {
        $("#pass").parent().find("label").css("color","#ff0000");
        errorepass=true
         }
        else {
        $("#pass").parent().find("label").css("color","#6D6D6D");
        errorepass=false;
        }
        if (erroremail || errorepass) {
         return false;
        }
    });


	$("#forgetpassword").live("submit",function() {

    erroremail=false;
    email =$("#adresseEmail").val();
     if (email == "" || !isValidEmailAddress(email)) {
        $("#adresseEmail").parent().find("label").css("color","#ff0000");
        return false;
         }

    });


    $("#suppressionprofil").live("submit",function() {

		erroremail=false;
		errorepass=false;
		email =$("#email").val();
		 if (email == "" || !isValidEmailAddress(email)) {
			$("#email").parent().find("label").css("color","#ff0000");
			erroremail=true;
		 }
		else {
			$("#email").parent().find("label").css("color","#6D6D6D");
			erroremail=false;
		}

		if ($("#motdepasse").val() == "") {
			$("#motdepasse").parent().find("label").css("color","#ff0000");
			errorepass=true
		 }
		else {
			$("#motdepasse").parent().find("label").css("color","#6D6D6D");
			errorepass=false;
		}
		if (erroremail || errorepass) {
			 return false;
        }

		return confirm ("Confirmez-vous la suppression de votre profil ?");
    });



 $("#pasEncoreMembre").live("submit",function() {
    errorNom=false;
    erroremail=false;
    errorpass=false;
     if ($("#Nom").val() == "") {
        $("#Nom").parent().find("label").css("color","#ff0000");
        errorNom=true;
         }
        else {
        $("#Nom").parent().find("label").css("color","#6D6D6D");
        errorNom=false;
        }

    if ($("#motdepasse").val() == "" ||  $("#motdepasse2").val() == "" || $("#motdepasse2").val() != $("#motdepasse").val()) {
        $("#motdepasse").parent().find("label").css("color","#ff0000");
        $("#motdepasse2").parent().find("label").css("color","#ff0000");
        errorpass=true;

            if ($("#motdepasse2").val() != $("#motdepasse").val() && $("#motdepasse").val() != "" && $("#motdepasse2").val() != "") {
                var msgTip = "Merci de saisir le même mot de passe";
                var ValLabel="error_mdp";
                    $('body').append('<div class="erreurChps"  id="'+ValLabel+'">'+  msgTip +'</div>');
                        var pos = $("#motdepasse2").offset();
                        $("#"+ValLabel).css( { "left": (pos.left -15) + "px", "top":pos.top - 25 + "px" } );
                        $("#"+ValLabel).fadeIn('slow', function() {
                            $("#motdepasse2").focus(function(){
                                $("#"+ValLabel).remove();
                            })
                        });

            }


         }
        else {
        $("#motdepasse").parent().find("label").css("color","#6D6D6D");
        $("#motdepasse2").parent().find("label").css("color","#6D6D6D");
        errorpass=false;
        }

     email =$("#adresseEmail").val();
     if (email == "" || !isValidEmailAddress(email)) {
        $("#adresseEmail").parent().find("label").css("color","#ff0000");
        erroremail=true;
    }
    else {
        $("#adresseEmail").parent().find("label").css("color","#6D6D6D");
        erroremail=false;
        }

        if (errorpass || errorNom || erroremail) {
         return false;
        }
    });


 $("#monprofil").live("submit",function() {
    errorNom=false;
    erroremail=false;
    errorpass=false;
     if ($("#Nom").val() == "") {
        $("#Nom").parent().find("label").css("color","#ff0000");
        errorNom=true;
         }
        else {
        $("#Nom").parent().find("label").css("color","#6D6D6D");
        errorNom=false;
        }

    if ($("#motdepasse").val() == "" ||  $("#motdepasse2").val() == "" || $("#motdepasse2").val() != $("#motdepasse").val()) {
        $("#motdepasse").parent().find("label").css("color","#ff0000");
        $("#motdepasse2").parent().find("label").css("color","#ff0000");
        errorpass=true;

            if ($("#motdepasse2").val() != $("#motdepasse").val() && $("#motdepasse").val() != "" && $("#motdepasse2").val() != "") {
                var msgTip = "Merci de saisir le m&ecirc;me mot de passe";
                var ValLabel="error_mdp";
                    $('body').append('<div class="erreurChps"  id="'+ValLabel+'">'+  msgTip +'</div>');
                        var pos = $("#motdepasse2").offset();
                        $("#"+ValLabel).css( { "left": (pos.left -15) + "px", "top":pos.top - 25 + "px" } );
                        $("#"+ValLabel).fadeIn('slow', function() {
                            $("#motdepasse2").focus(function(){
                                $("#"+ValLabel).remove();
                            })
                        });

            }


         }
        else {
        $("#motdepasse").parent().find("label").css("color","#6D6D6D");
        $("#motdepasse2").parent().find("label").css("color","#6D6D6D");
        errorpass=false;
        }

     email =$("#adresseEmail").val();
     if (email == "" || !isValidEmailAddress(email)) {
        $("#adresseEmail").parent().find("label").css("color","#ff0000");
        erroremail=true;
    }
    else {
        $("#adresseEmail").parent().find("label").css("color","#6D6D6D");
        erroremail=false;
        }

        if (errorpass || errorNom || erroremail) {
         return false;
        }
    });

$('#AffPass').click(function() {
		if ($(this).is(':checked')) {


			var originalBtnValue = $("#motdepasse").val();

            var element = $(document.createElement('input'));;
                element.attr("type", "text");
                element.attr("value", originalBtnValue);
                element.insertBefore($("#motdepasse"));
                $("#motdepasse").remove();
                element.attr("name", "motdepasse");
                element.attr("id", "motdepasse");

            var originalBtnValue = $("#motdepasse2").val();

            var element = $(document.createElement('input'));;
                element.attr("type", "text");
                element.attr("value", originalBtnValue);
                element.insertBefore($("#motdepasse2"));
                $("#motdepasse2").remove();
                element.attr("name", "motdepasse2");
                element.attr("id", "motdepasse2");

		} else {
					var originalBtnValue = $("#motdepasse").val();

            var element = $(document.createElement('input'));;
                element.attr("type", "password");
                element.attr("value", originalBtnValue);
                element.insertBefore($("#motdepasse"));
                $("#motdepasse").remove();
                element.attr("name", "motdepasse");
                element.attr("id", "motdepasse");

            var originalBtnValue = $("#motdepasse2").val();

            var element = $(document.createElement('input'));;
                element.attr("type", "password");
                element.attr("value", originalBtnValue);
                element.insertBefore($("#motdepasse2"));
                $("#motdepasse2").remove();
                element.attr("name", "motdepasse2");
                element.attr("id", "motdepasse2");
		}
	});


$('#AffPass2').click(function() {
		if ($(this).is(':checked')) {


			var originalBtnValue = $("#motdepasse").val();

            var element = $(document.createElement('input'));;
                element.attr("type", "text");
                element.attr("value", originalBtnValue);
                element.attr("class", "normal");
                element.insertBefore($("#motdepasse"));
                $("#motdepasse").remove();
                element.attr("name", "motdepasse");
                element.attr("id", "motdepasse");

            var originalBtnValue = $("#motdepasse2").val();

            var element = $(document.createElement('input'));;
                element.attr("type", "text");
                element.attr("value", originalBtnValue);
                element.attr("class", "motdepasse2");
                element.insertBefore($("#motdepasse2"));
                $("#motdepasse2").remove();
                element.attr("name", "motdepasse2");
                element.attr("id", "motdepasse2");

		} else {
					var originalBtnValue = $("#motdepasse").val();

            var element = $(document.createElement('input'));;
                element.attr("type", "password");
                element.attr("value", originalBtnValue);
                element.attr("class", "normal");
                element.insertBefore($("#motdepasse"));

                $("#motdepasse").remove();
                element.attr("name", "motdepasse");
                element.attr("id", "motdepasse");

            var originalBtnValue = $("#motdepasse2").val();

            var element = $(document.createElement('input'));;
                element.attr("type", "password");
                element.attr("value", originalBtnValue);
                element.attr("class", "motdepasse2");
                element.insertBefore($("#motdepasse2"));
                $("#motdepasse2").remove();
                element.attr("name", "motdepasse2");
                element.attr("id", "motdepasse2");
		}
	});


/* FIN SCRIPT PAGE ABONNEMENT & ALERTE */


/* SCRIPT PAGE ARTICLES */

$(".PictoBdp").live("click",function(event) {
    event.preventDefault();
    $('html,body').animate({scrollTop: 0}, 'slow');

})

$(".list a").live("click",function(event) {
    event.preventDefault();
    valeur=$(this).attr("href").replace("#","");
    $('html,body').animate({scrollTop: $("a[name='"+valeur+"']").offset().top},{easing:"easeOutQuint"});
})


$(".Lexique a.avanim").live("click",function(event) {
    event.preventDefault();
    valeur=$(this).attr("href").replace("#","");
    $('html,body').animate({scrollTop: $("a[id='"+valeur+"']").offset().top},{easing:"easeOutQuint"});
})

$("a.AutrAcc").live("click",function(event) {
    event.preventDefault();
    valeur=$(this).attr("href").replace("#","");
    ouvrir=$("a[id='"+valeur+"']").parent().find("div");
    changePictoAcco=$("a[id='"+valeur+"']").parent().find("span.PictoAcco");
    ouvrir.css("display","block");
    changePictoAcco.css("background-position","0 -16px");
    $('html,body').animate({scrollTop: $("a[id='"+valeur+"']").offset().top},{easing:"easeOutQuint"});
})




     var originalFontSize = $('.blocText').css('font-size');
    $(".Anormal").click(function(){
    $('.blocText').css('font-size', originalFontSize);
  });
  // Increase Font Size
  $(".Aplus").click(function(){
    var currentFontSize = $('.blocText').css('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);
    var newFontSize = currentFontSizeNum*1.2;
    $('.blocText').css('font-size', newFontSize);
    return false;
  });
  // Decrease Font Size
  $(".Amoins").click(function(){
    var currentFontSize = $('.blocText').css('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);
    var newFontSize = currentFontSizeNum*0.8;
    $('.blocText').css('font-size', newFontSize);
    return false;
  });


/* FIN SCRIPT PAGE ARTICLES */






})

function isValidEmailAddress(emailAddress) {
var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
return pattern.test(emailAddress);
}

/*
 * jQuery mSelect Plugin 1.1 (15 avril 2010)
 * requires jQuery v1.4.2 or later
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Auteur : Samuel Mandonnaud <mandonnaud.s gmail com> http://www.le-pret-a-surfer.com
 */
 (function(a){a.fn.mSelect=function(b){

 var c=a.extend({},a.fn.mSelect.defaults,b);a(this).each(function(){if(!a(this).is("select")&&!a(this).is("ul")){a.fn.mSelect.debug('Seul les éléments "select" et "ul" sont accepté : '+this);return}var d="";if(a(this).is("select")&&a(this).attr("name")){d=a(this).attr("name")}else{if(a(this).children("li").children("input[type=radio]").attr("name")){d=a(this).children("li").children("input[type=radio]").attr("name")}}if(d==""){d="mSelect"+Math.random()}var e="";if(a(this).attr("id")){var e='id = "'+a(this).attr("id")+'" '}a(this).wrap('<div class="mSelect" '+e+' style="display:inline-block;" />');a(this).parent().append('<div class="mFleche"></div><div class="mSelected">'+c.defaut+"</div>");if(a(this).is("select")){a(this).children("option").each(function(){var h="";if(a(this).attr("value")){h=a(this).attr("value")}else{h=a(this).html()}var g="";if(a(this).attr("class")){g=" "+a(this).attr("class")}var f="";if(a(this).attr("selected")){f='checked="checked" ';a(this).parent().parent().children(".mSelected").html(a(this).html())}a(this).parent().parent().append('<div class="mOption'+g+'"><input type="radio" '+f+'value="'+h+'" class="mRadio" name="'+d+'" />'+a(this).html()+"</div>")})}else{a(this).children("li").each(function(){if(!a(this).children("input[type=radio]")){a.fn.mSelect.debug("Input Radio manquand");return}if(!a(this).children("label")){a.fn.mSelect.debug("Label manquand");return}var h="";if(a(this).children("input[type=radio]").attr("value")){h=a(this).children("input[type=radio]").attr("value")}else{h=a(this).children("label").text()}var g="";if(a(this).attr("class")){g=" "+a(this).attr("class")}var f="";if(a(this).children("input[type=radio]").attr("checked")){f='checked="checked" ';a(this).parent().parent().children(".mSelected").html(a(this).children("label").html())}a(this).parent().parent().append('<div class="mOption'+g+'"><input type="radio" '+f+'value="'+h+'" class="mRadio" name="'+d+'" />'+a(this).children("label").html()+"</div>")})}if(c.radioHide){a(this).parent().children(".mOption").children(".mRadio").hide()}a(this).parent().children(".mOption").css({cursor:"pointer",position:"absolute"}).hide().click(function(){a(this).parent().children(".mOption").children(".mRadio").removeAttr("checked");a(this).children(".mRadio").attr("checked","checked");a(this).parent().children(".mSelected").html(a(this).html());a(this).parent().children(".mSelected").children(".mRadio").remove();if(c.eventClick){c.eventClick.apply(this,[a(this).children(".mRadio").val(),a(this).parent().children(".mSelected").html()])}});a(this).parent().one("click",function(){a.fn.mSelect.clickOuvert(this,c)});a(this).remove()})};a.fn.mSelect.clickOuvert=function(e,c){var d=a(e).position();var b=(d.left)-1;var g=d.top+a(e).outerHeight();var f="";a(e).children(".mOption").each(function(){a(this).css({top:g,left:b}).fadeIn();g+=a(this).outerHeight();if(a(this).children("input")[0].checked){f=a(this).children("input").val()}});if(c.eventOpen){c.eventOpen.apply(e,[f,a(e).children(".mSelected").html()])}a(document).delay(1).queue(function(){a(this).clearQueue();a(this).one("click",function(){var h="";a(e).children(".mOption").each(function(){a(this).fadeOut();if(a(this).children("input")[0].checked){h=a(this).children("input").val()}});if(c.eventClose){c.eventClose.apply(e,[h,a(e).children(".mSelected").html()])}a(e).one("click",function(){a.fn.mSelect.clickOuvert(this,c)})})})};a.fn.mSelect.debug=function(b){if(window.console&&window.console.firebug){console.error("mSelect : "+b)}else{alert("mSelect : "+b)}};a.fn.mSelect.defaults={defaut:"",radioHide:true,eventClick:null,eventOpen:null,eventClose:null}})(jQuery);


/*
CUSTOM CHECKBOX
*/

(function($){var i=function(e){if(!e)var e=window.event;e.cancelBubble=true;if(e.stopPropagation)e.stopPropagation()};$.fn.checkbox=function(f){try{document.execCommand('BackgroundImageCache',false,true)}catch(e){}var g={cls:'jquery-checkbox',empty:'../images/empty.png'};g=$.extend(g,f||{});var h=function(a){var b=a.checked;var c=a.disabled;var d=$(a);if(a.stateInterval)clearInterval(a.stateInterval);a.stateInterval=setInterval(function(){if(a.disabled!=c)d.trigger((c=!!a.disabled)?'disable':'enable');if(a.checked!=b)d.trigger((b=!!a.checked)?'check':'uncheck')},10);return d};return this.each(function(){var a=this;var b=h(a);if(a.wrapper)a.wrapper.remove();a.wrapper=$('<span class="'+g.cls+'"><span class="mark"><img src="'+g.empty+'" /></span></span>');a.wrapperInner=a.wrapper.children('span:eq(0)');a.wrapper.hover(function(e){a.wrapperInner.addClass(g.cls+'-hover');i(e)},function(e){a.wrapperInner.removeClass(g.cls+'-hover');i(e)});b.css({position:'absolute',zIndex:1,visibility:'hidden',top:-10}).after(a.wrapper);var c=false;if(b.attr('id')){c=$('label[for='+b.attr('id')+']');if(!c.length)c=false}if(!c){c=b.closest?b.closest('label'):b.parents('label:eq(0)');if(!c.length)c=false}if(c){c.hover(function(e){a.wrapper.trigger('mouseover',[e])},function(e){a.wrapper.trigger('mouseout',[e])});c.click(function(e){b.trigger('click',[e]);i(e);return false})}a.wrapper.click(function(e){b.trigger('click',[e]);i(e);return false});b.click(function(e){i(e)});b.bind('disable',function(){a.wrapperInner.addClass(g.cls+'-disabled')}).bind('enable',function(){a.wrapperInner.removeClass(g.cls+'-disabled')});b.bind('check',function(){a.wrapper.addClass(g.cls+'-checked')}).bind('uncheck',function(){a.wrapper.removeClass(g.cls+'-checked')});$('img',a.wrapper).bind('dragstart',function(){return false}).bind('mousedown',function(){return false});if(window.getSelection)a.wrapper.css('MozUserSelect','none');if(a.checked)a.wrapper.addClass(g.cls+'-checked');if(a.disabled)a.wrapperInner.addClass(g.cls+'-disabled')})}})(jQuery);




$(document).ready(function(){


 if($.browser.msie&&$.browser.version <8) {
//    $(".LienBout").find('> a').append('<img src="../images/fd_bouton_F.png" class="imgIE7" />');

    $(".deuxBout").find("a:last-child").each(function() {
        $(this).css({
        'border':'none',
        'margin-right':0});
    })
 }

$(".OpenPopin").live('click',function() {
    affiqui=$(this).parent().find('.contenuPopIn').clone();
    $('body').append('<div id="fadeContenuPopIn"></div>');
    $('#fadeContenuPopIn').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
    $('<image src="../images/Closepopin.gif" class="Closepopin" />').css({
		'cursor':'pointer',
		'position':'absolute',
        'right':0,
        'top': 0
		}).appendTo(affiqui).bind('click',function(e){
		    $(this).parent().fadeOut().remove();
            $("#fadeContenuPopIn").fadeOut().remove();
		});
    ou=$(this).offset();
    largeur=($(".contenuPopIn").width())-$(this).width();
    affiqui.css({
    'left':(ou.left)-largeur,
    'top':ou.top,
    'display':'block'
    });
    $('body').append(affiqui);
    return false;
})

$('#fadeContenuPopIn').live('click',function() {
$(this).next().remove();
$(this).remove();
})


});



 /*
 Script AFFICHAGE tableau
 */
$(".plusdocument").live("click", function () {
	$('body').append('<div id="fadeContenuPopIn"></div>');
	$('#fadeContenuPopIn').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
	boutonFermer='<a class="closePopin"><img src="../images/Closepopin.gif" title="Fermer" alt="Fermer" id="closealerteexiste" /></a>';
	affiqui = $("#ContenuListeDocument").clone();
	affiqui.append(boutonFermer);
	affiqui.css({
		'display':'block'
		});
	$('body').append(affiqui);
	affiqui.css("top", 100 + $(window).scrollTop() + "px");
	affiqui.css("left", (($(window).width() - affiqui.outerWidth()) / 2) + $(window).scrollLeft() + "px");

	$("#closealerteexiste").bind('click',function(e){
		$(this).parent().fadeOut().remove();
		$("#fadeContenuPopIn").fadeOut().remove();
		affiqui.css("display","none");
	});



	$('table.sortable').each(function() {
    var $table = $(this);
    $table.alternateRowColors($table);
    $table.find('th.sortableLM').each(function(column) {
      var findSortKey;

      if ($(this).is('.sort-alpha')) {
        findSortKey = function($cell) {
          return $cell.find('.sort-key').text().toUpperCase() +' ' + $cell.text().toUpperCase();
        };
      }

      else if ($(this).is('.sort-numeric')) {
        findSortKey = function($cell) {
          var key = parseFloat($cell.text().replace(/[^\d.,-]+/, ''));

          return isNaN(key) ? 0 : key;
        };
      }

      else if ($(this).is('.sort-date')) {
        findSortKey = function($cell) {
          return Date.parse('1 ' + $cell.text());
        };
      }

      if (findSortKey) {
        $(this).addClass('clickable').live('hover',function() {
          $(this).addClass('hover');
        }, function() {
          $(this).removeClass('hover');
        }).click(function() {



                  var newDirection = 1;
          if ($(this).is('.sorted-asc')) {
            newDirection = -1;
          }


                $table.find('th.sortableLM').removeClass("active");
                $(this).addClass("active");


          rows = $table.find('tbody > tr').get();
          $.each(rows, function(index, row) {
            row.sortKey =findSortKey($(row).children('td').eq(column));
          });
          rows.sort(function(a, b) {
            if (a.sortKey < b.sortKey) return -newDirection;
            if (a.sortKey > b.sortKey) return newDirection;
            return 0;
          });

          $.each(rows, function(index, row) {

            $table.children('tbody').append(row);
            row.sortKey = null;

          });



          $table.find('th').removeClass('sorted-asc').removeClass('sorted-desc');
          var $sortHead = $table.find('th.sortableLM').filter(':nth-child('+ (column + 1) + ')');

          if (newDirection == 1) {
            $sortHead.addClass('sorted-asc');
            $sortHead.removeClass('sorted-desc');
          } else {
            $sortHead.addClass('sorted-desc');
            $sortHead.removeClass('sorted-asc');
          }

          $table.find('td').removeClass('sorted').filter(':nth-child(' + (column + 1) + ')').addClass('sorted');



          $table.trigger('repaginate');

        });

      }

    });

  });

	$(".paginated").pagination({ pagenumber: 1, buttonClickCallback: PageClick });
});

// pour faire un submit sur les liens images.
$(".submit .LienBout a").live("click", function () {
	$("#"+$(this).attr("class")).submit();
});


 $.fn.alternateRowColors = function() {

  $('tbody tr:odd', this).removeClass('even').addClass('odd');
  $('tbody tr:even', this).removeClass('odd').addClass('even');
  return this;
};



$.fn.tagName = function() {
   return this.get(0).tagName.toLowerCase();
}


function blocSelectPart() {

$(".blocSelectPart").css ({
"left":$("#main-position-left h1 span").width()+23,
"top":15
})
$(".blocSelectPart li[class=active]").css("display","block").siblings().css("display",'none');
$(".blocSelectPart").mouseenter(function() {
$(".blocSelectPart li").css("display","block");
$(".blocSelectPart").css({
'border':'1px solid #edf1f4',
'box-shadow':'2px 2px 8px #edf1f4'
})
}).mouseleave(function() {
    $(".blocSelectPart li[class=active]").css("display","block").siblings().css("display",'none');
    $(".blocSelectPart").css({
    'border':'1px solid #ffffff',
    'box-shadow':'0px 0px 0px #edf1f4'
    })

})
}
function memeHeight_Infoex () {
maxHeight=0;
    $(".memeHeight_Infoex").each(function () {
        var clone=$(this).clone();
        var blocTest= $("<div id='testwidth11'></div>");
        blocTest.append(clone);
        $("body").append(blocTest);
		var h = $("#testwidth11").offsetHeight;
//            $("#testwidth").remove();
        height= h;
        maxHeight = (height > maxHeight) ? height : maxHeight;
    })
//    $(".memeHeight_Infoex").css("height",maxHeight);

}


$(document).ready(function() {

blocSelectPart();




$(".comparateurPrix table td.orange span.text a").each(function () {

    $(this).bind("click",function () {
        $("#BLocACacher").hide();
        $("#BLocAMontrer").show(function () {
            blocSelectPart();
            memeHeight_Infoex();
        });


        return false;

    }

    )

});



$(".comparateurPrix table td").filter(':nth-child(2)').find('div:first').css('display','block');

$(".comparateurPrix table td").filter(':nth-child(3)').each(function() {
    var reg=new RegExp("[^\d.,]+","g");
    $(this).find("div:first").css("display","block");
    $(this).find("div").each(function() {
    var key = parseFloat($(this).text().replace(/[^\d.,]+/, ''));
    isNaN(key) ? 0 : key;
    val=reg.exec($(this).text());
    var ValNega=('<span class="Negative"><span></span></span>');
    var Valposi=('<span class="Positive"><span></span></span><p class="clear"></p>');
    var regex = /[^\d.,]+/g;
    var input = $(this).text();
      var matches = input.match(regex);
        $(this).prepend(Valposi);
        $(this).prepend(ValNega);

        if ($.trim(matches[0]) == "+") {
        $(this).find('.Positive span').css('width',key+'%');
        }else {
        $(this).find('.Negative span').css('width',key+'%');
        }
    })

    if ($(this).find("div").length >1) {
        picto='<img src="../images/picto_popinDevise_off.gif" class="picto_popinDevise" />';
        blocChoixDevis='<div class="blocChoixDevis"></div>';
        $(this).next().find('div.bloc').append(blocChoixDevis);

        $(this).next().find("span.text").append(picto);

            $(this).next().find("span.text img.picto_popinDevise").bind('click',function() {
                    if ($(this).parent().parent().find('div.blocChoixDevis').css('display')=="block") {
                        $(this).parent().parent().find('div.blocChoixDevis').css('display','none')
                    }
                    else {
                        $(this).parent().parent().find('div.blocChoixDevis').css('display','block')
                    };
                        $(this).parent().parent().find('input.chinput').focus();


        });

        nbreDevise=$(this).parent().find('td').filter(':nth-child(2)').find('div');

        for (i=0;i <nbreDevise.length;i++) {
        text=$(this).parent().find('td').filter(':nth-child(2)').find('div').eq(i).text();
        $('<span> Part '+text+'</span>').appendTo($(this).next().find('.blocChoixDevis')).bind('click',function() {
            $(this).parent().parent().parent().parent().find('td').filter(':nth-child(2)').find('div:eq('+$(this).index()+')').css('display','block').siblings().css('display','none');
            $(this).parent().parent().parent().parent().find('td').filter(':nth-child(3)').find('div:eq('+$(this).index()+')').css('display','block').siblings().css('display','none');
             $(this).parent().parent().parent().find('div.blocChoixDevis').css('display','none');
        });

        }

$('<input type="checkbox" value="" name="chinput" class="chinput" />').appendTo($(this).next().find('.blocChoixDevis')).bind('blur',function() {
        $(this).parent().css('display','none');
        });
        $(this).next().find('.blocChoixDevis').mouseover(function() {
                    $(this).parent().find('.chinput').unbind('blur');
                }).mouseout(function() {
                $(this).parent().find('.chinput').bind('blur',function() {
                    $(this).parent().css('display','none')});
                }).click(function(){
                $(this).css('display','none');
                });

        mainPositionLeft=$("#main-position-left").offset();
        positionblocChoixDevis=$(this).next().offset();
                $(this).next().find("div.blocChoixDevis").css ({
//                    left:(positionblocChoixDevis.left-mainPositionLeft.left)+($(this).next().width())-($(this).next().find("div.blocChoixDevis").width()),
//                    top:(positionblocChoixDevis.top-mainPositionLeft.top),
                    right:0,
                    top:-18,
                    width:$(this).next().find("div.blocChoixDevis").width()
                    });
    }
});
});


/* SCRIPT ACCORDEON */
jQuery.fn.AccordeonAmundi = function(settings){
		this.each(function(y) {
        $('div:first',$(this)).css('display','none');
        $('<span class="PictoAcco"></span>').css({
		'position':'absolute',
		'width':17,
		'top':10,
		'right':16,
		'height':16,
		'cursor':'pointer',
		'background-image':'url(../images/picto_Accord.gif)',
		'background-position':'0 0',
		'background-repeat':'no-repeat'
		}).appendTo($(this)).bind('click',function(e){
                if ($(this).parent().find('div').css('display')=="block") {
                $(this).parent().find('div').slideUp();
                $(this).css('background-position','0 0');
                }
                else {
                $(this).parent().find('div').slideDown();
                $(this).css('background-position','0 -16px');
                }
            });
            $('h4',$(this)).bind('click',function(e){
                if ($(this).next().css('display')=="block") {
                    $(this).next().slideUp();
                    $(this).parent().find('.PictoAcco').css('background-position','0 0');
                }
                else {
                    $(this).next().slideDown();
                    $(this).parent().find('.PictoAcco').css('background-position','0 -16px');
                }
            });

            if($(this).hasClass("active")) {
                $(this).find('.PictoAcco').css('background-position','0 -16px');
                $(this).find('> div').slideDown();
                $(this).removeClass("active");
            };

        //FIN DU EACH
        })

}
/* SCRIPT ACCORDEON */
jQuery.fn.AccordeonWith2bloc = function(settings){
		this.each(function(y) {
//        $('div:first',$(this)).css('display','none');
        $('<span class="PictoAcco"></span>').css({
		'position':'absolute',
		'width':17,
		'top':12,
		'right':16,
		'height':16,
		'cursor':'pointer',
		'background-image':'url(../images/picto_Accord.gif)',
		'background-position':'0 0',
		'background-repeat':'no-repeat'
		}).appendTo($(this)).bind('click',function(e){
		    var Avant=$(this).parent().prev().hasClass('AccordeonWith2bloc') ? true:false;
		    var Apres=$(this).parent().next().hasClass('AccordeonWith2bloc') ? true:false;
                if ($(this).parent().find('div').css('display')=="block") {
                $(this).parent().find('div').slideUp();
                $(this).css('background-position','0 0');
                    if (Avant) {
                        $(this).parent().prev().find('div').slideUp();
                        $(this).parent().prev().find('.PictoAcco').css('background-position','0 0');
                    }
                    else {
                        $(this).parent().next().find('div').slideUp();
                        $(this).parent().next().find('.PictoAcco').css('background-position','0 0');
                    }

                }
                else {
                $(this).parent().find('div').slideDown();
                $(this).css('background-position','0 -16px');
                     if (Avant) {
                        $(this).parent().prev().find('div').slideDown();
                        $(this).parent().prev().find('.PictoAcco').css('background-position','0 -16px');
                    }
                    else {
                        $(this).parent().next().find('div').slideDown();
                        $(this).parent().next().find('.PictoAcco').css('background-position','0 -16px');
                    }


                }
            });

            $('h3',$(this)).bind('click',function(e){
            var Avant=$(this).parent().prev().hasClass('AccordeonWith2bloc') ? true:false;
		    var Apres=$(this).parent().next().hasClass('AccordeonWith2bloc') ? true:false;

                if ($(this).next().css('display')=="block") {
                    $(this).next().slideUp();
                    $(this).parent().find('.PictoAcco').css('background-position','0 0');
                     if (Avant) {
                        $(this).parent().prev().find('div').slideUp();
                        $(this).parent().prev().find('.PictoAcco').css('background-position','0 0');
                    }
                    else {
                        $(this).parent().next().find('div').slideUp();
                        $(this).parent().next().find('.PictoAcco').css('background-position','0 0');
                    }
                }
                else {
                    $(this).next().slideDown();
                    $(this).parent().find('.PictoAcco').css('background-position','0 -16px');
                     if (Avant) {
                        $(this).parent().prev().find('div').slideDown();
                        $(this).parent().prev().find('.PictoAcco').css('background-position','0 -16px');
                    }
                    else {
                        $(this).parent().next().find('div').slideDown();
                        $(this).parent().next().find('.PictoAcco').css('background-position','0 -16px');
                    }
                }
            });

        //FIN DU EACH
        })

}
jQuery.fn.infoBulleAmundi = function(){
    this.each(function(y) {
        var elem=$(this),
        txt=$(this).attr('rel'),
        image=$('<image src="../images/picto_InfoBulle.png" class="pictoInfoBulle" />');


        if(elem.is("div") && elem.find("p").length >0) {
            image.appendTo($('p:last',elem));
            if($('p',elem).length > 1) $('.pictoInfoBulle',elem).css('margin-top','-20px');
            var position=$('.pictoInfoBulle',elem).offset();
            $('.pictoInfoBulle',elem).bind('mouseover',{'left':position.left,'top':position.top,'txt':txt},function(e) {
                    $('<div class="BlocInfoBulle"></div>').append(e.data['txt']).css({
                    top:e.data['top'],
                    left:e.data['left']+30
                    }).appendTo($("body"));
                    }).bind('mouseout',function() {
                    $('.BlocInfoBulle').remove();
                    });
       }
       else if (elem.is("p")) {
       image.appendTo(elem);
       var position=$('.pictoInfoBulle',elem).offset();
            $('.pictoInfoBulle',elem).bind('mouseover',{'left':position.left,'top':position.top,'txt':txt},function(e) {
                    $('<div class="BlocInfoBulle"></div>').append(e.data['txt']).css({
                    top:e.data['top'],
                    left:e.data['left']+20
                    }).appendTo($("body"));
                    }).bind('mouseout',function() {
                    $('.BlocInfoBulle').remove();
                    });
       }
       else if (elem.is("div") && elem.find("p").length ==0) {
       elem.css("position","relative");
       image.appendTo(elem);
       var position=$('.pictoInfoBulle',elem).offset();
            $('.pictoInfoBulle',elem).bind('mouseover',{'left':position.left,'top':position.top,'txt':txt},function(e) {
                    $('<div class="BlocInfoBulle"></div>').append(e.data['txt']).css({
                    top:e.data['top'],
                    left:e.data['left']+20
                    }).appendTo($("body"));
                    }).bind('mouseout',function() {
                    $('.BlocInfoBulle').remove();
                    });
       }
       else if (elem.is("h3")) {
       elem.css("position","relative");
       image.appendTo(elem);
       var position=$('.pictoInfoBulle',elem).offset();
            $('.pictoInfoBulle',elem).bind('mouseover',{'left':position.left,'top':position.top,'txt':txt},function(e) {
                    $('<div class="BlocInfoBulle"></div>').append(e.data['txt']).css({
                    top:e.data['top'],
                    left:e.data['left']+20
                    }).appendTo($("body"));
                    }).bind('mouseout',function() {
                    $('.BlocInfoBulle').remove();
                    });
       }
   });
};
jQuery.fn.CodesToutePlace = function(){
    this.each(function(y) {
    $('<image src="../images/picto_CodesToutePlace.png" class="pictoInfoBulle" />').css({
		'cursor':'pointer'
		}).appendTo($(this)).bind('click',function(e){
		$('body').append('<div id="fade"></div>');
                $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
                var position=$(this).offset();
                var contenu=$($(this).parent().find(".tableCodesToutePlace").clone());
    			contenu=contenu.css('display','block');
        		$('<div id="DivtableCodesToutePlace" />').append(contenu).appendTo($("body"));
        		largeur=$("#DivtableCodesToutePlace table").width();
        		$("#DivtableCodesToutePlace").css({
        		'position':'absolute',
        		'padding':'19px',
        		'background-color':'#ffffff',
        		'z-index':"10000",
        		'top':position.top,
        		'left':(position.left)-largeur-12,
        		'width':largeur,
        		'border':'1px solid #000041',
        		'box-shadow':'0px 1px 2px black'
        		})
        		varpicto_off=$('<img src="../images/picto_CodesToutePlace_close.png" class="picto_close" />');
        		$("#DivtableCodesToutePlace").prepend(varpicto_off);
        		$("#fade").bind('click',function() {
        		$(this).parent().find("#DivtableCodesToutePlace").fadeOut().remove();
        		$(this).fadeOut().remove();
        		});
        		$("#DivtableCodesToutePlace .picto_close").bind('click',function() {
        		$(this).parent().fadeOut().remove();
        		$("#fade").fadeOut().remove();
        		});

		});

    });
};


(function($){
 $.fn.pagination = function(options) {
        var opts = $.extend({}, $.fn.pagination.defaults, options);
    return this.each(function() {

        pagecount=$(this).find("tbody tr").length;
        pagecount = Math.ceil(pagecount / opts.numParPage);
        queltableau=$(this);
        queltableau.find('tbody tr').show();
        queltableau.find('tbody tr:gt('+parseFloat(opts.pagenumber*opts.numParPage - 1)+')').hide().end();
        PaginationHaut=$(this).parent().parent().find(".PaginationHaut .TdPaginationHaut");
        AffichageParPage=$(this).parent().parent().find(".PaginationHaut .AffichSelNbreParPage");
        PaginationBas=$(this).parent().parent().find(".PaginationBas");
        PaginationHaut.empty().append(renderPagination(parseInt(opts.pagenumber), pagecount, opts.buttonClickCallback,queltableau,opts.numParPage));
        PaginationBas.empty().append(renderPagination(parseInt(opts.pagenumber), pagecount, opts.buttonClickCallback,queltableau,opts.numParPage));
        AffichageParPage.empty().append(renderaffichageParPage(queltableau,opts.numParPage)).prepend('<span class="Floleft">Affichage :&nbsp;</span>').append('<span class="Floleft">par page</span>');
        $("select").customStyle();

    })
}
    function renderPagination(pagenumber,pagecount,buttonClickCallback,queltableau,numParPage){

        var $pager = $('<ul class="pagination"></ul>');
        $pager.append(renderButton('<<', pagenumber, pagecount, buttonClickCallback,queltableau,numParPage)).append(renderButton('<', pagenumber, pagecount, buttonClickCallback,queltableau,numParPage));

        // pager currently only handles 10 viewable pages ( could be easily parameterized, maybe in next version ) so handle edge cases
        var startPoint = 1;
        var endPoint = 4;

        if (pagenumber > 2) {
            startPoint = pagenumber - 2;
            endPoint = pagenumber + 2;
        }

        if (endPoint > pagecount) {
            startPoint = pagecount - 3;
            endPoint = pagecount;
        }

        if (startPoint < 1) {
            startPoint = 1;
        }

        // loop thru visible pages and render buttons
        for (var page = startPoint; page <= endPoint; page++) {

            var currentButton = $('<li class="page-number">' + (page) + '</li>');

            page == pagenumber ? currentButton.addClass('pgCurrent') : currentButton.click(function() { buttonClickCallback(this.firstChild.data,queltableau,numParPage); });
            currentButton.appendTo($pager);
        }

        // render in the next and last buttons before returning the whole rendered control back.
        $pager.append(renderButton('>', pagenumber, pagecount, buttonClickCallback,queltableau,numParPage)).append(renderButton('>>', pagenumber, pagecount, buttonClickCallback,queltableau,numParPage));

        return $pager;


    }
    function renderButton(buttonLabel, pagenumber, pagecount, buttonClickCallback,queltableau,numParPage) {

     var $Button = $('<li class="pgNext">' + buttonLabel + '</li>');

        var destPage = 1;

        // work out destination page for required button type
        switch (buttonLabel) {
            case "<<":
                destPage = 1;
                break;
            case "<":
                destPage = pagenumber - 1;
                break;
            case ">":
                destPage = pagenumber + 1;
                break;
            case ">>":
                destPage = pagecount;
                break;
        }

        // disable and 'grey' out buttons if not needed.
        if (buttonLabel == "<<" || buttonLabel == "<") {
            pagenumber <= 1 ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage,queltableau,numParPage); });
        }
        else {
            pagenumber >= pagecount ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage,queltableau,numParPage); });
        }
        return $Button;
    }
    function renderaffichageParPage(queltableau,numParPage) {
             switch (parseFloat(numParPage)) {
            case 10:
                var $selectParPage=$('<select name="parPage" class="parPage"><option value="10" selected="selected">10</option><option value="20">20</option><option value="ALL">Tous</option></select>');
                break;
            case 20:
                var $selectParPage=$('<select name="parPage" class="parPage"><option value="10">10</option><option value="20" selected="selected">20</option><option value="ALL">Tous</option></select>');
                break;
            default:
                var $selectParPage=$('<select name="parPage" class="parPage"><option value="10">10</option><option value="20">20</option><option value="ALL"  selected="selected">Tous</option></select>');
        }
         $selectParPage.bind('focus',{"table":queltableau},function(event) {
            if ($(this).find(":selected").val() =="ALL") {
                numParPage=event.data['table'].find('tbody tr').length;
                currentPage = 0;
            }
            else {
                numParPage=$(this).val();
                currentPage = 0;
            }
            queltableau.pagination({buttonClickCallback: PageClick,numParPage : numParPage});
//            queltableau.parent().parent().find(".PaginationHaut .TdPaginationHaut select").customStyle()
         })
        return $selectParPage;
    }

    $.fn.pagination.defaults = {
        pagenumber: 1,
        numParPage: 10
    };


})(jQuery);



$(document).ready(function() {
    $(".paginated").pagination({ pagenumber: 1, buttonClickCallback: PageClick});

    $("#tablPageCheaper .paginated").pagination({ pagenumber: 1,numParPage:20, buttonClickCallback: PageClick});



});
        PageClick = function(pageclickednumber,queltableau,numParPage) {
            queltableau.pagination({ pagenumber: pageclickednumber, buttonClickCallback: PageClick,numParPage : numParPage});
            pagecount=queltableau.parent().find("table.paginated tbody tr").length;
            pagecount = Math.ceil(pagecount / numParPage);
            queltableau.parent().find("table.paginated tbody tr").show();
            queltableau.parent().find('table.paginated tbody tr:lt('+parseFloat((pageclickednumber-1) * numParPage)+')').hide().end();
            queltableau.parent().find('table.paginated tbody tr:gt('+parseFloat((pageclickednumber) * numParPage - 1 )+')').hide().end();
            $('html,body').animate({scrollTop: $(".BlocTabLeau").offset().top},'slow');
        };


(function($){
$.fn.paginationAlaUne = function(options) {
        var opts = $.extend({}, $.fn.paginationAlaUne.defaults, options);
    return this.each(function() {

        pagecount=$(this).find("div.blocAvecFdecebeb").length;
        pagecount = Math.ceil(pagecount / opts.numParPage);
        queltableau=$(this);
        queltableau.find('div.blocAvecFdecebeb').show();
        queltableau.find('div.blocAvecFdecebeb:gt('+parseFloat(opts.pagenumber*opts.numParPage - 1)+')').hide().end();
        AffichageParPage=$(this).parent().find(".PaginationHaut .AffichSelNbreParPage");
        PaginationBas=$(this).parent().find(".PaginationBas");
        PaginationBas.empty().append(renderPaginationAlaUne(parseInt(opts.pagenumber), pagecount, opts.buttonClickCallback,queltableau,opts.numParPage));
        AffichageParPage.empty().append(renderaffichageParPageAlaUne(queltableau,opts.numParPage)).prepend('<span class="Floleft">Affichage :&nbsp;</span>').append('<span class="Floleft">par page</span>');
        $("select").customStyle();
    })
};
    function renderPaginationAlaUne(pagenumber,pagecount,buttonClickCallback,queltableau,numParPage){

        var $pager = $('<ul class="pagination"></ul>');
        $pager.append(renderButtonAlaUne('<<', pagenumber, pagecount, buttonClickCallback,queltableau,numParPage)).append(renderButtonAlaUne('<', pagenumber, pagecount, buttonClickCallback,queltableau,numParPage));

        // pager currently only handles 10 viewable pages ( could be easily parameterized, maybe in next version ) so handle edge cases
        var startPoint = 1;
        var endPoint = 4;

        if (pagenumber > 2) {
            startPoint = pagenumber - 2;
            endPoint = pagenumber + 2;
        }

        if (endPoint > pagecount) {
            startPoint = pagecount - 3;
            endPoint = pagecount;
        }

        if (startPoint < 1) {
            startPoint = 1;
        }

        // loop thru visible pages and render buttons
        for (var page = startPoint; page <= endPoint; page++) {

            var currentButton = $('<li class="page-number">' + (page) + '</li>');

            page == pagenumber ? currentButton.addClass('pgCurrent') : currentButton.click(function() { buttonClickCallback(this.firstChild.data,queltableau,numParPage); });
            currentButton.appendTo($pager);
        }

        // render in the next and last buttons before returning the whole rendered control back.
        $pager.append(renderButtonAlaUne('>', pagenumber, pagecount, buttonClickCallback,queltableau,numParPage)).append(renderButtonAlaUne('>>', pagenumber, pagecount, buttonClickCallback,queltableau,numParPage));

        return $pager;


    };
    function renderButtonAlaUne(buttonLabel, pagenumber, pagecount, buttonClickCallback,queltableau,numParPage) {
     var $Button = $('<li class="pgNext">' + buttonLabel + '</li>');

        var destPage = 1;

        // work out destination page for required button type
        switch (buttonLabel) {
            case "<<":
                destPage = 1;
                break;
            case "<":
                destPage = pagenumber - 1;
                break;
            case ">":
                destPage = pagenumber + 1;
                break;
            case ">>":
                destPage = pagecount;
                break;
        }

        // disable and 'grey' out buttons if not needed.
        if (buttonLabel == "<<" || buttonLabel == "<") {
            pagenumber <= 1 ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage,queltableau,numParPage); });
        }
        else {
            pagenumber >= pagecount ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage,queltableau,numParPage); });
        }
        return $Button;
    };
    function renderaffichageParPageAlaUne(queltableau,numParPage) {
             switch (parseFloat(numParPage)) {
            case 10:
                var $selectParPage=$('<select name="parPage" class="parPage"><option value="10" selected="selected">10</option><option value="20">20</option><option value="ALL">Tous</option></select>');
                break;
            case 20:
                var $selectParPage=$('<select name="parPage" class="parPage"><option value="10">10</option><option value="20" selected="selected">20</option><option value="ALL">Tous</option></select>');
                break;
            default:
                var $selectParPage=$('<select name="parPage" class="parPage"><option value="10">10</option><option value="20">20</option><option value="ALL"  selected="selected">Tous</option></select>');
        }
         $selectParPage.bind('focus',{"table":queltableau},function(event) {
            if ($(this).find(":selected").val() =="ALL") {
                numParPage=event.data['table'].find('div.blocAvecFdecebeb').length;
                currentPage = 0;
            }
            else {
                numParPage=$(this).val();
                currentPage = 0;
            }
            queltableau.paginationAlaUne({buttonClickCallback: PageClickAlaUne,numParPage : numParPage});
         })
        return $selectParPage;
    };

    $.fn.paginationAlaUne.defaults = {
        pagenumber: 1,
        numParPage: 10
    };

})(jQuery);


$(document).ready(function() {
$("#BlocAlaUne").paginationAlaUne({ pagenumber: 1, buttonClickCallback: PageClickAlaUne});
});


        PageClickAlaUne = function(pageclickednumber,queltableau,numParPage) {
            queltableau.paginationAlaUne({ pagenumber: pageclickednumber, buttonClickCallback: PageClickAlaUne,numParPage : numParPage});
            pagecount=queltableau.find("div.blocAvecFdecebeb").length;
            pagecount = Math.ceil(pagecount / numParPage);
            queltableau.find("div.blocAvecFdecebeb").show();
            queltableau.find('div.blocAvecFdecebeb:lt('+parseFloat((pageclickednumber-1) * numParPage)+')').hide().end();
            queltableau.find('div.blocAvecFdecebeb:gt('+parseFloat((pageclickednumber) * numParPage - 1 )+')').hide().end();
            $('html,body').animate({scrollTop: $("#BlocAlaUne").offset().top},'slow');
        }










$(document).ready(function() {




$(".AllNone").live("change",function () {
column=parseFloat($(this).parent().parent().index());
 if ($(this).is(':checked')) {
$(".BlocTabLeau table").find('tbody tr td').filter(':nth-child(' + (column + 1) + ')').each(function() {
$(this).find("input[type=checkbox]").attr('checked', true);
});
    } else {
$(".BlocTabLeau table").find('tbody tr td').filter(':nth-child(' + (column + 1) + ')').each(function() {
$(this).find("input[type=checkbox]").attr('checked', false);
});
    }
})



$(".AllNonePerfomance").live("change",function () {
column=parseFloat($(this).parent().parent().index())+4;
 if ($(this).is(':checked')) {
$(".BlocTabLeau table").find('tbody tr td').filter(':nth-child(' + (column + 1) + ')').each(function() {
$(this).find("input[type=checkbox]").attr('checked', true);
});
    } else {
$(".BlocTabLeau table").find('tbody tr td').filter(':nth-child(' + (column + 1) + ')').each(function() {
$(this).find("input[type=checkbox]").attr('checked', false);
});
    }

})

$(".Indices").bind("change",function (e) {
		column=parseFloat($(this).parent().parent().index());
             if ($(this).is(':checked')) {
            $(".BlocTabLeau table").find('tbody tr td').filter(':nth-child(' + (column + 1) + ')').each(function() {
            $(this).find("input[type=checkbox]").attr('checked', true);
            });
                } else {
            $(".BlocTabLeau table").find('tbody tr td').filter(':nth-child(' + (column + 1) + ')').each(function() {
            $(this).find("input[type=checkbox]").attr('checked', false);
            });
                }

})


$(".DocumentsSel").live("change",function (e) {
		column=parseFloat($(this).parent().parent().index());
             if ($(this).is(':checked')) {
            $(".BlocTabLeau table").find('tbody tr td').filter(':nth-child(' + (column + 1) + ')').each(function() {
            $(this).find("input[type=checkbox]").attr('checked', true);
            });
                } else {
            $(".BlocTabLeau table").find('tbody tr td').filter(':nth-child(' + (column + 1) + ')').each(function() {
            $(this).find("input[type=checkbox]").attr('checked', false);
            });
                }

})































$(".AllNoneDocuments").bind("change",function () {
        column=parseFloat($(this).parent().index());
        $tablaeau=$(this).parent().parent().parent().parent();
             if ($(this).is(':checked')) {
            $tablaeau.find('tbody tr td').filter(':nth-child(' + (column + 1) + ')').each(function() {
            $(this).find("input[type=checkbox]").attr('checked', true);
            });
                } else {
            $tablaeau.find('tbody tr td').filter(':nth-child(' + (column + 1) + ')').each(function() {
            $(this).find("input[type=checkbox]").attr('checked', false);
            });
                }
})

$(".AllNoneDocuments2").bind("change",function () {
        column=parseFloat($(this).parent().index());
        $tablaeau=$(this).parent().parent().parent().parent();
             if ($(this).is(':checked')) {
                $tablaeau.find('tbody tr td').each(function() {
                $(this).find("input[type=checkbox]").attr('checked', true);
            });
            }
            else {
            $tablaeau.find('tbody tr td').each(function() {
                $(this).find("input[type=checkbox]").attr('checked', false);
            });
         }
})



$(".AllNoneDocumentsProspectusDetails").bind("change",function () {

    if ($(this).parent().tagName() ==="span") {

                nbrCheckbox=parseFloat($(this).parent().parent().attr('rowspan'));
        numIndex=$(this).parent().parent().parent().index();
        $tablaeau=$(this).parent().parent().parent().parent().parent();
    }
    else {
        nbrCheckbox=parseFloat($(this).parent().attr('rowspan'));
        numIndex=$(this).parent().parent().index();
        $tablaeau=$(this).parent().parent().parent().parent();


    }
             if ($(this).is(':checked')) {
                for (i=1; i<nbrCheckbox+1;i++) {
                    $tablaeau.find('tbody tr:nth-child('+(numIndex+i)+') td').find("input[type=checkbox]").attr('checked', true);
               }
            }
            else {
                    for (i=1; i<nbrCheckbox+1;i++) {
                    $tablaeau.find('tbody tr:nth-child('+(numIndex+i)+') td').find("input[type=checkbox]").attr('checked', false);
               }
         }
})

memeHeight_Infoex();




    $('.CodesToutePlace').CodesToutePlace();
$('.Accordeon').AccordeonAmundi();
$('select').customStyle();
    $(".grid_prehome").each(function(y) {
        lesA=$(this).find('a');
        $(lesA).mouseenter(function () {
            $(".grid_prehome").find('li a').attr('class','');
           $(this).addClass('current');
        });
    });


    $('.infoBulle').tipsy({gravity: 'sw',delayOut: 200,opacity:1});
    $('.infoBulleS').tipsy({gravity: 's',delayOut: 200,opacity:1});



  var alternateRowColors = function($table) {

    if ($table.is('.paginated')) {
        nombre=$table.parent().parent().find(".PaginationHaut .AffichSelNbreParPage select option:selected").val();
            $table.pagination({ pagenumber:1, buttonClickCallback: PageClick,numParPage : nombre});
           $table.find("tbody tr").show();
            $table.find('tbody tr:lt('+parseFloat((0) * nombre)+')').hide().end();
            $table.find('tbody tr:gt('+parseFloat((1) * nombre - 1 )+')').hide().end();
    }
//
    $('tbody tr:odd', $table).removeClass('even').addClass('odd');
    $('tbody tr:even', $table).removeClass('odd').addClass('even');
  };

    alternateRowColors($('table.tblPerformance'));
  $('table.sortable').each(function() {
    var $table = $(this);
    alternateRowColors($table);
    $table.find('th.sortableLM').each(function(column) {
      var findSortKey;

      if ($(this).is('.sort-alpha')) {
        findSortKey = function($cell) {
          return $cell.find('.sort-key').text().toUpperCase() +' ' + $cell.text().toUpperCase();
        };
      }

      else if ($(this).is('.sort-numeric')) {
        findSortKey = function($cell) {
          var key = parseFloat($cell.text().replace(/[^\d.,-]+/, ''));

          return isNaN(key) ? 0 : key;
        };
      }

      else if ($(this).is('.sort-date')) {
        findSortKey = function($cell) {
          return Date.parse('1 ' + $cell.text());
        };
      }

      if (findSortKey) {
        $(this).addClass('clickable').live('hover',function() {
          $(this).addClass('hover');
        }, function() {
          $(this).removeClass('hover');
        }).click(function() {



                  var newDirection = 1;
          if ($(this).is('.sorted-asc')) {
            newDirection = -1;
          }


                $table.find('th.sortableLM').removeClass("active");
                $(this).addClass("active");


          rows = $table.find('tbody > tr').get();
          $.each(rows, function(index, row) {
            row.sortKey =findSortKey($(row).children('td').eq(column));
          });
          rows.sort(function(a, b) {
            if (a.sortKey < b.sortKey) return -newDirection;
            if (a.sortKey > b.sortKey) return newDirection;
            return 0;
          });

          $.each(rows, function(index, row) {

            $table.children('tbody').append(row);
            row.sortKey = null;

          });



          $table.find('th').removeClass('sorted-asc').removeClass('sorted-desc');
          var $sortHead = $table.find('th.sortableLM').filter(':nth-child('+ (column + 1) + ')');

          if (newDirection == 1) {
            $sortHead.addClass('sorted-asc');
            $sortHead.removeClass('sorted-desc');
          } else {
            $sortHead.addClass('sorted-desc');
            $sortHead.removeClass('sorted-asc');
          }

          $table.find('td').removeClass('sorted').filter(':nth-child(' + (column + 1) + ')').addClass('sorted');



        $table.trigger('repaginate');

        alternateRowColors($('table.sortable'));

        });

      }

    });

  });

});
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

$(document).ready(function() {

$(".MoincherPlusmalin").live("click",function() {
    scrollTop=$(document).scrollTop();
    scrollTopT=$(this).offset();
    $("#MoincherPlusmalin").css({
    "display":"block",
    "top":scrollTopT
    });
    return false;
})
$("#MoincherPlusmalin a.closeMenuMoincherPlusmalin").live("click",function(){
$("#MoincherPlusmalin").css("display","none");
return false;
})


$(".Details").live("click",function() {
    $("#Details").css({
    "display":"block"
    });
    return false;
})
$("#Details a.closeMenuDetails").live("click",function(){
	$("#Details").css("display","none");
	return false;
})

$("#Disclaitraduction-fond").live("click",function(){
$(this).parent().css("display","none");
})
$("#Disclaitraduction a.closeMenu").live("click",function(){
$(this).parent().parent().parent().css("display","none");
})


});


// tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// released under the MIT license

(function($) {

    function maybeCall(thing, ctx) {
        return (typeof thing == 'function') ? (thing.call(ctx)) : thing;
    };

    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        this.fixTitle();
    };

    Tipsy.prototype = {
        show: function() {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();

                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy'; // reset classname in case of dynamic gravity
                $tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).prependTo(document.body);

                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });

                var actualWidth = $tip[0].offsetWidth,
                    actualHeight = $tip[0].offsetHeight,
                    gravity = maybeCall(this.options.gravity, this.$element[0]);

                var tp;
                switch (gravity.charAt(0)) {
                    case 'n':
                        tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 's':
                        tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 'e':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset};
                        break;
                    case 'w':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset};
                        break;
                }

                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                }

                $tip.css(tp).addClass('tipsy-' + gravity);
                $tip.find('.tipsy-arrow')[0].className = 'tipsy-arrow tipsy-arrow-' + gravity.charAt(0);
                if (this.options.className) {
                    $tip.addClass(maybeCall(this.options.className, this.$element[0]));
                }

                if (this.options.fade) {
                    $tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: this.options.opacity});
                } else {

                    $tip.css({visibility: 'visible', opacity: this.options.opacity});
                }
            }
        },

        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() { $(this).remove(); });
            } else {
                this.tip().remove();
            }
        },

        fixTitle: function() {
            var $e = this.$element;
            if ($e.attr('title') || typeof($e.attr('original-title')) != 'string') {
                $e.attr('original-title', $e.attr('title') || '').removeAttr('title');
            }
        },

        getTitle: function() {
            var title, $e = this.$element, o = this.options;
            this.fixTitle();
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },

        tip: function() {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
            }
            return this.$tip;
        },

        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },

        enable: function() { this.enabled = true; },
        disable: function() { this.enabled = false; },
        toggleEnabled: function() { this.enabled = !this.enabled; }
    };

    $.fn.tipsy = function(options) {

        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            var tipsy = this.data('tipsy');
            if (tipsy) tipsy[options]();
            return this;
        }

        options = $.extend({}, $.fn.tipsy.defaults, options);

        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy);
            }
            return tipsy;
        }

        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show();
            } else {
                tipsy.fixTitle();
                setTimeout(function() { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);
            }
        };

        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide();
            } else {
                setTimeout(function() { if (tipsy.hoverState == 'out') tipsy.hide(); }, options.delayOut);
            }
        };

        if (!options.live) this.each(function() { get(this); });

        if (options.trigger != 'manual') {
            var binder   = options.live ? 'live' : 'bind',
                eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave);
        }

        return this;

    };

    $.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover'
    };

    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };

    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };

    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };

    /**
     * yields a closure of the supplied parameters, producing a function that takes
     * no arguments and is suitable for use as an autogravity function like so:
     *
     * @param margin (int) - distance from the viewable region edge that an
     *        element should be before setting its tooltip's gravity to be away
     *        from that edge.
     * @param prefer (string, e.g. 'n', 'sw', 'w') - the direction to prefer
     *        if there are no viewable region edges effecting the tooltip's
     *        gravity. It will try to vary from this minimally, for example,
     *        if 'sw' is preferred and an element is near the right viewable
     *        region edge, but not the top edge, it will set the gravity for
     *        that element's tooltip to be 'se', preserving the southern
     *        component.
     */
     $.fn.tipsy.autoBounds = function(margin, prefer) {
		return function() {
			var dir = {ns: prefer[0], ew: (prefer.length > 1 ? prefer[1] : false)},
			    boundTop = $(document).scrollTop() + margin,
			    boundLeft = $(document).scrollLeft() + margin,
			    $this = $(this);

			if ($this.offset().top < boundTop) dir.ns = 'n';
			if ($this.offset().left < boundLeft) dir.ew = 'w';
			if ($(window).width() + $(document).scrollLeft() - $this.offset().left < margin) dir.ew = 'e';
			if ($(window).height() + $(document).scrollTop() - $this.offset().top < margin) dir.ns = 's';

			return dir.ns + (dir.ew ? dir.ew : '');
		}
	};

})(jQuery);

(function($){$.fn.jScroll=function(e){var f=$.extend({},$.fn.jScroll.defaults,e);return this.each(function(){var a=$(this);var b=$(window);var c=new location(a);b.scroll(function(){a.stop().animate(c.getMargin(b),f.speed)})});function location(d){this.min=d.offset().top;this.originalMargin=parseInt(d.css("margin-top"),10)||0;this.getMargin=function(a){var b=d.parent().height()-d.outerHeight();var c=this.originalMargin;if(a.scrollTop()>=this.min)c=c+f.top+a.scrollTop()-this.min;if(c>b)c=b;return({"marginTop":c+'px'})}}};$.fn.jScroll.defaults={speed:"slow",top:10}})(jQuery);






$(function () {

  var msie6 = $.browser == 'msie' && $.browser.version < 7;

  if (!msie6) {
    if ($('#scrollingDivs').length > 0) {
    var top = $('#scrollingDivs').offset().top - parseFloat($('#scrollingDivs').css('margin-top').replace(/auto/, 0));
    $(window).scroll(function (event) {
      // what the y position of the scroll is
      var y = $(this).scrollTop();

      // whether that's below the form
      if (y >= top) {
        // if so, ad the fixed class
        $('#scrollingDivs').addClass('fixed');
      } else {
        // otherwise remove it
        $('#scrollingDivs').removeClass('fixed');
      }
    });
  }}
});


(function($){
    $.fn.extend({
    customStyle : function(options) {
    $(".customStyleSelectBox").remove();

            return this.each(function() {
                var currentSelected = $(this).find(':selected');
                $(this).after('<span class="customStyleSelectBox"><span class="customStyleSelectBoxInner"><input type="text" class="hidd" /><span class="text">'+currentSelected.text()+'</span></span></span>').css({position:'absolute', 'visibility':'hidden','z-index':'-1',fontSize:$(this).next().css('font-size')});
                var selectBoxSpan = $(this).next();
                var selectBoxWidth = parseInt($(this).width()) - parseInt(selectBoxSpan.css('padding-left')) -parseInt(selectBoxSpan.css('padding-right'));
                var selectBoxSpanInner = selectBoxSpan.find(':first-child');
                selectBoxSpan.css({'float':'left'});
                selectBoxSpanInner.css({width:selectBoxWidth,display:'block'});
                var selectBoxHeight = parseInt(selectBoxSpan.height()) + parseInt(selectBoxSpan.css('padding-top')) + parseInt(selectBoxSpan.css('padding-bottom'));
                var $options = $('option', $(this));
                var blocOption=$('<span class="blocOption"></span>');
                $options.each(function(e) {
                            $('<span class="option">'+$(this).text()+'</span>').bind('click',{'qui':$(this),'num':e},function(e) {
                             if($.browser.msie&&$.browser.version <8) {
                                $(this).parent().parent().prev().find('option:eq('+e.data['num']+')').attr("selected", true);
                             }
                             else {
                            $(this).parent().parent().prev().find('option:eq('+e.data['num']+')').attr("selected", true).siblings().attr("selected",false);
                            }

                            $(this).parent().parent().prev().focus();
                            textselec=$(this).html();
                            $(this).parent().parent().find('.customStyleSelectBoxInner .text').html(textselec);
                            $(this).parent().css('display','none');
                            $(this).css({
                            "background-color":'#C5D3EB',
                            "color":'#636363'
                            }).siblings().css({
                            "background-color":'#ffffff',
                            "color":'#636363'
                            });
                            }).appendTo(blocOption);
                      });
                $(this).next().append(blocOption);
                longueur=$(this).next().find('.blocOption').width();
                $(this).next().find('.customStyleSelectBoxInner').css('width',longueur+20);
                $(this).next().find('.blocOption').css('width',longueur+20);
                $(this).next().find('.customStyleSelectBoxInner input').bind('blur',function() {
                    $(this).parent().parent().find('.blocOption').css('display','none');
                })
                $(this).next().find('.blocOption').mouseover(function() {
                    $(this).parent().find('.customStyleSelectBoxInner input').unbind('blur');
                }).mouseout(function() {
                $(this).parent().find('.customStyleSelectBoxInner input').bind('blur',function() {
                    $(this).parent().parent().find('.blocOption').css('display','none')});
                });


                $(this).next().find('.customStyleSelectBoxInner').bind('click',function() {
                    $(this).find(".hidd").focus();
                    if ($(this).parent().find('.blocOption').css('display')=="block"){
                                        $(this).parent().find('.blocOption').css('display','none');
                    }
                    else {
                                        $(this).parent().parent().find('.blocOption').css('display','none');
                                        $(this).parent().find('.blocOption').css('display','block');
                    }

                })
         });

    }
    });
})(jQuery);

/**
 * Interface Elements for jQuery
 * utility function
 *
 * http://interface.eyecon.ro
 *
 * Copyright (c) 2006 Stefan Petre
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 *
 */

jQuery.iUtil = {
	getPosition : function(e)
	{
		var x = 0;
		var y = 0;
		var es = e.style;
		var restoreStyles = false;
		if (jQuery(e).css('display') == 'none') {
			var oldVisibility = es.visibility;
			var oldPosition = es.position;
			restoreStyles = true;
			es.visibility = 'hidden';
			es.display = 'block';
			es.position = 'absolute';
		}
		var el = e;
		while (el){
			x += el.offsetLeft + (el.currentStyle && !jQuery.browser.opera ?parseInt(el.currentStyle.borderLeftWidth)||0:0);
			y += el.offsetTop + (el.currentStyle && !jQuery.browser.opera ?parseInt(el.currentStyle.borderTopWidth)||0:0);
			el = el.offsetParent;
		}
		el = e;
		while (el && el.tagName  && el.tagName.toLowerCase() != 'body')
		{
			x -= el.scrollLeft||0;
			y -= el.scrollTop||0;
			el = el.parentNode;
		}
		if (restoreStyles == true) {
			es.display = 'none';
			es.position = oldPosition;
			es.visibility = oldVisibility;
		}
		return {x:x, y:y};
	},
	getPositionLite : function(el)
	{
		var x = 0, y = 0;
		while(el) {
			x += el.offsetLeft || 0;
			y += el.offsetTop || 0;
			el = el.offsetParent;
		}
		return {x:x, y:y};
	},
	getSize : function(e)
	{
        var clone=$(e).clone();
        var blocTest= $("<div id='testwidth'></div>");
        blocTest.append(clone);
        $("body").append(blocTest);
        var w = $("#testwidth select").css("width");
		var h = $("#testwidth select").css("height");
$("#testwidth").remove();
		return {w:w, h:h};
	},
	getSizeLite : function(el)
	{
		return {
			wb:el.offsetWidth||0,
			hb:el.offsetHeight||0
		};
	},
	getClient : function(e)
	{
		var h, w, de;
		if (e) {
			w = e.clientWidth;
			h = e.clientHeight;
		} else {
			de = document.documentElement;
			w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
			h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
		}
		return {w:w,h:h};
	},
	getScroll : function (e)
	{
		var t=0, l=0, w=0, h=0, iw=0, ih=0;
		if (e && e.nodeName.toLowerCase() != 'body') {
			t = e.scrollTop;
			l = e.scrollLeft;
			w = e.scrollWidth;
			h = e.scrollHeight;
			iw = 0;
			ih = 0;
		} else  {
			if (document.documentElement) {
				t = document.documentElement.scrollTop;
				l = document.documentElement.scrollLeft;
				w = document.documentElement.scrollWidth;
				h = document.documentElement.scrollHeight;
			} else if (document.body) {
				t = document.body.scrollTop;
				l = document.body.scrollLeft;
				w = document.body.scrollWidth;
				h = document.body.scrollHeight;
			}
			iw = self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
			ih = self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;
		}
		return { t: t, l: l, w: w, h: h, iw: iw, ih: ih };
	},
	getMargins : function(e, toInteger)
	{
		var el = jQuery(e);
		var t = el.css('marginTop') || '';
		var r = el.css('marginRight') || '';
		var b = el.css('marginBottom') || '';
		var l = el.css('marginLeft') || '';
		if (toInteger)
			return {
				t: parseInt(t)||0,
				r: parseInt(r)||0,
				b: parseInt(b)||0,
				l: parseInt(l)
			};
		else
			return {t: t, r: r,	b: b, l: l};
	},
	getPadding : function(e, toInteger)
	{
		var el = jQuery(e);
		var t = el.css('paddingTop') || '';
		var r = el.css('paddingRight') || '';
		var b = el.css('paddingBottom') || '';
		var l = el.css('paddingLeft') || '';
		if (toInteger)
			return {
				t: parseInt(t)||0,
				r: parseInt(r)||0,
				b: parseInt(b)||0,
				l: parseInt(l)
			};
		else
			return {t: t, r: r,	b: b, l: l};
	},
	getBorder : function(e, toInteger)
	{
		var el = jQuery(e);
		var t = el.css('borderTopWidth') || '';
		var r = el.css('borderRightWidth') || '';
		var b = el.css('borderBottomWidth') || '';
		var l = el.css('borderLeftWidth') || '';
		if (toInteger)
			return {
				t: parseInt(t)||0,
				r: parseInt(r)||0,
				b: parseInt(b)||0,
				l: parseInt(l)||0
			};
		else
			return {t: t, r: r,	b: b, l: l};
	},
	getPointer : function(event)
	{
		var x = event.pageX || (event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft)) || 0;
		var y = event.pageY || (event.clientY + (document.documentElement.scrollTop || document.body.scrollTop)) || 0;
		return {x:x, y:y};
	},
	traverseDOM : function(nodeEl, func)
	{
		func(nodeEl);
		nodeEl = nodeEl.firstChild;
		while(nodeEl){
			jQuery.iUtil.traverseDOM(nodeEl, func);
			nodeEl = nodeEl.nextSibling;
		}
	},
	purgeEvents : function(nodeEl)
	{
		jQuery.iUtil.traverseDOM(
			nodeEl,
			function(el)
			{
				for(var attr in el){
					if(typeof el[attr] === 'function') {
						el[attr] = null;
					}
				}
			}
		);
	},
	centerEl : function(el, axis)
	{
		var clientScroll = jQuery.iUtil.getScroll();
		var windowSize = jQuery.iUtil.getSize(el);
		if (!axis || axis == 'vertically')
			jQuery(el).css(
				{
					top: clientScroll.t + ((Math.max(clientScroll.h,clientScroll.ih) - clientScroll.t - windowSize.hb)/2) + 'px'
				}
			);
		if (!axis || axis == 'horizontally')
			jQuery(el).css(
				{
					left:	clientScroll.l + ((Math.max(clientScroll.w,clientScroll.iw) - clientScroll.l - windowSize.wb)/2) + 'px'
				}
			);
	},
	fixPNG : function (el, emptyGIF) {
		var images = jQuery('img[@src*="png"]', el||document), png;
		images.each( function() {
			png = this.src;
			this.src = emptyGIF;
			this.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + png + "')";
		});
	}
};

// Helper function to support older browsers!
[].indexOf || (Array.prototype.indexOf = function(v, n){
	n = (n == null) ? 0 : n;
	var m = this.length;
	for (var i=n; i<m; i++)
		if (this[i] == v)
			return i;
	return -1;
});
