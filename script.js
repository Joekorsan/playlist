// "results": [
// {
// "id": 2,
// "title": "Ghost in the Machine",
// "artist": "The Police",
// "cover_art": "ghost_in_the_machine.jpg"
// }
// ]

let favoriteAlbums = [];
let imageDiv = document.getElementById('boxx2')
let anchorButton = document.getElementById('ancButton');
console.log(imageDiv)

  fetch('https://lit-fortress-6467.herokuapp.com/object')
  .then((response)=>{
    return response.json();
  })
  .then((albumObj)=>{


    //music albumArr
    let albumArr = albumObj.results;
    console.log('albumArr: ',albumArr);

    //looping through imageDiv to add pictures
    for(let i = 0; i < 3; i++ ){
      imageDiv.innerHTML += renderImagePage(albumArr[i])
    }


    anchorButton.addEventListener('click',function() {
      anchorButton.href='playListPage.html';
    })

    








  }) //end of .then(albumObj)
  .catch((err)=>{
    console.error('oOpps: something went wrong: '+err);
  })//end of .catch































//functions

  function renderImagePage(albumArr) {
    return `<div class=""> <img src="/images/${albumArr.cover_art}" alt="picture.thing"> </div>`
  }
