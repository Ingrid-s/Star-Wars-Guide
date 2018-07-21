// el describe tiene una cadena de texto que es el nombre de la suite y una función, al igual que it
describe("A suite", function() {
     it("contains spec with an expectation", function() {
          //el expect o espectativa es el resultado que deberíamos tener el toBe es el matcher
       expect(true).toBe(true);
       
     });
   });
   
   
describe("renderPeli", function(){
     it("pintaPelicula", function(){
          let esperado = `<section class="card-panel teal black col s12">
   <h6 class="yellow-text  ">A New Hope </h6>
   <p class="white-text text-darken-2">4 episode</p>
   <p class="white-text text-darken-2">https://swapi.co/api/people/1/,https://swapi.co/api/people/2/,https://swapi.co/api/people/3/,https://swapi.co/api/people/4/,https://swapi.co/api/people/5/,https://swapi.co/api/people/6/,https://swapi.co/api/people/7/,https://swapi.co/api/people/8/,https://swapi.co/api/people/9/,https://swapi.co/api/people/10/,https://swapi.co/api/people/12/,https://swapi.co/api/people/13/,https://swapi.co/api/people/14/,https://swapi.co/api/people/15/,https://swapi.co/api/people/16/,https://swapi.co/api/people/18/,https://swapi.co/api/people/19/,https://swapi.co/api/people/81/</p>
</section>`
let entrada = [{
     title: "A New Hope",
     episode_id: 4,
     characters: ["https://swapi.co/api/people/1/","https://swapi.co/api/people/2/","https://swapi.co/api/people/3/","https://swapi.co/api/people/4/","https://swapi.co/api/people/5/","https://swapi.co/api/people/6/","https://swapi.co/api/people/7/","https://swapi.co/api/people/8/","https://swapi.co/api/people/9/","https://swapi.co/api/people/10/","https://swapi.co/api/people/12/","https://swapi.co/api/people/13/","https://swapi.co/api/people/14/","https://swapi.co/api/people/15/","https://swapi.co/api/people/16/","https://swapi.co/api/people/18/","https://swapi.co/api/people/19/","https://swapi.co/api/people/81/"],
     
}];

    expect(takeData(entrada)).toEqual(esperado)
});
});

takeData();

 function takeData (data){
     let peli = data.results.item;
     console.log(peli);
         };

