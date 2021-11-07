export const errorPage = (err) => {
  const page = document.body;
  page.innerHTML = "";
  page.innerHTML = "<h1 id='error'> 404  Page not found</h1>";
  page.style.backgroundColor = "white";
};
