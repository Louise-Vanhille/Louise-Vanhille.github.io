"use strict";

document.addEventListener("DOMContentLoaded", init);

const PROJECTS = [{
        name: "cdm",
        url: "cdm.html",
    },
    {
        name: "zen",
        url: "zen.html",
    },
    {
        name: "panda",
        url: "panda.html",
    },
    {
        name: "plot",
        url: "plot.html"
    },
    {
        name: "sowl",
        url: "sowl.html"
    }
];

function init() {
    const shuffledProjects = shuffle(PROJECTS);
    const randomProjects = shuffledProjects.slice(0, 2);
    renderProjects(randomProjects);
}

function shuffle(data) {
    return data.map(value => ({
            value: value,
            order: Math.random()
        }))
        .sort((a, b) => a.order - b.order)
        .map(({
            value
        }) => value);
}

function renderProjects(data) {
    const ul = document.querySelector("#projects");
    if (!ul) return;
    ul.innerHTML = "";

    for (const elem of data) {
        ul.innerHTML += `<li class="random__projects--margin">
                          <a class="portfolio__item" href="/${elem.url}" target="_blank">
                            <article class="portfolio__img--container">
                              <img class="portfolio__img" src="assets/img/projects/${elem.name}/thumbnail.png" alt="${elem.name}" />
                              <div class="portfolio__img--overlay">
                                <img src="assets/img/icons/star.svg" alt="star" />
                              </div>
                              <h4>${elem.name}</h4>
                            </article>
                          </a>
                        </li>`;
    }
}

const hamburger = document.querySelector('.menu__hamburger');
const menuItems = document.querySelector('.menu__items');
const closeButton = document.querySelector('.menu__close button');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menuItems.classList.toggle('active');
});

if (closeButton && menuItems && hamburger) {
  closeButton.addEventListener('click', () => {
    menuItems.classList.remove('active');
    hamburger.classList.remove('active');
  });
}