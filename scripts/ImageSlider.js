$(document).ready(function(){

    let upperSlider = $('#upperSliderContainer .upperSlider');
    let lowerSlider = $('#lowerSliderContainer .lowerSlider');

    var upperSliderImages = [
        $('#upperSliderContainer .upperSlider #uS1 img'), 
        $('#upperSliderContainer .upperSlider #uS2 img'), 
        $('#upperSliderContainer .upperSlider #uS3 img'), 
        $('#upperSliderContainer .upperSlider #uS4 img'), 
        $('#upperSliderContainer .upperSlider #uS5 img')  
    ];

    var lowerSliderImages = [
        $('#lowerSliderContainer .lowerSlider #lS1 img'), 
        $('#lowerSliderContainer .lowerSlider #lS2 img'), 
        $('#lowerSliderContainer .lowerSlider #lS3 img'), 
        $('#lowerSliderContainer .lowerSlider #lS4 img')  
    ];

    let slideUpperNumber = $('#upperSliderContainer .upperSlider li').length;
    let slideLowerNumber = $('#lowerSliderContainer .lowerSlider li').length;
    let margin = 10;

    var currentLowerFocus = 0;
    var currentUpperFocus = 0;

    var arrowsEnabled = true;

    $('#leftArrow').click(function() {
        if (!arrowsEnabled) return;
        arrowsEnabled = false;

        if(currentUpperFocus == slideUpperNumber){
            currentUpperFocus = 0;
        }
    
        if(currentLowerFocus == slideLowerNumber){
            currentLowerFocus = 0;
        }

        var imageUpperWidth = upperSliderImages[currentUpperFocus].width();
        var imageLowerWidth = lowerSliderImages[currentLowerFocus].width();

        upperSliderImages[currentUpperFocus].fadeOut(400);
        upperSlider.animate({'left': '-=' + (imageUpperWidth + margin)}, 400, function(){
            upperSlider.append(upperSliderImages[currentUpperFocus-1].hide().fadeIn(400)); 
            upperSlider.css({'left': '-60px'});
        });
    
        lowerSliderImages[currentLowerFocus].fadeOut(400);
        lowerSlider.animate({'left': '-=' + (imageLowerWidth + margin)}, 400, function(){
            lowerSlider.append(lowerSliderImages[currentLowerFocus-1].hide().fadeIn(400)); 
            lowerSlider.css({'left': '-55px'});
        });

        currentUpperFocus++;
        currentLowerFocus++;

        setTimeout(() => {
            arrowsEnabled = true;
        }, 500);
    });

    $('#rightArrow').click(function() {
        if (!arrowsEnabled) return;
        arrowsEnabled = false;

        if(currentUpperFocus == 0){
            currentUpperFocus = slideUpperNumber;
        }

        if(currentLowerFocus == 0){
            currentLowerFocus = slideLowerNumber;
        }

        currentUpperFocus--;
        currentLowerFocus--;

        var imageUpperWidth = upperSliderImages[currentUpperFocus].width();
        var imageLowerWidth = lowerSliderImages[currentLowerFocus].width();
        
        upperSliderImages[currentUpperFocus].fadeOut(400);
        upperSlider.animate({'left': '+=' + (imageUpperWidth + margin)}, 400, function(){
            upperSlider.prepend(upperSliderImages[currentUpperFocus].hide().fadeIn(400)); 
            upperSlider.css({'left': '-60px'});
        });

        lowerSliderImages[currentLowerFocus].fadeOut(400);
        lowerSlider.animate({'left': '+=' + (imageLowerWidth + margin)}, 400, function(){
            lowerSlider.prepend(lowerSliderImages[currentLowerFocus].hide().fadeIn(400)); 
            lowerSlider.css({'left': '-55px'});
        });

        setTimeout(() => {
            arrowsEnabled = true;
        }, 500);
    }); 
    
});