# Prices — review queue

**Status: intentionally empty.** No restaurant prices appear anywhere in this repo. This file is the place to put them back, one at a time, when a real source turns up.

Every other file in this repo is finished and verified. This one is deliberately unfinished, and nothing here should be treated as researched.

---

## Why prices were removed

Earlier drafts carried menu prices for most entries. On verification, none of them could be traced to a restaurant or to an official portal — they came from review aggregators, or from nowhere at all. A few were attached to restaurants that turned out not to exist. Under the project rule that every surviving fact must be traceable to an official source, they were removed rather than shown half-verified.

Two specific things were also removed and are worth naming, so nobody restores them by accident:

* The **budget planning ranges** in `START-HERE.md` ("budget meals under ₩30,000" and so on). Our own guesswork, no source.

* The **"verified official prices"** in `research-log-2026-08.md`. Labelled verified; they were not. Now redacted in place, with the sentences left standing so the record of the claim survives.

What is **not** affected: MICHELIN's own **₩ / ₩₩** price bands in `cities/seoul.md`. Those are published by MICHELIN on the restaurant's own Guide page and were confirmed there directly. They are a band, not a price, and they stay.

Transit fares in `booking-and-tech-guide.md` are also unaffected — those come from VisitKorea's transportation-card page and are not restaurant pricing.

---

## What counts as a usable price source

Same standard as the rest of the repo. A price may be filled in below **only** if it comes from:

1. **The restaurant's own website or official menu** — including its own Instagram or `modoo.at` page, if that is what the business actually runs.

2. **A government tourism portal** — VisitKorea (`english.visitkorea.or.kr`, `korean.visitkorea.or.kr`), Visit Seoul, Visit Busan. Visit Busan in particular *does* publish menu prices for some restaurants.

3. **MICHELIN Guide** — for the ₩ band only. MICHELIN does not publish item prices.

Not acceptable, no matter how confident they look: Tripadvisor, DiningCode, MangoPlate, Siksinhot, Naver blogs, travel blogs, or any aggregator. These may be used to *find* a lead, never to source one. **ViaMichelin specifically must not be used** — it was caught this session still displaying a MICHELIN badge that MICHELIN itself had withdrawn.

### How to fill a row

Record the price **with the dish it belongs to** and the date you checked, e.g. `Sundae-gukbap ₩10,000 (VisitKorea, checked 2026-09-14)`. A bare number ages badly and cannot be re-checked. Korean menu prices move often, so a price older than about six months should be re-confirmed before the trip.

If no source publishes a price, **leave the row blank**. A blank row is the correct, finished state for that entry — it is not a gap to be filled with an estimate.

---

## The 35 verified restaurants

Roster generated from `restaurants-bookmarks.csv`. If an entry is added or removed there, update this file to match.

### Seoul (11)

| # | Restaurant | Korean | Price (dish — amount — source — date checked) |
| :--- | :--- | :--- | :--- |
| 1 | Sinseonggak | 신성각 | |
| 2 | Osegyehyang | 오세계향 | |
| 3 | Budnamujip | 버드나무집 | |
| 4 | Geumdwaeji Sikdang | 금돼지식당 | |
| 5 | Myeongdong Kyoja | 명동교자 본점 | |
| 6 | Hadongkwan Main Store | 하동관 본점 | |
| 7 | Chanyang-jip | 찬양집 | |
| 8 | Imun Seolleongtang | 이문설농탕 | |
| 9 | Buchon Yukhoe | 부촌육회 | |
| 10 | Jin Ok-hwa Halmae Dakhanmari | 진옥화할매원조닭한마리 | |
| 11 | Goryeo Samgyetang | 고려삼계탕 본점 | |

### Busan (14)

| # | Restaurant | Korean | Price (dish — amount — source — date checked) |
| :--- | :--- | :--- | :--- |
| 1 | Gukje Milmyeon Main Branch | 국제밀면 본점 | |
| 2 | Halmae Gaya Milmyeon | 할매가야밀면 | |
| 3 | Seo-myeon Gaegeum Milmyeon | 서면개금밀면 | |
| 4 | Gijang Sonkalguksu | 기장손칼국수 | |
| 5 | Hwaguk Banjeom | 화국반점 | |
| 6 | Shinbalwon | 신발원 | |
| 7 | Haeundae Amso Galbijip | 해운대암소갈비집 | |
| 8 | Busan Jokbal | 부산족발 | |
| 9 | Songjeong Samdae Gukbap | 송정3대국밥 | |
| 10 | Dongnae Halmae Pajeon | 동래할매파전 | |
| 11 | Jagalchi Market | 자갈치시장 | |
| 12 | Bujeon Market | 부전시장 | |
| 13 | Samjin Eomuk Main Store | 삼진어묵 본점 | |
| 14 | Brown Hands Baekje | 브라운핸즈 백제 | |

### Daejeon (5)

| # | Restaurant | Korean | Price (dish — amount — source — date checked) |
| :--- | :--- | :--- | :--- |
| 1 | Sutgol Won Naengmyeon | 숯골원냉면 | |
| 2 | OC Kalguksu (Ossi Kalguksu) | 오씨칼국수 | |
| 3 | Sariwon Myeonok Main Store | 사리원면옥 본점 | |
| 4 | Taepyeong Sogukbap | 태평소국밥 | |
| 5 | Sungsimdang Main Store | 성심당 본점 | |

### Cheonan (5)

| # | Restaurant | Korean | Price (dish — amount — source — date checked) |
| :--- | :--- | :--- | :--- |
| 1 | Cheonghwa-jip | 청화집 | |
| 2 | Chungnam-jip Sundae | 충남집순대 | |
| 3 | Aunae Jangteo Sundae | 아우내 장터순대 | |
| 4 | Byeongcheon Sundae Street (area) | 천안 병천순대거리 | |
| 5 | Dongsunwon Seonghwan Main Branch | 동순원 성환본점 | |

---

## Known leads

Two concrete starting points, both noted during verification:

* **Visit Busan publishes menu prices for some of its restaurant listings.** Several of the 14 Busan entries above may be fillable immediately from the `visitbusan.net` URLs already recorded in `restaurants-bookmarks.csv`. This is the single highest-yield place to start. Note the URL form: `visitbusan.net/index.do?...` — the `/kr/` variant returns an empty stub.

* **VisitKorea detail pages list 대표메뉴 (signature dish) but generally not prices.** The Korean print view — `korean.visitkorea.or.kr/detail/ms_detail_print.do?cotid=<uuid>` — is the richest version of those pages and is worth a look per entry, but expect dish names rather than amounts.

Restaurant sites were largely a dead end: `mdkj.co.kr` is behind a CAPTCHA, `budnamujip.com` returns 406, and several others publish menus as images with no text.

