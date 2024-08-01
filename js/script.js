let slideIndex = 0;
            showSlides();
            function showSlides(){
                let i;
                let slides = document.getElementsByClassName("slidese");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";  
                }
                slideIndex++;
                if (slideIndex > slides.length) {slideIndex = 1}    
                slides[slideIndex-1].style.display = "block";  
                setTimeout(showSlides, 2000); // Change image every 2 seconds
            }

            function formvalidation(){
                var name = document.forms['contact']['fname'].value;
                var email = document.forms['contact']['email'].value;
                var seleect = document.forms['contact']['destina'].value;

                if (name == "" || email == "" || seleect == ""){
                    alert('Please fill the data first');
                    return false;
                } else {
                    alert('Your data has been sent')
                }
            }