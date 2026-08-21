const CITY_ORDER = ["Seoul", "Busan", "Suwon", "Daejeon", "Cheonan"];

const state = { city: "all", q: "", sort: "location", type: "restaurants", data: [], restaurants: [], cafes: [] };

function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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
}

function setCity(city) {
  state.city = city;
  renderFilters();
  renderTable();
}

function filtered() {
  const q = state.q.trim().toLowerCase();
  let rows = state.data.filter((r) => state.city === "all" || r.city === state.city);
  if (q) {
    rows = rows.filter((r) => {
      const blob = [r.name, r.nameEn, r.nameKo, r.address, r.hours, r.notes, r.category, r.michelin].join(" ").toLowerCase();
      return blob.includes(q);
    });
  }
  const key = state.sort;
  rows = rows.slice().sort((a, b) => key === "location"
    ? `${a.city} ${a.address} ${a.name}`.localeCompare(`${b.city} ${b.address} ${b.name}`, "en")
    : String(a[key] || a.name).localeCompare(String(b[key] || b.name), "en"));
  return rows;
}

function renderTable() {
  const rows = filtered();
  document.getElementById("count").textContent = `${rows.length} verified place${rows.length === 1 ? "" : "s"}`;
  document.getElementById("rows").innerHTML = rows.map((r) => {
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
      <td>${esc(r.city)}<br><span class="cat">${esc(r.address)}</span></td>
      <td class="hours">${esc(r.hours)}</td>
      <td class="notes">${esc(r.notes)}</td>
      <td class="sources">${src || "—"}</td>
    </tr>`;
  }).join("");
}

async function init() {
  const [restaurants, cafes] = await Promise.all([fetch("data.json").then(r => r.json()), fetch("cafes.json").then(r => r.json())]);
  state.restaurants = restaurants; state.cafes = cafes; state.data = restaurants;
  renderChart(state.data);
  renderFilters();
  renderTable();
  document.getElementById("q").addEventListener("input", (e) => {
    state.q = e.target.value;
    renderTable();
  });
  document.getElementById("sort").addEventListener("change", (e) => { state.sort = e.target.value; renderTable(); });
  document.querySelectorAll(".tab").forEach((b) => b.addEventListener("click", () => {
    state.type = b.dataset.type; state.data = state.type === "cafes" ? state.cafes : state.restaurants;
    document.querySelectorAll(".tab").forEach(x => x.classList.toggle("active", x === b));
    document.getElementById("place-heading").textContent = state.type === "cafes" ? "Cafe" : "Restaurant";
    renderChart(state.data); renderFilters(); renderTable();
  }));
}

init();
