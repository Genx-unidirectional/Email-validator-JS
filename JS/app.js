let btn = document.querySelector(".btn");
btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let rCont = document.querySelector("#resultCont");
  rCont.innerHTML = `<img width="123" src="img/loading.svg">`;
  const key = ""; //Place your key here
  let email = document.getElementById("email").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let results = await res.json();
  let str = "";
  for (let keys of Object.keys(results)) {
    if (results[keys] !== "" && results[keys] !== " ") {
      str += `<div>${keys}:${results[keys]}</div>`;
    }
  }
  rCont.innerHTML = str;
});
