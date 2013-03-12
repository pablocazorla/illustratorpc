<?php get_header(); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	
	<article class="work">
		<section class="summary">
			<h1><?php the_title(); ?></h1>
			<div class="categories"><?php the_category(', '); ?></div>
			<?php the_excerpt(); ?>
		</section>
		<section class="content">
			<?php the_content(); ?>
		</section>
		
		
		
		
	</article>
	
	
	
	
	

<?php endwhile; endif; ?>

<?php get_footer(); ?>