<?php
/*
Template Name: Work Ajax
*/
?>
<?php
	$post = get_post($_POST['id']);
?>
<?php if ($post) : ?>
	<?php setup_postdata($post); ?>	
	
	<?php include(TEMPLATEPATH . '/work.php'); ?>
					
<?php endif; ?>