const Posts = (element, data) => {
  console.log(element, data);
  data.map((post) => {
    let div = document.createElement("div");
    div.classList.add("postDiv");
    let content;
    if (
      post.cover.ext === "jpeg" ||
      post.cover.ext === "png" ||
      post.cover.ext === "jpg"
    ) {
      content = document.createElement("img");
      content.src = post.cover.url;
    } else {
      content = document.createElement("video");
      content.classList.add("postVideo");
      // content.setAttribute("muted", "");
      content.setAttribute("autoplay", "");
      let source = document.createElement("source");
      source.src = post.cover.url;
      source.type = post.cover.mime_type;
      content.append(source);
    }
    div.classList.add(
      post.cover.width > post.cover.height ? "vertical" : "horizontal"
    );
    div.append(content);
    element.append(div);
  });
};
export default Posts;
