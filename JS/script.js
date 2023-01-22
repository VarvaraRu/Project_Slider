let arrayWithInfo = [{
    url: "./images/image_2.1.png",
    title: "Rostov-on-Don, Admiral",
    city: "Rostov-on-Don, LCD admiral",
    area: "81 m2", 
    time: "3.5 months", 
    cost: "Upon request"
   }, {
    url: "./images/image_2.png",
    title: "Sochi Thieves",
    city: "Sochi, Thieves",
    area: "105 m2", 
    time: "4 months",
    cost: "Upon request"
   }, {
    url: "./images/image_3.png",
    title: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don, Patriotic",
    area: "93 m2", 
    time: "3 months",
    cost: "Upon request"
   }];

   let images = document.querySelector(".images_in_slider"); 
   let dots = document.querySelector(".dots_in_slider"); 
   let titles = document.querySelector(".list_section2"); 
   let cityInfoBox = document.querySelector(".box_city"); 
   let areaInfoBox = document.querySelector(".box_area"); 
   let timeInfoBox = document.querySelector(".box_time"); 
   let costInfoBox = document.querySelector(".box_cost"); 
   
 
   initAll (); 
   moveTitlesAndDots(); 
   moveCity();  
   moveArea();  
   moveTime();  
   moveCost();  
   
   function initAll () {
     if (!arrayWithInfo || !arrayWithInfo.length) return; 
     arrayWithInfo.forEach((image, index) => {
       let imageDiv= `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${arrayWithInfo[index].url});" data-index="${index}"></div>`;
         images.innerHTML += imageDiv;

       let dot = `<div class="dots_in_slider-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
         dots.innerHTML += dot; 

       let titleDiv = `<li class="list_section2_item n${index} ${index === 0? "active" : ""}" data-index="${index}">${arrayWithInfo[index].title}</li>`;
         titles.innerHTML += titleDiv; 
       });
   }; 

   function moveCity (){
    arrayWithInfo.forEach((city, index) => {
      let cityInfo = `<div class="city n${index} ${index === 0? "active" : ""}" data-index="${index}"><br>${arrayWithInfo[index].city}</div>`;
        cityInfoBox.innerHTML += cityInfo; 
    })
   }
   function moveArea (){
    arrayWithInfo.forEach((area, index) => {
      let areaInfo = `<div class="area n${index} ${index === 0? "active" : ""}" data-index="${index}"><br>${arrayWithInfo[index].area}</div>`;
        areaInfoBox.innerHTML += areaInfo;  
    })
   }
   function moveTime (){
    arrayWithInfo.forEach((time, index) => {
      let timeInfo = `<div class="time n${index} ${index === 0? "active" : ""}" data-index="${index}"><br>${arrayWithInfo[index].time}</div>`;
        timeInfoBox.innerHTML += timeInfo; 
    })
   }
   function moveCost (){
    arrayWithInfo.forEach((cost, index) => {
      let costInfo = `<div class="cost n${index} ${index === 0? "active" : ""}" data-index="${index}"><br>${arrayWithInfo[index].cost}</div>`;
        costInfoBox.innerHTML += costInfo;  
    })
   }
 
   let next = document.querySelector(".arrow_left");
   let prev = document.querySelector(".arrow_right"); 
   
   next.addEventListener("click", () => {
     let currentImage = +images.querySelector(".active").dataset.index; 
     let nextSlide; 
     nextSlide = currentImage === 0? arrayWithInfo.length - 1 : currentImage - 1; 
     moveSlide (nextSlide);
   })
   
   prev.addEventListener("click", () => {
     let currentImage = +images.querySelector(".active").dataset.index; 
     let nextSlide; 
     nextSlide = currentImage === arrayWithInfo.length - 1? 0 : currentImage + 1; 
     moveSlide (nextSlide); 
   })

  function moveSlide(num) {
      images.querySelector(".active").classList.remove("active");
      images.querySelector(".n" + num).classList.add("active");
      dots.querySelector(".active").classList.remove("active"); 
      dots.querySelector(".n" + num).classList.add("active"); 
      titles.querySelector(".active").classList.remove("active"); 
      titles.querySelector(".n" + num).classList.add("active"); 
      cityInfoBox.querySelector(".active").classList.remove("active"); 
      cityInfoBox.querySelector(".n" + num).classList.add("active"); 
      areaInfoBox.querySelector(".active").classList.remove("active"); 
      areaInfoBox.querySelector(".n" + num).classList.add("active"); 
      timeInfoBox.querySelector(".active").classList.remove("active"); 
      timeInfoBox.querySelector(".n" + num).classList.add("active"); 
      costInfoBox.querySelector(".active").classList.remove("active"); 
      costInfoBox.querySelector(".n" + num).classList.add("active"); 
  }; 
 
  function moveTitlesAndDots () {
    dots.querySelectorAll(".dots_in_slider-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlide(this.dataset.index);
    })
      })
      titles.querySelectorAll(".list_section2_item").forEach(title => {
        title.addEventListener("click", function() {
          moveSlide(this.dataset.index); 
        })
      })
  }

