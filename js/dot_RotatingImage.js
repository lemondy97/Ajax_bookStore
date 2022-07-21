            let slideIndex = 0;
            showSlideBook();

            function showSlideBook(){
                let i;
                let slides = document.getElementsByClassName("book_box2");
                let dots = document.getElementsByClassName("dot");
                for (i = 0; i < slides.length; i++){
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length){slideIndex = 1};
                for (i = 0; i < dots.length; i++){
                    dots[i].className = dots[i].className.replace(" active_dot", "");
                }
                slides[slideIndex-1].style.display = "block";
                dots[slideIndex-1].className += " active_dot";
                setTimeout(showSlideBook, 2500);
            }