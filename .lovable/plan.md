# Replace site logo with uploaded sage wordmark

## Goal
Swap the current logo asset for the uploaded sage-green "AVILA'S EL RANCHITO" wordmark, with the background removed so it works cleanly on the site's dark header and footer.

## Plan

1. **Remove the sage background from the uploaded wordmark**
   - Use `imagegen--edit_image` on `user-uploads://image-4.png` with `transparent_background: true` to isolate the cream/off-white text.
   - Save the result to a temp file (e.g., `/mnt/documents/avilas-wordmark-transparent.png`).

2. **Create a Lovable Asset from the transparent PNG**
   - Run `lovable-assets create --file /mnt/documents/avilas-wordmark-transparent.png --filename avilas-wordmark-transparent.png > src/assets/avilas-wordmark-transparent.png.asset.json`.

3. **Wire the new logo into the site**
   - Update `src/lib/site-data.ts` to import the new `.asset.json` pointer and set `site.logo` to its URL.
   - Remove the old `src/assets/avilas-logo-sharp.png.asset.json` import.

4. **Clean up the old asset (optional, only if unreferenced)**
   - After confirming no other file references `avilas-logo-sharp.png.asset.json`, delete the old asset pointer with `lovable-assets delete --file src/assets/avilas-logo-sharp.png.asset.json`.

5. **Verify**
   - Build the project.
   - Capture a preview screenshot of the header and footer to confirm the new transparent wordmark is crisp and readable on the dark background.

## Notes
- The header/footer both use `bg-ink`, so a transparent wordmark with light text will remain legible without needing a colored background badge.
- No layout changes are planned unless the new logo's aspect ratio requires a height adjustment in `SiteHeader.tsx` or `SiteFooter.tsx`.
