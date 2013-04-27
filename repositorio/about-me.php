<?php
/*
Template Name: XXXAbout me
*/
?>
<?php get_header(); ?>
<!-- generatesitemap -->
<script>templateType = 'page';</script>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<div class="site alone clearfix">
	<div class="page">
		<canvas id="lg-page" class="loading" width="30" height="30"><?php _e('Loading','pcazorla'); ?>...</canvas>
		<script>lgPage=new loadGraph('lg-page','0,0,0');lgPage.enabled();</script>
		<article id="page-article">			
			<header>
				<h1><?php the_title(); ?>
					<span><?php _e('Presentation','pcazorla'); ?></span>
				</h1>
				<menu>
					<span class="open-menu"></span>
					<?php  wp_nav_menu();?>
				</menu>
			</header>
			<section id="about-me" class="box page-content">
				<div class="about-photo">
					<figure class="about-portrait">
						<div class="mask">
							<img src="<?php bloginfo('template_url'); ?>/img/pablocazorla.jpg" title="Pablo Cazorla" />
						</div>					
					</figure>
				</div>
				<div class="about-summary">
					<h1><?php bloginfo( 'name' ); ?> <span><?php $site_description = get_bloginfo( 'description', 'display' );echo $site_description;?></span></h1>
					<?php the_content(); ?>
					<ul class="contact-links">
						<li><a href="mailto:contact@pcazorla.com" target="_blank">contact@pcazorla.com</a></li>
						<li><a id="contact-links-twitter" href="//twitter.com/pablo_cazorla" target="_blank">@pablo_cazorla</a></li>
						<li><a id="contact-links-localization" href="//goo.gl/maps/SIgjN" target="_blank">Mendoza, Argentina</a></li>
					</ul>				
				</div>		
			</section>
			<?php include(TEMPLATEPATH . '/footer-content.php'); ?>					
		</article>
	</div>
</div>	
<?php endwhile;?>
<?php endif; ?>
<?php get_footer(); ?>