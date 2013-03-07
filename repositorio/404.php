<?php get_header(); ?>
<!-- generatesitemap -->
<script>templateType = '404';</script>
<div class="site alone clearfix">
	<div class="page">
		<canvas id="lg-page" class="loading" width="30" height="30"><?php _e('Loading','pcazorla'); ?>...</canvas>
		<script>lgPage=new loadGraph('lg-page','0,0,0');lgPage.enabled();</script>
		<article id="page-article">			
			<header>
				<h1>Error 404</h1>
				<menu>
					<span class="open-menu"></span>
					<?php  wp_nav_menu();?>
				</menu>
			</header>
			<section id="" class="box page-content" style="padding: 30px">
				<p><?php _e('Not found','pcazorla'); ?>.</p>
			</section>
			<?php include(TEMPLATEPATH . '/footer-content.php'); ?>					
		</article>
	</div>
</div>	
<?php get_footer(); ?>