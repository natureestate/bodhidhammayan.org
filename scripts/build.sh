#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "============================================"
echo "  bodhidhammayan.org — Build"
echo "============================================"
echo ""

echo "→  ลบ build artifacts เดิม..."
pnpm clean 2>/dev/null || true

echo ""
echo "→  กำลัง build ทุก packages + apps..."
pnpm build

echo ""
echo "============================================"
echo "  ✓  Build สำเร็จ!"
echo "  Output: apps/web/.output/"
echo "============================================"
