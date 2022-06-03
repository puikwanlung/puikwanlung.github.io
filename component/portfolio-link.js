const portfolio_filter = document.createElement("template");

template.innerHTML = `
<div id="portfolio-link" class="all">
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active-all" id="select-all" href="/index.html">ALL</a>
  </li>
  <li class="nav-item">
    <a href="portfolio#uxui" class="nav-link active-uxui" id="select-UXUI">UX & UI Design</a>
  </li>
  <li class="nav-item">
    <a href="portfolio#motion-design" class="nav-link active-md" id="select-AE">Motion Design</a>
  </li>
  <li class="nav-item">
    <a href="portfolio#3D-max" class="nav-link active-threed" id="select-threeD" id="select-threeD">3D Max</a>
  </li>
</ul>
</div>




`;

document.body.appendChild(template.content);
