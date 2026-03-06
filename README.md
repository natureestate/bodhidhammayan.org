# โพธิธรรมญาณสถานเตชะชัยสิทธิ — bodhidhammayan.org

เว็บไซต์ทางการของ **โพธิธรรมญาณสถานเตชะชัยสิทธิ** สร้างด้วยสถาปัตยกรรม Monorepo แบบ Type-Safe ตั้งแต่ต้นจนจบ

**Production:** [https://bodhidhammayan.org](https://bodhidhammayan.org)

---

## Tech Stack

| Layer | Technology | Version |
|:------|:-----------|:--------|
| Framework | [TanStack Start](https://tanstack.com/start) (Vite-based SSR) | v1.166+ |
| Routing | [TanStack Router](https://tanstack.com/router) — File-based, Type-safe | v1.166+ |
| Data Fetching | [TanStack Query](https://tanstack.com/query) | v5.67+ |
| UI Components | [Radix UI](https://radix-ui.com) + [Tailwind CSS v4](https://tailwindcss.com) | v4.1+ |
| Animation | [Framer Motion](https://motion.dev) | v12+ |
| Icons | [Lucide React](https://lucide.dev) | v0.477+ |
| CMS | [Sanity Studio v3](https://sanity.io) | v3.77+ |
| Validation | [Zod](https://zod.dev) | v3.24+ |
| Deployment | [Cloudflare Pages](https://pages.cloudflare.com) (Edge Runtime) | - |
| Monorepo | [Turborepo](https://turbo.build) + [pnpm](https://pnpm.io) | Turbo v2.4+ |
| Language | TypeScript (strict mode) | v5.8+ |
| Runtime | Node.js | >= 20 |

---

## โครงสร้าง Monorepo

```
bodhidhammayan.org/
├── apps/
│   ├── web/                          # เว็บไซต์หลัก (TanStack Start + Cloudflare Pages)
│   │   ├── src/
│   │   │   ├── routes/               # File-based routes ($lang/hometh, $lang/homeen, ...)
│   │   │   ├── components/           # UI components (sections/, ui/)
│   │   │   ├── data/                 # Seed data (books, posts)
│   │   │   ├── client.tsx            # Client entry
│   │   │   ├── ssr.tsx               # Server entry (SSR)
│   │   │   └── global.css            # Tailwind v4 theme + brand tokens
│   │   ├── public/images/            # Static assets
│   │   ├── app.config.ts             # TanStack Start config
│   │   ├── vite.config.ts            # Vite + Cloudflare plugin
│   │   └── wrangler.json             # Cloudflare Workers config
│   │
│   └── cms/                          # Sanity Studio — จัดการเนื้อหา
│       └── schemas/                  # Content schemas (post, book, course, location, faq, ...)
│
├── packages/
│   ├── api-client/                   # Sanity client, GROQ queries, Zod schemas, i18n
│   ├── design-system/                # Shared Tailwind config + design tokens
│   └── ts-config/                    # Shared TypeScript configs (base, react)
│
├── scripts/                          # Scripts สำหรับ dev, build, deploy, restart
├── turbo.json                        # Turborepo pipeline config
├── pnpm-workspace.yaml               # Monorepo workspace definition
└── package.json                      # Root scripts + dependencies
```

---

## เริ่มต้นใช้งาน

### ความต้องการเบื้องต้น

- **Node.js** >= 20
- **pnpm** >= 9.15 (`corepack enable && corepack prepare pnpm@9.15.4 --activate`)
- **Wrangler CLI** (`pnpm add -g wrangler`) — สำหรับ deploy Cloudflare

### ติดตั้ง Dependencies

```bash
pnpm install
```

### ตั้งค่า Environment Variables

```bash
# apps/web
cp apps/web/.env.example apps/web/.env

# apps/cms
cp apps/cms/.env.example apps/cms/.env
```

แก้ไขค่าใน `.env` ตาม Sanity project ของคุณ:

```
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
```

---

## Scripts สำเร็จรูป

### วิธีที่ 1: ใช้ Shell Scripts (แนะนำ)

```bash
# ให้สิทธิ์ execute ครั้งแรกครั้งเดียว
chmod +x scripts/*.sh

# เปิด dev server
./scripts/dev.sh

# Build project
./scripts/build.sh

# Deploy ขึ้น Cloudflare Pages
./scripts/deploy.sh

# Restart port (กรณี port ค้าง)
./scripts/restart-port.sh

# ทำทุกอย่าง: build + deploy + เปิด production URL
./scripts/build-and-deploy.sh
```

### วิธีที่ 2: ใช้ pnpm/turbo โดยตรง

```bash
# Development (ทั้ง web + cms พร้อมกัน)
pnpm dev

# Build ทุก packages + apps
pnpm build

# Build เฉพาะ web
pnpm --filter @bodhidhammayan/web build

# Type check
pnpm type-check

# Lint
pnpm lint

# ลบ build artifacts
pnpm clean
```

---

## Development

### เปิด Dev Server

```bash
pnpm dev
```

จะเปิดพร้อมกัน:
- **Web** → http://localhost:3000
- **CMS** → http://localhost:3333 (Sanity Studio)

### เปิดเฉพาะ Web

```bash
pnpm --filter @bodhidhammayan/web dev
```

### เปิดเฉพาะ CMS

```bash
pnpm --filter @bodhidhammayan/cms dev
```

---

## Routes (เส้นทางหน้าเว็บ)

เว็บรองรับ 2 ภาษา (ไทย/อังกฤษ) ผ่าน dynamic `$lang` parameter:

| เส้นทาง | หน้า |
|:--------|:-----|
| `/th/hometh` | หน้าแรก (ไทย) |
| `/en/homeen` | หน้าแรก (English) |
| `/th/about-us-th` | เกี่ยวกับเรา |
| `/th/masterth` | อาจารย์ผู้สอน |
| `/th/placeth` | สถานปฏิบัติธรรม |
| `/th/dhammath` | ธรรมคำสอน |
| `/th/newsth` | ข่าวสาร |
| `/th/experience-th` | ประสบการณ์ผู้ปฏิบัติ |
| `/th/course-*-th` | คอร์สตามสถานที่ (bangkok, phuket, hatyai, saraburi) |
| `/th/register-email-th` | ลงทะเบียนอีเมล |
| `/:lang/:slug` | หน้าบทความแบบ dynamic |
| `/sitemap.xml` | Sitemap สำหรับ SEO |

---

## Build & Deploy

### Build สำหรับ Production

```bash
pnpm build
```

Output จะอยู่ที่ `apps/web/.output/`

### Deploy ขึ้น Cloudflare Pages

```bash
# วิธีที่ 1: ใช้ script
./scripts/deploy.sh

# วิธีที่ 2: manual
cd apps/web
pnpm exec wrangler pages deploy .output
```

### Deploy Sanity Studio

```bash
cd apps/cms
pnpm deploy
```

---

## Cloudflare Configuration

ไฟล์ `apps/web/wrangler.json`:

```json
{
  "name": "bodhidhammayan",
  "compatibility_date": "2026-03-06",
  "compatibility_flags": ["nodejs_compat"],
  "main": "@tanstack/react-start/server-entry",
  "observability": { "enabled": true }
}
```

- ใช้ **Cloudflare Pages** + **Workers** (Edge Runtime)
- preset: `cloudflare-pages` ผ่าน TanStack Start
- เปิด `nodejs_compat` สำหรับ compatibility
- เปิด `observability` สำหรับ logging/tracing

---

## Packages ภายใน Monorepo

### `@bodhidhammayan/api-client`

Shared data layer สำหรับดึงข้อมูลจาก Sanity CMS:

```typescript
import { t } from "@bodhidhammayan/api-client";           // i18n
import { postSchema } from "@bodhidhammayan/api-client/schemas";  // Zod schemas
import { sanityClient } from "@bodhidhammayan/api-client/sanity"; // GROQ client
```

### `@bodhidhammayan/design-system`

Shared design tokens และ Tailwind configuration:

- Brand colors: Gold, Dharma, Nature palettes
- Fonts: IBM Plex Sans Thai, Inter
- ใช้ร่วมกันระหว่าง Web และ apps อื่นๆ ในอนาคต

### `@bodhidhammayan/ts-config`

Shared TypeScript configs:
- `base.json` — strict mode, ESNext, noUncheckedIndexedAccess
- `react.json` — extends base + JSX, DOM libs

---

## กฎการเขียน Code (Coding Protocols)

1. **Edge Compatible** — ห้ามใช้ Node.js native APIs (fs, path) บนฝั่ง web เพราะรันบน Cloudflare Edge
2. **Shared Types** — Type ที่เกี่ยวกับ CMS data ต้องอยู่ใน `packages/api-client` เท่านั้น
3. **Type-Safe Links** — ใช้ `<Link to="...">` จาก TanStack Router เท่านั้น ห้ามใช้ `<a href>`
4. **Zod Validation** — ทุก input/output ต้องผ่าน Zod validation ห้ามใช้ `any`
5. **Component Size** — แยก component ทันทีถ้า logic เกิน 50 บรรทัด หรือไฟล์เกิน 100 บรรทัด
6. **Suspense Boundary** — component ที่ดึงข้อมูลช้าต้องหุ้มด้วย `<Suspense>` + Error Boundary

---

## License

Private — สงวนลิขสิทธิ์โดย โพธิธรรมญาณสถานเตชะชัยสิทธิ
