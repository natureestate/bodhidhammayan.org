#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "============================================"
echo "  bodhidhammayan.org — Build & Deploy"
echo "============================================"
echo ""

echo "[ 1/3 ] Build..."
./scripts/build.sh

echo ""
echo "[ 2/3 ] Deploy to Cloudflare..."
./scripts/deploy.sh

echo ""
echo "[ 3/3 ] เสร็จสิ้น!"
echo ""
echo "============================================"
echo "  ✓  Build + Deploy สำเร็จ!"
echo "  Production: https://bodhidhammayan.org"
echo "============================================"
