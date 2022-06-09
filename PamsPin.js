function getAddress(){

    // Base of the PositionStack query URL
    const apibase = "http://api.positionstack.com/v1/forward?access_key="
    // Plug in API key. See ReadMe for more info on where to get the key. 
    const apikeynumber ="YOUR KEY GOES HERE"
    // Add suffix to query
    const querysuffix = "&query="
    // Putting the whole API request together
    const apikey = apikeynumber+querysuffix
    
    // Empty arrays for processing API data
    let mapdata = {}
    let MyArray = {}
    
    // Getting values from form 

    var street = document.querySelector(".street").value  
    var city = document.querySelector(".city").value
    var state = document.querySelector(".state").value
    var searchrad = document.querySelector(".searchkm").value
    var verify = document.querySelector(".verified").value 
    var mapquery = street+","+city+" "+state
    var api_url = encodeURI(apibase+apikey+mapquery)
     
    // Grabbing the PositionStack data and getting lat/long

    fetch(api_url)
    .then(function(response){
         return response.json()
    })
    .then (function(res){
        mapdata=res
    console.log(mapdata)
    console.log(mapdata.data[0])
    MyArray = mapdata.data[0]
     var lat = MyArray.latitude
    var long = MyArray.longitude
    
    // Applying lat/long data to Twitter query and making a query URL

    var twitbase = "https://twitter.com/search?q=geocode:"
    var twitshort = encodeURI(twitbase+lat+","+long+","+searchrad+"km")

    // Did the user specify verified? We have to add a verified filter to the query URL. 

   if (verify){ 
    var vermod = encodeURI(" filter:verified")
     twitshort = twitshort+vermod }
     else {twitshort = twitshort};
   
    // The final Twitter query 

    var twitquery = twitshort+"&f=live"
    
    // Open Twitter query in new Window

    window.open(twitquery)
    
    })
    
    }