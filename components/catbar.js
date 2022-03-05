let data = [
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
  {
    img: "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    title: "Space",
    posts: "28,291",
  },
];
const CatBar = () => {
  return `
  
<div>
    ${data.map((d, i) => {
      return `
      <style>
       .cat-id-${i} {
        background-image:url("${d.img}");
        height: 130px;
        width: 232px;
       }
      </style>
      
      <div class="cat-id-${i}" >ss</div>`;
    })}
</div>
`;
};

export default CatBar;
