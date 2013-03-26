var app = {
	$window : null,
	
	init : function(){
		this.$window = $(window);
		switch(pageid){
			case 'work':
				this.fixDescription();
				this.validateForm();
				break;
			default :
				//
				break;			
		}
		this.menuPhone();
	},
	fixDescription : function(){
		var self = this,
			$description = $('#work .description'),
			winPosition = self.$window.scrollTop(),
			prevWinPosition = winPosition,
			summaryTop = $description.offset().top,
			height = parseInt(summaryTop + $description.outerHeight()+20),
			fixed = false,
			setPosition = function(){
				var dif = parseInt(height - winPosition);				
					if(dif < 0){
						if(!fixed){
							$description.fadeOut(400,function(){
								$description.addClass('fixed').fadeIn(400,function(){
									fixed = true;
								});
							});
						}						
					}else{
						if(fixed){
							$description.fadeOut(400,function(){
								$description.removeClass('fixed').fadeIn(400,function(){
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
				$description.removeClass('fixed').show();
			}
		});	
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
	},
	menuPhone : function(){
		var self = this,
			$menu = $('#menu'),
			open = false,
			isPhone = function(){
				return self.$window.width() <= 720 ? true : false;
			},
			touchOutMenu = function(){	
				if(open){
					if(isPhone()){
						$menu.slideUp(200,function(){
							$menu.css('display','');
						});
						open = false;
					}
				}
			};
		
		$('#menu-btn').click(function(event){
			event.preventDefault();			
			$menu.slideDown(200);
			open = true;			
		});	
		$('document,body').mouseup(function(){
			touchOutMenu();
		});	
		//For IOS devices
		if(typeof document.body.addEventListener != undefined){
			document.body.addEventListener("touchend", touchOutMenu,false);
		}
	}
};
$('document').ready(app.init());
