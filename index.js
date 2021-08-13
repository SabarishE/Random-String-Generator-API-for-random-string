// ------functionality for navigation buttons starts-------

var btn1 = document.querySelector(".page-1-btn");
var btn2 = document.querySelector(".page-2-btn");

var page1 = document.querySelector(".page-1");
var page2 = document.querySelector(".page-2");
page2.style.display = "none";

btn1.addEventListener("click", () => {
  page1.style.display = "flex";
  page2.style.display = "none";

  btn1.style.color = "rgb(107, 255, 107)";
  btn1.style.backgroundColor = "rgb(20, 20, 20)";
  btn2.style.color = "rgb(20, 20, 20)";
  btn2.style.backgroundColor = "rgb(107, 255, 107)";

  console.log("page 1 alert");
});

btn2.addEventListener("click", () => {
  page2.style.display = "flex";
  page1.style.display = "none";

  btn2.style.color = "rgb(107, 255, 107)";
  btn2.style.backgroundColor = "rgb(20, 20, 20)";
  btn1.style.color = "rgb(20, 20, 20)";
  btn1.style.backgroundColor = "rgb(107, 255, 107)";

  console.log("page 2 alert");
});

// ------functionality for navigation buttons ends-------

// ----- function one random string generation starts------

function generateOneString() {
  let length = document.querySelector("#length-one").value;
  fetch(`https://ciprand.p3p.repl.co/api?len=${length}&count=1`, {
    method: "GET"
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("one random string is generated !!!", data);
      displayOne(data.Strings);
    })
    .catch((err) => console.log("error in generating one random string ", err));
}

// ----- function for one random string generation ends------

// -------display of one random string starts-------

function displayOne(d) {
  var displayDiv = document.querySelector(".outputDiv-one div");
  displayDiv.innerHTML = "";

  var disInput = document.createElement("input");
  disInput.value = d[0];
  // ----functionaliy for copy to clipboard button------
  var copybtn = document.createElement("button");
  copybtn.innerText = "copy to clipboard";

  copybtn.addEventListener("click", () => {
    var val = document.querySelector(".outputDiv-one div input");
    val.select();
    val.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert(`<<< COPIED STRING >>> ${val.value}`);
    console.log("copied value >>>", val.value);
  });

  displayDiv.append(disInput, copybtn);
}
// -------display of one random string ends -------

// ----- function for multiple random strings generation starts------

function generateMultipleString() {
  let length = document.querySelector("#length-many").value;
  let count = document.querySelector("#count-many").value;
  fetch(`https://ciprand.p3p.repl.co/api?len=${length}&count=${count}`, {
    method: "GET"
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("multiple random strings are generated !!!", data);
      displayMany(data.Strings);
    })
    .catch((err) =>
      console.log("error in generating multiple random strings ", err)
    );
}

// ----- function for multiple random strings generation ends------

// -------display of multiple random strings starts-------
function displayMany(d) {
  var displayDiv = document.querySelector(".outputDiv-multiple div");
  displayDiv.innerText = "";

  d.forEach((v) => {
    var disInput = document.createElement("input");
    disInput.value = v;
    displayDiv.append(disInput);
  });
}
// -------display of multiple random strings ends-------
