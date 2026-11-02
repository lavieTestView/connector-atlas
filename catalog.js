/* Connector Atlas catalog – every connector the tool knows. Edited by Claude; the HTML never changes.
   families[]   : the connector types offered in the need search, with their questions:
                  mounts / genders [value, label, subtitle, icon, small note]; sizes {key:{label, awg:[min,max]}} for the wire fit;
                  coax:true adds the coax-cable question; generator:"d38999" builds D38999 part numbers from the d38999 block.
   d38999       : rules data – inserts {"shell-insert": {contactSize: count}}, finishes, styles (/20 /24 /26), contacts per size.
                  A new insert needs img/d38999_<shell-insert>_pin.png and _socket.png.
   parts[]      : explicit part numbers (any family). search{} drives the need search:
                  mount[], gender, angles[], withPins, contacts {sizeKey: count}, cables[] / noCable for coax.
   accessories[]: contacts, backshells, covers that open from links (not offered in the need search).
   aliases[]    : other spellings of a part {pn, to, note} – e.g. D38999_24WC35SN → D38999/24WC35SN.
   index[]      : extra part numbers offered in the part-number search (e.g. D38999 alternate keys A–E). */
window.CATALOG = {
 "version": 1,
 "updated": "2026-11-02",
 "examples": [
  "D38999/26WC35PN",
  "D38999/24FJ37SN",
  "D38999_24WG11SC",
  "TV06RW-13-35P-LC",
  "M24308/4-3F",
  "172-E25-213R911",
  "163X10199X",
  "M39012/16-0101",
  "031-5431-1010",
  "TVP00RW-13-35P-PCB"
 ],
 "families": [
  {
   "id": "d38999",
   "name": "D38999",
   "sub": "MIL-DTL-38999 Series III circular",
   "icon": "circ",
   "meta": "/20 /24 /26",
   "generator": "d38999",
   "mounts": [
    [
     "cable",
     "Cable",
     "In-line on the harness",
     "cable",
     "D38999/26 plug"
    ],
    [
     "wall",
     "Panel – wall mount",
     "Square flange, 4 screws",
     "wall",
     "D38999/20"
    ],
    [
     "jam",
     "Panel – jam nut",
     "Single round hole, rear nut",
     "jam",
     "D38999/24"
    ],
    [
     "pcb",
     "PCB",
     "PC-tail receptacle on a board",
     "pcb",
     "Amphenol TV"
    ]
   ],
   "genders": [
    [
     "male",
     "Male",
     "Pin contacts",
     "male",
     "P insert"
    ],
    [
     "female",
     "Female",
     "Socket contacts",
     "female",
     "S insert"
    ]
   ],
   "pinsMeta": [
    "MIL D38999",
    "Amphenol TV -LC"
   ],
   "angleMeta": "M85049/39 backshell",
   "sizes": {
    "12": {
     "label": "#12",
     "awg": [
      12,
      14
     ]
    },
    "16": {
     "label": "#16",
     "awg": [
      16,
      20
     ]
    },
    "20": {
     "label": "#20",
     "awg": [
      20,
      24
     ]
    },
    "22D": {
     "label": "#22D",
     "awg": [
      22,
      28
     ]
    },
    "8TX": {
     "label": "#8 twinax",
     "awg": null
    }
   }
  },
  {
   "id": "dsub",
   "name": "D-sub",
   "sub": "MIL-DTL-24308 rectangular, standard and high density",
   "icon": "dsub",
   "meta": "M24308 · CONEC · TE · NorComp · ITT · HARTING",
   "mounts": [
    [
     "cable",
     "Cable",
     "With a 165X backshell",
     "cable",
     ""
    ],
    [
     "panel",
     "Panel",
     "Shell screwed to a cut-out",
     "wall",
     ""
    ],
    [
     "pcb",
     "PCB",
     "Right angle or vertical, solder tails",
     "pcb",
     ""
    ]
   ],
   "genders": [
    [
     "male",
     "Male",
     "Pin contacts",
     "male",
     "M24308/4"
    ],
    [
     "female",
     "Female",
     "Socket contacts",
     "female",
     "M24308/2"
    ]
   ],
   "pinsMeta": [
    "M24308 list",
    "CONEC 163X / 164X, TE"
   ],
   "sizes": {
    "S20": {
     "label": "size 20",
     "awg": [
      20,
      24
     ]
    },
    "HD22": {
     "label": "size 22 HD",
     "awg": [
      22,
      28
     ]
    }
   }
  },
  {
   "id": "bnc",
   "name": "BNC",
   "sub": "Bayonet coax, 50 / 75 Ω",
   "icon": "coax",
   "meta": "M39012 · Amphenol RF · Pomona · Molex",
   "coax": true,
   "mounts": [
    [
     "cable",
     "Cable",
     "Plug or in-line jack on the cable",
     "cable",
     ""
    ],
    [
     "panel",
     "Panel – front mount",
     "Inserted from the front",
     "panel",
     "/18, /22"
    ],
    [
     "bulkhead",
     "Bulkhead – rear mount",
     "Through the hole, held by a nut",
     "bulkhead",
     "/19, /21"
    ],
    [
     "pcb",
     "PCB",
     "Board-mounted",
     "pcb",
     ""
    ]
   ],
   "genders": [
    [
     "male",
     "Plug (male)",
     "Centre pin",
     "male",
     ""
    ],
    [
     "female",
     "Jack (female)",
     "Centre socket",
     "female",
     ""
    ]
   ],
   "angleMeta": "M39012/20"
  },
  {
   "id": "tnc",
   "name": "TNC",
   "sub": "Threaded coax, 50 Ω",
   "icon": "coax",
   "meta": "M39012 · Amphenol RF",
   "coax": true,
   "mounts": [
    [
     "cable",
     "Cable",
     "Plug or in-line jack on the cable",
     "cable",
     ""
    ],
    [
     "panel",
     "Panel – front mount",
     "Inserted from the front",
     "panel",
     "/29, /32"
    ],
    [
     "bulkhead",
     "Bulkhead – rear mount",
     "Through the hole, held by a nut",
     "bulkhead",
     "/28, /31"
    ],
    [
     "pcb",
     "PCB",
     "Board-mounted",
     "pcb",
     ""
    ]
   ],
   "genders": [
    [
     "male",
     "Plug (male)",
     "Centre pin",
     "male",
     ""
    ],
    [
     "female",
     "Jack (female)",
     "Centre socket",
     "female",
     ""
    ]
   ]
  }
 ],
 "coaxCables": [
  [
   "RG-58",
   "Group VI A",
   50
  ],
  [
   "RG-303",
   "Group VI A",
   50
  ],
  [
   "RG-142",
   "Group VI B",
   50
  ],
  [
   "RG-223",
   "Group VI B",
   50
  ],
  [
   "RG-400",
   "Group VI B",
   50
  ],
  [
   "RG-316",
   "Group II",
   50
  ],
  [
   "RG-174",
   "Group II",
   50
  ],
  [
   "RG-59",
   "Group VII",
   75
  ],
  [
   "RG-62",
   "Group VII",
   93
  ],
  [
   "RG-122",
   "Group IV",
   50
  ],
  [
   "RG-213",
   "Group X",
   50
  ],
  [
   "RG-179",
   "Group II B",
   75
  ]
 ],
 "d38999": {
  "shellLetters": {
   "9": "A",
   "11": "B",
   "13": "C",
   "15": "D",
   "17": "E",
   "19": "F",
   "21": "G",
   "23": "H",
   "25": "J"
  },
  "inserts": {
   "9-35": {
    "22D": 6
   },
   "9-98": {
    "20": 3
   },
   "11-2": {
    "16": 2
   },
   "11-35": {
    "22D": 13
   },
   "11-98": {
    "20": 6
   },
   "13-4": {
    "16": 4
   },
   "13-8": {
    "20": 8
   },
   "13-35": {
    "22D": 22
   },
   "13-98": {
    "20": 10
   },
   "15-5": {
    "16": 5
   },
   "15-19": {
    "20": 19
   },
   "15-35": {
    "22D": 37
   },
   "15-97": {
    "16": 4,
    "20": 8
   },
   "17-6": {
    "12": 6
   },
   "17-8": {
    "16": 8
   },
   "17-26": {
    "20": 26
   },
   "17-35": {
    "22D": 55
   },
   "19-11": {
    "16": 11
   },
   "19-32": {
    "20": 32
   },
   "19-35": {
    "22D": 66
   },
   "21-11": {
    "12": 11
   },
   "21-16": {
    "16": 16
   },
   "21-35": {
    "22D": 79
   },
   "21-41": {
    "20": 41
   },
   "23-21": {
    "16": 21
   },
   "23-35": {
    "22D": 100
   },
   "23-55": {
    "20": 55
   },
   "25-19": {
    "12": 19
   },
   "25-29": {
    "16": 29
   },
   "25-35": {
    "22D": 128
   },
   "25-37": {
    "16": 37
   },
   "25-61": {
    "20": 61
   },
   "11-5": {
    "20": 5
   },
   "15-18": {
    "20": 18
   },
   "19-18": {
    "22D": 14,
    "8TX": 4
   },
   "23-53": {
    "20": 53
   },
   "25-43": {
    "20": 23,
    "16": 20
   },
   "25-7": {
    "22D": 97,
    "8TX": 2
   }
  },
  "contacts": {
   "12": [
    "M39029/58-365",
    "M39029/56-353"
   ],
   "16": [
    "M39029/58-364",
    "M39029/56-352"
   ],
   "20": [
    "M39029/58-363",
    "M39029/56-351"
   ],
   "22D": [
    "M39029/58-360",
    "M39029/56-348"
   ],
   "8TX": [
    "M39029/90-529",
    "M39029/91-530"
   ]
  },
  "finishes": {
   "W": {
    "name": "Olive drab cadmium",
    "sw": "#5d5b3c",
    "backshell": "W",
    "commercial": "RW"
   },
   "F": {
    "name": "Electroless nickel (silver)",
    "sw": "#c4c8cc",
    "backshell": "N",
    "commercial": "RF"
   },
   "Z": {
    "name": "Black zinc-nickel",
    "sw": "#1d1f22",
    "backshell": "Z",
    "commercial": "DZ"
   }
  },
  "styles": {
   "20": {
    "name": "wall-mount receptacle (4-hole flange)",
    "mount": "wall",
    "mountText": "panel – wall mount",
    "side": "side_d38999_wall_side.png",
    "sideCap": "D38999/20 wall-mount receptacle",
    "commercial": "TVP00",
    "short": "Wall-mount receptacle"
   },
   "24": {
    "name": "jam-nut receptacle (single hole)",
    "mount": "jam",
    "mountText": "panel – jam nut",
    "side": "side_d38999_jam_side.png",
    "sideCap": "D38999/24 jam-nut receptacle",
    "commercial": "TV07",
    "short": "Jam-nut receptacle"
   },
   "26": {
    "name": "straight plug",
    "mount": "cable",
    "mountText": "cable",
    "side": "side_d38999_plug_side.png",
    "sideCap": "D38999/26 plug with M85049/38 backshell (W114 master)",
    "commercial": "TV06",
    "short": "Plug"
   }
  },
  "pcb": {
   "prefix": "TVP00",
   "side": "side_d38999_wall_side.png",
   "sideCap": "Wall-mount receptacle body (PCB tails not drawn)"
  },
  "catalogUrl": "https://www.amphenol-aerospace.com/resources/literature/download/38999-catalog"
 },
 "parts": [
  {
   "pn": "M24308/4-1F",
   "family": "dsub",
   "short": "DE-9 plug · M24308 · with contacts",
   "desc": "D-subminiature DE-9 plug, pin contacts, crimp, standard density, MIL-DTL-24308/4, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/2-1F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug with thumbscrews (engineer’s picture)",
   "front": "dsub_std9_male.png",
   "frontCap": "DE-9 pin face",
   "shell": "E",
   "pins": [
    {
     "pn": "M39029/64-369",
     "note": "size 20 pin, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/detail/amphenol-conec/165X02609X/3534032"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 9
    }
   }
  },
  {
   "pn": "M24308/2-1F",
   "family": "dsub",
   "short": "DE-9 receptacle · M24308 · with contacts",
   "desc": "D-subminiature DE-9 receptacle, socket contacts, crimp, standard density, MIL-DTL-24308/2, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/4-1F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle with hex jackposts (engineer’s picture)",
   "front": "dsub_std9_female.png",
   "frontCap": "DE-9 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/detail/amphenol-conec/165X02609X/3534032"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 9
    }
   }
  },
  {
   "pn": "M24308/4-2F",
   "family": "dsub",
   "short": "DA-15 plug · M24308 · with contacts",
   "desc": "D-subminiature DA-15 plug, pin contacts, crimp, standard density, MIL-DTL-24308/4, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X02619X"
   ],
   "mates": [
    "M24308/2-2F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug with thumbscrews (engineer’s picture)",
   "front": "dsub_std15_male.png",
   "frontCap": "DA-15 pin face",
   "shell": "A",
   "pins": [
    {
     "pn": "M39029/64-369",
     "note": "size 20 pin, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/result?keywords=165X02619X"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 15
    }
   }
  },
  {
   "pn": "M24308/2-2F",
   "family": "dsub",
   "short": "DA-15 receptacle · M24308 · with contacts",
   "desc": "D-subminiature DA-15 receptacle, socket contacts, crimp, standard density, MIL-DTL-24308/2, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X02619X"
   ],
   "mates": [
    "M24308/4-2F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle with hex jackposts (engineer’s picture)",
   "front": "dsub_std15_female.png",
   "frontCap": "DA-15 socket face",
   "shell": "A",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/result?keywords=165X02619X"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 15
    }
   }
  },
  {
   "pn": "M24308/4-3F",
   "family": "dsub",
   "short": "DB-25 plug · M24308 · with contacts",
   "desc": "D-subminiature DB-25 plug, pin contacts, crimp, standard density, MIL-DTL-24308/4, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X02629X"
   ],
   "mates": [
    "M24308/2-3F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug with thumbscrews (engineer’s picture)",
   "front": "dsub_std25_male.png",
   "frontCap": "DB-25 pin face",
   "shell": "B",
   "pins": [
    {
     "pn": "M39029/64-369",
     "note": "size 20 pin, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/result?keywords=165X02629X"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "M24308/2-3F",
   "family": "dsub",
   "short": "DB-25 receptacle · M24308 · with contacts",
   "desc": "D-subminiature DB-25 receptacle, socket contacts, crimp, standard density, MIL-DTL-24308/2, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X02629X"
   ],
   "mates": [
    "M24308/4-3F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle with hex jackposts (engineer’s picture)",
   "front": "dsub_std25_female.png",
   "frontCap": "DB-25 socket face",
   "shell": "B",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/result?keywords=165X02629X"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "M24308/4-4F",
   "family": "dsub",
   "short": "DC-37 plug · M24308 · with contacts",
   "desc": "D-subminiature DC-37 plug, pin contacts, crimp, standard density, MIL-DTL-24308/4, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/2-4F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug with thumbscrews (engineer’s picture)",
   "front": "dsub_std37_male.png",
   "frontCap": "DC-37 pin face",
   "shell": "C",
   "pins": [
    {
     "pn": "M39029/64-369",
     "note": "size 20 pin, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/detail/amphenol-conec/165X02639X/5217402"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 37
    }
   }
  },
  {
   "pn": "M24308/2-4F",
   "family": "dsub",
   "short": "DC-37 receptacle · M24308 · with contacts",
   "desc": "D-subminiature DC-37 receptacle, socket contacts, crimp, standard density, MIL-DTL-24308/2, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/4-4F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle with hex jackposts (engineer’s picture)",
   "front": "dsub_std37_female.png",
   "frontCap": "DC-37 socket face",
   "shell": "C",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/detail/amphenol-conec/165X02639X/5217402"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 37
    }
   }
  },
  {
   "pn": "M24308/4-5F",
   "family": "dsub",
   "short": "DD-50 plug · M24308 · with contacts",
   "desc": "D-subminiature DD-50 plug, pin contacts, crimp, standard density, MIL-DTL-24308/4, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/2-5F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug with thumbscrews (engineer’s picture)",
   "front": "dsub_std50_male.png",
   "frontCap": "DD-50 pin face",
   "shell": "D",
   "pins": [
    {
     "pn": "M39029/64-369",
     "note": "size 20 pin, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/result?keywords=165X17449X"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery.",
    "165X17449X (50-way backshell) was not found online – confirm with Amphenol CONEC."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 50
    }
   }
  },
  {
   "pn": "M24308/2-5F",
   "family": "dsub",
   "short": "DD-50 receptacle · M24308 · with contacts",
   "desc": "D-subminiature DD-50 receptacle, socket contacts, crimp, standard density, MIL-DTL-24308/2, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/4-5F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle with hex jackposts (engineer’s picture)",
   "front": "dsub_std50_female.png",
   "frontCap": "DD-50 socket face",
   "shell": "D",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/result?keywords=165X17449X"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery.",
    "165X17449X (50-way backshell) was not found online – confirm with Amphenol CONEC."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 50
    }
   }
  },
  {
   "pn": "M24308/4-11F",
   "family": "dsub",
   "short": "HD-15 plug · M24308 · with contacts",
   "desc": "D-subminiature HD-15 plug, pin contacts, crimp, high density, MIL-DTL-24308/4, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/2-11F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug with thumbscrews (engineer’s picture)",
   "front": "dsub_hd15_male.png",
   "frontCap": "HD-15 pin face",
   "shell": "E",
   "pins": [
    {
     "pn": "M39029/58-360",
     "note": "size 22 pin, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/detail/amphenol-conec/165X02609X/3534032"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 15
    }
   }
  },
  {
   "pn": "M24308/2-11F",
   "family": "dsub",
   "short": "HD-15 receptacle · M24308 · with contacts",
   "desc": "D-subminiature HD-15 receptacle, socket contacts, crimp, high density, MIL-DTL-24308/2, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/4-11F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle with hex jackposts (engineer’s picture)",
   "front": "dsub_hd15_female.png",
   "frontCap": "HD-15 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "M39029/57-354",
     "note": "size 22 socket, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/detail/amphenol-conec/165X02609X/3534032"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery.",
    "M24308/2-11F (HD-15 receptacle) is from the Amphenol QPL list, not the engineer’s list."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 15
    }
   }
  },
  {
   "pn": "M24308/4-12F",
   "family": "dsub",
   "short": "HD-26 plug · M24308 · with contacts",
   "desc": "D-subminiature HD-26 plug, pin contacts, crimp, high density, MIL-DTL-24308/4, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X02619X"
   ],
   "mates": [
    "M24308/2-12F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug with thumbscrews (engineer’s picture)",
   "front": "dsub_hd26_male.png",
   "frontCap": "HD-26 pin face",
   "shell": "A",
   "pins": [
    {
     "pn": "M39029/58-360",
     "note": "size 22 pin, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/result?keywords=165X02619X"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 26
    }
   }
  },
  {
   "pn": "M24308/2-12F",
   "family": "dsub",
   "short": "HD-26 receptacle · M24308 · with contacts",
   "desc": "D-subminiature HD-26 receptacle, socket contacts, crimp, high density, MIL-DTL-24308/2, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X02619X"
   ],
   "mates": [
    "M24308/4-12F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle with hex jackposts (engineer’s picture)",
   "front": "dsub_hd26_female.png",
   "frontCap": "HD-26 socket face",
   "shell": "A",
   "pins": [
    {
     "pn": "M39029/57-354",
     "note": "size 22 socket, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/result?keywords=165X02619X"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 26
    }
   }
  },
  {
   "pn": "M24308/4-13F",
   "family": "dsub",
   "short": "HD-44 plug · M24308 · with contacts",
   "desc": "D-subminiature HD-44 plug, pin contacts, crimp, high density, MIL-DTL-24308/4, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X02629X"
   ],
   "mates": [
    "M24308/2-13F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug with thumbscrews (engineer’s picture)",
   "front": "dsub_hd44_male.png",
   "frontCap": "HD-44 pin face",
   "shell": "B",
   "pins": [
    {
     "pn": "M39029/58-360",
     "note": "size 22 pin, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/result?keywords=165X02629X"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 44
    }
   }
  },
  {
   "pn": "M24308/2-13F",
   "family": "dsub",
   "short": "HD-44 receptacle · M24308 · with contacts",
   "desc": "D-subminiature HD-44 receptacle, socket contacts, crimp, high density, MIL-DTL-24308/2, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X02629X"
   ],
   "mates": [
    "M24308/4-13F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle with hex jackposts (engineer’s picture)",
   "front": "dsub_hd44_female.png",
   "frontCap": "HD-44 socket face",
   "shell": "B",
   "pins": [
    {
     "pn": "M39029/57-354",
     "note": "size 22 socket, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/result?keywords=165X02629X"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 44
    }
   }
  },
  {
   "pn": "M24308/4-14F",
   "family": "dsub",
   "short": "HD-62 plug · M24308 · with contacts",
   "desc": "D-subminiature HD-62 plug, pin contacts, crimp, high density, MIL-DTL-24308/4, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/2-14F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug with thumbscrews (engineer’s picture)",
   "front": "dsub_hd62_male.png",
   "frontCap": "HD-62 pin face",
   "shell": "C",
   "pins": [
    {
     "pn": "M39029/58-360",
     "note": "size 22 pin, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/detail/amphenol-conec/165X02639X/5217402"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 62
    }
   }
  },
  {
   "pn": "M24308/2-14F",
   "family": "dsub",
   "short": "HD-62 receptacle · M24308 · with contacts",
   "desc": "D-subminiature HD-62 receptacle, socket contacts, crimp, high density, MIL-DTL-24308/2, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/4-14F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle with hex jackposts (engineer’s picture)",
   "front": "dsub_hd62_female.png",
   "frontCap": "HD-62 socket face",
   "shell": "C",
   "pins": [
    {
     "pn": "M39029/57-354",
     "note": "size 22 socket, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/detail/amphenol-conec/165X02639X/5217402"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 62
    }
   }
  },
  {
   "pn": "M24308/4-15F",
   "family": "dsub",
   "short": "HD-78 plug · M24308 · with contacts",
   "desc": "D-subminiature HD-78 plug, pin contacts, crimp, high density, MIL-DTL-24308/4, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/2-15F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug with thumbscrews (engineer’s picture)",
   "front": "dsub_hd78_male.png",
   "frontCap": "HD-78 pin face",
   "shell": "D",
   "pins": [
    {
     "pn": "M39029/58-360",
     "note": "size 22 pin, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/result?keywords=165X17449X"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery.",
    "165X17449X (50-way backshell) was not found online – confirm with Amphenol CONEC."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 78
    }
   }
  },
  {
   "pn": "M24308/2-15F",
   "family": "dsub",
   "short": "HD-78 receptacle · M24308 · with contacts",
   "desc": "D-subminiature HD-78 receptacle, socket contacts, crimp, high density, MIL-DTL-24308/2, steel shell, cadmium yellow (F)",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/4-15F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle with hex jackposts (engineer’s picture)",
   "front": "dsub_hd78_female.png",
   "frontCap": "HD-78 socket face",
   "shell": "D",
   "pins": [
    {
     "pn": "M39029/57-354",
     "note": "size 22 socket, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/result?keywords=165X17449X"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery.",
    "165X17449X (50-way backshell) was not found online – confirm with Amphenol CONEC."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 78
    }
   }
  },
  {
   "pn": "M24308/4-269F",
   "family": "dsub",
   "short": "HD-104 plug · M24308 · with contacts",
   "desc": "D-subminiature HD-104 plug, pin contacts, crimp, high density, MIL-DTL-24308/4, steel shell, cadmium yellow (F)",
   "backshell": [
    "Not given – ask"
   ],
   "mates": [
    "M24308/2-291F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug with thumbscrews (engineer’s picture)",
   "front": "dsub_hd104_male.png",
   "frontCap": "HD-104 pin face",
   "shell": "Not given",
   "pins": [
    {
     "pn": "M39029/58-360",
     "note": "size 22 pin, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/result?keywords=165X"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery.",
    "HD-104: plug M24308/4-269F taken from the engineer’s list; backshell and shell size not given."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 104
    }
   }
  },
  {
   "pn": "M24308/2-291F",
   "family": "dsub",
   "short": "HD-104 receptacle · M24308 · with contacts",
   "desc": "D-subminiature HD-104 receptacle, socket contacts, crimp, high density, MIL-DTL-24308/2, steel shell, cadmium yellow (F)",
   "backshell": [
    "Not given – ask"
   ],
   "mates": [
    "M24308/4-269F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle with hex jackposts (engineer’s picture)",
   "front": "dsub_hd104_female.png",
   "frontCap": "HD-104 socket face",
   "shell": "Not given",
   "pins": [
    {
     "pn": "M39029/57-354",
     "note": "size 22 socket, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/result?keywords=165X"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery.",
    "HD-104: plug M24308/4-269F taken from the engineer’s list; backshell and shell size not given."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 104
    }
   }
  },
  {
   "pn": "163X10019X",
   "family": "dsub",
   "short": "DE-9 plug housing · CONEC · no contacts",
   "desc": "Amphenol CONEC D-sub crimp plug housing for pin contacts, DE-9, standard density, through-hole mounting Ø3.05, steel tin plated – sold without contacts",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/2-1F",
    "164X11769X"
   ],
   "color": {
    "name": "Tin plated steel (silver)",
    "sw": "#c4c8cc"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_std9_male.png",
   "frontCap": "DE-9 pin face",
   "shell": "E",
   "pins": [
    {
     "pn": "M39029/64-369",
     "note": "size 20 pin, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "CONEC D-sub catalog (PDF)",
     "https://www.mouser.com/pdfdocs/CONECStandardandHighDensityDSubs.PDF"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs."
   ],
   "verify": [
    "Contact part number: CONEC / TE list their own crimp contacts; the MIL M39029 contact shown is the standard equivalent – confirm it seats in this body."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 9
    }
   }
  },
  {
   "pn": "163X10029X",
   "family": "dsub",
   "short": "DA-15 plug housing · CONEC · no contacts",
   "desc": "Amphenol CONEC D-sub crimp plug housing for pin contacts, DA-15, standard density, through-hole mounting Ø3.05, steel tin plated – sold without contacts",
   "backshell": [
    "165X02619X"
   ],
   "mates": [
    "M24308/2-2F",
    "164X11779X"
   ],
   "color": {
    "name": "Tin plated steel (silver)",
    "sw": "#c4c8cc"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_std15_male.png",
   "frontCap": "DA-15 pin face",
   "shell": "A",
   "pins": [
    {
     "pn": "M39029/64-369",
     "note": "size 20 pin, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "CONEC D-sub catalog (PDF)",
     "https://www.mouser.com/pdfdocs/CONECStandardandHighDensityDSubs.PDF"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs."
   ],
   "verify": [
    "Positions taken from the CONEC numbering pattern (163X10019X = 9-way plug) – confirm on the datasheet.",
    "Contact part number: CONEC / TE list their own crimp contacts; the MIL M39029 contact shown is the standard equivalent – confirm it seats in this body."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 15
    }
   }
  },
  {
   "pn": "163X10039X",
   "family": "dsub",
   "short": "DB-25 plug housing · CONEC · no contacts",
   "desc": "Amphenol CONEC D-sub crimp plug housing for pin contacts, DB-25, standard density, through-hole mounting Ø3.05, steel tin plated – sold without contacts",
   "backshell": [
    "165X02629X"
   ],
   "mates": [
    "M24308/2-3F",
    "164X11789X"
   ],
   "color": {
    "name": "Tin plated steel (silver)",
    "sw": "#c4c8cc"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_std25_male.png",
   "frontCap": "DB-25 pin face",
   "shell": "B",
   "pins": [
    {
     "pn": "M39029/64-369",
     "note": "size 20 pin, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "CONEC D-sub catalog (PDF)",
     "https://www.mouser.com/pdfdocs/CONECStandardandHighDensityDSubs.PDF"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs."
   ],
   "verify": [
    "Positions taken from the CONEC numbering pattern (163X10019X = 9-way plug) – confirm on the datasheet.",
    "Contact part number: CONEC / TE list their own crimp contacts; the MIL M39029 contact shown is the standard equivalent – confirm it seats in this body."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "163X10049X",
   "family": "dsub",
   "short": "DC-37 plug housing · CONEC · no contacts",
   "desc": "Amphenol CONEC D-sub crimp plug housing for pin contacts, DC-37, standard density, through-hole mounting Ø3.05, steel tin plated – sold without contacts",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/2-4F",
    "164X11799X"
   ],
   "color": {
    "name": "Tin plated steel (silver)",
    "sw": "#c4c8cc"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_std37_male.png",
   "frontCap": "DC-37 pin face",
   "shell": "C",
   "pins": [
    {
     "pn": "M39029/64-369",
     "note": "size 20 pin, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "CONEC D-sub catalog (PDF)",
     "https://www.mouser.com/pdfdocs/CONECStandardandHighDensityDSubs.PDF"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs."
   ],
   "verify": [
    "Positions taken from the CONEC numbering pattern (163X10019X = 9-way plug) – confirm on the datasheet.",
    "Contact part number: CONEC / TE list their own crimp contacts; the MIL M39029 contact shown is the standard equivalent – confirm it seats in this body."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 37
    }
   }
  },
  {
   "pn": "163X10059X",
   "family": "dsub",
   "short": "DD-50 plug housing · CONEC · no contacts",
   "desc": "Amphenol CONEC D-sub crimp plug housing for pin contacts, DD-50, standard density, through-hole mounting Ø3.05, steel tin plated – sold without contacts",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/2-5F",
    "164X11809X"
   ],
   "color": {
    "name": "Tin plated steel (silver)",
    "sw": "#c4c8cc"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_std50_male.png",
   "frontCap": "DD-50 pin face",
   "shell": "D",
   "pins": [
    {
     "pn": "M39029/64-369",
     "note": "size 20 pin, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "CONEC D-sub catalog (PDF)",
     "https://www.mouser.com/pdfdocs/CONECStandardandHighDensityDSubs.PDF"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs."
   ],
   "verify": [
    "Positions taken from the CONEC numbering pattern (163X10019X = 9-way plug) – confirm on the datasheet.",
    "Contact part number: CONEC / TE list their own crimp contacts; the MIL M39029 contact shown is the standard equivalent – confirm it seats in this body."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 50
    }
   }
  },
  {
   "pn": "164X11769X",
   "family": "dsub",
   "short": "DE-9 receptacle housing · CONEC · no contacts",
   "desc": "Amphenol CONEC D-sub crimp receptacle housing for socket contacts, DE-9, standard density, through-hole mounting Ø3.05, steel tin plated – sold without contacts",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/4-1F",
    "163X10019X"
   ],
   "color": {
    "name": "Tin plated steel (silver)",
    "sw": "#c4c8cc"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std9_female.png",
   "frontCap": "DE-9 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "CONEC D-sub catalog (PDF)",
     "https://www.mouser.com/pdfdocs/CONECStandardandHighDensityDSubs.PDF"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs."
   ],
   "verify": [
    "Contact part number: CONEC / TE list their own crimp contacts; the MIL M39029 contact shown is the standard equivalent – confirm it seats in this body."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 9
    }
   }
  },
  {
   "pn": "164X11779X",
   "family": "dsub",
   "short": "DA-15 receptacle housing · CONEC · no contacts",
   "desc": "Amphenol CONEC D-sub crimp receptacle housing for socket contacts, DA-15, standard density, through-hole mounting Ø3.05, steel tin plated – sold without contacts",
   "backshell": [
    "165X02619X"
   ],
   "mates": [
    "M24308/4-2F",
    "163X10029X"
   ],
   "color": {
    "name": "Tin plated steel (silver)",
    "sw": "#c4c8cc"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std15_female.png",
   "frontCap": "DA-15 socket face",
   "shell": "A",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "CONEC D-sub catalog (PDF)",
     "https://www.mouser.com/pdfdocs/CONECStandardandHighDensityDSubs.PDF"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs."
   ],
   "verify": [
    "Positions taken from the CONEC numbering pattern (164X11769X = 9-way, 164X11949X = HD-15, 164X11969X = HD-44 receptacle) – confirm on the datasheet.",
    "Contact part number: CONEC / TE list their own crimp contacts; the MIL M39029 contact shown is the standard equivalent – confirm it seats in this body."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 15
    }
   }
  },
  {
   "pn": "164X11789X",
   "family": "dsub",
   "short": "DB-25 receptacle housing · CONEC · no contacts",
   "desc": "Amphenol CONEC D-sub crimp receptacle housing for socket contacts, DB-25, standard density, through-hole mounting Ø3.05, steel tin plated – sold without contacts",
   "backshell": [
    "165X02629X"
   ],
   "mates": [
    "M24308/4-3F",
    "163X10039X"
   ],
   "color": {
    "name": "Tin plated steel (silver)",
    "sw": "#c4c8cc"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std25_female.png",
   "frontCap": "DB-25 socket face",
   "shell": "B",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "CONEC D-sub catalog (PDF)",
     "https://www.mouser.com/pdfdocs/CONECStandardandHighDensityDSubs.PDF"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs."
   ],
   "verify": [
    "Positions taken from the CONEC numbering pattern (164X11769X = 9-way, 164X11949X = HD-15, 164X11969X = HD-44 receptacle) – confirm on the datasheet.",
    "Contact part number: CONEC / TE list their own crimp contacts; the MIL M39029 contact shown is the standard equivalent – confirm it seats in this body."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "164X11799X",
   "family": "dsub",
   "short": "DC-37 receptacle housing · CONEC · no contacts",
   "desc": "Amphenol CONEC D-sub crimp receptacle housing for socket contacts, DC-37, standard density, through-hole mounting Ø3.05, steel tin plated – sold without contacts",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/4-4F",
    "163X10049X"
   ],
   "color": {
    "name": "Tin plated steel (silver)",
    "sw": "#c4c8cc"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std37_female.png",
   "frontCap": "DC-37 socket face",
   "shell": "C",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "CONEC D-sub catalog (PDF)",
     "https://www.mouser.com/pdfdocs/CONECStandardandHighDensityDSubs.PDF"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs."
   ],
   "verify": [
    "Positions taken from the CONEC numbering pattern (164X11769X = 9-way, 164X11949X = HD-15, 164X11969X = HD-44 receptacle) – confirm on the datasheet.",
    "Contact part number: CONEC / TE list their own crimp contacts; the MIL M39029 contact shown is the standard equivalent – confirm it seats in this body."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 37
    }
   }
  },
  {
   "pn": "164X11809X",
   "family": "dsub",
   "short": "DD-50 receptacle housing · CONEC · no contacts",
   "desc": "Amphenol CONEC D-sub crimp receptacle housing for socket contacts, DD-50, standard density, through-hole mounting Ø3.05, steel tin plated – sold without contacts",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/4-5F",
    "163X10059X"
   ],
   "color": {
    "name": "Tin plated steel (silver)",
    "sw": "#c4c8cc"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std50_female.png",
   "frontCap": "DD-50 socket face",
   "shell": "D",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "CONEC D-sub catalog (PDF)",
     "https://www.mouser.com/pdfdocs/CONECStandardandHighDensityDSubs.PDF"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs."
   ],
   "verify": [
    "Positions taken from the CONEC numbering pattern (164X11769X = 9-way, 164X11949X = HD-15, 164X11969X = HD-44 receptacle) – confirm on the datasheet.",
    "Contact part number: CONEC / TE list their own crimp contacts; the MIL M39029 contact shown is the standard equivalent – confirm it seats in this body."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 50
    }
   }
  },
  {
   "pn": "164X11949X",
   "family": "dsub",
   "short": "HD-15 receptacle housing · CONEC · no contacts",
   "desc": "Amphenol CONEC D-sub crimp receptacle housing for socket contacts, HD-15, high density, through-hole mounting Ø3.05, steel tin plated – sold without contacts",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/4-11F"
   ],
   "color": {
    "name": "Tin plated steel (silver)",
    "sw": "#c4c8cc"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_hd15_female.png",
   "frontCap": "HD-15 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "M39029/57-354",
     "note": "size 22 socket, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "CONEC D-sub catalog (PDF)",
     "https://www.mouser.com/pdfdocs/CONECStandardandHighDensityDSubs.PDF"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs."
   ],
   "verify": [
    "Contact part number: CONEC / TE list their own crimp contacts; the MIL M39029 contact shown is the standard equivalent – confirm it seats in this body."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 15
    }
   }
  },
  {
   "pn": "164X11959X",
   "family": "dsub",
   "short": "HD-26 receptacle housing · CONEC · no contacts",
   "desc": "Amphenol CONEC D-sub crimp receptacle housing for socket contacts, HD-26, high density, through-hole mounting Ø3.05, steel tin plated – sold without contacts",
   "backshell": [
    "165X02619X"
   ],
   "mates": [
    "M24308/4-12F"
   ],
   "color": {
    "name": "Tin plated steel (silver)",
    "sw": "#c4c8cc"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_hd26_female.png",
   "frontCap": "HD-26 socket face",
   "shell": "A",
   "pins": [
    {
     "pn": "M39029/57-354",
     "note": "size 22 socket, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "CONEC D-sub catalog (PDF)",
     "https://www.mouser.com/pdfdocs/CONECStandardandHighDensityDSubs.PDF"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs."
   ],
   "verify": [
    "Positions taken from the CONEC numbering pattern (164X11769X = 9-way, 164X11949X = HD-15, 164X11969X = HD-44 receptacle) – confirm on the datasheet.",
    "Contact part number: CONEC / TE list their own crimp contacts; the MIL M39029 contact shown is the standard equivalent – confirm it seats in this body."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 26
    }
   }
  },
  {
   "pn": "164X11969X",
   "family": "dsub",
   "short": "HD-44 receptacle housing · CONEC · no contacts",
   "desc": "Amphenol CONEC D-sub crimp receptacle housing for socket contacts, HD-44, high density, through-hole mounting Ø3.05, steel tin plated – sold without contacts",
   "backshell": [
    "165X02629X"
   ],
   "mates": [
    "M24308/4-13F"
   ],
   "color": {
    "name": "Tin plated steel (silver)",
    "sw": "#c4c8cc"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_hd44_female.png",
   "frontCap": "HD-44 socket face",
   "shell": "B",
   "pins": [
    {
     "pn": "M39029/57-354",
     "note": "size 22 socket, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "CONEC D-sub catalog (PDF)",
     "https://www.mouser.com/pdfdocs/CONECStandardandHighDensityDSubs.PDF"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs."
   ],
   "verify": [
    "Contact part number: CONEC / TE list their own crimp contacts; the MIL M39029 contact shown is the standard equivalent – confirm it seats in this body."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 44
    }
   }
  },
  {
   "pn": "164X11979X",
   "family": "dsub",
   "short": "HD-62 receptacle housing · CONEC · no contacts",
   "desc": "Amphenol CONEC D-sub crimp receptacle housing for socket contacts, HD-62, high density, through-hole mounting Ø3.05, steel tin plated – sold without contacts",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/4-14F"
   ],
   "color": {
    "name": "Tin plated steel (silver)",
    "sw": "#c4c8cc"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_hd62_female.png",
   "frontCap": "HD-62 socket face",
   "shell": "C",
   "pins": [
    {
     "pn": "M39029/57-354",
     "note": "size 22 socket, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "CONEC D-sub catalog (PDF)",
     "https://www.mouser.com/pdfdocs/CONECStandardandHighDensityDSubs.PDF"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs."
   ],
   "verify": [
    "Positions taken from the CONEC numbering pattern (164X11769X = 9-way, 164X11949X = HD-15, 164X11969X = HD-44 receptacle) – confirm on the datasheet.",
    "Contact part number: CONEC / TE list their own crimp contacts; the MIL M39029 contact shown is the standard equivalent – confirm it seats in this body."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 62
    }
   }
  },
  {
   "pn": "164X11989X",
   "family": "dsub",
   "short": "HD-78 receptacle housing · CONEC · no contacts",
   "desc": "Amphenol CONEC D-sub crimp receptacle housing for socket contacts, HD-78, high density, through-hole mounting Ø3.05, steel tin plated – sold without contacts",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/4-15F"
   ],
   "color": {
    "name": "Tin plated steel (silver)",
    "sw": "#c4c8cc"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_hd78_female.png",
   "frontCap": "HD-78 socket face",
   "shell": "D",
   "pins": [
    {
     "pn": "M39029/57-354",
     "note": "size 22 socket, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "CONEC D-sub catalog (PDF)",
     "https://www.mouser.com/pdfdocs/CONECStandardandHighDensityDSubs.PDF"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs."
   ],
   "verify": [
    "Positions taken from the CONEC numbering pattern (164X11769X = 9-way, 164X11949X = HD-15, 164X11969X = HD-44 receptacle) – confirm on the datasheet.",
    "Contact part number: CONEC / TE list their own crimp contacts; the MIL M39029 contact shown is the standard equivalent – confirm it seats in this body."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 78
    }
   }
  },
  {
   "pn": "204510-1",
   "family": "dsub",
   "short": "HD-104 receptacle housing · TE · no contacts",
   "desc": "TE AMPLIMITE high-density D-sub receptacle, 104 positions, socket contacts (size 22), crimp, box mount, steel shell, cadmium – sold without contacts",
   "backshell": [
    "Not given"
   ],
   "mates": [
    "M24308/4-269F"
   ],
   "color": {
    "name": "Cadmium plated steel",
    "sw": "#c9a646"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_hd104_female.png",
   "frontCap": "HD-104 socket face",
   "shell": "6 (TE)",
   "pins": [
    {
     "pn": "M39029/57-354",
     "note": "size 22 socket, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "TE datasheet",
     "https://www.te.com/usa-en/product-204510-1.html"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs."
   ],
   "verify": [
    "Contact part number: CONEC / TE list their own crimp contacts; the MIL M39029 contact shown is the standard equivalent – confirm it seats in this body.",
    "Mate shown is the MIL HD-104 plug from the house list – check TE mating data."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 104
    }
   }
  },
  {
   "pn": "M39012/16-0101",
   "family": "bnc",
   "short": "BNC plug · RG-58, RG-303, RG-142",
   "desc": "BNC plug, straight, 50 Ω, clamp termination, cable group VI (RG-58, RG-303, RG-142, RG-223, RG-400), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/17-0101",
    "M39012/18-0102",
    "M39012/19-0101",
    "M39012/21-0001"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC plug (supplied drawing)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre pin"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable",
   "cables": [
    "RG-58",
    "RG-303",
    "RG-142",
    "RG-223",
    "RG-400"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-58",
     "RG-303",
     "RG-142",
     "RG-223",
     "RG-400"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/16-0102",
   "family": "bnc",
   "short": "BNC plug · RG-59, RG-62, RG-210",
   "desc": "BNC plug, straight, 50 Ω, clamp termination, cable group VII (RG-59, RG-62, RG-210), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/17-0102",
    "M39012/18-0101",
    "M39012/19-0102",
    "M39012/21-0001"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC plug (supplied drawing)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre pin"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable",
   "cables": [
    "RG-59",
    "RG-62",
    "RG-210"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-59",
     "RG-62",
     "RG-210"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/16-0220",
   "family": "bnc",
   "short": "BNC plug · RG-316, RG-174",
   "desc": "BNC plug, straight, 50 Ω, clamp termination, cable group II (RG-316, RG-174), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/18-0220",
    "M39012/19-0220",
    "M39012/21-0001",
    "M39012/22-0001"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC plug (supplied drawing)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre pin"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable",
   "cables": [
    "RG-316",
    "RG-174"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-316",
     "RG-174"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/16-0225",
   "family": "bnc",
   "short": "BNC plug · RG-213, RG-11",
   "desc": "BNC plug, straight, 50 Ω, clamp termination, cable group X (RG-213, RG-11), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/21-0001",
    "M39012/22-0001"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC plug (supplied drawing)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre pin"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable",
   "cables": [
    "RG-213",
    "RG-11"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-213",
     "RG-11"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/17-0101",
   "family": "bnc",
   "short": "BNC jack · RG-58, RG-303, RG-142",
   "desc": "BNC jack, straight, 50 Ω, clamp termination, cable group VI (RG-58, RG-303, RG-142, RG-223, RG-400), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/16-0101",
    "M39012/20-0101"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC plug (supplied drawing)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable",
   "cables": [
    "RG-58",
    "RG-303",
    "RG-142",
    "RG-223",
    "RG-400"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view shows a plug; a jack / bulkhead drawing was not supplied."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-58",
     "RG-303",
     "RG-142",
     "RG-223",
     "RG-400"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/17-0102",
   "family": "bnc",
   "short": "BNC jack · RG-59, RG-62, RG-210",
   "desc": "BNC jack, straight, 50 Ω, clamp termination, cable group VII (RG-59, RG-62, RG-210), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/16-0102"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC plug (supplied drawing)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable",
   "cables": [
    "RG-59",
    "RG-62",
    "RG-210"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view shows a plug; a jack / bulkhead drawing was not supplied."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-59",
     "RG-62",
     "RG-210"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/17-0103",
   "family": "bnc",
   "short": "BNC jack · RG-122",
   "desc": "BNC jack, straight, 50 Ω, clamp termination, cable group IV (RG-122), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC plug (supplied drawing)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable",
   "cables": [
    "RG-122"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view shows a plug; a jack / bulkhead drawing was not supplied."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-122"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/18-0102",
   "family": "bnc",
   "short": "BNC panel jack · RG-58, RG-303, RG-142",
   "desc": "BNC panel jack, straight, 50 Ω, clamp termination, cable group VI (RG-58, RG-303, RG-142, RG-223, RG-400), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/16-0101",
    "M39012/20-0101"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC plug (supplied drawing)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "panel, front mount",
   "cables": [
    "RG-58",
    "RG-303",
    "RG-142",
    "RG-223",
    "RG-400"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view shows a plug; a jack / bulkhead drawing was not supplied."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-58",
     "RG-303",
     "RG-142",
     "RG-223",
     "RG-400"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/18-0101",
   "family": "bnc",
   "short": "BNC panel jack · RG-59, RG-62, RG-210",
   "desc": "BNC panel jack, straight, 50 Ω, clamp termination, cable group VII (RG-59, RG-62, RG-210), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/16-0102"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC plug (supplied drawing)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "panel, front mount",
   "cables": [
    "RG-59",
    "RG-62",
    "RG-210"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view shows a plug; a jack / bulkhead drawing was not supplied."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-59",
     "RG-62",
     "RG-210"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/18-0220",
   "family": "bnc",
   "short": "BNC panel jack · RG-316, RG-174",
   "desc": "BNC panel jack, straight, 50 Ω, clamp termination, cable group II (RG-316, RG-174), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/16-0220"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC plug (supplied drawing)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "panel, front mount",
   "cables": [
    "RG-316",
    "RG-174"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view shows a plug; a jack / bulkhead drawing was not supplied."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-316",
     "RG-174"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/19-0101",
   "family": "bnc",
   "short": "BNC bulkhead jack · RG-58, RG-303, RG-142",
   "desc": "BNC bulkhead jack, straight, 50 Ω, clamp termination, cable group VI (RG-58, RG-303, RG-142, RG-223, RG-400), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/16-0101",
    "M39012/20-0101"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC plug (supplied drawing)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "bulkhead, rear mount with nut",
   "cables": [
    "RG-58",
    "RG-303",
    "RG-142",
    "RG-223",
    "RG-400"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view shows a plug; a jack / bulkhead drawing was not supplied."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "bulkhead"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-58",
     "RG-303",
     "RG-142",
     "RG-223",
     "RG-400"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/19-0102",
   "family": "bnc",
   "short": "BNC bulkhead jack · RG-59, RG-62, RG-210",
   "desc": "BNC bulkhead jack, straight, 50 Ω, clamp termination, cable group VII (RG-59, RG-62, RG-210), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/16-0102"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC plug (supplied drawing)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "bulkhead, rear mount with nut",
   "cables": [
    "RG-59",
    "RG-62",
    "RG-210"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view shows a plug; a jack / bulkhead drawing was not supplied."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "bulkhead"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-59",
     "RG-62",
     "RG-210"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/19-0220",
   "family": "bnc",
   "short": "BNC bulkhead jack · RG-316, RG-174",
   "desc": "BNC bulkhead jack, straight, 50 Ω, clamp termination, cable group II (RG-316, RG-174), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/16-0220"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC plug (supplied drawing)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "bulkhead, rear mount with nut",
   "cables": [
    "RG-316",
    "RG-174"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view shows a plug; a jack / bulkhead drawing was not supplied."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "bulkhead"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-316",
     "RG-174"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/20-0006",
   "family": "bnc",
   "short": "BNC right-angle plug · RG-58, RG-303",
   "desc": "BNC right-angle plug, right angle, 50 Ω, crimp termination, cable group VIA (RG-58, RG-303), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/21-0001",
    "M39012/22-0001"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC plug (supplied drawing)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre pin"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "90° (right angle)",
   "pcb": false,
   "mountText": "cable",
   "cables": [
    "RG-58",
    "RG-303"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "male",
    "angles": [
     "90"
    ],
    "withPins": true,
    "cables": [
     "RG-58",
     "RG-303"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/20-0007",
   "family": "bnc",
   "short": "BNC right-angle plug · RG-142, RG-223, RG-400",
   "desc": "BNC right-angle plug, right angle, 50 Ω, crimp termination, cable group VIB (RG-142, RG-223, RG-400), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/21-0001",
    "M39012/22-0001"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC plug (supplied drawing)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre pin"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "90° (right angle)",
   "pcb": false,
   "mountText": "cable",
   "cables": [
    "RG-142",
    "RG-223",
    "RG-400"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "male",
    "angles": [
     "90"
    ],
    "withPins": true,
    "cables": [
     "RG-142",
     "RG-223",
     "RG-400"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/20-0101",
   "family": "bnc",
   "short": "BNC right-angle plug · RG-58, RG-303, RG-142",
   "desc": "BNC right-angle plug, right angle, 50 Ω, clamp termination, cable group VI (RG-58, RG-303, RG-142, RG-223, RG-400), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/17-0101",
    "M39012/18-0102",
    "M39012/19-0101",
    "M39012/21-0001"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC plug (supplied drawing)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre pin"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "90° (right angle)",
   "pcb": false,
   "mountText": "cable",
   "cables": [
    "RG-58",
    "RG-303",
    "RG-142",
    "RG-223",
    "RG-400"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "male",
    "angles": [
     "90"
    ],
    "withPins": true,
    "cables": [
     "RG-58",
     "RG-303",
     "RG-142",
     "RG-223",
     "RG-400"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/21-0001",
   "family": "bnc",
   "short": "BNC bulkhead jack receptacle",
   "desc": "BNC bulkhead jack receptacle, straight, 50 Ω, no cable termination, MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/16-0101",
    "M39012/16-0102",
    "M39012/16-0220",
    "M39012/16-0225"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC plug (supplied drawing)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "bulkhead, rear mount with nut",
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view shows a plug; a jack / bulkhead drawing was not supplied.",
    "Receptacle with no cable entry: rear is a solder / terminal post for wiring inside a box."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "bulkhead"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [],
    "noCable": true,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/22-0001",
   "family": "bnc",
   "short": "BNC panel jack receptacle",
   "desc": "BNC panel jack receptacle, straight, 50 Ω, no cable termination, MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/16-0101",
    "M39012/16-0102",
    "M39012/16-0220",
    "M39012/16-0225"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC plug (supplied drawing)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "panel, front mount",
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view shows a plug; a jack / bulkhead drawing was not supplied.",
    "Receptacle with no cable entry: rear is a solder / terminal post for wiring inside a box."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [],
    "noCable": true,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/26-0010",
   "family": "tnc",
   "short": "TNC plug · RG-58, RG-303",
   "desc": "TNC plug, straight, 50 Ω, crimp termination, cable group VIA (RG-58, RG-303), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/27-0010",
    "M39012/28-0010",
    "M39012/29-0010",
    "M39012/31-0001"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing used for TNC",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre pin"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable",
   "cables": [
    "RG-58",
    "RG-303"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view is the supplied BNC drawing; TNC has a threaded coupling nut instead of the bayonet."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-58",
     "RG-303"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/26-0011",
   "family": "tnc",
   "short": "TNC plug · RG-142, RG-223, RG-400",
   "desc": "TNC plug, straight, 50 Ω, crimp termination, cable group VIB (RG-142, RG-223, RG-400), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/27-0011",
    "M39012/28-0011",
    "M39012/31-0001",
    "M39012/32-0001"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing used for TNC",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre pin"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable",
   "cables": [
    "RG-142",
    "RG-223",
    "RG-400"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view is the supplied BNC drawing; TNC has a threaded coupling nut instead of the bayonet."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-142",
     "RG-223",
     "RG-400"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/26-0012",
   "family": "tnc",
   "short": "TNC plug · RG-59, RG-62, RG-210",
   "desc": "TNC plug, straight, 50 Ω, crimp termination, cable group VIIA (RG-59, RG-62, RG-210), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/31-0001",
    "M39012/32-0001"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing used for TNC",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre pin"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable",
   "cables": [
    "RG-59",
    "RG-62",
    "RG-210"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view is the supplied BNC drawing; TNC has a threaded coupling nut instead of the bayonet."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-59",
     "RG-62",
     "RG-210"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/26-0022",
   "family": "tnc",
   "short": "TNC plug · RG-316, RG-174",
   "desc": "TNC plug, straight, 50 Ω, crimp termination, cable group IIA (RG-316, RG-174), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/27-0022",
    "M39012/28-0022",
    "M39012/29-0022",
    "M39012/31-0001"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing used for TNC",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre pin"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable",
   "cables": [
    "RG-316",
    "RG-174"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view is the supplied BNC drawing; TNC has a threaded coupling nut instead of the bayonet."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-316",
     "RG-174"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/27-0010",
   "family": "tnc",
   "short": "TNC jack · RG-58, RG-303",
   "desc": "TNC jack, straight, 50 Ω, crimp termination, cable group VIA (RG-58, RG-303), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/26-0010"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing used for TNC",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable",
   "cables": [
    "RG-58",
    "RG-303"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view is the supplied BNC drawing; TNC has a threaded coupling nut instead of the bayonet.",
    "Side view shows a plug; a jack / bulkhead drawing was not supplied."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-58",
     "RG-303"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/27-0011",
   "family": "tnc",
   "short": "TNC jack · RG-142, RG-223, RG-400",
   "desc": "TNC jack, straight, 50 Ω, crimp termination, cable group VIB (RG-142, RG-223, RG-400), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/26-0011"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing used for TNC",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable",
   "cables": [
    "RG-142",
    "RG-223",
    "RG-400"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view is the supplied BNC drawing; TNC has a threaded coupling nut instead of the bayonet.",
    "Side view shows a plug; a jack / bulkhead drawing was not supplied."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-142",
     "RG-223",
     "RG-400"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/27-0022",
   "family": "tnc",
   "short": "TNC jack · RG-316, RG-174",
   "desc": "TNC jack, straight, 50 Ω, crimp termination, cable group IIA (RG-316, RG-174), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/26-0022"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing used for TNC",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable",
   "cables": [
    "RG-316",
    "RG-174"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view is the supplied BNC drawing; TNC has a threaded coupling nut instead of the bayonet.",
    "Side view shows a plug; a jack / bulkhead drawing was not supplied."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-316",
     "RG-174"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/28-0010",
   "family": "tnc",
   "short": "TNC bulkhead jack · RG-58, RG-303",
   "desc": "TNC bulkhead jack, straight, 50 Ω, crimp termination, cable group VIA (RG-58, RG-303), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/26-0010"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing used for TNC",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "bulkhead, rear mount with nut",
   "cables": [
    "RG-58",
    "RG-303"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view is the supplied BNC drawing; TNC has a threaded coupling nut instead of the bayonet.",
    "Side view shows a plug; a jack / bulkhead drawing was not supplied."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "bulkhead"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-58",
     "RG-303"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/28-0011",
   "family": "tnc",
   "short": "TNC bulkhead jack · RG-142, RG-223, RG-400",
   "desc": "TNC bulkhead jack, straight, 50 Ω, crimp termination, cable group VIB (RG-142, RG-223, RG-400), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/26-0011"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing used for TNC",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "bulkhead, rear mount with nut",
   "cables": [
    "RG-142",
    "RG-223",
    "RG-400"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view is the supplied BNC drawing; TNC has a threaded coupling nut instead of the bayonet.",
    "Side view shows a plug; a jack / bulkhead drawing was not supplied."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "bulkhead"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-142",
     "RG-223",
     "RG-400"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/28-0022",
   "family": "tnc",
   "short": "TNC bulkhead jack · RG-316, RG-174",
   "desc": "TNC bulkhead jack, straight, 50 Ω, crimp termination, cable group IIA (RG-316, RG-174), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/26-0022"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing used for TNC",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "bulkhead, rear mount with nut",
   "cables": [
    "RG-316",
    "RG-174"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view is the supplied BNC drawing; TNC has a threaded coupling nut instead of the bayonet.",
    "Side view shows a plug; a jack / bulkhead drawing was not supplied."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "bulkhead"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-316",
     "RG-174"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/29-0010",
   "family": "tnc",
   "short": "TNC panel jack · RG-58, RG-303",
   "desc": "TNC panel jack, straight, 50 Ω, crimp termination, cable group VIA (RG-58, RG-303), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/26-0010"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing used for TNC",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "panel, front mount",
   "cables": [
    "RG-58",
    "RG-303"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view is the supplied BNC drawing; TNC has a threaded coupling nut instead of the bayonet.",
    "Side view shows a plug; a jack / bulkhead drawing was not supplied."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-58",
     "RG-303"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/29-0022",
   "family": "tnc",
   "short": "TNC panel jack · RG-316, RG-174",
   "desc": "TNC panel jack, straight, 50 Ω, crimp termination, cable group IIA (RG-316, RG-174), MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/26-0022"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing used for TNC",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "panel, front mount",
   "cables": [
    "RG-316",
    "RG-174"
   ],
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view is the supplied BNC drawing; TNC has a threaded coupling nut instead of the bayonet.",
    "Side view shows a plug; a jack / bulkhead drawing was not supplied."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-316",
     "RG-174"
    ],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/31-0001",
   "family": "tnc",
   "short": "TNC bulkhead jack receptacle",
   "desc": "TNC bulkhead jack receptacle, straight, 50 Ω, no cable termination, MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/26-0010",
    "M39012/26-0011",
    "M39012/26-0012",
    "M39012/26-0022"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing used for TNC",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "bulkhead, rear mount with nut",
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view is the supplied BNC drawing; TNC has a threaded coupling nut instead of the bayonet.",
    "Side view shows a plug; a jack / bulkhead drawing was not supplied.",
    "Receptacle with no cable entry: rear is a solder / terminal post for wiring inside a box."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "bulkhead"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [],
    "noCable": true,
    "impedance": 50
   }
  },
  {
   "pn": "M39012/32-0001",
   "family": "tnc",
   "short": "TNC panel jack receptacle",
   "desc": "TNC panel jack receptacle, straight, 50 Ω, no cable termination, MIL-PRF-39012",
   "backshell": [
    "N/A – ferrule / clamp parts are included"
   ],
   "mates": [
    "M39012/26-0010",
    "M39012/26-0011",
    "M39012/26-0012",
    "M39012/26-0022"
   ],
   "color": {
    "name": "Plated metal (silver / nickel) – check slash sheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing used for TNC",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied with the connector"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "panel, front mount",
   "links": [
    [
     "QPL catalog (PDF)",
     "https://www.marchelectronics.com/pdf/delta/DeltaQPL.pdf"
    ]
   ],
   "notes": [
    "Side view is the supplied BNC drawing; TNC has a threaded coupling nut instead of the bayonet.",
    "Side view shows a plug; a jack / bulkhead drawing was not supplied.",
    "Receptacle with no cable entry: rear is a solder / terminal post for wiring inside a box."
   ],
   "verify": [
    "Dash-number cable group from the Delta M39012 QPL catalog."
   ],
   "search": {
    "mount": [
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [],
    "noCable": true,
    "impedance": 50
   }
  },
  {
   "pn": "181-015-113R551",
   "family": "dsub",
   "short": "HD-15 plug · NorComp · PCB, right angle",
   "desc": "NorComp D-sub plug, pin contacts, HD-15, high density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/2-11F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_hd15_male.png",
   "frontCap": "HD-15 pin face",
   "shell": "E",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “15 Position D-Sub, High Density Plug, Male Pins Connector from NorComp Inc.”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "male",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 15
    }
   }
  },
  {
   "pn": "181-078-213L531",
   "family": "dsub",
   "short": "HD-78 receptacle · NorComp · PCB, right angle",
   "desc": "NorComp D-sub receptacle, socket contacts, HD-78, high density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-15F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_hd78_female.png",
   "frontCap": "HD-78 socket face",
   "shell": "D",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “78 Position D-Sub, High Density Receptacle, Female Sockets Connector from NorComp Inc.”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 78
    }
   }
  },
  {
   "pn": "181-062-213R531",
   "family": "dsub",
   "short": "HD-62 receptacle · NorComp · PCB, right angle",
   "desc": "NorComp D-sub receptacle, socket contacts, HD-62, high density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-14F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_hd62_female.png",
   "frontCap": "HD-62 socket face",
   "shell": "C",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “181-062-113R531 – 62 Position D-Sub, High Density Plug, Male Pins Connector from NorComp Inc.”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 62
    }
   }
  },
  {
   "pn": "181-015-113R531",
   "family": "dsub",
   "short": "HD-15 plug · NorComp · PCB, right angle",
   "desc": "NorComp D-sub plug, pin contacts, HD-15, high density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/2-11F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_hd15_male.png",
   "frontCap": "HD-15 pin face",
   "shell": "E",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD PLG 15POS R/A SLDR”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "male",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 15
    }
   }
  },
  {
   "pn": "181-015-213R531",
   "family": "dsub",
   "short": "HD-15 receptacle · NorComp · PCB, right angle",
   "desc": "NorComp D-sub receptacle, socket contacts, HD-15, high density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-11F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_hd15_female.png",
   "frontCap": "HD-15 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD RCPT 15P R/A SLDR”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 15
    }
   }
  },
  {
   "pn": "172-E37-213R911",
   "family": "dsub",
   "short": "DC-37 receptacle · NorComp · solder cup",
   "desc": "NorComp D-sub receptacle, socket contacts, DC-37, standard density, solder cup",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/4-4F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std37_female.png",
   "frontCap": "DC-37 socket face",
   "shell": "C",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “37 Position D-Sub Receptacle, Female Sockets Connector from NorComp Inc.”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 37
    }
   }
  },
  {
   "pn": "172-E15-213R911",
   "family": "dsub",
   "short": "DA-15 receptacle · NorComp · solder cup",
   "desc": "NorComp D-sub receptacle, socket contacts, DA-15, standard density, solder cup",
   "backshell": [
    "165X02619X"
   ],
   "mates": [
    "M24308/4-2F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std15_female.png",
   "frontCap": "DA-15 socket face",
   "shell": "A",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “15 Position D-Sub Receptacle, Female Sockets Connector from NorComp Inc.”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 15
    }
   }
  },
  {
   "pn": "172-E25-213R911",
   "family": "dsub",
   "short": "DB-25 receptacle · NorComp · solder cup",
   "desc": "NorComp D-sub receptacle, socket contacts, DB-25, standard density, solder cup",
   "backshell": [
    "165X02629X"
   ],
   "mates": [
    "M24308/4-3F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std25_female.png",
   "frontCap": "DB-25 socket face",
   "shell": "B",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “25 Position D-Sub Receptacle, Female Sockets Connector from NorComp Inc.”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "172-E50-213R911",
   "family": "dsub",
   "short": "DD-50 receptacle · NorComp · solder cup",
   "desc": "NorComp D-sub receptacle, socket contacts, DD-50, standard density, solder cup",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/4-5F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std50_female.png",
   "frontCap": "DD-50 socket face",
   "shell": "D",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “50 Position D-Sub Receptacle, Female Sockets Connector from NorComp Inc.”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 50
    }
   }
  },
  {
   "pn": "172-E09-113R911",
   "family": "dsub",
   "short": "DE-9 plug · NorComp · solder cup",
   "desc": "NorComp D-sub plug, pin contacts, DE-9, standard density, solder cup",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/2-1F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_std9_male.png",
   "frontCap": "DE-9 pin face",
   "shell": "E",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB PLG 9POS PNL MNT SLDR”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 9
    }
   }
  },
  {
   "pn": "172-E15-113R911",
   "family": "dsub",
   "short": "DA-15 plug · NorComp · solder cup",
   "desc": "NorComp D-sub plug, pin contacts, DA-15, standard density, solder cup",
   "backshell": [
    "165X02619X"
   ],
   "mates": [
    "M24308/2-2F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_std15_male.png",
   "frontCap": "DA-15 pin face",
   "shell": "A",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB PLG 15POS PNL MT SLDR”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 15
    }
   }
  },
  {
   "pn": "172-E09-213R911",
   "family": "dsub",
   "short": "DE-9 receptacle · NorComp · solder cup",
   "desc": "NorComp D-sub receptacle, socket contacts, DE-9, standard density, solder cup",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/4-1F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std9_female.png",
   "frontCap": "DE-9 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB RCPT 9POS PNL MT SLDR”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 9
    }
   }
  },
  {
   "pn": "172-E25-113R911",
   "family": "dsub",
   "short": "DB-25 plug · NorComp · solder cup",
   "desc": "NorComp D-sub plug, pin contacts, DB-25, standard density, solder cup",
   "backshell": [
    "165X02629X"
   ],
   "mates": [
    "M24308/2-3F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_std25_male.png",
   "frontCap": "DB-25 pin face",
   "shell": "B",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB PLG 25POS PNL MT SLDR”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "172-E37-113R911",
   "family": "dsub",
   "short": "DC-37 plug · NorComp · solder cup",
   "desc": "NorComp D-sub plug, pin contacts, DC-37, standard density, solder cup",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/2-4F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_std37_male.png",
   "frontCap": "DC-37 pin face",
   "shell": "C",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “172-E37-113R911 – 37 Position D-Sub Plug, Male Pins Connector from NorComp Inc.”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 37
    }
   }
  },
  {
   "pn": "172-E50-113R911",
   "family": "dsub",
   "short": "DD-50 plug · NorComp · solder cup",
   "desc": "NorComp D-sub plug, pin contacts, DD-50, standard density, solder cup",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/2-5F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_std50_male.png",
   "frontCap": "DD-50 pin face",
   "shell": "D",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “50 Position D-Sub Plug, Male Pins Connector”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 50
    }
   }
  },
  {
   "pn": "189-025-513R571",
   "family": "dsub",
   "short": "DB-25 receptacle · NorComp · PCB, right angle",
   "desc": "NorComp D-sub receptacle, socket contacts, DB-25, standard density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-3F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_std25_female.png",
   "frontCap": "DB-25 socket face",
   "shell": "B",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “25, 25 Position D-Sub - Stacked Receptacle, Female Sockets Connector from NorComp Inc.”.",
    "Stacked dual-port: two 25-way receptacles in one body (50 contacts)."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "S20": 50
    }
   }
  },
  {
   "pn": "180-015-213R001",
   "family": "dsub",
   "short": "HD-15 receptacle · NorComp · solder cup",
   "desc": "NorComp D-sub receptacle, socket contacts, HD-15, high density, solder cup",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/4-11F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_hd15_female.png",
   "frontCap": "HD-15 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD RCPT 15POS PNL MNT”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 15
    }
   }
  },
  {
   "pn": "180-078-113R021",
   "family": "dsub",
   "short": "HD-78 plug · NorComp · solder cup",
   "desc": "NorComp D-sub plug, pin contacts, HD-78, high density, solder cup",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/2-15F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd78_male.png",
   "frontCap": "HD-78 pin face",
   "shell": "D",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD PLUG 78POS PNL MNT”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 78
    }
   }
  },
  {
   "pn": "180-062-213R021",
   "family": "dsub",
   "short": "HD-62 receptacle · NorComp · solder cup",
   "desc": "NorComp D-sub receptacle, socket contacts, HD-62, high density, solder cup",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/4-14F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_hd62_female.png",
   "frontCap": "HD-62 socket face",
   "shell": "C",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD RCPT 62POS PNL MNT”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 62
    }
   }
  },
  {
   "pn": "180-078-113R001",
   "family": "dsub",
   "short": "HD-78 plug · NorComp · solder cup",
   "desc": "NorComp D-sub plug, pin contacts, HD-78, high density, solder cup",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/2-15F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd78_male.png",
   "frontCap": "HD-78 pin face",
   "shell": "D",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD PLUG 78POS PNL MNT”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 78
    }
   }
  },
  {
   "pn": "180-M62-213R911",
   "family": "dsub",
   "short": "HD-62 receptacle · NorComp · solder cup",
   "desc": "NorComp D-sub receptacle, socket contacts, HD-62, high density, solder cup",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/4-14F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_hd62_female.png",
   "frontCap": "HD-62 socket face",
   "shell": "C",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD RCPT 62POS PNL MNT”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 62
    }
   }
  },
  {
   "pn": "180-M62-113R911",
   "family": "dsub",
   "short": "HD-62 plug · NorComp · solder cup",
   "desc": "NorComp D-sub plug, pin contacts, HD-62, high density, solder cup",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/2-14F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd62_male.png",
   "frontCap": "HD-62 pin face",
   "shell": "C",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD PLUG 62POS PNL MNT”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 62
    }
   }
  },
  {
   "pn": "180-M15-213R911",
   "family": "dsub",
   "short": "HD-15 receptacle · NorComp · solder cup",
   "desc": "NorComp D-sub receptacle, socket contacts, HD-15, high density, solder cup",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/4-11F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_hd15_female.png",
   "frontCap": "HD-15 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD RCPT 15POS PNL MNT”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 15
    }
   }
  },
  {
   "pn": "180-M26-213R911",
   "family": "dsub",
   "short": "HD-26 receptacle · NorComp · solder cup",
   "desc": "NorComp D-sub receptacle, socket contacts, HD-26, high density, solder cup",
   "backshell": [
    "165X02619X"
   ],
   "mates": [
    "M24308/4-12F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_hd26_female.png",
   "frontCap": "HD-26 socket face",
   "shell": "A",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD RCPT 26POS PNL MNT”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 26
    }
   }
  },
  {
   "pn": "180-078-213R021",
   "family": "dsub",
   "short": "HD-78 receptacle · NorComp · solder cup",
   "desc": "NorComp D-sub receptacle, socket contacts, HD-78, high density, solder cup",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/4-15F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_hd78_female.png",
   "frontCap": "HD-78 socket face",
   "shell": "D",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD RCPT 78POS PNL MNT”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 78
    }
   }
  },
  {
   "pn": "180-M78-113R911",
   "family": "dsub",
   "short": "HD-78 plug · NorComp · solder cup",
   "desc": "NorComp D-sub plug, pin contacts, HD-78, high density, solder cup",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/2-15F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd78_male.png",
   "frontCap": "HD-78 pin face",
   "shell": "D",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD PLUG 78POS PNL MNT”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 78
    }
   }
  },
  {
   "pn": "180-M78-213R911",
   "family": "dsub",
   "short": "HD-78 receptacle · NorComp · solder cup",
   "desc": "NorComp D-sub receptacle, socket contacts, HD-78, high density, solder cup",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/4-15F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_hd78_female.png",
   "frontCap": "HD-78 socket face",
   "shell": "D",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD RCPT 78POS PNL MNT”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 78
    }
   }
  },
  {
   "pn": "180-015-213R-051",
   "family": "dsub",
   "short": "HD-15 receptacle · NorComp · PCB, vertical",
   "desc": "NorComp D-sub receptacle, socket contacts, HD-15, high density, PCB, vertical",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-11F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_hd15_female.png",
   "frontCap": "HD-15 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, vertical"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": true,
   "mountText": "PCB, vertical",
   "links": [],
   "notes": [
    "From your item list: “D-Sub High Density Connectors 15P FEMALE VERT DIP SOLDER”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 15
    }
   }
  },
  {
   "pn": "182-009-113R171",
   "family": "dsub",
   "short": "DE-9 plug · NorComp · PCB, right angle",
   "desc": "NorComp D-sub plug, pin contacts, DE-9, standard density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/2-1F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_std9_male.png",
   "frontCap": "DE-9 pin face",
   "shell": "E",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB PLUG 9POS R/A SOLDER”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "male",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "S20": 9
    }
   }
  },
  {
   "pn": "182-037-113R181",
   "family": "dsub",
   "short": "DC-37 plug · NorComp · PCB, right angle",
   "desc": "NorComp D-sub plug, pin contacts, DC-37, standard density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/2-4F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_std37_male.png",
   "frontCap": "DC-37 pin face",
   "shell": "C",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB PLUG 37POS R/A SOLDER”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "male",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "S20": 37
    }
   }
  },
  {
   "pn": "182-009-213R181",
   "family": "dsub",
   "short": "DE-9 receptacle · NorComp · PCB, right angle",
   "desc": "NorComp D-sub receptacle, socket contacts, DE-9, standard density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-1F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_std9_female.png",
   "frontCap": "DE-9 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB RCPT 9POS R/A SOLDER”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "S20": 9
    }
   }
  },
  {
   "pn": "182-009-213R531",
   "family": "dsub",
   "short": "DE-9 receptacle · NorComp · PCB, right angle",
   "desc": "NorComp D-sub receptacle, socket contacts, DE-9, standard density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-1F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_std9_female.png",
   "frontCap": "DE-9 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB RCPT 9POS R/A SOLDER”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "S20": 9
    }
   }
  },
  {
   "pn": "182-009-213R561",
   "family": "dsub",
   "short": "DE-9 receptacle · NorComp · PCB, right angle",
   "desc": "NorComp D-sub receptacle, socket contacts, DE-9, standard density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-1F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_std9_female.png",
   "frontCap": "DE-9 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB RCPT 9POS R/A SOLDER”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "S20": 9
    }
   }
  },
  {
   "pn": "179-025-513R571",
   "family": "dsub",
   "short": "DB-25 receptacle · NorComp · PCB, right angle",
   "desc": "NorComp D-sub receptacle, socket contacts, DB-25, standard density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-3F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_std25_female.png",
   "frontCap": "DB-25 socket face",
   "shell": "B",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB RCPT 25POS R/A SLDR”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "171-009-213R001",
   "family": "dsub",
   "short": "DE-9 receptacle · NorComp · solder cup",
   "desc": "NorComp D-sub receptacle, socket contacts, DE-9, standard density, solder cup",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/4-1F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std9_female.png",
   "frontCap": "DE-9 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB RCPT 9POS PNL MT SLDR”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 9
    }
   }
  },
  {
   "pn": "171-009-203L001",
   "family": "dsub",
   "short": "DE-9 receptacle · NorComp · solder cup",
   "desc": "NorComp D-sub receptacle, socket contacts, DE-9, standard density, solder cup",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/4-1F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std9_female.png",
   "frontCap": "DE-9 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “D-Sub Standard Connectors 9P Female”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 9
    }
   }
  },
  {
   "pn": "170-025-273L010",
   "family": "dsub",
   "short": "DB-25 receptacle · NorComp · crimp housing · no contacts",
   "desc": "NorComp D-sub receptacle, socket contacts, DB-25, standard density, crimp housing, contacts not included",
   "backshell": [
    "165X02629X"
   ],
   "mates": [
    "M24308/4-3F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std25_female.png",
   "frontCap": "DB-25 socket face",
   "shell": "B",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HOUSING RCPT 25POS”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "HDF-V62-113L011",
   "family": "dsub",
   "short": "HD-62 plug · NorComp · solder cup",
   "desc": "NorComp D-sub plug, pin contacts, HD-62, high density, solder cup",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/2-14F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd62_male.png",
   "frontCap": "HD-62 pin face",
   "shell": "C",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD PLUG 62POS PNL MNT”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "NorComp",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 62
    }
   }
  },
  {
   "pn": "9665526612",
   "family": "dsub",
   "short": "DD-50 receptacle · HARTING · crimp housing · no contacts",
   "desc": "HARTING D-sub receptacle, socket contacts, DD-50, standard density, crimp housing, contacts not included",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/4-5F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std50_female.png",
   "frontCap": "DD-50 socket face",
   "shell": "D",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “09665526612 – 50 Position D-Sub Receptacle, Female Sockets Connector from HARTING”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "HARTING",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 50
    }
   }
  },
  {
   "pn": "09665526615",
   "family": "dsub",
   "short": "DD-50 receptacle · HARTING · crimp housing · no contacts",
   "desc": "HARTING D-sub receptacle, socket contacts, DD-50, standard density, crimp housing, contacts not included",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/4-5F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std50_female.png",
   "frontCap": "DD-50 socket face",
   "shell": "D",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “09665526615 – 50 Position D-Sub Receptacle, Female Sockets Connector from HARTING”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "HARTING",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 50
    }
   }
  },
  {
   "pn": "09662526617",
   "family": "dsub",
   "short": "DA-15 receptacle · HARTING · crimp housing · no contacts",
   "desc": "HARTING D-sub receptacle, socket contacts, DA-15, standard density, crimp housing, contacts not included",
   "backshell": [
    "165X02619X"
   ],
   "mates": [
    "M24308/4-2F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std15_female.png",
   "frontCap": "DA-15 socket face",
   "shell": "A",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “09662526617 – 15 Position D-Sub Receptacle, Female Sockets Connector from HARTING”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "HARTING",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 15
    }
   }
  },
  {
   "pn": "09662627816",
   "family": "dsub",
   "short": "DA-15 plug · HARTING · crimp housing · no contacts",
   "desc": "HARTING D-sub plug, pin contacts, DA-15, standard density, crimp housing, contacts not included",
   "backshell": [
    "165X02619X"
   ],
   "mates": [
    "M24308/2-2F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_std15_male.png",
   "frontCap": "DA-15 pin face",
   "shell": "A",
   "pins": [
    {
     "pn": "M39029/64-369",
     "note": "size 20 pin – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “09662627816 – 15 Position D-Sub Plug, Male Pins Connector from HARTING”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "HARTING",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 15
    }
   }
  },
  {
   "pn": "9663626813",
   "family": "dsub",
   "short": "DB-25 plug · HARTING · crimp housing · no contacts",
   "desc": "HARTING D-sub plug, pin contacts, DB-25, standard density, crimp housing, contacts not included",
   "backshell": [
    "165X02629X"
   ],
   "mates": [
    "M24308/2-3F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_std25_male.png",
   "frontCap": "DB-25 pin face",
   "shell": "B",
   "pins": [
    {
     "pn": "M39029/64-369",
     "note": "size 20 pin – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “09663626813 – 25 Position D-Sub Plug, Male Pins Connector from HARTING”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "HARTING",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "09661526613",
   "family": "dsub",
   "short": "DE-9 receptacle · HARTING · crimp housing · no contacts",
   "desc": "HARTING D-sub receptacle, socket contacts, DE-9, standard density, crimp housing, contacts not included",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/4-1F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std9_female.png",
   "frontCap": "DE-9 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “09661526613 – 9 Position D-Sub Receptacle, Female Sockets Connector from HARTING”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "HARTING",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 9
    }
   }
  },
  {
   "pn": "09661117502",
   "family": "dsub",
   "short": "DE-9 receptacle · HARTING · crimp housing · no contacts",
   "desc": "HARTING D-sub receptacle, socket contacts, DE-9, standard density, crimp housing, contacts not included",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/4-1F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std9_female.png",
   "frontCap": "DE-9 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “09661117502 – 9 Position D-Sub Receptacle, Female Sockets Connector from HARTING”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "HARTING",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 9
    }
   }
  },
  {
   "pn": "09564615713",
   "family": "dsub",
   "short": "HD-62 plug · HARTING · crimp housing · no contacts",
   "desc": "HARTING D-sub plug, pin contacts, HD-62, high density, crimp housing, contacts not included",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/2-14F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd62_male.png",
   "frontCap": "HD-62 pin face",
   "shell": "C",
   "pins": [
    {
     "pn": "M39029/58-360",
     "note": "size 22 pin – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “09564615713 – 62 Position D-Sub, High Density Plug, Male Pins Connector from HARTING”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "HARTING",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 62
    }
   }
  },
  {
   "pn": "09564627813",
   "family": "dsub",
   "short": "HD-62 plug · HARTING · crimp housing · no contacts",
   "desc": "HARTING D-sub plug, pin contacts, HD-62, high density, crimp housing, contacts not included",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/2-14F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd62_male.png",
   "frontCap": "HD-62 pin face",
   "shell": "C",
   "pins": [
    {
     "pn": "M39029/58-360",
     "note": "size 22 pin – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “09564627813 – 62 Position D-Sub, High Density Plug, Male Pins Connector from HARTING”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "HARTING",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 62
    }
   }
  },
  {
   "pn": "163X10169X",
   "family": "dsub",
   "short": "HD-15 plug · Amphenol CONEC · crimp housing · no contacts",
   "desc": "Amphenol CONEC D-sub plug, pin contacts, HD-15, high density, crimp housing, contacts not included",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/2-11F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd15_male.png",
   "frontCap": "HD-15 pin face",
   "shell": "E",
   "pins": [
    {
     "pn": "M39029/58-360",
     "note": "size 22 pin – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD HOUSING PLUG 15POS”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "Amphenol CONEC",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 15
    }
   }
  },
  {
   "pn": "163X10199X",
   "family": "dsub",
   "short": "HD-62 plug · Amphenol CONEC · crimp housing · no contacts",
   "desc": "Amphenol CONEC D-sub plug, pin contacts, HD-62, high density, crimp housing, contacts not included",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/2-14F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd62_male.png",
   "frontCap": "HD-62 pin face",
   "shell": "C",
   "pins": [
    {
     "pn": "M39029/58-360",
     "note": "size 22 pin – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD HOUSING PLUG 62POS”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "Amphenol CONEC",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 62
    }
   }
  },
  {
   "pn": "163X10209X",
   "family": "dsub",
   "short": "HD-78 plug · Amphenol CONEC · crimp housing · no contacts",
   "desc": "Amphenol CONEC D-sub plug, pin contacts, HD-78, high density, crimp housing, contacts not included",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/2-15F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd78_male.png",
   "frontCap": "HD-78 pin face",
   "shell": "D",
   "pins": [
    {
     "pn": "M39029/58-360",
     "note": "size 22 pin – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD HOUSING PLUG 78POS”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "Amphenol CONEC",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 78
    }
   }
  },
  {
   "pn": "164A18989X",
   "family": "dsub",
   "short": "DD-50 receptacle · Amphenol CONEC · PCB, right angle",
   "desc": "Amphenol CONEC D-sub receptacle, socket contacts, DD-50, standard density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-5F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_std50_female.png",
   "frontCap": "DD-50 socket face",
   "shell": "D",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB RCPT 50POS R/A SOLDER”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "Amphenol CONEC",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "S20": 50
    }
   }
  },
  {
   "pn": "164A18829X",
   "family": "dsub",
   "short": "DB-25 receptacle · Amphenol CONEC · PCB, right angle",
   "desc": "Amphenol CONEC D-sub receptacle, socket contacts, DB-25, standard density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-3F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_std25_female.png",
   "frontCap": "DB-25 socket face",
   "shell": "B",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB RCPT 25POS R/A SOLDER”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "Amphenol CONEC",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "163A13089X",
   "family": "dsub",
   "short": "DB-25 plug · Amphenol CONEC · PCB, right angle",
   "desc": "Amphenol CONEC D-sub plug, pin contacts, DB-25, standard density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/2-3F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_std25_male.png",
   "frontCap": "DB-25 pin face",
   "shell": "B",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB PLUG 25POS R/A SOLDER”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "Amphenol CONEC",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "male",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "163A13079X",
   "family": "dsub",
   "short": "DA-15 plug · Amphenol CONEC · PCB, right angle",
   "desc": "Amphenol CONEC D-sub plug, pin contacts, DA-15, standard density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/2-2F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_std15_male.png",
   "frontCap": "DA-15 pin face",
   "shell": "A",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB PLUG 15POS R/A SOLDER”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "Amphenol CONEC",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "male",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "S20": 15
    }
   }
  },
  {
   "pn": "DSS3XSXXG04X",
   "family": "dsub",
   "short": "DB-25 receptacle · Amphenol CONEC · crimp housing · no contacts",
   "desc": "Amphenol CONEC D-sub receptacle, socket contacts, DB-25, standard density, crimp housing, contacts not included",
   "backshell": [
    "165X02629X"
   ],
   "mates": [
    "M24308/4-3F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std25_female.png",
   "frontCap": "DB-25 socket face",
   "shell": "B",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “Receptacle for Female Contacts Housing D-Sub Connector 25 Position”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "Amphenol CONEC",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "DSS5XSXXG04X",
   "family": "dsub",
   "short": "DD-50 receptacle · Amphenol CONEC · crimp housing · no contacts",
   "desc": "Amphenol CONEC D-sub receptacle, socket contacts, DD-50, standard density, crimp housing, contacts not included",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/4-5F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std50_female.png",
   "frontCap": "DD-50 socket face",
   "shell": "D",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HOUSING RCPT 50POS”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "Amphenol CONEC",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 50
    }
   }
  },
  {
   "pn": "DLS3XS6AK44X",
   "family": "dsub",
   "short": "DB-25 receptacle · Amphenol CONEC · PCB, right angle",
   "desc": "Amphenol CONEC D-sub receptacle, socket contacts, DB-25, standard density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-3F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_std25_female.png",
   "frontCap": "DB-25 socket face",
   "shell": "B",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB RCPT 25POS R/A SOLDER”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "Amphenol CONEC",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "2301841-2",
   "family": "dsub",
   "short": "DB-25 receptacle · TE · PCB, vertical",
   "desc": "TE D-sub receptacle, socket contacts, DB-25, standard density, PCB, vertical",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-3F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_std25_female.png",
   "frontCap": "DB-25 socket face",
   "shell": "B",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, vertical"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": true,
   "mountText": "PCB, vertical",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB RCPT 25POS VERT SLDR”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "TE",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "2301840-1",
   "family": "dsub",
   "short": "DA-15 receptacle · TE · PCB, vertical",
   "desc": "TE D-sub receptacle, socket contacts, DA-15, standard density, PCB, vertical",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-2F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_std15_female.png",
   "frontCap": "DA-15 socket face",
   "shell": "A",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, vertical"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": true,
   "mountText": "PCB, vertical",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB RCPT 15POS VERT SLDR”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "TE",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 15
    }
   }
  },
  {
   "pn": "1658640-2",
   "family": "dsub",
   "short": "DD-50 receptacle · TE · crimp housing · no contacts",
   "desc": "TE D-sub receptacle, socket contacts, DD-50, standard density, crimp housing, contacts not included",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/4-5F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std50_female.png",
   "frontCap": "DD-50 socket face",
   "shell": "D",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HOUSING RCPT 50POS”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "TE",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 50
    }
   }
  },
  {
   "pn": "205205-2",
   "family": "dsub",
   "short": "DA-15 receptacle · TE · crimp housing · no contacts",
   "desc": "TE D-sub receptacle, socket contacts, DA-15, standard density, crimp housing, contacts not included",
   "backshell": [
    "165X02619X"
   ],
   "mates": [
    "M24308/4-2F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std15_female.png",
   "frontCap": "DA-15 socket face",
   "shell": "A",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HOUSING RCPT 15POS”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "TE",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 15
    }
   }
  },
  {
   "pn": "1658674-1",
   "family": "dsub",
   "short": "HD-78 plug · TE · crimp housing · no contacts",
   "desc": "TE D-sub plug, pin contacts, HD-78, high density, crimp housing, contacts not included",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/2-15F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd78_male.png",
   "frontCap": "HD-78 pin face",
   "shell": "D",
   "pins": [
    {
     "pn": "M39029/58-360",
     "note": "size 22 pin – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “plug for male contacts housing HD D-SUB, 78 Position”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "TE",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 78
    }
   }
  },
  {
   "pn": "204511-1",
   "family": "dsub",
   "short": "HD-104 plug · TE · crimp housing · no contacts",
   "desc": "TE D-sub plug, pin contacts, HD-104, high density, crimp housing, contacts not included",
   "backshell": [
    "Not given"
   ],
   "mates": [
    "M24308/2-291F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd104_male.png",
   "frontCap": "HD-104 pin face",
   "shell": "6",
   "pins": [
    {
     "pn": "M39029/58-360",
     "note": "size 22 pin – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “D-Sub high-density housing, plug, 104 position, crimp”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "TE",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 104
    }
   }
  },
  {
   "pn": "1757838-4",
   "family": "dsub",
   "short": "DC-37 receptacle · TE · PCB, right angle",
   "desc": "TE D-sub receptacle, socket contacts, DC-37, standard density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-4F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_std37_female.png",
   "frontCap": "DC-37 socket face",
   "shell": "C",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB RCPT 37POS R/A SOLDER”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "TE",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "S20": 37
    }
   }
  },
  {
   "pn": "DD78S320000",
   "family": "dsub",
   "short": "HD-78 receptacle · ITT Cannon · PCB, vertical",
   "desc": "ITT Cannon D-sub receptacle, socket contacts, HD-78, high density, PCB, vertical",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-15F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_hd78_female.png",
   "frontCap": "HD-78 socket face",
   "shell": "D",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, vertical"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": true,
   "mountText": "PCB, vertical",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD RCPT 78P VERT SLDR”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "ITT Cannon",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 78
    }
   }
  },
  {
   "pn": "DD104S3S000/AA",
   "family": "dsub",
   "short": "HD-104 receptacle · ITT Cannon · PCB, vertical",
   "desc": "ITT Cannon D-sub receptacle, socket contacts, HD-104, high density, PCB, vertical",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-269F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_hd104_female.png",
   "frontCap": "HD-104 socket face",
   "shell": "6",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, vertical"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": true,
   "mountText": "PCB, vertical",
   "links": [],
   "notes": [
    "From your item list: “CONN DSUB HD RCPT 104P VERT SLDR”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "ITT Cannon",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 104
    }
   }
  },
  {
   "pn": "DD104M3S000/AA",
   "family": "dsub",
   "short": "HD-104 plug · ITT Cannon · PCB, vertical",
   "desc": "ITT Cannon D-sub plug, pin contacts, HD-104, high density, PCB, vertical",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/2-291F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_hd104_male.png",
   "frontCap": "HD-104 pin face",
   "shell": "6",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, vertical"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": true,
   "mountText": "PCB, vertical",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD PLG 104P VERT SLDR”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "ITT Cannon",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 104
    }
   }
  },
  {
   "pn": "RD25M0000S/AA",
   "family": "dsub",
   "short": "DB-25 plug · ITT Cannon · crimp housing · no contacts",
   "desc": "ITT Cannon D-sub plug, pin contacts, DB-25, standard density, crimp housing, contacts not included",
   "backshell": [
    "165X02629X"
   ],
   "mates": [
    "M24308/2-3F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_std25_male.png",
   "frontCap": "DB-25 pin face",
   "shell": "B",
   "pins": [
    {
     "pn": "M39029/64-369",
     "note": "size 20 pin – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “D-SUB HOUSING”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "ITT Cannon",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "RD25S0000S/AA",
   "family": "dsub",
   "short": "DB-25 receptacle · ITT Cannon · crimp housing · no contacts",
   "desc": "ITT Cannon D-sub receptacle, socket contacts, DB-25, standard density, crimp housing, contacts not included",
   "backshell": [
    "165X02629X"
   ],
   "mates": [
    "M24308/4-3F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std25_female.png",
   "frontCap": "DB-25 socket face",
   "shell": "B",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “D-SUB HOUSING”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "ITT Cannon",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "DD62M0000S/AA",
   "family": "dsub",
   "short": "HD-62 plug · ITT Cannon · crimp housing · no contacts",
   "desc": "ITT Cannon D-sub plug, pin contacts, HD-62, high density, crimp housing, contacts not included",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/2-14F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd62_male.png",
   "frontCap": "HD-62 pin face",
   "shell": "C",
   "pins": [
    {
     "pn": "M39029/58-360",
     "note": "size 22 pin – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “D-SUB HOUSING”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "ITT Cannon",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 62
    }
   }
  },
  {
   "pn": "DD62S0000S/AA",
   "family": "dsub",
   "short": "HD-62 receptacle · ITT Cannon · crimp housing · no contacts",
   "desc": "ITT Cannon D-sub receptacle, socket contacts, HD-62, high density, crimp housing, contacts not included",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/4-14F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_hd62_female.png",
   "frontCap": "HD-62 socket face",
   "shell": "C",
   "pins": [
    {
     "pn": "M39029/57-354",
     "note": "size 22 socket – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “D-SUB HOUSING”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "ITT Cannon",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 62
    }
   }
  },
  {
   "pn": "DD78M0000S/AA",
   "family": "dsub",
   "short": "HD-78 plug · ITT Cannon · crimp housing · no contacts",
   "desc": "ITT Cannon D-sub plug, pin contacts, HD-78, high density, crimp housing, contacts not included",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/2-15F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd78_male.png",
   "frontCap": "HD-78 pin face",
   "shell": "D",
   "pins": [
    {
     "pn": "M39029/58-360",
     "note": "size 22 pin – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “D-SUB HOUSING”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "ITT Cannon",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 78
    }
   }
  },
  {
   "pn": "DD78S0000S/AA",
   "family": "dsub",
   "short": "HD-78 receptacle · ITT Cannon · crimp housing · no contacts",
   "desc": "ITT Cannon D-sub receptacle, socket contacts, HD-78, high density, crimp housing, contacts not included",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/4-15F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_hd78_female.png",
   "frontCap": "HD-78 socket face",
   "shell": "D",
   "pins": [
    {
     "pn": "M39029/57-354",
     "note": "size 22 socket – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “D-SUB HOUSING”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "ITT Cannon",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 78
    }
   }
  },
  {
   "pn": "DD62S100E0",
   "family": "dsub",
   "short": "HD-62 receptacle · ITT Cannon · crimp housing · no contacts",
   "desc": "ITT Cannon D-sub receptacle, socket contacts, HD-62, high density, crimp housing, contacts not included",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/4-14F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_hd62_female.png",
   "frontCap": "HD-62 socket face",
   "shell": "C",
   "pins": [
    {
     "pn": "M39029/57-354",
     "note": "size 22 socket – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “D-SUB CONNECTOR”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "ITT Cannon",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 62
    }
   }
  },
  {
   "pn": "RD25S100E0",
   "family": "dsub",
   "short": "DB-25 receptacle · ITT Cannon · crimp housing · no contacts",
   "desc": "ITT Cannon D-sub receptacle, socket contacts, DB-25, standard density, crimp housing, contacts not included",
   "backshell": [
    "165X02629X"
   ],
   "mates": [
    "M24308/4-3F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_std25_female.png",
   "frontCap": "DB-25 socket face",
   "shell": "B",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “D-SUB CONNECTOR”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "ITT Cannon",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "RD25M100E0",
   "family": "dsub",
   "short": "DB-25 plug · ITT Cannon · crimp housing · no contacts",
   "desc": "ITT Cannon D-sub plug, pin contacts, DB-25, standard density, crimp housing, contacts not included",
   "backshell": [
    "165X02629X"
   ],
   "mates": [
    "M24308/2-3F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_std25_male.png",
   "frontCap": "DB-25 pin face",
   "shell": "B",
   "pins": [
    {
     "pn": "M39029/64-369",
     "note": "size 20 pin – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “D-SUB CONNECTOR”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "ITT Cannon",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "DD104M100E0",
   "family": "dsub",
   "short": "HD-104 plug · ITT Cannon · crimp housing · no contacts",
   "desc": "ITT Cannon D-sub plug, pin contacts, HD-104, high density, crimp housing, contacts not included",
   "backshell": [
    "Not given"
   ],
   "mates": [
    "M24308/2-291F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd104_male.png",
   "frontCap": "HD-104 pin face",
   "shell": "6",
   "pins": [
    {
     "pn": "M39029/58-360",
     "note": "size 22 pin – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “D-SUB CONNECTOR”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "ITT Cannon",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 104
    }
   }
  },
  {
   "pn": "DD78M100E0/AA",
   "family": "dsub",
   "short": "HD-78 plug · ITT Cannon · crimp housing · no contacts",
   "desc": "ITT Cannon D-sub plug, pin contacts, HD-78, high density, crimp housing, contacts not included",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/2-15F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd78_male.png",
   "frontCap": "HD-78 pin face",
   "shell": "D",
   "pins": [
    {
     "pn": "M39029/58-360",
     "note": "size 22 pin – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “D-SUB HD78 Male Connector”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "ITT Cannon",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 78
    }
   }
  },
  {
   "pn": "DD104S100E0/AA",
   "family": "dsub",
   "short": "HD-104 receptacle · ITT Cannon · crimp housing · no contacts",
   "desc": "ITT Cannon D-sub receptacle, socket contacts, HD-104, high density, crimp housing, contacts not included",
   "backshell": [
    "Not given"
   ],
   "mates": [
    "M24308/4-269F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_hd104_female.png",
   "frontCap": "HD-104 socket face",
   "shell": "6",
   "pins": [
    {
     "pn": "M39029/57-354",
     "note": "size 22 socket – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “D-Sub High Density Connectors DSUB 104F CRIMP GF ZINC”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "ITT Cannon",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 104
    }
   }
  },
  {
   "pn": "DD26M1000S",
   "family": "dsub",
   "short": "HD-26 plug · ITT Cannon · crimp housing · no contacts",
   "desc": "ITT Cannon D-sub plug, pin contacts, HD-26, high density, crimp housing, contacts not included",
   "backshell": [
    "165X02619X"
   ],
   "mates": [
    "M24308/2-12F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd26_male.png",
   "frontCap": "HD-26 pin face",
   "shell": "A",
   "pins": [
    {
     "pn": "M39029/58-360",
     "note": "size 22 pin – MIL equivalent"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only; order crimp contacts separately"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (crimp)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD PLUG 26POS CRIMP”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet.",
    "Crimp housing: contacts assumed NOT included; the MIL M39029 contact shown is the standard equivalent – the manufacturer may list its own contact."
   ],
   "brand": "ITT Cannon",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "HD22": 26
    }
   }
  },
  {
   "pn": "DEMA-15P-K87",
   "family": "dsub",
   "short": "HD-15 plug · ITT Cannon · solder cup",
   "desc": "ITT Cannon D-sub plug, pin contacts, HD-15, high density, solder cup",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/2-11F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd15_male.png",
   "frontCap": "HD-15 pin face",
   "shell": "E",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “15 Position D-Sub, High Density Plug, Male Pins Connector”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "ITT Cannon",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 15
    }
   }
  },
  {
   "pn": "DDMA78PF0",
   "family": "dsub",
   "short": "HD-78 plug · ITT Cannon · solder cup",
   "desc": "ITT Cannon D-sub plug, pin contacts, HD-78, high density, solder cup",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/2-15F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd78_male.png",
   "frontCap": "HD-78 pin face",
   "shell": "D",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “Connector - P9 & P10 (D-Sub 78P)”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "ITT Cannon",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 78
    }
   }
  },
  {
   "pn": "17EBH-015-P-AM-0-10",
   "family": "dsub",
   "short": "HD-15 plug · Amphenol ICC · solder cup",
   "desc": "Amphenol ICC D-sub plug, pin contacts, HD-15, high density, solder cup",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/2-11F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug (engineer’s D-sub picture)",
   "front": "dsub_hd15_male.png",
   "frontCap": "HD-15 pin face",
   "shell": "E",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “17EBH015PAM010 – 15 Position D-Sub, High Density Plug, Male Pins Connector from Amphenol ICC (Commercial Products)”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "Amphenol ICC",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 15
    }
   }
  },
  {
   "pn": "17EHD015SAA000",
   "family": "dsub",
   "short": "HD-15 receptacle · Amphenol ICC · solder cup",
   "desc": "Amphenol ICC D-sub receptacle, socket contacts, HD-15, high density, solder cup",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/4-11F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture)",
   "front": "dsub_hd15_female.png",
   "frontCap": "HD-15 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "solder cup"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel (solder cup)",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD RCPT 15P SLDR CUP”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "Amphenol ICC",
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 15
    }
   }
  },
  {
   "pn": "ICD15S13E4GX00LF",
   "family": "dsub",
   "short": "HD-15 receptacle · Amphenol ICC · PCB, right angle",
   "desc": "Amphenol ICC D-sub receptacle, socket contacts, HD-15, high density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-11F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_hd15_female.png",
   "frontCap": "HD-15 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB HD RCPT 15P R/A SLDR”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "Amphenol ICC",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 15
    }
   }
  },
  {
   "pn": "L77SDC37SA4CH4FC309",
   "family": "dsub",
   "short": "DC-37 receptacle · Amphenol ICC · PCB, right angle",
   "desc": "Amphenol ICC D-sub receptacle, socket contacts, DC-37, standard density, PCB, right angle",
   "backshell": [
    "None – board-mounted"
   ],
   "mates": [
    "M24308/4-4F"
   ],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle (engineer’s D-sub picture – PCB version not drawn)",
   "front": "dsub_std37_female.png",
   "frontCap": "DC-37 socket face",
   "shell": "C",
   "pins": [
    {
     "pn": "Fixed contacts",
     "note": "PCB, right angle"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – contacts fitted"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB, right angle",
   "links": [],
   "notes": [
    "From your item list: “CONN D-SUB RCPT 37POS R/A SOLDER”."
   ],
   "verify": [
    "Type, termination and mounting read from your item list description – confirm on the datasheet."
   ],
   "brand": "Amphenol ICC",
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "90"
    ],
    "withPins": true,
    "contacts": {
     "S20": 37
    }
   }
  },
  {
   "pn": "M24308/2-15Z",
   "family": "dsub",
   "short": "HD-78 receptacle · M24308 · Z finish · with contacts",
   "desc": "D-subminiature HD-78 receptacle, socket contacts, crimp, high density, MIL-DTL-24308/2, steel shell, zinc yellow (Z), RoHS",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/4-15Z"
   ],
   "color": {
    "name": "Zinc, yellow passivated (Z)",
    "sw": "#d8c35a"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle with hex jackposts (engineer’s picture)",
   "front": "dsub_hd78_female.png",
   "frontCap": "HD-78 socket face",
   "shell": "D",
   "pins": [
    {
     "pn": "M39029/57-354",
     "note": "size 22 socket, 22–28 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/result?keywords=165X17449X"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish Z = zinc yellow, RoHS-compliant version of the F part."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery.",
    "165X17449X (50-way backshell) was not found online – confirm with Amphenol CONEC."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "HD22": 78
    }
   }
  },
  {
   "pn": "M24308/2-5Z",
   "family": "dsub",
   "short": "DD-50 receptacle · M24308 · Z finish · with contacts",
   "desc": "D-subminiature DD-50 receptacle, socket contacts, crimp, standard density, MIL-DTL-24308/2, steel shell, zinc yellow (Z), RoHS",
   "backshell": [
    "165X17449X"
   ],
   "mates": [
    "M24308/4-5Z"
   ],
   "color": {
    "name": "Zinc, yellow passivated (Z)",
    "sw": "#d8c35a"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle with hex jackposts (engineer’s picture)",
   "front": "dsub_std50_female.png",
   "frontCap": "DD-50 socket face",
   "shell": "D",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/result?keywords=165X17449X"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish Z = zinc yellow, RoHS-compliant version of the F part."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery.",
    "165X17449X (50-way backshell) was not found online – confirm with Amphenol CONEC."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 50
    }
   }
  },
  {
   "pn": "M24308/2-1Z",
   "family": "dsub",
   "short": "DE-9 receptacle · M24308 · Z finish · with contacts",
   "desc": "D-subminiature DE-9 receptacle, socket contacts, crimp, standard density, MIL-DTL-24308/2, steel shell, zinc yellow (Z), RoHS",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/4-1Z"
   ],
   "color": {
    "name": "Zinc, yellow passivated (Z)",
    "sw": "#d8c35a"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle with hex jackposts (engineer’s picture)",
   "front": "dsub_std9_female.png",
   "frontCap": "DE-9 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/detail/amphenol-conec/165X02609X/3534032"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish Z = zinc yellow, RoHS-compliant version of the F part."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 9
    }
   }
  },
  {
   "pn": "M24308/4-1Z",
   "family": "dsub",
   "short": "DE-9 plug · M24308 · Z finish · with contacts",
   "desc": "D-subminiature DE-9 plug, pin contacts, crimp, standard density, MIL-DTL-24308/4, steel shell, zinc yellow (Z), RoHS",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/2-1Z"
   ],
   "color": {
    "name": "Zinc, yellow passivated (Z)",
    "sw": "#d8c35a"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug with thumbscrews (engineer’s picture)",
   "front": "dsub_std9_male.png",
   "frontCap": "DE-9 pin face",
   "shell": "E",
   "pins": [
    {
     "pn": "M39029/64-369",
     "note": "size 20 pin, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/detail/amphenol-conec/165X02609X/3534032"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish Z = zinc yellow, RoHS-compliant version of the F part."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 9
    }
   }
  },
  {
   "pn": "M24308/4-4Z",
   "family": "dsub",
   "short": "DC-37 plug · M24308 · Z finish · with contacts",
   "desc": "D-subminiature DC-37 plug, pin contacts, crimp, standard density, MIL-DTL-24308/4, steel shell, zinc yellow (Z), RoHS",
   "backshell": [
    "165X02639X"
   ],
   "mates": [
    "M24308/2-4Z"
   ],
   "color": {
    "name": "Zinc, yellow passivated (Z)",
    "sw": "#d8c35a"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug with thumbscrews (engineer’s picture)",
   "front": "dsub_std37_male.png",
   "frontCap": "DC-37 pin face",
   "shell": "C",
   "pins": [
    {
     "pn": "M39029/64-369",
     "note": "size 20 pin, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/detail/amphenol-conec/165X02639X/5217402"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish Z = zinc yellow, RoHS-compliant version of the F part."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 37
    }
   }
  },
  {
   "pn": "M24308/4-3Z",
   "family": "dsub",
   "short": "DB-25 plug · M24308 · Z finish · with contacts",
   "desc": "D-subminiature DB-25 plug, pin contacts, crimp, standard density, MIL-DTL-24308/4, steel shell, zinc yellow (Z), RoHS",
   "backshell": [
    "165X02629X"
   ],
   "mates": [
    "M24308/2-3Z"
   ],
   "color": {
    "name": "Zinc, yellow passivated (Z)",
    "sw": "#d8c35a"
   },
   "side": "side_dsub_m.png",
   "sideCap": "Plug with thumbscrews (engineer’s picture)",
   "front": "dsub_std25_male.png",
   "frontCap": "DB-25 pin face",
   "shell": "B",
   "pins": [
    {
     "pn": "M39029/64-369",
     "note": "size 20 pin, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – supplied with crimp contacts"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/result?keywords=165X02629X"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish Z = zinc yellow, RoHS-compliant version of the F part."
   ],
   "verify": [
    "Amphenol’s QPL table marks this dash number “contacts not supplied” – confirm contacts are in the delivery."
   ],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "contacts": {
     "S20": 25
    }
   }
  },
  {
   "pn": "M24308/2-281F",
   "family": "dsub",
   "short": "DE-9 receptacle · M24308 · housing, no contacts",
   "desc": "D-subminiature DE-9 receptacle housing for socket contacts, crimp, MIL-DTL-24308/2, cadmium yellow (F) – contacts not supplied",
   "backshell": [
    "165X02609X"
   ],
   "mates": [
    "M24308/4-1F"
   ],
   "color": {
    "name": "Cadmium, yellow passivated (F)",
    "sw": "#c9a646"
   },
   "side": "side_dsub_f.png",
   "sideCap": "Receptacle with hex jackposts (engineer’s picture)",
   "front": "dsub_std9_female.png",
   "frontCap": "DE-9 socket face",
   "shell": "E",
   "pins": [
    {
     "pn": "M39029/63-368",
     "note": "size 20 socket, 20–24 AWG"
    }
   ],
   "withPins": {
    "v": false,
    "t": "No – housing only (QPL: contacts not supplied); order M39029/63-368"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "cable or panel",
   "links": [
    [
     "Backshell on DigiKey",
     "https://www.digikey.com/en/products/detail/amphenol-conec/165X02609X/3534032"
    ]
   ],
   "notes": [
    "Unused cavities stay empty – D-subs take no sealing plugs.",
    "Finish F = cadmium yellow, not RoHS. Zinc-yellow (Z) and zinc-nickel (K) versions exist."
   ],
   "verify": [],
   "search": {
    "mount": [
     "cable",
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": false,
    "contacts": {
     "S20": 9
    }
   }
  },
  {
   "pn": "000-36775",
   "family": "bnc",
   "short": "BNC plug · 50 Ω · Amphenol RF",
   "desc": "Amphenol RF BNC plug, straight, 50 Ω, crimp termination",
   "backshell": [
    "N/A"
   ],
   "mates": [],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing (supplied)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre pin"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "plug",
   "cables": null,
   "links": [],
   "notes": [
    "From your item list: “CONN BNC PLUG STR 50 OHM CRIMP”."
   ],
   "verify": [
    "Details from your item list description – confirm cable group / dimensions on the datasheet."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "112132",
   "family": "bnc",
   "short": "BNC plug · 50 Ω · Amphenol RF",
   "desc": "Amphenol RF BNC plug, straight, 50 Ω, crimp termination",
   "backshell": [
    "N/A"
   ],
   "mates": [],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing (supplied)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre pin"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "plug",
   "cables": null,
   "links": [],
   "notes": [
    "From your item list: “CONN BNC PLUG STR 50 OHM CRIMP”."
   ],
   "verify": [
    "Details from your item list description – confirm cable group / dimensions on the datasheet."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [],
    "noCable": false,
    "impedance": 50
   }
  },
  {
   "pn": "112133",
   "family": "bnc",
   "short": "BNC plug · 75 Ω · Amphenol RF",
   "desc": "Amphenol RF BNC plug, straight, 75 Ω, crimp termination",
   "backshell": [
    "N/A"
   ],
   "mates": [],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing (supplied)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre pin"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "plug",
   "cables": null,
   "links": [],
   "notes": [
    "From your item list: “CONN BNC PLUG STR 75 OHM CRIMP”.",
    "75 Ω part – does not mate correctly with 50 Ω systems at high frequency."
   ],
   "verify": [
    "Details from your item list description – confirm cable group / dimensions on the datasheet."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [],
    "noCable": false,
    "impedance": 75
   }
  },
  {
   "pn": "RBD-75-S-00",
   "family": "bnc",
   "short": "BNC plug · 75 Ω · —",
   "desc": "— BNC plug, straight, 75 Ω, solder termination",
   "backshell": [
    "N/A"
   ],
   "mates": [],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing (supplied)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre pin"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "plug",
   "cables": null,
   "links": [],
   "notes": [
    "From your item list: “CONN BNC PLUG STR 75 OHM SOLDER”.",
    "75 Ω part – does not mate correctly with 50 Ω systems at high frequency."
   ],
   "verify": [
    "Details from your item list description – confirm cable group / dimensions on the datasheet."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [],
    "noCable": false,
    "impedance": 75
   }
  },
  {
   "pn": "MP-13-10-1 RG179",
   "family": "bnc",
   "short": "BNC plug · 75 Ω · —",
   "desc": "— BNC plug, straight, 75 Ω, crimp termination",
   "backshell": [
    "N/A"
   ],
   "mates": [],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing (supplied)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre pin"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "plug",
   "cables": [
    "RG-179"
   ],
   "links": [],
   "notes": [
    "From your item list: “BNC Coaxial Connector, Straight Plug, Crimp, 75 Ohm, RG179”.",
    "75 Ω part – does not mate correctly with 50 Ω systems at high frequency."
   ],
   "verify": [
    "Details from your item list description – confirm cable group / dimensions on the datasheet."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [
     "RG-179"
    ],
    "noCable": false,
    "impedance": 75
   }
  },
  {
   "pn": "4160",
   "family": "bnc",
   "short": "BNC panel jack · 50 Ω · Pomona",
   "desc": "Pomona BNC panel jack, straight, 50 Ω, solder cup termination",
   "backshell": [
    "N/A"
   ],
   "mates": [],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing (supplied) – shows a plug",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "panel jack",
   "cables": null,
   "links": [],
   "notes": [
    "From your item list: “4160 – BNC Connector Jack, Female Socket 50 Ohms Panel Mount Solder Cup from Pomona Electronics”."
   ],
   "verify": [
    "Details from your item list description – confirm cable group / dimensions on the datasheet."
   ],
   "search": {
    "mount": [
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [],
    "noCable": true,
    "impedance": 50
   }
  },
  {
   "pn": "0731315003",
   "family": "bnc",
   "short": "BNC panel jack · 50 Ω · Molex",
   "desc": "Molex BNC panel jack, straight, 50 Ω, through-hole solder termination",
   "backshell": [
    "N/A"
   ],
   "mates": [],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing (supplied) – shows a plug",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "panel jack",
   "cables": null,
   "links": [],
   "notes": [
    "From your item list: “0731315003 – BNC Connector Jack, Female Socket 50 Ohms Panel Mount, Through Hole Solder from Molex”."
   ],
   "verify": [
    "Details from your item list description – confirm cable group / dimensions on the datasheet."
   ],
   "search": {
    "mount": [
     "panel",
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [],
    "noCable": true,
    "impedance": 50
   }
  },
  {
   "pn": "031-10-RFXG1",
   "family": "bnc",
   "short": "BNC panel jack · 50 Ω · Amphenol RF",
   "desc": "Amphenol RF BNC panel jack, straight, 50 Ω, solder cup termination",
   "backshell": [
    "N/A"
   ],
   "mates": [],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing (supplied) – shows a plug",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "panel jack",
   "cables": null,
   "links": [],
   "notes": [
    "From your item list: “BNC Connector Jack, Female Socket 50 Ohms Panel Mount, Solder Cup”."
   ],
   "verify": [
    "Details from your item list description – confirm cable group / dimensions on the datasheet."
   ],
   "search": {
    "mount": [
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [],
    "noCable": true,
    "impedance": 50
   }
  },
  {
   "pn": "31-10-75RFXG2",
   "family": "bnc",
   "short": "BNC panel jack · 75 Ω · Amphenol RF",
   "desc": "Amphenol RF BNC panel jack, straight, 75 Ω, solder cup termination",
   "backshell": [
    "N/A"
   ],
   "mates": [],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing (supplied) – shows a plug",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "panel jack",
   "cables": null,
   "links": [],
   "notes": [
    "From your item list: “BNC panel connector”.",
    "75 Ω part – does not mate correctly with 50 Ω systems at high frequency."
   ],
   "verify": [
    "Details from your item list description – confirm cable group / dimensions on the datasheet."
   ],
   "search": {
    "mount": [
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [],
    "noCable": true,
    "impedance": 75
   }
  },
  {
   "pn": "031-5329-52RFX",
   "family": "bnc",
   "short": "BNC PCB jack · 50 Ω · Amphenol RF",
   "desc": "Amphenol RF BNC PCB jack, straight, 50 Ω, through-hole solder termination",
   "backshell": [
    "N/A"
   ],
   "mates": [],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing (supplied) – shows a plug",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied"
   },
   "angle": "Straight",
   "pcb": true,
   "mountText": "PCB jack",
   "cables": null,
   "links": [],
   "notes": [
    "From your item list: “031-5329-52RFX – BNC Connector Jack, Female Socket 50 Ohms Through Hole Solder from Amphenol RF”."
   ],
   "verify": [
    "Details from your item list description – confirm cable group / dimensions on the datasheet."
   ],
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [],
    "noCable": true,
    "impedance": 50
   }
  },
  {
   "pn": "031-5431-1010",
   "family": "bnc",
   "short": "BNC PCB jack, right angle · 50 Ω · Amphenol RF",
   "desc": "Amphenol RF BNC PCB jack, right angle, 50 Ω, through-hole solder termination",
   "backshell": [
    "N/A"
   ],
   "mates": [],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing (supplied) – shows a plug",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied"
   },
   "angle": "90° (right angle)",
   "pcb": true,
   "mountText": "PCB jack, right angle",
   "cables": null,
   "links": [],
   "notes": [
    "From your item list: “CONN BNC JACK R/A 50 OHM PCB”."
   ],
   "verify": [
    "Details from your item list description – confirm cable group / dimensions on the datasheet."
   ],
   "search": {
    "mount": [
     "pcb"
    ],
    "gender": "female",
    "angles": [
     "90"
    ],
    "withPins": true,
    "cables": [],
    "noCable": true,
    "impedance": 50
   }
  },
  {
   "pn": "CONBNC004",
   "family": "bnc",
   "short": "BNC jack · 50 Ω · —",
   "desc": "— BNC jack, straight, 50 Ω, solder termination",
   "backshell": [
    "N/A"
   ],
   "mates": [],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing (supplied) – shows a plug",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "jack",
   "cables": null,
   "links": [],
   "notes": [
    "From your item list: “BNC CONNECTOR JACK, FEMALE SOCKE”."
   ],
   "verify": [
    "Details from your item list description – confirm cable group / dimensions on the datasheet."
   ],
   "search": {
    "mount": [
     "panel"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [],
    "noCable": true,
    "impedance": 50
   }
  },
  {
   "pn": "031-4803-75",
   "family": "bnc",
   "short": "BNC bulkhead jack · 75 Ω · Amphenol RF",
   "desc": "Amphenol RF BNC bulkhead jack, straight, 75 Ω, solder cup termination",
   "backshell": [
    "N/A"
   ],
   "mates": [],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing (supplied) – shows a plug",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "bulkhead jack",
   "cables": null,
   "links": [],
   "notes": [
    "From your item list: “BNC straight jack, bulkhead, solder cup, 75 ohm”.",
    "75 Ω part – does not mate correctly with 50 Ω systems at high frequency."
   ],
   "verify": [
    "Details from your item list description – confirm cable group / dimensions on the datasheet."
   ],
   "search": {
    "mount": [
     "bulkhead"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [],
    "noCable": true,
    "impedance": 75
   }
  },
  {
   "pn": "NBB75FI",
   "family": "bnc",
   "short": "BNC feedthrough receptacle · 75 Ω · Neutrik",
   "desc": "Neutrik BNC feedthrough receptacle, straight, 75 Ω, feedthrough termination",
   "backshell": [
    "N/A"
   ],
   "mates": [],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing (supplied) – shows a plug",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre socket"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "feedthrough receptacle",
   "cables": null,
   "links": [],
   "notes": [
    "From your item list: “RECEPTACLE - BNC FEEDTHROUGH - I”.",
    "75 Ω part – does not mate correctly with 50 Ω systems at high frequency."
   ],
   "verify": [
    "Details from your item list description – confirm cable group / dimensions on the datasheet."
   ],
   "search": {
    "mount": [
     "bulkhead"
    ],
    "gender": "female",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [],
    "noCable": true,
    "impedance": 75
   }
  },
  {
   "pn": "122117",
   "family": "tnc",
   "short": "TNC plug · 75 Ω · Amphenol RF",
   "desc": "Amphenol RF TNC plug, straight, 75 Ω, crimp termination",
   "backshell": [
    "N/A"
   ],
   "mates": [],
   "color": {
    "name": "See datasheet"
   },
   "side": "side_bnc.png",
   "sideCap": "BNC drawing (supplied)",
   "front": "front_coax.png",
   "frontCap": "Coax mating face (supplied drawing)",
   "shell": "N/A",
   "pins": [
    {
     "pn": "Centre contact included",
     "note": "centre pin"
    }
   ],
   "withPins": {
    "v": true,
    "t": "Yes – centre contact supplied"
   },
   "angle": "Straight",
   "pcb": false,
   "mountText": "plug",
   "cables": null,
   "links": [],
   "notes": [
    "From your item list: “CONN TNC PLUG STR 75 OHM CRIMP”.",
    "75 Ω part – does not mate correctly with 50 Ω systems at high frequency."
   ],
   "verify": [
    "Details from your item list description – confirm cable group / dimensions on the datasheet."
   ],
   "search": {
    "mount": [
     "cable"
    ],
    "gender": "male",
    "angles": [
     "straight"
    ],
    "withPins": true,
    "cables": [],
    "noCable": false,
    "impedance": 75
   }
  }
 ],
 "accessories": [
  {
   "pn": "M39029/64-369",
   "family": "acc",
   "accType": "Contact",
   "desc": "D-sub crimp pin contact, size 20, 20–24 AWG",
   "fits": "M24308/4 standard D-sub plugs",
   "mate": "M39029/63-368",
   "links": [],
   "verify": []
  },
  {
   "pn": "M39029/63-368",
   "family": "acc",
   "accType": "Contact",
   "desc": "D-sub crimp socket contact, size 20, 20–24 AWG",
   "fits": "M24308/2 standard D-sub receptacles",
   "mate": "M39029/64-369",
   "links": [],
   "verify": []
  },
  {
   "pn": "M39029/58-360",
   "family": "acc",
   "accType": "Contact",
   "desc": "MIL-DTL-38999 crimp pin contact, size 22D, 22–28 AWG",
   "fits": "Any D38999 Series III P insert cavity of size 22D",
   "mate": "M39029/56-348",
   "links": [
    [
     "38999 catalog (PDF)",
     "https://www.amphenol-aerospace.com/resources/literature/download/38999-catalog"
    ]
   ],
   "verify": []
  },
  {
   "pn": "M39029/57-354",
   "family": "acc",
   "accType": "Contact",
   "desc": "D-sub crimp socket contact, size 22, 22–28 AWG",
   "fits": "M24308/2 high-density receptacles",
   "mate": "M39029/58-360",
   "links": [],
   "verify": []
  },
  {
   "pn": "M39029/58-365",
   "family": "acc",
   "accType": "Contact",
   "desc": "MIL-DTL-38999 crimp pin contact, size 12, 12–14 AWG",
   "fits": "Any D38999 Series III P insert cavity of size 12",
   "mate": "M39029/56-353",
   "links": [
    [
     "38999 catalog (PDF)",
     "https://www.amphenol-aerospace.com/resources/literature/download/38999-catalog"
    ]
   ],
   "verify": []
  },
  {
   "pn": "M39029/56-353",
   "family": "acc",
   "accType": "Contact",
   "desc": "MIL-DTL-38999 crimp socket contact, size 12, 12–14 AWG",
   "fits": "Any D38999 Series III S insert cavity of size 12",
   "mate": "M39029/58-365",
   "links": [
    [
     "38999 catalog (PDF)",
     "https://www.amphenol-aerospace.com/resources/literature/download/38999-catalog"
    ]
   ],
   "verify": []
  },
  {
   "pn": "M39029/58-364",
   "family": "acc",
   "accType": "Contact",
   "desc": "MIL-DTL-38999 crimp pin contact, size 16, 16–20 AWG",
   "fits": "Any D38999 Series III P insert cavity of size 16",
   "mate": "M39029/56-352",
   "links": [
    [
     "38999 catalog (PDF)",
     "https://www.amphenol-aerospace.com/resources/literature/download/38999-catalog"
    ]
   ],
   "verify": []
  },
  {
   "pn": "M39029/56-352",
   "family": "acc",
   "accType": "Contact",
   "desc": "MIL-DTL-38999 crimp socket contact, size 16, 16–20 AWG",
   "fits": "Any D38999 Series III S insert cavity of size 16",
   "mate": "M39029/58-364",
   "links": [
    [
     "38999 catalog (PDF)",
     "https://www.amphenol-aerospace.com/resources/literature/download/38999-catalog"
    ]
   ],
   "verify": []
  },
  {
   "pn": "M39029/58-363",
   "family": "acc",
   "accType": "Contact",
   "desc": "MIL-DTL-38999 crimp pin contact, size 20, 20–24 AWG",
   "fits": "Any D38999 Series III P insert cavity of size 20",
   "mate": "M39029/56-351",
   "links": [
    [
     "38999 catalog (PDF)",
     "https://www.amphenol-aerospace.com/resources/literature/download/38999-catalog"
    ]
   ],
   "verify": []
  },
  {
   "pn": "M39029/56-351",
   "family": "acc",
   "accType": "Contact",
   "desc": "MIL-DTL-38999 crimp socket contact, size 20, 20–24 AWG",
   "fits": "Any D38999 Series III S insert cavity of size 20",
   "mate": "M39029/58-363",
   "links": [
    [
     "38999 catalog (PDF)",
     "https://www.amphenol-aerospace.com/resources/literature/download/38999-catalog"
    ]
   ],
   "verify": []
  },
  {
   "pn": "M39029/56-348",
   "family": "acc",
   "accType": "Contact",
   "desc": "MIL-DTL-38999 crimp socket contact, size 22D, 22–28 AWG",
   "fits": "Any D38999 Series III S insert cavity of size 22D",
   "mate": "M39029/58-360",
   "links": [
    [
     "38999 catalog (PDF)",
     "https://www.amphenol-aerospace.com/resources/literature/download/38999-catalog"
    ]
   ],
   "verify": []
  },
  {
   "pn": "165X02609X",
   "family": "acc",
   "accType": "Backshell",
   "desc": "Amphenol CONEC 165X D-sub backshell, shell E",
   "fits": "DE-9 (M24308/4-1F, M24308/2-1F); HD-15 (M24308/4-11F, M24308/2-11F)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "165X02619X",
   "family": "acc",
   "accType": "Backshell",
   "desc": "Amphenol CONEC 165X D-sub backshell, shell A",
   "fits": "DA-15 (M24308/4-2F, M24308/2-2F); HD-26 (M24308/4-12F, M24308/2-12F)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "165X02629X",
   "family": "acc",
   "accType": "Backshell",
   "desc": "Amphenol CONEC 165X D-sub backshell, shell B",
   "fits": "DB-25 (M24308/4-3F, M24308/2-3F); HD-44 (M24308/4-13F, M24308/2-13F)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "165X02639X",
   "family": "acc",
   "accType": "Backshell",
   "desc": "Amphenol CONEC 165X D-sub backshell, shell C",
   "fits": "DC-37 (M24308/4-4F, M24308/2-4F); HD-62 (M24308/4-14F, M24308/2-14F)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "165X17449X",
   "family": "acc",
   "accType": "Backshell",
   "desc": "Amphenol CONEC 165X D-sub backshell, shell D",
   "fits": "DD-50 (M24308/4-5F, M24308/2-5F); HD-78 (M24308/4-15F, M24308/2-15F)",
   "mate": null,
   "links": [],
   "verify": [
    "Not found online – confirm with Amphenol CONEC."
   ]
  },
  {
   "pn": "M85049/38S9W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 9, finish W",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 9 (A)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S9W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 9, finish W",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 9 (A)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S9N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 9, finish N",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 9 (A)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S9N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 9, finish N",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 9 (A)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S9Z",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 9, finish Z",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 9 (A)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S9Z",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 9, finish Z",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 9 (A)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S11W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 11, finish W",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 11 (B)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S11W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 11, finish W",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 11 (B)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S11N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 11, finish N",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 11 (B)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S11N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 11, finish N",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 11 (B)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S11Z",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 11, finish Z",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 11 (B)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S11Z",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 11, finish Z",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 11 (B)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S13W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 13, finish W",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 13 (C)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S13W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 13, finish W",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 13 (C)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S13N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 13, finish N",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 13 (C)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S13N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 13, finish N",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 13 (C)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S13Z",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 13, finish Z",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 13 (C)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S13Z",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 13, finish Z",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 13 (C)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S15W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 15, finish W",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 15 (D)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S15W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 15, finish W",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 15 (D)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S15N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 15, finish N",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 15 (D)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S15N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 15, finish N",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 15 (D)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S15Z",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 15, finish Z",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 15 (D)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S15Z",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 15, finish Z",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 15 (D)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S17W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 17, finish W",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 17 (E)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S17W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 17, finish W",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 17 (E)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S17N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 17, finish N",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 17 (E)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S17N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 17, finish N",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 17 (E)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S17Z",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 17, finish Z",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 17 (E)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S17Z",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 17, finish Z",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 17 (E)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S19W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 19, finish W",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 19 (F)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S19W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 19, finish W",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 19 (F)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S19N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 19, finish N",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 19 (F)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S19N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 19, finish N",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 19 (F)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S19Z",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 19, finish Z",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 19 (F)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S19Z",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 19, finish Z",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 19 (F)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S21W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 21, finish W",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 21 (G)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S21W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 21, finish W",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 21 (G)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S21N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 21, finish N",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 21 (G)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S21N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 21, finish N",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 21 (G)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S21Z",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 21, finish Z",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 21 (G)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S21Z",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 21, finish Z",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 21 (G)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S23W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 23, finish W",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 23 (H)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S23W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 23, finish W",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 23 (H)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S23N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 23, finish N",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 23 (H)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S23N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 23, finish N",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 23 (H)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S23Z",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 23, finish Z",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 23 (H)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S23Z",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 23, finish Z",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 23 (H)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S25W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 25, finish W",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 25 (J)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S25W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 25, finish W",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 25 (J)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S25N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 25, finish N",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 25 (J)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S25N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 25, finish N",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 25 (J)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38S25Z",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, straight, shell 25, finish Z",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 25 (J)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/39S25Z",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-38999 Series III strain-relief backshell, 90°, shell 25, finish Z",
   "fits": "D38999/26 plugs and /20, /24 receptacles in shell 25 (J)",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "D38999/33W9N",
   "family": "acc",
   "accType": "Protective cover",
   "desc": "MIL-DTL-38999 Series III receptacle protective cover, shell 9, olive drab cadmium (W), normal key, with chain",
   "fits": "D38999/20 and /24 receptacles, shell 9",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "D38999/33W13N",
   "family": "acc",
   "accType": "Protective cover",
   "desc": "MIL-DTL-38999 Series III receptacle protective cover, shell 13, olive drab cadmium (W), normal key, with chain",
   "fits": "D38999/20 and /24 receptacles, shell 13",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "D38999/33W15N",
   "family": "acc",
   "accType": "Protective cover",
   "desc": "MIL-DTL-38999 Series III receptacle protective cover, shell 15, olive drab cadmium (W), normal key, with chain",
   "fits": "D38999/20 and /24 receptacles, shell 15",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "D38999/33W21N",
   "family": "acc",
   "accType": "Protective cover",
   "desc": "MIL-DTL-38999 Series III receptacle protective cover, shell 21, olive drab cadmium (W), normal key, with chain",
   "fits": "D38999/20 and /24 receptacles, shell 21",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "D38999/33W23N",
   "family": "acc",
   "accType": "Protective cover",
   "desc": "MIL-DTL-38999 Series III receptacle protective cover, shell 23, olive drab cadmium (W), normal key, with chain",
   "fits": "D38999/20 and /24 receptacles, shell 23",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38-13W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/38 straight strain-relief cable-clamp backshell, shell 13, olive drab cadmium (W) – non-self-locking version of M85049/38S13W",
   "fits": "D38999 Series III, shell 13",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38-21W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/38 straight strain-relief cable-clamp backshell, shell 21, olive drab cadmium (W) – non-self-locking version of M85049/38S21W",
   "fits": "D38999 Series III, shell 21",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38-25W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/38 straight strain-relief cable-clamp backshell, shell 25, olive drab cadmium (W) – non-self-locking version of M85049/38S25W",
   "fits": "D38999 Series III, shell 25",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38-17W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/38 straight strain-relief cable-clamp backshell, shell 17, olive drab cadmium (W) – non-self-locking version of M85049/38S17W",
   "fits": "D38999 Series III, shell 17",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38-19W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/38 straight strain-relief cable-clamp backshell, shell 19, olive drab cadmium (W) – non-self-locking version of M85049/38S19W",
   "fits": "D38999 Series III, shell 19",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38-23W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/38 straight strain-relief cable-clamp backshell, shell 23, olive drab cadmium (W) – non-self-locking version of M85049/38S23W",
   "fits": "D38999 Series III, shell 23",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38-15W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/38 straight strain-relief cable-clamp backshell, shell 15, olive drab cadmium (W) – non-self-locking version of M85049/38S15W",
   "fits": "D38999 Series III, shell 15",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38-11A",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/38 straight strain-relief backshell, shell 11, black anodized (A)",
   "fits": "D38999 Series III, shell 11",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/38-17N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/38 straight strain-relief backshell, shell 17, electroless nickel (N)",
   "fits": "D38999 Series III, shell 17",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/69-11W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/69 straight heat-shrink boot adapter (environmental), shell 11, olive drab cadmium",
   "fits": "D38999 Series III, shell 11",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/69-13W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/69 straight heat-shrink boot adapter (environmental), shell 13, olive drab cadmium",
   "fits": "D38999 Series III, shell 13",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/69-15W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/69 straight heat-shrink boot adapter (environmental), shell 15, olive drab cadmium",
   "fits": "D38999 Series III, shell 15",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/69-17W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/69 straight heat-shrink boot adapter (environmental), shell 17, olive drab cadmium",
   "fits": "D38999 Series III, shell 17",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/69-19W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/69 straight heat-shrink boot adapter (environmental), shell 19, olive drab cadmium",
   "fits": "D38999 Series III, shell 19",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/69-21W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/69 straight heat-shrink boot adapter (environmental), shell 21, olive drab cadmium",
   "fits": "D38999 Series III, shell 21",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/69-25W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/69 straight heat-shrink boot adapter (environmental), shell 25, olive drab cadmium",
   "fits": "D38999 Series III, shell 25",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/69-17N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/69 straight heat-shrink boot adapter (environmental), shell 17, electroless nickel",
   "fits": "D38999 Series III, shell 17",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/69-25N",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/69 straight heat-shrink boot adapter (environmental), shell 25, electroless nickel",
   "fits": "D38999 Series III, shell 25",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M85049/88-11W03",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/88 EMI/RFI straight backshell, shell 11, olive drab cadmium (banding, 03 entry)",
   "fits": "D38999 Series III, shell 11",
   "mate": null,
   "links": [],
   "verify": [
    "Your item list describes /88 as fiber optic – check the slash sheet."
   ]
  },
  {
   "pn": "M85049/88-13W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/88 EMI/RFI straight backshell, shell 13, olive drab cadmium",
   "fits": "D38999 Series III, shell 13",
   "mate": null,
   "links": [],
   "verify": [
    "Your item list describes /88 as fiber optic – check the slash sheet."
   ]
  },
  {
   "pn": "M85049/88-17W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/88 EMI/RFI straight backshell, shell 17, olive drab cadmium",
   "fits": "D38999 Series III, shell 17",
   "mate": null,
   "links": [],
   "verify": [
    "Your item list describes /88 as fiber optic – check the slash sheet."
   ]
  },
  {
   "pn": "M85049/88-21W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/88 EMI/RFI straight backshell, shell 21, olive drab cadmium",
   "fits": "D38999 Series III, shell 21",
   "mate": null,
   "links": [],
   "verify": [
    "Your item list describes /88 as fiber optic – check the slash sheet."
   ]
  },
  {
   "pn": "M85049/14S9W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/14 straight non-environmental backshell / locking grommet nut, shell 9, olive drab cadmium",
   "fits": "MIL-DTL-38999 shell 9",
   "mate": null,
   "links": [],
   "verify": [
    "Check that /14 suits Series III on the slash sheet."
   ]
  },
  {
   "pn": "M85049/14S11W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/14 straight non-environmental backshell / locking grommet nut, shell 11, olive drab cadmium",
   "fits": "MIL-DTL-38999 shell 11",
   "mate": null,
   "links": [],
   "verify": [
    "Check that /14 suits Series III on the slash sheet."
   ]
  },
  {
   "pn": "M85049/14S13W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/14 straight non-environmental backshell / locking grommet nut, shell 13, olive drab cadmium",
   "fits": "MIL-DTL-38999 shell 13",
   "mate": null,
   "links": [],
   "verify": [
    "Check that /14 suits Series III on the slash sheet."
   ]
  },
  {
   "pn": "M85049/14S15W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/14 straight non-environmental backshell / locking grommet nut, shell 15, olive drab cadmium",
   "fits": "MIL-DTL-38999 shell 15",
   "mate": null,
   "links": [],
   "verify": [
    "Check that /14 suits Series III on the slash sheet."
   ]
  },
  {
   "pn": "M85049/14S17W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/14 straight non-environmental backshell / locking grommet nut, shell 17, olive drab cadmium",
   "fits": "MIL-DTL-38999 shell 17",
   "mate": null,
   "links": [],
   "verify": [
    "Check that /14 suits Series III on the slash sheet."
   ]
  },
  {
   "pn": "M85049/14S19W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/14 straight non-environmental backshell / locking grommet nut, shell 19, olive drab cadmium",
   "fits": "MIL-DTL-38999 shell 19",
   "mate": null,
   "links": [],
   "verify": [
    "Check that /14 suits Series III on the slash sheet."
   ]
  },
  {
   "pn": "M85049/14S21W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/14 straight non-environmental backshell / locking grommet nut, shell 21, olive drab cadmium",
   "fits": "MIL-DTL-38999 shell 21",
   "mate": null,
   "links": [],
   "verify": [
    "Check that /14 suits Series III on the slash sheet."
   ]
  },
  {
   "pn": "M85049/14S23W",
   "family": "acc",
   "accType": "Backshell",
   "desc": "MIL-DTL-85049/14 straight non-environmental backshell / locking grommet nut, shell 23, olive drab cadmium",
   "fits": "MIL-DTL-38999 shell 23",
   "mate": null,
   "links": [],
   "verify": [
    "Check that /14 suits Series III on the slash sheet."
   ]
  },
  {
   "pn": "MS27488-16-2",
   "family": "acc",
   "accType": "Sealing plug",
   "desc": "MS27488 sealing plug (dummy contact), size 16",
   "fits": "Unused size-16 cavities of MIL-DTL-38999 connectors",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "M39029/90-529",
   "family": "acc",
   "accType": "Contact",
   "desc": "MIL-DTL-38999 size 8 twinax pin contact",
   "fits": "Size 8 twinax cavities (inserts 19-18, 25-7)",
   "mate": "M39029/91-530",
   "links": [],
   "verify": []
  },
  {
   "pn": "M39029/91-530",
   "family": "acc",
   "accType": "Contact",
   "desc": "MIL-DTL-38999 size 8 twinax socket contact",
   "fits": "Size 8 twinax cavities (inserts 19-18, 25-7)",
   "mate": "M39029/90-529",
   "links": [],
   "verify": []
  },
  {
   "pn": "M39029/28-211",
   "family": "acc",
   "accType": "Contact",
   "desc": "Crimp pin contact (MIL-DTL-39029/28)",
   "fits": "MIL-DTL-38999 coax / special cavities",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description – confirm on the slash sheet."
   ]
  },
  {
   "pn": "M39029/75-416",
   "family": "acc",
   "accType": "Contact",
   "desc": "Size 12 coax pin contact (38999)",
   "fits": "MIL-DTL-38999 coax / special cavities",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description – confirm on the slash sheet."
   ]
  },
  {
   "pn": "M39029/76-424",
   "family": "acc",
   "accType": "Contact",
   "desc": "Size 16 coax pin contact (38999)",
   "fits": "MIL-DTL-38999 coax / special cavities",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description – confirm on the slash sheet."
   ]
  },
  {
   "pn": "M39029/77-428",
   "family": "acc",
   "accType": "Contact",
   "desc": "Coax contact (MIL-DTL-39029/77)",
   "fits": "MIL-DTL-38999 coax / special cavities",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description – confirm on the slash sheet."
   ]
  },
  {
   "pn": "190734",
   "family": "acc",
   "accType": "Contact",
   "desc": "Size 16 coax socket contact, M39029-style (digital video)",
   "fits": "MIL-DTL-38999 coax / special cavities",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description – confirm on the slash sheet."
   ]
  },
  {
   "pn": "190735",
   "family": "acc",
   "accType": "Contact",
   "desc": "Size 16 coax pin contact, M39029-style (digital video)",
   "fits": "MIL-DTL-38999 coax / special cavities",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description – confirm on the slash sheet."
   ]
  },
  {
   "pn": "161A18299X",
   "family": "acc",
   "accType": "Contact",
   "desc": "Amphenol CONEC D-sub crimp pin contact, 20–24 AWG",
   "fits": "CONEC 163X standard-density plug housings",
   "mate": "",
   "links": [],
   "verify": []
  },
  {
   "pn": "1727040150",
   "family": "acc",
   "accType": "Contact",
   "desc": "D-sub crimp socket contact, 16–20 AWG",
   "fits": "D-sub crimp receptacles (check series)",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description."
   ]
  },
  {
   "pn": "M24308/26-2F",
   "family": "acc",
   "accType": "Hardware",
   "desc": "MIL-DTL-24308/26 female screw-lock assembly, cadmium (F)",
   "fits": "M24308 D-sub connectors",
   "mate": null,
   "links": [],
   "verify": []
  },
  {
   "pn": "5-1478762-1",
   "family": "acc",
   "accType": "Backshell",
   "desc": "TE D-sub Two-piece metal backshell, 180°, shielded, 9 positions",
   "fits": "D-sub shell E (DE-9 / HD-15)",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description."
   ]
  },
  {
   "pn": "1-1478762-5",
   "family": "acc",
   "accType": "Backshell",
   "desc": "TE D-sub Two-piece metal backshell, 180°, shielded, 15 positions",
   "fits": "D-sub shell A (DA-15 / HD-26)",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description."
   ]
  },
  {
   "pn": "2-1478762-5",
   "family": "acc",
   "accType": "Backshell",
   "desc": "TE D-sub Two-piece metal backshell, 180°, shielded, 25 positions",
   "fits": "D-sub shell B (DB-25 / HD-44)",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description."
   ]
  },
  {
   "pn": "1731110365",
   "family": "acc",
   "accType": "Backshell",
   "desc": "FCT (Molex) D-sub Two-piece metal backshell, 180°, shielded, silver, 9 positions",
   "fits": "D-sub shell E (DE-9 / HD-15)",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description."
   ]
  },
  {
   "pn": "1731110083",
   "family": "acc",
   "accType": "Backshell",
   "desc": "FCT (Molex) D-sub Metal backshell, 180°, shielded, 25 positions",
   "fits": "D-sub shell B (DB-25 / HD-44)",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description."
   ]
  },
  {
   "pn": "1731110089",
   "family": "acc",
   "accType": "Backshell",
   "desc": "FCT (Molex) D-sub Metal hood, 180°, 37 positions",
   "fits": "D-sub shell C (DC-37 / HD-62)",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description."
   ]
  },
  {
   "pn": "1731110028",
   "family": "acc",
   "accType": "Backshell",
   "desc": "FCT (Molex) D-sub Metal backshell, 180°, black, 50 positions",
   "fits": "D-sub shell D (DD-50 / HD-78)",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description."
   ]
  },
  {
   "pn": "173111-0086",
   "family": "acc",
   "accType": "Backshell",
   "desc": "FCT (Molex) D-sub Metal hood, 180°, zinc die-cast (shell 1: DE-9 / HD-15), 9 positions",
   "fits": "D-sub shell E (DE-9 / HD-15)",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description."
   ]
  },
  {
   "pn": "173111-0087",
   "family": "acc",
   "accType": "Backshell",
   "desc": "FCT (Molex) D-sub Metal hood, 180°, zinc die-cast (shell 2: DA-15), 15 positions",
   "fits": "D-sub shell A (DA-15 / HD-26)",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description."
   ]
  },
  {
   "pn": "173111-0089",
   "family": "acc",
   "accType": "Backshell",
   "desc": "FCT (Molex) D-sub Metal hood, 180°, zinc die-cast (shell 4: DC-37), 37 positions",
   "fits": "D-sub shell C (DC-37 / HD-62)",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description."
   ]
  },
  {
   "pn": "979-037-020R121",
   "family": "acc",
   "accType": "Backshell",
   "desc": "NorComp D-sub Metal backshell, 180°, shielded, 37 positions",
   "fits": "D-sub shell C (DC-37 / HD-62)",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description."
   ]
  },
  {
   "pn": "983-025-010R031",
   "family": "acc",
   "accType": "Backshell",
   "desc": "NorComp D-sub Plastic backshell, 180°, grey, 25 positions",
   "fits": "D-sub shell B (DB-25 / HD-44)",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description."
   ]
  },
  {
   "pn": "165X17419X",
   "family": "acc",
   "accType": "Backshell",
   "desc": "Amphenol CONEC D-sub Backshell, 180°, shielded, 15 positions",
   "fits": "D-sub shell A (DA-15 / HD-26)",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description."
   ]
  },
  {
   "pn": "165X10909X",
   "family": "acc",
   "accType": "Backshell",
   "desc": "Amphenol CONEC D-sub Plastic hood",
   "fits": "D-sub (see datasheet)",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description."
   ]
  },
  {
   "pn": "D104000GE0/AA",
   "family": "acc",
   "accType": "Backshell",
   "desc": "ITT Cannon D-sub Backshell for size-6 (104-way HD) D-sub, 104 positions",
   "fits": "D-sub shell 6 (104-way)",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description."
   ]
  },
  {
   "pn": "D104000Y00",
   "family": "acc",
   "accType": "Backshell",
   "desc": "ITT Cannon D-sub Two-piece hood, 104-way, 45° exit, black, unshielded, 104 positions",
   "fits": "D-sub shell 6 (104-way)",
   "mate": null,
   "links": [],
   "verify": [
    "From your item list description."
   ]
  }
 ],
 "aliases": [
  {
   "pn": "181-015-213R-531",
   "to": "181-015-213R531",
   "note": "Same part as 181-015-213R531 (written differently in your item list)."
  },
  {
   "pn": "181-015-113R-531",
   "to": "181-015-113R531",
   "note": "Same part as 181-015-113R531 (written differently in your item list)."
  },
  {
   "pn": "DD62S100E0/AA",
   "to": "DD62S100E0",
   "note": "Same part as DD62S100E0 (written differently in your item list)."
  },
  {
   "pn": "RD25M100E0/AA",
   "to": "RD25M100E0",
   "note": "Same part as RD25M100E0 (written differently in your item list)."
  },
  {
   "pn": "RD25S100E0/AA",
   "to": "RD25S100E0",
   "note": "Same part as RD25S100E0 (written differently in your item list)."
  },
  {
   "pn": "DD104M100E0/AA",
   "to": "DD104M100E0",
   "note": "Same part as DD104M100E0 (written differently in your item list)."
  },
  {
   "pn": "M24308_02-01Z",
   "to": "M24308/2-1Z",
   "note": "Written as M24308_02-01Z in your item list."
  },
  {
   "pn": "M24308/2-1",
   "to": "M24308/2-1F",
   "note": "Your item list has no finish letter (M24308/2-1) – shown as the F (cadmium) part; confirm the finish."
  },
  {
   "pn": "M24308/4-2",
   "to": "M24308/4-2F",
   "note": "Your item list has no finish letter (M24308/4-2) – shown as the F (cadmium) part; confirm the finish."
  },
  {
   "pn": "31-10-RFXG1",
   "to": "031-10-RFXG1",
   "note": "Same part as 031-10-RFXG1."
  },
  {
   "pn": "D3899/24FE35SN",
   "to": "D38999/24FE35SN",
   "note": "Written as “D3899/24FE35SN” (missing 9) in your item list."
  },
  {
   "pn": "M85049/38S-25W",
   "to": "M85049/38S25W",
   "note": "Written as M85049/38S-25W in your item list."
  },
  {
   "pn": "M85049/38S-21W",
   "to": "M85049/38S21W",
   "note": "Written as M85049/38S-21W in your item list."
  },
  {
   "pn": "TVS06RF-17-35P",
   "to": "D38999/26FE35PN",
   "note": "Amphenol TVS06RF-17-35P (200 °C TVS series, electroless nickel) – MIL equivalent D38999/26FE35PN shown."
  },
  {
   "pn": "TVS07-RF17-35S",
   "to": "D38999/24FE35SN",
   "note": "Amphenol TVS07RF-17-35S (200 °C TVS series) – MIL equivalent D38999/24FE35SN shown."
  },
  {
   "pn": "TVS06RF17-35PLC",
   "to": "TV06RF-17-35P-LC",
   "note": "Amphenol TVS06RF-17-35P LC (200 °C TVS series, less contacts) – shown as the TV06 -LC equivalent; check the 200 °C class if it matters."
  },
  {
   "pn": "180-091NF08-13-4SA",
   "to": "D38999/24FC4SA",
   "note": "Glenair 180-091 jam-nut receptacle (nickel) – treated as the commercial equivalent of D38999/24FC4SA. Verify against the Glenair datasheet."
  },
  {
   "pn": "180-091NF08-13-4SN",
   "to": "D38999/24FC4SN",
   "note": "Glenair 180-091 jam-nut receptacle (nickel) – treated as the commercial equivalent of D38999/24FC4SN. Verify against the Glenair datasheet."
  },
  {
   "pn": "180-091NF08-15-5SN",
   "to": "D38999/24FD5SN",
   "note": "Glenair 180-091 jam-nut receptacle (nickel) – treated as the commercial equivalent of D38999/24FD5SN. Verify against the Glenair datasheet."
  },
  {
   "pn": "180-091NF08-17-8SA",
   "to": "D38999/24FE8SA",
   "note": "Glenair 180-091 jam-nut receptacle (nickel) – treated as the commercial equivalent of D38999/24FE8SA. Verify against the Glenair datasheet."
  },
  {
   "pn": "180-091NF08-17-8SN",
   "to": "D38999/24FE8SN",
   "note": "Glenair 180-091 jam-nut receptacle (nickel) – treated as the commercial equivalent of D38999/24FE8SN. Verify against the Glenair datasheet."
  },
  {
   "pn": "180-091NF08-17-8SB",
   "to": "D38999/24FE8SB",
   "note": "Glenair 180-091 jam-nut receptacle (nickel) – treated as the commercial equivalent of D38999/24FE8SB. Verify against the Glenair datasheet."
  },
  {
   "pn": "180-091NF08-17-8SC",
   "to": "D38999/24FE8SC",
   "note": "Glenair 180-091 jam-nut receptacle (nickel) – treated as the commercial equivalent of D38999/24FE8SC. Verify against the Glenair datasheet."
  },
  {
   "pn": "180-091NF08-21-16SN",
   "to": "D38999/24FG16SN",
   "note": "Glenair 180-091 jam-nut receptacle (nickel) – treated as the commercial equivalent of D38999/24FG16SN. Verify against the Glenair datasheet."
  },
  {
   "pn": "180-091NF08-21-16SA",
   "to": "D38999/24FG16SA",
   "note": "Glenair 180-091 jam-nut receptacle (nickel) – treated as the commercial equivalent of D38999/24FG16SA. Verify against the Glenair datasheet."
  },
  {
   "pn": "180-091NF08-21-16SB",
   "to": "D38999/24FG16SB",
   "note": "Glenair 180-091 jam-nut receptacle (nickel) – treated as the commercial equivalent of D38999/24FG16SB. Verify against the Glenair datasheet."
  },
  {
   "pn": "180-091NF08-21-16SC",
   "to": "D38999/24FG16SC",
   "note": "Glenair 180-091 jam-nut receptacle (nickel) – treated as the commercial equivalent of D38999/24FG16SC. Verify against the Glenair datasheet."
  },
  {
   "pn": "D38999-24WG35SN",
   "to": "D38999/24WG35SN",
   "note": "Written as D38999-24WG35SN in your item list."
  },
  {
   "pn": "D38999-24WE35SN",
   "to": "D38999/24WE35SN",
   "note": "Written as D38999-24WE35SN in your item list."
  },
  {
   "pn": "D38999-24WH35SN",
   "to": "D38999/24WH35SN",
   "note": "Written as D38999-24WH35SN in your item list."
  },
  {
   "pn": "D38999-24WD35SN",
   "to": "D38999/24WD35SN",
   "note": "Written as D38999-24WD35SN in your item list."
  },
  {
   "pn": "D38999-20WF32SN",
   "to": "D38999/20WF32SN",
   "note": "Written as D38999-20WF32SN in your item list."
  },
  {
   "pn": "D38999-20WH53PN",
   "to": "D38999/20WH53PN",
   "note": "Written as D38999-20WH53PN in your item list."
  },
  {
   "pn": "D38999-20WJ35SN",
   "to": "D38999/20WJ35SN",
   "note": "Written as D38999-20WJ35SN in your item list."
  },
  {
   "pn": "D38999-20WJ35PA",
   "to": "D38999/20WJ35PA",
   "note": "Written as D38999-20WJ35PA in your item list."
  },
  {
   "pn": "D38999-20WJ35SA",
   "to": "D38999/20WJ35SA",
   "note": "Written as D38999-20WJ35SA in your item list."
  },
  {
   "pn": "D38999-20WJ35PN",
   "to": "D38999/20WJ35PN",
   "note": "Written as D38999-20WJ35PN in your item list."
  },
  {
   "pn": "D38999_24WG11SC",
   "to": "D38999/24WG11SC",
   "note": "Written as D38999_24WG11SC in your item list."
  },
  {
   "pn": "D38999_24WG11SA",
   "to": "D38999/24WG11SA",
   "note": "Written as D38999_24WG11SA in your item list."
  },
  {
   "pn": "D38999_24WG11SB",
   "to": "D38999/24WG11SB",
   "note": "Written as D38999_24WG11SB in your item list."
  },
  {
   "pn": "D38999_24WE6SN",
   "to": "D38999/24WE6SN",
   "note": "Written as D38999_24WE6SN in your item list."
  },
  {
   "pn": "D38999_24WE6SC",
   "to": "D38999/24WE6SC",
   "note": "Written as D38999_24WE6SC in your item list."
  },
  {
   "pn": "D38999_24WE35SA",
   "to": "D38999/24WE35SA",
   "note": "Written as D38999_24WE35SA in your item list."
  },
  {
   "pn": "D38999_24WE35SB",
   "to": "D38999/24WE35SB",
   "note": "Written as D38999_24WE35SB in your item list."
  },
  {
   "pn": "D38999_24WE6SB",
   "to": "D38999/24WE6SB",
   "note": "Written as D38999_24WE6SB in your item list."
  },
  {
   "pn": "D38999_24WE6SA",
   "to": "D38999/24WE6SA",
   "note": "Written as D38999_24WE6SA in your item list."
  },
  {
   "pn": "D38999_24WD35SN",
   "to": "D38999/24WD35SN",
   "note": "Written as D38999_24WD35SN in your item list."
  },
  {
   "pn": "D38999_24WC35SA",
   "to": "D38999/24WC35SA",
   "note": "Written as D38999_24WC35SA in your item list."
  },
  {
   "pn": "D38999_24WC35SC",
   "to": "D38999/24WC35SC",
   "note": "Written as D38999_24WC35SC in your item list."
  },
  {
   "pn": "D38999_24WC35SB",
   "to": "D38999/24WC35SB",
   "note": "Written as D38999_24WC35SB in your item list."
  },
  {
   "pn": "D38999_24WC35SN",
   "to": "D38999/24WC35SN",
   "note": "Written as D38999_24WC35SN in your item list."
  },
  {
   "pn": "D38999-24WE26PN",
   "to": "D38999/24WE26PN",
   "note": "Written as D38999-24WE26PN in your item list."
  },
  {
   "pn": "D38999-24WB35SN",
   "to": "D38999/24WB35SN",
   "note": "Written as D38999-24WB35SN in your item list."
  },
  {
   "pn": "D38999-24WC35SN",
   "to": "D38999/24WC35SN",
   "note": "Written as D38999-24WC35SN in your item list."
  },
  {
   "pn": "D38999_24WD18SN",
   "to": "D38999/24WD18SN",
   "note": "Written as D38999_24WD18SN in your item list."
  },
  {
   "pn": "D38999_24FD35PN",
   "to": "D38999/24FD35PN",
   "note": "Written as D38999_24FD35PN in your item list."
  },
  {
   "pn": "D38999_24FJ37PN",
   "to": "D38999/24FJ37PN",
   "note": "Written as D38999_24FJ37PN in your item list."
  },
  {
   "pn": "D38999_24FJ19PN",
   "to": "D38999/24FJ19PN",
   "note": "Written as D38999_24FJ19PN in your item list."
  },
  {
   "pn": "D38999_24FC35PN",
   "to": "D38999/24FC35PN",
   "note": "Written as D38999_24FC35PN in your item list."
  },
  {
   "pn": "D38999_24FD35SN",
   "to": "D38999/24FD35SN",
   "note": "Written as D38999_24FD35SN in your item list."
  },
  {
   "pn": "D38999_24FH35SN",
   "to": "D38999/24FH35SN",
   "note": "Written as D38999_24FH35SN in your item list."
  },
  {
   "pn": "D38999- 24FJ61SN",
   "to": "D38999/24FJ61SN",
   "note": "Written as D38999- 24FJ61SN in your item list."
  },
  {
   "pn": "D38999- 24FD35SN",
   "to": "D38999/24FD35SN",
   "note": "Written as D38999- 24FD35SN in your item list."
  },
  {
   "pn": "D38999- 20WJ35PN",
   "to": "D38999/20WJ35PN",
   "note": "Written as D38999- 20WJ35PN in your item list."
  },
  {
   "pn": "D38999- 20WJ35SN",
   "to": "D38999/20WJ35SN",
   "note": "Written as D38999- 20WJ35SN in your item list."
  },
  {
   "pn": "D38999-24WD18PN",
   "to": "D38999/24WD18PN",
   "note": "Written as D38999-24WD18PN in your item list."
  }
 ],
 "index": [
  "D38999/20FB98PN",
  "D38999/20FC8PN",
  "D38999/20FD18SN",
  "D38999/20FG35SA",
  "D38999/20FG35SN",
  "D38999/20FH35SA",
  "D38999/20FH35SN",
  "D38999/20FJ35SA",
  "D38999/20FJ35SB",
  "D38999/20FJ35SN",
  "D38999/20WA35PN",
  "D38999/20WA35SA",
  "D38999/20WB35PA",
  "D38999/20WB35PN",
  "D38999/20WB5PN",
  "D38999/20WC35PA",
  "D38999/20WC35PN",
  "D38999/20WC35SA",
  "D38999/20WC35SN",
  "D38999/20WC8PN",
  "D38999/20WC98PN",
  "D38999/20WC98SN",
  "D38999/20WD35PN",
  "D38999/20WD35SN",
  "D38999/20WE26PN",
  "D38999/20WE26SN",
  "D38999/20WE35PN",
  "D38999/20WE35SN",
  "D38999/20WE6PA",
  "D38999/20WF32SN",
  "D38999/20WF35SA",
  "D38999/20WF35SN",
  "D38999/20WG11SN",
  "D38999/20WG16PA",
  "D38999/20WG35SA",
  "D38999/20WG35SN",
  "D38999/20WG41SN",
  "D38999/20WH21SN",
  "D38999/20WH35SA",
  "D38999/20WH35SN",
  "D38999/20WH53PN",
  "D38999/20WJ19PA",
  "D38999/20WJ19PN",
  "D38999/20WJ19SA",
  "D38999/20WJ19SN",
  "D38999/20WJ29PA",
  "D38999/20WJ29PN",
  "D38999/20WJ29SN",
  "D38999/20WJ35PA",
  "D38999/20WJ35PB",
  "D38999/20WJ35PN",
  "D38999/20WJ35SA",
  "D38999/20WJ35SB",
  "D38999/20WJ35SN",
  "D38999/20WJ43SN",
  "D38999/20WJ61SN",
  "D38999/24FA35PN",
  "D38999/24FC35PN",
  "D38999/24FC35SA",
  "D38999/24FC35SN",
  "D38999/24FC98PN",
  "D38999/24FC98SN",
  "D38999/24FD18PN",
  "D38999/24FD18SN",
  "D38999/24FD35PN",
  "D38999/24FD35SN",
  "D38999/24FE26SN",
  "D38999/24FE35PA",
  "D38999/24FE35PN",
  "D38999/24FE35SA",
  "D38999/24FE35SN",
  "D38999/24FF32SN",
  "D38999/24FF35PN",
  "D38999/24FF35SN",
  "D38999/24FG35PN",
  "D38999/24FG35SN",
  "D38999/24FH35SN",
  "D38999/24FJ19PN",
  "D38999/24FJ29SN",
  "D38999/24FJ35SA",
  "D38999/24FJ35SN",
  "D38999/24FJ37PN",
  "D38999/24FJ37SN",
  "D38999/24FJ61SN",
  "D38999/24WA35PN",
  "D38999/24WA35SN",
  "D38999/24WA98SN",
  "D38999/24WB2SN",
  "D38999/24WB35PN",
  "D38999/24WB35SN",
  "D38999/24WB98SN",
  "D38999/24WC35BN",
  "D38999/24WC35PN",
  "D38999/24WC35SA",
  "D38999/24WC35SB",
  "D38999/24WC35SC",
  "D38999/24WC35SN",
  "D38999/24WC4SN",
  "D38999/24WD18PN",
  "D38999/24WD18SN",
  "D38999/24WD19SA",
  "D38999/24WD19SN",
  "D38999/24WD35BN",
  "D38999/24WD35PN",
  "D38999/24WD35SN",
  "D38999/24WD5PN",
  "D38999/24WD5SN",
  "D38999/24WD97SN",
  "D38999/24WE26PN",
  "D38999/24WE35PN",
  "D38999/24WE35SA",
  "D38999/24WE35SB",
  "D38999/24WE35SN",
  "D38999/24WE6SA",
  "D38999/24WE6SB",
  "D38999/24WE6SC",
  "D38999/24WE6SN",
  "D38999/24WE8PN",
  "D38999/24WE8SA",
  "D38999/24WE8SN",
  "D38999/24WF11PN",
  "D38999/24WF11SA",
  "D38999/24WF11SN",
  "D38999/24WF18SA",
  "D38999/24WF18SN",
  "D38999/24WF32BA",
  "D38999/24WF32BN",
  "D38999/24WF32PA",
  "D38999/24WF32PB",
  "D38999/24WF32PN",
  "D38999/24WF32SN",
  "D38999/24WF35PN",
  "D38999/24WF35SN",
  "D38999/24WG11PN",
  "D38999/24WG11SA",
  "D38999/24WG11SB",
  "D38999/24WG11SC",
  "D38999/24WG11SN",
  "D38999/24WG16PN",
  "D38999/24WG16SN",
  "D38999/24WG35SA",
  "D38999/24WG35SN",
  "D38999/24WG41SA",
  "D38999/24WG41SN",
  "D38999/24WH21PN",
  "D38999/24WH21SN",
  "D38999/24WH35PN",
  "D38999/24WH35SN",
  "D38999/24WJ19SN",
  "D38999/24WJ35PN",
  "D38999/24WJ7PN",
  "D38999/24WJ7SN",
  "D38999/26FC35PA",
  "D38999/26FC35PN",
  "D38999/26FC35SN",
  "D38999/26FD18PN",
  "D38999/26FD18SN",
  "D38999/26FD35PN",
  "D38999/26FD35SN",
  "D38999/26FE26PN",
  "D38999/26FE26SN",
  "D38999/26FE35PN",
  "D38999/26FH35PN",
  "D38999/26FJ19SN",
  "D38999/26FJ35PA",
  "D38999/26FJ35PB",
  "D38999/26FJ35PN",
  "D38999/26FJ37PN",
  "D38999/26FJ37SN",
  "D38999/26FJ61PN",
  "D38999/26WA35PA",
  "D38999/26WA35PN",
  "D38999/26WA35SN",
  "D38999/26WA98PN",
  "D38999/26WA98SA",
  "D38999/26WB2PN",
  "D38999/26WB35PN",
  "D38999/26WB35SA",
  "D38999/26WB35SN",
  "D38999/26WB5SN",
  "D38999/26WB98PN",
  "D38999/26WC35PA",
  "D38999/26WC35PN",
  "D38999/26WC35SA",
  "D38999/26WC35SN",
  "D38999/26WC4PN",
  "D38999/26WC8SN",
  "D38999/26WC98PN",
  "D38999/26WC98SN",
  "D38999/26WD18PN",
  "D38999/26WD18SN",
  "D38999/26WD19PA",
  "D38999/26WD19PN",
  "D38999/26WD35PN",
  "D38999/26WD5PN",
  "D38999/26WD5SN",
  "D38999/26WD97PN",
  "D38999/26WE26SN",
  "D38999/26WE35PN",
  "D38999/26WE35SN",
  "D38999/26WE6PN",
  "D38999/26WE6SA",
  "D38999/26WE8PA",
  "D38999/26WE8PN",
  "D38999/26WE8SN",
  "D38999/26WF11PA",
  "D38999/26WF11PN",
  "D38999/26WF32PA",
  "D38999/26WF32PN",
  "D38999/26WF32SN",
  "D38999/26WF35PA",
  "D38999/26WF35PN",
  "D38999/26WF35SN",
  "D38999/26WG11PN",
  "D38999/26WG11SN",
  "D38999/26WG16SA",
  "D38999/26WG16SN",
  "D38999/26WG35PA",
  "D38999/26WG35PN",
  "D38999/26WG41PN",
  "D38999/26WH21PN",
  "D38999/26WH21SN",
  "D38999/26WH35PA",
  "D38999/26WH35PN",
  "D38999/26WH35SN",
  "D38999/26WH53SN",
  "D38999/26WJ19PA",
  "D38999/26WJ19PN",
  "D38999/26WJ19SA",
  "D38999/26WJ19SN",
  "D38999/26WJ29PN",
  "D38999/26WJ29SA",
  "D38999/26WJ29SN",
  "D38999/26WJ35PA",
  "D38999/26WJ35PB",
  "D38999/26WJ35PN",
  "D38999/26WJ35SA",
  "D38999/26WJ35SN",
  "D38999/26WJ37PN",
  "D38999/26WJ43PN",
  "D38999/26WJ43SN",
  "D38999/26WJ61PN",
  "D38999/26WJ7PN",
  "D38999/26WJ7SN"
 ]
};
