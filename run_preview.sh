#!/usr/bin/env bash
# Start the local Jekyll preview with Docker (run inside WSL) and open it in the Windows browser.
# Usage: ./preview.sh          start (or reuse) the preview and open the browser
#        ./preview.sh down     stop the preview
set -euo pipefail

URL="http://localhost:8080"
MAX_WAIT_SECONDS=300

cd "$(dirname "$0")"

if [ "${1:-}" = "down" ]; then
  docker compose down
  exit 0
fi

echo "[1/3] Starting the Jekyll container..."
docker compose up -d

echo "[2/3] Waiting for the site to build (about 1 minute on a fresh start)..."
waited=0
until curl -sf -o /dev/null "$URL/"; do
  if [ -z "$(docker compose ps -q --status running)" ]; then
    echo "ERROR: the container stopped. Last log lines:"
    docker compose logs --tail 30
    exit 1
  fi
  if [ "$waited" -ge "$MAX_WAIT_SECONDS" ]; then
    echo "ERROR: the site did not respond within ${MAX_WAIT_SECONDS}s. Last log lines:"
    docker compose logs --tail 30
    exit 1
  fi
  sleep 5
  waited=$((waited + 5))
  echo "      ...still building (${waited}s)"
done

echo "[3/3] Ready: $URL"
# Open in the default Windows browser (explorer.exe returns a non-zero code even on success)
explorer.exe "$URL" >/dev/null 2>&1 || true

echo
echo "The preview keeps running in the background; edits rebuild automatically."
echo "Watch the build:  docker compose logs -f"
echo "Stop it:          ./preview.sh down"
