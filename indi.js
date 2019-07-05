display = () => {
  if (document.querySelector("#navBar").style.display == "block") {
    document.querySelector("#navBar").style.display = "none";
    document.querySelector("#navBar").classList.add("add");
  } else {
    document.querySelector("#navBar").style.display = "block";
    document.querySelector("#navBar").classList.add("add");
  }
};
