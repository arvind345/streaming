
        var settings1 = {
            dots: true,
            infinite: false,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll:3,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2.4,
                        slidesToScroll: 2.4
                    }
                }
            ]
        };
        var settings2= {
            dots: true,
            infinite: false,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll:3,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2.4,
                        slidesToScroll: 2.4
                    }
                }
            ]
        };

        var settings32= {
            dots: true,
            infinite: false,
            arrows: true,
            slidesToShow: 3.2,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3.2,
                        slidesToScroll: 3.2,
                        infinite: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll:3,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1.5,
                        slidesToScroll: 1
                    }
                }
            ]
        };



export {settings1, settings32}