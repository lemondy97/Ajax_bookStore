                 $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "타이탄의 도구들(블랙 에디션)" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg){
                    $(".ajax_box17").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                    $(".ajax_box17").append("<div>");
                    $(".ajax_box17 div").append("<h3>" + "01" + "</h3>");
                    $(".ajax_box17 div").append("<h4>" + msg.documents[0].title + "</h4>");
                    $(".ajax_box17 div").append("<p>" + "<a>" + "-18000원 " + "</a>" + " 16,200원" + "</p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "넛지(파이널 에디션)" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg2){
                    $(".ajax_box18").append("<img src='" + msg2.documents[0].thumbnail + "'/>");
                    $(".ajax_box18").append("<div>");
                    $(".ajax_box18 div").append("<h3>" + "02" + "</h3>");
                    $(".ajax_box18 div").append("<h4>" + msg2.documents[0].title + "</h4>");
                    $(".ajax_box18 div").append("<p>" + "<a>" + "-22000원 " + "</a>" + " 19,800원" + "</p>");
                });


                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "그림의 힘(프레더릭 레이턴 리커버 에디션)" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg3){
                    $(".ajax_box19").append("<img src='" + msg3.documents[0].thumbnail + "'/>");
                    $(".ajax_box19").append("<div>");
                    $(".ajax_box19 div").append("<h3>" + "03" + "</h3>");
                    $(".ajax_box19 div").append("<h4>" + msg3.documents[0].title + "</h4>");
                    $(".ajax_box19 div").append("<p>" + "<a>" + "-19800원 " + "</a>" + " 17,820원" + "</p>");
                });


                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "디 에센셜: 한강" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg4){
                    $(".ajax_box20").append("<img src='" + msg4.documents[0].thumbnail + "'/>");
                    $(".ajax_box20").append("<div>");
                    $(".ajax_box20 div").append("<h3>" + "04" + "</h3>");
                    $(".ajax_box20 div").append("<h4>" + msg4.documents[0].title + "</h4>");
                    $(".ajax_box20 div").append("<p>" + "<a>" + "-17000원 " + "</a>" + " 15,300원" + "</p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "어린이라는 세계" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg5){
                    $(".ajax_box21").append("<img src='" + msg5.documents[0].thumbnail + "'/>");
                    $(".ajax_box21").append("<div>");
                    $(".ajax_box21 div").append("<h3>" + "05" + "</h3>");
                    $(".ajax_box21 div").append("<h4>" + msg5.documents[0].title + "</h4>");
                    $(".ajax_box21 div").append("<p>" + "<a>" + "-15000원 " + "</a>" + " 13,500원" + "</p>");
                });

            