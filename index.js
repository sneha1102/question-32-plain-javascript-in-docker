console.log(API_URL);

function renderDynamicContent() {
  let el = document.createElement("input");
  let elee = document.createElement("input");
  let e = document.createElement("input");
  let ele = document.createElement("button");
  el.setAttribute("id", "text1");
  el.setAttribute("id", "txtresult");

  elee.setAttribute("id", "text2");

  ele.setAttribute("id", "click");
  ele.setAttribute("name", "btnclick");
  document.getElementById("dynamic-content").appendChild(e);
  document.getElementById("dynamic-content").appendChild(el);
  document.getElementById("dynamic-content").appendChild(ele);
  document.getElementById("dynamic-content").appendChild(elee);
}

document.getElementById("click").addEventListener("click", click);
function click() {
  let one = document.getElementById("text1").innerText;
  let two = document.getElementById("text2").innerText;
  let res = parseFloat(one) + parseFloat(two);
  document.getElementById("txtresult").innerText = res.toString();
}
