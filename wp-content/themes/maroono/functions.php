<?php

function mybasicthemeSA_script_enqueue() {
wp_enqueue_style('bootstrap-css', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', array(), '', 'all');
wp_enqueue_style('customstyle', get_template_directory_uri().'/css/custom.css', array(), '1.0.0','all' ); 


wp_enqueue_script( 'bootstrap-js', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js', array('jquery'), '', true );
wp_enqueue_script('ajxjs','https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',array('jquery'),'',true);
wp_enqueue_script('mathjs','http://cdnjs.cloudflare.com/ajax/libs/mathjs/3.16.0/math.min.js
',array(),'',true);

wp_enqueue_script('customutiljs',get_template_directory_uri().'/js/utils.js',array(),'1.0.0',true);
wp_enqueue_script('customjs',get_template_directory_uri().'/js/custom.js',array(),'1.0.0',true);



}
add_action( 'wp_enqueue_scripts','mybasicthemeSA_script_enqueue');

function mybasicthemeSA_theme_setup()
{
    add_theme_support('menus');
    
    register_nav_menu('header-menu','Bootstrap Header');
    register_nav_menu('primary','Primary Header Navigation');
    register_nav_menu('secondary','Footer  Navigation');

}
             
add_action('init','mybasicthemeSA_theme_setup');
require_once('wp-bootstrap-navwalker.php');

function bootstrap_nav()
{
    wp_nav_menu( array(
            'theme_location'    => 'header-menu',
            'depth'             => 2,
            'container'         => 'false',
            'menu_class'        => 'nav navbar-nav',
            'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
            'walker'            => new wp_bootstrap_navwalker())
    );
}

