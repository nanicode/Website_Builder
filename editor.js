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

$(".0").click(function(){
		alert("ADca");
		var pos=$(this).position();
		var button_group='<div class="btn-group" style="position:absolute;top:'+(pos.top-20)+'px;right:'+(pos.left+30)+'px;">\
  <button type="button" class="btn btn-primary">Apple</button>\
  <button type="button" class="btn btn-primary">Samsung</button>\
  <div class="btn-group">\
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">\
    Sony <span class="caret"></span></button>\
    <ul class="dropdown-menu" role="menu">\
      <li><a href="#">Tablet</a></li>\
      <li><a href="#">Smartphone</a></li>\
    </ul>\
  </div>\
</div>';
$("body").append(button_group);

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
	
		$("#bg").click(function(){
		$("#bg").change(function(){
			$("body").css("background-color",$("#bg").val());
		});
	});
		$(".bgcolor").click(function(){
			$("#bg").trigger("click");
		});


		 
    $("#fileinput1").change(function(){
    	if(this.files && this.files[0]){
    		var reader=new FileReader();
    		reader.onload=imageIsLoaded1;
    		reader.readAsDataURL(this.files[0]);
    	}
    });

		function imageIsLoaded1(e){
			$('body').css('background-image','url("'+e.target.result+'")');
		};
		$("#bgimage").click(function(){
			$("#fileinput1").click();
		});
/*$(document).ready(function(){
     $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });

function imageIsLoaded(e) {
    $('#myImg').attr('src', e.target.result);
};//////////////*/
	 $("#fileinput2").click(function(){
    $("#fileinput2").change(function(){
    	if(this.files && this.files[0]){
    		var reader=new FileReader();
    		reader.onload=imageIsLoaded2;
    		reader.readAsDataURL(this.files[0]);
    	}
    });
});var x=300,y=300,mm=1;
		function imageIsLoaded2(e){
			var imag='<img src="'+e.target.result+'" class="'+mm+'" alt="sorry!image not found" style="cursor:move;width:200px;height:200px;position:absolute;top:'+x+'px;left:'+y+'px">';
			//$("."+mm).attr('src',e.target.result);
			$("body").append(imag);
			$("."+mm).resizable({ghost:true}).parent().draggable();
			x=x+100;
			y=y+100;
			mm=mm+1;
		};
		$("#imgupload").click(function(){
			$("#fileinput2").click();
		});

$("#urlimage2submit").click(function(){
	var userurl=prompt("Enter URl of Image","");
	if(userurl!=null){
	var imag='<img src="'+userurl+'" class="'+mm+'" style="cursor:move;position:absolute;top:'+y+'px;left:'+x+'px;width:100px;height:100px;">'
	//'<img src=$("#urlimage2").val() class="'+mm+'" alt="" style="position:absolute;top:'+y+'px;left:'+x+'px;" width="50" height="50">';
	$("body").append(imag);
$("."+mm).resizable({ghost:true}).parent().draggable();
//$("."+mm).draggable();
	x=x+50;
	y=y+50;
	mm=mm+1;
}
	return;
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
	if(videourl!=null){
	var videoid=getId(videourl);
	var frame='<iframe class="'+mn+'" src="https://www.youtube.com/embed/'+videoid+'" style="position:absolute;top:'+xx+'px;left:'+yy+'px;width:420;height:315;" frameborder="0" allowfullscreen></iframe>'
	$("body").append(frame);
	//$("."+mm).resizable().parent().draggable({cancel:"iframe"});
xx=xx+50;
yy=yy+50;
mn=mn+1;
}
});

$("#fb-video").click(function(){var mm=1;
	var fbvideo=prompt("Enter the embed code you have copied","");
	if(fbvideo!=null){
		var dim='<div class="'+mm+'"></div>'
		$("."+mm).html(fbvideo);
		$("body").append(dim);
	    mm=mm+1;
	}
});

});