#!/usr/bin/env bash
# deploy.sh — 변경사항 push & 자동 배포
# 사용법:
#   ./deploy.sh "커밋 메시지"
#   ./deploy.sh                ← 메시지 생략 시 자동 생성

set -e

cd "$(dirname "$0")"

MSG="${1:-update $(date +%Y-%m-%d\ %H:%M)}"

if ! git diff --quiet || ! git diff --cached --quiet || [ -n "$(git ls-files --others --exclude-standard)" ]; then
  echo "==> 변경사항 추가"
  git add -A
  echo "==> 커밋: $MSG"
  git commit -m "$MSG"
else
  echo "==> 변경사항 없음. 그래도 push 시도."
fi

echo "==> push"
git push origin main

echo ""
echo "✅ Push 완료. Hostinger webhook이 1~2분 안에 사이트에 반영합니다."
echo "   확인: https://alohasmartsystem.com"
