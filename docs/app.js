const CITY_ORDER = ["Seoul", "Busan", "Suwon", "Daejeon", "Cheonan"];

const AREA_RULES = {
  Seoul: [
    ["Myeong-dong / Jung-gu", /myeongdong|myeong-dong|jung-gu|eulji|namsan|chungmuro|toegye|namdaemun|hoehy/i],
    ["Gangnam / Seocho", /gangnam|seocho|cheongdam|apgujeong|seolleung|dosan|nonhyeon|dogok|samseong|sinnonhyeon|eonju/i],
    ["Hongdae / Mapo", /mapo|hongdae|hongik|yeonnam|sangsu|hapjeong|wausan|eoulmadang|world cup|seogyo|donggyo|seodaemun|sinchon|myeongmul/i],
    ["Dongdaemun", /dongdaemun|jegi|jangchung|cheonggyecheon-ro|mareunnae|jeonnong|sinseol/i],
    ["Jongno / Ikseon", /jongno|insadong|ikseon|seochon|bukchon|anguk|gwanghwamun|donhwamun|jahamun|samcheong|hyehwa|daehangno|dongsung/i],
  ],
  Busan: [
    ["Haeundae", /haeundae|jungdong|dalmaji|marine city|centum/i],
    ["Nampo / Jung-gu", /nampo|gwangbok|jagalchi|bosu|jung-gu/i],
    ["Seomyeon", /seomyeon|busanjin|jeonpo|seojeon/i],
    ["Gwangalli / Suyeong", /gwangalli|suyeong|millak|gwangnam|namcheon/i],
    ["Yeongdo", /yeongdo|taejong|haeyang-ro/i],
  ],
};

const DISHES = [
  { id: "all", label: "All dishes" },
  { id: "jajang", label: "Black bean noodles", re: /jajang|jjajang|korean-chinese|짜장|짜장면/i },
  { id: "kbbq", label: "KBBQ", re: /bbq|barbecue|galbi|samgyeop|grilled meat|숯불|갈비/i },
  { id: "galbijim", label: "Galbijim", re: /galbijim|galbi jjim|braised short/i },
  { id: "tonkatsu", label: "Tonkatsu", re: /tonkatsu|donkkaseu|돈까스|cutlet/i },
  { id: "naengmyeon", label: "Cold noodles", re: /naengmyeon|milmyeon|cold noodle|bibim/i },
  { id: "steak", label: "Steak", re: /steak|hanu steak|dry-aged/i },
  { id: "local", label: "Local Korean", re: /local|gukbap|samgyetang|sundae|bossam|roast chicken|makguksu|hanjeongsik/i },
];

const state = {
  city: "all",
  area: "all",
  dish: "all",
  q: "",
  type: "restaurants",
  data: [],
  restaurants: [],
  cafes: [],
};

function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function areaOf(r) {
  const blob = `${r.address || ""} ${r.name || ""} ${r.notes || ""}`;
  const rules = AREA_RULES[r.city] || [];
  for (const [label, re] of rules) {
    if (re.test(blob)) return label;
  }
  return r.city === "Seoul" ? "Other Seoul" : r.city === "Busan" ? "Other Busan" : r.city;
}

function renderChart(data) {
  const counts = Object.fromEntries(CITY_ORDER.map((c) => [c, 0]));
  data.forEach((r) => { counts[r.city] = (counts[r.city] || 0) + 1; });
  const max = Math.max(...Object.values(counts), 1);
  const el = document.getElementById("chart");
  el.innerHTML = CITY_ORDER.map((city) => {
    const n = counts[city];
    const pct = Math.round((n / max) * 100);
    return `<div class="bar-row">
      <button type="button" data-city="${esc(city)}">${esc(city)}</button>
      <div class="track" aria-hidden="true"><div class="fill" style="width:${pct}%"></div></div>
      <span class="n">${n}</span>
    </div>`;
  }).join("");
  el.querySelectorAll("button").forEach((b) => {
    b.addEventListener("click", () => setCity(b.dataset.city));
  });
}

function renderFilters() {
  const wrap = document.getElementById("city-filters");
  const items = ["all", ...CITY_ORDER];
  wrap.innerHTML = items.map((c) => {
    const label = c === "all" ? "All cities" : c;
    const on = state.city === c ? "active" : "";
    return `<button type="button" class="${on}" data-city="${c}">${label}</button>`;
  }).join("");
  wrap.querySelectorAll("button").forEach((b) => {
    b.addEventListener("click", () => setCity(b.dataset.city));
  });

  const areas = uniqueAreas();
  const areaWrap = document.getElementById("area-filters");
  if (state.city === "all" || areas.length < 2) {
    areaWrap.hidden = true;
    areaWrap.innerHTML = "";
  } else {
    areaWrap.hidden = false;
    const opts = ["all", ...areas];
    areaWrap.innerHTML = opts.map((a) => {
      const label = a === "all" ? "All areas" : a;
      const on = state.area === a ? "active" : "";
      return `<button type="button" class="${on}" data-area="${esc(a)}">${esc(label)}</button>`;
    }).join("");
    areaWrap.querySelectorAll("button").forEach((b) => {
      b.addEventListener("click", () => {
        state.area = b.dataset.area;
        renderFilters();
        renderTables();
      });
    });
  }

  const dishWrap = document.getElementById("dish-filters");
  if (state.type === "cafes") {
    dishWrap.innerHTML = "";
  } else {
    dishWrap.innerHTML = DISHES.map((d) => {
      const on = state.dish === d.id ? "active" : "";
      return `<button type="button" class="${on}" data-dish="${d.id}">${d.label}</button>`;
    }).join("");
    dishWrap.querySelectorAll("button").forEach((b) => {
      b.addEventListener("click", () => {
        state.dish = b.dataset.dish;
        renderFilters();
        renderTables();
      });
    });
  }
}

function uniqueAreas() {
  const rows = state.data.filter((r) => r.city === state.city);
  const set = new Set(rows.map(areaOf));
  return [...set].sort((a, b) => a.localeCompare(b, "en"));
}

function setCity(city) {
  state.city = city;
  state.area = "all";
  renderFilters();
  renderTables();
}

function filtered() {
  const q = state.q.trim().toLowerCase();
  const dish = DISHES.find((d) => d.id === state.dish);
  let rows = state.data.filter((r) => state.city === "all" || r.city === state.city);
  if (state.city !== "all" && state.area !== "all") {
    rows = rows.filter((r) => areaOf(r) === state.area);
  }
  if (state.type === "restaurants" && dish && dish.id !== "all") {
    rows = rows.filter((r) => dish.re.test([r.category, r.notes, r.name, r.nameEn].join(" ")));
  }
  if (q) {
    rows = rows.filter((r) => {
      const blob = [r.name, r.nameEn, r.nameKo, r.address, r.hours, r.notes, r.category, r.michelin].join(" ").toLowerCase();
      return blob.includes(q);
    });
  }
  return rows;
}

function rowHtml(r) {
  const mic = r.michelin && r.michelin !== "None"
    ? `<div class="badge">${esc(r.michelin)}</div>` : "";
  const src = (r.sources || []).map((s) =>
    `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a>`
  ).join("");
  return `<tr>
    <td>
      <div class="name">${esc(r.nameEn)} ${r.nameKo ? `<span class="ko">${esc(r.nameKo)}</span>` : ""}</div>
      <div class="cat">${esc(r.category)}</div>
      ${mic}
    </td>
    <td><span class="cat">${esc(r.address)}</span></td>
    <td class="hours">${esc(r.hours)}</td>
    <td class="notes">${esc(r.notes)}</td>
    <td class="sources">${src || "—"}</td>
  </tr>`;
}

function tableFor(rows) {
  const heading = state.type === "cafes" ? "Cafe" : "Restaurant";
  return `<div class="table-wrap"><table>
    <thead>
      <tr>
        <th>${heading}</th>
        <th>Address</th>
        <th>Hours</th>
        <th>What they serve</th>
        <th>Official links</th>
      </tr>
    </thead>
    <tbody>${rows.map(rowHtml).join("")}</tbody>
  </table></div>`;
}

function renderTables() {
  const rows = filtered();
  const noun = state.type === "cafes" ? "cafe" : "restaurant";
  document.getElementById("count").textContent =
    `${rows.length} verified ${noun}${rows.length === 1 ? "" : "s"}`;

  const byCity = new Map();
  rows.forEach((r) => {
    if (!byCity.has(r.city)) byCity.set(r.city, []);
    byCity.get(r.city).push(r);
  });

  const main = document.getElementById("tables");
  if (!rows.length) {
    main.innerHTML = `<p class="empty">No matches. Try another city or clear the search.</p>`;
    return;
  }

  const cityList = CITY_ORDER.filter((c) => byCity.has(c));
  main.innerHTML = cityList.map((city) => {
    const cityRows = byCity.get(city);
    const areas = [];
    const seen = new Set();
    cityRows.forEach((r) => {
      const a = areaOf(r);
      if (!seen.has(a)) { seen.add(a); areas.push(a); }
    });
    const blocks = areas.map((area) => {
      const group = cityRows.filter((r) => areaOf(r) === area);
      return `<div class="area-block">
        <h3>${esc(area)} · ${group.length}</h3>
        ${tableFor(group)}
      </div>`;
    }).join("");
    return `<section class="city-block">
      <h2>${esc(city)}</h2>
      ${blocks}
    </section>`;
  }).join("");
}

async function init() {
  const [restaurants, cafes] = await Promise.all([
    fetch("data.json").then((r) => r.json()),
    fetch("cafes.json").then((r) => r.json()),
  ]);
  state.restaurants = restaurants;
  state.cafes = cafes;
  state.data = restaurants;
  renderChart(state.data);
  renderFilters();
  renderTables();
  document.getElementById("q").addEventListener("input", (e) => {
    state.q = e.target.value;
    renderTables();
  });
  document.querySelectorAll(".tab").forEach((b) => b.addEventListener("click", () => {
    state.type = b.dataset.type;
    state.data = state.type === "cafes" ? state.cafes : state.restaurants;
    state.dish = "all";
    state.area = "all";
    document.querySelectorAll(".tab").forEach((x) => x.classList.toggle("active", x === b));
    renderChart(state.data);
    renderFilters();
    renderTables();
  }));
}

init();
