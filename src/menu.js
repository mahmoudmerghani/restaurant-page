export function createMenuContent() {
    const contentDiv = document.getElementById('content');

    contentDiv.innerHTML = '';

    const section = document.createElement('section');

    const heading = document.createElement('h2');
    heading.textContent = "Our Menu";

    const introParagraph = document.createElement('p');
    introParagraph.textContent = "This content was dynamically generated using JavaScript. Below you will find a list of menu items";

    const list = document.createElement('ul');
    
    const listItems = ['Dynamically generated Pizza', 'Dynamically generated Spaghetti', 'Dynamically generated Cheesecake'];

    listItems.forEach(itemText => {
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        list.appendChild(listItem);
    });

    section.appendChild(heading);
    section.appendChild(introParagraph);
    section.appendChild(list);

    contentDiv.appendChild(section);
}
