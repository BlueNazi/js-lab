const req = new XMLHttpRequest();
req.open("GET", "https://jsonplaceholder.typicode.com/posts");
req.send();

const PER_PAGE = 20;
let PAGE = 1;
let POSTS;
const FAVORITES = JSON.parse(localStorage.getItem("favorites"));

function getData() {
  if (req.readyState === 4 && req.status === 200) {
    const data = JSON.parse(req.responseText);
    renderPosts(data, 1);
    renderPagination(data);
    POSTS = data;
  }
}

function createPost() {
  const req = new XMLHttpRequest();
  req.open("POST", "https://jsonplaceholder.typicode.com/posts");
  const bodyParam = {
    userId: 20,
    title: "post title",
    body: "post body",
  };
  req.send(JSON.stringify(bodyParam));
}

function renderPosts(list) {
  const start = (PAGE - 1) * PER_PAGE;
  const end = PER_PAGE * PAGE;
  const template = list.slice(start, end).map((post) => {
    return `
            <section class='post'>
                <div>
                    <span>post number: ${post.id}</span>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </div>
                <div>
                    <svg fill="${FAVORITES.includes(post.id) ? 'red' : 'black'}" onclick="handleAddToFavorite(${post.id})" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
                </div>
            </section>
            `;
  });

  document.getElementById("postList").innerHTML = template.join("");
}

function renderPagination(list) {
  const pageLength = list.length / PER_PAGE;
  const pageArr = Array.from({ length: pageLength }, (_, i) => i + 1);
  const template = pageArr.map((page) => {
    return `<button class='${
      PAGE === page ? "active" : ""
    }' onclick='handlePagination(${page})'>${page}</button>`;
  });
  document.getElementById("pagination").innerHTML = template.join("");
}

function handlePagination(page) {
  PAGE++;
  renderPosts(POSTS);
  renderPagination(POSTS);
  window.scrollTo({ top: 0, behavior: "smooth" });
}



let lastScrollY = window.scrollY;

function handleScroll() {
  const header = document.querySelector("header");
  const currentScrollY = window.scrollY;

  if (currentScrollY < lastScrollY) {
    
    header.style.top = '0';
  } else {
    
    header.style.top = '-100px';
  }

  lastScrollY = currentScrollY;
}



function handleTheme(theme) {
  localStorage.setItem("theme", theme);

  if (theme === "dark") {
    document.body.classList.add(theme);
  } else {
    document.body.classList.remove("dark");
  }
}


function handleAddToFavorite(postId) {
    FAVORITES.push(postId);
    localStorage.setItem("favorites" , JSON.stringify(FAVORITES))
    renderPosts(POSTS);
}

// events
req.addEventListener("readystatechange", getData);
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", () => {
  const theme = localStorage.getItem("theme");
  handleTheme(theme);
});
