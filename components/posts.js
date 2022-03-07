const Posts = (element, data) => {
  console.log(data);
  let colors = [
    "#4D549A",
    "#328D67",
    "#C56579",
    "#E47D57",
    "#2B1A5A",
    "#132d31",
    "#AB80B8",
    "#BA519F",
    "#FF51BA",
    "#60AEBB"
  ];
  let main = document.createElement("div");
  main.classList.add("mainPosts");
  data.map((post) => {
    const container = document.createElement("div");
    container.classList.add("mainConPost");
    let div = document.createElement("div");
    div.classList.add("postDiv");
    div.style.background = colors[Math.floor(Math.random() * 9)];
    let content;
    if (
      post.cover.ext === "jpeg" ||
      post.cover.ext === "png" ||
      post.cover.ext === "jpg"
    ) {
      content = document.createElement("img");
      content.src = post.cover.url;
    } else {
      content = document.createElement("div");
      content.innerHTML = `<video class="postVideo" autoplay loop muted playsinline >
     <source src="${post.cover.url}" type="${post.cover.mime_type}">
     </video>`;
    }
    div.classList.add(
      post.cover.width > post.cover.height ? "vertical" : "horizontal"
    );
    let postInfo = document.createElement("div");
    postInfo.innerHTML = `
     <div class="postInfo">
       <h1>${post.title}</h1>
       <div>
         <p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Upvote</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" fill-rule="evenodd" clip-rule="evenodd" d="M7.197 2.524a1.2 1.2 0 011.606 0c.521.46 1.302 1.182 2.363 2.243a29.617 29.617 0 012.423 2.722c.339.435.025 1.028-.526 1.028h-2.397v4.147c0 
          .524-.306.982-.823 1.064-.417.066-1.014.122-1.843.122s-1.427-.056-1.843-.122c-.517-.082-.824-.54-.824-1.064V8.517H2.937c-.552 0-.865-.593-.527-1.028.52-.669 1.32-1.62 2.423-2.722a52.996 52.996 0 012.364-2.243z"></path></svg>
         <span>${post.upvote_count}</span>
        </p>
         <p>
          <svg width="16" height="16" viewBox="0 0 16 16" class="PostCommentsIcon" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Comments</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" d="M4.455 12.195l.367 1.105 1.037-.53c.266-.135.637-.412 1.039-.74.39-.319.872-.737 1.422-1.245h2.291a3.306 3.306 0 003.306-3.306V5.306A3.306 3.306 0 0010.611 2H5.306A3.306 3.306 0 002 5.306v2.656c0 1.34.933 2.461 2.185 2.75.008.172.025.335.046.479a6.622 6.622 0 00.168.803c.016.07.035.137.056.2z"></path></svg>
          <span>${post.comment_count}</span>
         </p>
         <p>
          <svg width="16" height="16" viewBox="0 0 16 16" class="PostViewsIcon" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Post views</title><path d="M8 2.5C4.74998 2.5 2.30142 5.50267 1.27514 6.77517C0.925337 7.20917 0.908553 7.76483 1.2278 8.16583C2.22527 9.41833 4.6991 12.5 8 12.5C11.3686 12.5 13.8396 9.31133 14.796 8.0905C15.0769 7.732 15.0674 7.2535 14.7692 6.8755C13.7938 5.6395 11.3376 2.5 8 2.5ZM7.98224 9.33333C6.90897 9.33333 6.03887 8.51233 6.03887 7.5C6.03887 6.4875 6.90897 5.66667 7.98224 5.66667C9.05551 5.66667 9.92561 6.4875 9.92561 7.5C9.92561 8.51233 9.05551 9.33333 7.98224 9.33333Z" fill="currentColor"></path></svg>
          <span>${post.view_count}</span>
         </p>
       </div>
     </div>
    `;
    div.append(content);
    container.append(div);
    container.appendChild(postInfo);
    main.append(container);
  });
  element.appendChild(main);
};
export default Posts;
