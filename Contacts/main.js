document.getElementById("addContact").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    if (name && phone) {
        addContact(name, phone);
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
    } else {
        alert("please enter both name and number!");
    }
});

document.getElementById("search").addEventListener("input", function() {
    const list = document.getElementById("search").value
    filterContacts(list);
});

function addContact(name, phone) {
    const contactList = document.getElementById("contactList");
    const contactItem = document.createElement("li");
    contactItem.textContent = `${name} - ${phone}`;
    contactItem.dataset.name = name;
    contactList.appendChild(contactItem);
}

function filterContacts(list) {
    const contacts = document.querySelectorAll("#contactList li");
    for (const contact of contacts) {
        const name = contact.dataset.name;
        contact.style.display = name.includes(list) ? "" : "none";
    }
}