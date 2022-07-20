                    $(function(){
                        $('#ajax_bookContainer1').css("display", "none");

                        $('.slide_list1').hover(function(){
                            $('.hidden_images1').css("display", "block");
                            $('.slide_list1 a').addClass('active');
                            $('.slide_list2 a').removeClass('active');
                            $('.slide_list3 a').removeClass('active');
                            $('.slide_list4 a').removeClass('active');
                            $('#banner_container2').css("background-color", "#dbf1ff");
                            $('.hidden_images2').css("display", "none");
                            $('.hidden_images3').css("display", "none");
                            $('#ajax_bookContainer1').css("display", "none");
                        });

                        $('.slide_list2').hover(function(){
                            $('.hidden_images1').css("display", "none");
                            $('.slide_list1 a').removeClass('active');
                            $('.slide_list2 a').addClass('active');
                            $('.slide_list3 a').removeClass('active');
                            $('.slide_list4 a').removeClass('active');
                            $('#banner_container2').css("background-color", "white");
                            $('.hidden_images2').css("display", "block");
                            $('.hidden_images3').css("display", "none");
                            $('#ajax_bookContainer1').css("display", "none");
                        });

                        $('.slide_list3').hover(function(){
                            $('.hidden_images1').css("display", "none");
                            $('.slide_list1 a').removeClass('active');
                            $('.slide_list2 a').removeClass('active');
                            $('.slide_list3 a').addClass('active');
                            $('.slide_list4 a').removeClass('active');
                            $('#banner_container2').css("background-color", "white");
                            $('.hidden_images2').css("display", "none");
                            $('.hidden_images3').css("display", "block");
                            $('#ajax_bookContainer1').css("display", "none");
                        });

                        $('.slide_list4').hover(function(){
                            $('.hidden_images1').css("display", "none");
                            $('.slide_list1 a').removeClass('active');
                            $('.slide_list2 a').removeClass('active');
                            $('.slide_list3 a').removeClass('active');
                            $('.slide_list4 a').addClass('active');
                            $('#banner_container2').css("background-color", "white");
                            $('.hidden_images2').css("display", "none");
                            $('.hidden_images3').css("display", "none");
                            $('#ajax_bookContainer1').css("display", "flex");
                        });
                    });