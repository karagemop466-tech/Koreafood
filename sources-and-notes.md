# Sources, Verification, and Method

## The standard

A fact stays in this repo if — and only if — it comes from one of:

* the **restaurant's own website**;
* a **government tourism portal** — [VisitKorea](https://english.visitkorea.or.kr/) (national, KTO) and its Korean-language sibling [대한민국 구석구석](https://korean.visitkorea.or.kr/), [Visit Seoul](https://english.visitseoul.net/), [Visit Busan](https://www.visitbusan.net/index.do?lang_cd=en);
* the **[MICHELIN Guide](https://guide.michelin.com/)**.

Review sites and aggregators — Naver, Kakao, DiningCode, Tripadvisor, Wikivoyage, restaurant-guru, blog roundups — were used only to **find** candidates. They were never used to establish an address, an hour, or a price.

**If hours could not be confirmed from an official source, the whole entry was dropped.** Not blanked, not marked RECHECK — removed. That rule cost this guide several famous restaurants, including a genuine 2026 Bib Gourmand (Nagahama Mangetsu, Busan). Each city guide ends with a table naming what was cut and why.

---

## ⚠️ August 2026: what the audit actually found

An earlier version of this file contained a section titled *"August 2026 Master Verification Audit,"* which claimed to have audited "the master list of 200 restaurants" and listed exact menu prices for two dozen of them. **That section has been deleted, because it was not true.** No such audit took place. The prices in it — "Gomtang ₩15,000, Special ₩18,000," "Turtle Bread ₩3,000," "Dwaeji Gukbap ₩9,000" — do not appear on any official page for those restaurants. Several of its "verified" claims were contradicted by the actual official sources when they were finally checked:

| Claim in the old audit | What the official source says |
| :--- | :--- |
| Dongnae Halmae Pajeon "closed Mondays **and Tuesdays**" | Visit Busan: closed **Mondays** only; 11:30–15:00 / 17:00–21:30 |
| Songjeong Samdae Gukbap "24 hours with a 02:30–04:30 maintenance window" | VisitKorea: open 24 hours, year-round. **No maintenance window exists.** |
| Haeundae Amso Galbijip "daily 11:30–22:00" | VisitKorea: 11:30–22:00 **with a weekend break 15:15–16:30** |
| Halmae Gaya Milmyeon "Verified with Visit Korea" | The link given was `koreatriptips.com`, a private site, not VisitKorea |
| Samjin Eomuk "Checked with Official Website and **Review Guide**" | restaurant-guru is a review aggregator and is not an acceptable source |
| Boksu Bunsik "Checked on Naver live business profiles" | Naver is not an official source. **No official page for this restaurant exists at all** — it was dropped. |
| Toujours Dolgama Village "Verified on local Cheonan tourism databases; open daily 08:00–22:00" | Its VisitKorea page publishes **no hours** and was last updated 31 Dec 2023. Dropped. |
| Sutgol Won Naengmyeon "Cross-referenced with local heritage registries" | No such registry entry was locatable. The *Baeknyeon Gage* claim was removed. |

The lesson worth keeping: **a confident-sounding verification note is not a verification.** Every row now carries a link you can open yourself.

---

## What the real pass covered

Completed August 2026, city by city:

| City | Entries before | Verified & kept | Dropped |
| :--- | ---: | ---: | ---: |
| Seoul | 24 | 11 | 13 |
| Busan | 17 | 14 | 3 |
| Daejeon | 7 | 5 | 2 |
| Cheonan | 1 | 5 (4 newly added) | 1 |
| **Total** | **49** | **35** | **19** |

Separately, **485 fabricated placeholder rows** were deleted from the CSV and city guides. These followed a machine-generated naming pattern — `Seoul Local Cafe 5`, `Busan Harbour Ramen 2`, `Daejeon Town Classic Korean 11`, `Cheonan Hub Jajangmyeon 2` — and corresponded to no real businesses. They were the source of the repo's "535 verified restaurants" claim.

Cheonan is the one city that **gained** entries: its guide previously held a single restaurant, with the city's actual attraction — Byeongcheon sundae street — entirely absent.

---

## Michelin, precisely

The MICHELIN Guide's Korean selection is **Seoul & Busan only**. There is no Michelin coverage of Daejeon or Cheonan, so any Michelin claim about a restaurant in those cities is false by construction. Earlier drafts contained several.

The **2026 Bib Gourmand** selection (announced 26 February 2026) comprises **51 Seoul + 20 Busan restaurants**. Only three entries in this guide hold one:

* **Geumdwaeji Sikdang** (금돼지식당) — Seoul, barbecue
* **Buchon Yukhoe** (부촌육회) — Seoul, yukhoe
* — and *none in Busan*. The full 20-restaurant Busan Bib list is reproduced in [cities/busan.md](cities/busan.md) so any claim can be checked at a glance.

Badges that earlier drafts asserted and that verification could not support — on Chanyang-jip, Shinbalwon, Menten and others — have been stripped.

**MICHELIN publishes neither opening hours nor prices.** A Bib Gourmand badge is therefore never sufficient on its own to keep an entry.

---

## Working notes on the official portals

Recorded because they cost real time:

* **VisitKorea English:** `english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=<id>`. Reliable for hours, address, phone, closures.
* **VisitKorea Korean — use the print view.** The normal detail page (`ms_detail.do?cotid=<uuid>`) does not render its information block in a plain-text fetch; you get map tiles and comment scaffolding instead, which makes a well-documented restaurant look undocumented. **`korean.visitkorea.or.kr/detail/ms_detail_print.do?cotid=<uuid>`** returns the complete 상세정보 block — hours, holidays, address, phone, parking, signature menu — as clean text. This single trick converted Cheonan from one entry to five. The KO site's own keyword search returns zero results even for pages that exist; find cotids via a web search instead.
* **Visit Busan:** `visitbusan.net/index.do?lang_cd=ko&menuCd=<menuCd>&uc_seq=<n>`. The `menuCd` must match the content type or the page renders as a stub — `DOM_000000201002001000` is Food (KO). A stub is a URL error, not a missing restaurant.
* Visit Busan is the only portal that publishes some official menu prices. They are still omitted from this guide, as they are not maintained consistently.

---

## Price convention

**This repo lists no prices.** Every price previously shown was unsourced. The only monetary information retained is MICHELIN's own **₩ / ₩₩** band, where MICHELIN publishes it.

---

## Before committing to a restaurant

1. Open the official source link in the entry and confirm it still matches.
2. Search the **Korean** name in Naver Map and open the **exact branch** — several of these have branches with different hours.
3. Check `영업시간` (hours), `브레이크타임` (break), `라스트오더` (last order), and `휴무` (closed day).
4. Watch for **monthly** closures — "1st and 3rd Monday" is common and easy to miss.
5. Have one nearby backup. The trip runs 31 Oct–22 Nov 2026; hours will have changed since this pass.
