var app = {
	$window : null,
	
	init : function(){
		this.$window = $(window);
		this.gallery();
	},
	layout : function(){
		
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
