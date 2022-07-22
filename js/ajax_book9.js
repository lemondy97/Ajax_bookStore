                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "빅토리 노트" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg){
                    $(".ajax_box9").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                    $(".ajax_box9").append("<div>");
                    $(".ajax_box9 div").append("<img src='" + "img/main/star.png" + "'/>");
                    $(".ajax_box9 div").append("<h3>" + msg.documents[0].title + "</h3>");
                    $(".ajax_box9 div").append("<p>" + "<a>" + "-19000원 " + "</a>" + " 17,100원" + "</p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "나를 살게 하는 것들" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg2){
                    $(".ajax_box10").append("<img src='" + msg2.documents[0].thumbnail + "'/>");
                    $(".ajax_box10").append("<div>");
                    $(".ajax_box10 div").append("<img src='" + "img/main/star.png" + "'/>");
                    $(".ajax_box10 div").append("<h3>" + msg2.documents[0].title + "</h3>");
                    $(".ajax_box10 div").append("<p>" + "<a>" + "-16000원 " + "</a>" + " 14,400원" + "</p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "유럽 도시 기행2" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg3){
                    $(".ajax_box11").append("<img src='" + msg3.documents[0].thumbnail + "'/>");
                    $(".ajax_box11").append("<div>");
                    $(".ajax_box11 div").append("<img src='" + "img/main/star.png" + "'/>");
                    $(".ajax_box11 div").append("<h3>" + msg3.documents[0].title + "</h3>");
                    $(".ajax_box11 div").append("<p>" + "<a>" + "-17500원 " + "</a>" + " 15,750원" + "</p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "엄청나게 커다란 소원" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg4){
                    $(".ajax_box12").append("<img src='" + msg4.documents[0].thumbnail + "'/>");
                    $(".ajax_box12").append("<div>");
                    $(".ajax_box12 div").append("<img src='" + "img/main/star.png" + "'/>");
                    $(".ajax_box12 div").append("<h3>" + msg4.documents[0].title + "</h3>");
                    $(".ajax_box12 div").append("<p>" + "<a>" + "-13000원 " + "</a>" + " 11,700원" + "</p>");
                });

                $.ajax({
                    method: "GET",
                    url: "https://dapi.kakao.com/v3/search/book?target=title",
                    data: { query: "퀀텀 라이프" },
                    headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
                })
                    .done(function(msg5){
                        $(".ajax_box13").append("<img src='" + msg5.documents[0].thumbnail + "'/>");
                        $(".ajax_box13").append("<div>");
                        $(".ajax_box13 div").append("<img src='" + "img/main/star.png" + "'/>");
                        $(".ajax_box13 div").append("<h3>" + msg5.documents[0].title + "</h3>");
                        $(".ajax_box13 div").append("<p>" + "<a>" + "-13000원 " + "</a>" + " 11,700원" + "</p>");
                    });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "코로나와 잠수복" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg6){
                    $(".ajax_box14").append("<img src='" + msg6.documents[0].thumbnail + "'/>");
                    $(".ajax_box14").append("<div>");
                    $(".ajax_box14 div").append("<img src='" + "img/main/star.png" + "'/>");
                    $(".ajax_box14 div").append("<h3>" + msg6.documents[0].title + "</h3>");
                    $(".ajax_box14 div").append("<p>" + "<a>" + "-14800원 " + "</a>" + " 13,320원" + "</p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "사야 할 집 팔아야 할 집" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg7){
                    $(".ajax_box15").append("<img src='" + msg7.documents[0].thumbnail + "'/>");
                    $(".ajax_box15").append("<div>");
                    $(".ajax_box15 div").append("<img src='" + "img/main/star.png" + "'/>");
                    $(".ajax_box15 div").append("<h3>" + msg7.documents[0].title + "</h3>");
                    $(".ajax_box15 div").append("<p>" + "<a>" + "-17000원 " + "</a>" + " 15,300원" + "</p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "어쩌면 나도 무례한 사람일까" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg8){
                    $(".ajax_box16").append("<img src='" + msg8.documents[0].thumbnail + "'/>");
                    $(".ajax_box16").append("<div>");
                    $(".ajax_box16 div").append("<img src='" + "img/main/star.png" + "'/>");
                    $(".ajax_box16 div").append("<h3>" + msg8.documents[0].title + "</h3>");
                    $(".ajax_box16 div").append("<p>" + "<a>" + "-16000원 " + "</a>" + " 14,400원" + "</p>");
                });