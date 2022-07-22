            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "계속 가보겠습니다" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg){
                    $(".Ajax_boxes7").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes7").append("<h5>" + msg.documents[0].title + "</h5>");
                    $(".Ajax_boxes7").append("<p>" + "16,200원 + 900p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "우는 법을 잃어버린 당신에게" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg2){
                    $(".Ajax_boxes8").append("<img src='" + msg2.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes8").append("<h5>" + msg2.documents[0].title + "</h5>");
                    $(".Ajax_boxes8").append("<p>" + "14,400원 + 800p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "내가 잘못 산다고 말하는 세상에게" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg3){
                    $(".Ajax_boxes9").append("<img src='" + msg3.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes9").append("<h5>" + msg3.documents[0].title + "</h5>");
                    $(".Ajax_boxes9").append("<p>" + "14,400원 + 800p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "나를 향해 걷는 열 걸음" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg4){
                    $(".Ajax_boxes10").append("<img src='" + msg4.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes10").append("<h5>" + msg4.documents[0].title + "</h5>");
                    $(".Ajax_boxes10").append("<p>" + "15,300원 + 850p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "화성 탐사선을 탄 걸리버" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg5){
                    $(".Ajax_boxes11").append("<img src='" + msg5.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes11").append("<h5>" + msg5.documents[0].title + "</h5>");
                    $(".Ajax_boxes11").append("<p>" + "14,400원 + 800p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "인문학 쫌 아는 어른이 되고 싶어" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg6){
                    $(".Ajax_boxes12").append("<img src='" + msg6.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes12").append("<h5>" + msg6.documents[0].title + "</h5>");
                    $(".Ajax_boxes12").append("<p>" + "14,400원 + 800p" + "<p>");
                });