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
		appendedoptionsforbgpos_seen=false;	
		//}
	if(!$(e.target).is(".uploadedimage") && !$(e.target).is(".urlimage") && !$(e.target).is(".fbviddiv") && !$(e.target).is(".youtubeviddiv") && body_has_bgimage){
		var bgoptions='<div class="btn-group editbg" style="position:absolute;left:'+click_x+'px;top:'+click_y+'px;"><button class="btn btn-primary opacity-bgimage">Change Opacity</button>'+
		'<button class="btn btn-primary delete-bgimage">Delete Image</button>'+
		'<button class="btn btn-primary position-bgimage">Background Position<span class="caret"></span></button>'+
		'<div class="dropdown">'+
		'<button class="btn btn-primary dropdown-toggle repeat-bgimage" data-toggle="dropdown">background Repeat<span class="caret"></span></button>'+
		'<ul class="dropdown-menu" role="menu">'+
		'<li><a href="#" class="repeat-both">Repeat-x&y</a></li>'+
		'<li><a href="#" class="repeat-x">Repeat-x</a></li>'+
		'<li><a href="#" class="repeat-y">Repeat-y</a></li>'+
		'<li><a href="#" class="no-repeat">No repeat</a></li>'+
		'</ul>'+
		'</div>'+
		'</div>';
		$("body").append(bgoptions);
	}
});
/*$(document).on('click','.opacity-bgimage',function(e){
	if(bgoinputopacity_seen==0){
		var opacityforbginput='<input type="number" min="0"max="10" class="inputopacityfor-bg" value="'+$("body").css("background-opacity")*10+'">';
		$('.editbg').append(opacityforbginput);
	}
	e.stopPropogation();
});
$(document).on('click','.inputopacityfor-bg',function(e){
	e.stopPropogation();
});
$(document).on('change','.inputopacityfor-bg',function(e){
	$("body").css('background-opacity',$(this).val()/10);
});*/
$(document).on('click','.delete-bgimage',function(e){
	$("body").css('background-image','');
	$('.editbg').remove();
	appendedoptionsforbgpos_seen=false;
	body_has_bgimage=false;
	e.stopPropogation();
});
$(document).on('click','.repeat-bgimage',function(e){
	if(appendedoptionsforbgpos_seen){
		$(".just-for-stoppropogation").remove();
		appendedoptionsforbgpos_seen=false;
	}
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
var  appendedoptionsforbgpos_seen=false;
$(document).on('click','.position-bgimage',function(e){
	if(!appendedoptionsforbgpos_seen){
		var appended_options_pos='<div class="just-for-stoppropogation" style="background:black;color:white;"><p>Type in x and y,for the position of background-image would be x% from left and y% from top.</p>'+
		'<label>% from left:</label><input type="number" value="0" placeholder="ex: 50" min="0" max="100" class="left-percentbgimage" style="color:black;"><br>'+
		'<label>% from top:</label><input type="number" value="0" placeholder="ex: 50" min="0" max="100" class="top-percentbgimage" style="color:black;"></div>';
		$(".editbg").append(appended_options_pos);
		 appendedoptionsforbgpos_seen=true;
	}	 	
	e.stopPropogation();
});
/*$(document).on('click','.left-percentbgimage',function(e){
	e.stopPropogation();
});*/
$(document).on('change','.left-percentbgimage',function(e){
	$("body").css('background-position',$('.left-percentbgimage').val()+'%'+' '+$('.top-percentbgimage').val()+'%');
});
$(document).on('click','.just-for-stoppropogation',function(e){
	e.stopPropogation();
});
/*$(document).on('click','.top-percentbgimage',function(e){
	e.stopPropogation();
});*/
$(document).on('change','.top-percentbgimage',function(e){
	$("body").css('background-position',$('.left-percentbgimage').val()+'%'+' '+$('.top-percentbgimage').val()+'%');
});


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

$("#urlbgimage").click(function(){
	var urlbg=prompt("Enter a URL","");
	if(urlbg!=null && urlbg!=""){
		$("body").css('background-image','url("'+urlbg+'")');
		body_has_bgimage=true;
	}
});

	
		$("#imgupload").click(function(){
					$("#fileinput2").click();
				});

	   		 $("#fileinput2").change(function(){	
	    			for(var i=0;i<this.files.length;i++){
	    			var reader=new FileReader();
	    			reader.onload=imageisloaded;
	    			reader.readAsDataURL(this.files[i]);
	    			}
	   		 });
		function imageisloaded(e){
	    				var imag='<div class="uploadedimagediv" style="cursor:move;width:200px;height:200px;position:absolute;top:'+x+'px;left:'+y+'px">'+
	    				'<img src="'+e.target.result+'" class="uploadedimage" alt="sorry!image not found" style="width:100%;height:100%;opacity:1;">'+
	    				'<div class="btn-group edituploadedimage" style="display:none;">'+
	    				'<button class="btn btn-primary opacity-uploadedimage">ChangeOpacity<span class="caret"></span></button>'+
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
						'<ul class="dropdown-menu" role="menu">'+
						'<li><a href="#" class="yoyo"></a></li>'+
						'</ul></div>'+
	    				'<button class="btn btn-primary delete-uploadedimage">Delete Image</button>'+
	    				'</div>'+
	    				'</div>';
						$("body").append(imag);
						$(".uploadedimagediv").draggable().resizable();
						x=x+100;
						y=y+100;
						mm=mm+1;
	    			}

		//latest
		


		var upload_opacity_input_seen=0;

		$(document).on('click','.uploadedimage',function(){
				$(".edituploadedimage").slideUp();
				$(this).siblings().slideDown();
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
			var inputOpacityuploaded='<input type="number" class="opacity-uploadedimage-quantity" min="0" max="10" value="'+$(this).parent().siblings('.uploadedimage').css('opacity')*10+'">';
			$(".edituploadedimage").append(inputOpacityuploaded);
			upload_opacity_input_seen=1;
			}
			e.stopPropogation();
		});
		$(document).on('click','.opacity-uploadedimage-quantity',function(e){
			e.stopPropogation();
		});
		$(document).on('change','.opacity-uploadedimage-quantity',function(e){
			$(this).parent().siblings('.uploadedimage').css('opacity',$(this).val()/10);
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


$(document).on('mouseenter',".roundeduploaded",function(){
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('img-thumbnail');
	}
	$(this).parent().parent().parent().parent().siblings('.uploadedimage').addClass('img-rounded');
}).on('mouseleave','.roundeduploaded',function(){
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').addClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').addClass('img-thumbnail');
	}	
	if(!$(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('img-rounded');
	}	
});
$(document).on('click',".roundeduploaded",function(e){
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('clicked-img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('clicked-img-thumbnail');
	}
	$(this).parent().parent().parent().parent().siblings('.uploadedimage').addClass('clicked-img-rounded');
	e.stopPropogation();
});
$(document).on('mouseenter',".circleuploaded",function(){
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('img-thumbnail');
	}
	$(this).parent().parent().parent().parent().siblings('.uploadedimage').addClass('img-circle');
}).on('mouseleave','.circleuploaded',function(){
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').addClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').addClass('img-thumbnail');
	}
	if(!$(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('img-circle');
	}
});
$(document).on('click',".circleuploaded",function(e){
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('clicked-img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('clicked-img-thumbnail');
	}	
	$(this).parent().parent().parent().parent().siblings('.uploadedimage').addClass('clicked-img-circle');
	e.stopPropogation();
});
$(document).on('mouseenter',".thumbnailuploaded",function(){
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('img-circle');
	}
	$(this).parent().parent().parent().parent().siblings('.uploadedimage').addClass('img-thumbnail');
}).on('mouseleave','.thumbnailuploaded',function(){
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').addClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').addClass('img-circle');
	}
	if(!$(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('img-thumbnail');
	}
});
$(document).on('click',".thumbnailuploaded",function(e){
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('clicked-img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('clicked-img-circle');
	}	
	$(this).parent().parent().parent().parent().siblings('.uploadedimage').addClass('clicked-img-thumbnail');
	e.stopPropogation();
});

$(document).on('mouseenter',".normaluploaded",function(e){
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-rounded') ){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('img-thumbnail');
	}
}).on('mouseleave','.normaluploaded',function(e){
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').addClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').addClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').addClass('img-thumbnail');
	}
});
$(document).on('click',".normaluploaded",function(e){
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('clicked-img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('clicked-img-circle');
	}	
	if($(this).parent().parent().parent().parent().siblings('.uploadedimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.uploadedimage').removeClass('clicked-img-thumbnail');
	}
});	

$("#urlimage2submit").click(function(){
	var userurl=prompt("Enter URL of Image","");
	if(userurl!=null && userurl!=""){
	var imag='<div class="urlimagediv" style="cursor:move;position:absolute;top:'+y+'px;left:'+x+'px;width:100px;height:100px;"><img class="urlimage" alt="Sorry!Image not found" src="'+userurl+'" style="width:100%;height:100%;">'+
	'<div class="btn-group editurlimage" style="display:none;">'+
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
	'<button class="btn btn-primary delete-urlimage">Delete Image</button>'+
	'</div>'+
	'</div>';
	$("body").append(imag);
	$(".urlimagediv").draggable().resizable();
	x=x+50;
	y=y+50;
}
	return;
});

var url_opacity_input_seen=0;

$(document).on('click','.urlimage',function(){
	$('.editurlimage').fadeOut();
	$(this).siblings().fadeIn();
	if(url_opacity_input_seen==1){
		$('.opacity-urlimage-quantity').remove();
		url_opacity_input_seen=0;
	}
});
$(document).on('click','.delete-urlimage',function(){
	$(this).parent().parent().remove();
});
$(document).on('click','.opacity-urlimage',function(e){
	if(url_opacity_input_seen==0){
		var inputOpacityurl='<input type="number" class="opacity-urlimage-quantity" min="0" max="10" value="'+$(this).parent().siblings('.urlimage').css('opacity')*10+'">';
		$(".editurlimage").append(inputOpacityurl);
		url_opacity_input_seen=1;
	}
	e.stopPropogation();
});
$(document).on('click','.opacity-urlimage-quantity',function(e){
	e.stopPropogation();
});
$(document).on('change','.opacity-urlimage-quantity',function(e){
	$(this).parent().siblings('.urlimage').css('opacity',$(this).val()/10);
});
$(document).on('click',function(e){
		if(!$(e.target).closest(".urlimagediv").length){
			$(".editurlimage").fadeOut();
		}
});
$(document).on('click','.shape-urlimage',function(e){
	e.stopPropogation();
});
$(document).on('click','.animate-urlimage',function(e){
	e.stopPropogation();
});


$(document).on('mouseenter',".roundedurl",function(){
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('img-thumbnail');
	}
	$(this).parent().parent().parent().parent().siblings('.urlimage').addClass('img-rounded');
}).on('mouseleave','.roundedurl',function(){
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').addClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').addClass('img-thumbnail');
	}	
	if(!$(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('img-rounded');
	}	
});
$(document).on('click',".roundedurl",function(e){
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('clicked-img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('clicked-img-thumbnail');
	}
	$(this).parent().parent().parent().parent().siblings('.urlimage').addClass('clicked-img-rounded');
	e.stopPropogation();
});
$(document).on('mouseenter',".circleurl",function(){
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('img-thumbnail');
	}
	$(this).parent().parent().parent().parent().siblings('.urlimage').addClass('img-circle');
}).on('mouseleave','.circleurl',function(){
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').addClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').addClass('img-thumbnail');
	}
	if(!$(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('img-circle');
	}
});
$(document).on('click',".circleurl",function(e){
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('clicked-img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('clicked-img-thumbnail');
	}	
	$(this).parent().parent().parent().parent().siblings('.urlimage').addClass('clicked-img-circle');
	e.stopPropogation();
});
$(document).on('mouseenter',".thumbnailurl",function(){
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('img-circle');
	}
	$(this).parent().parent().parent().parent().siblings('.urlimage').addClass('img-thumbnail');
}).on('mouseleave','.thumbnailurl',function(){
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').addClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').addClass('img-circle');
	}
	if(!$(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('img-thumbnail');
	}
});
$(document).on('click',".thumbnailurl",function(e){
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('clicked-img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('clicked-img-circle');
	}	
	$(this).parent().parent().parent().parent().siblings('.urlimage').addClass('clicked-img-thumbnail');
	e.stopPropogation();
});

$(document).on('mouseenter',".normalurl",function(e){
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-rounded') ){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('img-thumbnail');
	}
}).on('mouseleave','.normalurl',function(e){
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').addClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').addClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').addClass('img-thumbnail');
	}
});
$(document).on('click',".normalurl",function(e){
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('clicked-img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('clicked-img-circle');
	}	
	if($(this).parent().parent().parent().parent().siblings('.urlimage').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings('.urlimage').removeClass('clicked-img-thumbnail');
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


$("#youtube").click(function(){
	var videourl=prompt("Enter the URL of the video","");
	if(videourl!=null && videourl!=""){
		var videoid=getId(videourl);
		var frame='<div class="youtubeviddiv" style="position:absolute;top:'+xx+'px;left:'+yy+'px;width:420;height:315;">'+
		'<iframe class="youtubevid" src="https://www.youtube.com/embed/'+videoid+'" style="width:90%;height:90%;" frameborder="0" allowfullscreen></iframe>'+
		'<div class="btn-group edityoutubevid" style="display:none;">'+
		'<button class="btn btn-primary delete-youtubevid">Delete Video</button>'+
		'<button class="btn btn-primary change-youtubevid">Change Video</button>'+
		'</div>'+
		'</div>';
		$("body").append(frame);
		$(".youtubeviddiv").draggable().resizable();
		xx=xx+50;
		yy=yy+50;
	}
});

$(document).on('click',".youtubeviddiv",function(){
	$(".edityoutubevid").slideUp();
	$(this).children(".edityoutubevid").slideDown();
});
$(document).on('click',".delete-youtubevid",function(){
	$(this).parent().parent().remove();
});
$(document).on('click',".change-youtubevid",function(e){
	var newurl=prompt("Enter the URL of the video","");
	if(newurl!=null && newurl!=""){
		var newvideoid=getId(newurl);
		$(this).parent().siblings().attr('src',"https://www.youtube.com/embed/"+newvideoid);
	}
	e.stopPropogation();
});
$(document).on('click',function(e){
	if(!$(e.target).is(".youtubeviddiv")){
		$(".edityoutubevid").slideUp();
	}
});
var fb_num=1;
$("#fb-video").click(function(){
	var fbvideo=prompt("Enter the embed code you have copied","");
	if(fbvideo!=null ){
		var dim='<div class="'+fb_num+'fb fbviddiv"></div>';
		$("body").append(dim);
		$("."+fb_num+"fb").html(fbvideo+'<br><br><div class="btn-group editfbvid" style="display:none;"><button class="btn btn-primary change-fbvid">Change Video</button><button class="btn btn-primary delete-fbvid">Delete Video</button></div>');
	    $("."+fb_num+"fb").draggable();
	    $("."+fb_num+"fb").css('position','absolute');
	    fb_num++;
	}
	return;
});

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
		newfbvideo=newfbvideo+'<br><br>\
			<div class="btn-group editfbvid" style="display:none;" >\
			<button class="btn btn-primary change-fbvid">Change Video</button>\
			<button class="btn btn-primary delete-fbvid">Delete Video</button>\
			</div>';
		$(this).parent().parent().html(newfbvideo);
	}
	e.stopPropogation();
});
$(document).on('click',function(e){
	if(!$(e.target).is(".fbviddiv")){
		$(".editfbvid").fadeOut();
	}
});


});