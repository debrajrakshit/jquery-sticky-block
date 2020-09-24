# jquery-sticky-block

Usage:
$('.your-selector-name').stickyBlock();

Example:
To add a sticky block to a scrolling content you need to construct the layout as follows*:
*(the div with class "sticky" will be the sticky block)

<!-- Sticky block starts here -->
    <div id="sticky-block-1" class="sticky-block-wrapper">
        <div class="sticky-block-row">
            <!-- Column Left Starts here -->
            <div class="column-left">
                <!-- Content block sticky 1 starts -->
                <div class="content-block-left content-block-01 sticky">
                    <h2>This is a sticky block 1</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione rerum soluta, recusandae laudantium, aperiam omnis maiores odio numquam autem dolor repellendus. Mollitia saepe laborum laboriosam architecto, debitis asperiores reiciendis dolorum?</p>
                    <p><a href="#">Link 1</a></p>
                </div>
                <!-- Content block sticky 1 ends -->
            </div>
            <!-- Column Left Ends here -->
            <!-- Column Right Starts here -->
            <div class="column-right">
                <!-- Content block 1 starts -->
                <div class="content-block-right content-block-02">
                    <h3>This is a title 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et modi fuga voluptatum ut repudiandae maiores optio atque vero dolores! Nisi explicabo quidem impedit ipsam modi doloremque facere, aperiam libero eius.</p>
                </div>
                <!-- Content block 1 ends -->
                <!-- Content block 2 starts -->
                <div class="content-block-right content-block-03">
                    <h3>This is a title 3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et modi fuga voluptatum ut repudiandae maiores optio atque vero dolores! Nisi explicabo quidem impedit ipsam modi doloremque facere, aperiam libero eius.</p>
                </div>
                <!-- Content block 2 ends -->
                <!-- Content block 3 starts -->
                <div class="content-block-right content-block-04">
                    <h3>This is a title 4</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et modi fuga voluptatum ut repudiandae maiores optio atque vero dolores! Nisi explicabo quidem impedit ipsam modi doloremque facere, aperiam libero eius.</p>
                </div>
                <!-- Content block 3 ends -->
                <!-- Content block 4 starts -->
                <div class="content-block-right content-block-05">
                    <h3>This is a title 5</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et modi fuga voluptatum ut repudiandae maiores optio atque vero dolores! Nisi explicabo quidem impedit ipsam modi doloremque facere, aperiam libero eius.</p>
                </div>
                <!-- Content block 4 ends -->
                <!-- Content block 5 starts -->
                <div class="content-block-right content-block-06">
                    <h3>This is a title 6</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et modi fuga voluptatum ut repudiandae maiores optio atque vero dolores! Nisi explicabo quidem impedit ipsam modi doloremque facere, aperiam libero eius.</p>
                </div>
                <!-- Content block 5 ends -->
                <!-- Content block 6 starts -->
                <div class="content-block-right content-block-07">
                    <h3>This is a title 7</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et modi fuga voluptatum ut repudiandae maiores optio atque vero dolores! Nisi explicabo quidem impedit ipsam modi doloremque facere, aperiam libero eius.</p>
                </div>
                <!-- Content block 6 ends -->
                <!-- Content block 7 starts -->
                <div class="content-block-right content-block-08">
                    <h3>This is a title 8</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et modi fuga voluptatum ut repudiandae maiores optio atque vero dolores! Nisi explicabo quidem impedit ipsam modi doloremque facere, aperiam libero eius.</p>
                </div>
                <!-- Content block 7 ends -->
                <!-- Content block 8 starts -->
                <div class="content-block-right content-block-09">
                    <h3>This is a title 9</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et modi fuga voluptatum ut repudiandae maiores optio atque vero dolores! Nisi explicabo quidem impedit ipsam modi doloremque facere, aperiam libero eius.</p>
                </div>
                <!-- Content block 8 ends -->
                <!-- Content block 9 starts -->
                <div class="content-block-right content-block-10">
                    <h3>This is a title 10</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et modi fuga voluptatum ut repudiandae maiores optio atque vero dolores! Nisi explicabo quidem impedit ipsam modi doloremque facere, aperiam libero eius.</p>
                </div>
                <!-- Content block 9 ends -->
                <!-- Content block 10 starts -->
                <div class="content-block-right content-block-11">
                    <h3>This is a title 11</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et modi fuga voluptatum ut repudiandae maiores optio atque vero dolores! Nisi explicabo quidem impedit ipsam modi doloremque facere, aperiam libero eius.</p>
                </div>
                <!-- Content block 10 ends -->
            </div>
            <!-- Column Right Ends here -->
        </div>
    </div>
    <div class="clearfix"></div>
    <!-- Sticky block ends here -->

    You may keep adding more sticky containers like this with your regular contents.