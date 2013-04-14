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
		this.setHeaderMov();
		
		
	},
	
	setHeaderMov : function(){
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
	}
};
$('document').ready(app.init());
