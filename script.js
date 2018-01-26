let imageDiv = document.querySelector('#boxx2')
console.log('image bin: ', imageDiv);
let favoriteAlbums = [];
let anchorButton = document.getElementById('ancButton');
//console.log(imageDiv)

fetch('https://lit-fortress-6467.herokuapp.com/object')
  .then((response) => {
    return response.json();
  })
  .then((albumObj) => {



    //music albumArr

    let albumArr = albumObj.results;


    console.log('albumArr: ', albumArr);

    //looping through imageDiv to add pictures

    for (let i = 0; i < 3; i++) {
      imageDiv.innerHTML += renderImagePage(albumArr[i])
    }

    anchorButton.addEventListener('click', function() {
      anchorButton.href = 'playlistPage.html';
    })















  }) //end of .then(albumObj)

  .catch((err) => {
    console.error('oOpps: something went wrong: ', err);
  }) //end of .catch









//functions

function renderImagePage(albumArr) {
  return `<div class=""> <img src="/images/${albumArr.cover_art}" alt="picture.thing"> </div>`
}
