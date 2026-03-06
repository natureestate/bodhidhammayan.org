#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "============================================"
echo "  bodhidhammayan.org — Deploy to Cloudflare"
echo "============================================"
echo ""

# ตรวจสอบว่ามี wrangler ติดตั้งอยู่ไหม
if ! command -v wrangler &>/dev/null && ! pnpm exec wrangler --version &>/dev/null 2>&1; then
  echo "✗  ไม่พบ wrangler CLI"
  echo "   ติดตั้ง: pnpm add -g wrangler"
  echo "   หรือ:   npm install -g wrangler"
  exit 1
fi

# ตรวจสอบว่า login แล้วหรือยัง
if ! pnpm exec wrangler whoami &>/dev/null 2>&1; then
  echo "→  กรุณา login Cloudflare ก่อน..."
  pnpm exec wrangler login
fi

echo "→  กำลัง deploy ขึ้น Cloudflare Workers..."
cd apps/web
pnpm exec wrangler deploy

echo ""
echo "============================================"
echo "  ✓  Deploy สำเร็จ!"
echo "  URL: https://bodhidhammayan.smeandme.workers.dev"
echo "============================================"
