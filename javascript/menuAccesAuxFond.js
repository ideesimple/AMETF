/**
#  * Copyright (c) 2011 Laurent Toulemonde (www.ideesimple.net)
#  * Licensed under the MIT License:
#  * http://www.opensource.org/licenses/mit-license.php
#  *
#  */
jQuery.fn.menuAccesAuxFond = function(settings){

		this.each(function(y) {
		    ContenuAAfficher="<div id='ContenuAAfficher'></div>";
		    $('body').append(ContenuAAfficher);
		    positionBloc=$("#sidemenu-position .AccesAuFonds").offset();
		    $("#ContenuAAfficher").append($("#sidemenu-position .AccesAuFonds").clone());

		    $("#ContenuAAfficher").css({
		    'left':positionBloc.left,
		    'top':positionBloc.top
		    });

		    var LienNiveau0=jQuery('#ContenuAAfficher .AccesAuFonds > div h4'),
			    LienNiveau1=jQuery('#ContenuAAfficher .AccesAuFonds > div > div > div > div h5')

			    LienNiveau0.live('click',function() {
                    $('body').append('<div id="fade"></div>');
                    $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
                    $("#ContenuAAfficher").addClass("active");
                    boutonFermer='<a href="#" class="closeMenu"><img src="../images/close_pop.png" title="Fermer" alt="Fermer" /></a>';
                    $(this).parent().find("> div").append(boutonFermer);
                    var maxHeight=0;
                    if($(this).parent().find("> div").css('display') =="block") return;


                    $(this).parent().find("> div > div > div h5").removeAttr("class");

                    if ($(this).parent().find("> div > div > div h5").find('img').length) {
                        $(this).parent().find("> div > div > div h5").find('img').attr('src','../images/flech_h5_menu_off.jpg');
                    }
                    else {
                        $('<img style="padding-left:20px" src="../images/flech_h5_menu_off.jpg" alt="" />').appendTo($(this).parent().find("> div > div > div h5"));

                    }
                    $(this).parent().parent().find("> div h4").removeAttr("class");
                    $(this).parent().parent().find("> div h4").addClass("gris");
                    $(this).addClass("active");
                    $(this).parent().parent().find("> div > div").css('display','none');
                    $(this).parent().find("> div").css('display','block');
                    $(this).parent().find("> div > div > div > div").css("display","none");
                    var maxHeight;
                    $nbeH5 =$(this).parent().find('h5').length;
                    $hauteurBloc=($nbeH5*20)+70;
/*                    $(this).parent().find("> div > div > div > div").each(function() {
				        var e = jQuery(this);
				        height = (e.height())/2;
				        maxHeight = (height > maxHeight) ? height : maxHeight;
				    });
*/
                    $(this).parent().find("> div > div").css('height',$hauteurBloc);
                    $('#ContenuAAfficher .AccesAuFonds > div > div').append('<div class="PictoBlanc"></div>');
                    hauteurTrait=parseInt($(".AccesAuFonds").height())+parseInt($(".AccesAuFonds").css("paddingTop"))+parseInt($(".AccesAuFonds").css("paddingBottom"));
                    $('.PictoBlanc').css("height",hauteurTrait-1);
			    })
			    LienNiveau1.live('click',function() {
			    $(this).parent().parent().find('> div h5').removeAttr("class");
			    $(this).parent().parent().find('> div h5 img').attr('src','../images/flech_h5_menu_off.jpg');
			    $(this).addClass("active");
			    $(this).find("img").attr('src',"../images/flech_h5_menu_on.jpg");
                $qui=$(this).parent().find("> div").clone();
                $(this).parent().parent().find("> div > div").css('display','none');
                $(this).parent().parent().find(".ActiveD").remove();
                $(this).parent().parent().prepend($qui.css("display",'block').addClass('ActiveD'));
                $(this).parent().parent().find(".ActiveD ul").makeacolumnlists({cols:2, colWidth:220, equalHeight: true, startN: 1});
                $hauteurBlocAff=$(this).parent().parent().find(".ActiveD .li_container").height();
                $hauteurBlocAff < 100 ? $(this).parent().parent().css('height',$hauteurBlocAff+50):$(this).parent().parent().css('height',$hauteurBlocAff);
//                $(this).parent().parent().css('height',$hauteurBlocAff);


			    });
			});

$(".AccesAuFonds > div > div > div > div > div a").mouseover(function() {
$(this).css("padding-right","0");
})
$(".AccesAuFonds > div > div > div > div > div a").mouseout(function() {
$(this).css("padding-right","10px");
})
}

$(document).ready(function() {
    $(".AccesAuFonds").each(function () {$(this).menuAccesAuxFond()});
    $('a.closeMenu, #fade').live('click', function() {
        $('#fade, .popup_block').fadeOut(function() {
        $('#fade, a.close').remove();
        $("#ContenuAAfficher").removeAttr("class");
        $('#ContenuAAfficher .AccesAuFonds > div h4').removeAttr("class");
        $('#ContenuAAfficher .AccesAuFonds > div > div').css('display','none');
        });
        return false;
    });


    $(window).resize(function() {
        positionBloc=$("#sidemenu-position .AccesAuFonds").offset();
            $("#ContenuAAfficher").css({
		        'left':positionBloc.left,
    		    'top':positionBloc.top
		    });
    });

});