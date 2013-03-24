<?php
/*
Template Name: Portfolio
*/
?>

<?php get_header(); ?>
<script type="text/javascript">pageid = 'portfolio';</script>
<article id="portfolio" class="main clearfix">	
	<section class="summary">
		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<?php the_content(); ?>
		<?php endwhile; endif; ?>
	</section>
	<section class="content">
		<div id="gallery" class="clearfix">
			<?php query_posts('posts_per_page=60'); while ( have_posts() ) : the_post(); ?>	    
			<figure>			
				<a href="<?php the_permalink(); ?>" class="explain-work" rel="<?php the_ID();?>"></a>				
					<?php if(has_post_thumbnail()): the_post_thumbnail('thumbnail'); endif; ?>										
				<figcaption>
					<h2><?php the_title(); ?></h2>
					<div class="categories"><?php the_category(', '); ?></div>
				</figcaption>						
			</figure>	   
			<?php endwhile; wp_reset_query(); ?>
		</div>
	</section>
</article>
<?php get_footer(); ?>