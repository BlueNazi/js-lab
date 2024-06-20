document.addEventListener("DOMContentLoaded", () => {
    const itemsPSelect = document.getElementById("itemsP");
    const authorSelect = document.getElementById("authorSelect");
    let posts = [];
    let currentPage = 1;
    let itemsPerPage = parseInt(itemsPSelect.value);
    let selectedAuthor = 'all';

    itemsPSelect.addEventListener("change", (event) => {
        itemsPerPage = parseInt(event.target.value);
        currentPage = 1; 
        render();
    });

    authorSelect.addEventListener("change", (event) => {
        selectedAuthor = event.target.value;
        currentPage = 1; 
        renderPosts();
    });
    function renderPosts() {
        let url = "https://jsonplaceholder.typicode.com/posts";
        if (selectedAuthor !== 'all') {
            url += `?userId=${selectedAuthor}`;
        }
    
        const request = new XMLHttpRequest();
        request.open("GET", url);
        request.addEventListener("load", function() {
            if (request.status === 200) {
                const data = JSON.parse(request.responseText);
                posts = data;
                render();
            } else {
                console.log('Error :', request.statusText);
            }
        });
        request.addEventListener("error", function() {
            console.log('Network error');
        });
        request.send();
    }
    
    function renderAuthors() {
        const request = new XMLHttpRequest();
        request.open("GET", "https://jsonplaceholder.typicode.com/users");
        request.addEventListener("load", function() {
            if (request.status === 200) {
                const data = JSON.parse(request.responseText);
                const options = data.map(user => `<option value="${user.id}">${user.name}</option>`);
                authorSelect.innerHTML += options.join("");
            } else {
                console.log('Error :', request.statusText);
            }
        });
        request.addEventListener("error", function() {
            console.log('Network error ');
        });
        request.send();
    }
    
    
    function render() {
        const totalPosts = posts.length;
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const currentPosts = posts.slice(start, end);

        const template = currentPosts.map(post => {
            return `<div class="post">
                        <span>post id: ${post.id}</span>
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </div>`;
        }).join("");

        document.getElementById("root").innerHTML = template;
        renderPagination(totalPosts);
    }

    function renderPagination(totalPosts) {
        const totalPages = Math.floor(totalPosts / itemsPerPage);
        let paginationHTML = `
            <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">
                    <span aria-hidden="true"><</span>
                </a>
            </li>
        `;

        for (let i = 1; i <= totalPages; i++) {
            paginationHTML += `
                <li class="page-item ${currentPage === i ? 'active' : ''}">
                    <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
                </li>
            `;
        }

        paginationHTML += `
            <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                <a class="page-link" href="#"  onclick="changePage(${currentPage + 1})">
                    <span aria-hidden="true">></span>
                </a>
            </li>
        `;

        document.getElementById("pagination").innerHTML = paginationHTML;
    }

    window.changePage = function(page) {
        const totalPages = Math.ceil(posts.length / itemsPerPage);
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        render();
    };

    renderPosts();
    renderAuthors();
});
