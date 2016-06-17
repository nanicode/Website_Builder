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
	if(!$(e.target).closest(".uploadedimagediv").length && !$(e.target).closest(".urlimagediv").length && !$(e.target).is(".fbviddiv") && !$(e.target).is(".youtubeviddiv") && body_has_bgimage){
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
	    				var imag='<div class="uploadedimagediv" style="cursor:move;width:200px;height:200px;position:absolute;top:'+x+'px;left:'+y+'px">'+	
	    				'<a href="#" class="uploadedimageanchor"><img src="'+e.target.result+'" class="uploadedimage" alt="sorry!image not found" style="width:100%;height:100%;opacity:1;"></a>'+	
	    				'<a class="duplicate-uploaded-anchor" href="#"></a>'+
	   					'<div class="btn-group animated rubberBand edituploadedimage" style="display:none;">'+
	    				'<button class="btn btn-primary opacity-uploadedimage">Change Opacity<span class="caret"></span></button>'+
	    				'<div class="dropdown shape-uploadedimagedrop">'+
						'<button class="btn btn-primary dropdown-toggle shape-uploadedimage" data-toggle="dropdown">Shape<span class="caret"></span></button>'+
						'<ul class="dropdown-menu" role="menu">'+
						'<li><a href="#" class="roundeduploaded">Rounded</a></li>'+
						'<li><a href="#" class="circleuploaded">Circle</a></li>'+
						'<li><a href="#" class="thumbnailuploaded">Thumbnail</a></li>'+
						'<li><a href="#" class="normaluploaded">Normal</a></li>'+
						'</ul></div>'+
						'<div class="dropdown animate-uploadedimagedrop">'+
						'<button class="btn btn-primary dropdown-toggle animate-uploadedimage" data-toggle="dropdown">Animate<span class="caret"></span></button>'+
						'<ul class="dropdown-menu scrollable-menu" role="menu">'+
						'<li><a href="#" class="yoyo">r</a></li>'+
						'</ul></div>'+
						'<button class="btn btn-primary link-uploadedimage">Hyperlink<span class="caret"></span></button>'+
	    				'<button class="btn btn-primary delete-uploadedimage"><i class="fa fa-trash-o"></i>  Delete Image</button>'+
	    				'</div>'+
	    				'</div>';
						$("body").append(imag);
						$(".uploadedimagediv").draggable().resizable();
						x=x+100;
						y=y+100;
	    			}

		//latest
		var upload_opacity_input_seen=0;

		$(document).on('click','.uploadedimagediv',function(){
				$(".edituploadedimage").slideUp();
				$(this).children(".edituploadedimage").slideDown();
				if(upload_opacity_input_seen==1){
					$(".opacity-uploadedimage-quantity").remove();
					upload_opacity_input_seen=0;
				}
		});
		$(document).on('click','.delete-uploadedimage',function(){
			$(this).parent().parent().remove();
		});
		$(document).on('click','.opacity-uploadedimage',function(e){
			if(upload_opacity_input_seen==0){
			var inputOpacityuploaded='<input type="number" class="opacity-uploadedimage-quantity" min="0" max="10" value="'+$(this).parent().siblings().children('.uploadedimage').css('opacity')*10+'">';
			$(".edituploadedimage").append(inputOpacityuploaded);
			upload_opacity_input_seen=1;
			}
			e.stopPropogation();
		});
		$(document).on('click','.opacity-uploadedimage-quantity',function(e){
			e.stopPropogation();
		});
		$(document).on('change','.opacity-uploadedimage-quantity',function(e){
			$(this).parent().siblings().children('.uploadedimage').css('opacity',$(this).val()/10);
		});
		$(document).on('click',function(e){
					if(!$(e.target).closest(".uploadedimagediv").length){
						$(".edituploadedimage").slideUp();
					}
		});

$(document).on('click','.shape-uploadedimage',function(e){
	e.stopPropogation();
});
$(document).on('click','.animate-uploadedimage',function(e){
	e.stopPropogation();
});
var dialogl1=$(".modal_inputs_for_uploaded_hyper").dialog({
	autoOpen:false,
	width:350,
	height:350,
	modal:true,
	buttons:{
		Cancel:function(){
			dialogl1.dialog("close");
		}		
	},	
	close:function(){
		//forml1[0].reset();
	}
});
var forml1=dialogl1.find("form").on('submit',function(e){
	e.preventDefault();
	link_to_uploadedimage();
});
$(document).on('click','.link-uploadedimage',function(e){
	dialogl1.dialog("open");
	$(this).parent().siblings('.duplicate-uploaded-anchor').addClass('just_clicked_for_hyper');
	e.stopPropogation();
});

function link_to_uploadedimage(){
	if($('.url-for-hyperuploadedimage').val()!=""){
		$('.just_clicked_for_hyper').attr('href',$('.url-for-hyperuploadedimage').val());



	}
	$('.duplicate-uploaded-anchor').removeClass('just_clicked_for_hyper');
	dialogl1.dialog("close");
}

$(document).on('mouseenter',".roundeduploaded",function(){
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('img-thumbnail');
	}
	$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').addClass('img-rounded');
}).on('mouseleave','.roundeduploaded',function(){
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').addClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').addClass('img-thumbnail');
	}	
	if(!$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('img-rounded');
	}	
});
$(document).on('click',".roundeduploaded",function(e){
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('clicked-img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('clicked-img-thumbnail');
	}
	$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').addClass('clicked-img-rounded');
	e.stopPropogation();
});
$(document).on('mouseenter',".circleuploaded",function(){
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('img-thumbnail');
	}
	$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').addClass('img-circle');
}).on('mouseleave','.circleuploaded',function(){
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').addClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').addClass('img-thumbnail');
	}
	if(!$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('img-circle');
	}
});
$(document).on('click',".circleuploaded",function(e){
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('clicked-img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('clicked-img-thumbnail');
	}	
	$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').addClass('clicked-img-circle');
	e.stopPropogation();
});
$(document).on('mouseenter',".thumbnailuploaded",function(){
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('img-circle');
	}
	$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').addClass('img-thumbnail');
}).on('mouseleave','.thumbnailuploaded',function(){
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').addClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').addClass('img-circle');
	}
	if(!$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('img-thumbnail');
	}
});
$(document).on('click',".thumbnailuploaded",function(e){
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('clicked-img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('clicked-img-circle');
	}	
	$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').addClass('clicked-img-thumbnail');
	e.stopPropogation();
});

$(document).on('mouseenter',".normaluploaded",function(e){
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-rounded') ){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('img-thumbnail');
	}
}).on('mouseleave','.normaluploaded',function(e){
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').addClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').addClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').addClass('img-thumbnail');
	}
});
$(document).on('click',".normaluploaded",function(e){
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('clicked-img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('clicked-img-circle');
	}	
	if($(this).parent().parent().parent().parent().siblings().children('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.uploadedimage').removeClass('clicked-img-thumbnail');
	}
});	

$("#urlimage2submit").click(function(){
	dialog2.dialog("open");
});
var dialog2=$(".modal-input-for-generalimage").dialog({
	autoOpen:false,
	height:300,
	width:350,
	modal:true,
	buttons:{
		"OK":addurlgeneralimage,
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
	var imag='<div class="urlimagediv" style="cursor:move;position:absolute;top:'+y+'px;left:'+x+'px;width:100px;height:100px;"><a href="#" class="urlimageanchor"><img class="urlimage" alt="Sorry!Image not found" src="'+$(".url-input-for-general-image").val()+'" style="width:100%;height:100%;"></a>'+
	'<a class="duplicate-url-anchor" href="#"></a>'+
	'<div class="btn-group animated rubberBand editurlimage" style="display:none;">'+
	'<button class="btn btn-primary opacity-urlimage">Change Opacity<span class="caret"></span></button>'+
	'<div class="dropdown shape-urlimagedrop">'+
	'<button class="btn btn-primary dropdown-toggle shape-urlimage" data-toggle="dropdown">Shape<span class="caret"></span></button>'+
	'<ul class="dropdown-menu" role="menu">'+
	'<li><a href="#" class="roundedurl">Rounded</a></li>'+
	'<li><a href="#" class="circleurl">Circle</a></li>'+
	'<li><a href="#" class="thumbnailurl">Thumbnail</a></li>'+
	'<li><a href="#" class="normalurl">Normal</a></li>'+
	'</ul></div>'+
	'<div class="dropdown animate-urlimagedrop">'+
	'<button class="btn btn-primary dropdown-toggle animate-urlimage" data-toggle="dropdown">Animate<span class="caret"></span></button>'+
	'<ul class="dropdown-menu" role="menu">'+
	'<li><a href="#" class="yoyo"></a></li>'+
	'</ul></div>'+
	'<button class="btn btn-primary link-urlimage">Hyperlink<span class="caret"></span></button>'+
	'<button class="btn btn-primary delete-urlimage"><i class="fa fa-trash-o"></i>  Delete Image</button>'+
	'</div>'+
	'</div>';
	$("body").append(imag);
	$(".urlimagediv").draggable().resizable();
	x=x+50;
	y=y+50;
	dialog2.dialog("close");
	return;
}

var url_opacity_input_seen=0;

$(document).on('click','.urlimagediv',function(){
	$('.editurlimage').fadeOut();
	$(this).children('.editurlimage').fadeIn();
	if(url_opacity_input_seen==1){
		$('.opacity-urlimage-quantity').remove();
		url_opacity_input_seen=0;
	}
});
$(document).on('click','.delete-urlimage',function(){
	if(url_opacity_input_seen==1){
		$('.opacity-urlimage-quantity').remove();
		url_opacity_input_seen=0;
	}
	$(this).parent().parent().remove();
});
$(document).on('click','.opacity-urlimage',function(e){
	if(url_opacity_input_seen==0){
		var inputOpacityurl='<input type="number" class="opacity-urlimage-quantity" min="0" max="10" value="'+$(this).parent().siblings().children('.urlimage').css('opacity')*10+'">';
		$(".editurlimage").append(inputOpacityurl);
		url_opacity_input_seen=1;
	}
	e.stopPropogation();
});
$(document).on('click','.opacity-urlimage-quantity',function(e){
	e.stopPropogation();
});
$(document).on('change','.opacity-urlimage-quantity',function(e){
	$(this).parent().siblings().children('.urlimage').css('opacity',$(this).val()/10);
});
$(document).on('click',function(e){
		if(!$(e.target).closest(".urlimagediv").length){
			$(".editurlimage").fadeOut();
		}
});
$(document).on('click','.shape-urlimage',function(e){
	if(url_opacity_input_seen==1){
		$('.opacity-urlimage-quantity').remove();
		url_opacity_input_seen=0;
	}
	e.stopPropogation();
});
$(document).on('click','.animate-urlimage',function(e){
	if(url_opacity_input_seen==1){
		$('.opacity-urlimage-quantity').remove();
		url_opacity_input_seen=0;
	}
	e.stopPropogation();
});

var dialogl2=$(".modal_inputs_for_url_hyper").dialog({
	autoOpen:false,
	width:350,
	height:350,
	modal:true,
	buttons:{
		//"OK":function(e){
			//e.preventDefault();
			//link_to_urlimage();
		//}
		Cancel:function(){
			dialogl2.dialog("close");
		}
	},
	close:function(){
		forml2[0].reset();
	}
});
var forml2=dialogl2.find("form").on('submit',function(e){
	e.preventDefault();
	link_to_urlimage();
});
//var input_for_url_on_image_seen=0;
$(document).on('click','.link-urlimage',function(e){
	dialogl2.dialog("open");
	$(this).parent().siblings('.duplicate-url-anchor').addClass('just_clicked_for_hyper');
	e.stopPropogation();
});
function link_to_urlimage(){
	if($('.url-for-hyperurlimage').val()!=""){
		$('.just_clicked_for_hyper').attr('href',$('.url-for-hyperurlimage').val());



	}
	$('.duplicate-url-anchor').removeClass('just_clicked_for_hyper');
	dialogl2.dialog("close");
}


$(document).on('mouseenter',".roundedurl",function(){
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('img-thumbnail');
	}
	$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').addClass('img-rounded');
}).on('mouseleave','.roundedurl',function(){
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').addClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').addClass('img-thumbnail');
	}	
	if(!$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('img-rounded');
	}	
});
$(document).on('click',".roundedurl",function(e){
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('clicked-img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('clicked-img-thumbnail');
	}
	$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').addClass('clicked-img-rounded');
	e.stopPropogation();
});
$(document).on('mouseenter',".circleurl",function(){
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('img-thumbnail');
	}
	$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').addClass('img-circle');
}).on('mouseleave','.circleurl',function(){
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').addClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').addClass('img-thumbnail');
	}
	if(!$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('img-circle');
	}
});
$(document).on('click',".circleurl",function(e){
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('clicked-img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('clicked-img-thumbnail');
	}	
	$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').addClass('clicked-img-circle');
	e.stopPropogation();
});
$(document).on('mouseenter',".thumbnailurl",function(){
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('img-circle');
	}
	$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').addClass('img-thumbnail');
}).on('mouseleave','.thumbnailurl',function(){
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').addClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').addClass('img-circle');
	}
	if(!$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('img-thumbnail');
	}
});
$(document).on('click',".thumbnailurl",function(e){
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('clicked-img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('clicked-img-circle');
	}	
	$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').addClass('clicked-img-thumbnail');
	e.stopPropogation();
});

$(document).on('mouseenter',".normalurl",function(e){
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-rounded') ){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('img-thumbnail');
	}
}).on('mouseleave','.normalurl',function(e){
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').addClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').addClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').addClass('img-thumbnail');
	}
});
$(document).on('click',".normalurl",function(e){
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('clicked-img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('clicked-img-circle');
	}	
	if($(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimageanchor').children('.urlimage').removeClass('clicked-img-thumbnail');
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
var form3=dialog3.find("form").on('submit',function(e){
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



function myfunction(){
var len=$('.urlimageanchor').length,i=0;
while(i<len){
	$('.urlimageanchor')[i].attr('href')=$('.urlimageanchor')[i].siblings('.duplicate-url-anchor').attr('href');
}
}


});