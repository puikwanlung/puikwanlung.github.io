const footer = document.createElement("template");

template.innerHTML =`
<footer><img src="/assets/images/pui_slogo.png"  alt="Logo of Pui Kwan Lung, Program & Student Engagement Coordinator" class="mb-2 logo" />
<p>&copy; <span id="year"></span> Portfolio & Site by Pui Kwan Lung</p>

<ul id="social-links">
  <li>
    <img src="/assets/images/icon-linkedin.png" /><a href="https://www.linkedin.com/in/puikwanlung" target="_blank">https://www.linkedin.com/in/puikwanlung</a>
  </li>
  <li>
  <img src="/assets/images/icon-email.png" />
  <a href="mailto:eirineko@gmail.com">eirineko@gmail.com</a>
</li>
</ul></footer>
`;

document.body.appendChild(template.content);

// Automatically update the footer year
document.getElementById("year").textContent = new Date().getFullYear();
