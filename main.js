var sliderData = [
    {
        img: "https://a-static.besthdwallpaper.com/crete-at-night-greece-wallpaper-1280x720-28124_45.jpg"
    },
    {
        img: "https://i0.wp.com/www.trendmut.com/wp-content/uploads/2018/03/traveling-to-greece-best-places-in-greece-adventures-at-greece-greece-tourism-tips-1.jpg?fit=1024%2C640&ssl=1&resize=1280%2C720"
    },
    {
        img: "https://greece.greekreporter.com/files/77076.jpg"
    },
    {
        img: "https://i2.wp.com/cruisetraveltips.net/wp-content/uploads/2018/08/Ialyssos-Beach-Rhodes-2018.jpg?fit=572%2C322&ssl=1&resize=1280%2C720"
    },
    {
        img: "https://i2.wp.com/blog.lefkada-rentals.com/wp-content/uploads/karia-lefkas-karya-007.jpg?fit=1200%2C728&ssl=1&resize=1280%2C720"
    }

];


var counter = 0;
var slider = document.getElementById("slider");

function createImgElement(url) {
    let aElement = document.createElement('img');
    aElement.src = url;
    return aElement;
}

function setSlider(index) { 
    let currentSlider = sliderData[index];
    slider.innerHTML = '';
    slider.append(createImgElement(currentSlider.img));
}

function right() {
    if (counter < sliderData.length - 1) {
        counter++;
        console.log(counter);
    } else if (counter === sliderData.length - 1) {
        counter = 0;
    }
}
setSlider(0);
setInterval(function () { 
    right();
    setSlider(counter);
}, 1500);


