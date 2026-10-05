# WHOOP referral project — operational record

Last reviewed: 2026-10-05. Read this record before making changes or posting.

## Existing production

- Site: https://recovery-wearable-notes.netlify.app/
- Italian page: https://recovery-wearable-notes.netlify.app/it/
- Repository: Domeliba/recovery-wearable-notes, branch main; automatically deployed by Netlify.
- Personal referral: https://join.whoop.com/FC2E68B1
- Google verification and sitemap submission were completed previously. Sitemap was reported successful. Do not repeat setup.
- The latest title/H1 changes and sitemap dates were already committed before this review.
- Search Console access is unavailable in the current browser. The user requested alternative methods after it failed to load. No current performance or coverage numbers have been independently retrieved. Continue public checks and permitted distribution without requiring another Google sign-in; do not repeat the failed access flow unless requested.
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
| ReferralCodes.com | https://referralcodes.com/shop/whoop-referral explicitly accepts personal WHOOP links. Its FAQ https://referralcodes.com/faq/ describes a permanently free basic profile, moderation, one link per merchant and click counts; boosts are optional paid services. The browser's Share Your Whoop Referral opened a free-account signup prompt. | Next free listing candidate; legitimate verified account needed. No submission yet. Use the direct personal WHOOP link, compare actual clicks later, and do not resubmit to gain freshness. |
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

Priorities after the first fixes and Referral.is submission: track merchant outcome notices privately, await the pending listing, and test one more free discoverable directory (ReferralCodes.com). Search Console is a useful optional data source when accessible, not a blocker for these actions. Use actual query/page and click data when available to decide whether more original content is worth creating. Avoid dozens of duplicate country/month coupon pages and paid traffic before evidence of merchant-qualified conversions.

## Measurement

No persistent outbound click analytics are currently configured. Search Console remains an access-dependent priority: retrieve available query and page data before claiming measured SEO progress or making more title changes. Directory click counters can help evaluate distribution but cannot prove qualified WHOOP referrals. Provider emails can confirm a signup notice and, separately, a later credit award; read the full terms in each notification rather than treating its congratulatory subject as an awarded credit. Keep all email contents, identities and account outcomes out of this public record. A page visit, copy, referral click, Reddit vote or notification of use is not a merchant-qualified referral. Do not infer source attribution from timing alone.

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

## Next experiments after the initial setup

- First establish a baseline of search visibility, site clicks and confirmed WHOOP credits; do not estimate conversion probabilities without it.
- Let each new legitimate listing be reviewed before submitting another copy. Compare its clicks and status over meaningful windows, while keeping the WHOOP credit outcome separate.
- For original content, prefer a specific firsthand WHOOP experience or a real search question supported by data; obtain missing personal observations instead of inventing them. Avoid generic AI reviews, repeated coupon pages and daily title rewrites.
- A truthful link in the user's own existing permitted bio or a recommendation to someone already interested may be useful, but do not send unsolicited messages or change unspecified profiles.
- Start with the first verified qualified referral, then concentrate effort on channels with evidence of results. The existing monitor and 30-day review provide follow-up without extra scheduled tasks or costs.

## Alternative workflow while Google access is unavailable

- On 2026-10-05 a public site-specific search returned the English homepage. This is evidence of public discoverability in that search service, not exact Google rank, Search Console coverage, impressions or traffic.
- The existing WHOOP Referral Watch now also checks relevant WHOOP referral/credit email notices privately, distinguishes conditional signup notices from awarded months, and suppresses notifications for previously known notices. Its schedule and official-offer monitoring were preserved.
- ReferralCodes.com explicitly supports agent-assisted JSON imports at https://referralcodes.com/agents. Its documented fields are shop, discount, url, code and description; all submissions still require a legitimate member account and moderation. A single accurate WHOOP import was prepared, but no account or new listing has been created there. Do not install an external MCP client or broaden account permissions just to submit one link.
- Anonymous coupon submission pages were investigated, but no additional WHOOP placement with explicit permission and a completed submission was established. Mint Districts saves codes in the browser, so local saving is not evidence of public distribution.
- Preserve the live titles and working referral while attribution is unknown. Do not replace missing analytics with invented estimates or repeatedly gate the project on Google login.

## Coupon extensions — verified policy review, 2026-10-05

- Coupert has public WHOOP coupon pages displaying eight-character codes and describing the WHOOP referral scheme. Their presence alone does not establish permission for a new personal referral submission. The current official submission guide says submitted coupons must be publicly available and authorized for general use, and rejects private, personalized or unauthorized codes: https://help.coupert.com/getting-started-core-functionality/store-support/submitting-a-coupon-code-on-coupert/. The global submission form was inspected, but no code was entered or submitted. Do not submit the personal WHOOP code without explicit clarification that reusable personal referral codes are accepted under this policy.
- Coupert's status guide says approved codes enter its database for testing and appear publicly after other shoppers successfully save: https://help.coupert.com/getting-started-core-functionality/store-support/checking-the-status-of-your-submitted-promotion/. The WHOOP page describes comparison by savings; no controllable or guaranteed first position was established. Do not simulate votes, savings, transactions or usage, or invent a larger discount.
- Wanteeed's documented visibility path is directed at merchant partners and exclusive coupons/cashback: https://wanteeed.com/en/info/partners. No permitted member-submission path for personal WHOOP referrals was verified. Do not impersonate WHOOP or contact people without explicit communication authorization.
- ReferralCodes.com already remains the applicable free referral channel and operates the Referral Codes Reminder extension. Its official FAQ says the extension alerts shoppers at stores with referral offers and prioritizes people they follow: https://referralcodes.com/faq/. Shop-page ranking also considers fresh legitimate entries and real success thanks; paid boosts are optional. An approved listing can therefore be relevant to extension discovery, but inclusion and first placement of this specific code have not been independently verified. Use a single accurate approved listing and real organic followers/feedback; do not resubmit for freshness or buy boosts without conversion evidence.
- Keep extension recommendation/click/savings counters distinct from merchant-qualified WHOOP membership credits. Existing public titles and site behavior need no change for this finding.

## Additional distribution attempt — 2026-10-05

- WeWinCodes explicitly accepts community referral submissions without an account at https://www.wewincodes.com/contribute. One submission was completed with https://join.whoop.com/FC2E68B1, a factual one-month new-member offer, the referrer's conditional one-month benefit and the official WHOOP help URL. No email address, password or other private account data was provided.
- The form confirmed Pending Review. Its browser queue at https://www.wewincodes.com/community?highlight=sub_1791233753357 displayed the submitted offer under Other, because WHOOP was not a dropdown option. The notes identify WHOOP and the exact code. Independent visibility to other visitors and eventual publication were not verified; the external read of that state URL failed. Do not treat a browser queue item as an approved distribution placement or infer referrals. Do not submit again.
- The existing WHOOP SEO Index Watch now checks this queue for a verified approval/rejection and independent presence of the code/link. Missing or inaccessible state is unknown, not a rejection. No additional scheduled task was created.
- ReferralMate at https://www.referralmate.com.au/brands/whoop explicitly accepts WHOOP referral codes and the terms do not require impersonating a merchant. The public page had one contributor. The submission path requires a legitimate verified account before final submission: https://www.referralmate.com.au/submit?brandSlug=whoop&returnTo=/brands/whoop. No account or submission was created there. Australia-facing eligibility must be confirmed before a claim about a particular checkout benefit.
- Share My Link at https://sharemylink.co.uk/offer/whoop displayed three contributor links and an Add My Link button. Its page is UK-facing. The browser interaction could not continue because of native credential observation protection; this is not evidence of a site outage or bot rejection. No code was submitted. Account and country requirements remain unverified.
- The site still has no durable outbound click collector. Do not add local-only counters or redirect wrappers and present them as measured traffic. Directory counters, when accessible, and private merchant outcome notices remain distinct sources of evidence. No additional site code, paid service, analytics account or public Reddit post was added in this distribution attempt.
