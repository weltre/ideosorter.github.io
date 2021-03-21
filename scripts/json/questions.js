questions = {
    "private_property": {
        "question": "Should Private Property exist?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {},
        "nextquestion": {
            "yes": "theo",
            "no": "market"
        }
    },
    "theo": {
        "question": "Should society be run by intermediaries to a deity?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "theocracy",
        },
        "nextquestion": {
            "no": "distributism",
        }
    },
    "distributism": {
        "question": "Should private property be made as widely owned as possible?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "distributism",
        },
        "nextquestion": {
            "no": "conditional_land_ownership",
        }
    },
    "conditional_land_ownership": {
        "question": "Should land ownership be conditional or unconditional?",
        "answers": [
            "conditional",
            "unconditional"
        ],
        "results": {
        },
        "nextquestion": {
            "yes": "scope_of_government2",
            "no": "scope_of_government1",
        }
    },
    "scope_of_government1": { //not here
        "question": "Should the scope of government be limited?",
        "answers": [
            "yes",
            "no",
            "nostate"
        ],
        "results": [
        ],
        "nextquestion": [
            "watchman_state",
            "tradvals",
            "counter_economics"
        ]
    },
    "watchman_state": {
        "question": "Should the government purely be a night watchman state?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "minarch",
        },
        "nextquestion": {
            "no": "welfare",
        }
    },
    "welfare": {
        "question": "Should there be a focus on helping the disadvantaged?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
        },
        "nextquestion": {
            "yes": "welfare_needed",
            "no": "limited_gov_tradvals",
        }
    },
    "welfare_needed": {
        "question": "Would welfare be needed to help the disadvantaged under a deregulated market economy?",
        "answers": [
            "welfare",
            "noneed"
        ],
        "results": {
            "yes": "socbert",
            "no": "bhl",
        },
        "nextquestion": {
        }
    },
    "limited_gov_tradvals": {
        "question": "Do you think a more limited government would lead to a resurgence in traditional values?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "paleobert",
            "no": "libert",
        },
        "nextquestion": {
        }
    },
    "tradvals": {
        "question": "In your ideal society, would traditional values be upheld?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
        },
        "nextquestion": {
            "yes": "tradauthstate",
            "no": "govbasicneeds",
        }
    },
    "tradauthstate": {
        "question": "Do you deem an authoritarian state necessary to secure the values and sovereignty of your nation?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
        },
        "nextquestion": {
            "yes": "corp_cap",
            "no": "strong_safety_net",
        }
    },
    "corp_cap": {
        "question": "Should the government embrace capitalism or corporatism?",
        "answers": [
            "capitalism",
            "corporatism"
        ],
        "results": {
        },
        "nextquestion": {
            "yes": "markreg",
            "no": "unions_vs_state",
        }
    },
    "markreg": {
        "question": "Should the market be closely regulated?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "socnat",
            "no": "nazcap",
        },
        "nextquestion": {
        }
    },
    "unions_vs_state": {
        "question": "Should the economy by organized by unions, or by the state?",
        "answers": [
            "unions",
            "state"
        ],
        "results": {
            "yes": "natsynd",
        },
        "nextquestion": {
            "no": "clergygov",
        }
    },
    "clergygov": {
        "question": "Should the clergy be a part of government?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "clerfash",
        },
        "nextquestion": {
            "no": "racesuperior",
        }
    },
    "racesuperior": {
        "question": "Do you deem your race to be superior above all others?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "nazi",
            "no": "fascism",
        },
        "nextquestion": {
        }
    },
    "strong_safety_net": {
        "question": "Should there be a strong social safety net for the disadvantaged in society?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "patcon",
        },
        "nextquestion": {
            "no": "intervgov",
        }
    },
    "intervgov": {
        "question": "Should the government intervene in wars that do not directly interfere with your country's national sovereignty?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "neocon",
            "no": "paleocon",
        },
        "nextquestion": {
        }
    },
    "govbasicneeds": {
        "question": "Should the government provide the basic necessities to its citizens?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "socdem",
        },
        "nextquestion": {
            "no": "econreg",
        }
    },
    "econreg": {
        "question": "Should the economy be tightly regulated?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "lib",
            "no": "neolib",
        },
        "nextquestion": {
        }
    },
    "counter_economics": {
        "question": "Should counter-economics be the focus of bringing about an ideal society?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "agorism",
        },
        "nextquestion": {
            "no": "coop_ancap",
        }
    },
    "coop_ancap": {
        "question": "Do you think that a completely deregulated, stateless society will lead to a market dominated by worker co-operatives?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "leftroth",
            "no": "ancap",
        },
        "nextquestion": {
        }
    },
    "scope_of_government2": {
        "question": "Should the scope of government be limited?",
        "answers": [
            "yes",
            "no",
            "nostate"
        ],
        "results": {
            "yes": "geolib",
            "nostate": "angeo"
        },
        "nextquestion": {
            "no": "landwelfare",
        }
    },
    "landwelfare": {
        "question": "Should the revenue from land value taxes be put primarily towards welfare?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "socgeo",
            "no": "georgism",
        },
        "nextquestion": {
        }
    },
    "market": {
        "question": "Should the market mechanism drive the allocation of goods?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
        },
        "nextquestion": {
            "yes": "statesoc",
            "no": "marx",
        }
    },
    "statesoc": {
        "question": "Should there be a strong authoritarian state to protect the working class from foreign nations?",
        "answers": [
            "yes",
            "no",
            "nostate"
        ],
        "results": {
            "yes": "tito",
            "no": "marksoc",
        },
        "nextquestion": {
            "nostate": "mutualaid"
        }
    },
    "mutualaid": {
        "question": "Should the economy be based around the principles of mutual aid?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "no": "lwma",
        },
        "nextquestion": {
            "yes": "racism",
        }
    },
    "racism": {
        "question": "Should communities be made up of ethnically homogenous populations?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "natan",
            "no": "mutualism",
        },
        "nextquestion": {
        }
    },
    "marx": {
        "question": "Should the goal of our society be to move towards a classless, moneyless and stateless society?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
        },
        "nextquestion": {
            "yes": "transstate",
            "no": "techno",
        }
    },
    "transstate": {
        "question": "Is a transitory state necessary to reach this goal?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
        },
        "nextquestion": {
            "yes": "soc_directstate1",
            "no": "labvouch",
        }
    },
    "soc_directstate1": {
        "question": "Should the workers directly own the means of production in this stage, or should the state be in control of them?",
        "answers": [
            "workers",
            "state"
        ],
        "results": {
        },
        "nextquestion": {
            "yes": "rev_ed",
            "no": "vanguard",
        }
    },
    "vanguard": {
        "question": "Is a vanguard party necessary to lead the working class in the revolution?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "no": "orthmarx",
        },
        "nextquestion": {
            "yes": "vanguard_ed",
        }
    },
    "vanguard_ed": {
        "question": "Should the role of this vanguard party be only to educate? As opposed to being some form of political leadership.",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "castro",
        },
        "nextquestion": {
            "no": "cultural_revolution",
        }
    },
    "cultural_revolution": {
        "question": "Should there be a cultural revolution to purge reactionary thought from society?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
        },
        "nextquestion": {
            "yes": "3worlds",
            "no": "socinone",
        }
    },
    "3worlds": {
        "question": "Do you subscribe to Mao Zedong's Three Worlds Theory?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "no": "mlm",
        },
        "nextquestion": {
            "yes": "nep",
        }
    },
    "nep": {
        "question": "Do you think that a multi-generational stage of state capitalism is necessary to prepare the economy for socialism?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "deng",
            "no": "mao",
        },
        "nextquestion": {
        }
    },
    "socinone": {
        "question": "Do you think that socialism can be achieved within one nation?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
        },
        "nextquestion": {
            "yes": "aboveall1",
            "no": "posadism",
        }
    },
    "aboveall1": {
        "question": "Do you think that the nation should be of most importance above all?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "nazbol",
            "no": "ml",
        },
        "nextquestion": {
        }
    },
    "posadism": {
        "question": "Do you think an apocalyptic event would be the best way to achieve socialism?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "posadism",
            "no": "trot",
        },
        "nextquestion": {
        }
    },
    "rev_ed": {
        "question": "Should there be a revolutionary party to teach the masses during and after the revolution?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
        },
        "nextquestion": {
            "yes": "synd1",
            "no": "mediabad",
        }
    },
    "synd1": {
        "question": "Should society be organized through unions?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "deleon",
        },
        "nextquestion": {
            "no": "centplan",
        }
    },
    "centplan": {
        "question": "Should the economy be planned centrally?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "bordiga",
            "no": "luxem",
        },
        "nextquestion": {
        }
    },
    "mediabad": {
        "question": "Is mass media your focal issue with capitalism?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "situationist",
            "no": "councom",
        },
        "nextquestion": {
        }
    },
    "labvouch": {
        "question": "Should society feature labour vouchers as compensation for work?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "ancol",
        },
        "nextquestion": {
            "no": "agriculture",
        }
    },
    "agriculture": {
        "question": "Should agriculture be practiced?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "no": "anprim",
        },
        "nextquestion": {
            "yes": "synd2",
        }
    },
    "synd2": {
        "question": "Should society be organized through unions?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "ansynd",
            "no": "ancom",
        },
        "nextquestion": {
        }
    },
    "techno": {
        "question": "Should the state and/or economy be run exclusively by experts?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "technocracy",
        },
        "nextquestion": {
            "no": "electsoc",
        }
    },
    "electsoc": {
        "question": "Should socialism be achieved through electoralism or through revolutionary means?",
        "answers": [
            "electoralism",
            "revolution"
        ],
        "results": {
            "yes": "demsoc",
        },
        "nextquestion": {
            "no": "soc_directstate2",
        }
    },
    "soc_directstate2": {
        "question": "Should the workers directly own the means of production or should the state be in control of them?",
        "answers": [
            "workers",
            "state"
        ],
        "results": {
        },
        "nextquestion": {
            "yes": "agriculture_industrial",
            "no": "esobullshit",
        }
    },
    "esobullshit": {
        "question": "Should class/nation be the main subject of political discussion, or should it be the Dasein (human essence)?",
        "answers": [
            "dasein",
            "classnation"
        ],
        "results": {
            "yes": "4theory",
        },
        "nextquestion": {
            "no": "bankjews",
        }
    },
    "bankjews": {
        "question": "Do you believe that the source economic problems faced by workers is down to Jewish bankers?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "strasser",
        },
        "nextquestion": {
            "no": "aboveall2",
        }
    },
    "aboveall2": {
        "question": "Do you think that the nation should be of most importance above all?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "nazbol",
            "no": "statesoc",
        },
        "nextquestion": {
        }
    },
    "agriculture_industrial": {
        "question": "Should society be focused more on agriculture than on industrial work?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "agsoc",
        },
        "nextquestion": {
            "no": "synd3",
        }
    },
    "synd3": {
        "question": "Should society be organised through unions?",
        "answers": [
            "yes",
            "no"
        ],
        "results": {
            "yes": "synd",
            "no": "libsoc",
        },
        "nextquestion": {
        }
    }
}