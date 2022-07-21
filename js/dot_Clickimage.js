            let slide_num = 1;
            showFadeBook(slide_num);

            function currentSlide(n){
                showFadeBook(slide_num = n);
            }

            function showFadeBook(n){
                let book;
                let fades = document.getElementsByClassName("book_box3");
                let dots2 = document.getElementsByClassName("dot2");
                if(n > fades.length){ slide_num = 1 };
                if(n < 1){slide_num = fades.length};
                for (book = 0; book < fades.length; book++){
                    fades[book].style.display = "none";
                }
                for (book = 0; book < dots2.length; book++){
                    dots2[book].className = dots2[book].className.replace(" active_dot", "");
                }
                fades[slide_num-1].style.display = "block";
                dots2[slide_num-1].className += " active_dot";
            }