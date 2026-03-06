# รายงานตรวจสอบเนื้อหา — bodhidhammayan.org

**วันที่ตรวจสอบ:** 6 มีนาคม 2569 (2026)
**เปรียบเทียบ:** เว็บต้นฉบับ (WordPress production) vs โค้ดใน project (TanStack Start)
**URL ต้นฉบับ:** https://bodhidhammayan.org

---

## สารบัญ

1. [สรุปภาพรวม](#1-สรุปภาพรวม)
2. [ปัญหา TH vs EN — Pattern ไม่ตรงกัน](#2-ปัญหา-th-vs-en--pattern-ไม่ตรงกัน)
3. [เนื้อหาที่ขาดหาย (ไม่มีในโค้ด)](#3-เนื้อหาที่ขาดหาย-ไม่มีในโค้ด)
4. [เนื้อหาที่ไม่ตรงกับต้นฉบับ](#4-เนื้อหาที่ไม่ตรงกับต้นฉบับ)
5. [หน้าคอร์ส — ยังเป็น Placeholder](#5-หน้าคอร์ส--ยังเป็น-placeholder)
6. [ปัญหา i18n / Translation](#6-ปัญหา-i18n--translation)
7. [ปัญหาจากต้นฉบับที่ควรแก้ไข](#7-ปัญหาจากต้นฉบับที่ควรแก้ไข)
8. [ตาราง Checklist ทุกหน้า](#8-ตาราง-checklist-ทุกหน้า)

---

## 1. สรุปภาพรวม

### สถิติ

| รายการ | ต้นฉบับ (Production) | โค้ด (Project) | สถานะ |
|:-------|:---------------------|:---------------|:------|
| หน้า TH ทั้งหมด | 13 หน้า | 13 routes | ✅ ครบ |
| หน้า EN ทั้งหมด | 13 หน้า | 13 routes | ✅ ครบ |
| บทความธรรมคำสอน (TH) | 9 บทความ | 9 seed posts | ✅ ครบ |
| ข่าวสาร (TH) | 12 ข่าว | 9 seed posts | ❌ ขาด 3 |
| ประสบการณ์ (TH) | 7 รายการ | 7 seed posts | ✅ ครบ |
| หนังสือ | 9 เล่ม | 9 เล่ม | ✅ ครบ |
| FAQ (TH) | 4 ข้อ | 4 ข้อ | ✅ ครบ |
| สถานที่ | 4 แห่ง | 4 แห่ง | ✅ ครบ |
| บทความธรรม (EN) | 12 บทความ (ต่างจาก TH) | 9 seed posts (ชุดเดียวกับ TH) | ❌ เนื้อหาต่าง |
| ประสบการณ์ (EN) | 12 รายการ (ต่างจาก TH) | 7 seed posts (ชุดเดียวกับ TH) | ❌ เนื้อหาต่าง |
| ข่าวสาร (EN) | 12 ข่าว (แปลจาก TH) | 9 seed posts (ชุดเดียวกับ TH) | ❌ เนื้อหาต่าง |
| Homepage EN Sections | 12 sections | 10 sections | ❌ ขาด 3 |
| Homepage FAQ (EN) | 11 ข้อ | 4 ข้อ (ชุดเดียวกับ TH) | ❌ ขาด 7 |

### ระดับความรุนแรง

- 🔴 **Critical** — เนื้อหาหายหรือผิดพลาดมาก ผู้ใช้เห็นข้อมูลไม่ตรง
- 🟠 **Major** — เนื้อหาไม่ครบ แต่หน้ายังใช้งานได้
- 🟡 **Minor** — เนื้อหาแตกต่างเล็กน้อยหรือ formatting ไม่ตรง

---

## 2. ปัญหา TH vs EN — Pattern ไม่ตรงกัน

นี่คือปัญหาใหญ่ที่สุด — **เว็บต้นฉบับภาษาอังกฤษมีเนื้อหาที่แตกต่างจากภาษาไทยอย่างมาก** ไม่ใช่แค่แปลภาษา แต่เป็นเนื้อหาคนละชุดเลย

### 2.1 🔴 Homepage EN มี Sections เพิ่มเติมที่ TH ไม่มี

| Section | TH (ต้นฉบับ) | EN (ต้นฉบับ) | โค้ด |
|:--------|:-------------|:-------------|:-----|
| Hero | ✅ | ✅ | ✅ |
| Course Types | ✅ | ✅ | ✅ |
| Locations | ✅ | ✅ | ✅ |
| Experience | ✅ | ✅ | ✅ |
| Dhamma Teachings | ✅ | ✅ | ✅ |
| News | ✅ | ✅ | ✅ |
| About | ✅ | ✅ | ✅ |
| Master (Founder) | ✅ | ✅ | ✅ |
| Books | ✅ | ❌ ไม่มี | ✅ (แสดงทั้ง TH/EN) |
| FAQ | ✅ (4 ข้อ) | ✅ (11 ข้อ) | ✅ (4 ข้อ ชุดเดียวกัน) |
| **Accommodations & Food** | ❌ | ✅ | ❌ ไม่มี |
| **Meditation Clothing** | ❌ | ✅ | ❌ ไม่มี |
| **Forest Monk** | ❌ | ✅ | ❌ ไม่มี |
| **Testimonial Quotes** | ❌ | ✅ (4 quotes) | ❌ ไม่มี |

**สรุป:** Homepage EN ต้นฉบับมี 3 sections พิเศษ (Accommodations, Clothing, Forest Monk) + testimonial quotes ที่ไม่มีในเวอร์ชัน TH และไม่มีในโค้ด

### 2.2 🔴 บทความ EN เป็นคนละชุดกับ TH

**ธรรมคำสอน TH (9 บทความ):**
1. จิตหนัก จิตเบา
2. บุญมาก…บุญน้อย…
3. ธรรมะ…ธรรมชาติ
4. พลังจากการสวดมนต์
5. ฝึกสมาธิ…ได้มากกว่าที่คิด
6. ประพฤติปฏิบัติให้จริงแท้เถิด...
7. กิเลสกลัวการรู้ชัดรู้แจ้งเห็นจริง
8. ความดีงาม ความถูกต้อง และความเหมาะสม
9. รักษาสมดุล

**ธรรมคำสอน EN (12 บทความ — ชุดต่าง!):**
1. Why Meditation Can Cure Depression?
2. The Gift of Anger
3. Dhamma...Nature *(ตรงกับ TH #3)*
4. Heavy Mind, Light Mind *(ตรงกับ TH #1)*
5. Spiritual Life & Meditation Teaching
6. Where Is The Soul? Where Do We Go After Death?
7. WHY? is Buddha not for tattoo
8. WHAT IS MEDITATION?
9. Who is THE BUDDHA?
10. Human beings can be noble only when they practice Dhamma
11. Jinjamalavika
12. Why Meditation Can Cure Depression? *(ซ้ำ!)*

**ปัญหาในโค้ด:** ใช้ `seed-posts.ts` ชุดเดียวกันสำหรับทั้ง TH และ EN — มีเฉพาะ 9 บทความ TH ไม่มีบทความ EN ที่เป็นคนละชุด

### 2.3 🔴 ประสบการณ์ EN เป็นคนละชุดกับ TH

**TH (7 คน):** คุณอ๋อง, คุณดิมเพิล, คุณสิทธิ์, คุณเบ็ตตี้, ผู้มาเยี่ยมชมนิทรรศการ, ชาวต่างชาติ, Journey to the Mind

**EN (12 คน — มากกว่า TH!):** Dr. Esra OZSUER, Dr. Robert Goldman, Antonio Schiena, Hanno Soth, Chayanis Hannarong, Vo My Khai Hoan, Stephanie Kuo, Dimple, Ong, Sith, Betty, ผู้มาเยี่ยมชม Wat Arun

**ปัญหาในโค้ด:** ใช้ seed-posts ชุดเดียวกัน แสดงผลเหมือนกันทั้ง TH และ EN

### 2.4 🟠 FAQ EN มีมากกว่า TH

| | TH (ต้นฉบับ) | EN (ต้นฉบับ) | โค้ด |
|--|:-------------|:-------------|:-----|
| จำนวนคำถาม | 4 | 11 | 4 (ชุด TH) |

**FAQ ที่ EN มีเพิ่ม (7 ข้อ):**
1. What is the Dhamma/Dharma?
2. What is Karma?
3. Can lay people also attain enlightenment?
4. What is the difference between "Vipassana" and "Mindfulness"?
5. What is Techo Vipassana?
6. Who is Master Acharavadee Wongsakon?
7. How do I register for the courses?

---

## 3. เนื้อหาที่ขาดหาย (ไม่มีในโค้ด)

### 3.1 🔴 ข่าวสารขาด 3 รายการ

ข่าวในต้นฉบับ TH มี 12 รายการ แต่ seed-posts มีเพียง 9 — ขาด:

| # | หัวข้อ | วันที่ |
|:--|:-------|:------|
| 10 | เตือนภัยไม่ให้หลงกลกลายเป็นมิจฉาทิฐิ | 19 มิ.ย. 2025 |
| 11 | รางวัลของความดี "ธรรมทูตคฤหัสถ์เกียรติคุณ" | 9 มิ.ย. 2025 |
| 12 | ขบวนยกยอพระพุทธศาสนาและพิธีอัญเชิญภาพเขียนองค์โพธิสัตว์กวนอิม | 9 มิ.ย. 2025 |

### 3.2 🔴 Homepage EN — Sections ที่ขาด

| Section ที่ขาด | เนื้อหาในต้นฉบับ |
|:--------------|:-----------------|
| **Accommodations & Food** | รายละเอียดที่พักและอาหารฟรีสำหรับผู้เข้าอบรม |
| **Meditation Clothing** | กฎการแต่งกาย ชุดปฏิบัติธรรม |
| **Forest Monk** | เกี่ยวกับพระภิกษุสายป่าเถรวาท |
| **Testimonial Quotes** | 4 quotes จาก M. Forbes, Dr. Robert Goldman, Antonio Schiena, Hanno Soth |

### 3.3 🟠 Homepage ต้นฉบับ — Banner Events

ต้นฉบับมี banner events 2 อัน บนสุดของ News section:
- **เสาร์ 10 – อาทิตย์ 11 มกราคม 2569** — เดินเทิดพระเกียรติ Welcome to Buddha Land
- **เสาร์ที่ 14 กุมภาพันธ์ 2569** — Global Meditation Connect

**ในโค้ด:** ไม่มี banner events component — แสดงเฉพาะ news cards

### 3.4 🟠 Register Page — ใบสมัคร PDF

**ต้นฉบับ TH:** มีลิงก์ดาวน์โหลด PDF ใบสมัคร 4 ประเภท:
1. อานาปานสติ — บุคคลทั่วไป
2. อานาปานสติ — พระภิกษุ
3. วิปัสสนากรรมฐาน — บุคคลทั่วไป
4. วิปัสสนากรรมฐาน — พระภิกษุ

**ในโค้ด:** มี 3 ขั้นตอนออนไลน์ (เลือกคอร์ส → กรอกฟอร์ม → รอยืนยัน) **ไม่มีลิงก์ PDF** — แนวทางต่างจากต้นฉบับที่ใช้ระบบ PDF + อีเมล

### 3.5 🟡 ธรรมคำสอน TH — แสดงไม่ครบ

**ต้นฉบับ:** หน้ารวมธรรมคำสอน แสดง 6 บทความ (paginated)
**โค้ด:** มี seed 9 บทความ — อาจแสดงทั้ง 9 หรือเฉพาะบางส่วน ขึ้นกับ component

---

## 4. เนื้อหาที่ไม่ตรงกับต้นฉบับ

### 4.1 🟠 About Us — โครงสร้างต่าง

**ต้นฉบับ TH:**
- Quote จากท่านอาจารย์เรื่องความกตัญญู
- ประวัติมูลนิธิโรงเรียนแห่งชีวิต (ก่อตั้ง 2549)
- รางวัล LIFETIME ACHIEVEMENT AWARD จาก A4M
- รางวัล Grand Collar Rank

**โค้ด:**
- ความหมายของ "โพธิธรรมญาณ"
- มูลนิธิที่ดำเนินงาน (2 มูลนิธิ)
- ข้อมูลติดต่อ

**ส่วนที่ขาด:** Quote ท่านอาจารย์, รายละเอียดรางวัล, ปีก่อตั้ง

### 4.2 🟠 Master Page — รายละเอียด

**ต้นฉบับ TH มี 5 sections ใหญ่:**
1. ชีวิตวิถีโลก (เกิด 28 ก.ย. 2508, การศึกษา)
2. การทำงาน (ธุรกิจสื่อ, ST.Tropez Diamond, Boss of the Year)
3. พลิกชีวิตสู่ทางธรรม (Timeline 2549-2567)
4. ผลงานด้านการเขียนหนังสือ (11 เล่มไทย, 2 เล่มอังกฤษ)
5. งานด้านอื่นๆ (KBO)

**โค้ด:** ใช้ข้อมูลจาก `master` object ใน seed-site.ts — มี name, title, bio, history, meditationHours
ต้องตรวจว่า bio/history ในโค้ดมีรายละเอียดครบเท่าต้นฉบับหรือไม่

### 4.3 🟠 Place Page — รายละเอียดสถานที่

**ต้นฉบับ TH มีรายละเอียดเพิ่มเติมต่อสถานที่:**
- สระบุรี: เปิดอบรม 25 ม.ค. 2554, Facebook link
- กรุงเทพฯ: เปิดวันเดียว 8:15-17:30, Facebook link
- หาดใหญ่: ดร.ไพร พัฒโน บริจาค 5 ไร่, Facebook link
- ภูเก็ต: ที่ตั้ง อ.ถลาง, เปิดคอร์สแรก ม.ค. 2568, Facebook link

**โค้ด:** Hardcoded descriptions ใน route file — ต้องเทียบทีละตัวว่าตรงกันหรือไม่

### 4.4 🟡 Navbar — ลำดับ menu

**ต้นฉบับ TH:** เกี่ยวกับเรา, ประสบการณ์, ภาพธรรมสถาน, ธรรมคำสอน, ข่าวสารอัปเดต
**โค้ด:** เกี่ยวกับเรา, อาจารย์, ธรรมคำสอน (mega), สถานที่, ประสบการณ์, ข่าวสารอัปเดต

**ข้อแตกต่าง:** โค้ดมี "อาจารย์" แยกเป็น menu item, ต้นฉบับไม่มี (อยู่ใน homepage เท่านั้น)

---

## 5. หน้าคอร์ส — ยังเป็น Placeholder

### 🔴 หน้าคอร์ส 4 สาขา (8 routes) ยังแสดงข้อความ placeholder

**โค้ดปัจจุบัน:**
```
TH: "เนื้อหาจะถูกดึงจาก Sanity CMS"
EN: "Content will be fetched from Sanity CMS"
```

**ต้นฉบับมีเนื้อหาจริงครบถ้วน:**

| หน้า | เนื้อหาที่ต้นฉบับมี | โค้ด |
|:-----|:---------------------|:-----|
| course-bangkok-th | ตารางเวลา 1 วัน, 2 tabs (ทั่วไป/Gen Z), กฎ 7 ข้อ, เบอร์โทร | placeholder |
| course-saraburi-th | 3 ประเภทคอร์ส, ตาราง 4 คอร์ส, ที่พักทางเลือก, รถตู้, หอมนสิการ, ศิษย์เก่า | placeholder |
| course-phuket-th | 2 ประเภทคอร์ส, ตาราง 3 คอร์ส, แผนที่ 3 เส้นทาง | placeholder |
| course-hatyai-th | 3 ประเภทคอร์ส, ตาราง 4 คอร์ส, ศิษย์เก่า | placeholder |
| course-bangkok-en | 1 day course, 2 tabs, rules, Google Forms link | placeholder |
| course-saraburi-en | Full 3 course types with timetables | placeholder |
| course-phuket-en | 2 course types, 3 driving routes | placeholder |
| course-hatyai-en | 3 course types with full timetables | placeholder |

**ข้อมูลสำคัญที่ต้นฉบับมีแต่โค้ดไม่มี:**
- ตารางเวลารายชั่วโมงทุกคอร์ส
- ข้อกำหนดอายุผู้สมัคร (16-80, 14-25, 20-80, 20-75 แล้วแต่คอร์ส)
- กฎระเบียบการเข้าอบรม
- ปฏิทิน (Calendar widget)
- ที่พักทางเลือก (The Soul Resort — สระบุรี)
- ค่ารถตู้ (200-500 บาท)
- หอมนสิการ (ค่าเข้าชม 120 บาท)
- เส้นทางการเดินทาง (ภูเก็ต 3 เส้นทาง)
- คอร์สศิษย์เก่าวิปัสสนา 3 วัน (สระบุรี, หาดใหญ่)
- Google Forms สมัครออนไลน์ (กรุงเทพฯ)

---

## 6. ปัญหา i18n / Translation

### 6.1 🟠 Missing i18n key

| Key | ใช้ที่ | ปัญหา |
|:----|:-------|:------|
| `nav.dhammaDesc` | Navbar mega menu | ไม่มีในไฟล์แปล — อาจแสดง key แทนข้อความ |

### 6.2 🟡 Hardcoded text แทนที่จะใช้ i18n

หลายหน้ามีข้อความ hardcode ในไฟล์ route แทนที่จะใช้ระบบ i18n:

| ไฟล์ | ข้อความ hardcoded |
|:-----|:-----------------|
| about-us-th.tsx | "ความหมายของ \"โพธิธรรมญาณ\"", "มูลนิธิที่ดำเนินงาน", "ติดต่อเรา" |
| masterth.tsx | "ชั่วโมงภาวนา:", "ประวัติการปฏิบัติ" |
| placeth.tsx | ชื่อ + คำอธิบายสถานที่ 4 แห่ง ทั้งหมด |
| register-email-th.tsx | "คอร์สอบรมทุกคอร์สดำเนินงานโดยมูลนิธิฯ...", ขั้นตอน 1-4 |
| Footer.tsx | "ติดต่อเรา", "ลิงก์ด่วน", ชื่อธนาคาร |

### 6.3 🟡 seed-posts ไม่มี English content

`seed-posts.ts` มีเฉพาะ title, excerpt, content เป็นภาษาไทย — ไม่มี `titleEn`, `excerptEn`, `contentEn`

ผลกระทบ: หน้า EN ของ dhamma/news/experience จะแสดงหัวข้อภาษาไทยแม้ว่าจะอยู่ในหน้า EN

---

## 7. ปัญหาจากต้นฉบับที่ควรแก้ไข

สิ่งเหล่านี้เป็นปัญหาที่พบในเว็บต้นฉบับเอง — ควรแก้ไขในเวอร์ชันใหม่:

### 7.1 การสะกดชื่อไม่สม่ำเสมอ

| พบที่ | สะกดว่า | ควรเป็น |
|:------|:--------|:--------|
| หลายหน้า EN | Acharavadee Wongsakon | ✅ ถูกต้อง |
| course-hatyai-en | Acharawee Wongsakol | ❌ ผิด |
| บางหน้า | Achravadee Wongsakon | ❌ ผิด |

### 7.2 Typos ในหน้า EN ต้นฉบับ

| Typo | ถูกต้อง | พบในหน้า |
|:-----|:--------|:---------|
| airconditioing | air conditioning | course-saraburi-en, course-phuket-en |
| Accomadation | Accommodation | course-saraburi-en |
| megnatic / megenatic | magnetic | course-saraburi-en, course-hatyai-en |
| MORNIGN SESSION | MORNING SESSION | course-saraburi-en |
| practichigh | practice high | course-en pages |

### 7.3 Thai text รั่วในหน้า EN

| ข้อความ | พบในหน้า |
|:---------|:---------|
| "Age: 16 – 80 ปี" (ปี = year) | course-saraburi-en, course-phuket-en, course-hatyai-en |

### 7.4 บทความซ้ำ

- "Why Meditation Can Cure Depression?" ปรากฏ **2 ครั้ง** ในหน้า dhammaen

### 7.5 AI-generated text รั่ว

- หน้า masteren มีข้อความ: *"Would you like to explore more about her business achievements..."* — เป็นข้อความจาก AI ไม่ใช่เนื้อหาจริง

---

## 8. ตาราง Checklist ทุกหน้า

### หน้า TH

| หน้า | Route | เนื้อหาครบ | หมายเหตุ |
|:-----|:------|:----------|:---------|
| หน้าแรก | /th/hometh | 🟠 90% | ขาด banner events |
| เกี่ยวกับเรา | /th/about-us-th | 🟠 70% | ขาด quote, รางวัล, ปีก่อตั้ง |
| อาจารย์ | /th/masterth | 🟡 85% | ต้องเทียบ bio ละเอียด |
| สถานที่ | /th/placeth | 🟡 80% | ขาด Facebook links, วันเปิด |
| ธรรมคำสอน | /th/dhammath | ✅ 100% | 9 บทความครบ |
| ข่าวสาร | /th/newsth | 🟠 75% | ขาด 3 ข่าว (มิ.ย. 2025) |
| ประสบการณ์ | /th/experience-th | ✅ 100% | 7 รายการครบ |
| คอร์ส กทม | /th/course-bangkok-th | 🔴 0% | Placeholder |
| คอร์ส สระบุรี | /th/course-saraburi-th | 🔴 0% | Placeholder |
| คอร์ส ภูเก็ต | /th/course-phuket-th | 🔴 0% | Placeholder |
| คอร์ส หาดใหญ่ | /th/course-hatyai-th | 🔴 0% | Placeholder |
| สมัครคอร์ส | /th/register-email-th | 🟠 60% | ไม่มีลิงก์ PDF, flow ต่างจากต้นฉบับ |
| ประเภทคอร์ส | /th/type-of-courseand-schedule-th | 🟡 85% | มีเนื้อหาส่วนใหญ่ |

### หน้า EN

| หน้า | Route | เนื้อหาครบ | หมายเหตุ |
|:-----|:------|:----------|:---------|
| Homepage | /en/homeen | 🟠 70% | ขาด 3 sections (Accommodations, Clothing, Forest Monk) + FAQ ขาด 7 ข้อ |
| About Us | /en/about-us-en | 🟠 70% | เหมือน TH version |
| Master | /en/masteren | 🟡 85% | ต้องเทียบ bio |
| Places | /en/placeen | 🟡 80% | เหมือน TH |
| Dhamma | /en/dhammaen | 🔴 30% | EN ต้นฉบับมี 12 บทความคนละชุด, โค้ดแสดงชุด TH |
| News | /en/newsen | 🟠 60% | EN ต้นฉบับแปลจาก TH, โค้ดแสดงหัวข้อ TH |
| Experience | /en/experience-en | 🔴 30% | EN ต้นฉบับมี 12 คนคนละชุด, โค้ดแสดงชุด TH 7 คน |
| Course Bangkok | /en/course-bangkok-en | 🔴 0% | Placeholder |
| Course Saraburi | /en/course-saraburi-en | 🔴 0% | Placeholder |
| Course Phuket | /en/course-phuket-en | 🔴 0% | Placeholder |
| Course Hatyai | /en/course-hatyai-en | 🔴 0% | Placeholder |
| Register | /en/register-email-en | 🟠 60% | flow ต่างจากต้นฉบับ |
| Course Types | /en/type-of-courseand-schedule-en | 🟡 85% | มีเนื้อหาส่วนใหญ่ |

---

## สรุปงานที่ต้องทำ (Priority Order)

### Priority 1 — Critical (🔴)

1. **หน้าคอร์ส 8 routes** — เพิ่มเนื้อหาจริง (ตาราง, กฎ, ข้อมูลติดต่อ) แทน placeholder
2. **แยก seed data EN ออกจาก TH** — สร้าง `seed-posts-en.ts` สำหรับบทความ/ประสบการณ์ EN ที่เป็นคนละชุด
3. **Homepage EN sections** — เพิ่ม AccommodationsSection, ClothingSection, ForestMonkSection

### Priority 2 — Major (🟠)

4. **ข่าวสาร** — เพิ่ม 3 ข่าวที่ขาด (มิ.ย. 2025)
5. **FAQ EN** — เพิ่ม 7 คำถามที่ EN มีเพิ่ม
6. **About Us** — เพิ่ม quote, รางวัล, ปีก่อตั้ง ให้ตรงต้นฉบับ
7. **Register** — เพิ่มลิงก์ PDF ใบสมัคร 4 ประเภท
8. **Banner Events** — เพิ่ม component สำหรับ event highlights บน News section

### Priority 3 — Minor (🟡)

9. **i18n** — เพิ่ม `nav.dhammaDesc`, ย้าย hardcoded text เข้าระบบ i18n
10. **seed-posts** — เพิ่ม `titleEn`, `excerptEn` สำหรับแสดงหัวข้อ EN
11. **Place Page** — เพิ่ม Facebook links, วันที่เปิดอบรม
12. **Navbar** — ปรับลำดับ menu ให้ตรงต้นฉบับ
13. **แก้ typos** — ชื่อ Master สะกดให้สม่ำเสมอ, แก้ spelling errors
