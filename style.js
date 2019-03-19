var classHome		= $('.home'),
	classExtension	= $('.extension'),
	classFooter		= $('footer');

function runResize(v){
	classHome.height($(window).height()-classFooter.height()-6),
	classHome.children(":first").css('top',(classHome.height()-classHome.children(":first").height())/2);
	if(v!=='resize'){
		$('.home .in').fadeIn(2000,function (){
			classHome.children(":first").css('top',elementHeight(classHome.children(":first"),classExtension)+'px');
			classExtension.slideDown(1000,function (){
				var i=1;
				setInterval(function () {
					
					classExtension.children().css('display','none');
					if(i<classExtension.children().length){
						classExtension.children().eq(i).fadeIn(1000);
						i++;
					}else{
						i=1;
						classExtension.children().eq(0).fadeIn(1000);
					}
					
				}, 4000);
				classHome.find(".link").fadeIn(1000);
			});
			classFooter.fadeIn(2000);
			// console.log(elementHeight(classHome.children(":first"),classExtension));
		});
	}
}
function elementHeight(a,b){
	var e1	=	Number(a.css('top').replace("px","")),
		e2	=	Number(b.css('border-top-width').replace("px",""))+
		Number(b.css('border-bottom-width').replace("px",""))+
		Number(b.css('margin-top').replace("px",""))+
		Number(b.css('margin-bottom').replace("px",""))+
		b.height();
	
	return e1-(e2/2);
}

$(window).resize(function(){runResize('resize');});

$(document).ready(function(){
	runResize();
	
});