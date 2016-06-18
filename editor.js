$(document).ready(function(){

	$(".text_header").hide();

    $(".header").mouseenter(function(){
        $(".text_header").show();
    });
    $(".header").mouseleave(function(){
        $(".text_header").hide();
	 });

    $(".text_footer").hide();

    $(".footer").mouseenter(function(){
        $(".text_footer").show();
    });
    $(".footer").mouseleave(function(){
        $(".text_footer").hide();
	 });

    $(".text_page").hide();

    $(".page").mouseenter(function(){
        $(".text_page").show();
    });
    $(".page").mouseleave(function(){
        $(".text_page").hide();
	 });
    $('.dropdown-content-subcontent-text').hover(function(){
    $(this).parent().toggleClass('hover');
	});
	$('.dropdown-content-subcontent-background').hover(function(){
    $(this).parent().toggleClass('hover');
	});
	$('.dropdown-content-subcontent-image').hover(function(){
    $(this).parent().toggleClass('hover');
	});
	$('.dropdown-content-subcontent-video').hover(function(){
    $(this).parent().toggleClass('hover');
	});
	$('.dropdown-content-subcontent-menu').hover(function(){
    $(this).parent().toggleClass('hover');
	});
	$('.dropdown-content-subcontent-list').hover(function(){
    $(this).parent().toggleClass('hover');
	});
	$('.dropdown-content-subcontent-box').hover(function(){
    $(this).parent().toggleClass('hover');
	});
	$('.dropdown-content-subcontent-strip').hover(function(){
    $(this).parent().toggleClass('hover');
	});
	$('.dropdown-content-subcontent-button').hover(function(){
    $(this).parent().toggleClass('hover');
	});
	var x=400;var y=300;
		var mm=0;

	$('.text-large-heading').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.text-large-heading').mouseenter(function(){
		
			var text_large_heading_text='<div class="'+mm+'" contenteditable="true" style="position:absolute;top:'+y+'px;left:'+x+'px;"><h2>\
  This is a heading</h2></div>';
	$("body").append(text_large_heading_text);
	$("."+mm).draggable({cancel:"h2"});
	});

	$('.text-large-heading').mouseleave(function(){
	if($('.text-large-heading').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	}
	});

	$('.text-small-heading').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.text-small-heading').mouseenter(function(){
		
			var text_small_heading_text='<div class="'+mm+'" contenteditable="true" style="position:absolute;top:'+y+'px;left:'+x+'px;"><h4>\
  This is a heading</h4></div>';
	$("body").append(text_small_heading_text);
	$("."+mm).draggable({cancel:"h4"});
	});

	$('.text-small-heading').mouseleave(function(){
	if($('.text-small-heading').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});

	$('.text-large-paragraph').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.text-large-paragraph').mouseenter(function(){
		
			var text_large_paragraph_text='<div class="'+mm+'" contenteditable="true" style="position:absolute;top:'+y+'px;left:'+x+'px;font-size:110%"><p>\
  This is a paragraph</p></div>';
	$("body").append(text_large_paragraph_text);
	$("."+mm).draggable({cancel:"p"});
	});

	$('.text-large-paragraph').mouseleave(function(){
	if($('.text-large-paragraph').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});

	$('.text-small-paragraph').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;

	});

	$('.text-small-paragraph').mouseenter(function(){
		
			var text_small_paragraph_text='<div class="'+mm+'" style="position:absolute;top:'+y+'px;left:'+x+'px;font-size:80%"><p contenteditable="true">\
  This is a paragraph</p></div>';
	$("body").append(text_small_paragraph_text);
	$("."+mm).draggable({cancel:"p"});
	});

	$('.text-small-paragraph').mouseleave(function(){
	if($('.text-small-paragraph').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});

	$('.Bullet').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.Bullet').mouseenter(function(){
		
			var Bullet_text='<div class="'+mm+'" contenteditable="true" style="position:absolute;top:'+y+'px;left:'+x+'px;"><ul>\
  <li>First item</li>\
  <li>Second item</li>\
  <li>Third item</li>\
</ul></div>';
	$("body").append(Bullet_text);
	
	});

	$('.Bullet').mouseleave(function(){
	if($('.Bullet').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});
	
	var body_has_bgimage=false;	
		$("#bg").change(function(){
			$("body").css("background-color",$("#bg").val());
		});
	
		$(".bgcolor").click(function(){
			$("#bg").trigger("click");
		});
var bgoinputopacity_seen=0;
$(document).on('click',function(e){
	//alert(e.pageX+','+e.pageY);
	//alert(e.target.className);
	var click_x=e.pageX,click_y=e.pageY;
	//if(bgoptions_seen==1){
		$(".editbg").remove();
		//}
	if(!$(e.target).closest(".imagediv").length && !$(e.target).closest(".urlimagediv").length && !$(e.target).is(".fbviddiv") && !$(e.target).is(".youtubeviddiv") && body_has_bgimage){
		var bgoptions='<div class="btn-group animated rubberBand editbg" style="position:absolute;left:'+click_x+'px;top:'+click_y+'px;">'+		
		'<button class="btn btn-primary position-bgimage">Background Position</button>'+
		'<div class="dropdown">'+
		'<button class="btn btn-primary dropdown-toggle attach-bgimage" data-toggle="dropdown">Background Attachment<span class="caret"></span></button>'+
		'<ul class="dropdown-menu" role="menu">'+
		'<li><a href="#" class="fixed-bg">Fixed</a></li>'+
		'<li><a href="#" class="scroll-bg">Default</a></li>'+	
		'</ul></div>'+	
		'<div class="dropdown">'+
		'<button class="btn btn-primary dropdown-toggle size-bgimage" data-toggle="dropdown">Background Size<span class="caret"></span></button>'+
		'<ul class="dropdown-menu" role="menu">'+
		'<li><a href="#" class="cover-bgsize">Cover</a></li>'+
		'<li><a href="#" class="contain-bgsize">Contain</a></li>'+
		'<li><a href="#" class="auto-bgsize">Default</a></li>'+
		'<li><a href="#" class="input-bgsize">Give Input</a></li>'+
		'</ul></div>'+/**/
		'<div class="dropdown">'+
		'<button class="btn btn-primary dropdown-toggle repeat-bgimage" data-toggle="dropdown">background Repeat<span class="caret"></span></button>'+
		'<ul class="dropdown-menu" role="menu">'+
		'<li><a href="#" class="repeat-both">Repeat-x&y</a></li>'+
		'<li><a href="#" class="repeat-x">Repeat-x</a></li>'+
		'<li><a href="#" class="repeat-y">Repeat-y</a></li>'+
		'<li><a href="#" class="no-repeat">No repeat</a></li>'+
		'</ul>'+
		'</div>'+
		'<button class="btn btn-primary delete-bgimage"><i class="fa fa-trash-o"></i>  Delete Image</button>'+
		'</div>';
		$("body").append(bgoptions);
	}
});
$(document).on('click','.attach-bgimage',function(e){
	e.stopPropogation();
});
$(document).on('click','.fixed-bg',function(e){
	$("body").css('background-attachment','fixed');
	e.stopPropogation();
});
$(document).on('click','.scroll-bg',function(e){
	$("body").css('background-attachment','scroll');
	e.stopPropogation();
});
$(document).on('click','.size-bgimage',function(e){
	e.stopPropogation();
});
$(document).on('click','.cover-bgsize',function(e){
	$("body").css('background-size','cover');
	e.stopPropogation();
});
$(document).on('click','.contain-bgsize',function(e){
	$("body").css('background-size','contain');
	e.stopPropogation();
});
$(document).on('click','.auto-bgsize',function(e){
	$("body").css('background-size','auto');
	e.stopPropogation();
});/**/
var dialog0=$(".modal-input-for-bg-sizes").dialog({
	autoOpen:false,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:'explode',
		duration:1000
	},
	width:350,
	height:350,
	modal:true,
	buttons:{
		//"OK":size_the_bgimage,
		Cancel:function(){
			dialog0.dialog("close");
		}
	},
	close:function(){
		form0[0].reset();
	}
});
var form0=dialog0.find("form").on('submit',function(e){
	e.preventDefault();
	size_the_bgimage();
});

$(document).on('click','.input-bgsize',function(e){
	//var input_manual='<div class="for-input_manual"><p>Type in x and y,for the size of background image would be x% of total width and y% of total height</p>'+
	dialog0.dialog("open");
	e.stopPropogation();
});
function size_the_bgimage(){
	$("body").css('background-size',$(".x-input-for-bg-size").val()+'% '+$(".y-input-for-bg-size").val()+'%');
	dialog0.dialog("close");
}

$(document).on('click','.delete-bgimage',function(e){
	$("body").css('background-image','');
	$('.editbg').remove();
	body_has_bgimage=false;
	e.stopPropogation();
});
$(document).on('click','.repeat-bgimage',function(e){
	e.stopPropogation();
});
		 
$(document).on('click','.repeat-both',function(e){
	$("body").css('background-repeat','repeat');
	e.stopPropogation();
});
$(document).on('click','.repeat-x',function(e){
	$("body").css('background-repeat','repeat-x');
	e.stopPropogation();
});
$(document).on('click','.repeat-y',function(e){
	$("body").css('background-repeat','repeat-y');
	e.stopPropogation();
});
$(document).on('click','.no-repeat',function(e){
	$("body").css('background-repeat','no-repeat');
	e.stopPropogation();
});
//var  appendedoptionsforbgpos_seen=false;
/*var dialog9=$(".modal-input-for-bg-pos").dialog({
	autoOpen:false,
	width:350,
	height:350,
	modal:true,
	buttons:{
		"OK":pos_the_bgimage,
		Cancel:function(){
			dialog9.dialog("close");
		}
	},
	close:function(){
		form9[0].reset();
	}
});
var form9=dialog9.find("form").on('submit',function(e){
	e.preventDefault();
	pos_the_bgimage();
});
$(document).on('click','.position-bgimage',function(e){
	/*if(!appendedoptionsforbgpos_seen){
		var appended_options_pos='<div class="just-for-stoppropogation" style="background:black;color:white;"><p>Type in x and y,for the position of background-image would be x% from left and y% from top.</p>'+
		'<label>% from left:</label><input type="number" value="0" placeholder="ex: 50" min="0" max="100" class="left-percentbgimage" style="color:black;"><br>'+
		'<label>% from top:</label><input type="number" value="0" placeholder="ex: 50" min="0" max="100" class="top-percentbgimage" style="color:black;"></div>';
		$(".editbg").append(appended_options_pos);
		 appendedoptionsforbgpos_seen=true;
	}
	dialog9.dialog("open");	 	
	e.stopPropogation();
});
function pos_the_bgimage{
	$("body").css('background-position',$(".left-percentbgimage").val()+'% '+$(".top-percentbgimage").val()+'%');
	dialog9.dialog("close");	
}*/
var dialog9=$(".modal-input-for-bg-pos").dialog({
	autoOpen:false,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:'explode',
		duration:1000
	},
	width:350,
	height:350,
	modal:true,
	buttons:{
		//"OK":pos_the_bgimage,
		Cancel:function(){
			dialog9.dialog("close");
		}
	},
	close:function(){
		form9[0].reset();
	}
});
var form9=dialog9.find("form").on('submit',function(e){
	e.preventDefault();
	pos_the_bgimage();
});

$(document).on('click','.position-bgimage',function(e){
	//var input_manual='<div class="for-input_manual"><p>Type in x and y,for the size of background image would be x% of total width and y% of total height</p>'+
	dialog9.dialog("open");
	e.stopPropogation();
});
function pos_the_bgimage(){
	$("body").css('background-position',$(".x-input-for-bg-pos").val()+'% '+$(".y-input-for-bg-pos").val()+'%');
	dialog9.dialog("close");
}
/*$(document).on('click','.left-percentbgimage',function(e){
	e.stopPropogation();
});
$(document).on('change','.left-percentbgimage',function(e){
	$("body").css('background-position',$('.left-percentbgimage').val()+'% '+$('.top-percentbgimage').val()+'%');
});
$(document).on('click','.just-for-stoppropogation',function(e){
	e.stopPropogation();
});*/
/*$(document).on('click','.top-percentbgimage',function(e){
	e.stopPropogation();
});
$(document).on('change','.top-percentbgimage',function(e){
	$("body").css('background-position',$('.left-percentbgimage').val()+'%'+' '+$('.top-percentbgimage').val()+'%');

});*/


    $("#fileinput1").change(function(){
    	if(this.files && this.files[0]){
    		var reader=new FileReader();
    		reader.onload=imageIsLoadedforbg;
    		reader.readAsDataURL(this.files[0]);
    	}
    });

		function imageIsLoadedforbg(e){
			$('body').css('background-image','url("'+e.target.result+'")');
			body_has_bgimage=true;
		}
		$("#bgimage").click(function(){
			$("#fileinput1").click();
		});

/*$("#urlbgimage").click(function(){
	var urlbg=prompt("Enter a URL","");
	if(urlbg!=null && urlbg!=""){
		$("body").css('background-image','url("'+urlbg+'")');
		body_has_bgimage=true;
	}
});*/

$("#urlbgimage").click(function(){
	dialog1.dialog("open");
});	

var dialog1=$(".modal-input-for-bgimage").dialog({
	autoOpen:false,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:'explode',
		duration:1000
	},
	height:250,
	width:350,
	modal:true,
	buttons:{
		//"OK": addurlbgimage,
		Cancel:function(){
			dialog1.dialog("close");
		}
	},
	close:function(){
		form1[0].reset();
	}
});
var form1=dialog1.find("form").on('submit',function(e){
	e.preventDefault();
	addurlbgimage();
});
function addurlbgimage(){
	$("body").css('background','url("'+$(".url-input-for-bg-image").val()+'")');
	dialog1.dialog("close");
	body_has_bgimage=true;
}

	
		$("#imgupload").click(function(){
					$("#fileinput2").click();
				});

	   		 $("#fileinput2").change(function(){	
	    			for(var i=0;i<this.files.length;i++){
	    			var reader=new FileReader();
	    			reader.onload=imageisloaded;
	    			reader.readAsDataURL(this.files[i]);
	    			$(this).attr('value','');
	    			}
	   		 });
		function imageisloaded(e){
	    				var imag='<div class="imagediv" style="cursor:move;width:200px;height:200px;position:absolute;top:'+x+'px;left:'+y+'px">'+	
	    				'<a href="#" class="imageanchor"><img src="'+e.target.result+'" class="image" alt="sorry!image not found" style="width:100%;height:100%;opacity:1;"></a>'+	
	    				'<a class="duplicate-anchor" href="#"></a>'+
	   					'<div class="btn-group animated rubberBand editimage" style="display:none;">'+
	    				'<button class="btn btn-primary opacity-image">Change Opacity<span class="caret"></span></button>'+
	    				'<div class="dropdown shape-imagedrop">'+
						'<button class="btn btn-primary dropdown-toggle shape-image" data-toggle="dropdown">Shape<span class="caret"></span></button>'+
						'<ul class="dropdown-menu" role="menu">'+
						'<li><a href="#" class="rounded">Rounded</a></li>'+
						'<li><a href="#" class="circle">Circle</a></li>'+
						'<li><a href="#" class="thumbnail">Thumbnail</a></li>'+
						'<li><a href="#" class="normal">Normal</a></li>'+
						'</ul></div>'+
						'<div class="dropdown animate-drop">'+
						'<button class="btn btn-primary dropdown-toggle animateadd" data-toggle="dropdown">Animate<span class="caret"></span></button>'+
						'<ul class="dropdown-menu scrollable-menu" role="menu">'+
						'<li><a href="#" class="animate_type">Animation Types</a></li>'+
						'<li><a href="#" class="advance_animate">Advanced Animation Options</a></li>'+	
						'</ul></div>'+
						'<button class="btn btn-primary link-image">Hyperlink<span class="caret"></span></button>'+
	    				'<button class="btn btn-primary delete-image"><i class="fa fa-trash-o"></i>  Delete Image</button>'+
	    				'</div>'+
	    				'</div>';
						$("body").append(imag);
						$(".imagediv").draggable().resizable();
						x=x+100;
						y=y+100;
	    			}

		$("#urlimage2submit").click(function(){
			dialog2.dialog("open");
		});
		var dialog2=$(".modal-input-for-generalimage").dialog({
			autoOpen:false,
			show:{
				effect:"blind",
				duration:1000
			},
			hide:{
				effect:'explode',
				duration:1000
			},
			height:300,
			width:350,
			modal:true,
			buttons:{
				"OK":function(e){
					//e.preventDefault();			
					addurlgeneralimage();
				},
				Cancel:function(){
					dialog2.dialog("close");
				}
			},
			close:function(){
				form2[0].reset();
			}
		});
		var form2=dialog2.find("form").on('submit',function(e){
			e.preventDefault();
			addurlgeneralimage();
		});
		function addurlgeneralimage(){
			var imag='<div class="imagediv" style="cursor:move;position:absolute;top:'+y+'px;left:'+x+'px;width:100px;height:100px;"><a href="#" class="imageanchor"><img class="image" alt="Sorry!Image not found" src="'+$(".-input-for-general-image").val()+'" style="width:100%;height:100%;"></a>'+
			'<a class="duplicate-anchor" href="#"></a>'+
			'<div class="btn-group animated rubberBand editimage" style="display:none;">'+
			'<button class="btn btn-primary opacity-image">Change Opacity<span class="caret"></span></button>'+
			'<div class="dropdown shape-imagedrop">'+
			'<button class="btn btn-primary dropdown-toggle shape-image" data-toggle="dropdown">Shape<span class="caret"></span></button>'+
			'<ul class="dropdown-menu" role="menu">'+
			'<li><a href="#" class="rounded">Rounded</a></li>'+
			'<li><a href="#" class="circle">Circle</a></li>'+
			'<li><a href="#" class="thumbnail">Thumbnail</a></li>'+
			'<li><a href="#" class="normal">Normal</a></li>'+
			'</ul></div>'+
			'<div class="dropdown animate-drop">'+
			'<button class="btn btn-primary dropdown-toggle animateadd" data-toggle="dropdown">Animate<span class="caret"></span></button>'+
			'<ul class="dropdown-menu" role="menu">'+
			'<li><a href="#" class="animate_type_">Animation Types</a></li>'+
			'<li><a href="#" class="advance_animate_">Advanced Animation Options</a></li>'+	
			'</ul></div>'+
			'<button class="btn btn-primary link-image">Hyperlink<span class="caret"></span></button>'+
			'<button class="btn btn-primary delete-image"><i class="fa fa-trash-o"></i>  Delete Image</button>'+
			'</div>'+
			'</div>';
			$("body").append(imag);
			$(".imagediv").draggable().resizable();
			x=x+50;
			y=y+50;
			dialog2.dialog("close");
			return;
		}			


		//latest
		var opacity_input_seen=0;

		$(document).on('click','.imagediv',function(){
				$(".editimage").slideUp();
				$(this).children(".editimage").slideDown();
				if(opacity_input_seen==1){
					$(".opacity-image-quantity").remove();
					opacity_input_seen=0;
				}
		});
		$(document).on('click','.delete-image',function(){
			$(this).parent().parent().remove();
		});
		$(document).on('click','.opacity-image',function(e){
			if(opacity_input_seen==0){
			var inputOpacity='<input type="number" class="opacity-image-quantity" min="0" max="10" value="'+$(this).parent().siblings().children('.image').css('opacity')*10+'">';
			$(".editimage").append(inputOpacity);
			opacity_input_seen=1;
			}
			e.stopPropogation();
		});
		$(document).on('click','.opacity-image-quantity',function(e){
			e.stopPropogation();
		});
		$(document).on('change','.opacity-image-quantity',function(e){
			$(this).parent().siblings().children('.image').css('opacity',$(this).val()/10);
		});
		$(document).on('click',function(e){
					if(!$(e.target).closest(".imagediv").length){
						$(".editimage").slideUp();
					}
		});

$(document).on('click','.shape-image',function(e){
	if(opacity_input_seen==1){
		$(".opacity-image-quantity").remove();
		opacity_input_seen=0;
	}	
	e.stopPropogation();
});
$(document).on('click','.animate-image',function(e){
	if(opacity_input_seen==1){
		$(".opacity-image-quantity").remove();
		opacity_input_seen=0;
	}
	e.stopPropogation();
});
var dialogl1=$(".modal_inputs_for_hyper").dialog({
	autoOpen:false,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:'explode',
		duration:1000
	},
	width:350,
	height:350,
	modal:true,
	buttons:{
		Cancel:function(){
			dialogl1.dialog("close");
		}		
	},	
	close:function(){
		forml1[0].reset();
		$('.duplicate-anchor').removeClass('just_clicked_for_hyper');
	}
});
var forml1=dialogl1.find("form").on('submit',function(e){
	e.preventDefault();
	link_to_image();
});
$(document).on('click','.link-image',function(e){
	dialogl1.dialog("open");
	$(this).parent().siblings('.duplicate-anchor').addClass('just_clicked_for_hyper');
	e.stopPropogation();
});

function link_to_image(){
	if($('.url-for-hyperimage').val()!=""){
		$('.just_clicked_for_hyper').attr('href',$('.url-for-hyperimage').val());
	}	
	$('.just_clicked_for_hyper').attr('target',$('input[name="target"]:checked').val());
		
	$('.duplicate-anchor').removeClass('just_clicked_for_hyper');
	dialogl1.dialog("close");
}

$(document).on('mouseenter',".rounded",function(){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-thumbnail');
	}
	$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-rounded');
}).on('mouseleave','.rounded',function(){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-thumbnail');
	}	
	if(!$(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-rounded');
	}	
});
$(document).on('click',".rounded",function(e){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('clicked-img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('clicked-img-thumbnail');
	}
	$(this).parent().parent().parent().parent().siblings().children('.image').addClass('clicked-img-rounded');
	e.stopPropogation();
});
$(document).on('mouseenter',".circle",function(){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-thumbnail');
	}
	$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-circle');
}).on('mouseleave','.circle',function(){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-thumbnail');
	}
	if(!$(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-circle');
	}
});
$(document).on('click',".circle",function(e){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('clicked-img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('clicked-img-thumbnail');
	}	
	$(this).parent().parent().parent().parent().siblings().children('.image').addClass('clicked-img-circle');
	e.stopPropogation();
});
$(document).on('mouseenter',".thumbnail",function(){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-circle');
	}
	$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-thumbnail');
}).on('mouseleave','.thumbnail',function(){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-circle');
	}
	if(!$(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-thumbnail');
	}
});
$(document).on('click',".thumbnail",function(e){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('clicked-img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('clicked-img-circle');
	}	
	$(this).parent().parent().parent().parent().siblings().children('.image').addClass('clicked-img-thumbnail');
	e.stopPropogation();
});

$(document).on('mouseenter',".normal",function(e){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded') ){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-thumbnail');
	}
}).on('mouseleave','.normal',function(e){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-thumbnail');
	}
});
$(document).on('click',".normal",function(e){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('clicked-img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('clicked-img-circle');
	}	
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('clicked-img-thumbnail');
	}
});	






function  getId(url) {
	var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}
var xx=100;
	var yy=200;
	var mn=1;

var dialog3=$(".modal-input-for-youtube").dialog({
	autoOpen:false,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:'explode',
		duration:1000
	},
	height:300,
	width:350,
	modal:true,
	buttons:{
		"OK":addurlyoutube,
		Cancel:function(){
			dialog3.dialog("close");
		}
	},
	close:function(){
		form3[0].reset();
	}
});
var form3=$(".modal-input-for-youtube").find("form");
form3.on('submit',function(e){
	e.preventDefault();
	addurlyoutube();
});

$("#youtube").click(function(){
	dialog3.dialog("open");
});

function addurlyoutube(){	
		var videoid=getId($(".url-input-for-youtube").val());
		var frame='<div class="youtubeviddiv" style="position:absolute;top:'+xx+'px;left:'+yy+'px;width:420;height:315;">'+
		'<iframe class="youtubevid" src="https://www.youtube.com/embed/'+videoid+'" style="width:90%;height:90%;" frameborder="0" allowfullscreen></iframe>'+
		'<div class="btn-group edityoutubevid" style="display:none;">'+
		'<button class="btn btn-primary delete-youtubevid"><i class="fa fa-trash-o"></i>  Delete Video</button>'+
		//'<button class="btn btn-primary change-youtubevid">Change Video</button>'+
		'</div>'+
		'</div>';
		$("body").append(frame);
		$(".youtubeviddiv").draggable().resizable();
		xx=xx+50;
		yy=yy+50;
		dialog3.dialog("close");
}

$(document).on('click',".youtubeviddiv",function(){
	$(".edityoutubevid").slideUp();
	$(this).children(".edityoutubevid").slideDown();
});
$(document).on('click',".delete-youtubevid",function(){
	$(this).parent().parent().remove();
});

/*var dialog4=$(".modal-input-for-change-youtube").dialog({
	autoOpen:false,
	height:300,
	width:350,
	modal:true,
	buttons:{
		"OK":addurlchangeyoutube,
		Cancel:function(){
			dialog4.dialog("close");
		}
	},
	close:function(){
		form4.reset();
	}
});
var form4=dialog4.find("form").on('submit',function(e){
	e.preventDefault();
	addurlchangeyoutube();
});


$(document).on('click',".change-youtubevid",function(e){
	dialog4.dialog("open");
	e.stopPropogation();
});
function addurlchangeyoutube(){
	var newvideoid=getId($(".url-input-for-change-youtube").val());
	//$(this).parent().siblings().attr('src',"https://www.youtube.com/embed/"+newvideoid);
	
	dialog4.dialog("close");
}*/
$(document).on('click',function(e){
	if(!$(e.target).is(".youtubeviddiv")){
		$(".edityoutubevid").slideUp();
	}
});


var fb_num=1;
$("#fb-video").click(function(){
		dialog5.dialog("open");
});
var dialog5=$(".modal-input-for-fb").dialog({
	autoOpen:false,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:'explode',
		duration:1000
	},
	height:300,
	width:350,
	modal:true,
	buttons:{
		"OK":addfbvideo,
		Cancel:function(){
			dialog5.dialog("close");
		}
	},
	close:function(){
		form5[0].reset();
	}
});
var form5=dialog5.find("form").on('submit',function(e){
	e.preventDefault();
	addfbvideo();
});
function addfbvideo(){
		var dim='<div class="'+fb_num+'fb fbviddiv"></div>';
		$("body").append(dim);
		$("."+fb_num+"fb").html($(".url-input-for-fb").val()+'<br><br><div class="btn-group editfbvid" style="display:none;">'+
			//'<button class="btn btn-primary change-fbvid">Change Video</button>'+
			'<button class="btn btn-primary delete-fbvid"><i class="fa fa-trash-o"></i>  Delete Video</button></div>');
	    $("."+fb_num+"fb").draggable();
	    $("."+fb_num+"fb").css('position','absolute');
	    fb_num++;
	    dialog5.dialog("close");
}

$(document).on('click',".fbviddiv",function(){
	$(".editfbvid").fadeOut();
	$(this).children(".editfbvid").fadeIn();
});
$(document).on('click',".delete-fbvid",function(){
	$(this).parent().parent().remove();
});
$(document).on('click',".change-fbvid",function(e){
	var newfbvideo=prompt("Enter the embed code of video","");
	if(newfbvideo!=null){
		newfbvideo=newfbvideo+'<br><br>'+
			'<div class="btn-group editfbvid" style="display:none;" >'+
			'<button class="btn btn-primary change-fbvid">Change Video</button>'+
			'<button class="btn btn-primary delete-fbvid"><i class="fa fa-trash-o"></i>  Delete Video</button>'+
			'</div>';
		$(this).parent().parent().html(newfbvideo);
	}
	e.stopPropogation();
});
$(document).on('click',function(e){
	if(!$(e.target).is(".fbviddiv")){
		$(".editfbvid").fadeOut();
	}
});

$(".add_image_for_social").click(function(e){
	dialogmsg.dialog("open");
	e.stopPropogation();
});
var dialogmsg=$(".msg_social").dialog({
	autoOpen:false,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:"explode",
		duration:1000
	},
	modal:true,
	buttons:{
		"OK":function(){
		$(this).dialog("close");
		}
	}
});
	
var dialogicon=$(".modal_input_for_icon").dialog({
	autoOpen:false,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:'explode',
		duration:1000
	},
	modal:true,
	buttons:{
		"OK":addicon,
		Cancel:function(){
			dialogicon.dialog("close");
		}
	},
	close:function(){
		formicon[0].reset();
		$(".text_for_fa").show();
		$(".text_for_mi").hide();
	}
});
var formicon=$(".modal_input_for_icon").find("form");

formicon.on('submit',function(e){
	e.preventDefault();
	addicon();
});
$(".add_fa_for_social").click(function(){
	dialogicon.dialog("open");	
});

$("input[name='type_of_icon'][value='fa']").click(function(){
	$(".text_for_fa").show();
	$(".text_for_mi").hide();
});
$("input[name='type_of_icon'][value='material']").click(function(){
	$(".text_for_mi").show();
	$(".text_for_fa").hide();
});

function addicon(){
	
	if($("input[name='type_of_icon']:checked").val()=="fa" && $(".text_for_fa").val()!=""){
		var iconvar='<div class="icondiv"><a href="#" class="iconanchor"><i class="iconic '+$(".text_for_fa").val()+'" style="font-size:30px;color:black;"></i></a>'+
	'<a class="duplicate-icon-anchor" href="#"></a>'+
	'<div class="btn-group animated rubberBand editicon" style="display:none;">'+
	'<button class="btn btn-primary sizencolor-icon">Size and Color<span class="caret"></span></button>'+	
	'<div class="dropdown animate-drop">'+
	'<button class="btn btn-primary dropdown-toggle animateadd" data-toggle="dropdown">Animate<span class="caret"></span></button>'+
	'<ul class="dropdown-menu" role="menu">'+
	'<li><a href="#" class="animate_type">Animation Types</a></li>'+
	'<li><a href="#" class="advance_animate">Advanced Animation Options</a></li>'+	
	'</ul></div>'+
	'<button class="btn btn-primary link-icon">Hyperlink<span class="caret"></span></button>'+
	'<button class="btn btn-primary delete-icon"><i class="fa fa-trash-o"></i>  Delete Icon</button>'+
	'</div>'+
	'</div>';

	$("body").append(iconvar);
	$('.icondiv').css('width','50px');
	$('.icondiv').css('height','50px');
	$('.icondiv').draggable();
	}

	if($("input[name='type_of_icon']:checked").val()=="material" && $(".text_for_mi").val()!=""){
		var iconvar='<div class="icondiv" style="height:auto;width:auto;"><a href="#" class="iconanchor"><i class="iconic material-icons" style="color:black;font-size:30px;">'+$(".text_for_mi").val()+'</i></a>'+
	'<a class="duplicate-icon-anchor" href="#"></a>'+
	'<div class="btn-group animated rubberBand editicon" style="display:none;">'+
	'<button class="btn btn-primary sizencolor-icon">Size and Color<span class="caret"></span></button>'+
	'<div class="dropdown animate-drop">'+
	'<button class="btn btn-primary dropdown-toggle animateadd" data-toggle="dropdown">Animate<span class="caret"></span></button>'+
	'<ul class="dropdown-menu" role="menu">'+
	'<li><a href="#" class="animate_type">Animation Types</a></li>'+
	'<li><a href="#" class="advance_animate">Advanced Animation Options</a></li>'+	
	'</ul></div>'+
	'<button class="btn btn-primary link-icon">Hyperlink<span class="caret"></span></button>'+
	'<button class="btn btn-primary delete-icon"><i class="fa fa-trash-o"></i>  Delete Icon</button>'+
	'</div>'+
	'</div>';

	$("body").append(iconvar);
	$('.icondiv').css('width','50px');
	$('.icondiv').css('height','50px');
	$('.icondiv').draggable();
	}
	dialogicon.dialog("close");
	return;
}
$(document).on('click','.icondiv',function(e){
	$('.editicon').fadeOut();
	$(this).children('.editicon').fadeIn();
	e.stopPropogation();
});
$(document).on('click','.delete-icon',function(){
	$(this).parent().parent().remove();
});	
$(document).on('click','.animate-icon',function(){
	e.stopPropogation();
});
$(document).on('click',function(e){
	if(!$(e.target).closest('.icondiv').length){
		$('.editicon').fadeOut();
	}
});
var dialogsnc=$(".modal_input_for_snc_icon").dialog({
	autoOpen:false,
	width:350,
	height:400,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:'explode',
		duration:1000
	},
	modal:true,
	buttons:{
		"OK":sncicon,
		Cancel:function(){
			dialogsnc.dialog("close");
		}
	},
	close:function(){
		formsnc[0].reset();
		$('.iconanchor').removeClass('justclickedic');	
	}
});
var formsnc=$(".modal_input_for_snc_icon").find("form");
formsnc.on('submit',function(e){
	e.preventDefault();
	sncicon();
});
$(document).on('click','.sizencolor-icon',function(){
	dialogsnc.dialog("open");
	$(this).parent().siblings('.iconanchor').addClass('justclickedic');
});
function sncicon(){
	//if($(".size_for_icon").val()!=""){
		$('.justclickedic').children().css('font-size',$(".size_for_icon").val()+"px");
	//}
	$('.justclickedic').children().css('color',$(".color_for_icon").val());
	$('.iconanchor').removeClass('justclickedic');	
	dialogsnc.dialog("close");
}

var dialogl3=$(".modal_inputs_for_icon_hyper").dialog({
	autoOpen:false,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:'explode',
		duration:1000
	},
	width:350,
	height:350,
	modal:true,
	buttons:{
		//"OK":function(e){
			//e.preventDefault();
			//link_to_urlimage();
		//}
		Cancel:function(){
			dialogl3.dialog("close");
		}
	},
	close:function(){
		forml3[0].reset();
		$('.duplicate-icon-anchor').removeClass('just_clicked_for_hyperic');
	}
});
var forml3=dialogl3.find("form").on('submit',function(e){
	e.preventDefault();
	link_to_icon();
});
$(document).on('click','.link-icon',function(e){
	$(this).parent().siblings('.duplicate-icon-anchor').addClass('just_clicked_for_hyperic');
	dialogl3.dialog("open");
	e.stopPropogation();
});
function link_to_icon(){
	if($('.url-for-hypericon').val()!=""){
		$('.just_clicked_for_hyperic').attr('href',$('.url-for-hypericon').val());
	}
	$('.just_clicked_for_hyperic').attr('target',$('input[name="target_icon"]:checked').val());
	$('.duplicate-icon-anchor').removeClass('just_clicked_for_hyperic');
	dialogl3.dialog("close");
}

$(".click_here_for_link").click(function(){
	var len=$('.urlimageanchor').length,i=0;		
		while(i<len){
			$($('.imageanchor')[i]).attr('href',$($('.imageanchor')[i]).siblings('.duplicate-anchor').attr('href'));
			$($('.imageanchor')[i]).attr('target',$($('.imageanchor')[i]).siblings('.duplicate-anchor').attr('target'));
			i++;
		}
		var lengt=$('.iconanchor').length,k=0;
		while(k<lengt){
			$($('.iconanchor')[k]).attr({
				'href':$('.duplicate-icon-anchor').eq(k).attr('href'),
				'target':$('.duplicate-icon-anchor').eq(k).attr('target')
			});
			k++;
		}
});

});