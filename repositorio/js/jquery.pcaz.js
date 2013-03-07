;(function(){
var pcazorla = function(){};

pcazorla.prototype ={
	//Variables
	$window : null,
	$site : null,
	$pages : null,
	$loader : null,
	$comments : null,
	openedComments : false,
			
	previousScrollTop : 0,
	touching : false,
	
	init : function(){
		this.$window = $(window);
		this.$site = $('#site');
		this.$pages = $('.page');		
		this.$loader = $('#loader');
		return this;
	},
	listEvent : function(element,evArray,callback){
		if(element.addEventListener){
			for(var i= 0; i < evArray.length;i++){
				element.addEventListener(evArray[i], callback, false);
			}
		}
		return this;
	},
	Menu : function(){
		
		var self = this,
			isPhone = function(){
				if(self.$window.width()<=490){
					return true;
				}else{
					return false;
				}
			},		
			$trigger = $('header menu .open-menu'),
			$menu = $('header menu .menu-principal-container'),
			opened = false,
			closeMenu = function(){
				if(isPhone() && opened){				
					$menu.fadeOut(100);
					opened = false;
				}
			};
			
		//Events			
		$trigger.click(function(event){
			if(isPhone() && !opened){
				event.preventDefault();			
				$menu.fadeIn(200,function(){
					$menu.css('z-index','30000');
				});
				opened = true;
			}
		});	
		this.listEvent(document.body,['touchend','mouseup'],function(){
			closeMenu();
		});
		
	},
	scrollPage : function(num){
		setTimeout(function(){
			$('html,body').animate({'scrollTop' : num},400);
		},400);
	},
	SlideSiteRight : function(){
		//Positioning the page
		this.previousScrollTop = this.$window.scrollTop();
		this.$site.css({
			'width':'200%',
			'left':'-100%'
		});
		this.$pages.css({
			'width':'50%'
		}).eq(1).show();
		
		this.scrollPage(0);
		var self = this;
		setTimeout(function(){
			self.$pages.eq(0).css({'height': '200px','overflow': 'hidden'});
		},500);
		return this;
	},
	SlideSiteLeft : function(){
		//Positioning the page
		this.$site.css('left','0%');
		this.$pages.eq(0).css({'height': '','overflow': ''});
		this.scrollPage(this.previousScrollTop);
		
		var self = this;
		setTimeout(function(){
			self.$site.css({'width':'100%'});
			self.$pages.css({
				'width':'100%'
			}).eq(1).hide();
		},500);
		return this;
	},
	
	//Functions
	Gallery : function(){		
		var self = this,
			wF,//width of figure
			fpw,//figures per width
			cX,//count of X
			pY,//pos y of figure 
			l,//length of figures
			gH,//height of gallery
			cgH,//count height of gallery
			p,//positions of x,y
			g = $('#gallery'),//gallery
			f = g.find('figure').css({'position':'absolute'}),//figures
			im = f.find('img'),
			mR = 18,//margin right
			mB = 18,//margin bottom
			saveOriginalHeights = function(){
				im.each(function(){
					var h = parseInt($(this).attr('height'));
					if(typeof h == 'number'){
						$(this).data('hOrig',h);
					}else{
						$(this).data('hOrig',200);
					}
				});
			},
			resizeImage = function(){
				var wImage = 300,
					ww = self.$window.width();
				if(ww<=660 && ww > 500) wImage = 229;
				if(ww <= 500) wImage = 150;
							 
				im.each(function(){
					var h = Math.round(parseInt($(this).data('hOrig')) * wImage/300);
					$(this).attr('width', wImage);				
					$(this).attr('height',h);				
				});
			},
			
			make = function(){
				if(self.$window.width()<=660){
					mR = 6, mB = 9;
				}else{
					mR = 18, mB = 18;
				}
				
				wF = f.eq(1).width() + mR,
				fpw = Math.floor((g.width()+mR)/wF),
				cX = 0,
				pY = 0,
				l = f.length,
				gH = 0;
				p = [];
				
				for(var i = 0; i < l;i++){
					pY = 0
					if(i >= fpw){
						pY = p[i-fpw][1] + p[i-fpw][2] + mB;
					}
					p.push([cX * wF, pY, f.eq(i).height()]);
					cgH = p[i][1] + p[i][2];					
					if(cgH > gH) gH = cgH;
					cX++;
					if(cX >= fpw) cX = 0;
				}
				
				for(var i = 0; i < l;i++){
					f.eq(i).css({'left' : p[i][0] + 'px','top' : p[i][1] + 'px'});
				}
				
				g.height(gH);
			};
		
		saveOriginalHeights();
		resizeImage();
		make();
		this.$window.resize(function(){			
			setTimeout(function(){
				resizeImage();
				make();
			},900);			
		});
		return this;
	},
	AjaxWork : function(){
		$.ajaxSetup({cache:false});
		
		var seft = this,			
			unloadExplainedWork = function(){
				//Positioning the page
				seft.SlideSiteLeft();
				seft.openedComments = false;
				
				setTimeout(function(){
					seft.$loader.html('');
				},800);
			},
			loadExplainedWork = function(post_id,href){
				if(post_id != undefined && post_id != ''){
					
					//Positioning the page
					seft.SlideSiteRight();
					if(typeof(window.history.pushState) == 'function'){
						window.history.pushState({state:1,rand:Math.random()}, "Work", "");						
						window.onpopstate = function() {
							unloadExplainedWork();
						}
					}
					//Show loading				
					if(lgWork)lgWork.enabled();
					
					
					seft.$loader.load(urlSite+'/work/',{id:post_id},function(response, status, xhr){
						
						if (status == "error") {
						    window.location.href = href;
						}else{
							//Hide loading			
							if(lgWork)lgWork.disabled();			
							seft.Comments().Watcher();
						}						
					});
				}
			};
			
		//Events
		$('.explain-work').click(function(event){
			event.preventDefault();
			var post_id = $(this).attr('rel'),
				href = $(this).attr('href');
			loadExplainedWork(post_id,href);
		});
		$('#back-to').click(function(event){
			event.preventDefault();
			unloadExplainedWork();
		});
		
		return this;
	},
	OpenComments : function(link,hash){
		this.openedComments = true;
		link.addClass('rotate');
		if(hash){
			link = $(hash);
		}
		this.$comments.fadeIn(200,function(){
			$('html,body').animate({'scrollTop' : link.offset().top - 15 + 'px'},400);
			
			//For a bug in Opera:
			$('footer').css('z-index','2');
		});
		
		
		return this;
	},
	Comments : function(){		
		var self = this,
			$commentsLink = $('.comments-link'),			
			hash = window.location.hash;	
		this.$comments = $('#comments');
		
		
		//Wrap .avatar
		$('.avatar').wrap('<div class="avatar-content"></div>');
		
		
		
		if(hash.indexOf('comment') !== -1){
			self.OpenComments($commentsLink,hash);			
		}
		
		$commentsLink.click(function(event){
			event.preventDefault();
			if(!self.openedComments){				
				self.OpenComments($commentsLink);				
			}else{
				self.openedComments = false;
				self.$comments.fadeOut(200);
				$commentsLink.removeClass('rotate');
			}
		});
		return this;
	},
	Watcher : function(){
		
		var $name = $('#author'),
			$email = $('#email'),
			$comment = $('#comment'),
			$nameError = $('#authorError'),
			$emailError = $('#emailError'),
			$commentError = $('#commentError'),
			$submit = $('#submit'),
			$clearFields = $('#clearFields'),
			
			hideError = function(collection){
				for(var i = 0; i < collection.length; i++){
					collection[i].removeClass('error');
				}
			},
			clearFields = function(collection){
				for(var i = 0; i < collection.length; i++){
					collection[i].val('');
				}
			},
		
			watch = function(event){
				hideError([$nameError,$emailError,$commentError]);
				
				var someError = false,
					emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
				if($name.length > 0){
					if($name.val().length < 3){
						someError = true;
						$nameError.addClass('error');
					}
				}
				if($email.length > 0){
					if($email.val().search(emailRegEx) == -1){
						someError = true;
						$emailError.addClass('error');
					}
				}
				if($comment.val().length < 4){
					someError = true;
					$commentError.addClass('error');
				}
				if(someError){
					event.preventDefault();
				}else{
					$submit.val($submit.attr('rel'));
				}
			};
		//Events
		$('#submit').click(function(event){
			watch(event);
		});
		
		$('#clearFields').click(function(event){
			event.preventDefault();
			hideError([$nameError,$emailError,$commentError]);
			clearFields([$name,$email,$comment]);			
		});
		return this;
	},
	Exec : function(templateType){
		//Commons
		this.init().Menu();
		if(lgPage)lgPage.disabled();
		$('body').addClass('ready');
		
		
		switch(templateType){
			case 'workGallery':
				this.Gallery().AjaxWork();
				break;
			case 'work-explained':
				this.Comments().Watcher();
				break;
			case 'page':
				//
				break;	
			default:
				this.Gallery().AjaxWork();
				break;
		}		
		return this;
	}
}
	
	
$('document').ready(function(){
	var p = new pcazorla();
	setTimeout(function(){
		p.Exec(templateType);
	},400);	
});
})();

