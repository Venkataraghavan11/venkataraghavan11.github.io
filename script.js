(function () {
     const menu = document.getElementById('menu-icon'), nav = document.querySelector('.nav');
     menu.onclick = () => { nav.classList.toggle('open'); menu.classList.toggle('bx-x') };
     nav.querySelectorAll('a').forEach(a => a.onclick = () => { nav.classList.remove('open'); menu.classList.remove('bx-x') });

     const words = ['Software Developer', 'Full Stack Engineer', 'Laravel & React Dev', 'Team Lead'];
     const t = document.getElementById('typed'); let w = 0, c = 0, del = false;
     (function type() {
          const cur = words[w]; c += del ? -1 : 1; t.textContent = cur.slice(0, c);
          let d = del ? 40 : 90;
          if (!del && c === cur.length) { del = true; d = 1400 }
          else if (del && c === 0) { del = false; w = (w + 1) % words.length; d = 300 }
          setTimeout(type, d);
     })();

     const S = [['c.png', 'C', 'OOP concepts, certified.', 'bxl-c-plus-plus'],
     ['cpp.png', 'C++', 'OOP concepts, Udemy certified.', 'bxl-c-plus-plus', 'https://www.udemy.com/certificate/UC-339357b4-48db-4a24-9875-592ea80d6f09/'],
     ['java.png', 'JAVA', 'OOP concepts, JLabel, certified.', 'bxl-java'],
     ['py.png', 'PYTHON', 'Multithreading, re, Tkinter, SQLite3, Django. Certified at Besant Technologies.', 'bxl-python', 'https://drive.google.com/file/d/1e3kvOcJf-p9BE31tEyboqPU9e53KJtE3/view?usp=sharing'],
     ['html.png', 'HTML', 'All concepts known; certified by Udemy & Besant.', 'bxl-html5', 'https://www.udemy.com/certificate/UC-de9c5c3d-9622-47e8-acab-18d37bd25e60/'],
     ['css.png', 'CSS', 'All concepts known; certified by Udemy & Besant.', 'bxl-css3', 'https://www.udemy.com/certificate/UC-de9c5c3d-9622-47e8-acab-18d37bd25e60/'],
     ['js.png', 'JAVASCRIPT', 'All concepts known; certified at Besant Technologies.', 'bxl-javascript', 'https://drive.google.com/file/d/18DZS-FRG631KsB8T6JNEjRzi7P0wBIzr/view?usp=drive_link'],
     ['react.png', 'REACTJS', 'All concepts known; certified at Besant Technologies.', 'bxl-react', 'https://drive.google.com/file/d/18DZS-FRG631KsB8T6JNEjRzi7P0wBIzr/view?usp=drive_link'],
     ['sql.png', 'MYSQL', 'All concepts known; certified at Besant Technologies.', 'bxs-data', 'https://drive.google.com/file/d/1t61JBH0O-p1VMm0vOjnqqJU6dvhw9VYR/view?usp=sharing'],
     ['php.png', 'PHP', 'Familiar with keywords and libraries; CodeIgniter framework.', 'bxl-php'],
     ['laravel.svg', 'LARAVEL', 'Full-stack PHP apps with the Laravel framework.', 'bxl-php'],
     ['codeigniter.svg', 'CODEIGNITER', 'Scalable ERP, CRM, Payroll and real estate apps.', 'bxl-php'],
     ['sqlite.svg', 'SQLITE3', 'Lightweight DB handling in Python and small projects.', 'bxs-data'],
     ['git.svg', 'GIT', 'Version control, collaboration and deployment with Git/GitHub.', 'bxl-git'],
     ['api.svg', 'TOOLS & APIS', 'WhatsApp API, Places API, Email Marketing, Payments, AI APIs.', 'bx-link']];
     document.getElementById('skillsGrid').innerHTML = S.map(s => `<div class="skills-box tilt reveal"><img src="./image/${s[0]}" alt="${s[1]}"><div class="skills-layer"><h4>${s[1]}${s[4] ? `<a href="${s[4]}" target="_blank"><i class='bx ${s[3]}'></i></a>` : `<i class='bx ${s[3]}'></i>`}</h4><p>${s[2]}</p></div></div>`).join('');

     const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target) } }), { threshold: .12 });
     document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 90 + 'ms'; io.observe(el) });

     const so = new IntersectionObserver(es => es.forEach(e => {
          if (!e.isIntersecting) return;
          e.target.querySelectorAll('b').forEach(b => { const n = +b.dataset.n; let i = 0; const id = setInterval(() => { i++; b.textContent = i + b.dataset.s; if (i >= n) clearInterval(id) }, 500 / n) }); so.disconnect()
     }), { threshold: .5 });
     so.observe(document.querySelector('.stats'));

     const glow = document.getElementById('glow');
     addEventListener('mousemove', e => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px' });
     document.addEventListener('mousemove', e => {
          const el = e.target.closest && e.target.closest('.tilt'); if (!el) return;
          const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
          el.style.setProperty('--x', x * 100 + '%'); el.style.setProperty('--y', y * 100 + '%');
          el.style.transform = `perspective(700px) rotateX(${(.5 - y) * 8}deg) rotateY(${(x - .5) * 8}deg)`
     });
     document.addEventListener('mouseout', e => { const el = e.target.closest && e.target.closest('.tilt'); if (el) el.style.transform = '' });

     const links = [...nav.querySelectorAll('a')], secs = links.map(a => document.querySelector(a.hash));
     addEventListener('scroll', () => {
          document.getElementById('progress').style.width = scrollY / (document.body.scrollHeight - innerHeight) * 100 + '%';
          let k = 0; secs.forEach((s, i) => { if (scrollY + 200 >= s.offsetTop) k = i });
          links.forEach((a, i) => a.classList.toggle('active', i === k));
     });
})();
