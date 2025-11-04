export const categories = [
  {
    code: "AP",
    name: "Alignment Principles",
    pathology: "normative void",
    color: "#E6FFE9",
    description:
      "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  },
  {
    code: "AB",
    name: "Alignment Breakdowns",
    pathology: "hoping for A while rewarding B",
    color: "#FFF2E6",
    description:
      "Cases where systems express one ideal (A) but incentivize something different (B), creating misalignment between intention and reward."
  }
];

export const cards = [
  {
    category: "AP",
    name: "Beneficence",
    definition: "Act to promote well-being, and prevent harm for others.",
    human: "Looking to improve others' conditions, not just avoid harm.",
    organizational: "Pursuing actions and outcomes that contribute to societal good.",
    professional: "Prioritizing public safety and welfare even while working for a client.",
    machine: "Designing systems that promote human well-being and overall societal good.",
    failureModes: {
      human: "A person trying to help one person inadvertently disadvantages another.",
      organizational: "A pharmaceutical company doesn't release affordable cures to preserve profit.",
      professional: "An engineer releases a flawed and biased algorithm because fixing it would cause delays.",
      machine: "The machine consumes all the world's resources to adhere to one user's command."
    }
  },
  {
    category: "AP",
    name: "Non-Maleficence",
    definition: "Avoid causing harm to others.",
    human: "Work to prevent causing any form of harm to others.",
    organizational: "Design processes and products that minimize harm caused to others.",
    professional: "Work to minimize harm by anticipating and resolving potential conflicts that may harm others.",
    machine:
      "Uphold duties assigned by human oversight while minimizing harm to others, regardless of potential benefits like efficiency.",
    failureModes: {
      human: "An influencer spreads misinformation about a group of people for more views and reward.",
      organizational: "A company releases a harmful product knowingly to reduce costs.",
      professional: "A doctor accidentally swaps medication and still distributes it to maintain reputation.",
      machine: "A cleaning robot injures someone in its way while optimizing for efficiency."
    }
  },
  {
    category: "AP",
    name: "Integrity",
    definition: "Adhere to moral truth, aligning with ethical and moral principles.",
    human: "Be honest, reliable, and consistent in behavior and moral actions.",
    organizational: "Ensure truthful communication, transparency, and consistency between stated values and actual behaviors.",
    professional: "Maintain honesty and accuracy, resisting pressure to falsify information for the sake of efficiency or reputation.",
    machine: "Apply transparency and consistency, resisting deceptive behavior that might emerge from model architecture.",
    failureModes: {
      human: "Someone lies on a résumé and falsifies credentials to get a job.",
      organizational: "A company claims sustainability while heavily polluting.",
      professional: "A researcher distorts results to confirm their hypothesis.",
      machine: "A chatbot hallucinates but confidently presents false information as fact."
    }
  },
  {
    category: "AB",
    name: "Teamwork",
    definition:
      "Hoped for: collaborative teams that share ideas and support one another. Rewarded: individuals who optimize only for personal output or recognition. Alignment depends on valuing contribution to collective success over individual competition.",
    human: "People thrive when collaboration is recognized as equally or more important than personal success.",
    organizational: "Organizations succeed when performance metrics include team benchmarks and shared outcomes.",
    professional: "Experts advance their fields faster when collaboration and data sharing are rewarded.",
    machine: "Multi-agent systems perform better when each agent’s rewards are linked to group performance.",
    failureModes: {
      human: "A student refuses to help classmates because grading is curved.",
      organizational: "Departments sabotage each other to meet separate performance metrics.",
      professional: "Researchers hide data to maintain a competitive edge for authorship.",
      machine: "AI agents act selfishly in simulations, reducing collective performance."
    }
  },
  {
    category: "AB",
    name: "Creativity",
    definition:
      "Hoped for: innovative thinkers who improve processes. Rewarded: those who rigidly follow procedures without questioning them.",
    human: "People innovate when initiative is recognized instead of punished as disobedience.",
    organizational: "Companies thrive when they allow experimentation and pilot programs for new ideas.",
    professional: "Experts progress faster when they can challenge outdated practices through experimentation.",
    machine: "AI systems discover better strategies when allowed controlled exploration beyond strict heuristics.",
    failureModes: {
      human: "A student rigidly follows lab steps and misses discovering a new insight.",
      organizational: "An employee is punished for suggesting a workflow change that could improve efficiency.",
      professional: "Engineers can’t test alternative designs due to overregulation, missing better solutions.",
      machine: "A reinforcement agent overfits rules and fails to explore potentially better strategies."
    }
  },
  {
    category: "AB",
    name: "Integrity",
    definition:
      "Hoped for: honesty and ethical consistency. Rewarded: maintaining appearances and good optics even when it means concealing truth.",
    human: "People grow morally stronger when honesty is valued more than image.",
    organizational: "Organizations succeed when they reward transparency rather than punishing truth-telling.",
    professional: "Experts maintain credibility by reporting accurate data, not what’s most flattering.",
    machine: "Machines align better when optimized for truthful, transparent communication rather than pleasing responses.",
    failureModes: {
      human: "A student cheats to maintain a good reputation.",
      organizational: "A company hides product flaws to protect its image.",
      professional: "Researchers manipulate data to fit expected outcomes.",
      machine: "A chatbot fabricates information to satisfy users instead of admitting uncertainty."
    }
  },
  {
    category: "AT",
    name: "Accountability",
    definition: "Being responsible and expected to justify decisions or actions.",
    people: "Expected to follow through on assigned responsibilities and roles.",
    peopleref:
      "https://scholarworks.umb.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1001&context=philosophy_faculty_pubs",
    organizational:
      "Following through with plans and agendas mentioned to public; if producing harm, then making amends to fix it.",
    organizationalref: "OPTIONAL",
    professional:
      "Professionals taking responsibility for their actions and expertise given to others (e.g. patients, public).",
    professionalref: "OPTIONAL",
    machine: "Citing sources for where information comes from and acting reliably.",
    machineref: "OPTIONAL",
    failureModes: {
      human: "Individuals don't take responsibility for mistakes or shift blame, creating a lack of trust.",
      organizational: "Institutions avoid responsibility for specific outcomes or issues; no corrective action is taken.",
      professional:
        "Experts fail to disclose issues, overstate credibility, or avoid responsibility for their advice, eroding public trust.",
      machine:
        "Machines produce biased or unverifiable outputs that can't be traced back, perpetuating a lack of verifiable knowledge."
    },
    expand: {
      human: "Encourage communication and reasoning when actions affect others; establish systems of reporting and peer accountability.",
      organizational: "Develop systems where institutions are held responsible and answerable to stakeholders.",
      professional:
        "Promote cultures of disclosure and peer review, and ensure adherence to ethical standards.",
      machine:
        "Integrate explainability and human review into system design so the machine can be held answerable for its outputs."
    }
  },
  {
    category: "AT",
    name: "Reliability/Consistency",
    definition: "Being trustworthy and dependable for executing and performing tasks or responsibilities.",
    people: "Following through on commitments or assigned roles; behaving predictably under similar circumstances.",
    peopleref:
      "https://scholarworks.umb.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1001&context=philosophy_faculty_pubs",
    organizational:
      "Maintaining stability in operations and delivering consistent quality in products or services despite external factors.",
    organizationalref: "OPTIONAL",
    professional: "Providing dependable expertise and work, adhering to professional and ethical standards.",
    professionalref: "OPTIONAL",
    machine:
      "Producing repeatable and consistent outputs in similar conditions, functioning reliably regardless of external variables.",
    machineref: "OPTIONAL",
    failureModes: {
      human: "loremipsum",
      organizational: "loremipsum",
      professional: "loremipsum",
      machine: "loremipsum"
    },
    expand: {
      human: "loremipsum",
      organizational: "loremipsum",
      professional: "loremipsum",
      machine: "loremipsum"
    }
  },
  {
    category: "AT",
    name: "Empathy",
    definition: "The ability to understand the feelings of another.",
    people: "loremipsum",
    peopleref:
      "https://scholarworks.umb.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1001&context=philosophy_faculty_pubs",
    organizational: "loremipsum",
    organizationalref: "OPTIONAL",
    professional: "loremipsum",
    professionalref: "OPTIONAL",
    machine: "loremipsum",
    machineref: "OPTIONAL",
    failureModes: {
      human: "loremipsum",
      organizational: "loremipsum",
      professional: "loremipsum",
      machine: "loremipsum"
    },
    expand: {
      human: "loremipsum",
      organizational: "loremipsum",
      professional: "loremipsum",
      machine: "loremipsum"
    }
  },
  {
    category: "AT",
    name: "Conflict Resolution",
    definition: "Being able to find peaceful solutions to disagreements.",
    people: "loremipsum",
    peopleref:
      "https://scholarworks.umb.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1001&context=philosophy_faculty_pubs",
    organizational: "loremipsum",
    organizationalref: "OPTIONAL",
    professional: "loremipsum",
    professionalref: "OPTIONAL",
    machine: "loremipsum",
    machineref: "OPTIONAL",
    failureModes: {
      human: "loremipsum",
      organizational: "loremipsum",
      professional: "loremipsum",
      machine: "loremipsum"
    },
    expand: {
      human: "loremipsum",
      organizational: "loremipsum",
      professional: "loremipsum",
      machine: "loremipsum"
    }
  },
  {
    category: "AT",
    name: "Honesty/Veracity",
    definition: "Being truthful and accurate.",
    people: "loremipsum",
    peopleref:
      "https://scholarworks.umb.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1001&context=philosophy_faculty_pubs",
    organizational: "loremipsum",
    organizationalref: "OPTIONAL",
    professional: "loremipsum",
    professionalref: "OPTIONAL",
    machine: "loremipsum",
    machineref: "OPTIONAL",
    failureModes: {
      human: "loremipsum",
      organizational: "loremipsum",
      professional: "loremipsum",
      machine: "loremipsum"
    },
    expand: {
      human: "loremipsum",
      organizational: "loremipsum",
      professional: "loremipsum",
      machine: "loremipsum"
    }
  }
];
