const latest_proj_button = document.getElementById(
  "latest-proj-button"
);

const latest_proj = "/online_shopping_starter/shop.html";

if (document.title == "Basar's Profile") {
  latest_proj_button.setAttribute("href", `${latest_proj}`);
} else {
  latest_proj_button.setAttribute("href", `..${latest_proj}`);
}
