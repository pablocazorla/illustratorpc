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
			$figures = $g.find('figure'),
			length = $figures.length,
			figureMarginRight = parseInt($figures.css('marginRight')),
			galleryPadTop = parseInt($g.css('paddingTop')),
			galleryPadLeft = parseInt($g.css('paddingLeft')),
			
			
			setPositions = function(){		
				var figureWidth = $figures.outerWidth(true),
					columnXrow = Math.floor(($g.width()+figureMarginRight)/figureWidth),
					column = 0,
					columnHeights = [];
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
					'height' : maxHeight - galleryPadTop + 'px'
				});
				$figures.css('position','absolute');
			}
		setPositions();
		this.$window.resize(function(){
			setPositions();
		});
	}
};
$('document').ready(app.init());
