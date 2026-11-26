# Borderless Deals: message house (home page, v2)

v2 folds in two independent reviews against the concept memo: one of the copy and one of the visuals. Memo page references are given in brackets.

## Core message (never changes)

**Sell to the world.**
**AI-enabled platform for cross-border M&A.**

Support line, used once in the hero:
> Borderless Deals puts US companies in front of qualified buyers abroad, starting with India, and carries each deal from anonymous teaser to closing. Brokers bring the companies. AI agents do the legwork. People make every decision.

## Discipline rules

1. **One reader:** the sell side, meaning US owners and the brokers who represent them. Buyers, PE and providers get one link each to their own pages.
2. **One claim per section,** in the order a seller asks the questions: *Why abroad? → Which buyers can I reach today? → Why doesn't it happen now? → How does Borderless do it? → What does the AI do? → How do buyers find me? → Is it confidential? → Will the deal hold? → Who does the cross-border work? → What does it cost my broker? → Objections → Act.*
3. **Every headline ladders up to "Sell to the world."**
4. **Every number comes from the memo, verbatim, with its source named.** Nothing is presented as live before launch: say "launching", not "now live".
5. **"Global", "world" and "everywhere" appear only with "starting with US–India" nearby.** The exceptions are the H1 itself and "Sell to the world without telling the world".
6. **Fixed vocabulary:**

| Use | Don't use |
|---|---|
| AI agent (first mention per section), then agent | bot, assistant, copilot, principal |
| broker / sell-side broker / buy-side broker | adviser, intermediary (use "specialist" or "provider" for service firms) |
| buyer | acquirer |
| anonymous teaser | listing, ticker |
| company page | wiki, profile |
| deal room; "data room" only for the third disclosure tier | workspace |
| corridor | market, lane |
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
   - **Buyer:** "a buyer in India, via a buy-side broker" (Mumbai).
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
- **Eyebrow:** Launching first in the US ↔ India corridor
- **H1:** Sell to the world.
- **Category line:** AI-enabled platform for cross-border M&A.
- **Support:** the support line above.
- **CTAs:** [List a mandate] (for brokers) · [Find companies to buy]
- **Owner link:** Selling your own company? At launch you sell through a broker on Borderless Deals →
- **Assurance line:** Free seat for founding brokers · You keep your client and your fee · No percentage of the deal
- **Visual, `hero-corridor`:**
  1. A US company's anonymous teaser travels along an arc to a buyer in India.
  2. The chip "AI agents confirm fit" appears.
  3. The chip "KYC passed · broker approves" appears.
  4. The card "NDA signed · names revealed" appears.
  - No Japan or Europe arcs. NDA card by about 4.5s, then hold.

### S2 · Opportunity
- **Claim:** foreign buyers already spend heavily on US companies.
- **Eyebrow:** The opportunity
- **H2:** Your next buyer may not be in the US.
- **Body:** Foreign buyers already spend heavily on US companies, mostly in large deals. They can value market entry, technology or capacity differently from a domestic buyer, and more bidders means more competition for your company.
- **Proof:**
  - Non-US buyers bought just over $500B of US companies in 2025, up 35% by value (Ropes & Gray).
  - India's outbound M&A reached $13.7B in 2025, up from $5.1B in 2024 (EY India).
  - Over 1 million viable US small businesses will need buyers by 2035, worth up to about $5T (McKinsey).
- **Visual, `opportunity` (new):**
  - Left group, "Foreign buyers": "$500B+ · US companies bought by non-US buyers, 2025 · Ropes & Gray" and "$13.7B · India outbound M&A, 2025 · EY India".
  - Right group, "US sellers": "1M+ · viable US small businesses need buyers by 2035 · McKinsey".
  - An arc joins the groups. Values fade in (no count-up).

### S3 · Corridors
- **Claim:** today you can reach buyers in India; more corridors follow.
- **Eyebrow:** Where you can sell first
- **H2:** Starting with US ↔ India.
- **Body:** We launch one corridor at a time, where sellers and buyers are both strong. The first pairs the largest pool of sellers and brokers, the US, with an active, growing base of Indian buyers: established corporate development teams, PE funds, and buy-side brokers acting for clients. Japan and the transatlantic corridor are candidates for later.
- **Proof:** About $4B of India's $26.75B in overseas direct investment in FY2025–26 went to the US (BDO India).
- **Visual, `corridors-roadmap`:** a solid US–India arc labelled "Launching · US ↔ India", and dashed arcs to Japan and Europe labelled "Candidate". No horizons panel.

### S4 · Problem
- **Claim:** most companies only ever meet domestic buyers, because of missing information and complexity.
- **Eyebrow:** The problem
- **H2:** Most companies only ever meet domestic buyers.
- **Body:** Cross-border deals are hard to find and hard to finish. Big companies have banks with global desks. Mid-market owners and their local brokers do not. What holds these deals back is missing information and complexity, not a lack of money.
- **Proof:**
  - Deals above $1B make up about 76% of cross-border deal value (Oliver Wyman).
  - Cross-border deals fell from about 50% of global deal value in 2007 to about 30% today (BCG).
- **Visual, `barriers`:** six horizontal walls between a US seller and a buyer in India: *Discovery · Information and language · Regulation · Trust · Execution cost · Local reach*. Problem only, no fixes. End chip: "Out of reach today".

### S5 · Platform
- **Claim:** one platform carries your company from anonymous teaser to closing.
- **Eyebrow:** How it works
- **H2:** One platform, from anonymous teaser to closing.
- **Pillars:**
  1. **Be on the map:** your company sits in one directory with buyers, brokers, PE funds and service providers ("LinkedIn for companies").
  2. **Be found:** buyers' AI agents match against your anonymous teaser, and your agent builds a list of buyers who fit.
  3. **Close:** hire legal, tax, valuation, financing and accounting providers, and run LOI, due diligence, SPA and closing in one deal room ("Upwork for deal services").
- **Visual, `pillars`:** three tabs: Be on the map → Be found → Close. Two cards per tab, no scores or ratings. End chip: "Deal room · LOI → due diligence → SPA → closing".

### S6 · AI agents
- **Claim:** your broker works with an AI agent that answers buyers abroad, and people decide.
- **Eyebrow:** AI-enabled
- **H2:** Your broker, plus an AI agent that answers buyers abroad in their own language.
- **Body:** Your broker works with an AI agent. It drafts your company page and anonymous teaser from your documents, answers buyers' agents only from information you have approved, in the buyer's language, and handles the follow-ups that slow deals down. Price, terms and anything binding always go to a person.
- **Points:** Answers only from approved information · In the buyer's language · Anything binding goes to a person
- **Visual, `agent-wiki`, now the company page:**
  1. Company page "(Illustrative)": the text draws in, with financial values shown as blurred bars.
  2. The page flips EN → हिन्दी.
  3. A buyer's AI agent in India asks a question by 3s.
  4. The answer appears, tagged "From approved information".
  5. "Price or terms? → goes to your broker".

### S7 · Reach
- **Claim:** buyers come to your anonymous teaser; nobody cold-emails on your behalf.
- **Eyebrow:** Reach
- **H2:** Buyers abroad find your teaser where they already search.
- **Body:** At launch, your anonymous teaser can be found on Borderless Deals, in Claude and ChatGPT, and on Google. Buyers browse free and join to sign an NDA or contact your broker. Their AI agent checks fit with yours first. No one cold-emails buyers on your behalf.
- **Visual, `ai-assistant`:**
  1. A buyer types a request into Claude or ChatGPT.
  2. Anonymous teaser cards appear by 2s, showing a size band and region only, tagged *Illustrative*.
  3. The buyer clicks "Sign NDA → join Borderless Deals".
  4. A toast: "NDA request sent to the sell-side broker".

### S8 · Confidentiality
- **Claim:** you control who sees what, at every step.
- **Eyebrow:** Confidential by design
- **H2:** Sell to the world without telling the world.
- **Body:** Information opens in three tiers: the anonymous teaser, then the named company page under NDA, then the data room. You or your broker approve each release, and every disclosure is logged. Buyers pass identity (KYC) and anti-money-laundering checks before names are revealed.
- **Visual, `trust-tiers`:**
  - Three nested tiers. A buyer's AI agent moves inward tier by tier.
  - Log (no times): "Viewed anonymous teaser" · "KYC / AML passed" · "NDA signed · name revealed" · "Broker approved data-room release".

### S9 · Deals that hold
- **Claim:** deal-breakers, including cross-border rules, surface at the mandate, not after months of exclusivity.
- **Eyebrow:** Deals that hold
- **H2:** Find what would break a cross-border deal before the buyer does.
- **Body:** Many broken deals fail on things that were knowable earlier. At every stage from the mandate to the SPA, an AI agent tests the seller's and the buyer's stories for contradictions and gaps, and re-checks the corridor's rules, such as foreign-investment screening and sanctions. A specialist is called in for anything deeper, and the broker decides.
- **Proof:** In Axial's review of 65 executed LOIs that broke in 2024, non-QoE diligence findings (21.5%), QoE EBITDA discrepancies (15.4%) and business underperformance (12.3%) caused about half the failures. Deals sat in exclusivity for an average of 58 to 203 days, depending on industry, before they broke.
- **Visual, `stage-gates`:**
  - Seven gates: Mandate · Collateral · Anonymous teaser · NDA · LOI · Due diligence · SPA & closing.
  - At the mandate: "Contradiction: stated EBITDA ≠ tax return" → specialist called in → "Fixed".
  - The deal then passes every gate to closing. No gate log and no derived percentages.

### S10 · Services
- **Claim:** the cross-border specialists a deal needs are on the same platform.
- **Eyebrow:** Closing across borders
- **H2:** Cross-border legal, tax and financing help, on the same platform.
- **Body:** At launch, each corridor has a vetted panel of legal, tax, accounting, valuation and financing providers. Post what you need and providers reply with scope, price and timeline, or invite one directly. The AI agent compares proposals, a person decides, and the work lands in the deal room.
- **Visual, `services-marketplace`:** four beats:
  1. The requirement (memo text).
  2. Three proposals by provider type only, with skeleton lines for scope, price and timeline.
  3. "AI agent compared · you decide".
  4. "Structuring memo → deal room".
  - No prices, ratings, cities or scores.

### S11 · Brokers
- **Claim:** brokers keep their clients and fees and reach buyers in India, with a free seat to start.
- **Eyebrow:** For brokers
- **H2:** Brokers bring the companies. We bring buyers abroad, starting with India.
- **Body:** Borderless Deals is not a broker and does not compete with you for clients. At launch, companies come to the platform only through brokers. You keep your mandate, your client and your fee. The platform never takes a percentage of your deal.
- **Founding broker offer:**
  - Free seat in the US–India corridor
  - On day one, your AI agent drafts the company page, anonymous teaser and buyer list
  - Ratings and a closed-deal record that buyers can see
  - One system for domestic and cross-border mandates
- **Visual, `offer-stack`:**
  - Four large items stack with ticks.
  - "Founding broker · free seat" appears by 3s.
  - Promise card: "You keep your mandate, client and fee. No percentage of your deal."

### S12 · Objections
- **Claim:** the questions owners and brokers ask first have straight answers.
- **Eyebrow:** Straight answers
- **H2:** What owners and brokers ask first.
- **HTML accordion, first answer open** (from the memo FAQ, pp. 47–49):
  - **Can I list my company myself?** Not yet. At launch, companies come through a broker on the platform. Direct listing for owners is planned, after a full background verification.
  - **Can I still sell to US buyers?** Yes. Each mandate can be shown to buyers abroad, to US buyers only, or both. Brokers use one system for both.
  - **Will foreign-investment rules block my deal?** The platform flags likely screening issues at the matching stage, before anyone spends money, and connects you with local legal providers.
  - **Who holds the money?** Licensed escrow and payment providers on the platform. Borderless Deals never holds your money.
  - **Who is behind Borderless Deals?** Borderless Deals is a new company built on deal-execution technology from AgenticPM, an AI agent platform for private equity and transaction advisers.
- **Visual, `objections`:** three large cards, each showing the question with its answer (the first three questions above). The question stays visible on the answer side.

### S13 · Final CTA
- **Claim:** start with one mandate.
- **H2:** Sell to the world. Start with one mandate.
- **Body:** Send one mandate. Your AI agent drafts the anonymous teaser and a list of likely buyers in India. Free for founding brokers in the US–India corridor.
- **Form:** Name · Work email · Firm · I am a: broker / business owner / buyer
- **Visual, `mandate-in` (new):** one mandate goes in; an anonymous teaser and a "Likely buyers · India" list come out (buyer types only, no names).

## Off the home page

These scenes keep their use on inner pages and get vocabulary fixes only:
- **`agent-to-agent`:** one consistent buyer type; no "principal"; placeholder name tagged *Illustrative*.
- **`personas`:** "listings" → "anonymous teasers"; "company wiki" → "company page".
- **`flywheel`:** "listing" → "teaser"; hub reads "AI-enabled platform for cross-border M&A".

## Needs founder sign-off before publishing

1. **"Free seat for founding brokers."** The memo supports free seats in the launch corridor (p. 35) but also says "a listing fee always" (p. 34).
2. **Teaser discovery inside Claude and ChatGPT.** This is the H1 design (p. 38); state it as live only once the plugins ship.
3. **Every figure** must be verified against its full source document (memo p. 51).
