const myApp = () => {

  const body = document.querySelector("body");

  const linkToFirstPage = document.createElement("a");
  const linkToSecondPage = document.createElement("a");
  linkToFirstPage.setAttribute("href", "./index1.html");
  linkToSecondPage.setAttribute("href", "./index2.html");

  linkToFirstPage.innerHTML = "Premier Exercice";
  linkToSecondPage.innerHTML = "Second Exercice";
  body.appendChild(linkToFirstPage);
  body.appendChild(document.createElement("br"));
  body.appendChild(linkToSecondPage);

};

myApp();