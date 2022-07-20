         $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "다섯번째 산" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg){
                    $(".ajax_box5").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                    $(".ajax_box5").append("<div>");
                    $(".ajax_box5 div").append("<img src='" + "img/main/star.png" + "'/>");
                    $(".ajax_box5 div").append("<h3>" + msg.documents[0].title + "</h3>");

                    var str = msg.documents[0].contents;
                    var str2 = str.substring(0, 100);

                    $(".ajax_box5 div").append("<p>" + str2 + "</p>");
                });


                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "입지 센스" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg2){
                    $(".ajax_box6").append("<img src='" + msg2.documents[0].thumbnail + "'/>");
                    $(".ajax_box6").append("<div>");
                    $(".ajax_box6 div").append("<img src='" + "img/main/star.png" + "'/>");
                    $(".ajax_box6 div").append("<h3>" + msg2.documents[0].title + "</h3>");
                    
                    var str = msg2.documents[0].contents;
                    var str2 = str.substring(0, 100);

                    $(".ajax_box6 div").append("<p>" + str2 + "</p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "나는 왜 나를 함부로 대할까" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg3){
                    $(".ajax_box7").append("<img src='" + msg3.documents[0].thumbnail + "'/>");
                    $(".ajax_box7").append("<div>");
                    $(".ajax_box7 div").append("<img src='" + "img/main/star.png" + "'/>");
                    $(".ajax_box7 div").append("<h3>" + msg3.documents[0].title + "</h3>");
                    
                    var str = msg3.documents[0].contents;
                    var str2 = str.substring(0, 100);

                    $(".ajax_box7 div").append("<p>" + str2 + "</p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "뛰는 사람" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg4){
                    $(".ajax_box8").append("<img src='" + msg4.documents[0].thumbnail + "'/>");
                    $(".ajax_box8").append("<div>");
                    $(".ajax_box8 div").append("<img src='" + "img/main/star.png" + "'/>");
                    $(".ajax_box8 div").append("<h3>" + msg4.documents[0].title + "</h3>");
                    
                    var str = msg4.documents[0].contents;
                    var str2 = str.substring(0, 100);

                    $(".ajax_box8 div").append("<p>" + str2 + "</p>");
                });