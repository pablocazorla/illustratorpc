var app = {
	$window : null,
	
	init : function(){
		this.$window = $(window);
		this.gallery();
		this.fixSummary();
	},
	layout : function(){
		
	},
	fixSummary : function(){
		var self = this,
			$summary = $('.summary'),
			winPosition = self.$window.scrollTop(),
			prevWinPosition = winPosition,
			summaryTop = $summary.offset().top,
			height = parseInt(summaryTop + $summary.outerHeight()+20),
			fixed = false,
			setPosition = function(){
				var dif = parseInt(height - winPosition);				
					if(dif < 0){
						if(!fixed){
							$summary.fadeOut(400,function(){
								$summary.addClass('fixed').fadeIn(400,function(){
									fixed = true;
								});
							});
						}						
					}else{
						if(fixed){
							$summary.fadeOut(400,function(){
								$summary.removeClass('fixed').fadeIn(400,function(){
									fixed = false;
								});
							});
						}				
					}
			};
		setInterval(function(){
			if(winPosition != prevWinPosition){
				prevWinPosition = winPosition;
				setPosition();
			}			
		},1500);		
		this.$window.scroll(function(){
			winPosition = self.$window.scrollTop();
			if((winPosition-summaryTop) < 0 && fixed){
				fixed = false;
				$summary.removeClass('fixed').show();
			}
		});
	},
	gallery : function(){
		
		var $g = $('#gallery'),
			$content = $g.parent('.content'),
			$figures = $g.find('figure'),
			length = $figures.length,
			figureMarginRight = parseInt($figures.css('marginRight')),
			
			setPositions = function(){		
				var galleryPadTop = parseInt($g.css('paddingTop')),
					galleryPadLeft = parseInt($g.css('paddingLeft')),
					
					figureWidth = $figures.width() + figureMarginRight,
					columnXrow = Math.floor(($content.width())/figureWidth),
					column = 0,
					columnHeights = [],
					maxHeight = 0;
				
				for(var i=0;i<columnXrow;i++){
					columnHeights.push(galleryPadTop);
				}				
				for(var i=0;i<length;i++){					
					$figures.eq(i).css({
						'left' : column * figureWidth + galleryPadLeft + 'px',
						'top' : columnHeights[column] + 'px'
					});					
					columnHeights[column] = columnHeights[column] + $figures.eq(i).outerHeight(true);
					
					if(columnHeights[column]>maxHeight) maxHeight = columnHeights[column];
					
					++column;
					if(column >= columnXrow) column = 0;
					
				}
				$g.css({
					'position' : 'relative',
					'height' : maxHeight - galleryPadTop + 'px',
					'width' : figureWidth * columnXrow - figureMarginRight + 'px'
				});
				
			}
		setPositions();
		$figures.css({'position':'absolute','marginRight':'0'});
		this.$window.resize(function(){
			setPositions();
		});
	}
};
$('document').ready(app.init());
