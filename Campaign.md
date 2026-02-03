Objects used in Campaign

## Posse
Represents players hero group and their location on campaign map as well as movement points the group has.
Posse has a Name, Notes, Level and Position properties.
Additionally a Nearest Mine, Nearest Town, Last Mine, Last Town properties that are adjusted in time when travelling on map.
Posse location may be changed in time.

# Friendly locations
Both Towns and Forst are friendly locations players can visit during campaign. 
Each of those has a number assigned and a place on map. Each is of specific type as described below.
A location may be Active or Destoyed and will be no longer accessible for played.
Location may have Rail access, players can travel between lcoation using rails.
Each Town and Fort may has a custom Notes to add additional information

## Town
Represents a town players can get into during an adventure. Is of specific town type and provides access to number of locations depending on town size
Each town has a Camp and Hotel locations in addition to other ones (avaialable until destroyed or abandoned).

## Fort
Represents a military outpost players can get into during an adventure. This is a special type of Small Town.
Has a limited access to Town locations, always has Frontier outpost, Doc's office, Blacksmith and Campsite locations.

## Mission
Represents a religious outpost players can get into during an adventure. This is a special type of Small Town.
Has a limited access to Town locations, always has Church, Hotel and Campsite locations.


## Town types
Each type has a number assigned when rolling 2D6 to determine type. Forts are always a stadard town type.
- **Ruins** - 2
- **Haunted** - 3
- **Plaque** - 4
- **Rail** - 5
- **Standard** - 6, 7, 8
- **Mining** - 9
- **River** - 10
- **Mutant** - 11
- **Outlaw** - 12


## Town sizes
- **Small** - up to 4 locations
- **Medium** - up to 6 locations
- **Large** - up to 8 locations

# Town locations
Town locations represent places players can visit during town stay. Each location may be Active or Destroyed/abandoned.
Each Location has a custom Notes to add additional information.

- **Campsite**
- **Hotel**
- **Doc's Office'**
- **Blacksmith**
- **Saloon**
- **Frontier Outpost**
- **Church**
- **General Store**
- **Mutant Quarters**
- **Indian Trading Post**
- **Sheriff's Office**
- **Smuggler's Den**
- **Street Market**
- **Gambling Hall**

## Randomizing
Random Town of is selected by D20 roll. Additional descrition provided after town name.
Town chart
01 - <Choose nearest Town>
02 - Masthead
03 - Fort Burk - Fort
04 - West Witold
05 - Hill Town
06 - Serafin
07 - Fringe
08 - Wood’s End
09 - Larberg’s Landing
10 - Stone’s Crossing
11 - Lestina
12 - Last Chance
13 - Fort Lopez - Fort
14 - Adlerville
15 - Flamme’s Folly - always Small town
16 - Fort Landy - Fort
17 - Conradt’s Claim
18 - Wilshin’s Lodge
19 - Seto’s Mill
20 - San Miguel Mission - Mission


# Hostile locations

## Mines
Mines represent haunted mines that posse can visit to gain riches and experience adventures.
There are 17 mines on map, each assigned to specific location. 
Each one has a Status (Destroyed, Sealed, Active - default status, Overrun). Status can change with time
Special mine types is Brimstone mine that need to be destroyed to finish the campaign. Brimstone is always Overrun
Each Mine has a custom Notes to add additional information.

## Rendomizing
Random mine is selected by D20 roll
Mine chart
01 - <Choose any Mine>
02 - <Choose nearest Mine>
03 - <Choose last Mine visited>
04 - The Badlands
05 - Gregor’s Gulch
06 - Mt. La Terra
07 - Hell Mouth
08 - Glory’s Anthem
09 - Cake’s Cave
10 - Clayton Ravine
11 - Mt. La Pointe
12 - Ranae Pointe
13 - The Tombs
14 - Arzhakov’s Gate
15 - Phillip’s Hill
16 - Scrogg’s Bog
17 - Old Ed’s Mine
18 - Conradt’s Claim
19 - Sierra Magallanes
20 - Ruins of Brimstone


# Map of Hexcrawl campaign

The map is a series of hexagonal spaces, each representing ~6miles land size. 
The map can be read from here: https://1drv.ms/b/c/b88ee6cbf0174698/IQCYRhfwy-aOIIC4HJQBAAAAAaxrjsDyUITCf_SJlu9SpDc?e=Q1VA45
Hero posse is placed on a specific hext and can travel between hexes accorind to rules below.
Posse has a number of movement points to spend per Day, each day posse rolls to check for travelling hazard if moved at least 2 hexes.
Travelling by Train takes a single day and no roll on travelling hazard is needed.
Travelling by Coach provides no travelling hazards

## Terrain
While traveling overland, the Heroes will find that some routes are easier to travel than
others and take less time, while others require more time and open the posse to a higher
chance of Wilderness Encounters. Terrain type has a direct impact on how far Heroes can
travel across the map each day, each type has a different cost in Move points.

- **Mines**
Represented by Mining cart dot, name and number, each mine takes a specific single hex on map

- **Towns**
- Represented by Red or Blue (forts, small towns, missions) dot, name and number, each town takes a specific hex where dot is located

- **Easy terrain**
Costs 1 Move point. Hexes with roads, train tracks or undestroyed Towns on them are considered Easy terrain. 

- **Medium terrain**
Costs 2 Move points. All terrain is considered Medium terrain by default unless modified by some other special terrain feature, such as roads, tracks, mountains, hills, or rivers.

- **Tough terrain**
Costs 3 Move points. Terrain that has more than half of any kind of special terrain (mountains, swamps, rivers, hills, trees, Destroyed Towns, etc) is considered Tough  terrain.

## Movement
All Heroes start off with a Basic Horse as a mount, however in some situations one or
more Heroes may lose their mount and have to make their way on foot. If this happens, the
entire posse slows down to match the movement speed of the horseless Hero. Although the
posse may opt to simply split the group, in which case you’ll want to use separate markers
and make separate Wilderness Encounter rolls for each traveling group.
Base movement (on horseback): 6 Move points/day and less change to get encounters (-1 on roll)
Base movement (on foot): 5 Move points/day and normal chance for encounters

## Travelling hazards
When moved 2 od more hexes during a day a travelling hazard may occur on roll of 1-2 on D8.
When travelling on horses only roll of 1 provides a hazard.
Hazards must be rolled manually on coresponding table and resolved immediately.


# Time passing
Campaign is divided by Days, each passing day provides a new set of Movement points to posse.
Town stay can take a few days, Mine mission takes a single day.
Each passing day advances Overland Darkness by 1.


# Overland Darkness counter

Overland darkness counter is a 17 steps path from right to left side divided by 3 levels.
Darkness starts at the end of track on left side and each passing Day moves Darkness counter 1 step closer to left side. 
When Darkness reaches the beginning of the track the Darkness Strikes causing changes on the Map
- first has 6 fields
- second has 5 fields
- third has 6 fields

1st level provides no penalties
2nd level adds -1 to Travel hazard roll
3rd level adds -2 to Travel hazard roll, meaning travel hazard is more likely to happen durind last 6 days before Darkness strinkes



## Overland Turn Summary
1) Determine Mine Status
Tally up the number of Overrun, Sealed, & Destroyed Mines and
adjust the Overland Darkness Tracker accordingly. At the beginning of
a campaign, the Hero marker begins on the Hero Start position and
the Darkness marker begins on the Darkness Start position +1 space
per Overrun Mine (the Ruins of Brimstone are permanently Overrun).
The Hero marker advances up the track one space to the right per
Sealed or Destroyed Mine.
2) Hero Movement
Each day on the overland map, the Heroes get 6 Move points to spend
on the Hero marker (5 if any Heroes are traveling on foot). After you
have spent two or more Move points (or finished moving for the day),
roll a D8 to determine if there is a Wilderness Encounter. On a roll of 1,
consult the Wilderness Encounter chart (or a roll of 1 or 2 if any Heroes
are traveling on foot), then finish out your movement if you have any
Move points left. The position of the Overland Darkness Track my
influence the chance of a Wilderness Encounter as well.
3) Time Advances
Tick off another completed day. Advance the Darkness marker to the
left by one space on the Overland Darkness Tracker (or two spaces if
equal to or past the current Hero marker position). If the Darkness
marker ends on the Hero Start position, roll D20 on the Mine chart,
determine which Mine is affected and consult the Overland Darkness
Results chart, and then return the Darkness marker back to the
Darkness Start position +1 space per Overrun Mine.


# Missions

Due to how travel is altered in HexCrawl, some of the Failure results for certain
missions need to be adjusted to account for a multi-town world:
- **Exploraion (Basic Mission 2)**
1 Random Town Location in the nearest Town is Destroyed. Roll a D8 twice for
Wilderness Encounters each day until you visit another Town. You may end up having
multiple encounters on the same day.
- **Seal the Void Gate (Basic Mission 3):**
The nearest Town is Destroyed. Proceed directly to Escape (Basic Mission 5), this is
assumed to happen at the same Mine.
- **City of the Ancients (City of the Ancients Mission 4)**
The Heroes each take D6 Wounds. Proceed directly to Escape (Basic Mission 5), this
is assumed to happen at the same Mine.
- **Frozen Expedition (City of the Ancients Mission 6)**
The nearest Town is Destroyed. Proceed directly to Escape (Basic Mission 5), this is
assumed to happen at the same Mine.
- **Night of the Dead (Swamps of Death Mission 1)**
The nearest Town is Destroyed by the Zombie epidemic AND you must roll a D8
twice each day for Wilderness Encounters until you visit another Town.
- **Cursed Idol (Swamps of Death Mission 5)**
The nearest Town is Destroyed. Proceed directly to Escape (Basic Mission 5), this is
assumed to happen at the same Mine.

##Swamps of Death: Core Game
###Basic Missions
1. For a Few Dark Stone More (Mine)
2. Exploration (Mine)
3. Seal the Void Gate (Mine)
4. Search Party (Mine)
5. Escape (Mine)
6. Blow the Mine (Mine)

###Swamps of Death Missions
1. Night of the Dead (Mine)
2. Seal the Hell Pit (Mine - Fixed Map)
3. The Lost Journal (Mine - Fixed Map)
4. Swamps of Death (Mine/Jargono)
5. Cursed Idol (Mine/Jargono)
6. Temple of Dread (Mine/Jargono)

##City of the Ancients: Core Game
###Basic Missions
1. For a Few Dark Stone More (Mine)
2. Exploration (Mine)
3. Seal the Void Gate (Mine)
4. Search Party (Mine)
5. Escape (Mine)
6. Blow the Mine (Mine)

###City of the Ancients Missions
1. Terror in The Night (Mine)
2. Stop the Ritual (Mine - Fixed Map)
3. Last Stand (Mine - Fixed Map)
4. City of the Ancients (Mine/Targa)
5. Overload (Targa)
6. Frozen Expedition (Mine/Targa)

##Frontier Town: Expansion
Frontier Town Missions
1. Shootout in the Streets (Frontier Town)
2. Hanging High (Frontier Town)
3. Bank Robbery (Frontier Town)
4. Jail Break (Frontier Town)
5. Town Overrun (Frontier Town)
6. High Noon Duel (Frontier Town - Solo)

##The Caverns of Cynder: Otherworld Expansion
Caverns of Cynder Missions
1. Cracks in Reality (Mine)
2. Defend the Bridge (Mine - Fixed Map)
3. Dark Deal (Mine)
4. Fire and Ash (Mine/Cynder)
5. Hunt for The Dark Stone (Mine/Cynder)
6. Broken Seals (Cynder)

##Werewolf Feral Kin
Werewolf Feral Kin Mission Pack
1. First Blood (Mines)
2. Full Moon (Mines -or- Canyons)
3. Cleansing Ritual (Mines)
4. Hunting Ground (Mines)

##Masters of the Void: Deluxe Enemy Pack
Master of the Void Missions
1. Hunted (Mine)
2. Call of the Void (Mine)

##Undead Outlaws: Deluxe Enemy Pack
Undead Outlaws Missions
1. Wanted: Undead or Alive (Mine)
2. Revenge of the Dead (Mine)

