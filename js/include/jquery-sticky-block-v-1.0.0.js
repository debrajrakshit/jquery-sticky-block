/*
// Plugin Name: jQuery Sticky Block
// Version: 1.0.0
// Author: Debraj Rakshit
// Author Email: debrajweb@gmail.com
// Date: 24 September 2020
// License: https://opensource.org/licenses/MIT
// Copyright 2020, https://github.com/debrajrakshit/jquery-sticky-block
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function( $ ){

    // Sticky Block Function Starts
    $.fn.stickyBlock = function (){
        // Define elements
        let columnLeft;
        let columnRight
        let rightBlockHeight;

        // Define window width
        let windowWidthCurrent = $(window).width();

        $(window).on('load resize scroll', () => {
            // Update window width
            windowWidthCurrent = $(window).width();

            this.each((index, element) => {

                // Assign value to elements
                columnLeft = $(element).find('.column-left');
                columnRight = $(element).find('.column-right');
    
                // Assign height
                rightBlockHeight = $(columnRight).outerHeight();
    
                // Apply height to left column
                $(rightBlockHeight).promise().done(() => {
                    columnLeft.css('height', rightBlockHeight);
                });
    
                // Apply height to left column
                if( windowWidthCurrent >= 1024 ){
                    $(rightBlockHeight).promise().done(() => {
                        columnLeft.css('height', rightBlockHeight);
                    });
                }
                else{
                    columnLeft.css('height', 'auto');
                }
    
            });
    
            return this;
        });
        
    }

}( jQuery));