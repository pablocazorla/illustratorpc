<!doctype HTML>
<!--[if IE 7]>    <html class="ie7" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>    <html class="ie8" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?>> <!--<![endif]-->
<head>
	<?php load_theme_textdomain('pcazorla');?>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	
	<title><?php
	// Print the <title> tag based on what is being viewed.
	global $page, $paged;
	wp_title( '|', true, 'right' );
	// Add the blog name.
	bloginfo( 'name' );
	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | $site_description";
	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		echo ' | ' . sprintf( __( 'Page %s', 'pcazorla' ), max( $paged, $page ) );
	?></title>
		
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
		
	<link href='//fonts.googleapis.com/css?family=Open+Sans:400,600' rel='stylesheet' type='text/css'>		
	<link href="<?php bloginfo('template_url'); ?>/style.css.php" rel="stylesheet" type="text/css" />
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	
	<link rel="shortcut icon" href="<?php bloginfo('template_url'); ?>/favicon.ico">
	
	<!--[if lt IE 9]>
	<script src="<?php bloginfo('template_url'); ?>/js/libs/html5-3.4-respond-1.1.0.min.js"></script>
	<![endif]-->
	
	<script type="text/javascript">
		urlSite = '//<?php echo $_SERVER[HTTP_HOST]; ?>';
		templateType = 'workGallery';
		window.loadGraph||(window.loadGraph=function(e,k){var a=document.getElementById(e);a.style.display="none";this.enabled=function(){a.style.display="block"};this.disabled=function(){a.style.display="none"};if(a.getContext){var b=a.getContext("2d"),c=a.width/2,h=c/4.5,i=c-h,j=2*Math.PI,f=j/8,d=null;b.translate(c,c);this.enabled=function(){a.style.display="block";d=setInterval(function(){b.clearRect(-c,-c,2*c,2*c);for(var a=0;8>a;a++){var g=a,d=i*Math.sin(-g*f),e=i*Math.cos(-g*f);b.fillStyle="rgba("+k+","+(g+0)/8+")";b.beginPath();b.arc(d,e,h,0,j);b.fill();b.closePath()}b.rotate(f)},100)};this.disabled=function(){a.style.display="none";clearInterval(d)}}});
		lgPage = null;
		lgWork = null;
	</script>
	<style>
		canvas.loading{display:none;position:absolute;top:50%;left:50%;margin:-15px 0 0 -15px;z-index:9999;font-weight: 600;color:#FFF;font-family: Arial, Helvetica, sans-serif;}
		.ie7 canvas.loading,.ie8 canvas.loading{background:#333;padding:20px;border:solid 2px #FFF;} 
	</style>
			
	<?php wp_head(); ?>	
</head>
<body>
<noscript>
	<style>
		#comments {display: block;}
	</style>
	<div class="nojs"><?php _e('This site use','pcazorla'); ?> <strong>Javascript</strong> <?php _e('to work. Please,','pcazorla'); ?> <strong><?php _e('enable it','pcazorla'); ?></strong>.</div>
	<div class="ready">
</noscript>



