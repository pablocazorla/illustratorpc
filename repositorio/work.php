<section id="work-view" class="box">
	<figure>
		<?php the_post_thumbnail('large'); ?>
	</figure>
	<!--img scr="" id="work-image"/-->		
	<div class="work-content">
		<h1><?php the_title(); ?></h1>
		<div class="work-description">
			<?php the_excerpt(); ?>
		</div>
	</div>
	<div class="work-share">
		<nav class="share-links">
			<a class="facebook-link" href="http://www.facebook.com/sharer.php?u=<?php the_permalink();?>&t=<?php the_title(); ?>" target="blank" title="<?php _e('Share on Facebook','pcazorla'); ?>"><?php _e('Share on Facebook','pcazorla'); ?></a>
			<a class="twitter-link" href="http://twitter.com/home?status=<?php the_permalink();?>" target="blank" title="<?php _e('Share on Twitter','pcazorla'); ?>"><?php _e('Share on Twitter','pcazorla'); ?></a>
			<a class="google-plusone-link" href="https://plus.google.com/share?url=<?php the_permalink();?>" target="blank" title="<?php _e('Share on Google +1','pcazorla'); ?>"><?php _e('Share on Google +1','pcazorla'); ?></a>
			<a class="pinterest-link" href="http://pinterest.com/pin/create/button/?url=<?php the_permalink();?>&media=<?php echo pc_thumb_url("large"); ?>&description=<?php echo get_the_excerpt(); ?>" target="_blank" title="Pin It">Pin It</a>
		</nav>
		<div id="comments-container">
			<?php comments_popup_link(__('Comments','pcazorla'), __('1 Comment','pcazorla'),__('% Comments','pcazorla'),'comments-link'); ?>
			<?php comments_template(); ?>
		</div>
	</div>
	<?php if($post->post_content!="") : ?>
		<div class="work-content-extended">
			<?php the_content(); ?>
		</div>
	<?php endif; ?>
</section>
<?php include(TEMPLATEPATH . '/footer-content.php'); ?>	