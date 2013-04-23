/* Flexslide Plugin
 * @author: Pablo Cazorla
 * @e-mail: pablo.cazorla@huddle.com.ar
 * @date: 22/04/2013
 */
;(function($){
	$.fn.flexslide = function(options){		
		//Settings
		var setting = $.extend({
			initial : 0,
			transition : 'slide',
			step : 1,
			duration : 800,
			slidesClass : 'li',
			callbefore : undefined,
			callback : undefined,
			navButtons:true,
			circular:true,
			pagination: false,
			autoplay:false,
			autoplayTime:5000
		}, options);
			
		return this.each(function(){
			var $this = $(this)
				$slides = $this.find('> '+setting.slidesClass),
				current = setting.initial,
				length = $slides.length,
				sliding = false,
				$prev = null,
				$next = null,
				$pags = null,
				
				tryDisable = function(){
					if(!setting.circular && $prev){
						$prev.add($next).removeClass('flexslide-disable');
						if(current == 0){$prev.addClass('flexslide-disable');}
						if(current == (length-1)){$next.addClass('flexslide-disable');}
					}
				},
				
				change = function(dir,num){
					if(!sliding){
						var enabled = true;
						if(num == undefined){
							var next = current + (dir * setting.step);
						}else{
							var next = num;
							var dif = next-current;
							if(dif != 0){var dir = Math.abs(dif)/dif;}
						}
						if(next < 0){
							next = length-1;
							if(!setting.circular){enabled=false;}
						}
						if(next >= length){
							next = 0;
							if(!setting.circular){enabled=false;}
						}
						
						if(next !=current && enabled){
							sliding = true;
							if(setting.callbefore){setting.callbefore();}						
							
							switch(setting.transition){
								case 'opacity':
									$slides.eq(next).css({'z-index':'11'});
									$slides.eq(current).animate({'opacity':'0'},setting.duration,function(){
										$slides.eq(next).css({'z-index':'12'});
										$slides.eq(current).css({'z-index':'10','opacity':'1'});
										
										current = next;
										tryDisable();
										if($pags){$pags.removeClass('flexslide-active').eq(next).addClass('flexslide-active');}
										sliding = false;										
										if(setting.callback){setting.callback();}
									})
									break;
								default:
									$slides.eq(current).animate({'left':(dir * -100)+'%'},setting.duration);
									$slides.eq(next).css({'left':(dir*100)+'%'}).animate({'left':'0%'},setting.duration,function(){
										current = next;
										tryDisable();
										if($pags){$pags.removeClass('flexslide-active').eq(next).addClass('flexslide-active');}
										sliding = false;										
										if(setting.callback){setting.callback();}
									});
									break;
							}
						}
					}
				};
				
			if(setting.navButtons){
				$prev = $('<span class="flexslide-nav flexslide-prev"></span>');
				$next = $('<span class="flexslide-nav flexslide-next"></span>');
				$this.append($prev).append($next);
				
				$prev.click(function(){change(-1);});
				$next.not('.flexslide-disable').click(function(){change(1);});
				
			}			
			if(setting.pagination){
				var $paginator = $('<ul class="flexslide-pag"></ul>');
				
				for(var i=0;i<length;++i){
					$paginator.append($('<li>'+(i+1)+'</li>'));
				}
				$pags = $paginator.find('li');
				$pags.eq(current).addClass('flexslide-active');
				$this.append($paginator);
				
				$pags.each(function(index){
					$(this).click(function(){
						if(current != index){
							change(0,index);
						}						
					});
				});
			}
			if(setting.autoplay){
				setInterval(function(){
					change(1);
				},setting.autoplayTime);
			}
			
			//Start			
			switch(setting.transition){
				case 'opacity':
					$slides.css({
						'top':'0',
						'left':'0',
						'z-index':'10'
					}).eq(current).css({
						'z-index':'12'
					});				
					break;
				default:
					if(current !=0){$slides.eq(current).css({'left':'0%'});$slides.eq(0).css({'left':'100%'});}
					break;
			}
			tryDisable();
			
		});
	};
})(jQuery);
$('document').ready(function(){
	$('#home-slide').flexslide({
		transition : 'opacity',
		autoplayTime:10000
	});
});
