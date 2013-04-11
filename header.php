<!doctype HTML>
<html lang="es">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	
	<title><?php wp_title( '|', true, 'right' ); ?></title>
		
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	
	<!-- CSS -->
	<!--link href='//fonts.googleapis.com/css?family=Open+Sans:400,600' rel='stylesheet' type='text/css'-->
	<link href="<?php bloginfo('template_url'); ?>/fonts.css" rel="stylesheet" type="text/css" />	
	<link href="<?php bloginfo('template_url'); ?>/style.css" rel="stylesheet" type="text/css" />
	
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	
	<!--[if lt IE 9]>
	<script src="<?php bloginfo('template_url'); ?>/js/libs/html5-3.4-respond-1.1.0.min.js"></script>
	<![endif]-->
	
	<script type="text/javascript">pageid = 'home';</script>
	<?php wp_head(); ?>	
</head>

<?php if(!is_home() && !is_front_page()){ ?>
<body>
<header class="main">
	<a href="<?php bloginfo( 'url' ); ?>" class="logo"><?php bloginfo( 'name' ); ?><span><?php $site_description = get_bloginfo( 'description', 'display' );echo $site_description;?></span></a>
	<span id="menu-btn"></span>
	<menu id="menu">
		<?php  wp_nav_menu();?>
	</menu>
</header>
<?php }else{ ?>
<body class="home">
<?php }; ?>
