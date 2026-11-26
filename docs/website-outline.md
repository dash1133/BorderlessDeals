# Borderless Deals: website outline (Pass 1)

Source: *Borderless Deals: Concept Memo (Draft v2)*, 25 Nov 2026. Every claim and number on the site comes from the memo. Where the memo leaves a decision open, this outline marks it **[DECIDE]**.

---

## 0. Who visits, and what each visitor needs to believe

At launch the platform is broker-centric and buyers can be anywhere in the world, so the site speaks to US brokers first. *(Superseded for the home page by `docs/message-house.md`, v3.)*

| Visitor | Arrives asking | Must leave believing | Primary CTA |
|---|---|---|---|
| **Sell-side broker (US)**, the primary audience | "Will this cut me out? Is it worth my time?" | "It's free, I keep my client and fee, and my mandates reach buyers worldwide." | Join the founding broker cohort |
| **Buy-side broker (abroad)** | "Can I find real US targets for my clients?" | "Every listing is broker-mandated and screened, and my agent runs every client's thesis at once." | Post a buy mandate |
| **Strategic buyer / corp dev** | "Why not just use my bankers?" | "I see companies held by small brokerages that my bankers never see, and the cross-border complexity is handled for me." | Publish your acquisition thesis |
| **Private equity** | "A broker-led marketplace pushes up my prices." | "Better exits to foreign strategics, more add-ons, and I can win on certainty." | See global deal flow free |
| **Service provider** (legal, tax, valuation, financing, accounting) | "How do I get cross-border work?" | "Requirements come to me, and my record wins the work." | Register your specialty |
| **Partner / investor / press** | "What is this, and who is behind it?" | "A new company built on AgenticPM's deal-execution technology." | Contact |

---

## 1. Applying Alex Hormozi's website principles

| Hormozi principle | How the site applies it |
|---|---|
| **Name the audience and promise the dream outcome in the headline** | Hero: *"Sell to the world, through the broker you already trust."* Sub-head names the who (US brokers and sellers) and the what (buyers worldwide, carried to close). |
| **Value equation**: raise Dream Outcome × Perceived Likelihood, cut Time Delay × Effort | **Dream outcome:** a global buyer list for every mandate. **Likelihood:** sourced stats, screened brokers, gates that catch deal-killers early. **Time:** agents work around the clock. **Effort:** the agent builds the teaser, wiki and buyer list for you. Each value block on the site is tagged to one of these four levers. |
| **Grand Slam Offer**: list every obstacle, turn each into a solution, then stack them | The **Founding Broker Offer** stacks the memo's broker benefits into one offer: free seat, agent-built teaser and wiki, global buyer reach, distribution through Claude and ChatGPT, stage gates, vetted providers, ratings that build reputation. |
| **Risk reversal / guarantee** | "Free to join. You keep your mandate, your client and your fee. We never take a percentage of your deal." (memo FAQ) |
| **Scarcity and urgency, honestly** | "Founding brokers": the launch cohort is limited. **[DECIDE]** cohort size or deadline before stating a number. |
| **Lead magnet** (give value before asking) | "Send us one mandate. Get back an anonymous teaser and a global buyer map." This is the memo's *single-player value*. |
| **Proof** | Pre-launch there are no testimonials, so the site uses sourced market facts (BCG, Oliver Wyman, McKinsey, Axial, UNCTAD) plus "how it works" visuals that show the product doing the job. **Do not invent logos or quotes.** |
| **One page, one action** | Every page has one primary CTA per persona; the nav carries one button, "Join as a broker". |
| **Handle objections before they're raised** | An objection-crushers band ("Will this cut me out?", "Is the platform a broker?", "Who holds the money?") sits before the final CTA, plus a full FAQ page by persona. |
| **Show the product** | Every section has a moving app schematic (GIF) so visitors see the agent work rather than read about it. |

---

## 2. Visual and design direction (from the visitor's side)

**Feel:** institutional-grade calm with visible motion. It should read like serious M&A infrastructure that's alive, not a crypto-style marketplace.

Inspired by **agenticprivatemarkets.ai**:
- A white canvas on a faint blue grid, with large dark-ink headlines in Inter and one blue highlighted phrase with an underline swash.
- Visuals are **app schematics**: framed product windows with tabs, task cards, status chips and ticks, the way the APM homepage shows the Deal Scout workspace.
- A coloured **stage ribbon** (Sourcing → Diligence → Close), echoed as Borderless's *Listing → Discovery → Diligence → Close*.
- A two-row **"Traditional vs Borderless" comparison**, echoing APM's "Traditional PM vs AgenticPM" table.
- Persona cards with role, one-line job and an italic outcome line.

**Borderless's own identity**, so it isn't a clone of APM:
- **Palette:** Ink `#0E1A33` · Borderless Blue `#1F4FE0` · Corridor Saffron `#F59E0B` (seller accent) · Signal Teal `#0EA5A4` · Pass Green `#16A34A` · Flag Red `#DC2626` · Grid `#E9EFFB`.
- **Motif:** *the arc*. Curved corridors connecting two pins on a dotted world map recur in the logo, the hero, section dividers and the roadmap.
- **Agent avatars** are abstract hexagon glyphs coloured by role (buyer blue, seller saffron, broker teal, provider violet), not stock faces. That reinforces "agents are the representatives".

**What appeals to a visitor:**
1. **Clarity in five seconds:** who it's for, what they get, and that it's free to start.
2. **Seeing their own deal:** examples use real-sounding mandates from the memo ("a buyer abroad wants a US precision-machining firm, $10–40M revenue").
3. **Safety:** confidentiality tiers, "agents recommend, people decide", and "we never hold your money" are visible early.
4. **Motion with meaning:** each GIF shows one mechanism in 6–8 seconds and loops. There's no decorative motion.
5. **Low friction:** the CTA form asks for three fields (name, firm, role) and nothing else.

**GIF spec:** 800×500 (16:10), about 12 fps, 6–9 s loops, under about 1.5 MB each, on a light background, Inter type, with the final frame matching the first so the loop is seamless.

---

## 3. Site map (simple pages for now)

| Page | Purpose | Primary CTA |
|---|---|---|
| `index.html`, Home | The long-form Hormozi landing page | Join as a broker |
| `brokers.html`, For Brokers | Primary audience, with the Founding Broker Offer | Join the founding cohort |
| `buyers.html`, For Buyers & PE | Strategic buyers and private equity | Publish your thesis |
| `providers.html`, For Service Providers | The Upwork-style services marketplace | Register your specialty |
| `how-it-works.html` | Agents, stage gates, deal journey, trust | Join |
| `faq.html` | Objections by persona | Join |

---

## 4. Home page: section by section

Each section lists its **goal, headline, content, visual (GIF) and CTA**.

### 4.1 Hero
- **Goal:** within five seconds, show who it's for, the outcome, and that it's risk-free.
- **Eyebrow chip:** "For US companies and the brokers who sell them"
- **Headline:** *Sell to the **world**. Through the broker you already trust.*
- **Sub-head:** "Borderless Deals is the agent-run M&A marketplace that puts US companies in front of qualified buyers anywhere in the world, and carries every deal from anonymous teaser to signed SPA."
- **CTAs:** [Join as a broker] (primary) · [I'm a buyer] (secondary)
- **Risk-reversal line under the CTAs:** "Free to join · You keep your mandate, client and fee · No % of your deal"
- **Visual, `hero-corridor.gif`:** a dotted world map. A US pin pulses, saffron arcs draw to buyers in Europe, the Middle East and Japan, anonymous teaser cards travel along the arc, agent glyphs meet mid-arc with a "✓ fit" chip, and a deal-room chip lands: *"NDA signed · Data room open"*. Extra arcs fade in to Japan and Europe.

### 4.2 The problem: great companies, invisible abroad
- **Goal:** make the visitor feel the pain (Hormozi: "obstacles before solutions").
- **Headline:** *Cross-border M&A is shrinking, and the mid-market is left out.*
- **Content (three stat tiles, all sourced):**
  - **~30%** of global deal value is cross-border today, down from ~50% in 2007 (BCG).
  - **76%** of cross-border value sits in $1B+ deals. Mid-market and SMEs are underserved (Oliver Wyman).
  - **70%** of advisory firms complete three or fewer deals a year, with local reach only (Axial).
- Body: "Foreign capital wants US companies. US owners and their brokers have no global reach. The barrier isn't capital. It's discovery, information and execution complexity."
- **Visual, `barriers.gif`:** seven walls labelled *Discovery · Information · Language · Regulation · Trust · Execution cost · Fragmented brokers* stand between a US seller card and a buyer-abroad card. An agent glyph walks the line and each wall dissolves into its fix ("Global directory", "Normalized financials", "Auto-translate"...). The two cards then connect.

### 4.3 Why now: today's numbers are the floor
- **Goal:** create urgency through the market.
- **Headline:** *A wave of US sellers. A wave of foreign buyers. No bridge between them.*
- **Content:**
  - ~1M viable US small businesses up for sale by 2035, up to ~$5T in enterprise value (McKinsey).
  - $100B+ deployed by Japanese buyers into North America in 2025 (Morrison Foerster).
  - The Dubai precedent: removing the access barrier grew transactions from $10.6B to $125.3B in five years.
- **Visual, `why-now.gif`:** an animated chart. The cross-border share bar drops from 50% to 30% (2007 → today), then a dashed "Borderless" line rises above it with the caption *"Lower the barrier, usage rises."* Counters tick: 1M sellers · $5T · $13.7B.

### 4.4 The idea: one platform, three pillars, run by agents
- **Goal:** explain the product in one glance.
- **Headline:** *LinkedIn for companies. Upwork for deal services. A deal room that closes.*
- **Content (three cards):**
  1. **Directory:** every buyer, seller, broker, PE fund and provider has an agent-written, agent-managed page.
  2. **Discovery:** two-way matching. Buyers find targets, sellers find buyers, brokers find both.
  3. **Services and execution:** hire legal, tax, valuation, financing and accounting in the same flow, then run LOI → diligence → SPA → close.
- **Visual, `pillars.gif`:** an app window with three tabs (APM-style) cycling **Directory** (company wiki cards fill in), **Discovery** (match list ranks with reasons), and **Services** (provider bids slide in).

### 4.5 Agents, not static pages
- **Goal:** show the agentic difference.
- **Headline:** *Every participant is represented by an agent, not a profile that goes stale.*
- **Content (comparison, APM-style "Traditional vs ..."):**

| | Static profile (LinkedIn, Upwork, deal networks) | Borderless agent-managed wiki |
|---|---|---|
| Who writes it | The owner, once | An agent, continuously |
| Language | One | Every reader's own language |
| How others use it | Read it | Ask it questions, within permission rules |
| Freshness | Goes stale | Updates as data arrives |
| Confidentiality | Public or private | Tiered per party and per stage |

- **Visual, `agent-wiki.gif`:** a company wiki page being written live: sections type in (Business, Normalized financials, Deal readiness 82%), a language toggle flips EN → Español → 日本語 → Deutsch, and a second agent asks *"Customer concentration?"* and gets a cited answer with a 🔒 "within disclosure rules" chip.

### 4.6 How a match happens: agent-to-agent, never cold outreach
- **Goal:** build trust that it isn't spam and that confidentiality holds.
- **Headline:** *Two agents qualify the fit before either human is disturbed.*
- **Content:** buyer's agent → seller's agent conversation: thesis fit, size fit, proof of funds, regulatory pre-check. Names are revealed only when both sides opt in.
- **Visual, `agent-to-agent.gif`:** two agent glyphs exchange chat bubbles. Checks tick (*Thesis fit ✓ · Proof of funds ✓ · FDI screening: low risk ✓*), two "Opt in" toggles flip on, and the anonymous teaser "Project Falcon" unblurs to a named profile under NDA.

### 4.7 Gates at every stage: catch deal-killers early
- **Goal:** the strongest reason for brokers to adopt (memo: "the core reason to adopt").
- **Headline:** *Most broken deals fail on things that were knowable earlier.*
- **Content:** In Axial's review of broken LOIs, non-QoE diligence findings caused 21.5% of failures and QoE EBITDA gaps another 15.4%. About 30% of signed LMM LOIs never close. Agents run checks at every gate, *Mandate → Collateral → Teaser → NDA → LOI → Diligence → SPA*, testing for contradictions and missing information. "Agents recommend; people decide."
- **Visual, `stage-gates.gif`:** a horizontal pipeline of seven gates. A deal token moves through them, and the checks under each gate tick green. At **Mandate** a red flag appears (*"EBITDA in CIM ≠ tax return"*), an accounting adviser chip is called in, the flag turns green "Remediated", and the deal moves on to a **Close ✓** confetti burst.

### 4.8 Upwork for deal services
- **Goal:** show that execution is solved in one place.
- **Headline:** *Float a requirement. Vetted providers bid. Work lands in your deal room.*
- **Content:** a seven-step flow (Float → Apply → Invite → Shortlist → Contract → Deliver → Review). Categories: Financing, Legal, Accounting, Tax, Valuation, plus Diligence, Insurance, Translation, Escrow and Integration. Experts on demand and micro-transaction Q&A.
- **Visual, `services-marketplace.gif`:** a requirement card: *"US tax structuring + state licensing for a buyer abroad acquiring an Ohio manufacturer · 3 weeks"*. Three provider bid cards slide in with ★ ratings, closed-deal counts and price. The agent highlights the best fit, "Hired ✓", and a deliverable drops into the deal-room folder.

### 4.9 Discovery where buyers already search
- **Goal:** the distribution advantage (no cold outreach, global reach).
- **Headline:** *Your teaser appears inside Claude and ChatGPT, wherever buyers ask.*
- **Content:** Anonymous teasers are published through Claude and ChatGPT plugins. Anyone can browse; to sign an NDA or contact a broker they join. "Brokers get global publication; buyers see deal flow free until they engage."
- **Visual, `ai-assistant.gif`:** a chat-assistant window. A user types *"Find US precision-machining companies for sale, $10–40M revenue"*, three anonymous teaser cards stream in from "Borderless Deals", and the cursor clicks *"Sign NDA → Join Borderless"*.

### 4.10 Built for every side of the deal
- **Goal:** self-selection. Every persona finds their row.
- **Headline:** *One platform. Six seats at the table.*
- **Content:** six persona cards (Sell-side broker, Buy-side broker, Strategic buyer, Private equity, Service provider, Seller *via broker*), each with *What you list → What you get → Your agent's job* (from the memo's participant table) and a link to the persona page.
- **Visual, `personas.gif`:** a hexagon ring of six agent glyphs around a central "Deal room". Each lights up in turn, showing its one-line job, and connector lines pulse into the centre.

### 4.11 The Founding Broker Offer (Grand Slam Offer)
- **Goal:** the conversion section.
- **Headline:** *Everything you need to take every mandate global, free for founding brokers.*
- **Offer stack (each line answers a broker obstacle):**
  1. A free seat for founding brokers
  2. An agent that builds your company wiki, anonymous teaser and buyer list on day one, even before the network is full
  3. Global buyer reach without a global network
  4. Your teasers published inside Claude, ChatGPT and Google
  5. Stage-gate checks that surface deal-killers at the mandate, not after 90 days of exclusivity
  6. Vetted cross-border legal, tax, valuation and financing providers on call
  7. Public ratings and closed-deal badges that build your reputation
  8. One system for domestic and cross-border mandates
- **Guarantee:** "You keep your mandate, your client and your fee. We never take a percentage of your deal. Leave anytime."
- **Lead magnet:** "Send one mandate → get a free anonymous teaser and global buyer map."
- **Visual, `offer-stack.gif`:** offer cards stack one by one into a tall pile, each landing with a ✓. At the end a price tag flips from "Global network: out of reach" to "**Founding broker: $0**". **[DECIDE]** confirm free founding seats.

### 4.12 Trust, confidentiality and compliance
- **Goal:** remove fear before the ask.
- **Headline:** *Your secrets stay yours, and every release is approved.*
- **Content:** tiered disclosure (Anonymous teaser → Named profile under NDA → Data room); every disclosure logged; KYC/AML before names are revealed; mandate verification; FDI and sanctions screening at match time; the platform is not a broker, never holds escrow or payments, and agents never bind a principal.
- **Visual, `trust-tiers.gif`:** three nested vault layers. A buyer badge requests access, then KYC ✓ and NDA ✓ unlock each tier in turn, with an access log ticking entries on the right: *"Viewed teaser · 10:02"*, *"NDA signed · 10:14"*, *"Data room: Financials · 10:15"*.

### 4.13 Corridors and roadmap
- **Goal:** honest scope (Hormozi: specificity beats "global").
- **Headline:** *Reach buyers in any country. You choose which ones.*
- **Content:** buyers worldwide (corporate development teams, PE funds, buy-side brokers); each mandate visible worldwide, in selected countries, or domestic only.
- **Visual, `global-buyers.gif`:** world map with arcs from Ohio to several continents; a visibility switch cycles worldwide → selected countries → domestic only.

### 4.14 Objection crushers (mini-FAQ)
- **Headline:** *The questions brokers ask first.*
- **Content:** six short Q&As: "Will this cut me out?" · "Will I lose my client or fee?" · "Is the platform a broker?" · "Who holds the money?" · "Will screening kill my deal late?" · "Can I use it for domestic deals?"
- **Visual, `objections.gif`:** question cards flip one by one to reveal a green answer side.

### 4.15 Final CTA and the flywheel
- **Headline:** *Every member widens every listing's reach.*
- **Content:** the distribution flywheel: more members → more reach → more brokers → more listings. A three-field form: Name · Firm · I am a [Broker / Buyer / PE / Provider].
- **Visual, `flywheel.gif`:** a four-node loop spinning, with counters increasing at each node.

### 4.16 Footer
Who's behind it: "Borderless Deals is a new company built on deal-execution technology from AgenticPM." Pages, legal placeholder, and "Borderless Deals is a technology and marketplace platform, not a broker-dealer."

---

## 5. Persona pages (short form, same pattern)

Each page follows **Hero (dream outcome) → Pains → What your agent does → Visual → Offer and guarantee → FAQ for this persona → CTA**.

- **Brokers.** Hero: *"Every local broker, global."* Pains: local reach, deals collapse late, too many mandates for the headcount. Agent jobs: from the memo's sell-side and buy-side bullets. Visuals: `stage-gates.gif`, `offer-stack.gif`, `agent-to-agent.gif`.
- **Buyers & PE.** Hero: *"See the companies your bankers never see."* Pains: invisible targets abroad, unfamiliar US process, screening risk. Strategic buyer and PE agent jobs, plus PE's four angles (better exits, add-ons at scale, win on certainty, access to foreign capital). Visuals: `ai-assistant.gif`, `agent-wiki.gif`, `barriers.gif`.
- **Service providers.** Hero: *"Cross-border work, won on your record."* Agent jobs: from the memo's provider bullets. Visuals: `services-marketplace.gif`, `personas.gif`.
- **How it works.** Pillars → agents → match → gates → deal journey (buyer 11 steps / seller 9 steps) → after the close → trust. Visuals: `pillars.gif`, `agent-to-agent.gif`, `stage-gates.gif`, `trust-tiers.gif`.
- **FAQ.** The memo's FAQ by persona, verbatim in spirit. Visual: `objections.gif`.

---

## 6. Open decisions before launch

1. **[DECIDE]** Founding cohort size, deadline and "free" terms (scarcity must be real).
2. **[DECIDE]** Deal-size focus shown on the site: SME (<$10M), LMM ($10–250M), or both.
3. **[DECIDE]** Whether to show "Who is behind it: AgenticPM" on the home page or only in the footer.
4. **[DECIDE]** Testimonials: none at launch. Add founding-broker quotes after the pilot.
5. **[VERIFY]** All stats against full source documents before publishing (memo note: figures taken from search results, Nov 2026).
6. **[LEGAL]** Wording on "not a broker", success fees and agent statements needs legal review before going live.
