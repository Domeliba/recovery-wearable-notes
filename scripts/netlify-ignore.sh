#!/usr/bin/env bash
# Netlify: 0 skips this build; 1 continues it.
# Missing cache, unknown refs and manual/no-cache rebuilds must proceed.
if [[ -z "${CACHED_COMMIT_REF:-}" || -z "${COMMIT_REF:-}" ||
      "$CACHED_COMMIT_REF" == "$COMMIT_REF" ]]; then
  exit 1
fi
if ! git cat-file -e "$CACHED_COMMIT_REF^{commit}" 2>/dev/null ||
   ! git cat-file -e "$COMMIT_REF^{commit}" 2>/dev/null; then
  exit 1
fi
if git diff --quiet "$CACHED_COMMIT_REF" "$COMMIT_REF" -- . \
  ':(exclude)README.md' ':(exclude)CONTENT_PACK.md' \
  ':(exclude)PROJECT_STATUS.md' ':(exclude).github/**'; then
  exit 0
fi
exit 1
