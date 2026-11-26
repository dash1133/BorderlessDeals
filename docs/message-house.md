# Borderless Deals: message house (home page, v3, global buyer)

v3 rewrites v2 for a **global buyer**: a buyer can be in any country. There are no references to a single launch corridor or a single country of buyer. Memo page references are given in brackets.

## Core message (never changes)

**Sell to the world.**
**AI-enabled platform for cross-border M&A.**

Support line, used once in the hero:
> Borderless Deals puts US companies in front of qualified buyers anywhere in the world and carries each deal from anonymous teaser to closing. Brokers bring the companies. AI agents do the legwork. People make every decision.

## Discipline rules

1. **One reader:** the sell side, meaning US owners and the brokers who represent them. Buyers, PE and providers get one link each to their own pages.
2. **One claim per section,** in the order a seller asks the questions: *Why abroad? → Who can buy, and do I control who sees me? → Why doesn't it happen now? → How does Borderless do it? → What does the AI do? → How do buyers find me? → Is it confidential? → Will the deal hold? → Who does the cross-border work? → What does it cost my broker? → Objections → Act.*
3. **Every headline ladders up to "Sell to the world."**
4. **Every number comes from the memo, verbatim, with its source named.** Nothing is presented as live before launch: say "launching", not "now live".
5. **Buyers are global.** Never name a single launch country or corridor. Country examples, where needed, come from the memo: Japan, Europe, the Middle East.
6. **Fixed vocabulary:**

| Use | Don't use |
|---|---|
| AI agent (first mention per section), then agent | bot, assistant, copilot, principal |
| broker / sell-side broker / buy-side broker | adviser, intermediary (use "specialist" or "provider" for service firms) |
| buyer | acquirer |
| anonymous teaser | listing, ticker |
| company page | wiki, profile |
| deal room; "data room" only for the third disclosure tier | workspace |
| buyers abroad / buyers worldwide | a named launch country |
| at launch | Horizon 1 / 2 / 3 |
| closing | exit (except PE) |

7. **Banned claims:**
   - guaranteed outcomes;
   - the platform is a broker;
   - any success fee or percentage of the deal;
   - "never competes" (use "does not compete with you for clients");
   - testimonials or logos;
   - invented figures, scores, ratings, prices or timestamps.

## Rules for every visual

1. **No headline inside the image.** The HTML H2 above each GIF carries the message, so the GIF shows the mechanism only and the headline never appears twice.
2. **One cast:**
   - **Seller:** "a US company, via its sell-side broker" (Ohio).
   - **Buyer:** "a buyer abroad, via a buy-side broker". No country is named on buyer cards. Map scenes show buyers on several continents: Europe, the Middle East, Japan, Latin America and Australia.
   - Language examples: English → Español → 日本語 → Deutsch.
   - Codenames such as "Project Falcon" carry a visible *Illustrative* tag.
   - No scores, fit percentages, ratings, prices, durations, timestamps or financials.
3. **Legibility:**
   - At most about 25 words in the final frame.
   - Message text is 22px or larger on the 800×500 canvas; secondary text is 16px or larger, or cut.
   - No rotated text.
4. **Timing:**
   - The claim is readable by 3s, and the final state holds for at least 2.5s.
   - No count-ups or tweens that pass through wrong values.
5. **Colours:** seller saffron, buyer blue, broker teal, provider violet. An AI agent uses the blue→saffron gradient hexagon (`.agent.ai`).

---

## Sections

### S1 · Hero
- **Eyebrow:** For US companies and the brokers who sell them
- **H1:** Sell to the world.
- **Category line:** AI-enabled platform for cross-border M&A.
- **Support:** the support line above.
- **CTAs:** [List a mandate] (for brokers) · [Find companies to buy]
- **Owner link:** Selling your own company? At launch you sell through a broker on Borderless Deals →
- **Assurance line:** Free seat for founding brokers · You keep your client and your fee · No percentage of the deal
- **Visual, `hero-corridor`:**
  1. An Ohio company's anonymous teaser fans out along arcs to buyers in Europe, the Middle East and Japan.
  2. A buyer abroad responds, and the chip "AI agents confirm fit" appears.
  3. The chip "KYC passed · broker approves" appears.
  4. The card "NDA signed · names revealed" appears by about 4.5s, then holds.

### S2 · Opportunity
- **Claim:** foreign buyers already spend heavily on US companies.
- **Eyebrow:** The opportunity
- **H2:** Your next buyer may not be in the US.
- **Body:** Foreign buyers already spend heavily on US companies, mostly in large deals. They can value market entry, technology or capacity differently from a domestic buyer, and more bidders means more competition for your company.
- **Proof:**
  - Non-US buyers bought just over $500B of US companies in 2025, up 35% by value (Ropes & Gray).
  - Japanese buyers alone deployed more than $100B into North America in 2025, alongside significant Middle Eastern sovereign investment (Morrison Foerster).
  - Over 1 million viable US small businesses will need buyers by 2035, worth up to about $5T (McKinsey).
- **Visual, `opportunity`:**
  - "US sellers: 1M+ (McKinsey)" connects by an arc to "Foreign buyers: $500B+ (Ropes & Gray) · $100B+ from Japan alone (Morrison Foerster)".
  - Values fade in (no count-up).

### S3 · Global reach, your control
- **Claim:** qualified buyers in any country can find your company, and you choose how far it reaches.
- **Eyebrow:** Buyers worldwide
- **H2:** Reach buyers in any country. You choose which ones.
- **Body:** Borderless Deals is open to qualified buyers worldwide: established corporate development teams, PE funds, and buy-side brokers acting for clients. Each mandate can be visible worldwide, in selected countries, or to domestic buyers only, and brokers run domestic and cross-border mandates in one system.
- **Visual, `global-buyers`:**
  - A world map with arcs from Ohio to buyers on several continents.
  - A visibility switch cycles: Worldwide → Selected countries → Domestic only, and the arcs change to match.
  - Card: "Buyers: corporate development teams · PE funds · buy-side brokers".

### S4 · Problem
- **Claim:** most companies only ever meet domestic buyers, because of missing information and complexity.
- **Eyebrow:** The problem
- **H2:** Most companies only ever meet domestic buyers.
- **Body:** Cross-border deals are hard to find and hard to finish. Big companies have banks with global desks. Mid-market owners and their local brokers do not. What holds these deals back is missing information and complexity, not a lack of money.
- **Proof:**
  - Deals above $1B make up about 76% of cross-border deal value (Oliver Wyman).
  - Cross-border deals fell from about 50% of global deal value in 2007 to about 30% today (BCG).
- **Visual, `barriers`:** six horizontal walls between a US seller and a buyer abroad: *Discovery · Information and language · Regulation · Trust · Execution cost · Local reach*. Problem only. End chip: "Out of reach today".

### S5 · Platform
- **Claim:** one platform carries your company from anonymous teaser to closing.
- **Eyebrow:** How it works
- **H2:** One platform, from anonymous teaser to closing.
- **Pillars:**
  1. **Be on the map:** your company sits in one directory with buyers, brokers, PE funds and service providers worldwide ("LinkedIn for companies").
  2. **Be found:** buyers' AI agents match against your anonymous teaser, and your agent builds a list of buyers who fit.
  3. **Close:** hire legal, tax, valuation, financing and accounting providers, and run LOI, due diligence, SPA and closing in one deal room ("Upwork for deal services").
- **Visual, `pillars`:** three tabs: Be on the map → Be found → Close. No scores or ratings. Ends on the deal room: LOI → due diligence → SPA → closing.

### S6 · AI agents
- **Claim:** your broker works with an AI agent that answers buyers abroad, and people decide.
- **Eyebrow:** AI-enabled
- **H2:** Your broker, plus an AI agent that answers buyers abroad in their own language.
- **Body:** Your broker works with an AI agent. It drafts your company page and anonymous teaser from your documents, answers buyers' agents only from information you have approved, in the buyer's language, and handles the follow-ups that slow deals down. Price, terms and anything binding always go to a person.
- **Points:** Answers only from approved information · In the buyer's language · Anything binding goes to a person
- **Visual, `agent-wiki`, the company page:**
  1. The "(Illustrative)" company page cycles EN → Español → 日本語 → Deutsch.
  2. A buyer abroad's AI agent asks a question; the answer appears, tagged "From approved information".
  3. "Price or terms? → goes to your broker".

### S7 · Reach
- **Claim:** buyers come to your anonymous teaser; nobody cold-emails on your behalf.
- **Eyebrow:** Reach
- **H2:** Buyers abroad find your teaser where they already search.
- **Body:** At launch, your anonymous teaser can be found on Borderless Deals, in Claude and ChatGPT, and on Google. Buyers browse free and join to sign an NDA or contact your broker. Their AI agent checks fit with yours first. No one cold-emails buyers on your behalf.
- **Visual, `ai-assistant`:** a buyer abroad types a request into Claude or ChatGPT; *Illustrative* anonymous teasers appear (size band and US region only); the buyer clicks "Sign NDA → join Borderless Deals"; a toast reads "NDA request sent to the sell-side broker".

### S8 · Confidentiality
- **Claim:** you control who sees what, at every step.
- **Eyebrow:** Confidential by design
- **H2:** Sell to the world without telling the world.
- **Body:** Information opens in three tiers: the anonymous teaser, then the named company page under NDA, then the data room. You or your broker approve each release, and every disclosure is logged. Buyers pass identity (KYC) and anti-money-laundering checks before names are revealed.
- **Visual, `trust-tiers`:** three nested tiers; a buyer abroad's AI agent moves inward; the log (no times) reads: Viewed anonymous teaser · KYC / AML passed · NDA signed, name revealed · Broker approved data-room release.

### S9 · Deals that hold
- **Claim:** deal-breakers, including cross-border rules, surface at the mandate, not after months of exclusivity.
- **Eyebrow:** Deals that hold
- **H2:** Find what would break a cross-border deal before the buyer does.
- **Body:** Many broken deals fail on things that were knowable earlier. At every stage from the mandate to the SPA, an AI agent tests the seller's and the buyer's stories for contradictions and gaps, and re-checks the rules of every country involved, such as foreign-investment screening and sanctions. A specialist is called in for anything deeper, and the broker decides.
- **Proof:** In Axial's review of 65 executed LOIs that broke in 2024, non-QoE diligence findings (21.5%), QoE EBITDA discrepancies (15.4%) and business underperformance (12.3%) caused about half the failures. Deals sat in exclusivity for an average of 58 to 203 days, depending on industry, before they broke.
- **Visual, `stage-gates`:** seven gates from mandate to SPA and closing. A contradiction found at the mandate is fixed by a specialist; the deal then passes every gate.

### S10 · Services
- **Claim:** the cross-border specialists a deal needs are on the same platform.
- **Eyebrow:** Closing across borders
- **H2:** Cross-border legal, tax and financing help, on the same platform.
- **Body:** A vetted panel of legal, tax, accounting, valuation and financing providers works on the platform. Post what you need and providers reply with scope, price and timeline, or invite one directly. The AI agent compares proposals, a person decides, and the work lands in the deal room.
- **Visual, `services-marketplace`:** the requirement "US tax structuring + state licensing · buyer abroad acquiring an Ohio manufacturer"; three provider types reply; "AI agent compared · a person decides"; "Structuring memo → deal room".

### S11 · Brokers
- **Claim:** brokers keep their clients and fees and reach buyers worldwide, with a free seat to start.
- **Eyebrow:** For brokers
- **H2:** Brokers bring the companies. We bring buyers from around the world.
- **Body:** Borderless Deals is not a broker and does not compete with you for clients. At launch, companies come to the platform only through brokers. You keep your mandate, your client and your fee. The platform never takes a percentage of your deal.
- **Founding broker offer:** Free seat for founding brokers · On day one, your AI agent drafts the company page, anonymous teaser and buyer list · Ratings and a closed-deal record that buyers can see · One system for domestic and cross-border mandates
- **Visual, `offer-stack`:** four items stack; "Founding broker · free seat" appears by 3s; the promise card follows.

### S12 · Objections
- **Eyebrow:** Straight answers
- **H2:** What owners and brokers ask first.
- **HTML accordion** (memo FAQ, pp. 47–49): Can I list my company myself? · Can I still sell to US buyers? · Will foreign-investment rules block my deal? · Who holds the money? · Who is behind Borderless Deals?
- **Visual, `objections`:** three cards (the first three questions), each question shown with its answer.

### S13 · Final CTA
- **H2:** Sell to the world. Start with one mandate.
- **Body:** Send one mandate. Your AI agent drafts the anonymous teaser and a list of likely buyers worldwide. Free for founding brokers.
- **Form:** Name · Work email · Firm · I am a: broker / business owner / buyer / private equity / service provider
- **Visual, `mandate-in`:** one mandate goes in; an anonymous teaser and a "Likely buyers · worldwide" list come out (buyer types only).

## Off the home page
`agent-to-agent`, `personas` and `flywheel` follow the same global cast and vocabulary.

## Needs founder sign-off before publishing
1. **"Free seat for founding brokers"**: the memo supports free seats at launch (p. 35) but also says "a listing fee always" (p. 34).
2. **Teaser discovery inside Claude and ChatGPT**: state it as live only once the plugins ship (p. 38).
3. **Every figure** must be checked against its full source (memo p. 51).
