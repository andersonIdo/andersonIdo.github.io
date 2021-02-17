function footwear(){
    //Input:Get weather and Footwear 
    //Progressing:Use Combo Box in javaScript to select the correct Footwear base on the weather.
    //Output:Show the correct Footwear 

    // Input -get number1 and Number2 from the user
    // Progressing - Determine the correct Footwear 
    let footwear
    let weather = document.getElementById("weather").value
     
        if (weather == "hot") {
            footwear = "sandals";
        } else if (weather == "rain") {
            footwear = "galoshes";
        } else if (weather == "snow") { 
            footwear = "Boots";
        } else {
            footwear = "Shoes";
        }

        document.getElementById('output').innerHTML = footwear
    }