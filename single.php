<?php get_header(); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	
	<article class="work">
		<section class="description">
			<h1><?php the_title(); ?></h1>
			<?php the_category(); ?>
			<?php the_excerpt(); ?>
		</section>
		<section class="image">
			<?php the_content(); ?>
		</section>
		
		
		
		
	</article>
	
	
	
	
	

<?php endwhile; endif; ?>

<?php get_footer(); ?>