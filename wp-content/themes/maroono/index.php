<?php get_header(); ?>
<?php if(have_posts()){
	
	while(have_posts()){

		the_post();?>


		<h2><?php the_title(); ?></h2>
		<br>
		<p><?php the_content(); ?></p>
		<br>
<?php
	}
	}	
?>

<?php get_footer(); ?>
