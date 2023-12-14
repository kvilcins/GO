const createTopBtn = () => {
  // Создаем элемент button
  const btn = document.createElement("button");

// Добавляем атрибуты к кнопке
  btn.setAttribute("id", "scroll-top");
  btn.setAttribute("title", "Go to top");

// Создаем SVG элемент
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS(null, "width", "97");
  svg.setAttributeNS(null, "height", "97");
  svg.setAttributeNS(null, "viewBox", "0 0 97 97");

// Создаем элемент circle в SVG
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttributeNS(null, "cx", "48.5");
  circle.setAttributeNS(null, "cy", "48.5");
  circle.setAttributeNS(null, "r", "48");
  circle.setAttributeNS(null, "fill", "white");
  circle.setAttributeNS(null, "stroke", "white");

// Создаем элемент path для стрелки
  const arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
  arrow.setAttributeNS(null, "d", "M39 53L48 39L57 53");
  arrow.setAttributeNS(null, "stroke", "#6C0287");
  arrow.setAttributeNS(null, "stroke-width", "2");
  arrow.setAttributeNS(null, "fill", "transparent");


// Добавляем элементы circle и path в SVG
  svg.appendChild(circle);
  svg.appendChild(arrow);

// Добавляем SVG в кнопку
  btn.appendChild(svg);

// Добавляем кнопку в body
  document.body.appendChild(btn);

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scroll-top").classList.add('show');
    } else {
      document.getElementById("scroll-top").classList.remove('show');
    }
  }

  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

// Добавляем слушатель событий к кнопке
  btn.addEventListener("click", topFunction);

  window.onscroll = scrollFunction;
}

export {
  createTopBtn,
}
