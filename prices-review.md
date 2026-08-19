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

## The 279 verified restaurants

Roster generated from `restaurants-bookmarks.csv`. If an entry is added or removed there, update this file to match.

### Seoul (132)

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
| 12 | Hwangsaengga Kalguksu | 황생가칼국수 | |
| 13 | Myeongdongjeong | 명동정 | |
| 14 | Myeongdong Eomeonijip | 명동어머니집 | |
| 15 | Yeongyang Center | 영양센터 | |
| 16 | Myeongdong Chungmu Gimbap | 명동충무김밥 | |
| 17 | Pildong Myeonok | 필동면옥 | |
| 18 | Yennal Myeongdong Budaejjigae | 옛날명동부대찌개 | |
| 19 | Wonjo Namsan Wangdonkkaseu Myeongdong | 원조남산왕돈까스 명동 | |
| 20 | Sadong Myeonok | 사동면옥 | |
| 21 | Insadong Sujebi | 인사동수제비 | |
| 22 | Gyeongin Misulgwan Jeontong Dawon | 경인미술관 전통다원 | |
| 23 | Yukdaejang Myeongdong | 육대장 명동 | |
| 24 | Myeongdong Hanubang | 명동한우방 | |
| 25 | Seowon | 서원 | |
| 26 | Nwijo | 뉘조 | |
| 27 | Miseongok | 미성옥 | |
| 28 | Myth Jokbal Myeongdong | 미쓰족발명동 | |
| 29 | Myeongdong Seoseo Galbi | 명동서서갈비 | |
| 30 | Jangsu Galbi | 장수갈비 | |
| 31 | Jongno Samgyetang | 종로삼계탕 | |
| 32 | Myeongdong Hamheung Myeonok | 명동함흥면옥 | |
| 33 | Hanaro Hwaegwan | 하나로회관 | |
| 34 | Chung Ki Wa Town Main Branch | 청기와타운 본점 | |
| 35 | Nampo Myeonok | 남포면옥 | |
| 36 | Hyundai Kalguksu | 현대칼국수 | |
| 37 | Halmeoni Kalguksu | 할머니칼국수 | |
| 38 | Janganmun | 장안문 | |
| 39 | Sanchon | 산촌 | |
| 40 | Hamcho Ganjang Gejang | 함초간장게장 | |
| 41 | Jeonju Hoegwan | 전주회관 | |
| 42 | Jungsungbon Shabu Suki Kalguksu | 정성본샤브수끼칼국수 | |
| 43 | Janggeumi Jeonjip | 장금이전집 | |
| 44 | Yonggeumok | 용금옥 | |
| 45 | Geumseonggwan Najugomtang | 금성관나주곰탕 | |
| 46 | Sikdang Jin | 식당진 | |
| 47 | Minsokchon | 민속촌 | |
| 48 | Jongno Myeongtaedeokjang | 종로명태덕장 | |
| 49 | Nakji Wangguk | 낙지왕국 | |
| 50 | Gobong Samgyetang | 고봉삼계탕 | |
| 51 | Jeongwon Sutbulgalbi | 정원숯불갈비 | |
| 52 | Dongdaemun Bonga Gamasot Seolleongtang | 동대문본가가마솥설렁탕 | |
| 53 | Neungnabapsang | 능라밥상 | |
| 54 | RADOST | 라도스트 | |
| 55 | THE SIC-DDANG Myeongdong | 더식당 명동 | |
| 56 | Okcheon Maeun Jokbal | 옥천매운족발 | |
| 57 | Masan Place | 마산집 | |
| 58 | NOBIZIB | 너비집 | |
| 59 | Namhae Gulgukbap | 남해굴국밥 | |
| 60 | Hongsugye Jjimdak | 홍수계찜닭 | |
| 61 | Heukdonga Myeongdong | 흑돈가 명동 | |
| 62 | Jinju Hoegwan | 진주회관 | |
| 63 | Yennal Yeongil Naengmyeon | 옛날연길냉면 | |
| 64 | Jaembaeok | 잼배옥 | |
| 65 | Gangseo Myeonok | 강서면옥 | |
| 66 | Mirakjeong | 미락정 | |
| 67 | Deogwon Kkorigomtang Bangchitang | 덕원꼬리곰탕방치탕 | |
| 68 | Hamheung Naengmyeon | 함흥냉면 | |
| 69 | Haeju Naengmyeon | 해주냉면 | |
| 70 | Neungrado Myeongdong Branch | 능라도 명동점 | |
| 71 | Samwon Garden | 삼원가든 | |
| 72 | Joseonok | 조선옥 | |
| 73 | Daepyeong Galbi | 대평갈비 | |
| 74 | Gwanghwamun Gukbap | 광화문국밥 | |
| 75 | Tongdwaeji Duruchigi | 통돼지두루치기 | |
| 76 | Myeongdong Busanjib | 명동부산집 | |
| 77 | Myeongdong Chaeum Hanjongshik | 명동채움 한정식 | |
| 78 | Ojang-dong Hamheung Naengmyeon | 오장동 함흥냉면 | |
| 79 | Gaeseong Mandu Koong | 개성만두 궁 | |
| 80 | Jongro Seolleongtang | 종로설렁탕 | |
| 81 | Oegojip Seolleongtang | 외고집설렁탕 | |
| 82 | Jinmi Pyeongyang Naengmyeon | 진미평양냉면 | |
| 83 | Won Gopchang | 원곱창 | |
| 84 | Samgyeopsal Jeonmunjeom Daetongnyeong | 삼겹살전문점대통령 | |
| 85 | Vegan Kitchen | — | |
| 86 | KAMPUNGKU | — | |
| 87 | MaeHwa Lamb Skewers Myeongdong | — | |
| 88 | Igamyeonok | 이가면옥 | |
| 89 | Well-being Sujebi | 웰빙수제비 | |
| 90 | Eunhangnamujip | 은행나무집 | |
| 91 | Busan Agujjim Gulbossam | 부산아구찜굴보쌈 | |
| 92 | Chamchi Maeul | 참치마을 | |
| 93 | Sigoljeonjip | 시골전집 | |
| 94 | Seoul Wonjo Agujjim | 서울 원조아구찜 | |
| 95 | Sejong Village Chicken | 세종 마을 치킨 | |
| 96 | Pooja 2 | 뿌자 2 | |
| 97 | Itaewon Kitchen | 이태원 키친 | |
| 98 | Zaffran | 자프란 | |
| 99 | AANGAN | 아건 | |
| 100 | Ezindia | 이지인디아 | |
| 101 | Jinguk Seolleongtang | 진국설렁탕 | |
| 102 | Seongwon Jeonju Kongnamul Gukbap | 성원 전주콩나물국밥 | |
| 103 | Teumsae Ramyeon | 틈새라면 | |
| 104 | Myeongdong Tonkatsu | 명동돈까스 | |
| 105 | Myeongdong Jjukkumi | 명동쭈꾸미 | |
| 106 | Eun&Jeong Myeongdong Dakgalbi | 은앤정명동닭갈비 | |
| 107 | Ttosuni Sundae | 또순이원조순대 | |
| 108 | OPPADAK Myeongdong | 오븐에빠진닭 명동 | |
| 109 | Insadong Garlic Bossam | 인사동마늘보쌈 | |
| 110 | Gomgukshijip Myeongdong Branch | 곰국시집 명동 | |
| 111 | Pro Soy Crab (Main Branch) |  | |
| 112 | Busanjib KBBQ |  | |
| 113 | Busanjib Fried Chicken |  | |
| 114 | Byeolnan Ori | 별난오리 | |
| 115 | Daehan Gopchang (Jangan Branch) |  | |
| 116 | Seongcheon Makguksu | 성천막국수 | |
| 117 | Cheongdamgol |  | |
| 118 | Yangmani (Cheongdam Branch) |  | |
| 119 | Yangmani (Yeouido) |  | |
| 120 | Yi Ning |  | |
| 121 | MAO |  | |
| 122 | Moodeungsan |  | |
| 123 | Haemok Nonhyeon |  | |
| 124 | Onion (Seongsu) |  | |
| 125 | Kervan Cafe | 케르반 카페 | |
| 126 | Samarkandcity | 사마르칸트시티 | |
| 127 | Mugyo-dong Bugeo-guk |  | |
| 128 | Jihwaja |  | |
| 129 | Mongmyeok Sanbang |  | |
| 130 | Eulji Dabang |  | |
| 131 | Omiga (Sinsa Branch) |  | |
| 132 | Maple Tree House Itaewon Branch |  | |


### Busan (101)

| # | Restaurant | Korean | Price (dish — amount — source — date checked) |
| :--- | :--- | :--- | :--- |
| 1 | Gukje Milmyeon Main Branch | 국제밀면 본점 | |
| 2 | Halmae Gaya Milmyeon | 할매가야밀면 | |
| 3 | Seo-myeon Gaegeum Milmyeon | 서면개금밀면 | |
| 4 | Gijang Sonkalguksu | 기장손칼국수 | |
| 5 | Hwaguk Banjeom | 화국반점 | |
| 6 | Haeundae Amso Galbijip | 해운대암소갈비집 | |
| 7 | Busan Jokbal | 부산족발 | |
| 8 | Songjeong Samdae Gukbap | 송정3대국밥 | |
| 9 | Dongnae Halmae Pajeon | 동래할매파전 | |
| 10 | Jagalchi Market | 자갈치시장 | |
| 11 | Bujeon Market | 부전시장 | |
| 12 | Samjin Eomuk Main Store | 삼진어묵 본점 | |
| 13 | Brown Hands Baekje | 브라운핸즈 백제 | |
| 14 | Dongnae Milmyeon | 동래밀면 | |
| 15 | Daeyeon Milmyeon | 대연밀면 | |
| 16 | Samseong Milmyeon | 삼성밀면 | |
| 17 | Gaya Halmae Milmyeon | 가야할매밀면 | |
| 18 | Ilmi Milmyeon | 일미밀면 | |
| 19 | Jamae Gukbap | 자매국밥 | |
| 20 | Jaegi Dwaeji Gukbap | 재기돼지국밥 | |
| 21 | Geodae Galbi | 거대갈비 | |
| 22 | 88 Dwaeji Galbi | 88돼지갈비 | |
| 23 | Yangpyeong Kalguksu | 양평칼국수 | |
| 24 | Banpin | 반핀 | |
| 25 | Ungcheonjip | 웅천집 | |
| 26 | Choryang Ondang | 초량온당 | |
| 27 | Nampo Samgyetang | 남포삼계탕 | |
| 28 | Halmae Gukbap | 할매국밥 | |
| 29 | LAB XXIV by Kumuda | 랩트웬티포 | |
| 30 | Danggam Milmyeon | 당감밀면 | |
| 31 | Samihun | 사미헌 | |
| 32 | Yeongjin Sikdang | 영진식당 | |
| 33 | Cor Pasta Bar | 코르 파스타바 | |
| 34 | Haeundae Gaya Milmyeon | 해운대 가야밀면 | |
| 35 | 1969 Buwondong Kalguksu Busan Main Branch | 1969부원동칼국수 부산본점 | |
| 36 | Pyeongan-do Jokbal | 평안도족발 | |
| 37 | Gwangalli Eonyang Bulgogi Busanjip | — | |
| 38 | Hapcheon Gukbapjip | 합천국밥집 | |
| 39 | Sinchang Gukbap | 신창국밥 | |
| 40 | Gayapocha Seonjigukbap Main Branch | 가야포차선지국밥 본점 | |
| 41 | Pohang Dwaeji Gukbap | 포항돼지국밥 | |
| 42 | Geumsubokguk Haeundae Branch | 금수복국 | |
| 43 | Jeju Bokguk | 제주복국 | |
| 44 | 100.1.pyeongnaeng | 백일평냉 | |
| 45 | Halmaejip Hoeguksu | 할매집회국수 | |
| 46 | Hongseongbang | 홍성방 | |
| 47 | Marine Buffet | 마린뷔페 | |
| 48 | Myeonchaeum | 면채움 | |
| 49 | Jang Seong Hyang | 장성향 | |
| 50 | Jeongjitgan | 정짓간 | |
| 51 | Woojung's Bibimbap | 우정 | |
| 52 | Dongbaekseom Hoejip | 동백섬횟집 | |
| 53 | Ilbeonji Jagalchi Sangomjangeo | 일번지자갈치산곰장어 | |
| 54 | Busak Yakkong Milmyeon | 부산약콩밀면 | |
| 55 | Ha Gi-yeon Jinju Naengmyeon | 하기연진주냉면 | |
| 56 | Haemul Wangchang Kalguksu | 해물왕창칼국수 | |
| 57 | Jungang Momil | 중앙모밀 | |
| 58 | Lee Family's Kalguksu | 이가네 칼국수 | |
| 59 | Yasumaru | 야스마루 | |
| 60 | Uri Dwaejigukbap | 우리돼지국밥 | |
| 61 | Bugwang Dwaejigukbap | 부광돼지국밥 | |
| 62 | Halmae Jaecheopguk | 할매재첩국 | |
| 63 | Wonjo Kkorigomjip | 원조꼬리곰집 | |
| 64 | Park Hae-yun Tongyeong Bapsang | 박해윤 통영 해물밥상 | |
| 65 | Janganjip | 장안집 | |
| 66 | Lee Family's Tteokbokki | 이가네 떡볶이 | |
| 67 | Hanttukbaegi | 한뚝배기 | |
| 68 | Daom | 다옴 | |
| 69 | Haeundae Ilpum Hanwoo | 해운대일품한우 | |
| 70 | Chopilsal Dwaejigui | — | |
| 71 | Sogonggan | — | |
| 72 | Woobong Shabu | — | |
| 73 | bibibidang | — | |
| 74 | Seoul Samgyetang | 서울삼계탕 | |
| 75 | Gwangangukbap | 광안국밥 | |
| 76 | Subok Dwaejigukbap | 수복돼지국밥 | |
| 77 | Suhyang Bapsang | 수향밥상 | |
| 78 | Samnak Hadong Jaecheopguk |  | |
| 79 | Mori |  | |
| 80 | Bubu Coffee |  | |
| 81 | Donghwa Banjeom |  | |
| 82 | Myeonok Hyangcheon |  | |
| 83 | Jinmi Eonyang Bulgogi |  | |
| 84 | Noneun Bada | 노는바다 | |
| 85 | Kyoto Donburi Main Branch | 교토돈부리본점 | |
| 86 | Chowonbokguk |  | |
| 87 | Ton shou |  | |
| 88 | Jyugajeonghyo |  | |
| 89 | HAREMA |  | |
| 90 | palate |  | |
| 91 | Gaegeum Milmyeon |  | |
| 92 | HYTTE ROASTERY |  | |
| 93 | BLACKUP COFFEE |  | |
| 94 | Werk Roasters |  | |
| 95 | Momos |  | |
| 96 | Ops |  | |
| 97 | Brilliant |  | |
| 98 | bread365 |  | |
| 99 | Bonheur Pâtisserie |  | |
| 100 | MONSIEUR VINCENT |  | |
| 101 | MUG Dessert LAB |  | |


### Suwon (14)

| # | Restaurant | Korean | Price (dish — amount — source — date checked) |
| :--- | :--- | :--- | :--- |
| 1 | Bonsuwon Galbi | 본수원갈비 | |
| 2 | Yeonpo Galbi | 연포갈비 | |
| 3 | Kabojung | 가보정 | |
| 4 | Suwon Chicken Street (area) | 수원통닭거리 | |
| 5 | Leenakyeong Songtan Budaejjigae | 이나경송탄부대찌개 | |
| 6 | Nostalgic Dalgona | 추억의달고나 | |
| 7 | Suwon Yeongdong Market | 수원 영동시장 | |
| 8 | Bukmun Seafood | 북문 해물탕 | |
| 9 | Chungmyung | 청명쭈꾸미 철판구이 | |
| 10 | Swoyambhu | 수엠부 | |
| 11 | Naan | 난 | |
| 12 | Om Restaurant Gwanggyo Branch | 옴레스토랑 광교점 | |
| 13 | Ori Daega | 오리대가 | |
| 14 | Tongyoung oyster&octopus love | 통영굴사랑&낙지사랑 | |


### Daejeon (20)

| # | Restaurant | Korean | Price (dish — amount — source — date checked) |
| :--- | :--- | :--- | :--- |
| 1 | Sutgol Won Naengmyeon | 숯골원냉면 | |
| 2 | OC Kalguksu (Ossi Kalguksu) | 오씨칼국수 | |
| 3 | Sariwon Myeonok Main Store | 사리원면옥 본점 | |
| 4 | Taepyeong Sogukbap | 태평소국밥 | |
| 5 | Sungsimdang Main Store | 성심당 본점 | |
| 6 | Daeseon Kalguksu Dunsan Main Store | 대선칼국수 둔산본점 | |
| 7 | Samdaejjae Jeontong Kalguksu | 삼대째전통칼국수 | |
| 8 | Byeolcheonji Sikdang | 별천지식당 | |
| 9 | Sonamujip | 소나무집 | |
| 10 | Gaecheon Sikdang | 개천식당 | |
| 11 | Baekcheonjip Sikdang | 백천집식당 | |
| 12 | Gangnam Myeonok Dunsan Branch | 강남면옥 둔산점 | |
| 13 | Hanbat Sikdang | 한밭식당 | |
| 14 | Sindo Kalguksu Main Store | 신도칼국수 본점 | |
| 15 | Buchu Haemul Kalguksu Sikdang | 부추해물칼국수식당 | |
| 16 | Hanmaeum Naengmyeon | 한마음냉면 | |
| 17 | Gyeryong Samgyetang | 계룡삼계탕 | |
| 18 | Hanbang Samgyetang | 한방삼계탕 | |
| 19 | Pungnyeon Samgyetang | 풍년삼계탕 | |
| 20 | Gugu Jeonbok Samgyetang | 구구전복삼계탕 | |

### Cheonan (12)

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
| 6 | Jangkalguksu | 장칼국수 | |
| 7 | Jeongsang Galbi | 정상갈비 | |
| 8 | Galjae Sanjang | 갈재산장 | |
| 9 | Byeogodong | 벽오동 | |
| 10 | Kkachi Bokjip | 까치복집 | |
| 11 | Dongmin Mokjang | 동민목장 | |
| 12 | A-Gate Cafe | 에이게이트카페 | |

