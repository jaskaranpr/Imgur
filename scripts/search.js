window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  let input = document.querySelector(".searchbar");

  input.addEventListener("input", function (e) {
    console.log(e.target.value);
    if (e.target.value.length > 0) debouncing(e.target.value);
  });

  async function search(value) {
    let res = await fetch(
      `https://api.imgur.com/3/suggest?client_id=546c25a59c58ad7&inflate=tags&q=${value}&types=users%2Ctags%2Cposts`
    );
    let data = await res.json();
    showDataToSearchRes(data.data);
  }
  let id;

  function debouncing(value) {
    clearInterval(id);
    id = setTimeout(() => {
      search(value);
    }, 1000);
  }

  function showDataToSearchRes({ posts, tags, users }) {
    let searchRes = document.querySelector(".searchResult");
    searchRes.innerHTML = "";
    let postDiv = document.createElement("div");
    posts.classList.add("postsRes");
    let tagsDiv = document.createElement("div");
    tags.classList.add("tagsRes");
    let usersDiv = document.createElement("div");
    users.classList.add("usersRes");
    for (let i = 0; i < 3; i++) {
      let post = document.createElement("h1");
      post.innerText = posts[i].title;
      let tag = document.createElement("h2");
      tag.innerText = tags[i].name;
      let user = document.createElement("h3");
    }
  }
});
