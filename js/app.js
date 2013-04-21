

var app = {
	$window : null,
	$body : null,
	init : function(){
		console.log('Start app');
		console.log('---------');
		
		//Setup
		this.$window = $(window);
		this.$body = $('body');
		
		//Common
		this.headerMov();
		this.headerSlide();
		this.menuMov();
		this.scrollMov();
		
		switch(pageid){
			case 'work':
				this.validateForm();
				break;
			
		}
	},	
	headerMov : function(){
		var self = this,
			prev = this.$window.scrollTop(),
			current = 0,
			fixed = false;
		this.$window.scroll(function(){
			current = self.$window.scrollTop();
			//console.log(current);
			if(!fixed && current < prev){
				self.$body.addClass('header-fixed');
				fixed = true;
			}else if(fixed && current > prev){
				self.$body.removeClass('header-fixed');
				fixed = false;
			}
			prev = current;
		});
	},
	headerSlide : function(){
		var $li = $('#skills li'),
			c = 0,
			l = $li.length,
			slidetime = 500,
			duration = 7000,
			change = function(){
				var n = c + 1;
				if(n >= l){n = 0;}
				$li.eq(n).css({'z-index':'11099'});
				$li.eq(c).animate({'opacity':'0'},slidetime,function(){
					$li.eq(n).css({'z-index':'11100'});
					$li.eq(c).css({'z-index':'11000','opacity':'1'});
					c = n;
				});				
			};
		setInterval(change,duration);
	},
	menuMov : function(){
		var open = false,
			moving = false,
			$menu = $('#menu-main'),
			duration = 200,
			openMenu = function(){
				if(!open && !moving){
					moving = true;
					open = true;
					$menu.slideDown(duration,function(){moving = false;});
				}
			},
			closeMenu = function(){
				if(open && !moving){
					moving = true;
					open = false;
					$menu.slideUp(duration,function(){moving = false;});
				}
			};		
		
		$('#menu-btn').click(function(){
			openMenu();
		});
		$('document,body').mouseup(function(){
			closeMenu();
		});	
		//For IOS devices
		if(typeof document.body.addEventListener != undefined){
			document.body.addEventListener("touchend", closeMenu,false);
		}
	},
	scrollMov : function(){
		
	},
	validateForm : function(){
		var $f = $('fieldset.validate'),
			valid = true,
			validate = function(){
				valid = true;
				$f.each(function(){
					var $this = $(this),
						$input = $this.find('input,textarea'),
						min = parseInt($this.attr('min')) || 0,
						val = $input.val(),
						emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
						isEmail = false;
					if($this.hasClass('email')){
						isEmail = true;
					}	
					
					if(val.length < min){
						valid = false;
						$this.addClass('error');
						$input.focus();
					}else{					
						$this.removeClass('error');
					}
					if(isEmail){
						if(val.search(emailRegEx) == -1){
							valid = false;
							$this.addClass('error');
							$input.focus();
						}else{
							$this.removeClass('error');
						}				
					}			
				});
			},
			clearFiels = function(){				
				$f.removeClass('error').find('input,textarea').val('');
				$f.eq(0).find('input').focus();				
			};
			
		$('#submit').click(function(e){
			validate();
			if(!valid){e.preventDefault();} 
		});
		$('#clearFields').click(function(e){
			e.preventDefault();
			clearFiels();
		});
	}
	
};
$('document').ready(app.init());
