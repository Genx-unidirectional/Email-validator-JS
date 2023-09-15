console.log("Here we go");
let results = {
  tag: "",
  free: true,
  role: false,
  user: "akshaykumarcodewithharry",
  email: "akshaykumarcodewithharry@gmail.com",
  score: 0.48,
  state: "undeliverable",
  domain: "gmail.com",
  reason: "invalid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true,
};

let btn = document.querySelector(".btn");
btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let rCont = document.querySelector("#resultCont");
  rCont.innerHTML = `<img width="123" src="img/loading.svg">`;
  const key = "ema_live_TG91jqTr9aUTzGycMiqt1JUc0kHWJqV3ECJ9iNtl";
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
