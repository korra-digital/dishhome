 $(function() {
                    var carousel;

                    if (window.screen.width < 769) {
                        jQuery.colorbox.settings.maxWidth = '95%';
                        var resizeTimer;
                        itemno = 1;
                        $(".quickcontact .contactinner .box.tvc .play a").colorbox({
                            iframe: true,
                            width: "90%",
                            height: "100%",
                            rel: 'videoGroup'
                        });
                        carousel = $(".offer-slider").waterwheelCarousel({
                            flankingItems: 2,
                            sizeMultiplier: 0.9,
                            opacityMultiplier: 1,
                            preloadImages: 'true',
                            animationEasing: 'swing',
                            autoPlay: 8000
                        });

                        function resizeColorBox() {
                            if (resizeTimer) clearTimeout(resizeTimer);
                            resizeTimer = setTimeout(function() {
                                jQuery.colorbox.resize({
                                    width: '90%',
                                    maxHeight: 'auto'
                                });
                                itemno = 1;
                            }, 300);
                            carousel = $(".offer-slider").waterwheelCarousel({
                                flankingItems: 2,
                                sizeMultiplier: 0.9,
                                opacityMultiplier: 1,
                                preloadImages: 'true',
                                animationEasing: 'swing',
                                autoPlay: 8000
                            });
                        }
                        $(window).resize(resizeColorBox);
                        window.addEventListener("orientationchange", resizeColorBox, false);
                    } else {
                        $(".quickcontact .contactinner .box.tvc .play a").colorbox({
                            iframe: true,
                            innerWidth: 640,
                            innerHeight: 390,
                            rel: 'videoGroup'
                        });
                        carousel = $(".offer-slider").waterwheelCarousel({
                            flankingItems: 4,
                            horizonOffset: 0,
                            sizeMultiplier: 0.9,
                            opacityMultiplier: 1,
                            animationEasing: 'linear',
                            edgeFadeEnabled: false,
                            preloadImages: 'true',
                            activeClassName: 'active',
                            edgeFadeEnabled: 'true',
                            speed: 500,
                            autoPlay: 8000

                        });

                        function resizeCarousel() {
                            if (resizeTimer) clearTimeout(resizeTimer);
                            resizeTimer = setTimeout(function() {
                                carousel = $(".offer-slider").waterwheelCarousel({
                                    flankingItems: 4,
                                    sizeMultiplier: 0.9,
                                    opacityMultiplier: 1,
                                    preloadImages: 'true',
                                    animationEasing: 'linear',
                                    autoPlay: 8000
                                });

                            }, 300);



                        }
                       

                    }

                    var last = 0;
                    $(".slider-input").slider({
                        range: "min",
                        value: 1,
                        min: 1,
                        max: 100,
                        slide: function(event, ui) {
                            if (ui.value > last) {
                                carousel.next();
                            }
                            if (ui.value < last) {
                                carousel.prev();
                            }
                            last = ui.value;
                        }
                    });

                    $('.bannerwrap .slider').not('.slick-initialized').slick({
                        dots: true,
                        infinite: false,
                        speed: 300,
                        slidesToShow: 1,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        arrows: false,
                        fade: false
                    });

                    $(".ndesign .offer-slider .item .content a.knowmore").on('click', function() {

                        window.location.href = $(this).attr("href");
                    });


                    $('.bannerwrap .slider .item').each(function() {
                        var bg = $(this).attr('data-bg');
                        $(this).css('background-color', bg);
                    })

                    $('.product-slider .slider-for .sliderinner').not('.slick-initialized').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        fade: true,
                        asNavFor: '.slider-nav',
                        adaptiveHeight: true,
                        responsive: [{
                                breakpoint: 767,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    vertical: false,
                                    arrows: true
                                }
                            }
                        ]
                    });
                    $('.product-slider .slider-nav').slick({
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        asNavFor: '.slider-for .sliderinner',
                        dots: false,
                        centerMode: false,
                        vertical: true,
                        adaptiveHeight: true,
                        focusOnSelect: true,
                        responsive: [{
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                    vertical: true
                                }
                            }, {
                                breakpoint: 767,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    vertical: false
                                }
                            }, {
                                breakpoint: 479,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    vertical: false
                                }
                            }
                          
                        ]
                    });


                    $("#MainContent_txtpincode").keydown(function(e) {
                        //  console.log(e.keyCode);
                        if (e.keyCode == 13) {
                            $(this).parent().find('input[type="submit"]').trigger('click');
                            return false;
                        }
                    });

                  


                });