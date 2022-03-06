const Posts = (element, data) => {
  console.log(element, data);
  data.map((post) => {
    let div = document.createElement("div");
    div.classList.add("postDiv");
    let img = document.createElement("img");
    img.src = post.cover.url;
    div.append(img);
    element.append(div);
  });
};
export default Posts;
