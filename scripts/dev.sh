#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "============================================"
echo "  bodhidhammayan.org — Development Server"
echo "============================================"
echo ""

# ตรวจสอบว่า port 3000 ว่างอยู่ไหม
if lsof -ti:3000 &>/dev/null; then
  echo "⚠  Port 3000 กำลังถูกใช้งาน กำลังปิด process เดิม..."
  kill -9 $(lsof -ti:3000) 2>/dev/null || true
  sleep 1
  echo "✓  ปิด process เดิมแล้ว"
fi

echo "→  กำลังเปิด dev server..."
echo "   Web:  http://localhost:3000"
echo "   CMS:  http://localhost:3333"
echo ""
echo "   กด Ctrl+C เพื่อหยุด"
echo ""

pnpm dev
