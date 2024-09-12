export function createAboutContent() {
    const contentDiv = document.getElementById('content');

    contentDiv.innerHTML = '';

    const section = document.createElement('section');

    const heading = document.createElement('h2');
    heading.textContent = "About Us";

    const introParagraph = document.createElement('p');
    introParagraph.textContent = "We are an artificial JavaScript code restaurant. We actually don't exist!";

    const info = document.createElement('p');
    info.textContent = "Call us at 123456789"
    

    section.appendChild(heading);
    section.appendChild(introParagraph);
    section.appendChild(info);

    contentDiv.appendChild(section);
}
