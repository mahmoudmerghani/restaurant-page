export function createInitialContent() {
    const contentDiv = document.getElementById('content');

    contentDiv.innerHTML = '';

    const section = document.createElement('section');

    const heading = document.createElement('h2');
    heading.textContent = "Welcome to My Dynamic Page!";

    const introParagraph = document.createElement('p');
    introParagraph.textContent = "This content was dynamically generated using JavaScript. Below you will find a list, and a button for more interaction!";

    const list = document.createElement('ul');

    const listItems = ['Dynamically generated list item 1', 'Dynamically generated list item 2', 'Dynamically generated list item 3'];

    listItems.forEach(itemText => {
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        list.appendChild(listItem);
    });

    const button = document.createElement('button');
    button.textContent = 'Click Me!';

    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });

    section.appendChild(heading);
    section.appendChild(introParagraph);
    section.appendChild(list);
    section.appendChild(button);

    contentDiv.appendChild(section);
}
