/* Aurelia Group — vanilla JS, no build step. Renders pages from local data. */
(function () {
  var COLS = window.AURELIA_COLLECTIONS || [];
  var RESTS = window.AURELIA_RESTAURANTS || [];
  var MENUS = window.AURELIA_MENUS || {};
  var page = document.body.getAttribute("data-page");

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function qs(k) { return new URLSearchParams(location.search).get(k); }
  function colById(id) { return COLS.filter(function (c) { return c.id === id; })[0]; }
  function restById(id) { return RESTS.filter(function (r) { return r.id === id; })[0]; }
  function restsOf(cid) { return RESTS.filter(function (r) { return r.collection === cid; }); }
  function $(s, r) { return (r || document).querySelector(s); }

  /* one image slot with placeholder underneath; the image fades in only if the file exists */
  function frame(dir, file, title, sub, cls, tone) {
    return '<div class="frame ' + (cls || "") + ' t-' + (tone || "") + '">' +
      '<div class="ph"><b>' + esc(title) + '</b><i>' + esc(sub) + '</i></div>' +
      '<img src="assets/' + dir + '/' + esc(file) + '" alt="' + esc(title) + '" loading="lazy" onload="this.classList.add(\'loaded\')" onerror="this.remove()">' +
      '</div>';
  }

  /* header / footer */
  function header(over) {
    var mcols = COLS.map(function (c) { return '<a href="collection.html?id=' + c.id + '">' + esc(c.name) + '</a>'; }).join("");
    return '<header class="site-header' + (over ? " over" : "") + '" id="hdr">' +
      '<a class="logo" href="index.html">Aurelia<small>GROUP</small></a>' +
      '<nav class="nav"><a href="index.html#collections">Collections</a><a href="index.html#portfolio">Portfolio</a><a href="index.html#philosophy">Philosophy</a></nav>' +
      '<button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span></button></header>' +
      '<div class="mnav" id="mnav"><small>Collections</small>' + mcols + '<small>Aurelia Group</small><a href="index.html#portfolio">Portfolio</a><a href="index.html#philosophy">Philosophy</a></div>';
  }
  function footer() {
    var cl = COLS.map(function (c) { return '<a href="collection.html?id=' + c.id + '">' + esc(c.name) + '</a>'; }).join("");
    return '<footer class="footer"><div class="wrap"><div class="cols"><div><div class="logo">Aurelia Group</div><p style="margin-top:14px">Modern Luxury Without Ostentation.</p></div>' +
      '<div><h5>Collections</h5>' + cl + '</div><div><h5>Explore</h5><a href="index.html#portfolio">Portfolio</a><a href="index.html#philosophy">Philosophy</a></div></div>' +
      '<div class="fine">© Aurelia Group</div></div></footer>';
  }

  function wireChrome() {
    var h = $("#hdr"), b = $("#burger"), m = $("#mnav");
    function onScroll() { h.classList.toggle("solid", window.scrollY > 40); }
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    b.addEventListener("click", function () {
      var o = !m.classList.contains("open");
      m.classList.toggle("open", o); h.classList.toggle("open", o); b.setAttribute("aria-expanded", o);
      document.body.style.overflow = o ? "hidden" : "";
    });
    m.addEventListener("click", function (e) { if (e.target.tagName === "A") { document.body.style.overflow = ""; } });
    /* soft page transitions via ordinary links */
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a");
      if (!a || a.target || e.metaKey || e.ctrlKey || e.shiftKey) return;
      var href = a.getAttribute("href");
      if (!href || href.charAt(0) === "#" || /^(https?:|mailto:)/.test(href)) return;
      if (href.indexOf("#") === 0 || (href.split("#")[0] === location.pathname.split("/").pop() && href.indexOf("#") > -1)) return;
      e.preventDefault(); document.body.classList.add("leaving");
      setTimeout(function () { location.href = href; }, 220);
    });
    window.addEventListener("pageshow", function () { document.body.classList.remove("leaving"); });
    /* reveal */
    var els = document.querySelectorAll(".rv");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }); }, { threshold: .12 });
      els.forEach(function (e) { io.observe(e); });
    } else els.forEach(function (e) { e.classList.add("in"); });
    document.querySelectorAll(".frame img").forEach(function (i) { if (i.complete && i.naturalWidth) i.classList.add("loaded"); });
  }

  function mount(html, over) {
    document.body.insertAdjacentHTML("afterbegin", header(over));
    $("#app").innerHTML = html;
    document.body.insertAdjacentHTML("beforeend", footer());
    wireChrome();
  }

  /* ---------- HOME ---------- */
  function home() {
    document.title = "Aurelia Group — Modern Luxury Without Ostentation";
    var colsHtml = COLS.map(function (c, i) {
      var n = restsOf(c.id).length;
      return '<article class="coll rv">' + frame("collections", c.image, c.name, "Collection image", "", c.id) +
        '<div class="txt"><span class="num">0' + (i + 1) + '</span><h3>' + esc(c.name) + '</h3><div class="tag">' + esc(c.short) + '</div>' +
        '<p>' + esc(c.description[0]) + '</p><span class="label cnt">' + n + ' restaurant' + (n > 1 ? "s" : "") + '</span>' +
        '<a class="btn" href="collection.html?id=' + c.id + '">Explore</a></div></article>';
    }).join("");
    var pf = RESTS.map(function (r) {
      return '<a href="restaurant.html?id=' + r.id + '"><b>' + esc(r.name.replace(/^Aurelia /, "")) + '</b><span>' + esc(r.city) + '</span></a>';
    }).join("");
    var html =
      '<section class="hero" style="padding:0"><div class="bg"><img src="assets/brand/hero.jpg" alt="" onload="this.classList.add(\'loaded\')" onerror="this.remove()"></div>' +
      '<div class="in-h"><span class="label">Restaurant portfolio</span><h1>Aurelia Group</h1><p class="sub">Modern Luxury Without Ostentation</p>' +
      '<a class="btn light" href="#collections">Explore the Collection</a></div></section>' +
      '<section><div class="wrap intro rv"><h2>A portfolio of distinct dining environments.</h2><div>' +
      '<p>Aurelia is not a conventional restaurant chain. It is a collection of houses, each with its own character, united by a common philosophy of understated luxury.</p>' +
      '<p>Refined, quiet, warm and intelligent: luxury here is a matter of care rather than display. ' + RESTS.length + ' restaurants, ' + COLS.length + ' collections, one standard.</p></div></div></section>' +
      '<section class="colls" id="collections"><div class="wrap"><div class="sec-head rv"><div><span class="label">Six collections</span><h2>The Collections</h2></div></div>' + colsHtml + '</div></section>' +
      '<section id="portfolio"><div class="wrap"><div class="sec-head rv"><div><span class="label">All houses</span><h2>The Portfolio</h2></div></div><div class="pf rv">' + pf + '</div></div></section>' +
      '<section class="phil" id="philosophy"><div class="wrap"><span class="label" style="color:rgba(246,241,232,.6)">Philosophy</span><h2 class="rv">Every menu tells the story of where it is.</h2>' +
      '<p class="lead rv">Every dish justifies its price. Every bite justifies the journey. Three principles govern every Aurelia menu: the Signature Date Cake, The Aurelia mocktail and the sourdough bread service appear everywhere; price must always match value; and Heritage menus are developed in partnership with local culinary tradition.</p>' +
      '<div class="grid rv">' +
      '<div><h4>Signature Bread</h4><p>A sourdough bread service, offered at the start of every meal.</p></div>' +
      '<div><h4>Aurelia Scent</h4><p>A house scent that is adapted to each location.</p></div>' +
      '<div><h4>The Aurelia</h4><p>A signature mocktail on every menu, in every country.</p></div>' +
      '<div><h4>Guest Preference Tracking</h4><p>Quiet attention to how each guest likes to dine.</p></div>' +
      '<div><h4>Art &amp; Local Heritage</h4><p>Each house speaks of its place, and the Heritage Collection speaks of nothing else.</p></div>' +
      '</div></div></section>';
    mount(html, true);
  }

  /* ---------- COLLECTION ---------- */
  function collection() {
    var c = colById(qs("id")) || COLS[0];
    document.title = c.name + " — Aurelia Group";
    document.body.classList.add("t-" + c.id);
    var rs = restsOf(c.id);
    var list = rs.map(function (r) {
      return '<article class="rest rv">' + frame("restaurants", r.image, r.name, r.city + " · " + r.country, "", c.id) +
        '<div class="txt"><span class="label">' + esc(r.city) + ' · ' + esc(r.country) + '</span><h3>' + esc(r.name) + '</h3>' +
        '<div class="pos">' + esc(r.positioning) + '</div><a class="btn" href="restaurant.html?id=' + r.id + '">View Restaurant</a></div></article>';
    }).join("");
    var nav = COLS.map(function (x) { return '<a class="' + (x.id === c.id ? "cur" : "") + '" href="collection.html?id=' + x.id + '">' + esc(x.name) + '</a>'; }).join("");
    var html =
      '<div class="phero"><div class="wrap"><span class="label crumb"><a href="index.html">Aurelia Group</a> &nbsp;/&nbsp; Collection</span><h1>' + esc(c.name) + '</h1>' +
      '<div class="quote">' + esc(c.short) + '</div><div class="coll-nav">' + nav + '</div></div></div>' +
      '<section style="padding-bottom:0"><div class="wrap cols2 rv"><div><span class="label">The idea</span><h2>' + esc(c.name) + '</h2></div><div class="prose">' +
      c.description.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("") + '</div></div></section>' +
      '<div class="imgband" style="padding:clamp(40px,6vw,80px) 0"><div class="wrap">' + frame("collections", c.image, c.name, "Collection image", "", c.id) + '</div></div>' +
      '<section style="padding-top:0"><div class="wrap"><div class="sec-head rv"><div><span class="label">' + rs.length + ' restaurants</span><h2>The Portfolio</h2></div></div>' + list + '</div></section>';
    mount(html, false);
  }

  /* ---------- MENU ---------- */
  function buildMenu(r) {
    if (r.collection === "heritage-collection") {
      var h = (MENUS.heritage || {})[r.id];
      return h ? { intro: h.intro, sections: h.sections, heritage: true } : null;
    }
    var base = MENUS[r.collection];
    if (!base) return null;
    var ad = (base.adapt || {})[r.id] || {};
    var rem = ad.remove || [];
    var secs = base.sections.map(function (s) {
      return { t: s.t, intro: s.intro, i: s.i.filter(function (it) { return rem.indexOf(it[0]) < 0; }).map(function (it) { return it.concat([]); }) };
    });
    var add = ad.add || {};
    Object.keys(add).forEach(function (k) {
      var s = secs.filter(function (x) { return x.t === k; })[0];
      if (!s) { s = { t: k, i: [] }; secs.push(s); }
      add[k].forEach(function (it) { var n = it.concat([]); while (n.length < 3) n.push(""); n[3] = n[3] || ""; n[4] = true; s.i.push(n); });
    });
    return { intro: base.intro, sections: secs, heritage: false };
  }
  function dish(it) {
    var free = /^complimentary$/i.test(it[2]);
    return '<li class="dish"><div class="hd"><h4>' + esc(it[0]) + (it[4] ? '<span class="ad">Local</span>' : "") + '</h4><span class="pr' + (free ? " free" : "") + '">' + esc(it[2]) + '</span></div>' +
      (it[1] ? '<p>' + esc(it[1]) + '</p>' : "") + (it[3] ? '<span class="tg">' + esc(it[3]) + '</span>' : "") + '</li>';
  }
  function menuHtml(r) {
    var m = buildMenu(r);
    if (!m) return "";
    var chips = m.sections.map(function (s, i) { return '<button class="chip' + (i ? "" : " on") + '" data-i="' + i + '">' + esc(s.t.split(" — ")[0]) + '</button>'; }).join("");
    var secs = m.sections.map(function (s, i) {
      return '<div class="msec' + (i ? "" : " on") + '" data-i="' + i + '"><h3>' + esc(s.t) + '</h3><div class="orn"></div>' +
        (s.intro ? '<p class="sintro">' + esc(s.intro) + '</p>' : "") + '<ul class="dishes">' + s.i.map(dish).join("") + '</ul></div>';
    }).join("");
    return '<section class="menu" id="menu"><div class="wrap"><div class="menu-head rv"><span class="label">The Menu</span><h2>' + esc(r.name) + '</h2>' +
      (m.intro ? '<p>' + esc(m.intro) + '</p>' : "") + '</div>' +
      (m.heritage ? "" : '<div class="menu-note">This restaurant shares the foundational menu of its collection. Items marked <b>Local</b> are its regional adaptation.</div>') +
      '<div class="chips" id="chips">' + chips + '</div><div id="msecs">' + secs + '</div></div></section>';
  }
  function wireMenu() {
    var chips = $("#chips"); if (!chips) return;
    chips.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      chips.querySelectorAll(".chip").forEach(function (c) { c.classList.toggle("on", c === b); });
      document.querySelectorAll(".msec").forEach(function (s) { s.classList.toggle("on", s.getAttribute("data-i") === b.getAttribute("data-i")); });
      b.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
      var top = $("#chips").getBoundingClientRect().top + window.scrollY - 60;
      if (window.scrollY > top) window.scrollTo({ top: top, behavior: "smooth" });
    });
  }

  /* ---------- RESTAURANT ---------- */
  function restaurant() {
    var r = restById(qs("id")) || RESTS[0];
    var c = colById(r.collection);
    document.title = r.name + " — Aurelia Group";
    document.body.classList.add("t-" + c.id);
    var idx = RESTS.indexOf(r), sib = restsOf(c.id), si = sib.indexOf(r);
    var prev = sib[(si - 1 + sib.length) % sib.length], next = sib[(si + 1) % sib.length];

    var about = [esc(r.positioning)];
    var aboutHtml = '<p>' + r.positioning.replace(/&/g, "&amp;") + '</p>';
    if (r.tradition) aboutHtml += '<p>' + esc(r.tradition) + '.</p>';
    aboutHtml += c.description.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("");
    if (r.quote) aboutHtml = '<p style="font-family:var(--serif);font-style:italic;font-size:clamp(20px,2.2vw,28px);line-height:1.4;color:var(--walnut)">“' + esc(r.quote) + '”</p>' + aboutHtml;

    var atmos = "";
    if (r.atmosphere || r.interior) {
      atmos = '<section style="padding-top:0"><div class="wrap cols2 rv"><div><span class="label">Atmosphere</span><h2>Atmosphere &amp; Interior</h2></div><div class="prose">' +
        (r.atmosphere ? '<p>' + esc(r.atmosphere) + '</p>' : "") + (r.interior ? '<p>' + esc(r.interior) + '</p>' : "") + '</div></div></section>';
    }
    var dining = '<section style="padding-top:0"><div class="wrap cols2 rv"><div><span class="label">Dining Experience</span><h2>Dining Experience</h2></div><div>' +
      (r.notes && r.notes.length ? '<ul class="list">' + r.notes.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join("") + '</ul>' : "") +
      '<p class="label" style="margin-top:22px">Average check · ' + esc(r.avgCheck) + '</p></div></div></section>';
    var loc = r.location ? '<section style="padding-top:0"><div class="wrap cols2 rv"><div><span class="label">Location</span><h2>Location</h2></div><div class="prose"><p>' + esc(r.location) + '</p></div></div></section>' : "";

    var html =
      '<div class="phero"><div class="wrap"><span class="label crumb"><a href="index.html">Aurelia Group</a> &nbsp;/&nbsp; <a href="collection.html?id=' + c.id + '">' + esc(c.name) + '</a></span>' +
      '<h1>' + esc(r.name) + '</h1><div class="meta"><span>' + esc(r.city) + ', ' + esc(r.country) + '</span><span>' + esc(c.name) + '</span>' + (r.isNew ? '<span>New Opening</span>' : "") + '</div></div></div>' +
      '<div class="imgband" style="padding:clamp(28px,4vw,56px) 0"><div class="wrap">' + frame("restaurants", r.image, r.name, r.city + " · " + r.country, "", c.id) + '</div></div>' +
      '<section style="padding-top:0"><div class="wrap cols2 rv"><div><span class="label">About</span><h2>' + esc(r.positioning.replace(/\.$/, "")) + '</h2></div><div class="prose">' + aboutHtml + '</div></div></section>' +
      atmos + dining + menuHtml(r) + loc +
      '<section style="padding:clamp(40px,6vw,80px) 0"><div class="wrap"><div class="nextprev"><a class="link" href="collection.html?id=' + c.id + '">← Back to ' + esc(c.name) + '</a>' +
      (sib.length > 1 ? '<a class="link" href="restaurant.html?id=' + next.id + '">Next: ' + esc(next.name.replace(/^Aurelia /, "")) + ' →</a>' : "") + '</div></div></section>';
    mount(html, false);
    wireMenu();
  }

  if (page === "home") home(); else if (page === "collection") collection(); else if (page === "restaurant") restaurant();
})();
