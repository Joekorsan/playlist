fetch('https://lit-fortress-6467.herokuapp.com/object')
.then((response)=>{
  return response.json();
})
.then((albumObj)=>{

  //music albumArr
  let albumArr = albumObj.results;
  let scrollableDiv = document.getElementById('scrollable');


  for (let i = 0; i < albumArr.length; i++) {
    scrollableDiv.innerHTML += populateScrollable(albumArr[i]);
  }

  for (let i = 0; i < albumArr.length; i++) {
    document.querySelector('#image' + albumArr[i].id).addEventListener('click', function() {
      console.log('im in here', albumArr[i].id);
    })
  }













}) //end of .then(albumObj)

.catch((err)=>{
  console.error('oOpps: something went wrong: ',err);
})//end of .catch

function populateScrollable(albumArr) {
  return `<img id="image${albumArr.id}" class="images" src="/images/${albumArr.cover_art}" alt="picture.thing">`
}
