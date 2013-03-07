<?php
/*
Template Name: Portfolio
*/
?>

<?php get_header(); ?>

<h1>Portfolio</h1>


<?php query_posts('posts_per_page=60'); while ( have_posts() ) : the_post(); ?>
    
    
    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a><br><br>
   
<?php endwhile; wp_reset_query(); ?>











<?php get_footer(); ?>