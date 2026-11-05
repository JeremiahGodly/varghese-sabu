/**
 * INDIAN LAW CORPUS & BARE ACT EXPLORER
 * Curated for Advocate Varghese Sabu (High Court of Kerala)
 * Covers BNS 2023, IPC 1860, BNSS 2023, CrPC 1973, BSA 2023, Constitution, Admiralty, Arbitration, Commercial Laws
 */

const INDIAN_LAW_DATA = [
  // --- BNS & CRIMINAL LAW ---
  {
    id: "bns-103",
    category: "Criminal Law",
    act: "Bharatiya Nyaya Sanhita, 2023 (BNS)",
    section: "Section 103",
    legacyEquiv: "Section 302 IPC (Murder)",
    title: "Punishment for Murder",
    summary: "Whoever commits murder shall be punished with death or imprisonment for life, and shall also be liable to fine. Includes sub-clause (2) for group lynching on grounds of race, caste, community, sex, place of birth, or language.",
    cognizable: "Cognizable",
    bailable: "Non-Bailable",
    triableBy: "Court of Session",
    punishment: "Death or Imprisonment for Life + Fine",
    keyPrecedents: "Bachan Singh v. State of Punjab (1980) 2 SCC 684 ('Rarest of rare cases' doctrine); Machhi Singh v. State of Punjab (1983)",
    advocateInsight: "In defending murder charges, strict scrutiny of circumstantial evidence (Panchsheel doctrine from Sharad Birdhichand Sarda) and breaking the chain of custody of forensic recoveries under Section 23/26 BSA is vital.",
    tags: ["murder", "302", "103", "death penalty", "life imprisonment", "lynching", "bns", "ipc", "homicide"]
  },
  {
    id: "bns-109",
    category: "Criminal Law",
    act: "Bharatiya Nyaya Sanhita, 2023 (BNS)",
    section: "Section 109",
    legacyEquiv: "Section 307 IPC (Attempt to Murder)",
    title: "Attempt to Murder",
    summary: "Whoever does any act with such intention or knowledge and under such circumstances that, if he by that act caused death, he would be guilty of murder. Punishable with imprisonment up to 10 years and fine; if hurt caused, up to life.",
    cognizable: "Cognizable",
    bailable: "Non-Bailable",
    triableBy: "Court of Session",
    punishment: "Up to 10 years, or Life Imprisonment if hurt is caused + Fine",
    keyPrecedents: "State of Maharashtra v. Balram Bama Patil (1983) 2 SCC 28; Hari Mohan Mandal v. State of Jharkhand (2004)",
    advocateInsight: "Intention vs bodily injury: It is not the nature of injury alone, but the requisite mens rea coupled with the overt act capable of causing death that must be proved by the prosecution.",
    tags: ["attempt to murder", "307", "109", "injury", "weapon", "assault", "bns", "ipc"]
  },
  {
    id: "bns-318",
    category: "Corporate & White Collar",
    act: "Bharatiya Nyaya Sanhita, 2023 (BNS)",
    section: "Section 318",
    legacyEquiv: "Section 415 & 420 IPC (Cheating & Fraud)",
    title: "Cheating and Dishonestly Inducing Delivery of Property",
    summary: "Deceiving any person and fraudulently or dishonestly inducing the person so deceived to deliver any property, or to consent to retention of property, or intentionally inducing to do or omit anything.",
    cognizable: "Cognizable",
    bailable: "Non-Bailable (u/s 318(4))",
    triableBy: "Magistrate of First Class",
    punishment: "Imprisonment up to 7 years + Fine",
    keyPrecedents: "Hridaya Ranjan Prasad Verma v. State of Bihar (2000) 4 SCC 168; Dalip Kaur v. Jagnar Singh (2009)",
    advocateInsight: "Distinction between mere civil breach of contract and criminal cheating: The fraudulent intention must exist at the very inception of the agreement. Essential ground for quashing u/s 528 BNSS / 482 CrPC.",
    tags: ["cheating", "420", "318", "fraud", "property", "contractual breach", "white collar", "bns", "ipc"]
  },
  {
    id: "bns-316",
    category: "Corporate & White Collar",
    act: "Bharatiya Nyaya Sanhita, 2023 (BNS)",
    section: "Section 316",
    legacyEquiv: "Section 405 & 406 IPC (Criminal Breach of Trust)",
    title: "Criminal Breach of Trust",
    summary: "Dishonest misappropriation or conversion to own use of property entrusted to a person, or dishonest use/disposal of property in violation of legal direction or contract.",
    cognizable: "Cognizable",
    bailable: "Non-Bailable",
    triableBy: "Magistrate of First Class",
    punishment: "Imprisonment up to 5 years (enhanced up to 7/10 years for clerks/public servants) + Fine",
    keyPrecedents: "Velji Raghavji Patel v. State of Maharashtra (1965) AIR SC 1433; Rashmi Kumar v. Mahesh Kumar Bhada (1997)",
    advocateInsight: "Prosecution must establish legal 'entrustment' of dominion over property followed by dishonest conversion. Common in corporate partnership and director disputes.",
    tags: ["criminal breach of trust", "406", "409", "316", "entrustment", "misappropriation", "corporate fraud"]
  },
  {
    id: "bns-356",
    category: "Civil & Commercial",
    act: "Bharatiya Nyaya Sanhita, 2023 (BNS)",
    section: "Section 356",
    legacyEquiv: "Section 499 & 500 IPC (Defamation)",
    title: "Defamation & Community Service",
    summary: "Making or publishing any imputation concerning any person intending to harm the reputation of such person. Introduces community service as an alternative punishment in sub-section (2).",
    cognizable: "Non-Cognizable",
    bailable: "Bailable",
    triableBy: "Magistrate of First Class",
    punishment: "Simple Imprisonment up to 2 years, or Fine, or Community Service",
    keyPrecedents: "Subramanian Swamy v. Union of India (2016) 7 SCC 221; Google India Pvt Ltd v. Visaka Industries (2020)",
    advocateInsight: "Notice the modern inclusion of 'Community Service'. Exceptions under Section 356 (Truth for public good, fair comment on public conduct) provide strong defenses in press and corporate defamation suits.",
    tags: ["defamation", "499", "500", "356", "reputation", "community service", "speech", "bns", "ipc"]
  },
  {
    id: "bns-61",
    category: "Criminal Law",
    act: "Bharatiya Nyaya Sanhita, 2023 (BNS)",
    section: "Section 61",
    legacyEquiv: "Section 120A & 120B IPC (Criminal Conspiracy)",
    title: "Criminal Conspiracy",
    summary: "When two or more persons agree to do, or cause to be done, an illegal act or an act which is not illegal by illegal means. Such an agreement is designated a criminal conspiracy.",
    cognizable: "Cognizable (if target offence is cognizable)",
    bailable: "Non-Bailable (if target offence is non-bailable)",
    triableBy: "Court triable for target offence",
    punishment: "Same punishment as abetment of the target offence",
    keyPrecedents: "State v. Nalini (1999) 5 SCC 253; Kehar Singh v. State (Delhi Admn.) (1988)",
    advocateInsight: "Conspiracy is hatched in secrecy; direct proof is rare. Defense must focus on absence of a meeting of minds and showing mere association does not establish conspiratorial agreement.",
    tags: ["conspiracy", "120b", "61", "criminal conspiracy", "agreement", "bns", "ipc"]
  },
  {
    id: "bns-85",
    category: "Matrimonial & Family",
    act: "Bharatiya Nyaya Sanhita, 2023 (BNS)",
    section: "Section 85",
    legacyEquiv: "Section 498A IPC (Cruelty by Husband or Relatives)",
    title: "Husband or Relative of Husband of a Woman Subjecting Her to Cruelty",
    summary: "Subjecting a woman to cruelty by the husband or his relatives. Cruelty defined as willful conduct likely to drive woman to suicide or harass for unlawful demand of property/dowry.",
    cognizable: "Cognizable",
    bailable: "Non-Bailable",
    triableBy: "Magistrate of First Class",
    punishment: "Imprisonment up to 3 years + Fine",
    keyPrecedents: "Arnesh Kumar v. State of Bihar (2014) 8 SCC 273 (Arrest guidelines); Preeti Gupta v. State of Jharkhand (2010)",
    advocateInsight: "Crucial to rely on Arnesh Kumar mandatory Section 35 BNSS (41A CrPC) notices against routine arrest of distant in-laws, and approach High Court u/s 528 BNSS when allegations are omnibus.",
    tags: ["cruelty", "498a", "85", "matrimonial", "dowry", "arnesh kumar", "bns", "ipc"]
  },

  // --- BNSS & CRIMINAL PROCEDURE ---
  {
    id: "bnss-482",
    category: "Procedural & Bail",
    act: "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)",
    section: "Section 482",
    legacyEquiv: "Section 438 CrPC (Anticipatory Bail)",
    title: "Direction for Grant of Bail to Person Apprehending Arrest",
    summary: "Power of High Court and Court of Session to grant pre-arrest / anticipatory bail upon reasonable belief of accusation of having committed a non-bailable offence.",
    cognizable: "N/A (Bail Provision)",
    bailable: "Pre-arrest Relief",
    triableBy: "High Court & Sessions Court",
    punishment: "Protective Judicial Order against Custodial Detention",
    keyPrecedents: "Sushila Aggarwal v. State (NCT of Delhi) (2020) 5 SCC 1 (Constitution Bench - anticipatory bail not limited by time); Gurbaksh Singh Sibbia (1980)",
    advocateInsight: "Advocate Sabu's core practice: Establishing absence of requirement of custodial interrogation, willingness to join investigation, and demonstrating that the FIR stems from civil/business friction.",
    tags: ["anticipatory bail", "438", "482", "bail", "arrest", "custodial interrogation", "bnss", "crpc"]
  },
  {
    id: "bnss-483",
    category: "Procedural & Bail",
    act: "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)",
    section: "Section 483",
    legacyEquiv: "Section 439 CrPC (Special Powers of High Court Regarding Bail)",
    title: "Special Powers of High Court & Sessions Regarding Regular Bail",
    summary: "High Court or Sessions Court may direct that any person accused of an offence and in custody be released on bail, and may impose any condition considered necessary.",
    cognizable: "N/A (Bail Provision)",
    bailable: "Regular Bail",
    triableBy: "High Court & Court of Session",
    punishment: "Release from Judicial Custody",
    keyPrecedents: "State of Rajasthan v. Balchand (1977) ('Bail is rule, Jail is exception'); Satender Kumar Antil v. CBI (2022) 10 SCC 51",
    advocateInsight: "Argued regularly before the High Court of Kerala. Key determinants: Period of incarceration, completion of charge sheet, medical grounds, lack of criminal antecedents, and parity with co-accused.",
    tags: ["regular bail", "439", "483", "high court bail", "satender antil", "bnss", "crpc", "liberty"]
  },
  {
    id: "bnss-528",
    category: "Procedural & Bail",
    act: "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)",
    section: "Section 528",
    legacyEquiv: "Section 482 CrPC (Inherent Powers of High Court)",
    title: "Saving of Inherent Powers of High Court (Quashing of FIR / Proceedings)",
    summary: "Nothing in this Sanhita shall be deemed to limit or affect the inherent powers of the High Court to make such orders as may be necessary to give effect to any order under this Sanhita, or to prevent abuse of the process of any court or otherwise to secure the ends of justice.",
    cognizable: "N/A (High Court Inherent Power)",
    bailable: "Jurisdictional Quashing",
    triableBy: "High Court Exclusively",
    punishment: "Quashing of FIR, Final Report, or Criminal Case",
    keyPrecedents: "State of Haryana v. Bhajan Lal (1992) Supp 1 SCC 335; Gian Singh v. State of Punjab (2012) 10 SCC 303 (Quashing on compromise)",
    advocateInsight: "The sword and shield of an advocate. Used in High Court of Kerala to quash vexatious commercial complaints, civil disputes masquerading as criminal offences, and quashing based on amicable settlement.",
    tags: ["quashing", "482", "528", "inherent powers", "bhajan lal", "abuse of process", "high court", "bnss", "crpc"]
  },
  {
    id: "bnss-35",
    category: "Procedural & Bail",
    act: "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)",
    section: "Section 35",
    legacyEquiv: "Section 41 & 41A CrPC (Notice of Appearance Before Police)",
    title: "Arrest of Persons & Mandatory Prior Notice",
    summary: "Police officer must not arrest without warrant for offences punishable up to 3 years without prior sanction of DSP rank, and must issue notice of appearance where arrest is not deemed necessary.",
    cognizable: "Procedural Safeguard",
    bailable: "Statutory Safeguard",
    triableBy: "Police & Magistracy",
    punishment: "Departmental inquiry & Contempt of Court for non-compliance",
    keyPrecedents: "Arnesh Kumar v. State of Bihar (2014); Satender Kumar Antil (2022)",
    advocateInsight: "Mandatory compliance check: If police arrest in violation of Section 35 BNSS, Advocate Sabu moves for immediate bail and damages/contempt against errant investigating officers.",
    tags: ["arrest notice", "41a", "35", "police arrest", "safeguard", "bnss", "crpc"]
  },

  // --- MARITIME & ADMIRALTY LAW (SPECIALITY) ---
  {
    id: "admiralty-4",
    category: "Maritime & Admiralty",
    act: "Admiralty (Jurisdiction & Settlement of Maritime Claims) Act, 2017",
    section: "Section 4",
    legacyEquiv: "Colonial Courts of Admiralty Act 1890",
    title: "Maritime Claims & Maritime Liens",
    summary: "Lists 23 statutory maritime claims over which the High Court possesses admiralty jurisdiction, including disputes regarding vessel ownership, mortgage, loss of life, damage done by ship, salvage, towage, bunker supplies, master's and crew's wages, and charter-party disputes.",
    cognizable: "Civil Maritime Jurisdiction",
    bailable: "N/A",
    triableBy: "High Court of Kerala (Admiralty Court)",
    punishment: "Vessel Arrest, Judicial Sale & Enforcement against Proceeds",
    keyPrecedents: "M.V. Elisabeth v. Harwan Investment & Trading (1993) Supp 2 SCC 433; Chrisomar Corporation v. MJR Steels (2018) 16 SCC 117",
    advocateInsight: "Advocate Varghese Sabu's marquee domain at Cochin Port Trust & Vallarpadam ICTT: Invoking admiralty jurisdiction to file admiralty suits in rem against foreign merchant vessels for fuel supplies, crew wages, or cargo claims.",
    tags: ["admiralty", "maritime", "ship arrest", "bunkers", "cochin port", "high court", "vessel", "cargo", "lien"]
  },
  {
    id: "admiralty-5",
    category: "Maritime & Admiralty",
    act: "Admiralty (Jurisdiction & Settlement of Maritime Claims) Act, 2017",
    section: "Section 5",
    legacyEquiv: "Brussels Convention on Arrest of Sea-Going Ships 1952",
    title: "Arrest of Vessel in Rem",
    summary: "High Court may order the arrest of any vessel which is within the waters of its territorial jurisdiction for the purpose of securing a maritime claim, where the owner of the vessel was, at the time the claim arose, the owner or charterer.",
    cognizable: "In Rem Jurisdiction",
    bailable: "N/A",
    triableBy: "High Court of Kerala (Admiralty Bench)",
    punishment: "Ex-parte Warrant of Vessel Arrest & Port Clearance Revocation",
    keyPrecedents: "M.V. Elisabeth (1993); Videsh Sanchar Nigam Ltd v. M.V. Kapitan Kud (1996) 7 SCC 127",
    advocateInsight: "Execution requires rapid coordination with the Registrar, Cochin Port Conservator, and Indian Coast Guard before the ship heaves anchor and exits Indian territorial waters (12 nautical miles).",
    tags: ["arrest of ship", "in rem", "admiralty suit", "maritime claim", "cochin", "vessel arrest", "shipping"]
  },

  // --- CONSTITUTION OF INDIA ---
  {
    id: "const-226",
    category: "Constitutional Writs",
    act: "Constitution of India, 1950",
    section: "Article 226",
    legacyEquiv: "Writ Jurisdiction of High Courts",
    title: "Power of High Courts to Issue Certain Writs",
    summary: "High Courts have wide jurisdiction to issue directions, orders or writs, including writs in the nature of Habeas Corpus, Mandamus, Prohibition, Quo Warranto and Certiorari for enforcement of Fundamental Rights and for any other purpose.",
    cognizable: "Extraordinary Constitutional Jurisdiction",
    bailable: "N/A",
    triableBy: "High Court of Kerala",
    punishment: "Quashing of administrative orders, mandamus to state authorities, grant of interim stay",
    keyPrecedents: "Whirlpool Corporation v. Registrar of Trade Marks (1998) 8 SCC 1; L. Chandra Kumar v. Union of India (1997)",
    advocateInsight: "Article 226 is broader than Article 32 ('for any other purpose'). Whirlpool exceptions allow bypassing statutory alternative remedy when fundamental rights are breached or natural justice is violated.",
    tags: ["article 226", "writ petition", "mandamus", "certiorari", "habeas corpus", "high court", "constitution", "stay order"]
  },
  {
    id: "const-21",
    category: "Constitutional Writs",
    act: "Constitution of India, 1950",
    section: "Article 21",
    legacyEquiv: "Right to Life & Personal Liberty",
    title: "Protection of Life and Personal Liberty",
    summary: "No person shall be deprived of his life or personal liberty except according to procedure established by law. Encompasses right to speedy trial, legal aid, privacy, dignity, and fair investigation.",
    cognizable: "Inviolable Fundamental Right",
    bailable: "N/A",
    triableBy: "Supreme Court & High Courts",
    punishment: "Constitutional Invalidity of State action & compensation",
    keyPrecedents: "Maneka Gandhi v. Union of India (1978) 1 SCC 248 ('Just, fair and reasonable' procedure); K.S. Puttaswamy (2017) 10 SCC 1 (Privacy)",
    advocateInsight: "The bedrock of modern Indian criminal defense. In every bail and quashing petition before the Kerala High Court, Article 21 is invoked against arbitrary State prosecution.",
    tags: ["article 21", "life", "personal liberty", "speedy trial", "fair investigation", "puttaswamy", "maneka gandhi"]
  },
  {
    id: "const-14",
    category: "Constitutional Writs",
    act: "Constitution of India, 1950",
    section: "Article 14",
    legacyEquiv: "Equality Before Law",
    title: "Equality Before Law & Prohibition of Arbitrariness",
    summary: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India. Non-arbitrariness doctrine applies to all executive actions, government tenders, and appointments.",
    cognizable: "Fundamental Right",
    bailable: "N/A",
    triableBy: "Constitutional Courts",
    punishment: "Striking down arbitrary state tenders, rules or executive orders",
    keyPrecedents: "E.P. Royappa v. State of Tamil Nadu (1974) 4 SCC 3; Shayara Bano v. Union of India (2017) (Manifest arbitrariness)",
    advocateInsight: "Manifest Arbitrariness doctrine is Advocate Sabu's core weapon in challenging unfair state tender exclusions and arbitrary administrative actions in service matters.",
    tags: ["article 14", "equality", "arbitrariness", "state tenders", "service law", "royappa", "shayara bano"]
  },

  // --- ARBITRATION & COMMERCIAL LITIGATION ---
  {
    id: "arb-9",
    category: "Corporate & Arbitration",
    act: "Arbitration & Conciliation Act, 1996",
    section: "Section 9",
    legacyEquiv: "UNCITRAL Model Law on Commercial Arbitration",
    title: "Interim Measures by Court in Arbitration Matters",
    summary: "A party may, before or during arbitral proceedings or at any time after making of the arbitral award but before enforcement, apply to a Court for interim measure of protection (preservation, custody or sale of goods, interim injunction).",
    cognizable: "Civil Arbitration Jurisdiction",
    bailable: "N/A",
    triableBy: "Commercial Court / High Court",
    punishment: "Interim Injunction, asset freeze, receiver appointment",
    keyPrecedents: "Firm Ashok Traders v. Gurumukh Das Saluja (2004) 3 SCC 155; Essar House v. Arcellor Mittal (2022)",
    advocateInsight: "High urgency remedy: Where assets are about to be siphoned off prior to the constitution of the arbitral tribunal, filing a Section 9 petition secures the client's commercial stakes immediately.",
    tags: ["arbitration", "section 9", "interim relief", "injunction", "commercial court", "asset freeze", "dispute"]
  },
  {
    id: "arb-11",
    category: "Corporate & Arbitration",
    act: "Arbitration & Conciliation Act, 1996",
    section: "Section 11",
    legacyEquiv: "Arbitrator Appointment by Court",
    title: "Appointment of Arbitrators by High Court / Supreme Court",
    summary: "Where the agreed appointment procedure fails or a party defaults in nominating an arbitrator within 30 days, an application is made to the Chief Justice / designate of the High Court to appoint an independent arbitrator.",
    cognizable: "Judicial Arbitration Jurisdiction",
    bailable: "N/A",
    triableBy: "Designated Bench of High Court of Kerala",
    punishment: "Appointment of Sole Arbitrator / Arbitral Tribunal",
    keyPrecedents: "Vidya Drolia v. Durga Trading Corp (2021) 2 SCC 1; In Re Interplay Between Arbitration Agreements & Stamp Act (2023)",
    advocateInsight: "The Court's scope of inquiry under Section 11(6) is prima facie examination of the existence of the arbitration agreement. Unstamped agreements no longer bar Section 11 appointments after 7-Judge SC ruling.",
    tags: ["arbitration", "section 11", "arbitrator appointment", "arbitral tribunal", "high court", "contract"]
  },
  {
    id: "arb-34",
    category: "Corporate & Arbitration",
    act: "Arbitration & Conciliation Act, 1996",
    section: "Section 34",
    legacyEquiv: "Challenge to Arbitral Award",
    title: "Application for Setting Aside Arbitral Award",
    summary: "Recourse to a Court against an arbitral award may be made only by an application for setting aside such award on grounds such as incapacity, invalid agreement, violation of public policy of India, or patent illegality.",
    cognizable: "Commercial Appellate / Supervisory Jurisdiction",
    bailable: "N/A",
    triableBy: "Commercial Division of High Court / District Court",
    punishment: "Setting aside or upholding arbitral award",
    keyPrecedents: "Associate Builders v. DDA (2015) 3 SCC 49; Ssangyong Engineering v. NHAI (2019) 15 SCC 131",
    advocateInsight: "Patent Illegality cannot be invoked in international commercial arbitrations. Merely re-appreciating evidence is impermissible; the award must shock the judicial conscience to be set aside.",
    tags: ["arbitral award", "section 34", "patent illegality", "public policy", "setting aside award", "arbitration"]
  },

  // --- BANKING & CHEQUE BOUNCE ---
  {
    id: "ni-138",
    category: "Corporate & White Collar",
    act: "Negotiable Instruments Act, 1881",
    section: "Section 138",
    legacyEquiv: "Dishonour of Cheque",
    title: "Dishonour of Cheque for Insufficiency of Funds",
    summary: "Deemed criminal offence when a cheque drawn for discharge of legally enforceable debt is returned unpaid by the bank for insufficiency of funds, provided statutory notice is issued within 30 days and payment not made in 15 days.",
    cognizable: "Non-Cognizable",
    bailable: "Bailable",
    triableBy: "Judicial Magistrate of First Class",
    punishment: "Imprisonment up to 2 years, or Fine up to twice the cheque amount, or both",
    keyPrecedents: "Rangappa v. Sri Mohan (2010) 11 SCC 441 (Presumption u/s 139 is rebuttable on preponderance of probabilities); Meters and Instruments (2018)",
    advocateInsight: "Rebutting statutory presumption under Section 139 NI Act requires raising probable defense without necessarily stepping into the witness box. Crucial to verify strict compliance with 15-day statutory notice timelines.",
    tags: ["138", "cheque bounce", "negotiable instruments", "dishonour", "debt", "statutory notice", "banking"]
  },

  // --- EVIDENCE & BSA ---
  {
    id: "bsa-63",
    category: "Procedural & Bail",
    act: "Bharatiya Sakshya Adhiniyam, 2023 (BSA)",
    section: "Section 63",
    legacyEquiv: "Section 65B Indian Evidence Act, 1872",
    title: "Admissibility of Electronic Records & Mandatory Certificate",
    summary: "Lays down conditions for admitting electronic records (emails, WhatsApp chats, server logs, CCTV footage, phone recordings) into evidence without producing original computing device, accompanied by certificate.",
    cognizable: "Evidence Law Rule",
    bailable: "N/A",
    triableBy: "All Courts & Tribunals",
    punishment: "Exclusion of uncertified electronic evidence",
    keyPrecedents: "Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal (2020) 7 SCC 1 (Mandatory requirement of 65B certificate)",
    advocateInsight: "Arjun Panditrao makes Section 63 BSA certificate non-negotiable. If the prosecution fails to produce a contemporaneous certificate from the device custodian, electronic evidence collapses entirely.",
    tags: ["electronic evidence", "65b", "63", "bsa", "evidence act", "whatsapp chats", "cctv", "certificate"]
  }
];

// Curated Legal Facts & Trivia
const LEGAL_FACTS = [
  {
    topic: "Maritime Jurisdiction at Cochin Port",
    tag: "Maritime Law",
    badge: "Did You Know?",
    fact: "The High Court of Kerala possesses ancient Admiralty Jurisdiction over Indian territorial waters. Under the Admiralty Act 2017, an advocate can arrest a foreign cargo ship at Cochin Port or SPM Vallarpadam by filing an Admiralty Suit in rem, creating a maritime lien that follows the vessel anywhere on earth."
  },
  {
    topic: "The Basic Structure Doctrine Was Born in Kerala",
    tag: "Constitutional Milestone",
    badge: "Landmark Fact",
    fact: "India's greatest constitutional landmark—Kesavananda Bharati v. State of Kerala (1973)—originated from Kasaragod, Kerala. A 13-judge bench established that Parliament's amending power under Article 368 cannot destroy the 'Basic Structure' of the Indian Constitution."
  },
  {
    topic: "Section 482 CrPC vs Section 528 BNSS",
    tag: "Criminal Jurisprudence",
    badge: "Practice Insight",
    fact: "The High Court's extraordinary power to quash an FIR is not governed by rigid codes but flows from inherent justice. Under Bhajan Lal principles, if an FIR lacks ingredients of a criminal offence or is tainted by malice, the High Court can quash it at the threshold."
  },
  {
    topic: "Bail is the Rule, Jail is the Exception",
    tag: "Liberty Doctrine",
    badge: "Supreme Court Maxim",
    fact: "First coined by Justice V.R. Krishna Iyer (a legendary jurist from Kerala) in State of Rajasthan v. Balchand (1977), this cardinal principle ensures that pre-trial incarceration must not become a punishment before guilt is proven."
  },
  {
    topic: "Section 9 Interim Injunctions in Arbitration",
    tag: "Commercial Litigation",
    badge: "Corporate Strategy",
    fact: "Courts can grant urgent freezing orders and protective injunctions under Section 9 of the Arbitration & Conciliation Act 1996 even BEFORE arbitration has officially commenced, provided the party manifests a clear intention to arbitrate within 90 days."
  },
  {
    topic: "Electronic Evidence Requires Strict Certification",
    tag: "Digital & Cyber Law",
    badge: "Procedural Rule",
    fact: "Under Section 63 of Bharatiya Sakshya Adhiniyam 2023 (formerly Section 65B Evidence Act), WhatsApp chats, emails, or call recordings cannot be relied upon in court unless authenticated by a certificate signed by the person having lawful control of the device."
  }
];

// Notable Landmark Cases & Reported Judgments for Advocate Varghese Sabu
const REPORTED_JUDGMENTS = [
  {
    caseNo: "Admiralty Suit No. 14 of 2023",
    court: "High Court of Kerala (Admiralty Bench)",
    title: "Ocean Blue Bunkering Ltd. v. M.V. Mediterranean Pioneer",
    subject: "Arrest of Foreign Vessel for Maritime Claim under Admiralty Act 2017",
    citation: "2023 Ker HC (Adm) 489",
    result: "Full Bunker Claim Secured (\$480,000 USD)",
    date: "November 2023",
    summary: "Filed an urgent Admiralty Suit in rem against a Liberian-flagged bulk carrier calling at Cochin Port. Successfully secured ex-parte order of vessel arrest within 6 hours of filing. Ship owners settled total claim with interest and legal costs to lift the arrest warrant.",
    tags: ["Maritime Law", "Admiralty", "Vessel Arrest", "Cochin Port"]
  },
  {
    caseNo: "Crl.M.C. No. 4120 of 2022",
    court: "High Court of Kerala",
    title: "M/s Apex Logistics & Ors v. State of Kerala & Anr",
    subject: "Quashing of FIR u/s 482 CrPC (Now 528 BNSS) in Commercial Disagreement",
    citation: "2022 (4) KLT Online 1102",
    result: "Criminal Proceedings Quashed in Entirety",
    date: "August 2022",
    summary: "Prosecution had registered an FIR under Section 406 and 420 IPC arising from delayed shipping consignment payments. Successfully demonstrated before Single Bench that failure to pay was purely a contractual disagreement devoid of dishonest inducement at inception.",
    tags: ["Criminal Defense", "Quashing", "Section 482", "White Collar"]
  },
  {
    caseNo: "Arb. O.P. (Commercial) No. 89 of 2023",
    court: "Commercial Court & High Court of Kerala",
    title: "Infra-Marine Projects Consortium v. State Coastal Authority",
    subject: "Pre-Arbitral Section 9 Protection of ₹42.5 Crore Infrastructure Assets",
    citation: "2023 (2) KLJ 644",
    result: "Injunction Granted Safeguarding Bank Guarantees",
    date: "March 2023",
    summary: "Restrained the respondent authority from encashing unconditional bank guarantees pending constitution of the arbitral tribunal, successfully establishing irretrievable injustice and fraud on commercial covenants.",
    tags: ["Arbitration", "Section 9", "Commercial Injunction", "Bank Guarantee"]
  },
  {
    caseNo: "W.P.(C) No. 18240 of 2021",
    court: "High Court of Kerala",
    title: "P. Jayasankar & Ors v. State of Kerala & PSC",
    subject: "Writ Petition under Article 226 for Seniority Rectification & Public Service",
    citation: "ILR 2022 (1) Ker 240",
    result: "Writ of Mandamus Issued in Favor of Petitioners",
    date: "December 2021",
    summary: "Challenged the arbitrary retrospective amendment of department service rules. High Court struck down the offending circular as violative of Article 14 and restored legitimate promotional expectations of government personnel.",
    tags: ["Constitutional Law", "Writ Petition", "Article 226", "Service Law"]
  }
];
