<?php get_header(); ?>
<script type="text/javascript">pageid = 'work';</script>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>	
	<article id="work" class="clearfix">
		<nav class="breadcrumb">Portfolio ></nav>
		<section class="description">
			<h1><?php the_title(); ?></h1>
			<div class="categories"><?php the_category(', '); ?></div>
			<?php the_excerpt(); ?>
			
			<nav class="share clearfix">
				
				<a class="pinterest-link" href="http://pinterest.com/pin/create/button/?url=<?php the_permalink();?>&media=<?php echo pc_thumb_url("large");?>&description=<?php echo get_the_excerpt(); ?>" target="_blank">Pin It</a>				
				<a class="twitter-link" href="http://twitter.com/home?status=<?php the_permalink();?>" target="blank">Share on Twitter</a>
				<a class="facebook-link" href="http://www.facebook.com/sharer.php?u=<?php the_permalink();?>&t=<?php the_title(); ?>" target="blank">Share on Facebook</a>
				<?php comments_popup_link('Comments', '1 Comment','% Comments','comment-link'); ?>
			</nav>
		</section>
		<section class="content">
			<?php the_content(); ?>
			<?php comments_template(); ?>
		</section>
	</article>
<?php endwhile; endif; ?>

<?php get_footer(); ?>