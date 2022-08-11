const template = document.createElement("template");

template.innerHTML = `
<header>
<div id="header-width">

<a href="/">
  <img src="/assets/images/logo-puikwanlung.gif" id="logo" alt="Logo of Pui Kwan Lung, Interactive Media Designer" />
</a>
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active-port" id="work-select" href="/index.html">PORTFOLIO</a>
  </li>
  <li class="nav-item">
    <a href="/about.htm" class="nav-link active-about" >GET TO KNOW ME</a>
  </li>
  <li class="nav-item">
    <a href="/contact.htm" class="nav-link active-contact">CONTACT</a>
  </li>
</ul>

</div>

<div id="portfolio-link">
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active-all" id="select-all" href="/">All</a>
  </li>
  <li class="nav-item">
    <a href="/#uxui" class="nav-link active-uxui" id="select-UXUI">UX & UI Design</a>
  </li>
  <li class="nav-item">
    <a href="/#motion-design" class="nav-link active-md" id="select-AE">Motion Design</a>
  </li>
  <li class="nav-item">
    <a href="/#3D-max" class="nav-link active-threed" id="select-threeD" id="select-threeD">3D Max</a>
  </li>
</ul>
</div>

</header>

`;

document.body.appendChild(template.content);
