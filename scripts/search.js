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

  function showDataToSearchRes({ tags }) {
    console.log(tags);
    let searchRes = document.querySelector(".searchResult");
    searchRes.innerHTML = "";
    tags.map((tag) => {
      let postDiv = document.createElement("div");
      postDiv.classList.add("postsRes");
      let imgDiv = document.createElement("div");
      imgDiv.style.background = `url('https://i.imgur.com/${tag.background_hash}.jpg?maxwidth=300&shape=thumb&fidelity=high')`;
      let h3 = document.createElement("h3");
      h3.innerText = tag.name;
      postDiv.append(imgDiv, h3);
      searchRes.appendChild(postDiv);
    });
  }
});
