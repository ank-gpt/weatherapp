const apiKey = "bc64055e692371078cc57d8bfe29b323"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkweather(input){
    if(input === "undefined"){
        const disp = document.querySelector(".body_");
        disp.style.display = "none";   // else statment is required as we need overwrite the none value of display
    }else{
    const response = await fetch(apiUrl + `${input}`+ `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    const name = document.querySelector(".body.three");
    const temp = document.querySelector(".body.two");
    const humid = document.querySelector(".footer .foot.one div");
    const wind = document.querySelector(".footer .foot.two div");
    humid.innerHTML = data.main.humidity;
    wind.innerHTML = data.wind.speed + 'km/h';
    name.innerHTML = data.name;
    temp.innerHTML = data.main.temp + 'deg';
    const disp = document.querySelector(".footer");
    disp.style.display = "flex";
    }
}
const searchBox = document.querySelector(".header input");
const searchbtn = document.querySelector(".header button");
searchbtn.addEventListener('click',()=>{
    checkweather(searchBox.value);
})
// learnings
/* 
1) check if query selector selects the element properly
2) note the .style.display
*/