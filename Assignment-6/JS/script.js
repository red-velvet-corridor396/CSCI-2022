fetch('https://raw.githubusercontent.com/red-velvet-corridor396/CSCI-202-2/main/Assignment-6/CDs.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); 
    albumInfo = data;
  })
  .catch(error => {
    console.error('Error fetching or parsing JSON:', error);
  });

function openCD(record){
    let blurbList = document.getElementById("info")
    blurbList.children[0].innerText = "Artist: " + albumInfo[record].artist
    blurbList.children[1].innerText = "Album: " + albumInfo[record].album
    blurbList.children[2].innerText = "Year: " + albumInfo[record].year
    blurbList.children[3].innerText = "Country: " + albumInfo[record].country
    blurbList.children[4].innerText = "Genre: " + albumInfo[record].genre
    blurbList.children[5].innerText = "Comment: " + albumInfo[record].trivia

    document.getElementById("albumcover").src = albumInfo[record].cover 
}

