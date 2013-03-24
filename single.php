<?php get_header(); ?>
<script type="text/javascript">pageid = 'work';</script>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>	
	<article id="work" class="clearfix">
		<nav class="breadcrumb">Portfolio ></nav>
		<section class="description">
			<h1><?php the_title(); ?></h1>
			<div class="categories"><?php the_category(', '); ?></div>
			<?php the_excerpt(); ?>
			<?php comments_popup_link(__('Comments','pcazorla'), __('1 Comment','pcazorla'),__('% Comments','pcazorla'),'comments-link'); ?>
		</section>
		<section class="content">
			<?php the_content(); ?>
			<?php comments_template(); ?>
		</section>
	</article>
<?php endwhile; endif; ?>

<?php get_footer(); ?>