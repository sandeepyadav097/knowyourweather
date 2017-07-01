$('document').ready(function(){
 
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
     var latit=position.coords.latitude;
    var longit=position.coords.longitude;
      
      $.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+latit+"&"+"lon="+longit+"&appid=3b07e4db49a1d3fbe2511180cf038161&units=metric",
        function(a){
        
          
 
        var b=a.weather[0].id;
              
           if(b>=200 && b<300)
              {
                  document.getElementById("body").style.background="url(http://d2z178pveyogmv.cloudfront.net/wp-content/uploads/2013/01/95420559.jpg)";
                  document.getElementById("body").style.backgroundRepeat="no-repeat";
                document.getElementById("body").style.backgroundSize="cover";
                document.getElementById("body").style.height="100%";                  
                document.getElementById("body").style.backgroundAttachment="fixed";
                document.getElementById("body").style.backgroundPosition="center";
                document.getElementById("body").style.height="auto";
                document.getElementById("body").style.minWidth="100%";
               
              }
          else if(b>=300 && b<400){
            
            document.getElementById("body").style.background="url(https://pbs.twimg.com/media/C0kjWdgUsAE5l6T.jpg)";
              document.getElementById("body").style.backgroundRepeat="no-repeat";
                document.getElementById("body").style.backgroundSize="cover";
                document.getElementById("body").style.height="100%";                  
                document.getElementById("body").style.backgroundAttachment="fixed";
                document.getElementById("body").style.backgroundPosition="center";
                document.getElementById("body").style.height="auto";
                document.getElementById("body").style.minWidth="100%";
               
            
            
        }  
          else if(b>=500 && b<600)
           {
               
               document.getElementById("body").style.background="url(http://www.photoshoptutorials.eu/wp-content/uploads/raindrops.jpg)";
               document.getElementById("body").style.backgroundRepeat="no-repeat";
                document.getElementById("body").style.backgroundSize="cover";
                document.getElementById("body").style.height="100%";                  
                document.getElementById("body").style.backgroundAttachment="fixed";
                document.getElementById("body").style.backgroundPosition="center";
                document.getElementById("body").style.height="auto";
                document.getElementById("body").style.minWidth="100%";
               
           }
          else if(b>=600 && b<700){
              document.getElementById("body").style.background="url(https://vignette4.wikia.nocookie.net/phobia/images/a/aa/Snow.jpg/revision/latest?cb=20161109045734)";
              document.getElementById("body").style.backgroundRepeat="no-repeat";
                document.getElementById("body").style.backgroundSize="cover";
                document.getElementById("body").style.height="100%";                  
                document.getElementById("body").style.backgroundAttachment="fixed";
                document.getElementById("body").style.backgroundPosition="center";
                document.getElementById("body").style.height="auto";
                document.getElementById("body").style.minWidth="100%";
               
          }
          
          
          else if(b>=700 && b<800)
              {
                document.getElementById("body").style.background="url(http://ukrytykot.pl/wp-content/uploads/2017/02/o-kobiecie-w-klatce-slow-kilka.jpg)";
                document.getElementById("body").style.backgroundRepeat="no-repeat";
                document.getElementById("body").style.backgroundSize="cover";
                document.getElementById("body").style.height="100%";                  
                document.getElementById("body").style.backgroundAttachment="fixed";
                document.getElementById("body").style.backgroundPosition="center";
                document.getElementById("body").style.height="auto";
                document.getElementById("body").style.minWidth="100%";
    
  
                  
                 
              }
          else if(b==800)
              {
                  document.getElementById("body").style.background="url(https://wallpaperstock.net/clear-sky-field--hay-bale-wallpapers_41557_1920x1080.jpg)";
                  document.getElementById("body").style.backgroundRepeat="no-repeat";
                document.getElementById("body").style.backgroundSize="cover";
                document.getElementById("body").style.height="100%";                  
                document.getElementById("body").style.backgroundAttachment="fixed";
                document.getElementById("body").style.backgroundPosition="center";
                document.getElementById("body").style.height="auto";
                document.getElementById("body").style.minWidth="100%";
                 
              }
          
          else if(b>800 && b<900)
              {
                  document.getElementById("body").style.background="url(http://files.techcrunch.cn/2016/06/clouds.jpg?w=1024)";
                  document.getElementById("body").style.backgroundRepeat="no-repeat";
                document.getElementById("body").style.backgroundSize="cover";
                document.getElementById("body").style.height="100%";                  
                document.getElementById("body").style.backgroundAttachment="fixed";
                document.getElementById("body").style.backgroundPosition="center";
                document.getElementById("body").style.height="auto";
                document.getElementById("body").style.minWidth="100%";
                 
              }
             else if(b>=900 && b<907)
              {
                  document.getElementById("body").style.background="url(http://static.segundoenfoque.com/wp-content/uploads/2016/10/e834b70829f7063ecd0b470de7444e90fe76e6d21fb3134093f8c8_1280_hurac%C3%A1n.jpg)";
                  document.getElementById("body").style.backgroundRepeat="no-repeat";
                document.getElementById("body").style.backgroundSize="cover";
                document.getElementById("body").style.height="100%";                  
                document.getElementById("body").style.backgroundAttachment="fixed";
                document.getElementById("body").style.backgroundPosition="center";
                document.getElementById("body").style.height="auto";
                document.getElementById("body").style.minWidth="100%";
                 
              }
             else if(b>=951 && b<1000)
              {
                  document.getElementById("body").style.background="url(http://mynewsla.com/wp-content/uploads/2014/12/palm-trees-360885_1280.jpg)";
                  document.getElementById("body").style.backgroundRepeat="no-repeat";
                document.getElementById("body").style.backgroundSize="cover";
                document.getElementById("body").style.height="100%";                  
                document.getElementById("body").style.backgroundAttachment="fixed";
                document.getElementById("body").style.backgroundPosition="center";
                document.getElementById("body").style.height="auto";
                document.getElementById("body").style.minWidth="100%";
                 
              }
          
            /*  icon image according to the icon of api data    */  
        document.getElementById("img").src="http://openweathermap.org/img/w/"+a.weather[0].icon+".png";
          
          
        $("#p").html(a.main.temp);        
          /* the button for toggling b/w celsius and fahrenheit*/
        $("#c").on("click",function(){
            
        $("#p").html(a.main.temp);             
        });   
        
      
        $("#f").on("click",function(){            
             $("#p").html(Math.round(a.main.temp*(9/5)+32)*100/100);
        });
        
          /*the data displaying divs*/
          
        $("#location").html(a.name);
        $("#description").html(a.weather[0].description);
        $("#humidity").html(a.main.humidity+"%");
        $("#wind").html(a.wind.speed+" m/s");       
   });
    
    
     /* $.getJSON("https://crossorigin.me/https://api.darksky.net/forecast/fe8d343b76a275eb91b82ffaadfd890f/"+latit+","+longit, 
                 {
          
          key:'fe8d343b76a275eb91b82ffaadfd890f',
          latitude:latit,
          longitude:longit
          
      },
        
  
          function(a){
          
          
          console.log(a.timezone);
      });
        */      
      
  });
    
}
     
      
    
});







