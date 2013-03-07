<?php get_header(); ?>
<!-- generatesitemap -->
<div id="site" class="site clearfix">
	<div class="page">
		
		<canvas id="lg-page" class="loading" width="30" height="30"><?php _e('Loading','pcazorla'); ?>...</canvas>
		<script>lgPage=new loadGraph('lg-page','0,0,0');lgPage.enabled();</script>
		
		<article id="work">		
			<header>
				<h1><?php bloginfo( 'name' ); ?><span>
					<?php $site_description = get_bloginfo( 'description', 'display' );echo $site_description;?>
					</span></h1>
				<menu>
					<span class="open-menu"></span>
					<?php  wp_nav_menu();?>
				</menu>
			</header>
			
			<section id="gallery">				
				<?php if (have_posts()) :?>
				<?php while (have_posts()) : the_post(); ?>				
					<figure>
						<a href="<?php the_permalink(); ?>" class="explain-work" rel="<?php the_ID();?>">					
							<?php if(has_post_thumbnail()): the_post_thumbnail('thumbnail'); endif; ?>
						</a>							
						<figcaption>
							<h2><?php the_title(); ?></h2>
							<?php the_category(); ?> 
						</figcaption>						
					</figure>		
				<?php endwhile; ?>
				<?php else :?>
					<h3><?php _e('Sorry, works not found','pcazorla'); ?>!</h3>
				<?php endif; ?>				
			</section>
			<?php if (show_posts_nav()) : ?>
				<nav class="navPages">
				  <?php posts_nav_link(' ', '&laquo; '.__('Previous Works','pcazorla'), __('Next Works','pcazorla').' &raquo;'); ?>
				</nav>
			<?php endif; ?>	
			<?php include(TEMPLATEPATH . '/footer-content.php'); ?>			
		</article>
	</div>
	<div class="page" style="display:none;">
		<canvas id="lg-work" class="loading" width="30" height="30"><?php _e('Loading','pcazorla'); ?>...</canvas>
		<script>lgWork=new loadGraph('lg-work','0,0,0');</script>
		<article id="work-explained">			
			<nav><a id="back-to" class="back-to-work-gallery" href="" title="<?php _e('Back to Work Gallery','pcazorla'); ?>"><?php _e('Back to Work Gallery','pcazorla'); ?></a></nav>			
			
			<div id="loader"></div>					
		</article>
	</div>
</div>
<?php get_footer(); ?>