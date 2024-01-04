document.addEventListener('DOMContentLoaded', function () {
    // Assuming you have an element with the id "ratingContainer"
    var ratingContainer = document.getElementById('ratingContainer');

    // Add event listeners to each rating button
    var ratingButtons = document.querySelectorAll('.rating-btn');
    ratingButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            // Handle the rating logic here, e.g., change styles or send data to a server
            console.log('Rated:', index + 1);
        });
    });

    // Rating stars functionality (jQuery)
    $('.rating label').on('click', function () {
        var index = $(this).index();
        $('.swiper-slide').data('rating', index + 1);
    });

    // Swiper initialization
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            init: function () {
                // Display saved ratings
                var savedRatings = {};
                this.slides.each(function (index, slide) {
                    var savedRating = $(slide).data('rating');
                    if (savedRating) {
                        savedRatings[index] = savedRating;
                        $('.rating label').eq(savedRating - 1).trigger('click');
                    }
                });
            },
            slideChange: function () {
                // Save ratings when sliding to the next slide
                var currentSlide = this.activeIndex;
                var savedRating = savedRatings[currentSlide];

                if (!savedRating) {
                    var rating = parseInt($('.swiper-slide').data('rating')) || 0;
                    savedRatings[currentSlide] = rating;
                }
            },
        },
    });
});
