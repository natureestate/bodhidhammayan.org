#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-3000}"

echo "============================================"
echo "  Restart Port $PORT"
echo "============================================"
echo ""

PIDS=$(lsof -ti:"$PORT" 2>/dev/null || true)

if [ -z "$PIDS" ]; then
  echo "✓  Port $PORT ว่างอยู่แล้ว ไม่มี process ที่ต้องปิด"
else
  echo "→  พบ process ที่ใช้ port $PORT:"
  lsof -i:"$PORT" 2>/dev/null || true
  echo ""
  echo "→  กำลังปิด process..."
  echo "$PIDS" | xargs kill -9 2>/dev/null || true
  sleep 1
  echo "✓  ปิด process สำเร็จ — port $PORT ว่างแล้ว"
fi

echo ""
echo "  การใช้งาน:"
echo "    ./scripts/restart-port.sh        # ปิด port 3000 (default)"
echo "    ./scripts/restart-port.sh 3333   # ปิด port 3333"
echo "    ./scripts/restart-port.sh 8080   # ปิด port ที่ระบุ"
