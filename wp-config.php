<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'sobi');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'nLZp30yw3ZR5@ Q5/F~pMf_aI7n.7c,s(BqK:qKS%*vz37 +1nC]d3x_f)Ib_aAL');
define('SECURE_AUTH_KEY',  'odgEAA=OE`5@5H+i )@J1X9D*b;+vBOa>^UG!%Ngc{nth!`a^7jZ#S;YU7F96,Fn');
define('LOGGED_IN_KEY',    'c|Ny[UNbEqXd=THs*!tTCD]fHA{|W*$Y#VLLZ@_b`w$#1hxO/uBmlo)KPZcfWK>n');
define('NONCE_KEY',        '}NDh/S*&{V/ul nhnI?v=Ubiko%qbqp;Drmhl8YeST7WU,jYY?0~`}^Ey8-q0|`Q');
define('AUTH_SALT',        '(9*ti&o&l~krtr*^>WX#vm4 Z%?PgJE{/Z.TB8*ixxp4!_!W3L>0+&b1Q9XNKGf`');
define('SECURE_AUTH_SALT', 'D#~x)d2^Sz+L%}Y5iu>(m]/RpI)jJx7vDR_z2[9P>PR&bG=h.qaxeYo~Dm;;rwv<');
define('LOGGED_IN_SALT',   'A$eU/JOUOrK.:0+eKW=,lT3l3%&CY: &YZSNkV=sC|f;x$/tgm]}-w7*>yt`JfG0');
define('NONCE_SALT',       '8YfS0{qj.u*A_t_yeMXIhZ|%G#AhavDy#Y_P[HlDJ6A/rQcy.{&=#p&tDj)#uA{z');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
