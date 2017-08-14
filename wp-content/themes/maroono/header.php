<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width">
	<title>Sobi's Bike Station</title>
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<nav class="navbar navbar-default">
	<div class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="http://localhost/BikeShareProject/Sobi-s-Bike-Share-Services/">Sobi's Bike Station</a>
		</div>
		<div id="navbar" class="navbar-collapse collapse">
			<?php bootstrap_nav(); ?>
		</div><!--/.nav-collapse -->
	</div><!--/.container-fluid -->
</nav>

