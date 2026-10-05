# WHOOP referral project — operational record

Last reviewed: 2026-10-05. Read this record before making changes or posting.

## Existing production

- Site: https://recovery-wearable-notes.netlify.app/
- Italian page: https://recovery-wearable-notes.netlify.app/it/
- Repository: Domeliba/recovery-wearable-notes, branch main; automatically deployed by Netlify.
- Personal referral: https://join.whoop.com/FC2E68B1
- Google verification and sitemap submission were completed previously. Sitemap was reported successful. Do not repeat setup.
- The latest title/H1 changes and sitemap dates were already committed before this review.
- Search Console is signed out in the available browser. No current performance or coverage numbers have been independently retrieved.
- Do not repeatedly request Google URL indexing. The previous quota error is not evidence that the sitemap or site is broken.

## Confirmed distribution — do not repost

Publicly verified on 2026-10-05, author u/Cashmellow:

| Channel | Existing URL | Status |
| --- | --- | --- |
| r/couponcodes | https://www.reddit.com/r/couponcodes/comments/1wwwbjz/whoop_free_month_referral_october_2026/ | Public post, correct personal link and disclosure |
| r/referralcodes | https://www.reddit.com/r/referralcodes/comments/1wwwb0x/whoop_referral_1_free_month_official_terms/ | Public post, correct personal link and disclosure |

The earlier suggestion to create a post in r/referralcodes was superseded by direct verification that it already exists. Its rules prohibit bots/automation, repeated submissions, thread hijacking and promoting one's own website. Do not automate posts or comments there. Do not insert the landing page into the existing post. Rules: https://www.reddit.com/r/referralcodes/about/rules/

## Channel review and priorities

| Channel | Finding | Action |
| --- | --- | --- |
| Referral.is | https://referral.is/code/whoop explicitly accepts member links and displays them randomly. The personal WHOOP link and code FC2E68B1 were submitted on 2026-10-05; the dashboard confirmed pending review. The public page had not yet displayed the code. | Await moderation; the form indicates 24–48 hours. Check the public page for approval in the existing monitor. Do not submit again or create a duplicate product. Google OAuth returned redirect_uri_mismatch; email login worked. |
| Referrals Buddy | Pricing is free for 30 days with one link, then listing pauses unless upgraded; Member is £5/month. https://referralsbuddy.com/pricing | Lower priority; do not buy membership or Spotlight. Earlier blanket recommendation as a free permanent directory is incorrect for new accounts. |
| Doctor of Credit | https://www.doctorofcredit.com/whoop-referral-codes/ says comments are now closed to prevent abuse. | No submission. |
| Invitation / Refer.guide | Explicitly accepts member referral pages, but the reviewed WHOOP description still advertises $30 off rather than the current official free-month wording. https://invitation.codes/whoop | Secondary candidate; account and accurate listing text required. Do not repeat stale cash-discount claims. |
| Mint Districts | A referral-page builder with save fields was inspected; no public discovery listing was verified. https://mintdistricts.com/ | No confirmed submission; avoid duplicating the existing landing page without an acquisition advantage. |
| r/whoop and generic fitness communities | General product discussion is not blanket permission for referrals. | No unsolicited referral replies. Check the current specific thread and rules before any action. |

## Technical review and changes

Baseline: both pages, robots.txt, sitemap.xml, CSS and config return HTTP 200. Unknown paths return real HTTP 404. Existing canonical and reciprocal hreflang are correct. /it redirects to /it/. /index.html and /it/index.html were duplicates returning 200.

Changes implemented and deployed in this review (commit a2b95b3dd1720697b87f6b808f259175524876c7):

- Keep working static HTML referral links if config fails; do not overwrite them with #.
- Preserve Italian offer text instead of replacing it with English.
- Visible language link on mobile and horizontal padding for the hero.
- Above-fold referral code with accessible copy button, honest signup instructions and billing FAQ.
- Defer scripts and version asset URLs to avoid mixing cached scripts with revised HTML.
- Update checked dates only after verifying the official help page.
- Consolidate explicit index.html URLs into existing canonical pages using narrow 301 redirects.
- Exclude project/source Markdown documents from search results via X-Robots-Tag, without blocking the actual HTML pages.

Validation: live HTML and referral script matched the committed bytes; JavaScript syntax and English/Italian behavior with missing or invalid configuration passed. Both explicit index.html URLs now redirect to their canonical pages. Robots and sitemap return 200; project notes return X-Robots-Tag: noindex. Browser checks confirmed the Italian offer and copy feedback. The official personal signup link recognized the referral identity and free-month offer in the US flow; this does not establish another region's checkout price or a qualified conversion. The repository's IndexNow action completed successfully.

Keep the existing URLs, verification token, referral identity, QR code, sitemap and Netlify connection. Do not run the old sync-from-netlify workflow to overwrite a newer repository change. Do not make wholesale title changes before collecting query data.

## SERP findings and strategy

English referral searches surface official WHOOP pages, indexed Reddit posts, referral directories and focused independent sites such as whoopreferralcode.com and zonefivelabs.com/whoop-referral-code/. This is qualitative search evidence, not measured Google position, traffic or search volume. Some competitor copy overstates free hardware, extra months or checkout savings. Do not imitate unverified claims.

Priorities: maintain the working direct referral, add a free discoverable directory listing, fix conversion friction, then use Search Console query/page data to decide whether more original content is worth creating. Avoid dozens of duplicate country/month coupon pages and paid traffic before evidence of merchant-qualified conversions.

## Measurement

No persistent outbound click analytics are currently configured. A page visit, copy, referral click, Reddit vote or notification of use is not a merchant-qualified referral. Do not infer source attribution from timing alone.

Track separately when data becomes accessible:

1. Search Console: query, page, impressions, clicks, CTR and position over comparable windows; also indexing/coverage.
2. Distribution: listing/post URL, date, allowed placement, status, any directory-supplied clicks.
3. WHOOP: pending uses versus awarded membership credits and renewal-date extension. Use only the user's confirmed account data; do not publish private account details in this public repository.

Use full supported direct WHOOP links in directories. Use campaign parameters on the landing-page URL only when a real analytics collector is available; do not claim that UTMs alone measure referrals. No new paid analytics service has been enabled.

Review weekly, but notify the user only about material findings, verified improvements or an indispensable access step. Do not automate public posting during scheduled monitoring.

The existing daily WHOOP SEO Index Watch includes checking the pending Referral.is listing for approval without resubmission. It was updated on 2026-10-05 to read this record first, check the live technical state, avoid duplicate actions and report material changes only. Its schedule was preserved. The existing referral-offer watch and 30-day review were preserved; no additional recurring task or paid service was created.

## Official offer rules

Source checked 2026-10-05: https://support.whoop.com/s/article/Refer-A-Friend

The official program describes one free month for the new member and one membership month for the referrer after eligibility. Prepaid credits extend renewal; the referring membership must be active and not set to cancel. Retailer purchases and hardware/upgrade fees are excluded; promos do not stack. Confirm each user's final checkout rather than promising a guaranteed extra trial month or cash discount.
