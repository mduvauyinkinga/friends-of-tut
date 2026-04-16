# Production Deployment Fix Plan - Friends of TUT GitHub Pages

## Steps to Complete:

### 1. [x] Edit .gitignore to remove `dist` line (allow committing dist/)
### 2. [x] Install gh-pages: `npm install gh-pages --save-dev --legacy-peer-deps` (used --legacy-peer-deps)
### 3. [x] Commit changes to .gitignore and package.json (individual git add/commit)
### 5. [x] Deploy: `npm run deploy` complete (but wrong base)
### 6. [x] Fixed base='/friends-of-tut/' in vite.config.ts for subdir deploy
### 7. [x] `npm run build` complete (base='/friends-of-tut/', assets ready)
### 8. [ ] `npm run deploy` running
### 9. [ ] Reload https://mduvauyinkinga.github.io/friends-of-tut/, check Network: /friends-of-tut/assets/index-BCOOcWTl.css 200 OK (wait 1-2 min Pages cache)
### 6. [ ] Verify CSS loads on GitHub Pages
### 4. [x] Build: `npm run build` (generated dist/assets/index-BCOOcWTl.css successfully)
### 5. [ ] Deploy: `npm run deploy` (pushes dist/ to gh-pages branch)
### 3. [ ] Commit changes to .gitignore and package.json
### 4. [ ] Build: `npm run build` (generates dist/ with CSS/JS)
### 5. [ ] Deploy: `npm run deploy` (pushes dist/ to gh-pages branch)
### 6. [ ] Verify on GitHub Pages: Check dev tools for loaded /assets/index-*.css
### 7. [Optional] Update vite.config.ts base to '/friends-of-tut/' if subdir issues, rebuild/deploy

**Progress:** Step 1 complete. Installing gh-pages with --legacy-peer-deps due to dep conflict...
### 2. [ ] Install gh-pages: `npm install gh-pages --save-dev`
### 3. [ ] Commit changes to .gitignore and package.json
### 4. [ ] Build: `npm run build` (generates dist/ with CSS/JS)
### 5. [ ] Deploy: `npm run deploy` (pushes dist/ to gh-pages branch)
### 6. [ ] Verify on GitHub Pages: Check dev tools for loaded /assets/index-*.css
### 7. [ ] [Optional] Update vite.config.ts base to '/friends-of-tut/' if subdir issues, rebuild/deploy

**Progress:** Starting step 1...

**Note:** Since repo is `friends-of-tut` (subdir deploy), base='/' should work for gh-pages branch root. If CSS still 404, set base='/friends-of-tut/'.
