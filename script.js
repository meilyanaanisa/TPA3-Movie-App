let containerApi = document.getElementById("list-api");

let getDataApi = async () => {
  let response = await fetch("https://api.themoviedb.org/3/discover/movie?&api_key=88ef544735216b8d23c937d6adbce2eb");
  let dataApi = await response.json();

  dataApi.forEach((item) => {
    console.log(item);
    containerApi.innerHTML += `<h3>${item}</h3>`;
  });
};

getDataApi();
