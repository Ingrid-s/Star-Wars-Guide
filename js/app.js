let printBox = document.getElementById('container');

$.ajax({
     type: "GET",
     url: "https://swapi.co/api/films/",
 }).done (obtainData);
 

 function obtainData (data) {
      let moviesColection = data.results;
      console.log(moviesColection);   
      show(moviesColection);
 };

 function show (element) {
      let print = " ";
      let printPeople="";

      element.forEach(item =>{
           let movieTitle = item.title;
           console.log(movieTitle);
           let people = item.characters;
           //people.forEach(item=>{
               //let peopleUrl = (character.url);
               //console.log(peopleUrl);
           //})
           console.log(people);
           let cronology = item.episode_id;
           console.log(cronology +=" episode");

          // printPeople +=
       // `<a>
        //<li>`
     print +=
     `
     <section class="card-panel teal black col s12">
          <h6 class="yellow-text  ">${movieTitle} </h6>
          <p class="white-text text-darken-2">${cronology}</p>
          <p class="white-text text-darken-2">${people}</p>
       </section>`

       

       printBox.innerHTML=print;


      })
 }
     
 