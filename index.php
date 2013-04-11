<?php get_header(); ?>

<script type="text/javascript">pageid = 'home';</script>
<div class="home-content">
	<a class="view-my-portfolio" href="<?php bloginfo( 'url' ); ?>/portfolio">
		<div class="bub">
			View my Portfolio
		</div>
		<img src="<?php bloginfo('template_url'); ?>/img/home.jpg" alt="Pablo Cazorla. Illustrator, Concept artist"/>
	</a>	
	<h2>I’m digital <span class="art">artist</span>, fantasy <span class="illus">illustrator</span>, concept artist and <span class="desi">designer</span></h2>
	<menu>
		<?php  wp_nav_menu();?>
	</menu>
</div>

<?php get_footer(); ?>