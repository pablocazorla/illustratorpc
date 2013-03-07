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
				</h1>
				<menu>
					<span class="open-menu"></span>
					<?php  wp_nav_menu();?>
				</menu>
			</header>
			<section id="" class="box page-content">
				<?php the_content(); ?>
			</section>
			<?php include(TEMPLATEPATH . '/footer-content.php'); ?>					
		</article>
	</div>
</div>	
<?php endwhile;?>
<?php endif; ?>
<?php get_footer(); ?>