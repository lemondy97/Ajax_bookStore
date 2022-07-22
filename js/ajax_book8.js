                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "Holes (1999 Newbery Medal Winner)" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg){
                    $(".Ajax_boxes31").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes31").append("<h5>" + msg.documents[0].title + "</h5>");
                    $(".Ajax_boxes31").append("<p>" + "5,350원 + 60p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "Basic Grammar in Use with Answers 4/E" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg2){
                    $(".Ajax_boxes32").append("<img src='" + msg2.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes32").append("<h5>" + msg2.documents[0].title + "</h5>");
                    $(".Ajax_boxes32").append("<p>" + "20,700원 + 630p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "The Summer I Turned Pretty(Media Tie-In)" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg3){
                    $(".Ajax_boxes33").append("<img src='" + msg3.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes33").append("<h5>" + msg3.documents[0].title + "</h5>");
                    $(".Ajax_boxes33").append("<p>" + "11,100원 + 340p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "Princeton Review SAT Prep, 2023" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg4){
                    $(".Ajax_boxes34").append("<img src='" + msg4.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes34").append("<h5>" + msg4.documents[0].title + "</h5>");
                    $(".Ajax_boxes34").append("<p>" + "33,120원 + 1000p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "Encanto" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg5){
                    $(".Ajax_boxes35").append("<img src='" + msg5.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes35").append("<h5>" + msg5.documents[0].title + "</h5>");
                    $(".Ajax_boxes35").append("<p>" + "6,300원 + 350p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "The Last Thing He Told Me" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg6){
                    $(".Ajax_boxes36").append("<img src='" + msg6.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes36").append("<h5>" + msg6.documents[0].title + "</h5>");
                    $(".Ajax_boxes36").append("<p>" + "12,850원 + 390p" + "<p>");
                });