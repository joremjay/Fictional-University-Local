<?php

$query = new WP_Query(array(
    'post_type' => 'post',  // Or whatever post type you are trying to display
    'p' => get_the_ID()     // Ensure the query targets the current page
));

while ($query->have_posts()) {
    $query->the_post();
    pageBanner(); // Your custom function

    ?>

    <div class="container container--narrow page-section">
        
        <div class="metabox metabox--position-up metabox--with-home-link">
            <p>
                <a class="metabox__blog-home-link" href="<?php echo site_url('/blog'); ?>">
                    <i class="fa fa-home" aria-hidden="true"></i> Blog Home
                </a> 
                <span class="metabox__main">Posted by <?php the_author_posts_link(); ?> 
                on <?php the_time('n.j.y'); ?> 
                in <?php echo get_the_category_list(', ') ?>
                </span>
            </p>
        </div>

        <div class="generic-content"><?php the_content(); ?></div>
    </div>
    
<?php
} wp_reset_postdata();

?>
