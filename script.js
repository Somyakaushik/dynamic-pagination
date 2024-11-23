let ul = document.querySelector(".ul");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let current_page = 1;
let total_page = 20;
let active_page = "";
let pageText = document.querySelector(".page-text"); 

create_pages(current_page);

function create_pages(current_page) {
    ul.innerHTML = "";

    let before_page = current_page - 2;
    let after_page = current_page + 2;

    if (before_page < 2) {
        before_page = 2; 
    }
    if (after_page > total_page - 1) {
        after_page = total_page - 1;
    }

    ul.innerHTML += `<li onclick="create_pages(1)"><a href="#" class="page_number ${current_page == 1 ? 'active_page' : ''}">1</a></li>`;

    if (before_page > 2) {
        ul.innerHTML += `<li><span>...</span></li>`;
    }

    for (let i = before_page; i <= after_page; i++) {
        ul.innerHTML += `<li onclick="create_pages(${i})"><a href="#" class="page_number ${current_page == i ? 'active_page' : ''}">${i}</a></li>`;
    }

    if (after_page < total_page - 1) {
        ul.innerHTML += `<li><span>...</span></li>`;
    }

    ul.innerHTML += `<li onclick="create_pages(${total_page})"><a href="#" class="page_number ${current_page == total_page ? 'active_page' : ''}">${total_page}</a></li>`;

    prev.onclick = function () {
        if (current_page > 1) {
            current_page--;
            create_pages(current_page);
        }
    };
    if (current_page <= 1) {
        prev.style.display = "none";
    } else {
        prev.style.display = "block";
    }

    next.onclick = function () {
        if (current_page < total_page) {
            current_page++;
            create_pages(current_page);
        }
    };
    if (current_page >= total_page) {
        next.style.display = "none";
    } else {
        next.style.display = "block";
    }
    pageText.textContent = `This is page ${current_page}`;
}
