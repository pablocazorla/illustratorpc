<?php get_header(); ?>
<!-- generatesitemap -->
<script>templateType = 'work-explained';</script>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<div class="site alone clearfix">
	<div class="page">
		<canvas id="lg-page" class="loading" width="30" height="30"><?php _e('Loading','pcazorla'); ?>...</canvas>
		<script>lgPage=new loadGraph('lg-page','0,0,0');lgPage.enabled();</script>
		<article id="work-explained">			
			<nav><a id="back-to" class="back-to-work-gallery" href="<?php echo get_settings('home'); ?>" title="<?php _e('Back to Work Gallery','pcazorla'); ?>"><?php _e('Back to Work Gallery','pcazorla'); ?></a></nav> 	
			
			<?php include(TEMPLATEPATH . '/work.php'); ?>					
		</article>
	</div>
</div>	
<?php endwhile;?>
<?php endif; ?>
<?php get_footer(); ?>