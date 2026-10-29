# WHOOP referral project — operational record

Last reviewed: 2026-10-29. Read this record before making changes or posting.

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
| ReferralCodes.com | On 2026-10-06 the public WHOOP page displayed a Domenico listing, linked to the public profile domenicolibardi, with the exact reward and description prefix from the prepared import. It was the first referral row in the observed list; later public web retrieval also displayed it. | Do not submit again: public presence is now verified for this matching listing. The exact outbound code/link and private click counts were not verified; opening its code button was blocked by the browser's URL-protocol policy. Do not work around that blocked action. A position in one observed list is not guaranteed placement or proof of referral attribution. |
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


## Distribution verification and prepared next step — 2026-10-06

- ReferralCodes.com: the live public WHOOP brand page https://referralcodes.com/shop/whoop-referral displayed the matching Domenico entry and public profile link https://referralcodes.com/domenicolibardi. The exact reward is `1 free membership month for eligible new members`, and its visible description starts `Open the official WHOOP invitation before joining ...`, matching the supplied import. A subsequent public web retrieval also included this entry. This supersedes the earlier unverified-submission status and earlier cached results that did not display it. It does not establish who completed the import, the exact stored outbound destination, current click totals, or a merchant-qualified referral. Do not recreate the account or submit a duplicate. No boost was purchased in this work. The code-opening button hit a browser URL-protocol restriction; no workaround was attempted.
- WeWinCodes: a fresh public browser session on https://www.wewincodes.com/community showed zero pending, zero verified and 131 needing review. Neither WHOOP nor FC2E68B1 was present in the complete rendered queue. The original browser submission was confirmed, but independent publication remains unverified; no explicit rejection was observed. Lower its priority until there is evidence of public distribution, and do not resubmit to restore browser-local state.
- InviteHut: a Chrome Web Store page advertised account-free community referral discovery, but its advertised invitehut.com website redirected to www.invitehut.com and rendered an unrelated GLAMOR4D gambling site. Discard this candidate; no referral was entered and no extension was installed. Do not infer current referral functionality from the old extension description.
- ReferralMate: the WHOOP form was prepared at https://www.referralmate.com.au/submit?brandSlug=whoop&returnTo=/brands/whoop with code FC2E68B1, direct URL https://join.whoop.com/FC2E68B1 and this 150-character-limit description: `Eligible new members get 1 free WHOOP membership month. I receive 1 month if the referral qualifies. Check the offer at checkout.` The review step confirmed that a verified account is required, and the account page says the offer details remain in this browser tab. This is a prepared draft only, not a submitted or approved listing. New account creation, new password entry and acceptance of account terms require the user's manual step. Do not count this as distribution until a submission and later public presence are verified. The directory is Australia-facing; do not promise a particular country's checkout price or eligibility beyond WHOOP's confirmation.
- Keep the production site stable: this review found distribution-state changes, not a reason to alter working titles, referral behavior or indexed URLs. Continue separating directory presence and click counts from privately tracked WHOOP outcomes. No private email contents, account results or referred-person identities belong in this record.


## ReferralMate submission and approval — 2026-10-06 to 2026-10-08

- After the user's manual account step on 2026-10-06, the existing submission tab displayed `Referral code submitted successfully` and said the WHOOP submission was sent for review.
- Public approval was independently verified on 2026-10-08 at https://www.referralmate.com.au/brands/whoop: the approved referral list displayed `Shared by domenico`, exact code `FC2E68B1`, the factual one-month offer/disclosure and `Verified 6 Oct 2026`. A fresh public retrieval on 2026-10-09 still showed the exact code, with the page last verified on 7 October and the listing last confirmed on 6 October.
- This supersedes the prior pending-moderation status. Do not submit again, create a duplicate or request another account/login step. Public directory approval proves discoverability of the code, not clicks, source attribution, a qualified WHOOP referral or awarded membership credit.
- No account email, credentials, verification codes or private account identifiers are included here. Directory submission/approval remains separate from privately tracked WHOOP signup notices and membership-credit awards.

## Trial-to-Peak guide — 2026-10-06

- Added a sourced English guide at /whoop-trial-to-peak/ and Italian counterpart at /it/prova-whoop-peak/. Explain the 5.0 trial's retained wired charger, distinct direct-purchase kit, region-dependent 4.0/5.0 allocation and incompatible 4.0 accessories. Based on official WHOOP Trial FAQ, Accessing Membership Information and Upgrades documentation checked today; no invented hands-on comparison or universal price.
- Each homepage links to its matching guide; the guides link back to the relevant referral explanation and disclose the personal referral benefit. Existing signup links, code-copy behavior, homepage titles and established canonical URLs remain intact. Added reciprocal language alternates, Article metadata, sitemap entries and narrow index.html redirects.
- Click measurement review: no configured analytics collector or Netlify connector is present. Current Netlify documentation distinguishes new credit-based plans from legacy plans, where analytics may incur an add-on fee. Account plan and analytics access are unverified. No paid analytics, new accounts, tracking cookies, unverified redirect counters or local-only analytics were enabled. Clicks and qualified referral outcomes remain separate; source attribution is unknown.
- Strategy: target a concrete pre-purchase question with useful documentation instead of more near-identical coupon pages. Existing pending directory submissions should be monitored, not repeated. Assess guide discovery and eventual real click data before expanding topics.

## Publication verification pending — 2026-10-06

- The guide commit a55d17336e24e91d2f0b20ca5616fb5f2fbf92df is on main and passed local HTML metadata, internal-link, referral-destination and sitemap checks. At the live browser check, the Italian guide returned Netlify's Page not found and the Italian homepage still lacked the new guide link. Do not report the guides as published until production renders them.
- GitHub's existing IndexNow job succeeded, but it only submitted the two old homepage URLs and checked the already-live key. Its success is not evidence of this deployment. Extend it to both guide URLs, fail when the guides are not live and inspect the HTTP acceptance status. IndexNow receipt is not indexing.
- The Netlify dashboard in this session is signed out. No deploy settings, account plan or actual Netlify build result can be inferred from this. A current authorized dashboard session is needed to diagnose the automatic GitHub deployment if the production pages remain absent.

## Avoid documentation-only production deploys — 2026-10-06

- Added a minimal netlify.toml with a custom ignore command, preserving dashboard build/publish settings. The Bash script skips continuous-deployment builds only when changes are limited to README.md, CONTENT_PACK.md, PROJECT_STATUS.md and .github workflows.
- HTML, guides, assets, sitemap, redirects, headers and other source/configuration changes still require deployment. Missing or unknown cached Git refs and no-cache/manual rebuilds fail open and proceed.
- Meaningful checks used a temporary Git history: documentation/workflow-only changes skip; new guide, assets plus documentation, missing refs and identical no-cache refs proceed. TOML and Bash parsing passed. Production behavior remains unverified until Netlify resumes publishing; this does not lift a hosting plan limit.
- Keep site edits together in one reviewed release when possible. Source commits and successful IndexNow checks are not evidence of a live production deploy.

## Referral navigation correction — 2026-10-06

- A live browser check of the Italian `Come funziona` anchor showed the sticky header ending at 65px while the section heading began at about 34px: the header obscured the heading. The shared stylesheet now gives sections with IDs an 80px scroll margin. This covers the English `#how` and Italian `#come` anchors without changing referral destinations, copy behavior, offers, titles or page structure.
- Bumped only the stylesheet query version on the two homepages and two prepared guides so a resumed production deployment will not reuse the previous day-cached stylesheet. Do not describe this source correction as live while production deploys are paused.

## Additional directory screening — 2026-10-06

- CouponBind's WHOOP page contains referral-labelled offers, but the live Submit Coupon form marks expiration date and email mandatory and showed no option for an unknown/no expiration date. No submission was made; never invent a date or supply private contact data without specific authorization.
- ClothingRIC's WHOOP page invites coupon contributions, but its Terms of Service restrict automated access without written permission and the page mixes current referral wording with outdated cash-discount claims. No agent submission was attempted. Do not copy its unverified discount claims.
- Promostack explicitly permits disclosed referral links but requires an account to submit; the observed catalog showed 19 codes across brands and no verified WHOOP audience. Benefit.codes is free but also requires an account; a WHOOP placement was not verified. Keep these below the existing pending WHOOP-specific submissions unless new evidence justifies another account. No new account, extension, payment or public post was created in this screening.


## Public search, live-state and distribution review — 2026-10-16

- Repository source: before this review, main still ended at commit `91cbadfc225008f8e5975b60826c2f0e039cfa19`; no newer code change or deploy claim was present.
- Live technical state: the English and Italian homepages render the expected static referral link `https://join.whoop.com/FC2E68B1`, reciprocal canonical/hreflang metadata and the existing one-month disclosure. `robots.txt` and `sitemap.xml` returned HTTP 200; the sitemap still contains the two live homepages. Explicit `index.html` URLs resolve to their canonical paths, and a nonexistent path returned HTTP 404.
- The prepared guides at `/whoop-trial-to-peak/` and `/it/prova-whoop-peak/` still render Netlify's Page not found page, and the live homepages still lack the guide links. This is the already documented paused-deploy state, not a new fault or a verified recovery. Do not resubmit IndexNow or announce publication while these URLs remain unavailable.
- Google public-result checks showed the homepage for `site:recovery-wearable-notes.netlify.app`, for the exact code `FC2E68B1`, and on the observed first result page for `WHOOP referral 2026`. The homepage was not observed on the first page for `WHOOP referral code`, `WHOOP free month` or `codice referral WHOOP`. This is qualitative, session-dependent public visibility—not Search Console data, a stable rank, impressions, clicks or conversion attribution. A Bing public `site:` check did not surface a result in the observed session; this does not prove deindexing.
- The two known Reddit posts remain publicly discoverable. No new concrete question about the offer, eligibility or link operation was found; a comment on the couponcodes post still only shares another user's code and needs no response.
- Referral.is still displayed one public WHOOP listing belonging to another contributor, not `FC2E68B1`. The existing submission remains unpublished/unknown; no explicit rejection was observed. Do not resubmit.
- WeWinCodes' complete rendered public queue still contained neither WHOOP nor `FC2E68B1`, with zero pending and zero verified entries. Publication status remains unknown rather than rejected; do not resubmit.
- ReferralMate still publicly displays `FC2E68B1`; this is the already recorded approval, not a new outcome.

### New Italian directory candidate: CodiceAmico.app

- A public WHOOP page now exists at https://codiceamico.app/whoop, updated 2026-10-16. It explicitly invites users to share a WHOOP referral and currently reports zero verified WHOOP codes, creating a concrete first-listing opportunity for an Italian audience.
- The base listing path redirects to Google sign-in. The site describes the code as free and its price page monetizes optional visibility boosts instead: top position €4.99 for two weeks, paid Karma packs and a €2.99/30-day auto-bump. Do not buy any boost before organic evidence.
- Estimated trade-off: roughly 3–5 minutes once signed in, €0 expected base cost, low content/policy risk because the brand page explicitly requests member codes, and medium account/privacy cost because a Google account is required. Audience size and conversion quality are unverified.
- No account was created, no login was attempted, no referral was submitted and no payment was made. If the user chooses this channel, use one truthful submission with the direct WHOOP link and do not duplicate or pay for ranking.


## Public recheck and directory screening — 2026-10-17

- Repository and production state remained unchanged after the 2026-10-16 record. The English and Italian homepages still expose the exact static referral link `https://join.whoop.com/FC2E68B1`, correct self-canonicals and reciprocal English/Italian/x-default hreflang. `robots.txt` and `sitemap.xml` are reachable; the sitemap still lists only the two live homepages. Explicit `index.html` requests still resolve to the canonical URLs and an unknown path renders Netlify's Page not found response.
- The prepared English and Italian trial-to-Peak guides still render the already known Netlify 404 page, and neither live homepage links to its guide. This is not a new outage or proof that deployment resumed. Do not submit these URLs to IndexNow while they are unavailable.
- Public search evidence was materially unchanged: the homepage remained retrievable for the site domain and exact referral code, while it was not observed among the leading results checked for the generic `WHOOP referral code`, `WHOOP free month` or Italian referral query. A Bing `site:` check again exposed no result in the observed session. These checks are qualitative and do not replace Search Console or establish traffic, clicks, rank stability or attribution.
- Referral.is still showed only the other contributor's public WHOOP listing; no approval or explicit rejection of `FC2E68B1` was observed. WeWinCodes still showed zero pending and zero verified submissions and did not expose WHOOP or the code, so its state remains unknown rather than rejected. ReferralMate still displayed the approved `FC2E68B1` listing. CodiceAmico.app still reported zero verified WHOOP codes. No resubmission was made.
- The two existing Reddit posts remained the only known posts. The observable couponcodes comment still only shared another user's referral code; no concrete question about the offer, eligibility or link operation required a response. The referralcodes page was unavailable to the cloud-browser network during this check, so absence of a new question there was not claimed from that browser.
- ReferralCode.tv surfaced as an additional current WHOOP directory at https://www.referralcode.tv/brand/whoop-referral-codes/. Its public page displayed six verified WHOOP entries and public click counters, providing better evidence of real discovery than an empty directory, but also more competition. The Add Referral Code path redirected to sign-in and account registration. No account, submission, payment or interaction was created. Compared with the already identified CodiceAmico opportunity, this is not clearly superior enough to justify another account yet: keep it as a secondary candidate unless stronger audience or conversion evidence appears.


## Public recheck — 2026-10-20

- Repository main had no newer commit after the 2026-10-17 documentation update before this review; no unverified source or deployment change was assumed.
- Both live homepages rendered normally with the exact static referral destination `https://join.whoop.com/FC2E68B1`, correct self-canonicals and reciprocal English/Italian/x-default hreflang. `robots.txt` and `sitemap.xml` remained reachable, and explicit `index.html` requests still resolved to the canonical homepage paths.
- The two prepared trial-to-Peak guides still rendered Netlify's known Page not found response, while an unrelated missing path did the same. This remains the documented paused-deploy state, not a new outage or a recovery.
- Public search still returned the homepage for the exact code `FC2E68B1` and for a site-specific lookup. It was not observed among the leading results returned in this session for the four generic English/Italian referral queries. Bing's public `site:` query again showed no result. These are qualitative, session-dependent observations and do not establish Search Console coverage, stable positions, clicks, traffic or attribution.
- Referral.is publicly showed a different contributor code, not `FC2E68B1`; no approval or explicit rejection of the existing submission was observed. WeWinCodes still displayed zero pending and zero verified entries and did not expose WHOOP or the code, so its state remains unknown rather than rejected. ReferralMate still displayed the approved `FC2E68B1` listing. CodiceAmico.app still showed zero verified WHOOP codes; no account, submission or paid boost was created.
- Reddit's public pages were blocked to the cloud-browser network during this check, so no claim was made about new comments from that browser. Public search did not surface a new concrete question tied to either documented post. No reply, post, DM or other public interaction was made.
- No materially superior free distribution channel emerged. Existing submissions were not repeated, and no account, payment, analytics service or IndexNow resubmission was created.


## Public recheck — 2026-10-21

- Repository main contained no source change after the 2026-10-20 documentation commit before this review; no new deployment was assumed.
- Both live homepages rendered the expected English/Italian content with self-canonicals, reciprocal `en`/`it`/`x-default` hreflang and two static links each to `https://join.whoop.com/FC2E68B1`. `robots.txt` still allows crawling and points to the reachable sitemap; the sitemap still lists the two published homepages. Explicit `index.html` requests still resolved to the canonical paths.
- The English and Italian trial-to-Peak guide URLs still rendered Netlify's known Page not found response, as did an unrelated missing path. This is the previously documented paused-deploy state, not a new outage or verified recovery.
- A current public search returned the homepage for the exact referral code and site-focused lookups. It was not observed among the leading results returned for the four generic English/Italian referral queries. This is qualitative public search evidence, not Search Console coverage, stable rank, impressions, clicks, traffic or conversion attribution.
- Referral.is still showed only the other contributor's WHOOP code, not `FC2E68B1`; no approval or explicit rejection was observed. WeWinCodes still showed zero pending and zero verified referrals and exposed neither WHOOP nor the code, so its state remains unknown rather than rejected. ReferralMate continued to list the approved `FC2E68B1` code.
- CodiceAmico.app updated its WHOOP page on 2026-10-20 but still reported zero verified codes. This does not materially improve the previously recorded opportunity or justify creating an account automatically. No submission, account, payment, public post, reply, DM or IndexNow request was made.
- Direct retrieval of the two documented Reddit posts was unavailable in the public search/browser environment. A focused public lookup did not surface a new concrete question tied to either post, so no claim of complete comment coverage and no reply was made.

## Public recheck — 2026-10-22

- Repository main contained no commit after the 2026-10-21 documentation-only recheck before this review; no new source change or deployment was assumed.
- Both live homepages rendered the expected English/Italian content with correct self-canonicals, reciprocal `en`/`it`/`x-default` hreflang and two static referral links each to `https://join.whoop.com/FC2E68B1`. `robots.txt` still allows crawling and points to the reachable sitemap; the sitemap still lists only the two published homepages. Explicit `index.html` requests still resolved to the canonical paths.
- Both trial-to-Peak guide URLs still rendered Netlify's known Page not found response, as did an unrelated missing path. This remains the previously documented paused-deploy state, not a new outage or verified recovery.
- Public search still returned the homepage and both existing Reddit posts for the exact code `FC2E68B1`. The site was not observed among the leading results returned for the four generic English/Italian referral queries. These are qualitative public-search observations, not Search Console coverage, stable positions, impressions, clicks, traffic or attribution.
- Referral.is still showed only the other contributor's WHOOP code, not `FC2E68B1`; no approval or explicit rejection was observed. WeWinCodes still showed zero pending and zero verified referrals and exposed neither WHOOP nor the code, so its state remains unknown rather than rejected. ReferralMate continued to show the approved `FC2E68B1` listing. CodiceAmico.app still showed zero verified WHOOP codes.
- Public search exposed no new concrete question on either existing Reddit post: the only visible couponcodes comment remained another user's referral code, while no useful question was shown on the referralcodes post. No reply, post, DM, submission, account, payment or IndexNow request was made.
- No materially superior free distribution opportunity emerged, so existing submissions were not repeated.


## Public recheck — 2026-10-23

- Repository main contained no commit after the 2026-10-22 documentation-only recheck before this review; no source or deployment change was assumed.
- Both live homepages rendered the expected English/Italian content with correct self-canonicals, reciprocal `en`/`it`/`x-default` hreflang and two static referral links each to `https://join.whoop.com/FC2E68B1`. `robots.txt` still allows crawling and points to the reachable sitemap; the sitemap still lists only the two published homepages. Explicit `index.html` requests still resolved to the canonical paths.
- Both trial-to-Peak guide URLs still rendered Netlify's known Page not found response, as did an unrelated missing path. This remains the documented paused-deploy state, not a new outage or verified recovery.
- Public search still returned the homepage for the exact code `FC2E68B1`. The site was not observed among the leading results returned for the four generic English/Italian referral queries checked today. These qualitative public-search observations do not establish Search Console coverage, stable rank, impressions, clicks, traffic or attribution.
- Referral.is still showed only the other contributor's WHOOP code, not `FC2E68B1`; no approval or explicit rejection was observed. WeWinCodes still showed zero pending and zero verified referrals and exposed neither WHOOP nor the code, so its state remains unknown rather than rejected. ReferralMate continued to show the approved `FC2E68B1` listing. CodiceAmico.app still showed zero verified WHOOP codes.
- Direct retrieval of the two documented Reddit posts was blocked by the public browser environment. A focused public lookup did not surface a new concrete question tied to either post, so no claim of complete comment coverage and no reply was made.
- No materially superior free distribution opportunity emerged. No resubmission, account, payment, public post, reply, DM or IndexNow request was made.


## Public recheck — 2026-10-24

- Repository main contained no commit after the 2026-10-23 documentation-only recheck before this review; no source or deployment change was assumed.
- Both live homepages rendered the expected English/Italian content with correct self-canonicals, reciprocal `en`/`it`/`x-default` hreflang and two static referral links each to `https://join.whoop.com/FC2E68B1`. `robots.txt` still allows crawling and points to the reachable sitemap; the sitemap still lists only the two published homepages. Explicit `index.html` requests still resolved to the canonical paths.
- Both trial-to-Peak guide URLs still rendered Netlify's known Page not found response, as did an unrelated missing path. This remains the documented paused-deploy state, not a new outage or verified recovery.
- Public search still returned the homepage and both existing Reddit posts for the exact code `FC2E68B1`. The site was not observed among the leading direct results returned for the four generic English/Italian referral queries; one English result exposed the known referralcodes post only as a related Reddit item. These qualitative observations do not establish Search Console coverage, stable rank, impressions, clicks, traffic or attribution.
- Referral.is still showed only the other contributor's WHOOP code, not `FC2E68B1`; no approval or explicit rejection was observed. WeWinCodes still showed zero pending and zero verified referrals and exposed neither WHOOP nor the code, so its state remains unknown rather than rejected. ReferralMate continued to show the approved `FC2E68B1` listing. CodiceAmico.app still showed zero verified WHOOP codes.
- Public search exposed no new concrete question on either existing Reddit post: the couponcodes comment still only shared another user's referral code, and no useful question was shown on the referralcodes post. No reply, post, DM, submission, account, payment or IndexNow request was made.
- No materially superior free distribution opportunity emerged, so existing submissions were not repeated.


## Public recheck — 2026-10-25

- Repository main contained no commit after the 2026-10-24 documentation-only recheck before this review; no source or deployment change was assumed.
- Both live homepages rendered the expected English/Italian content with correct self-canonicals, reciprocal `en`/`it`/`x-default` hreflang and two static referral links each to `https://join.whoop.com/FC2E68B1`. `robots.txt` still allows crawling and points to the reachable sitemap; the sitemap still lists only the two published homepages. Explicit `index.html` requests still resolved to the canonical paths.
- Both trial-to-Peak guide URLs still rendered Netlify's known Page not found response, as did an unrelated missing path. This remains the documented paused-deploy state, not a new outage or verified recovery.
- Public search still returned the homepage and both existing Reddit posts for the exact code `FC2E68B1`. The site was not observed among the leading direct results returned for the four generic English/Italian referral queries. These qualitative observations do not establish Search Console coverage, stable rank, impressions, clicks, traffic or attribution.
- Referral.is still showed only the other contributor's WHOOP code, not `FC2E68B1`; no approval or explicit rejection was observed. WeWinCodes still showed zero pending and zero verified referrals and exposed neither WHOOP nor the code, so its state remains unknown rather than rejected. ReferralMate continued to show the approved `FC2E68B1` listing. CodiceAmico.app still showed zero verified WHOOP codes.
- Public retrieval exposed no new concrete question on either existing Reddit post: the couponcodes comment still only shared another user's referral code, and no useful question was shown on the referralcodes post. No reply, post, DM, submission, account, payment or IndexNow request was made.
- No materially superior free distribution opportunity emerged, so existing submissions were not repeated.


## Public recheck — 2026-10-26

- Repository main contained no commit after the 2026-10-25 documentation-only recheck before this review; no source or deployment change was assumed.
- Both live homepages rendered the expected English/Italian content with correct self-canonicals, reciprocal `en`/`it`/`x-default` hreflang and two static referral links each to `https://join.whoop.com/FC2E68B1`. `robots.txt` still allows crawling and points to the reachable sitemap; the sitemap still lists only the two published homepages. Explicit `index.html` requests still resolved to the canonical paths.
- Both trial-to-Peak guide URLs still rendered Netlify's known Page not found response, as did an unrelated missing path. This remains the documented paused-deploy state, not a new outage or verified recovery.
- Public search still returned the homepage and both existing Reddit posts for the exact code `FC2E68B1`. The site was not observed among the leading direct results returned for the four generic English/Italian referral queries. These qualitative observations do not establish Search Console coverage, stable rank, impressions, clicks, traffic or attribution.
- Referral.is still showed only the other contributor's WHOOP code, not `FC2E68B1`; no approval or explicit rejection was observed. WeWinCodes still showed zero pending and zero verified referrals and exposed neither WHOOP nor the code, so its state remains unknown rather than rejected. ReferralMate continued to show the approved `FC2E68B1` listing. CodiceAmico.app still showed zero verified WHOOP codes.
- Public retrieval exposed no new concrete question on either existing Reddit post: the couponcodes comment still only shared another user's referral code, and no useful question was shown on the referralcodes post. No reply, post, DM, submission, account, payment or IndexNow request was made.
- No materially superior free distribution opportunity emerged, so existing submissions were not repeated.


## Public recheck — 2026-10-27

- Repository main contained no commit after the 2026-10-26 documentation-only recheck before this review; no source or deployment change was assumed.
- Both live homepages rendered the expected English/Italian content with correct self-canonicals, reciprocal `en`/`it`/`x-default` hreflang and two static referral links each to `https://join.whoop.com/FC2E68B1`. `robots.txt` still allows crawling and points to the reachable sitemap; the sitemap still lists only the two published homepages. Explicit `index.html` requests still resolved to the canonical paths.
- Both trial-to-Peak guide URLs still rendered Netlify's known Page not found response, as did an unrelated missing path. This remains the documented paused-deploy state, not a new outage or verified recovery.
- A current public exact-code lookup returned the homepage for `FC2E68B1`. The site was not observed among the leading direct results returned for the four generic English/Italian referral queries. These qualitative observations do not establish Search Console coverage, stable rank, impressions, clicks, traffic or attribution.
- Referral.is still showed only the other contributor's WHOOP code, not `FC2E68B1`; no approval or explicit rejection was observed. WeWinCodes still showed zero pending and zero verified referrals and exposed neither WHOOP nor the code, so its state remains unknown rather than rejected. ReferralMate continued to show the approved `FC2E68B1` listing. CodiceAmico.app still showed zero verified WHOOP codes.
- Direct retrieval of the two documented Reddit posts was blocked by the public browser environment. A focused public lookup did not surface a new concrete question tied to either post, so no claim of complete comment coverage and no reply was made.
- No materially superior free distribution opportunity emerged. No resubmission, account, payment, public post, reply, DM or IndexNow request was made.


## Public recheck — 2026-10-28

- The repository default branch contained no source or deployment commit after the 2026-10-27 documentation-only review, so no completed implementation work was repeated.
- The live English and Italian homepages still rendered their expected localized content. Their self-canonicals, reciprocal `en`/`it` plus `x-default` hreflang annotations, and two exact static `https://join.whoop.com/FC2E68B1` links per page remained present. `/index.html` and `/it/index.html` continued to resolve to the clean homepage URLs.
- `robots.txt` still allowed crawling and referenced the sitemap. `sitemap.xml` still listed only the two homepage URLs with the known 2026-10-05 last-modified date. The two trial-to-Peak guide URLs still showed the already-known Netlify not-found page, so the paused-deploy block has not recovered; there was no new homepage outage or new technical regression.
- A fresh exact-code search returned both the English and Italian project pages, and site-focused searches for the monitored English and Italian referral phrases returned the corresponding localized page. This is public search-result evidence only: it is not Search Console data and does not establish rank, impressions, clicks, conversions, or referral attribution. Broad monitored-query results remained competitive and did not provide a defensible material ranking improvement.
- Referral.is still publicly listed only the previously observed third-party code `13AC82`; there was no public approval or explicit rejection for `FC2E68B1`. ReferralMate still showed the already-known approved `FC2E68B1` listing, last confirmed 2026-10-06. CodiceAmico still showed zero verified WHOOP codes. WeWinCodes still showed zero verified and zero pending entries, with no public WHOOP/`FC2E68B1` entry; the submission therefore remains unknown rather than rejected. No resubmission was made.
- The two existing Reddit posts remained publicly available. The focused public pages showed no concrete question about the offer, link operation, or eligibility; the couponcodes post still contained only another user's promotional code. No reply, post, direct message, report, or other public interaction was made.
- No newly evidenced free distribution channel was materially superior to the already documented options. No account was created, no paid service was used, no directory submission was made, and no IndexNow or deployment action was repeated.


## Public recheck — 2026-10-29

- The repository default branch contained no source or deployment commit after the 2026-10-28 documentation-only review, so no completed implementation work was repeated.
- Fresh HTTP checks returned `200` for the English homepage, Italian homepage, `robots.txt`, and `sitemap.xml`. Both guide URLs still returned the already-known `404`, so the paused-deploy block has not recovered and there was no new outage.
- The localized homepages retained their expected titles and content, self-canonicals, reciprocal `en`/`it` plus `x-default` hreflang annotations, and two exact static `https://join.whoop.com/FC2E68B1` links each. `/index.html` and `/it/index.html` continued to resolve to the clean homepage URLs.
- `robots.txt` continued to allow crawling and reference the sitemap. `sitemap.xml` still listed only the English and Italian homepages with the known 2026-10-05 last-modified date.
- Fresh broad and site-focused public searches continued to return the localized project pages for the exact code and relevant English/Italian referral phrases. This is public search-result evidence only: it is not Search Console data and does not establish stable ranking, impressions, clicks, conversions, or referral attribution. No defensible material improvement or loss was observed for the monitored generic queries.
- Referral.is still publicly listed only the previously observed third-party code `13AC82`; there was no public approval or explicit rejection for `FC2E68B1`. ReferralMate still showed the already-known approved `FC2E68B1` listing, last confirmed 2026-10-06. CodiceAmico remained at zero verified WHOOP codes.
- WeWinCodes now showed zero verified, zero pending, and zero needs-vouching entries, with an empty public queue and no WHOOP/`FC2E68B1` entry. Because the platform provided no rejection notice and the whole queue appeared empty, the prior submission remains unknown rather than rejected. No resubmission was made.
- The two existing Reddit posts remained publicly available. The public pages showed no concrete new question about the offer, link operation, or eligibility; the couponcodes post still contained only another user's promotional code. No reply, post, direct message, report, or other public interaction was made.
- No newly evidenced free distribution channel was materially superior to the documented options. No account was created, no paid service was used, no directory submission was made, and no IndexNow or deployment action was repeated.
