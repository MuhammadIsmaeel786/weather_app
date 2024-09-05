import Search from "../assests/search.png"
function SearchBar() {
    let api_key = '1dd44c4bb6f8b9ed19317519fc9aeb16';
  const search = async () =>{
    const element = document.getElementsByClassName('search-bar');
    if(element[0]===""){
        return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=57&${element[0].value}=-2.15&appid=${api_key}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    const temperature = document.getElementsByClassName("weather-celcius");
    const location = document.getElementsByClassName("day-location");
    temperature[0].innerHTML = data.main.temp;
    location[0].innerHTML = data.name;
  }
    return (
        <div className="search-bar-div">
            <div>
            <input placeholder="Search" className="search-bar"/>
            </div>
            <div className="search-icon-div" onClick={()=>{search()}}>
                <img className="search-icon" alt="search" src={Search} />
            </div>
        </div>
    );
}

export default SearchBar;
