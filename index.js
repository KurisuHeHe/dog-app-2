function getDogPicture() {
  const pictureCount = document.getElementById("count").value;
  const options = { method: "GET" };
  fetch(`https://dog.ceo/api/breeds/image/random/${pictureCount}`, options)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
}

function displayResults(responseJson) {
  const imageUrls = responseJson.message;
  imageUrls.forEach(url => {
    $(".images-container").append(`<img src="${url}" class="results-img">`);
  });
  $(".results").removeClass("hidden");
}

function handleForm() {
  $("form").submit(event => {
    event.preventDefault();
    getDogPicture();
  });
}

$(function() {
  console.log("Lets go!");
  handleForm();
});
