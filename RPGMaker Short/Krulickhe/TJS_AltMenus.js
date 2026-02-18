//=============================================================================
// RPG Maker MZ - TJS Alternative Menu Screens and custom game functions
//=============================================================================
/*:
 * @target MZ
 * @plugindesc Derrick of Krulickhe main plugin.
 * @author Tiger's Eye Jade Swiftwing
 *
 * @help TJS_AltMenus.js
 *
 * This plugin has all sorts of stuff applicable to the game
 *     "Derrick of Krulickhe."
 *
 * @param Skills, half-zarakite race
 * @type skill[]
 * @default []
 * @desc The list of skills that indicate an actor is a half zarakite dragon
 *
 * @param State, half zarakite race
 * @type state
 * @default 60
 * @desc The state that indicates an actor is a half zarakite dragon
 *
 * @param Skills, half-zarakite female
 * @type skill[]
 * @default []
 * @desc The list of skills that indicate an actor is a half zarakite dragon
 *
 * @param State, half zarakite female
 * @type state
 * @default 58
 * @desc The state that indicates an actor is a half zarakite dragon
 *
 * @param Skills, zarakite race
 * @type skill[]
 * @default []
 * @desc The list of skills that indicate an actor is a zarakite dragon
 *
 * @param State, zarakite race
 * @type state
 * @default 1
 * @desc The state that indicates an actor is a zarakite dragon
 *
 * @param SP, half zarakite race
 * @type number
 * @min 100
 * @max 5000
 * @default 800
 * @desc The maximum Special Points (TP) a male half zarakite actor can have
 *
 * @param SP, half zarakite female
 * @type number
 * @min 100
 * @max 5000
 * @default 500
 * @desc The maximum Special Points (TP) a female half zarakite actor can have
 *
 * @param SP, zarakite race
 * @type number
 * @min 100
 * @max 500000
 * @default 2000
 * @desc The maximum Special Points (TP) a zarakite actor can have
 *
 * @param Decapitated State
 * @type state
 * @default 1
 * @desc The state that indicates the primary actor is decapitated
 *
 * @param Skill, Warrior Class
 * @type skill
 * @default 25
 * @desc The skill that indicates an actor has a specific class
 *
 * @param States, Warrior Multiple Actions
 * @type skill[]
 * @default ["111","112","113","114","115","116","117","118","119","120","151","152","153","154","155","156","157","158","159","160","161","162","163","164","165","166","167","168","169","170"]
 * @desc The states that set multiple actions
 *
 * @param Skill, Warrior Dual Class
 * @type skill
 * @default 22
 * @desc The skill that indicates an actor has a specific class
 *
 * @param States, Dual Warrior Multiple Actions
 * @type skill[]
 * @default ["171","172","173","174","175","176","177","178","179","180","181","182","183","184","185","186","187","188","189","190","191","192","193","194","195","196","197","198","199","200"]
 * @desc The states that set multiple actions
 *
 * @param Skill, Wizard Class
 * @type skill
 * @default 26
 * @desc The skill that indicates an actor has a specific class
 *
 * @param States, Wizard Multiple Actions
 * @type skill[]
 * @default ["201","202","203","204","205"]
 * @desc The states that set multiple actions
 *
 * @param Skill, Witch Class
 * @type skill
 * @default 27
 * @desc The skill that indicates an actor has a specific class
 *
 * @param States, Witch Multiple Actions
 * @type skill[]
 * @default ["211","212","213","214","215","216","217","218","219","220"]
 * @desc The states that set multiple actions
 *
 * @param Skill, Thief Class
 * @type skill
 * @default 28
 * @desc The skill that indicates an actor has a specific class
 *
 * @param States, Thief Multiple Actions
 * @type skill[]
 * @default ["221","222","223","224","225","226","227","228","229","230"]
 * @desc The states that set multiple actions
 *
 * @param Skill, Male Half Zarakite
 * @type skill
 * @default 23
 * @desc The skill that indicates an actor has a specific race
 *
 * @param States, Male Half Z Actions
 * @type skill[]
 * @default ["231","232","233","234","235","236","237","238","239","240","241","242","243","244","245","246","247","248","249","250"]
 * @desc The states that set multiple actions
 *
 * @param Skill, Female Half Zarakite
 * @type skill
 * @default 24
 * @desc The skill that indicates an actor has a specific class
 *
 * @param Variable, Food Use Walking
 * @type variable
 * @default 28
 * @desc The variable that determines how many steps are taken before food is consumed
 *
 * @param Physical Attack Variance
 * @type number
 * @default 25000
 * @min 0
 * @max 95000
 * @desc Determines value variance, times 0.00001
 *
 * @param Magical Attack Variance
 * @type number
 * @default 32000
 * @min 0
 * @max 95000
 * @desc Determines value variance, times 0.00001
 *
 * @param Physical Defense Variance
 * @type number
 * @default 25000
 * @min 0
 * @max 95000
 * @desc Determines value variance, times 0.00001
 *
 * @param Magical Defense Variance
 * @type number
 * @default 32000
 * @min 0
 * @max 95000
 * @desc Determines value variance, times 0.00001
 *
 * @param HP Dampening
 * @type number
 * @default 80000
 * @min 1000
 * @max 100000
 * @desc Value for reducing damage of enemy attacks when HP gets low, times 0.00001
 *
 * @param HP Dampening Inverse
 * @type number
 * @default 68250
 * @min 1000
 * @max 100000
 * @desc Value for reducing damage of player attacks when HP is high, times 0.00001
 *
 * @param Max Items
 * @type number
 * @default 999
 * @min 10
 * @max 9999
 * @desc Maximum number of any item the player's party can carry.
 *
 * @param Max Party Size
 * @type number
 * @default 16
 * @min 4
 * @max 32
 * @desc Maximum number of members in the player's adventuring party.
 *
 * @param Var, Weapon Break Counts
 * @type variable
 * @default 31
 * @desc Variable that weapon break counts are stored in.
 *
 * @param Var, Gun Break Counts
 * @type variable
 * @default 32
 * @desc Variable that gun break counts are stored in.
 *
 * @param Multiplier, Weapon Break Counts
 * @type number
 * @default 120
 * @desc Percent multiplier for how many uses a weapon takes to break.
 *
 * @param Multiplier, Gun Break Counts
 * @type number
 * @default 60
 * @desc Percent multiplier for how many uses a gun takes to break.
 *
 * @command Get Actor TP
 * @desc Stores current TP of actor in a game variable
 *
 * @arg Actor
 * @type actor
 * @desc The actor index to get the TP of
 * @default 1
 *
 * @arg Variable
 * @type variable
 * @desc The variable to store the TP in
 * @default 1
 *
 * @command Get Actor Max TP
 * @desc Stores current maximum TP of actor in a game variable
 *
 * @arg Actor
 * @type actor
 * @desc The actor index to get the maximum TP of
 * @default 1
 *
 * @arg Variable
 * @type variable
 * @desc The variable to store the maximum TP in
 * @default 1
 *
 * @command Get Actor TP from Max
 * @desc Stores maximum TP minus current TP of actor in a game variable
 *
 * @arg Actor
 * @type actor
 * @desc The actor index to get the TP of
 * @default 1
 *
 * @arg Variable
 * @type variable
 * @desc The variable to store the TP in
 * @default 1
 *
 * @command Set Actor TP Gain
 * @desc Makes the TP of an Actor increase by an amount.  Can be negative for a decrease in TP.
 *
 * @arg Actor
 * @type actor
 * @desc The actor index to set the TP gain of
 * @default 1
 *
 * @arg Value
 * @type number
 * @min -5000
 * @max 5000
 * @desc Amount to increase, can be positive or negative
 * @default 0
 *
 * @command Set Actor TP Gain from Variable
 * @desc Makes the TP of an Actor increase by an amount in a variable.  Can be negative for a decrease in TP.
 *
 * @arg Actor
 * @type actor
 * @desc The actor index to set the TP gain of
 * @default 1
 *
 * @arg Variable
 * @type variable
 * @desc Variable index that stores the amount to increase, can be positive or negative
 * @default 1
 *
 * @command Get Cost to Heal
 * @desc Gets the cost of healing, such as at an Inn, etc.
 *
 * @arg Price_Factor
 * @type number
 * @min 1
 * @max 500000
 * @desc Price scaling factor, in percent
 * @default 10
 *
 * @arg Variable
 * @type variable
 * @desc Variable index that stores the calculated cost
 * @default 10
 *
 * @command Heal Party
 * @desc Heals the entire party, for example at an Inn.
 *
 * @command Apply States For Race
 * @desc Apply applicable states for character race and class, for the entire party.
 *
 * @command Thief Detect Traps
 * @desc Check to see who in the party successfully detects a trap, with applicable thievery skills.
 *
 * @arg TrapLevel
 * @type number
 * @min 0
 * @max 25
 * @desc The level of the trap, higher is more difficult to detect
 * @default 1
 *
 * @arg Chance
 * @type number
 * @min 0
 * @max 10000
 * @desc The base chance of detection succeeding, percent times 0.01
 * @default 5000
 *
 * @arg Variable
 * @type variable
 * @desc The variable to store the resulting party member index of who succeeded, zero if no one pulled it off successfully.
 * @default 17
 *
 * @command Thief Detect Doors
 * @desc Check to see who in the party successfully detects a secret door, with applicable thievery skills.
 *
 * @arg DoorLevel
 * @type number
 * @min 0
 * @max 25
 * @desc The level of the door, higher is more difficult to detect
 * @default 1
 *
 * @arg Chance
 * @type number
 * @min 0
 * @max 10000
 * @desc The base chance of detection succeeding, percent times 0.01
 * @default 5000
 *
 * @arg Variable
 * @type variable
 * @desc The variable to store the resulting party member index of who succeeded, zero if no one pulled it off successfully.
 * @default 20
 *
 * @command Thief Open Locks
 * @desc Check to see who in the party successfully picks a lock, with applicable thievery skills.
 *
 * @arg LockLevel
 * @type number
 * @min 0
 * @max 25
 * @desc The level of the lock, higher is more difficult to detect
 * @default 1
 *
 * @arg Chance
 * @type number
 * @min 0
 * @max 10000
 * @desc The base chance of detection succeeding, percent times 0.01
 * @default 5000
 *
 * @arg Variable
 * @type variable
 * @desc The variable to store the resulting party member index of who succeeded, zero if no one tried.  Negative one means someone tried and failed, possibly messing up any chances to try again by anyone.
 * @default 23
 *
 * @command Thief Hack Thing
 * @desc Check to see who in the party successfully hacks a device or thing, with applicable thievery skills.
 *
 * @arg ThingLevel
 * @type number
 * @min 0
 * @max 25
 * @desc The level of the device or thing, higher is more difficult to hack
 * @default 1
 *
 * @arg Chance
 * @type number
 * @min 0
 * @max 10000
 * @desc The base chance of detection succeeding, percent times 0.01
 * @default 5000
 *
 * @arg Variable
 * @type variable
 * @desc The variable to store the resulting party member index of who succeeded, zero if no one tried.  Negative one means someone tried and failed, possibly messing up any chances to try again by anyone.
 * @default 27
 *
 * @command Advance Party To Level
 * @desc Advances the party so that the member with the highest potential level now has the desired level or higher, and returns the EXP added to all members in a game variable.
 *
 * @arg NewLevel
 * @type number
 * @min 1
 * @max 99
 * @desc The desired maximum level of the party
 * @default 1
 *
 * @arg Variable
 * @type variable
 * @desc The variable to store the exp points added to the whole party.
 * @default 10
 *
 * @arg ShowCustomWindow
 * @type boolean
 * @desc Show a custom message window about awarding exp, instead of storing the increase in exp in a variable?
 * @default true
 *
 * @command Level Party To Var
 * @desc Advances the party, according to a game variable, so that the member with the highest potential level now has the desired level or higher, and returns the EXP added to all members in a game variable.
 *
 * @arg NewLevelVar
 * @type variable
 * @min 1
 * @max 9999
 * @desc The variable for the desired maximum level of the party
 * @default 1
 *
 * @command Set Hunting Active
 * @desc Turns on checks for hunting, if anyone in the party has hunting state or skill activated
 *
 * @command Set Hunting Chances
 * @desc Sets chances of finding large and small animals to hunt, in the current area or map
 *
 * @arg ChancesSmall
 * @type number
 * @min 0
 * @max 9999
 * @desc The percent chance of finding small animals
 * @default 0
 *
 * @arg ChancesLarge
 * @type number
 * @min 0
 * @max 9999
 * @desc The percent chance of finding large animals
 * @default 0
 *
 * @command Show Class Choice List
 * @desc Shows a list of choices for picking the character class of a party member
 *
 * @arg PartyMemberIndex
 * @type number
 * @min 0
 * @max 15
 * @desc The index of the party member to choose a class for
 * @default 1
 *
 * @arg WindowLocation
 * @type number
 * @min 0
 * @max 2
 * @desc The position of the list on-screen, (0, 1, 2) -> left, center, right
 * @default 0
 *
 * @command Show BattleBG
 * @desc Shows the battle background, outside of battle
 *
 * @command Hide BattleBG
 * @desc Hides the battle background, outside of battle, also erases all visible pictures
 *
 * @command Clear Chests
 * @desc Clears and resets all random-item treasure chests
 *
 * @command Loot Chest
 * @desc Picks a random-item treasure chest and adds it's contents to the party's inventory
 *
 * @arg ChestIndexMax
 * @type number
 * @min 0
 * @max 9
 * @desc The maximum index of the chest to loot.
 * @default 0
 *
 * @command Stock Chest Items
 * @desc Picks a random-item treasure chest and adds it's contents to the party's inventory
 *
 * @arg ChestIndex
 * @type number
 * @min 0
 * @max 9
 * @desc The index of the chest to stock.
 * @default 0
 *
 * @arg ItemId
 * @type item[]
 * @min 1
 * @max 9999
 * @desc The indicies of the item IDs to stock.
 * @default []
 *
 * @arg ItemCount
 * @type number[]
 * @min 1
 * @max 9999
 * @desc The quantities of the items to be found in the chest.
 * @default []
 *
 * @arg ItemChance
 * @type number[]
 * @min 1
 * @max 100
 * @desc The percent chances of the items to be found in the chest.
 * @default []
 *
 * @command Stock Chest Weapons
 * @desc Picks a random-item treasure chest and adds it's contents to the party's inventory
 *
 * @arg ChestIndex
 * @type number
 * @min 0
 * @max 9
 * @desc The index of the chest to stock.
 * @default 0
 *
 * @arg ItemId
 * @type weapon[]
 * @min 1
 * @max 9999
 * @desc The indicies of the item IDs to stock.
 * @default []
 *
 * @arg ItemCount
 * @type number[]
 * @min 1
 * @max 9999
 * @desc The quantities of the items to be found in the chest.
 * @default []
 *
 * @arg ItemChance
 * @type number[]
 * @min 1
 * @max 100
 * @desc The percent chances of the items to be found in the chest.
 * @default []
 *
 * @command Stock Chest Armors
 * @desc Picks a random-item treasure chest and adds it's contents to the party's inventory
 *
 * @arg ChestIndex
 * @type number
 * @min 0
 * @max 9
 * @desc The index of the chest to stock.
 * @default 0
 *
 * @arg ItemId
 * @type armor[]
 * @min 1
 * @max 9999
 * @desc The indicies of the item IDs to stock.
 * @default []
 *
 * @arg ItemCount
 * @type number[]
 * @min 1
 * @max 9999
 * @desc The quantities of the items to be found in the chest.
 * @default []
 *
 * @arg ItemChance
 * @type number[]
 * @min 1
 * @max 100
 * @desc The percent chances of the items to be found in the chest.
 * @default []
 *
 * @command Show Leader Class Choice List
 * @desc Shows a list of choices for picking the character class of a lead party member
 *
 * @arg PartyMemberIndex
 * @type number
 * @min 0
 * @max 15
 * @desc The index of the party member to choose a class for
 * @default 1
 *
 * @arg WindowLocation
 * @type number
 * @min 0
 * @max 2
 * @desc The position of the list on-screen, (0, 1, 2) -> left, center, right
 * @default 0
 */

(() => {
var TJS_auto = {};
var TJS_map = {};
const tjs_params = PluginManager.parameters('TJS_AltMenus');
const tjs_halfZarakiteSkills = JSON.parse(tjs_params['Skills, half-zarakite race']).slice();
const tjs_halfZarakiteState = Number(tjs_params['State, half zarakite race']);
const tjs_halfZarakiteSkillsF = JSON.parse(tjs_params['Skills, half-zarakite female']).slice();
const tjs_halfZarakiteStateF = Number(tjs_params['State, half zarakite female']);
const tjs_zarakiteSkills = JSON.parse(tjs_params['Skills, zarakite race']).slice();
const tjs_zarakiteState = Number(tjs_params['State, zarakite race']);
const tjs_decapitatedState = Number(tjs_params['Decapitated State']);
const tjs_halfZarakiteTpMax = Number(tjs_params['SP, half zarakite race']);
const tjs_halfZarakiteFTpMax = Number(tjs_params['SP, half zarakite female']);
const tjs_zarakiteTpMax = Number(tjs_params['SP, zarakite race']);
const tjs_skill_race_male_halfZarakite = Number(tjs_params['Skill, Male Half Zarakite']);
const tjs_skill_race_female_halfZarakite = Number(tjs_params['Skill, Female Half Zarakite']);
const tjs_skill_class_warrior = Number(tjs_params['Skill, Warrior Class']);
const tjs_skill_class_warrior_dual = Number(tjs_params['Skill, Warrior Dual Class']);
const tjs_skill_class_wizard = Number(tjs_params['Skill, Wizard Class']);
const tjs_skill_class_witch = Number(tjs_params['Skill, Witch Class']);
const tjs_skill_class_thief = Number(tjs_params['Skill, Thief Class']);
const tjs_var_steps_food_use = Number(tjs_params['Variable, Food Use Walking']);
const tjs_combat_variance_physical_attack = Number(tjs_params['Physical Attack Variance']) * 0.00001;
const tjs_combat_variance_magical_attack = Number(tjs_params['Magical Attack Variance']) * 0.00001;
const tjs_combat_variance_physical_defense = Number(tjs_params['Physical Defense Variance']) * 0.00001;
const tjs_combat_variance_magical_defense = Number(tjs_params['Magical Defense Variance']) * 0.00001;
const tjs_combat_hp_dampening = Number(tjs_params['HP Dampening']) * 0.00001;
const tjs_combat_hp_dampening_inverse = Number(tjs_params['HP Dampening Inverse']) * 0.00001;
const tjs_max_items = Number(tjs_params['Max Items']);
const tjs_max_items_digits = Math.max(Math.floor(Math.log10(Math.abs(Math.round( tjs_max_items )))), 0) + 1;
const tjs_max_party_size = Number(tjs_params['Max Party Size']);
const tjs_var_index_weapon_break_counts = Number(tjs_params['Var, Weapon Break Counts']);
const tjs_var_index_gun_break_counts = Number(tjs_params['Var, Gun Break Counts']);
const tjs_multiplier_weapon_break_counts = Number(tjs_params['Multiplier, Weapon Break Counts']) * 0.01;
const tjs_multiplier_gun_break_counts = Number(tjs_params['Multiplier, Gun Break Counts']) * 0.01;
const tjs_skill_actions_nonwarrior = 22;
const tjs_skill_actions_warrior_1 = 31;
const tjs_skill_actions_warrior_2 = 32;
const tjs_skill_actions_warrior_3 = 33;
const tjs_skill_actions_warrior_4 = 34;
const tjs_skill_actions_warrior_5 = 35;
const tjs_skill_actions_warrior_6 = 36;
const tjs_skill_actions_warrior_7 = 37;
const tjs_skill_actions_warrior_8 = 38;
const tjs_skill_actions_warrior_9 = 39;
const tjs_skill_actions_warrior_10 = 40;
const tjs_skill_head_attached_1 = 41;
const tjs_skill_head_attached_2 = 42;
const tjs_skill_head_attached_3 = 43;
const tjs_skill_head_attached_4 = 44;
const tjs_skill_head_attached_5 = 45;
const tjs_state_actions_nonwarrior = 37;
const tjs_state_actions_warrior_1 = 111;
const tjs_state_actions_warrior_2 = 112;
const tjs_state_actions_warrior_3 = 113;
const tjs_state_actions_warrior_4 = 114;
const tjs_state_actions_warrior_5 = 115;
const tjs_state_actions_warrior_6 = 116;
const tjs_state_actions_warrior_7 = 117;
const tjs_state_actions_warrior_8 = 118;
const tjs_state_actions_warrior_9 = 119;
const tjs_state_actions_warrior_10 = 120;
const tjs_state_head_attached_1 = 121;
const tjs_state_head_attached_2 = 122;
const tjs_state_head_attached_3 = 123;
const tjs_state_head_attached_4 = 124;
const tjs_state_head_attached_5 = 125;
const tjs_state_detect_traps_1 = 71;
const tjs_state_detect_traps_2 = 72;
const tjs_state_detect_traps_3 = 73;
const tjs_state_detect_traps_4 = 74;
const tjs_state_detect_traps_5 = 75;
const tjs_state_detect_traps_6 = 76;
const tjs_state_detect_traps_7 = 77;
const tjs_state_detect_traps_8 = 78;
const tjs_state_detect_traps_9 = 79;
const tjs_state_detect_traps_10 = 80;
const tjs_state_detect_doors_1 = 81;
const tjs_state_detect_doors_2 = 82;
const tjs_state_detect_doors_3 = 83;
const tjs_state_detect_doors_4 = 84;
const tjs_state_detect_doors_5 = 85;
const tjs_state_detect_doors_6 = 86;
const tjs_state_detect_doors_7 = 87;
const tjs_state_detect_doors_8 = 88;
const tjs_state_detect_doors_9 = 89;
const tjs_state_detect_doors_10 = 90;
const tjs_state_open_locks_1 = 91;
const tjs_state_open_locks_2 = 92;
const tjs_state_open_locks_3 = 93;
const tjs_state_open_locks_4 = 94;
const tjs_state_open_locks_5 = 95;
const tjs_state_open_locks_6 = 96;
const tjs_state_open_locks_7 = 97;
const tjs_state_open_locks_8 = 98;
const tjs_state_open_locks_9 = 99;
const tjs_state_open_locks_10 = 100;
const tjs_state_hack_tools = ["201","202","203","204","205","206","207","208","209","210"];
var tjs_food_steps = 0;
const tjs_meat_small = ["182","183","186","189","196","197","198","199","200"];
const tjs_meat_large = ["181","184","185","187","188","190","191","192","193","194","195"];
const tjs_skill_hunting = ["981","982","983","984","985","986","987","988","989","990"];
const tjs_state_hunting = ["211","212","213","214","215","216","217","218","219","220"];
const tjs_someone_is_hunting = 9;
const tjs_hunting_chance_small = 29;
const tjs_hunting_chance_large = 30;
const tjs_class_greatsword_master = 1;
const tjs_class_axe_master = 2;
const tjs_class_mage = 3;
const tjs_class_witch = 4;
const tjs_class_wizard = 5;
const tjs_class_thief = 6;
const tjs_class_ranger = 18;
const tjs_class_axe_master_mage = 7;
const tjs_class_axe_master_witch = 8;
const tjs_class_axe_master_thief = 9;
const tjs_class_mage_witch = 10;
const tjs_class_thief_mage = 11;
const tjs_class_greatsword_master_mage = 15;
const tjs_class_greatsword_master_witch = 16;
const tjs_class_greatsword_master_thief = 17;
const tjs_weapon_greatsword = 1;
const tjs_weapon_longsword = 2;
const tjs_weapon_battleaxe = 3;
const tjs_weapon_hand_ax = 4;
const tjs_weapon_staff = 5;
const tjs_weapon_dual_swords = 6;
const tjs_var_decap_base = 15;
const tjs_var_decap_chance = 12;
const tjs_var_decap_modifier = 14;
const tjs_switch_suppress_decap = 8;
const tjs_switch_wearing_shirt = 3;
const tjs_state_broken_weapon = 38;
const tjs_weapon_broken_weapon = 10;
const tjs_state_broken_gun = 39;
const tjs_armor_broken_gun = 371;
const tjs_weaponID_broken_weapon = 10;
const tjs_armorID_broken_2nd_weapon = 371;
const tjs_state_broken_2nd_weapon = 39;
const tjs_item_level_names = [
        "Iron",
        "Steel",
        "Copper",
        "Bronze",
        "Silver",

        "Gold",
        "Chrome",
        "Granite",
        "Pearl",
        "Ivory",

        "Jade",
        "Jet",
        "Ruby",
        "Sapphire",
        "Emerald",

        "Diamond",
        "Onyx",
        "Obsidian",
        "Quartz",
        "Crystal"
    ];
const tjs_max_item_levels = tjs_item_level_names.length;
const tjs_battle_master_damage_taken_adjust_enemy = 1.00000;
const tjs_battle_master_damage_taken_adjust_actor = 1.00000;
const tjs_number_of_random_chests = 10;
const tjs_variable_game_chapter = 33;
const tjs_state_concealed_skin_tone = 32;
const tjs_switch_dan_wearing_shirt = 3;
const tjs_switch_concealed_skin_tone = 2;
const tjs_max_character_level = 200;

class tjsChest {
    constructor() {
        this.count = [];
        this.id = [];
        this.chance = [];
        this.count_w = [];
        this.id_w = [];
        this.chance_w = [];
        this.count_a = [];
        this.id_a = [];
        this.chance_a = [];

        this.loot_id = [];
        this.loot_count = [];
        this.loot_id_w = [];
        this.loot_count_w = [];
        this.loot_id_a = [];
        this.loot_count_a = [];
    }
    Clear() {
        this.count = [];
        this.id = [];
        this.chance = [];
        this.count_w = [];
        this.id_w = [];
        this.chance_w = [];
        this.count_a = [];
        this.id_a = [];
        this.chance_a = [];

        this.loot_id = [];
        this.loot_count = [];
        this.loot_id_w = [];
        this.loot_count_w = [];
        this.loot_id_a = [];
        this.loot_count_a = [];
    }
    Size() {
        const iCount = Math.min( this.count.length, this.id.length, this.chance.length );
        const wCount = Math.min( this.count_w.length, this.id_w.length, this.chance_w.length );
        const aCount = Math.min( this.count_a.length, this.id_a.length, this.chance_a.length );
        return iCount + wCount + aCount;
    }
    SizeItems() {
        return Math.min( this.count.length, this.id.length, this.chance.length );
    }
    SizeWeapons() {
        return Math.min( this.count_w.length, this.id_w.length, this.chance_w.length );
    }
    SizeArmors() {
        return Math.min( this.count_a.length, this.id_a.length, this.chance_a.length );
    }
    LootSize() {
        return Math.min( this.loot_id.length, this.loot_count.length) + Math.min( this.loot_id_w.length, this.loot_count_w.length) + Math.min( this.loot_id_a.length, this.loot_count_a.length );
    }
    LootSizeItems() {
        return Math.min( this.loot_id.length, this.loot_count.length);
    }
    LootSizeWeapons() {
        return Math.min( this.loot_id_w.length, this.loot_count_w.length);
    }
    LootSizeArmors() {
        return Math.min( this.loot_id_a.length, this.loot_count_a.length );
    }
    AddItem(item_count, item_chance, item_id) {
        const i_count = Number(item_count);
        const i_id = Number(item_id);
        var i_chance = Number(item_chance) * 0.01;
        if (i_count < 1) return;
        if (i_id < 1) return;
        if (i_chance < 0.01) i_chance = 0.01;
        if (i_chance > 1.00) i_chance = 1.00;

        this.count.push( i_count );
        this.id.push( i_id );
        this.chance.push( i_chance );
    }
    AddWeapon(item_count, item_chance, item_id) {
        const i_count = Number(item_count);
        const i_id = Number(item_id);
        var i_chance = Number(item_chance) * 0.01;
        if (i_count < 1) return;
        if (i_id < 1) return;
        if (i_chance < 0.01) i_chance = 0.01;
        if (i_chance > 1.00) i_chance = 1.00;

        this.count_w.push( i_count );
        this.id_w.push( i_id );
        this.chance_w.push( i_chance );
    }
    AddArmor(item_count, item_chance, item_id) {
        const i_count = Number(item_count);
        const i_id = Number(item_id);
        var i_chance = Number(item_chance) * 0.01;
        if (i_count < 1) return;
        if (i_id < 1) return;
        if (i_chance < 0.01) i_chance = 0.01;
        if (i_chance > 1.00) i_chance = 1.00;

        this.count_a.push( i_count );
        this.id_a.push( i_id );
        this.chance_a.push( i_chance );
    }
    Loot() {
        this.loot_id = [];
        this.loot_count = [];
        this.loot_id_w = [];
        this.loot_count_w = [];
        this.loot_id_a = [];
        this.loot_count_a = [];

        if ( this.Size() < 0 ) return;

        // Items
        for (let i = 0; i < this.SizeItems(); i++)
        {
            const itm_id = this.id[i];
            const itm_count = this.count[i];

            if ( (Math.random() * 0.99) < this.chance[i] ) {
                var mtch = -4;
                for (let m = 0; m < this.loot_id.length; m++) {
                    if ( this.loot_id[m] == itm_id ) mtch = m;
                }

                if ( mtch > -1 ) {
                    this.loot_count[mtch] += itm_count;
                } else {
                    this.loot_id.push( itm_id );
                    this.loot_count.push( itm_count );
                }
            }
        }

        // Weapons
        for (let i = 0; i < this.SizeWeapons(); i++)
        {
            const itm_id = this.id_w[i];
            const itm_count = this.count_w[i];

            if ( (Math.random() * 0.99) < this.chance_w[i] ) {
                var mtch = -4;
                for (let m = 0; m < this.loot_id_w.length; m++) {
                    if ( this.loot_id_w[m] == itm_id ) mtch = m;
                }

                if ( mtch > -1 ) {
                    this.loot_count_w[mtch] += itm_count;
                } else {
                    this.loot_id_w.push( itm_id );
                    this.loot_count_w.push( itm_count );
                }
            }
        }

        // Armors
        for (let i = 0; i < this.SizeArmors(); i++)
        {
            const itm_id = this.id_a[i];
            const itm_count = this.count_a[i];

            if ( (Math.random() * 0.99) < this.chance_a[i] ) {
                var mtch = -4;
                for (let m = 0; m < this.loot_id_a.length; m++) {
                    if ( this.loot_id_a[m] == itm_id ) mtch = m;
                }

                if ( mtch > -1 ) {
                    this.loot_count_a[mtch] += itm_count;
                } else {
                    this.loot_id_a.push( itm_id );
                    this.loot_count_a.push( itm_count );
                }
            }
        }
    }
    Empty() {
        this.loot_id = [];
        this.loot_count = [];
        this.loot_id_w = [];
        this.loot_count_w = [];
        this.loot_id_a = [];
        this.loot_count_a = [];
    }
};

var tjs_Chest = [];
for (let i = 0; i < tjs_number_of_random_chests; i++) {
    tjs_Chest.push( new tjsChest() );
    tjs_Chest[i].Clear();
}

// (function(){
var TJS_GS = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    TJS_GS.call(this);
    this.weaponBreakingCount = [];
    this.gunBreakingCount = [];

    for (let i = 0; i < tjs_max_party_size; i++) {
        this.weaponBreakingCount.push(0);
        this.gunBreakingCount.push(0);
    }
};
Game_System.prototype.playtimeText = function() {
    const hour = Math.floor(this.playtime() / 60 / 60);
    const min = Math.floor(this.playtime() / 60) % 60;
    const sec = this.playtime() % 60;
    return hour.padZero(4) + ":" + min.padZero(2) + ":" + sec.padZero(2);
};

// })();

//-----------------------------------------------------------------------------
// Game_BattlerBase
//
// The superclass of Game_Battler. It mainly contains parameters calculation.
Object.defineProperties(Game_BattlerBase.prototype, {
    // Combined Defense of regular Defense and Magical Defense
    cdef: {
        get: function() {
            return (this.param(3) + this.param(5)) * 0.5;
        },
        configurable: true
    },
    // Combined Attack of regular Attack and Magical Attack
    catk: {
        get: function() {
            return (this.param(2) + this.param(4)) * 0.5;
        },
        configurable: true
    },
    // ATtacK power
    patk: {
        get: function() {
            return this.param(2);
        },
        configurable: true
    },
    // DEFense power
    pdef: {
        get: function() {
            return this.param(3);
        },
        configurable: true
    },
    // Magic ATtack power
    matk: {
        get: function() {
            return this.param(4);
        },
        configurable: true
    },
    // Magic DeFense power
    mdef: {
        get: function() {
            return this.param(5);
        },
        configurable: true
    },
    // Physical Attack Variance
    patkv: {
        get: function() {
            return (1.0 - tjs_combat_variance_physical_attack) + (Math.random() * 2.0 * tjs_combat_variance_physical_attack);
        },
        configurable: true
    },
    // Physical Attack Variance
    matkv: {
        get: function() {
            return (1.0 - tjs_combat_variance_magical_attack) + (Math.random() * 2.0 * tjs_combat_variance_magical_attack);
        },
        configurable: true
    },
    // Physical Defense Variance
    pdefv: {
        get: function() {
            return (1.0 - tjs_combat_variance_physical_defense) + (Math.random() * 2.0 * tjs_combat_variance_physical_defense);
        },
        configurable: true
    },
    // Magical Defense Variance
    mdefv: {
        get: function() {
            return (1.0 - tjs_combat_variance_magical_defense) + (Math.random() * 2.0 * tjs_combat_variance_magical_defense);
        },
        configurable: true
    },
    // Physical Attack, with variance
    pa1: {
        get: function() {
            return this.param(2) * ((1.0 - tjs_combat_variance_physical_attack) + (Math.random() * 2.00000 * tjs_combat_variance_physical_attack));
        },
        configurable: true
    },
    // Magical Attack, with variance
    ma1: {
        get: function() {
            return this.param(4) * ((1.0 - tjs_combat_variance_magical_attack) + (Math.random() * 2.00000 * tjs_combat_variance_magical_attack));
        },
        configurable: true
    },
    // Combined Attack, with variance
    ca1: {
        get: function() {
            var p = this.param(2) * ((1.0 - tjs_combat_variance_physical_attack) + (Math.random() * 2.00000 * tjs_combat_variance_physical_attack));
            var m = this.param(4) * ((1.0 - tjs_combat_variance_magical_attack) + (Math.random() * 2.00000 * tjs_combat_variance_magical_attack));
            return (p + m) * 0.50000;
        },
        configurable: true
    },
    // Physical Defense, with variance
    pd1: {
        get: function() {
            return this.param(3) * ((1.0 - tjs_combat_variance_physical_defense) + (Math.random() * 2.0 * tjs_combat_variance_physical_defense));
        },
        configurable: true
    },
    // Magical Defense, with variance
    md1: {
        get: function() {
            return this.param(5) * ((1.0 - tjs_combat_variance_magical_defense) + (Math.random() * 2.0 * tjs_combat_variance_magical_defense));
        },
        configurable: true
    },
    // Combined Defense, with variance
    cd1: {
        get: function() {
            var p = this.param(3) * ((1.0 - tjs_combat_variance_physical_defense) + (Math.random() * 2.0 * tjs_combat_variance_physical_defense));
            var m = this.param(5) * ((1.0 - tjs_combat_variance_magical_defense) + (Math.random() * 2.0 * tjs_combat_variance_magical_defense));
            return (p + m) * 0.5;
        },
        configurable: true
    },
    // Hit point percentage damage dampening factor, less end-result with fewer HP
    dmpn: {
        get: function() {
            var pct = this._hp / this.param(0);
            pct = Math.pow(pct, 2.00000);
            pct = 1.00000 - pct;
            pct *= tjs_combat_hp_dampening;
            pct = 1.00000 - pct;
            return pct;
        },
        configurable: true
    },
    // Hit point percentage damage dampening factor, inverted, less end-result with higher and max HP
    dmpi: {
        get: function() {
            var pct = this._hp / this.param(0);
            // pct = 1.00000 - pct;
            // pct = Math.pow(pct, 2.00000);
            // pct = 1.00000 - pct;
            pct *= tjs_combat_hp_dampening_inverse;
            pct = 1.00000 - pct;
            return pct;
        },
        configurable: true
    },
    // Hit point percentage damage dampening factor, inverted, less end-result with higher and max HP
    dp: {
        get: function() {
            return this.GetDp();
        },
        configurable: true
    },
    eq0: {
        get: function() {
            return this.e0(800);
        },
        configurable: true
    },
    eq2: {
        get: function() {
            return this.e2(800);
        },
        configurable: true
    },
    eq3: {
        get: function() {
            return this.e3(800);
        },
        configurable: true
    }
    /*
    // Hit Points
    hp: {
        get: function() {
            return this._hp;
        },
        configurable: true
    },
    // Magic Points
    mp: {
        get: function() {
            return this._mp;
        },
        configurable: true
    },
    // Tactical Points
    tp: {
        get: function() {
            return this._tp;
        },
        configurable: true
    },
    // Maximum Hit Points
    mhp: {
        get: function() {
            return this.param(0);
        },
        configurable: true
    },
    // Maximum Magic Points
    mmp: {
        get: function() {
            return this.param(1);
        },
        configurable: true
    },
    // ATtacK power
    atk: {
        get: function() {
            return this.param(2);
        },
        configurable: true
    },
    // DEFense power
    def: {
        get: function() {
            return this.param(3);
        },
        configurable: true
    },
    // Magic ATtack power
    mat: {
        get: function() {
            return this.param(4);
        },
        configurable: true
    },
    // Magic DeFense power
    mdf: {
        get: function() {
            return this.param(5);
        },
        configurable: true
    },
    // AGIlity
    agi: {
        get: function() {
            return this.param(6);
        },
        configurable: true
    },
    // LUcK
    luk: {
        get: function() {
            return this.param(7);
        },
        configurable: true
    },
    // HIT rate
    hit: {
        get: function() {
            return this.xparam(0);
        },
        configurable: true
    },
    // EVAsion rate
    eva: {
        get: function() {
            return this.xparam(1);
        },
        configurable: true
    },
    // CRItical rate
    cri: {
        get: function() {
            return this.xparam(2);
        },
        configurable: true
    },
    // Critical EVasion rate
    cev: {
        get: function() {
            return this.xparam(3);
        },
        configurable: true
    },
    // Magic EVasion rate
    mev: {
        get: function() {
            return this.xparam(4);
        },
        configurable: true
    },
    // Magic ReFlection rate
    mrf: {
        get: function() {
            return this.xparam(5);
        },
        configurable: true
    },
    // CouNTer attack rate
    cnt: {
        get: function() {
            return this.xparam(6);
        },
        configurable: true
    },
    // Hp ReGeneration rate
    hrg: {
        get: function() {
            return this.xparam(7);
        },
        configurable: true
    },
    // Mp ReGeneration rate
    mrg: {
        get: function() {
            return this.xparam(8);
        },
        configurable: true
    },
    // Tp ReGeneration rate
    trg: {
        get: function() {
            return this.xparam(9);
        },
        configurable: true
    },
    // TarGet Rate
    tgr: {
        get: function() {
            return this.sparam(0);
        },
        configurable: true
    },
    // GuaRD effect rate
    grd: {
        get: function() {
            return this.sparam(1);
        },
        configurable: true
    },
    // RECovery effect rate
    rec: {
        get: function() {
            return this.sparam(2);
        },
        configurable: true
    },
    // PHArmacology
    pha: {
        get: function() {
            return this.sparam(3);
        },
        configurable: true
    },
    // Mp Cost Rate
    mcr: {
        get: function() {
            return this.sparam(4);
        },
        configurable: true
    },
    // Tp Charge Rate
    tcr: {
        get: function() {
            return this.sparam(5);
        },
        configurable: true
    },
    // Physical Damage Rate
    pdr: {
        get: function() {
            return this.sparam(6);
        },
        configurable: true
    },
    // Magic Damage Rate
    mdr: {
        get: function() {
            return this.sparam(7);
        },
        configurable: true
    },
    // Floor Damage Rate
    fdr: {
        get: function() {
            return this.sparam(8);
        },
        configurable: true
    },
    // EXperience Rate
    exr: {
        get: function() {
            return this.sparam(9);
        },
        configurable: true
    }
    */
});
Game_BattlerBase.prototype.initialize = function() {
    this.initMembers();
};
Game_BattlerBase.prototype.initMembers = function() {
    this._hp = 1;
    this._mp = 0;
    this._tp = 0;
    this._hidden = false;
    this.clearParamPlus();
    this.clearStates();
    this.clearBuffs();

    this.ClearTjsCustomVars();
};
Game_BattlerBase.prototype.ClearTjsCustomVars = function() {
    if (!this._fxPhysicalAttack) this._fxPhysicalAttack = 1.00000;
    if (!this._fxMagicalAttack) this._fxMagicalAttack = 1.00000;
    if (!this._fxPhysicalDefense) this._fxPhysicalDefense = 1.00000;
    if (!this._fxMagicalDefense) this._fxMagicalDefense = 1.00000;
    if (!this._fxHpDrain) this._fxHpDrain = 0.00000;
    if (!this._fxHpDrainElement) this._fxHpDrainElement = 1;
    if (!this._fxTurnsLeft) this._fxTurnsLeft = 0;
    // if (!this._fxTurnsLeftMax) this._fxTurnsLeftMax = 0;
};
Game_BattlerBase.prototype.ResetTjsCustomVars = function() {
    this._fxPhysicalAttack = 1.00000;
    this._fxMagicalAttack = 1.00000;
    this._fxPhysicalDefense = 1.00000;
    this._fxMagicalDefense = 1.00000;
    this._fxHpDrain = 0.00000;
    this._fxHpDrainElement = 1;
    this._fxTurnsLeft = 0;
    // this._fxTurnsLeftMax = 0;
};
Game_BattlerBase.prototype.DrainHpFromFx = function() {
    if ( this._fxTurnsLeft < 1 ) {
        this.ResetTjsCustomVars();
        return;
    }

    const drain = Math.round(this._fxHpDrain * this.elementRate(this._fxHpDrainElement));
    const rnd = Math.random() * 0.32500;
    this._fxPhysicalAttack = TJS_auto.Lerp( this._fxPhysicalAttack, 1.00000, rnd );
    this._fxMagicalAttack = TJS_auto.Lerp( this._fxMagicalAttack, 1.00000, rnd );
    this._fxPhysicalDefense = TJS_auto.Lerp( this._fxPhysicalDefense, 1.00000, rnd );
    this._fxMagicalDefense = TJS_auto.Lerp( this._fxMagicalDefense, 1.00000, rnd );
    this._hp -= drain;
    if (drain > 0) BattleManager._logWindow.addText( drain + " HP of " + TJS_auto.GetTextForElement(this._fxHpDrainElement) + " damage!" );
    this.refresh();

    this._fxTurnsLeft--;
    if ( this._fxTurnsLeft == 0 ) BattleManager._logWindow.addText( "Impairments have worn off!" );
};
Game_BattlerBase.prototype.SetFxTurnsLeft = function(turns) {
    this._fxTurnsLeft = turns;
};
Game_BattlerBase.prototype.param = function(paramId) {
    var value =
        this.paramBasePlus(paramId) *
        this.paramRate(paramId) *
        this.paramBuffRate(paramId);

    if (paramId == 2) value *= this._fxPhysicalAttack || 1;
    if (paramId == 6) value *= this._fxPhysicalAttack || 1;
    if (paramId == 4) value *= this._fxMagicalAttack || 1;
    // if (paramId == 1) value *= this._fxMagicalAttack || 1;
    if (paramId == 3) value *= this._fxPhysicalDefense || 1;
    if (paramId == 6) value *= this._fxPhysicalDefense || 1;
    if (paramId == 5) value *= this._fxMagicalDefense || 1;
    if (paramId == 7) value *= this._fxMagicalDefense || 1;

    const maxValue = this.paramMax(paramId);
    const minValue = this.paramMin(paramId);
    return Math.round(value.clamp(minValue, maxValue));
};
Game_BattlerBase.prototype.xparam = function(xparamId) {
    return this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);
};
Game_BattlerBase.prototype.sparam = function(sparamId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);
};
Game_BattlerBase.prototype.InflictFxPhysicalAttack = function(power) {
    if (!this._fxPhysicalAttack) this._fxPhysicalAttack = 1.00000;
    if (power < 1) return;
    this._fxPhysicalAttack = TJS_auto.Lerp(this._fxPhysicalAttack, Math.min(this._fxPhysicalAttack, 1.00000 / Math.max(power, 1.0)), Math.random());
};
Game_BattlerBase.prototype.InflictFxMagicalAttack = function(power) {
    if (!this._fxMagicalAttack) this._fxMagicalAttack = 1.00000;
    if (power < 1) return;
    this._fxMagicalAttack = TJS_auto.Lerp(this._fxMagicalAttack, Math.min(this._fxMagicalAttack, 1.00000 / Math.max(power, 1.0)), Math.random());
};
Game_BattlerBase.prototype.InflictFxPhysicalDefense = function(power) {
    if (!this._fxPhysicalDefense) this._fxPhysicalDefense = 1.00000;
    if (power < 1) return;
    this._fxPhysicalDefense = TJS_auto.Lerp(this._fxPhysicalDefense, Math.min(this._fxPhysicalDefense, 1.00000 / Math.max(power, 1.0)), Math.random());
};
Game_BattlerBase.prototype.InflictFxMagicalDefense = function(power) {
    if (!this._fxMagicalDefense) this._fxMagicalDefense = 1.00000;
    if (power < 1) return;
    this._fxMagicalDefense = TJS_auto.Lerp(this._fxMagicalDefense, Math.min(this._fxMagicalDefense, 1.00000 / Math.max(power, 1.0)), Math.random());
};
Game_BattlerBase.prototype.InflictFxHpDrain = function(drain, elementId) {
    this._fxHpDrain = drain;
    this._fxHpDrainElement = elementId;
};
Game_BattlerBase.prototype.GetDp = function() {
    var pct = this._hp / this.param(0);
    // pct = 1.00000 - pct;
    // pct = Math.pow(pct, 2.00000);
    // pct = 1.00000 - pct;
    pct *= tjs_combat_hp_dampening_inverse;
    pct = 1.00000 - pct;

    return pct * tjs_battle_master_damage_taken_adjust_enemy;
};
Game_BattlerBase.prototype.GetLevelMultiplierForEquip = function(slot_index) {
    return 0.00000;
};
Game_BattlerBase.prototype.GetModifiedMagicPointCost = function(equip_slot_index, mp_base_cost) {
    return mp_base_cost;
};
Game_BattlerBase.prototype.lerp = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, 0.00000 );
};
Game_BattlerBase.prototype.lerp0 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(0) );
};
Game_BattlerBase.prototype.lerp2 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(2) );
};
Game_BattlerBase.prototype.lerp3 = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, this.GetLevelMultiplierForEquip(3) );
};
Game_BattlerBase.prototype.e0 = function(multiplier) {
    return this.GetLevelMultiplierForEquip(0) * multiplier;
};
Game_BattlerBase.prototype.e2 = function(multiplier) {
    return this.GetLevelMultiplierForEquip(2) * multiplier;
};
Game_BattlerBase.prototype.e3 = function(multiplier) {
    return this.GetLevelMultiplierForEquip(3) * multiplier;
};
Game_BattlerBase.prototype.pa = function(multiplier, equip_index=-1, level_multiplier=800) {
    // return (this.pa1 * multiplier * 0.01) + (this.GetLevelMultiplierForEquip(equip_index) * level_multiplier * 0.01);
    return this.pa1 * ((multiplier * 0.01000) + (this.GetLevelMultiplierForEquip(equip_index) * multiplier * 0.03000));
};
Game_BattlerBase.prototype.ma = function(multiplier, equip_index=-1, level_multiplier=800) {
    // return (this.ma1 * multiplier * 0.01) + (this.GetLevelMultiplierForEquip(equip_index) * level_multiplier * 0.01);
    return this.ma1 * ((multiplier * 0.01000) + (this.GetLevelMultiplierForEquip(equip_index) * multiplier * 0.03000));
};
Game_BattlerBase.prototype.ca = function(multiplier, equip_index=-1, level_multiplier=800) {
    // return (this.ca1 * multiplier * 0.01) + (this.GetLevelMultiplierForEquip(equip_index) * level_multiplier * 0.01);
    return this.ca1 * ((multiplier * 0.01000) + (this.GetLevelMultiplierForEquip(equip_index) * multiplier * 0.03000));
};
Game_BattlerBase.prototype.pd = function(multiplier) {
    return this.pd1 * multiplier * 0.01000;
};
Game_BattlerBase.prototype.md = function(multiplier) {
    return this.md1 * multiplier * 0.01000;
};
Game_BattlerBase.prototype.cd = function(multiplier) {
    return this.cd1 * multiplier * 0.01000;
};
Game_BattlerBase.prototype.ratio = function(attacker_value, defender_value) {
    var total = attacker_value + defender_value;
    var d = defender_value;
    if ( total > 1 ) {
        d /= total;
    } else {
        d = 1;
    }

    return 1.0 - d;
};
Game_BattlerBase.prototype.hasSkill = function(skillId) {
    // return this.skills().includes($dataSkills[skillId]);
    return false;
};
Game_BattlerBase.prototype.maxTp = function() {
    /*
    var params = PluginManager.parameters('TJS_AltMenus');
    var halfZarakiteState = Number(params['State, half zarakite race']);
    var halfZarakiteTpMax = Number(params['SP, half zarakite race']);
    var zarakiteState = Number(params['State, zarakite race']);
    var zarakiteTpMax = Number(params['SP, zarakite race']);
    */

    var value = 100;

    if ( this.isStateAffected(tjs_halfZarakiteState) ) { value = tjs_halfZarakiteTpMax; }
    if ( this.isStateAffected(tjs_halfZarakiteStateF) ) { value = tjs_halfZarakiteFTpMax; }
    if ( this.isStateAffected(tjs_zarakiteState) ) { value = tjs_zarakiteTpMax; }

    return value;
};
Game_BattlerBase.prototype.skillTpCost = function(skill) {
    var cost = skill.tpCost;

    if ( $dataSkills[skill.id].meta ) {
        if ( $dataSkills[skill.id].meta.tjsSpCost ) cost = Number($dataSkills[skill.id].meta.tjsSpCost);
        if ( $dataSkills[skill.id].meta.tjsNpCost ) cost = Number($dataSkills[skill.id].meta.tjsNpCost);
    }

    return cost;
};
// New
Game_BattlerBase.prototype.ValueByLevel = function(vMin, vMax, skew) {
    var lvl = (this.level - 1) / (tjs_max_character_level - 1.00000);
    if (skew < 0) {
        var lvl2 = lvl * lvl;
        lvl = (lvl * (1 + skew)) + (lvl2 * -skew);
    }
    else if (skew > 0) {
        var lvl2 = 1.00000 - lvl;
        lvl2 = lvl2 * lvl2 * lvl2;
        lvl2 = 1.00000 - lvl2;
        lvl = (lvl * (1 - skew)) + (lvl2 * skew);
    }

    return (vMin * (1.00000 - lvl)) + (vMax * lvl);
};
Game_BattlerBase.prototype.actionPlusSet = function() {
    var ar = this.traits(Game_BattlerBase.TRAIT_ACTION_PLUS).map(
        trait => trait.value
    );

    // Race
    if ( this.hasSkill(tjs_skill_race_male_halfZarakite) && (!this.isStateAffected(tjs_decapitatedState)) ) {
        var v1 = 1;
        var v2 = this.ValueByLevel(0.500, 0.9925, 1.00);
        var v3 = this.ValueByLevel(0.325, 0.9500, 0.75);
        var v4 = this.ValueByLevel(0.250, 0.9000, 0.50);
        var v5 = this.ValueByLevel(0.125, 0.8500, 0.25);
        var v6 = this.ValueByLevel(0.064, 0.8000, 0.12);
        var c = Math.round(this.ValueByLevel(2, 6, 0.500));
        if (c > 0.1) ar.push(v1);
        if (c > 1.1) ar.push(v2);
        if (c > 2.1) ar.push(v3);
        if (c > 3.1) ar.push(v4);
        if (c > 4.1) ar.push(v5);
        if (c > 5.1) ar.push(v6);
    }
    else if ( this.hasSkill(tjs_skill_race_female_halfZarakite) && (!this.isStateAffected(tjs_decapitatedState)) ) {
        var v1 = this.ValueByLevel(0.500, 0.750, 0);
        ar.push(v1);
    }

    // Class
    if ( this.hasSkill(tjs_skill_class_warrior) ) {
        var v1 = this.ValueByLevel(0.750, 1.000, 1.00);
        var v2 = this.ValueByLevel(0.640, 0.975, 0.50);
        var v3 = this.ValueByLevel(0.500, 0.950, 0.35);
        var v4 = this.ValueByLevel(0.400, 0.900, 0.25);
        var v5 = this.ValueByLevel(0.300, 0.850, 0.12);
        var v6 = this.ValueByLevel(0.200, 0.800, 0.00);
        var v7 = this.ValueByLevel(0.100, 0.750, -0.05);
        var v8 = this.ValueByLevel(0.050, 0.700, -0.12);
        var v9 = this.ValueByLevel(0.025, 0.650, -0.25);
        var c = Math.round(this.ValueByLevel(2, 9, 0.640));
        if (c > 0.1) ar.push(v1);
        if (c > 1.1) ar.push(v2);
        if (c > 2.1) ar.push(v3);
        if (c > 3.1) ar.push(v4);
        if (c > 4.1) ar.push(v5);
        if (c > 5.1) ar.push(v6);
        if (c > 6.1) ar.push(v7);
        if (c > 7.1) ar.push(v8);
        if (c > 8.1) ar.push(v9);
    }
    else if ( this.hasSkill(tjs_skill_class_warrior_dual) ) {
        var v1 = this.ValueByLevel(0.725, 0.975, 0.95);
        var v2 = this.ValueByLevel(0.625, 0.950, 0.45);
        var v3 = this.ValueByLevel(0.400, 0.900, 0.32);
        var v4 = this.ValueByLevel(0.300, 0.850, 0.20);
        var v5 = this.ValueByLevel(0.200, 0.800, 0.10);
        var v6 = this.ValueByLevel(0.100, 0.750, -0.05);
        var v7 = this.ValueByLevel(0.075, 0.700, -0.10);
        var v8 = this.ValueByLevel(0.040, 0.650, -0.15);
        var v9 = this.ValueByLevel(0.020, 0.600, -0.30);
        var c = Math.round(this.ValueByLevel(2, 9, 0.600));
        if (c > 0.1) ar.push(v1);
        if (c > 1.1) ar.push(v2);
        if (c > 2.1) ar.push(v3);
        if (c > 3.1) ar.push(v4);
        if (c > 4.1) ar.push(v5);
        if (c > 5.1) ar.push(v6);
        if (c > 6.1) ar.push(v7);
        if (c > 7.1) ar.push(v8);
        if (c > 8.1) ar.push(v9);
    }
    else if ( this.hasSkill(tjs_skill_class_wizard) ) {
        var v1 = this.ValueByLevel(0.053, 0.640, 0.165);
        var v2 = this.ValueByLevel(0.015, 0.400, -0.200);
        var c = Math.round(this.ValueByLevel(1, 2, 0.195));
        if (c > 0.1) ar.push(v1);
        if (c > 1.1) ar.push(v2);
    }
    else if ( this.hasSkill(tjs_skill_class_witch) ) {
        var v1 = this.ValueByLevel(0.250, 0.920, 0.64);
        var v2 = this.ValueByLevel(0.160, 0.850, 0.50);
        var v3 = this.ValueByLevel(0.080, 0.750, 0.20);
        var v4 = this.ValueByLevel(0.070, 0.640, 0.01);
        var v5 = this.ValueByLevel(0.060, 0.600, -0.04);
        var v6 = this.ValueByLevel(0.050, 0.500, -0.08);
        var c = Math.round(this.ValueByLevel(1, 6, 0.400));
        if (c > 0.1) ar.push(v1);
        if (c > 1.1) ar.push(v2);
        if (c > 2.1) ar.push(v3);
        if (c > 3.1) ar.push(v4);
        if (c > 4.1) ar.push(v5);
        if (c > 5.1) ar.push(v6);
    }
    else if ( this.hasSkill(tjs_skill_class_thief) ) {
        var v1 = this.ValueByLevel(0.125, 0.7225, 0.400);
        var v2 = this.ValueByLevel(0.090, 0.5750, 0.200);
        var v3 = this.ValueByLevel(0.025, 0.4125, 0.000);
        var v4 = this.ValueByLevel(0.010, 0.3125, -0.200);
        var c = Math.round(this.ValueByLevel(1, 4, 0.250));
        if (c > 0.1) ar.push(v1);
        if (c > 1.1) ar.push(v2);
        if (c > 2.1) ar.push(v3);
        if (c > 3.1) ar.push(v4);
    }

    return ar;
};
//-----------------------------------------------------------------------------
// TjsMapData
//-----------------------------------------------------------------------------
// Example metadata:
// <tjsFoodSteps:800>
// <tjsHuntSmall:0>
// <tjsHuntLarge:0>
// <tjsDecapBase:0.010>
// <tjsSuppressDecapOff>
// <tjsSuppressDecapOn>
// <tjsShirtOff>
// <tjsShirtOn>
//-----------------------------------------------------------------------------
function TjsMapData() {
	this.Initialize.apply(this, arguments);
};
TjsMapData.prototype.Initialize = function() {
    this.SetDefaults();
};
TjsMapData.prototype.SetDefaults = function() {
	this._foodSteps = 500;
	this._huntChanceSmall = 0;
	this._huntChanceLarge = 0;
	this._decapBase = 0.00000;
	this._suppressDecap = false;
	this._shirtOff = true;
	this._scale = 1;
};
TjsMapData.prototype.CopyFrom = function(other) {
    if (!other) return;

	this._foodSteps = other._foodSteps;
	this._huntChanceSmall = other._huntChanceSmall;
	this._huntChanceLarge = other._huntChanceLarge;
	this._decapBase = other._decapBase;
	this._suppressDecap = other._suppressDecap;
	this._shirtOff = other._shirtOff;
	this._scale = other._scale;
};
TjsMapData.prototype.ReadFromMeta = function() {
    this.SetDefaults();

    if (!$dataMap.meta) return;

	if ($dataMap.meta.tjsFoodSteps) this._foodSteps = Number($dataMap.meta.tjsFoodSteps);
	if ($dataMap.meta.tjsHuntSmall) this._huntChanceSmall = Number($dataMap.meta.tjsHuntSmall);
	if ($dataMap.meta.tjsHuntLarge) this._huntChanceLarge = Number($dataMap.meta.tjsHuntLarge);
	if ($dataMap.meta.tjsDecapBase) this._decapBase = Number($dataMap.meta.tjsDecapBase);
	if ($dataMap.meta.tjsSuppressDecapOff) this._suppressDecap = false;
	if ($dataMap.meta.tjsSuppressDecapOn) this._suppressDecap = true;
	if ($dataMap.meta.tjsShirtOff) this._shirtOff = true;
	if ($dataMap.meta.tjsShirtOn) this._shirtOff = false;
	if ($dataMap.meta.tjsScale) this._scale = Number( $dataMap.meta.tjsScale );
};
TjsMapData.prototype.UpdateGameVars = function() {
    $gameVariables.setValue( tjs_var_steps_food_use, Number(this._foodSteps) );
    $gameVariables.setValue( tjs_hunting_chance_small, Number(this._huntChanceSmall) );
    $gameVariables.setValue( tjs_hunting_chance_large, Number(this._huntChanceLarge) );
    $gameVariables.setValue( tjs_var_decap_base, Number(this._decapBase) );
    $gameVariables.setValue( tjs_var_decap_chance, Number(this._decapBase) * Number($gameVariables.value(tjs_var_decap_modifier)) * 0.01000 );
    $gameSwitches.setValue( tjs_switch_suppress_decap, Boolean(this._suppressDecap) );
    $gameSwitches.setValue( tjs_switch_wearing_shirt, Boolean(!this._shirtOff) );

    /*
    var x = $gamePlayer.screenX();
    var y = $gamePlayer.screenY();
    $gameScreen.setZoom(x, y, this._scale);
    */

    if ( !$gameParty.members()[0].isStateAffected(tjs_decapitatedState) ) {
        if ( $gameSwitches.value(tjs_switch_wearing_shirt) == false ) {
            if ( $gameParty.members()[0].isStateAffected(tjs_state_concealed_skin_tone) ) {
                $gameParty.members()[0].setCharacterImage('walking_Daniel2', 6);
                $gameParty.members()[0].setFaceImage('face_Daniel2', 6);
                $gamePlayer.refresh();
            } else {
                $gameParty.members()[0].setCharacterImage('walking_Daniel1', 4);
                $gameParty.members()[0].setFaceImage('face_Daniel1', 4);
                $gamePlayer.refresh();
            }
        } else {
            if ( $gameParty.members()[0].isStateAffected(tjs_state_concealed_skin_tone) ) {
                $gameParty.members()[0].setCharacterImage('walking_Daniel1', 6);
                $gameParty.members()[0].setFaceImage('face_Daniel1', 6);
                $gamePlayer.refresh();
            } else {
                $gameParty.members()[0].setCharacterImage('walking_Daniel1', 0);
                $gameParty.members()[0].setFaceImage('face_Daniel1', 0);
                $gamePlayer.refresh();
            }
        }
    }
};
//-----------------------------------------------------------------------------
// Game_Map
//
// The game object class for a map. It contains scrolling and passage
// determination functions.
Game_Map.prototype.initialize = function() {
    this._interpreter = new Game_Interpreter();
    this._mapId = 0;
    this._tilesetId = 0;
    this._events = [];
    this._commonEvents = [];
    this._vehicles = [];
    this._displayX = 0;
    this._displayY = 0;
    this._nameDisplay = true;
    this._scrollDirection = 2;
    this._scrollRest = 0;
    this._scrollSpeed = 4;
    this._parallaxName = "";
    this._parallaxZero = false;
    this._parallaxLoopX = false;
    this._parallaxLoopY = false;
    this._parallaxSx = 0;
    this._parallaxSy = 0;
    this._parallaxX = 0;
    this._parallaxY = 0;
    this._battleback1Name = null;
    this._battleback2Name = null;
    this.createVehicles();

    // Custom TJS Stuff
    // this._TjsMapData = new TjsMapData();
};
Game_Map.prototype.setup = function(mapId) {
    if (!$dataMap) {
        throw new Error("The map data is not available");
    }
    this._mapId = mapId;
    this._tilesetId = $dataMap.tilesetId;
    this._displayX = 0;
    this._displayY = 0;
    this.refereshVehicles();
    this.setupEvents();
    this.setupScroll();
    this.setupParallax();
    this.setupBattleback();
    this._needsRefresh = false;

    // if (!this._TjsMapData) this._TjsMapData = new TjsMapData();
    // if ($dataMap.meta) this._TjsMapData.ReadFromMeta();
    // this._TjsMapData.UpdateGameVars();

    TJS_auto.CheckValuesAndInitIfNeeded();
    TJS_map.ReadFromMeta();
    TJS_map.UpdateGameVars();
};
//-----------------------------------------------------------------------------
// TJS
//-----------------------------------------------------------------------------
function TJS() {
	this.initialize.apply(this, arguments);
	this.registerPluginCommands();
}
TJS.prototype.initialize = function() {
    this._currentTargetedActor = -1;

	// this.registerPluginCommands();
};
// Utility
TJS.prototype.Avg = function(a, b) {
    return (a + b) * 0.5;
};
TJS.prototype.Lerp = function(a, b, towards_b) {
    return (a * (1.00000 - towards_b)) + (b * towards_b);
};
TJS.prototype.LerpSkew = function(a, b, towards_b, skew_factor) {
    const towardsB = Math.max(Math.min(towards_b, 1.00000), 0.00000);

    if ( skew_factor > 0 ) {
        const skewed = 1.00000 - ((1.00000 - towardsB) * (1.00000 - towardsB) * (1.00000 - towardsB));
        const lerpA = (a * (1.00000 - towardsB)) + (b * towardsB);
        const lerpB = (a * (1.00000 - skewed)) + (b * skewed);
        return (lerpA * (1.00000 - skew_factor)) + (lerpB * skew_factor);
    }
    else if ( skew_factor < 0 ) {
        const skewed = towardsB * towardsB * towardsB;
        const lerpA = (a * (1.00000 - towardsB)) + (b * towardsB);
        const lerpB = (a * (1.00000 - skewed)) + (b * skewed);
        return (lerpA * (1.00000 + skew_factor)) + (lerpB * -skew_factor);
    }
    return (a * (1.00000 - towardsB)) + (b * towardsB);
};
TJS.prototype.GetNumberOfDigits = function(value) {
    return Math.max(Math.floor(Math.log10(Math.abs(Math.round(Number( value ))))), 0) + 1;
};
TJS.prototype.WaitUntilButtonPressed = function() {
    var readyToContinue = 0;

    while ( readyToContinue == 0 ) {
        if ( (Input.isPressed('ok')) || (TouchInput.isPressed()) ) readyToContinue = 0;
        else readyToContinue = 1;
    }

    while ( readyToContinue == 0 ) {
        if ( (!Input.isPressed('ok')) && (!TouchInput.isPressed()) ) readyToContinue = 0;
        else readyToContinue = 1;
    }
};
TJS.prototype.GetElementIDFromText = function(txt) {
    if ( txt === 'physical' ) return 1;
    else if ( txt === 'fire' ) return 2;
    else if ( txt === 'ice' ) return 3;
    else if ( txt === 'lightning' ) return 4;
    else if ( txt === 'water' ) return 5;
    else if ( txt === 'earth' ) return 6;
    else if ( txt === 'wind' ) return 7;
    else if ( txt === 'light' ) return 8;
    else if ( txt === 'dark' ) return 9;
    else if ( txt === 'mana' ) return 10;
    else if ( txt === 'acid' ) return 11;
    else if ( txt === 'poison' ) return 12;
    else if ( txt === 'psychic' ) return 13;
    else if ( txt === 'cyber' ) return 14;

    else if ( txt === 'flame' ) return 2;
    else if ( txt === 'cold' ) return 3;
    else if ( txt === 'snow' ) return 3;
    else if ( txt === 'thunder' ) return 4;
    else if ( txt === 'air' ) return 7;
    else if ( txt === 'lightness' ) return 8;
    else if ( txt === 'darkness' ) return 9;
    else if ( txt === 'mana force' ) return 10;
    else if ( txt === 'mental' ) return 13;
    else if ( txt === 'psi' ) return 13;
    else if ( txt === 'psionic' ) return 13;
    else if ( txt === 'toxin' ) return 12;
    else if ( txt === 'toxic' ) return 12;

    return -1;
};
TJS.prototype.GetTextForElement = function(element_index) {
    if (element_index >= 0) {
        if ( element_index < $dataSystem.elements.length ) return $dataSystem.elements[element_index];
    }

    return element_index;
};
TJS.prototype.GetAttackElementFromTraits = function(traits) {
    var element = -1;

    for (let i = 0; i < traits.length; i++) {
        if ( traits[i].code == 31 ) element = Number(traits[i].dataId);
    }

    return element;
};
// Ranger stuff
TJS.prototype.CheckIfAnyoneIsHunting = function() {
    var someoneIsHunting = false;
    for ( let i = 0; i < $gameParty.size(); i++ ) {
        for ( let s = 0; s < tjs_state_hunting.length; s++ ) {
            if ( $gameParty.members()[i].isStateAffected( Number(tjs_state_hunting[s]) ) == true ) {
                someoneIsHunting = true;
                break;
            }
        }

        if ( someoneIsHunting == true ) break;
    }

    $gameSwitches.setValue(tjs_someone_is_hunting, someoneIsHunting);
};
TJS.prototype.HuntSmallAnimals = function(times, chance) {
    var q = 0;

    for (let i = 0; i < times; i++) {
        if ( Math.random() < chance ) {
            const pick = Math.round( Math.random() * (tjs_meat_small.length - 1) );
            $gameParty.gainItem( $dataItems[ Number(tjs_meat_small[pick]) ], 1 );
            q += 1;
        }
    }

    return q;
};
TJS.prototype.HuntLargeAnimals = function(times, chance) {
    var q = 0;

    for (let i = 0; i < times; i++) {
        if ( Math.random() < chance ) {
            const pick = Math.round( Math.random() * (tjs_meat_large.length - 1) );
            $gameParty.gainItem( $dataItems[ Number(tjs_meat_large[pick]) ], 1 );
            q += 1;
        }
    }

    return q;
};
TJS.prototype.Hunt = function() {
    if ( $gameSwitches.value(tjs_someone_is_hunting) == false ) return;
    TJS_auto.CheckIfAnyoneIsHunting();
    if ( $gameSwitches.value(tjs_someone_is_hunting) == false ) {
        AudioManager.playSe({name: '- cst_pop', volume: 90, pitch: 100, pan: 0});
        return;
    }

    var q = 0;

    for ( let i = 0; i < $gameParty.size(); i++ ) {
        var actorIsHunting = 0;

        for ( let s = 0; s < tjs_state_hunting.length; s++ ) {
            if ( $gameParty.members()[i].isStateAffected( Number(tjs_state_hunting[s]) ) == true ) {
                actorIsHunting = s + 1;
            }
        }

        if ( actorIsHunting > 0 ) {
            const level_factor = ($gameParty.members()[i].level - 1) / (tjs_max_character_level - 1.00000);
            const chance_base_small = Math.random() * (0.01 + (level_factor * 0.02));
            const chance_base_large = Math.random() * (0.01 + (level_factor * 0.02));
            const chance_level = TJS_auto.Lerp( 0.49876, 8.00000, level_factor );
            const chance_small = chance_base_small * Number($gameVariables.value( Number(tjs_hunting_chance_small) )) * 0.20000;
            const chance_large = chance_base_large * Number($gameVariables.value( Number(tjs_hunting_chance_large) )) * 0.20000;
            const times = Math.round( 1 + (actorIsHunting * chance_level) );

            q += TJS_auto.HuntSmallAnimals( times, chance_small );
            q += TJS_auto.HuntLargeAnimals( times, chance_large );

            if ( q > 0 ) AudioManager.playSe({name: '- cst_triangle', volume: 90, pitch: 100, pan: 0});
        }
    }
};
TJS.prototype.pluginCommand_SetHuntingActive = function(args) {
    $gameSwitches.setValue(tjs_someone_is_hunting, true);
};
TJS.prototype.pluginCommand_SetHuntingChances = function(args) {
    $gameVariables.setValue( tjs_hunting_chance_small, Number(args.ChancesSmall) )
    $gameVariables.setValue( tjs_hunting_chance_large, Number(args.ChancesLarge) )
};
// EXP and leveling
TJS.prototype.AwardPartyExp = function(amount) {
    for ( let i = 0; i < $gameParty.members().length; i++ ) {
        // $gameParty.members()[i].gainExp( amount * $gameParty.members()[i].sparam(9) );
        $gameParty.members()[i].gainExp( amount );
    }
};
TJS.prototype.GetHighestLevelOfPartyMembers = function() {
    var lvl = 1;
    for ( let i = 0; i < $gameParty.members().length; i++ ) {
        const v = $gameParty.members()[i].level;
        if ( v > lvl ) lvl = v;
    }

    return lvl;
};
TJS.prototype.GetHighestExpToLevelUpOfPartyMembers = function() {
    var xpToGo = 0;
    for ( let i = 0; i < $gameParty.members().length; i++ ) {
        // const v = $gameParty.members()[i].currentExp();
        var r = $gameParty.members()[i].sparam(9);
        if ( r < 0.02 ) r = 1;
        const v = Math.ceil( $gameParty.members()[i].nextRequiredExp() / r );
        if ( v > xpToGo ) xpToGo = v;
    }

    return xpToGo;
};
TJS.prototype.AdvancePartyToLevel = function(new_level) {
    const levelsToGo = new_level - TJS_auto.GetHighestLevelOfPartyMembers();

    if ( levelsToGo < 1 ) return Number(0);

    var expIncreaseAmount = Number(0);
    for ( let lv = 0; lv < levelsToGo; lv++ ) {
        const currentHighestLevel = TJS_auto.GetHighestLevelOfPartyMembers();
        if ( currentHighestLevel >= new_level ) break;

        const value = TJS_auto.GetHighestExpToLevelUpOfPartyMembers() + 0.55;
        expIncreaseAmount += value;
        TJS_auto.AwardPartyExp(value);
    }

    return expIncreaseAmount;
};
TJS.prototype.pluginCommand_AdvancePartyToLevel = function(args) {
    const newLevel = Number(args.NewLevel);
    const varId = Number(args.Variable);
    const showWindow = (!!args.ShowCustomWindow);

    const v = TJS_auto.AdvancePartyToLevel( newLevel );
    if ( v > 0 ) Game_Interpreter.prototype.setWaitMode.call(this, 'message');
    if ( v > 0 ) $gameMessage.clear();

    if ( showWindow == true ) {
        if ( v < 1 ) return;

        const txt = "The party has been awarded " + Math.round(v) + " Experience Points.\n\n" +
        "Some party members may have leveled up.";
        $gameMessage.setBackground(1);
        $gameMessage.setPositionType(2);
        $gameMessage.add(txt);
        Game_Interpreter.prototype.setWaitMode.call(this, 'message');
    } else {
        $gameVariables.setValue(varId, v);
    }
};
TJS.prototype.pluginCommand_LevelPartyToVariable = function(args) {
    var newLevelVar = Math.round($gameVariables.value( Math.round(Number(args.NewLevelVar)) ));
    if (newLevelVar > tjs_max_character_level) newLevelVar = tjs_max_character_level;
    if (newLevelVar < 1) newLevelVar = 1;

    const v = TJS_auto.AdvancePartyToLevel( newLevelVar );
    if ( v > 0 ) Game_Interpreter.prototype.setWaitMode.call(this, 'message');
    if ( v > 0 ) $gameMessage.clear();

    if ( v < 1 ) return;

    const txt = "The party has been awarded " + Math.round(v) + " Experience Points.\n\n" +
        "Some party members may have leveled up.";
    $gameMessage.setBackground(1);
    $gameMessage.setPositionType(2);
    $gameMessage.add(txt);
    Game_Interpreter.prototype.setWaitMode.call(this, 'message');
};
// Thief stuff
TJS.prototype.CalculateThiefChanceOfSuccess = function(thief_level, thief_detection_level, trap_level, starting_chance) {
    var chance = starting_chance * 0.0001;

    var chance_skewed = 1.00000 - chance;
    chance_skewed *= chance_skewed;
    chance_skewed = 1.00000 - chance_skewed;
    chance = TJS_auto.Lerp(chance, chance_skewed, (thief_level-1) / (tjs_max_character_level - 1.00000));

    if ( thief_detection_level < trap_level ) {
        var diff = trap_level - thief_detection_level;
        var fac = Math.pow(1.62525, diff);
        chance /= fac;
    }
    if ( thief_detection_level > trap_level ) {
        var diff = thief_detection_level - trap_level;
        var fac = Math.pow(1.62525, diff);
        chance = 1.00000 - chance;
        chance /= fac;
        chance = 1.00000 - chance;
    }

    return chance;
};
TJS.prototype.CheckIfDetectedTrap = function(actor_index, trap_level, starting_chance) {
    var detection_level = 0;
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_traps_1) ) { detection_level = 1; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_traps_2) ) { detection_level = 2; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_traps_3) ) { detection_level = 3; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_traps_4) ) { detection_level = 4; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_traps_5) ) { detection_level = 5; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_traps_6) ) { detection_level = 6; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_traps_7) ) { detection_level = 7; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_traps_8) ) { detection_level = 8; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_traps_9) ) { detection_level = 9; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_traps_10) ) { detection_level = 10; }

    if ( detection_level == 0 ) { return 0; }

    var chance = TJS_auto.CalculateThiefChanceOfSuccess( $gameParty.members()[actor_index].level, detection_level, trap_level, starting_chance );
    var randValue = Math.random();
    if ( randValue < chance ) { return 1; }
    return 0;
};
TJS.prototype.CheckIfDetectedDoor = function(actor_index, door_level, starting_chance) {
    var detection_level = 0;
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_doors_1) ) { detection_level = 1; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_doors_2) ) { detection_level = 2; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_doors_3) ) { detection_level = 3; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_doors_4) ) { detection_level = 4; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_doors_5) ) { detection_level = 5; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_doors_6) ) { detection_level = 6; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_doors_7) ) { detection_level = 7; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_doors_8) ) { detection_level = 8; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_doors_9) ) { detection_level = 9; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_detect_doors_10) ) { detection_level = 10; }

    if ( detection_level == 0 ) { return 0; }

    var chance = TJS_auto.CalculateThiefChanceOfSuccess( $gameParty.members()[actor_index].level, detection_level, door_level, starting_chance );
    var randValue = Math.random();
    if ( randValue < chance ) { return 1; }
    return 0;
};
TJS.prototype.CheckIfOpenedLock = function(actor_index, lock_level, starting_chance) {
    var detection_level = 0;
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_open_locks_1) ) { detection_level = 1; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_open_locks_2) ) { detection_level = 2; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_open_locks_3) ) { detection_level = 3; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_open_locks_4) ) { detection_level = 4; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_open_locks_5) ) { detection_level = 5; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_open_locks_6) ) { detection_level = 6; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_open_locks_7) ) { detection_level = 7; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_open_locks_8) ) { detection_level = 8; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_open_locks_9) ) { detection_level = 9; }
    if ( $gameParty.members()[actor_index].isStateAffected(tjs_state_open_locks_10) ) { detection_level = 10; }

    if ( detection_level == 0 ) { return 0; }

    var chance = TJS_auto.CalculateThiefChanceOfSuccess( $gameParty.members()[actor_index].level, detection_level, lock_level, starting_chance );
    var randValue = Math.random();
    if ( randValue < chance ) { return 1; }
    return -1;
};
TJS.prototype.CheckIfThingHacked = function(actor_index, thing_level, starting_chance) {
    var detection_level = 0;
    for (let i = 0; i < tjs_state_hack_tools.length; i++) {
        if ( $gameParty.members()[actor_index].isStateAffected(Number(tjs_state_hack_tools[i])) ) { detection_level = i+1; }
    }

    if ( detection_level == 0 ) { return 0; }

    var chance = TJS_auto.CalculateThiefChanceOfSuccess( $gameParty.members()[actor_index].level, detection_level, thing_level, starting_chance );
    var randValue = Math.random();
    if ( randValue < chance ) { return 1; }
    return -1;
};
TJS.prototype.CheckWhoFoundTrap = function(args) {
    const trapLevel = Number(args.TrapLevel);
    const chance = Number(args.Chance);
    const varId = Number(args.Variable);

    var party_member_who_succeeded = 0;
    for (let i = 0; i < $gameParty.size(); i++) {
        party_member_who_succeeded = TJS_auto.CheckIfDetectedTrap(i, trapLevel, chance) * (i + 1);
        if ( party_member_who_succeeded > 0 ) { break; }
    }

    $gameVariables.setValue(varId, party_member_who_succeeded);
};
TJS.prototype.CheckWhoFoundDoor = function(args) {
    const doorLevel = Number(args.DoorLevel);
    const chance = Number(args.Chance);
    const varId = Number(args.Variable);

    var party_member_who_succeeded = 0;
    for (let i = 0; i < $gameParty.size(); i++) {
        party_member_who_succeeded = TJS_auto.CheckIfDetectedDoor(i, doorLevel, chance) * (i + 1);
        if ( party_member_who_succeeded > 0 ) { break; }
    }

    $gameVariables.setValue(varId, party_member_who_succeeded);
};
TJS.prototype.CheckWhoOpenedLock = function(args) {
    const lockLevel = Number(args.LockLevel);
    const chance = Number(args.Chance);
    const varId = Number(args.Variable);

    var party_member_who_succeeded = 0;
    for (let i = 0; i < $gameParty.size(); i++) {
        var newSuccess = TJS_auto.CheckIfOpenedLock(i, lockLevel, chance) * (i + 1);
        if ( newSuccess > 0 ) { party_member_who_succeeded = newSuccess;  break; }
        if ( newSuccess < 0 ) { party_member_who_succeeded = -1; }
        /*
        party_member_who_succeeded = TJS_auto.CheckIfOpenedLock(i, lockLevel, chance) * (i + 1);
        if ( party_member_who_succeeded > 0 ) { break; }
        if ( party_member_who_succeeded < 0 ) { party_member_who_succeeded = -1; }
        */
    }

    $gameVariables.setValue(varId, party_member_who_succeeded);
};
TJS.prototype.CheckWhoHackedThing = function(args) {
    const thingLevel = Number(args.ThingLevel);
    const chance = Number(args.Chance);
    const varId = Number(args.Variable);

    var party_member_who_succeeded = 0;
    for (let i = 0; i < $gameParty.size(); i++) {
        var newSuccess = TJS_auto.CheckIfThingHacked(i, thingLevel, chance) * (i + 1);
        if ( newSuccess > 0 ) { party_member_who_succeeded = newSuccess;  break; }
        if ( newSuccess < 0 ) { party_member_who_succeeded = -1; }
        /*
        party_member_who_succeeded = TJS_auto.CheckIfThingHacked(i, thingLevel, chance) * (i + 1);
        if ( party_member_who_succeeded > 0 ) { break; }
        if ( party_member_who_succeeded < 0 ) { party_member_who_succeeded = -1; }
        */
    }

    $gameVariables.setValue(varId, party_member_who_succeeded);
};
// Zarakite and half zarakite race / skill / state stuff
TJS.prototype.ApplyStatesForRaceToParty = function() {
    /*
    var params = PluginManager.parameters('TJS_AltMenus');
    var halfZarakiteSkills = JSON.parse(params['Skills, half-zarakite race']).slice();
    var halfZarakiteState = Number(params['State, half zarakite race']);
    var zarakiteSkills = JSON.parse(params['Skills, zarakite race']).slice();
    var zarakiteState = Number(params['State, zarakite race']);
    */

    for (let i = 0; i < $gameParty.size(); i++) {
        for (let hz = 0; hz < tjs_halfZarakiteSkills.length; hz++) {
            if ( $gameParty.members()[i].hasSkill(tjs_halfZarakiteSkills[hz]) ) { $gameParty.members()[i].addState(tjs_halfZarakiteState); }
        }
        for (let hz = 0; hz < tjs_halfZarakiteSkillsF.length; hz++) {
            if ( $gameParty.members()[i].hasSkill(tjs_halfZarakiteSkillsF[hz]) ) { $gameParty.members()[i].addState(tjs_halfZarakiteStateF); }
        }
        for (let z = 0; z < tjs_zarakiteSkills.length; z++) {
            if ( $gameParty.members()[i].hasSkill(tjs_zarakiteSkills[z]) ) { $gameParty.members()[i].addState(tjs_zarakiteState); }
        }
    }
};
TJS.prototype.ApplyMultipleActionStatesForClass = function(actor_index) {
    var index = Number(actor_index);

    $gameParty.members()[index].removeState(tjs_state_actions_nonwarrior);
    $gameParty.members()[index].removeState(tjs_state_actions_warrior_1);
    $gameParty.members()[index].removeState(tjs_state_actions_warrior_2);
    $gameParty.members()[index].removeState(tjs_state_actions_warrior_3);
    $gameParty.members()[index].removeState(tjs_state_actions_warrior_4);
    $gameParty.members()[index].removeState(tjs_state_actions_warrior_5);
    $gameParty.members()[index].removeState(tjs_state_actions_warrior_6);
    $gameParty.members()[index].removeState(tjs_state_actions_warrior_7);
    $gameParty.members()[index].removeState(tjs_state_actions_warrior_8);
    $gameParty.members()[index].removeState(tjs_state_actions_warrior_9);
    $gameParty.members()[index].removeState(tjs_state_actions_warrior_10);

    if ( $gameParty.members()[index].hasSkill(tjs_skill_actions_nonwarrior) ) { $gameParty.members()[index].addState(tjs_state_actions_nonwarrior); return; }

    if ( $gameParty.members()[index].hasSkill(tjs_skill_actions_warrior_10) ) { $gameParty.members()[index].addState(tjs_state_actions_warrior_10); return; }
    if ( $gameParty.members()[index].hasSkill(tjs_skill_actions_warrior_9) ) { $gameParty.members()[index].addState(tjs_state_actions_warrior_9); return; }
    if ( $gameParty.members()[index].hasSkill(tjs_skill_actions_warrior_8) ) { $gameParty.members()[index].addState(tjs_state_actions_warrior_8); return; }
    if ( $gameParty.members()[index].hasSkill(tjs_skill_actions_warrior_7) ) { $gameParty.members()[index].addState(tjs_state_actions_warrior_7); return; }
    if ( $gameParty.members()[index].hasSkill(tjs_skill_actions_warrior_6) ) { $gameParty.members()[index].addState(tjs_state_actions_warrior_6); return; }
    if ( $gameParty.members()[index].hasSkill(tjs_skill_actions_warrior_5) ) { $gameParty.members()[index].addState(tjs_state_actions_warrior_5); return; }
    if ( $gameParty.members()[index].hasSkill(tjs_skill_actions_warrior_4) ) { $gameParty.members()[index].addState(tjs_state_actions_warrior_4); return; }
    if ( $gameParty.members()[index].hasSkill(tjs_skill_actions_warrior_3) ) { $gameParty.members()[index].addState(tjs_state_actions_warrior_3); return; }
    if ( $gameParty.members()[index].hasSkill(tjs_skill_actions_warrior_2) ) { $gameParty.members()[index].addState(tjs_state_actions_warrior_2); return; }
    if ( $gameParty.members()[index].hasSkill(tjs_skill_actions_warrior_1) ) { $gameParty.members()[index].addState(tjs_state_actions_warrior_1); return; }
};
TJS.prototype.ApplyStatesForHeadAttachedHalfZarakite = function(actor_index) {
    var index = Number(actor_index);

    $gameParty.members()[index].removeState(tjs_state_head_attached_1);
    $gameParty.members()[index].removeState(tjs_state_head_attached_2);
    $gameParty.members()[index].removeState(tjs_state_head_attached_3);
    $gameParty.members()[index].removeState(tjs_state_head_attached_4);
    $gameParty.members()[index].removeState(tjs_state_head_attached_5);

    if ( index > 0 ) { return; }

    if ( index == 0 ) {
        if ( $gameParty.members()[index].isStateAffected(tjs_decapitatedState) ) { return; }
    }

    if ( $gameParty.members()[index].hasSkill(tjs_skill_head_attached_5) ) { $gameParty.members()[index].addState(tjs_state_head_attached_5); return; }
    if ( $gameParty.members()[index].hasSkill(tjs_skill_head_attached_4) ) { $gameParty.members()[index].addState(tjs_state_head_attached_4); return; }
    if ( $gameParty.members()[index].hasSkill(tjs_skill_head_attached_3) ) { $gameParty.members()[index].addState(tjs_state_head_attached_3); return; }
    if ( $gameParty.members()[index].hasSkill(tjs_skill_head_attached_2) ) { $gameParty.members()[index].addState(tjs_state_head_attached_2); return; }
    if ( $gameParty.members()[index].hasSkill(tjs_skill_head_attached_1) ) { $gameParty.members()[index].addState(tjs_state_head_attached_1); return; }
};
TJS.prototype.ApplyPartyMultiActionStatesForClasses = function() {
    /*
    for (let i = 0; i < $gameParty.size(); i++) {
        TJS_auto.ApplyMultipleActionStatesForClass(i);
    }

    TJS_auto.ApplyStatesForHeadAttachedHalfZarakite(0);
    */
};
// Healing at an Inn-type stuff
TJS.prototype.CalculateCostOfStayingAtInn = function(price_factor) {
    var priceFactor = Number(price_factor);
    const partySize = $gameParty.size();

    var costMax = 0;
    for (let i = 0; i < partySize; i++) {
        costMax += Number($gameParty.members()[i].mhp);
        costMax += Number($gameParty.members()[i].mmp);
        costMax += Number($gameParty.members()[i].maxTp());
    }

    var costInverted = 0;
    for (let i = 0; i < partySize; i++) {
        costInverted += Number($gameParty.members()[i].hp);
        costInverted += Number($gameParty.members()[i].mp);
        costInverted += Number($gameParty.members()[i].tp);
    }

    var totalLevels = 0;
    for (let i = 0; i < partySize; i++) {
        totalLevels += Number($gameParty.members()[i].level);
    }

    var cost = costMax - costInverted;
    cost *= priceFactor;
    cost /= 100;
    cost = Math.round(cost);
    cost += totalLevels;

    return cost;
};
TJS.prototype.HealAllAtInn = function() {
    $gameParty.members().forEach(function(actor) {
        actor.recoverAll();
    });

    TJS_auto.ApplyStatesForRaceToParty();

    $gameParty.members().forEach(function(actor) {
        actor.gainTp(50000);
    });

    TJS_auto.ApplyPartyMultiActionStatesForClasses();
};
// Plugin commands
TJS.prototype.registerPluginCommands = function() {
	PluginManager.registerCommand("TJS_AltMenus", "Get Actor TP", this.pluginCommand_GetTP);
	PluginManager.registerCommand("TJS_AltMenus", "Get Actor Max TP", this.pluginCommand_GetTpMax);
	PluginManager.registerCommand("TJS_AltMenus", "Get Actor TP from Max", this.pluginCommand_GetTP_FromMax);
	PluginManager.registerCommand("TJS_AltMenus", "Set Actor TP Gain", this.pluginCommand_GainTP);
	PluginManager.registerCommand("TJS_AltMenus", "Set Actor TP Gain from Variable", this.pluginCommand_GainTP_Var);

	PluginManager.registerCommand("TJS_AltMenus", "Apply States For Race", this.pluginCommand_ApplyStatesForRace);

	PluginManager.registerCommand("TJS_AltMenus", "Get Cost to Heal", this.pluginCommand_GetCostToHeal);
	PluginManager.registerCommand("TJS_AltMenus", "Heal Party", this.pluginCommand_HealParty);

	PluginManager.registerCommand("TJS_AltMenus", "Thief Detect Traps", this.CheckWhoFoundTrap);
	PluginManager.registerCommand("TJS_AltMenus", "Thief Detect Doors", this.CheckWhoFoundDoor);
	PluginManager.registerCommand("TJS_AltMenus", "Thief Open Locks", this.CheckWhoOpenedLock);
	PluginManager.registerCommand("TJS_AltMenus", "Thief Hack Thing", this.CheckWhoHackedThing);

	PluginManager.registerCommand("TJS_AltMenus", "Advance Party To Level", this.pluginCommand_AdvancePartyToLevel);
	PluginManager.registerCommand("TJS_AltMenus", "Level Party To Var", this.pluginCommand_LevelPartyToVariable);

	PluginManager.registerCommand("TJS_AltMenus", "Set Hunting Active", this.pluginCommand_SetHuntingActive);
	PluginManager.registerCommand("TJS_AltMenus", "Set Hunting Chances", this.pluginCommand_SetHuntingChances);

	PluginManager.registerCommand("TJS_AltMenus", "Show Class Choice List", this.pluginCommand_ChooseCharacterClassChoiceList);

	PluginManager.registerCommand("TJS_AltMenus", "Show BattleBG", this.pluginCommand_ShowBattleBG);
	PluginManager.registerCommand("TJS_AltMenus", "Hide BattleBG", this.pluginCommand_HideBattleBG);

	PluginManager.registerCommand("TJS_AltMenus", "Clear Chests", this.pluginCommand_ClearContentsOfTreasureChests);
	PluginManager.registerCommand("TJS_AltMenus", "Loot Chest", this.pluginCommand_LootChest);
	PluginManager.registerCommand("TJS_AltMenus", "Stock Chest Items", this.pluginCommand_AddItemsToTreasureChest);
	PluginManager.registerCommand("TJS_AltMenus", "Stock Chest Weapons", this.pluginCommand_AddWeaponsToTreasureChest);
	PluginManager.registerCommand("TJS_AltMenus", "Stock Chest Armors", this.pluginCommand_AddArmorsToTreasureChest);

	PluginManager.registerCommand("TJS_AltMenus", "Show Leader Class Choice List", this.pluginCommand_ChooseCharacterClassChoiceListLeader);
};
TJS.prototype.pluginCommand_ShowEncyclopedia = function(args) {
};
TJS.prototype.pluginCommand_ShowBattleBG = function(args) {
    /*
    const width = Math.floor((1000 * Graphics.width) / 816);
    const height = Math.floor((740 * Graphics.height) / 624);
    var x = (Graphics.width - width) / 2;
    var y = 0;
    if ($gameSystem.isSideView()) {
        y = Graphics.height - height;
    }
    const ratioX = width / 1000;
    const ratioY = height / 740;
    const scale = Math.max(ratioX, ratioY, 1.0);
    const scale_x = scale;
    const scale_y = scale;
    */

    var bg1 = 'gradient grey';
    var bg2 = 'none';

    if ($gameMap.battleback1Name()) {
        bg1 = $gameMap.battleback1Name();
        if ($gameMap.battleback2Name()) bg2 = $gameMap.battleback2Name();

        $gameScreen.showPicture(1, bg1, 0, -40, 0, 200, 200, 255, 0);
        if (bg2 !== 'none') $gameScreen.showPicture(2, bg2, 0, -40, 0, 200, 200, 255, 0);
        else $gameScreen.erasePicture(2);
    } else {
        $gameScreen.showPicture(1, bg1, 0, -40, 0, 200, 200, 255, 0);
        $gameScreen.erasePicture(2);
    }
};
TJS.prototype.pluginCommand_HideBattleBG = function(args) {
    $gameScreen.erasePicture(1);
    $gameScreen.erasePicture(2);
    $gameScreen.erasePicture(3);
    $gameScreen.erasePicture(10);
};
TJS.prototype.pluginCommand_GetTP = function(args) {
    const actorId = Number(args.Actor);
    const variableId = Number(args.Variable);
    const value = $gameActors.actor(actorId).tp;
    $gameVariables.setValue(variableId, Number(value));
};
TJS.prototype.pluginCommand_GetTpMax = function(args) {
    var actorId = Number(args.Actor);
    var variableId = Number(args.Variable);
    var value = Number($gameActors.actor(actorId).maxTp());
    $gameVariables.setValue(variableId, Number(value));
};
TJS.prototype.pluginCommand_GetTP_FromMax = function(args) {
    const actorId = Number(args.Actor);
    const variableId = Number(args.Variable);
    const value = $gameActors.actor(actorId).tp;

    var valueMax = $gameActors.actor(actorId).maxTp();

    var valueFromMax = Number(valueMax) - Number(value);

    $gameVariables.setValue(variableId, valueFromMax);
};
TJS.prototype.pluginCommand_GainTP = function(args) {
    const actorId = Number(args.Actor);
    const value = Number(args.Value);
    $gameActors.actor(actorId).gainTp(value);
};
TJS.prototype.pluginCommand_GainTP_Var = function(args) {
    var actorId = Number(args.Actor);
    var variableId = Number(args.Variable);
    var value = Number($gameVariables.value(variableId));
    $gameActors.actor(actorId).gainTp(value);
};
TJS.prototype.pluginCommand_ApplyRaceStates = function(args) {
    TJS_auto.ApplyStatesForRaceToParty();
};
TJS.prototype.pluginCommand_GetCostToHeal = function(args) {
    var priceFactor = Number(args.Price_Factor);
    var variableId = Number(args.Variable);

    var cost = TJS_auto.CalculateCostOfStayingAtInn(priceFactor);
    $gameVariables.setValue(variableId, cost);
};
TJS.prototype.pluginCommand_HealParty = function(args) {
    TJS_auto.HealAllAtInn();
};
TJS.prototype.pluginCommand_ApplyStatesForRace = function() {
    TJS_auto.ApplyStatesForRaceToParty();
    TJS_auto.ApplyPartyMultiActionStatesForClasses();
};
// Class selection
TJS.prototype.SetCharacterClass = function(partyMember, classIndex) {
    if ( (partyMember < 0) || (partyMember >= $gameParty.size()) ) return;

    var nClass = tjs_class_axe_master;
    var weaponIndex = tjs_weapon_hand_ax;

    if ( classIndex == tjs_class_axe_master ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_hand_ax;
    }
    else if ( classIndex == tjs_class_mage ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_staff;
    }
    else if ( classIndex == tjs_class_witch ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_longsword;
    }
    else if ( classIndex == tjs_class_wizard ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_staff;
    }
    else if ( classIndex == tjs_class_thief ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_longsword;
    }
    else if ( classIndex == tjs_class_ranger ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_dual_swords;
    }
    else if ( classIndex == tjs_class_axe_master_mage ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_hand_ax;
    }
    else if ( classIndex == tjs_class_axe_master_witch ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_hand_ax;
    }
    else if ( classIndex == tjs_class_axe_master_thief ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_hand_ax;
    }
    else if ( classIndex == tjs_class_mage_witch ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_longsword;
    }
    else if ( classIndex == tjs_class_thief_mage ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_longsword;
    }

    $gameParty.members()[partyMember].changeClass(nClass, false);
    $gameParty.gainItem($dataWeapons[weaponIndex], 5);
    $gameParty.members()[partyMember].changeEquipById(1, weaponIndex);
};
TJS.prototype.SetCharacterClassLeader = function(partyMember, classIndex) {
    if ( (partyMember < 0) || (partyMember >= $gameParty.size()) ) return;

    var nClass = tjs_class_greatsword_master;
    var weaponIndex = tjs_weapon_greatsword;

    if ( classIndex == tjs_class_greatsword_master ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_greatsword;
    }
    else if ( classIndex == tjs_class_greatsword_master_mage ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_greatsword;
    }
    else if ( classIndex == tjs_class_greatsword_master_witch ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_greatsword;
    }
    else if ( classIndex == tjs_class_greatsword_master_thief ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_greatsword;
    }

    $gameParty.members()[partyMember].changeClass(nClass, false);
    $gameParty.gainItem($dataWeapons[weaponIndex], 5);
    $gameParty.members()[partyMember].changeEquipById(1, weaponIndex);
};
TJS.prototype.pluginCommand_ChooseCharacterClassChoiceList = function(args) {
    var partyMemberIndex = Number(args.PartyMemberIndex);
    var windowLocation = Number(args.WindowLocation);

    const choiceListText = ["Axe Master","Combat Mage","Witch","Wizard","Thief","Ranger","Axe Master / Mage","Axe Master / Witch","Axe Master / Thief","Mage / Witch","Thief / Mage"];
    const choiceListValues = [tjs_class_axe_master,tjs_class_mage,tjs_class_witch,tjs_class_wizard,tjs_class_thief,tjs_class_ranger,tjs_class_axe_master_mage,tjs_class_axe_master_witch,tjs_class_axe_master_thief,tjs_class_mage_witch,tjs_class_thief_mage];

    var text_desc_1 = "No additional information is available about this individual.";
    var text_desc_2 = " ";
    var text_desc_3 = " ";
    var text_desc_4 = " ";
    var has_desc = false;
    var max_SP = 100;

    if ( $dataActors[partyMemberIndex+1].meta ) {
        if ( $dataActors[partyMemberIndex+1].meta.tjsMaxSP ) max_SP = Number( $dataActors[partyMemberIndex+1].meta.tjsMaxSP );
        if ( $dataActors[partyMemberIndex+1].meta.tjsMaxNp ) max_SP = Number( $dataActors[partyMemberIndex+1].meta.tjsMaxNp );

        if ( $dataActors[partyMemberIndex+1].meta.tjsInfo1 ) text_desc_1 = $dataActors[partyMemberIndex+1].meta.tjsInfo1;
        if ( $dataActors[partyMemberIndex+1].meta.tjsInfo2 ) text_desc_2 = $dataActors[partyMemberIndex+1].meta.tjsInfo2;
        if ( $dataActors[partyMemberIndex+1].meta.tjsInfo3 ) text_desc_3 = $dataActors[partyMemberIndex+1].meta.tjsInfo3;
        if ( $dataActors[partyMemberIndex+1].meta.tjsInfo4 ) text_desc_4 = $dataActors[partyMemberIndex+1].meta.tjsInfo4;
    }

    const actor = $gameParty.members()[partyMemberIndex];
    const text_name = "Name: " + TJS_auto.PadSpacesToLength( actor.name(), 24 ) + "    ";
    const text_race = "Race: " + TJS_auto.PadSpacesToLength( actor.nickname(), 24 ) + "    ";
    const text_learning_rate = "Learning (EXP) Rate: " + TJS_auto.PadSpacesToLength( String(Math.round(actor.exr * 300.00000)), 8 ) + "%    ";
    const text_max_SP = "Max Nutrition Points: " + TJS_auto.PadSpacesToLength( String(Math.round(max_SP)), 7 ) + "     ";

    const text_max_HP = "Hit Point Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.mhp), 7 ) + "%    ";
    const text_attack = "Attack Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.atk), 10 ) + "%    ";
    const text_hit_rate = "Hit Rate Bonus: " + TJS_auto.PadSpacesToLength( Math.round(actor.hit * 100.00000), 7 ) + "%    ";
    const text_crit_rate = "Critical Hit Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.cri * 100.00000), 4 ) + "%    ";

    const text_defense = "Physical Defense Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.def), 4 ) + "%    ";
    const text_agility = "Agility Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.agi), 13 ) + "%    ";
    const text_dodge = "Evasion Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.eva * 100.00000), 13 ) + "%    ";
    const text_luck = "Luck Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.luk), 16 ) + "%    ";

    const text_max_MP = "Magic Point Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.mhp), 6 ) + "%    ";
    const text_magic_effect = "Magic Effect Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.mat), 5 ) + "%    ";
    const text_magic_defense = "Magic Defense Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.mdf), 4 ) + "%    ";
    const text_magic_evasion = "Magic Evasion Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.mev * 100.00000), 4 ) + "%    ";

    const text_heal_rate = "Magic Heal Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.rec * 100.00000), 8 ) + "%";
    const text_potion_rate = "Potion Heal Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.pha * 100.00000), 7 ) + "%";
    const text_counterattack = "Counter Attack Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.cnt * 100.00000), 4 ) + "%";

    const text_window_1 =
        text_name +             text_max_HP +       text_defense +  text_max_MP +           text_heal_rate +        "\n" +
        text_race +             text_attack +       text_agility +  text_magic_effect +     text_potion_rate +      "\n" +
        text_learning_rate +    text_hit_rate +     text_dodge +    text_magic_defense +    text_counterattack +    "\n" +
        text_max_SP +           text_crit_rate +    text_luck +     text_magic_evasion      ;

    $gameMessage.setBackground(1);
    $gameMessage.setPositionType(2);
    $gameMessage.add(text_window_1);

    $gameMessage.setChoices(choiceListText, 0, -1);
    $gameMessage.setChoiceBackground(1);
    // $gameMessage.setChoicePositionType(windowLocation);
    $gameMessage.setChoicePositionType(1);
    $gameMessage.setChoiceCallback(n => {
        TJS_auto.SetCharacterClass(partyMemberIndex, choiceListValues[n]);
    });
    Game_Interpreter.prototype.setWaitMode.call(this, 'message');
};
TJS.prototype.pluginCommand_ChooseCharacterClassChoiceListLeader = function(args) {
    var partyMemberIndex = Number(args.PartyMemberIndex);
    var windowLocation = Number(args.WindowLocation);

    const choiceListText = ["Greatsword Master","Greatsword Master / Mage","Greatsword Master / Witch","Greatsword Master / Thief"];
    const choiceListValues = [tjs_class_greatsword_master,tjs_class_greatsword_master_mage,tjs_class_greatsword_master_witch,tjs_class_greatsword_master_thief];

    var text_desc_1 = "No additional information is available about this individual.";
    var text_desc_2 = " ";
    var text_desc_3 = " ";
    var text_desc_4 = " ";
    var has_desc = false;
    var max_SP = 100;

    if ( $dataActors[partyMemberIndex+1].meta ) {
        if ( $dataActors[partyMemberIndex+1].meta.tjsMaxSP ) max_SP = Number( $dataActors[partyMemberIndex+1].meta.tjsMaxSP );
        if ( $dataActors[partyMemberIndex+1].meta.tjsMaxNp ) max_SP = Number( $dataActors[partyMemberIndex+1].meta.tjsMaxNp );

        if ( $dataActors[partyMemberIndex+1].meta.tjsInfo1 ) text_desc_1 = $dataActors[partyMemberIndex+1].meta.tjsInfo1;
        if ( $dataActors[partyMemberIndex+1].meta.tjsInfo2 ) text_desc_2 = $dataActors[partyMemberIndex+1].meta.tjsInfo2;
        if ( $dataActors[partyMemberIndex+1].meta.tjsInfo3 ) text_desc_3 = $dataActors[partyMemberIndex+1].meta.tjsInfo3;
        if ( $dataActors[partyMemberIndex+1].meta.tjsInfo4 ) text_desc_4 = $dataActors[partyMemberIndex+1].meta.tjsInfo4;
    }

    const actor = $gameParty.members()[partyMemberIndex];
    const text_name = "Name: " + TJS_auto.PadSpacesToLength( actor.name(), 24 ) + "    ";
    const text_race = "Race: " + TJS_auto.PadSpacesToLength( actor.nickname(), 24 ) + "    ";
    const text_learning_rate = "Learning (EXP) Rate: " + TJS_auto.PadSpacesToLength( String(Math.round(actor.exr * 300.00000)), 8 ) + "%    ";
    const text_max_SP = "Max Nutrition Points: " + TJS_auto.PadSpacesToLength( String(Math.round(max_SP)), 7 ) + "     ";

    const text_max_HP = "Hit Point Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.mhp), 7 ) + "%    ";
    const text_attack = "Attack Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.atk), 10 ) + "%    ";
    const text_hit_rate = "Hit Rate Bonus: " + TJS_auto.PadSpacesToLength( Math.round(actor.hit * 100.00000), 7 ) + "%    ";
    const text_crit_rate = "Critical Hit Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.cri * 100.00000), 4 ) + "%    ";

    const text_defense = "Physical Defense Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.def), 4 ) + "%    ";
    const text_agility = "Agility Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.agi), 13 ) + "%    ";
    const text_dodge = "Evasion Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.eva * 100.00000), 13 ) + "%    ";
    const text_luck = "Luck Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.luk), 16 ) + "%    ";

    const text_max_MP = "Magic Point Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.mhp), 6 ) + "%    ";
    const text_magic_effect = "Magic Effect Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.mat), 5 ) + "%    ";
    const text_magic_defense = "Magic Defense Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.mdf), 4 ) + "%    ";
    const text_magic_evasion = "Magic Evasion Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.mev * 100.00000), 4 ) + "%    ";

    const text_heal_rate = "Magic Heal Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.rec * 100.00000), 8 ) + "%";
    const text_potion_rate = "Potion Heal Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.pha * 100.00000), 7 ) + "%";
    const text_counterattack = "Counter Attack Rate: " + TJS_auto.PadSpacesToLength( Math.round(actor.cnt * 100.00000), 4 ) + "%";

    const text_window_1 =
        text_name +             text_max_HP +       text_defense +  text_max_MP +           text_heal_rate +        "\n" +
        text_race +             text_attack +       text_agility +  text_magic_effect +     text_potion_rate +      "\n" +
        text_learning_rate +    text_hit_rate +     text_dodge +    text_magic_defense +    text_counterattack +    "\n" +
        text_max_SP +           text_crit_rate +    text_luck +     text_magic_evasion      ;

    $gameMessage.setBackground(1);
    $gameMessage.setPositionType(2);
    $gameMessage.add(text_window_1);

    $gameMessage.setChoices(choiceListText, 0, -1);
    $gameMessage.setChoiceBackground(1);
    // $gameMessage.setChoicePositionType(windowLocation);
    $gameMessage.setChoicePositionType(1);
    $gameMessage.setChoiceCallback(n => {
        TJS_auto.SetCharacterClassLeader(partyMemberIndex, choiceListValues[n]);
    });
    Game_Interpreter.prototype.setWaitMode.call(this, 'message');
};
TJS.prototype.PadSpacesToLength = function(inp, number_chars) {
    const startLength = String(inp).length;
    if (startLength >= number_chars) return String(inp);

    var str = String(inp);
    const numToAdd = number_chars - startLength;
    for (let i = 0; i < numToAdd; i++) {
        str = String( " " + str );
    }

    return str;
};
TJS.prototype.CheckValuesAndInitIfNeeded = function() {
    /*
    var weaponBreakingCount_read = $gameVariables.value(tjs_var_index_weapon_break_counts).slice();
    if ( Array.isArray(weaponBreakingCount_read) == false ) {
        var weaponBreakingCount = [];
        for (let i = 0; i < tjs_max_party_size; i++) {
            weaponBreakingCount.push(0);
        }

        $gameVariables.setValue(tjs_var_index_weapon_break_counts, weaponBreakingCount);
    }

    var gunBreakingCount_read = $gameVariables.value(tjs_var_index_gun_break_counts).slice();
    if ( Array.isArray(gunBreakingCount_read) == false ) {
        var gunBreakingCount = [];
        for (let i = 0; i < tjs_max_party_size; i++) {
            gunBreakingCount.push(0);
        }

        $gameVariables.setValue(tjs_var_index_gun_break_counts, gunBreakingCount);
    }
    */
};
TJS.prototype.GetWeaponBreakCount = function(party_member_index) {
    // TJS_auto.CheckValuesAndInitIfNeeded();

    // var weaponBreakingCount = $gameVariables.value(tjs_var_index_weapon_break_counts).slice();
    // var weaponBreakingCount = $gameSystem.weaponBreakingCount;
    // return Number( weaponBreakingCount[party_member_index] );
    return Number( $gameSystem.weaponBreakingCount[party_member_index] );
};
TJS.prototype.SetWeaponBreakCount = function(party_member_index, new_value) {
    // TJS_auto.CheckValuesAndInitIfNeeded();

    // var weaponBreakingCount = $gameVariables.value(tjs_var_index_weapon_break_counts).slice();
    $gameSystem.weaponBreakingCount[party_member_index] = new_value;
    // weaponBreakingCount[party_member_index] = new_value;
    // $gameVariables.setValue(tjs_var_index_weapon_break_counts, weaponBreakingCount);
};
TJS.prototype.IncrementWeaponBreakCount = function(party_member_index) {
    // TJS_auto.CheckValuesAndInitIfNeeded();

    // var weaponBreakingCount = $gameVariables.value(tjs_var_index_weapon_break_counts).slice();
    // if ( weaponBreakingCount[party_member_index] < 0 ) return;
    // weaponBreakingCount[party_member_index] += 1;
    // $gameVariables.setValue(tjs_var_index_weapon_break_counts, weaponBreakingCount);

    if ( $gameSystem.weaponBreakingCount[party_member_index] < 0 ) return;
    $gameSystem.weaponBreakingCount[party_member_index] += 1;
};
TJS.prototype.CheckWeaponBreak = function(party_member_index) {
    if ( party_member_index < 0 ) return;
    if ( !$gameParty.members()[party_member_index].weapons()[0] ) return;

    var itemId = $gameParty.members()[party_member_index].weapons()[0].id;
    if ( !$dataWeapons[itemId].meta ) return false;
    if ( $dataWeapons[itemId].meta.tjsWeaponDurability ) {
        TJS_auto.IncrementWeaponBreakCount(party_member_index);

        var durability = Number( $dataWeapons[itemId].meta.tjsWeaponDurability ) * tjs_multiplier_weapon_break_counts;
        var breakCount = TJS_auto.GetWeaponBreakCount(party_member_index);

        // console.log(breakCount);

        const chance = Math.max(2.00000 * ((breakCount / durability) - 0.50000), 0.00000);
        if ( Math.random() < chance ) {
            TJS_auto.SetWeaponBreakCount(party_member_index, 0);
            AudioManager.playSe({name: '- gunshot 3', volume: 95, pitch: 100, pan: 0});
            $gameParty.members()[party_member_index].forceChangeEquip(0, $dataWeapons[tjs_weapon_broken_weapon]);
            $gameParty.members()[party_member_index].addState(tjs_state_broken_weapon);

            return true;
        }
    }

    return false;
};
TJS.prototype.CheckGunBreak = function(party_member_index) {
    if ( party_member_index < 0 ) return;
    if ( !$gameParty.members()[party_member_index].equips()[2] ) return;

    var itemId = $gameParty.members()[party_member_index].equips()[2].id;
    if ( !$dataArmors[itemId].meta ) return false;
    if ( $dataArmors[itemId].meta.tjsGunDurability ) {
        if ($gameSystem.gunBreakingCount[party_member_index] > -1) $gameSystem.gunBreakingCount[party_member_index] += 1;

        var durability = Number( $dataArmors[itemId].meta.tjsGunDurability ) * tjs_multiplier_gun_break_counts;
        var breakCount = $gameSystem.gunBreakingCount[party_member_index];

        // console.log( "Party member: " + party_member_index + ", Gun durability: " + durability + ", break count: " + breakCount );

        // console.log("Armor ID: " + itemId + " (" + $dataArmors[itemId].name + "), break count: " + breakCount);

        const chance = Math.max(2.00000 * ((breakCount / durability) - 0.50000), 0.00000);
        if ( Math.random() < chance ) {
            $gameSystem.gunBreakingCount[party_member_index] = 0;
            AudioManager.playSe({name: '- gunshot 3', volume: 95, pitch: 100, pan: 0});
            $gameParty.members()[party_member_index].forceChangeEquip(2, $dataArmors[tjs_armor_broken_gun]);
            $gameParty.members()[party_member_index].addState(tjs_state_broken_gun);

            return true;
        }
    }

    return false;
};
TJS.prototype.pluginCommand_ClearContentsOfTreasureChests = function(args) {
    for (let i = 0; i < tjs_number_of_random_chests; i++) {
        tjs_Chest[i].Clear();
    }
};
TJS.prototype.pluginCommand_AddItemsToTreasureChest = function(args) {
    const chestIndex = Number(args.ChestIndex);
    const itmCounts = JSON.parse( args.ItemCount );
    const itmChances = JSON.parse( args.ItemChance );
    const itmIds = JSON.parse( args.ItemId );
    const numberItems = Math.min( itmCounts.length, itmChances.length, itmIds.length );
    if ( numberItems < 1 ) return;
    if ( chestIndex < 0 ) return;
    if ( chestIndex >= tjs_number_of_random_chests ) return;

    for (let i = 0; i < numberItems; i++) {
        tjs_Chest[chestIndex].AddItem( Number(itmCounts[i]), Number(itmChances[i]), Number(itmIds[i]) );
    }
};
TJS.prototype.pluginCommand_AddWeaponsToTreasureChest = function(args) {
    const chestIndex = Number(args.ChestIndex);
    const itmCounts = JSON.parse( args.ItemCount );
    const itmChances = JSON.parse( args.ItemChance );
    const itmIds = JSON.parse( args.ItemId );
    const numberItems = Math.min( itmCounts.length, itmChances.length, itmIds.length );
    if ( numberItems < 1 ) return;
    if ( chestIndex < 0 ) return;
    if ( chestIndex >= tjs_number_of_random_chests ) return;

    for (let i = 0; i < numberItems; i++) {
        tjs_Chest[chestIndex].AddWeapon( Number(itmCounts[i]), Number(itmChances[i]), Number(itmIds[i]) );
    }
};
TJS.prototype.pluginCommand_AddArmorsToTreasureChest = function(args) {
    const chestIndex = Number(args.ChestIndex);
    const itmCounts = JSON.parse( args.ItemCount );
    const itmChances = JSON.parse( args.ItemChance );
    const itmIds = JSON.parse( args.ItemId );
    const numberItems = Math.min( itmCounts.length, itmChances.length, itmIds.length );
    if ( numberItems < 1 ) return;
    if ( chestIndex < 0 ) return;
    if ( chestIndex >= tjs_number_of_random_chests ) return;

    for (let i = 0; i < numberItems; i++) {
        tjs_Chest[chestIndex].AddArmor( Number(itmCounts[i]), Number(itmChances[i]), Number(itmIds[i]) );
    }
};
TJS.prototype.pluginCommand_LootChest = function(args) {
    const chestIndex = Math.round(Math.random() * Number(args.ChestIndexMax));

    tjs_Chest[chestIndex].Loot();
    const totalItems = tjs_Chest[chestIndex].LootSizeItems();
    const totalWeapons = tjs_Chest[chestIndex].LootSizeWeapons();
    const totalArmors = tjs_Chest[chestIndex].LootSizeArmors();
    const totalLoot = tjs_Chest[chestIndex].LootSize();
    var msgGroup = [];
    var msgItems = [];
    var msgWeapons = [];
    var msgArmors = [];

    if ( totalItems > 0 ) {
        msgItems.push('You get ');
        for (let i = 0; i < totalItems; i++ ) {
            $gameParty.gainItem( $dataItems[tjs_Chest[chestIndex].loot_id[i]], tjs_Chest[chestIndex].loot_count[i] );
            if ( i == 6 ) msgItems.push('\n        ');
            if ( i == 12 ) msgItems.push('\n        ');
            msgItems.push( String(tjs_Chest[chestIndex].loot_count[i]) + 'x ' + String($dataItems[tjs_Chest[chestIndex].loot_id[i]].name) );
            if ( i < (totalItems-1) ) msgItems.push(', ');
        }
        msgItems.push('.');
        msgGroup.push( msgItems.join('') );
    }
    if ( totalWeapons > 0 ) {
        msgWeapons.push('You get ');
        for (let i = 0; i < totalWeapons; i++ ) {
            $gameParty.gainItem( $dataWeapons[tjs_Chest[chestIndex].loot_id_w[i]], tjs_Chest[chestIndex].loot_count_w[i] );
            if ( i == 6 ) msgWeapons.push('\n        ');
            if ( i == 12 ) msgWeapons.push('\n        ');
            msgWeapons.push( String(tjs_Chest[chestIndex].loot_count_w[i]) + 'x ' + String($dataWeapons[tjs_Chest[chestIndex].loot_id_w[i]].name) );
            if ( i < (totalWeapons-1) ) msgWeapons.push(', ');
        }
        msgWeapons.push('.');
        msgGroup.push( msgWeapons.join('') );
    }
    if ( totalArmors > 0 ) {
        msgArmors.push('You get ');
        for (let i = 0; i < totalArmors; i++ ) {
            $gameParty.gainItem( $dataArmors[tjs_Chest[chestIndex].loot_id_a[i]], tjs_Chest[chestIndex].loot_count_a[i] );
            if ( i == 6 ) msgArmors.push('\n        ');
            if ( i == 12 ) msgArmors.push('\n        ');
            msgArmors.push( String(tjs_Chest[chestIndex].loot_count_a[i]) + 'x ' + String($dataArmors[tjs_Chest[chestIndex].loot_id_a[i]].name) );
            if ( i < (totalArmors-1) ) msgArmors.push(', ');
        }
        msgArmors.push('.');
        msgGroup.push( msgArmors.join('') );
    }

    $gameMessage.setBackground(1);
    $gameMessage.setPositionType(2);
    if ( totalLoot > 0 ) $gameMessage.add( msgGroup.join('\n') );
    else $gameMessage.add( 'Empty!' );
    Game_Interpreter.prototype.setWaitMode.call(this, 'message');
};
TJS.prototype.GetChapterTextForVariable = function(chapter_number) {
    if (chapter_number == 0) return "Prologue";
    const txt = "Chapter " + String(chapter_number);
    return txt;
};
TJS.prototype.GetChapterText = function() {
    return this.GetChapterTextForVariable( $gameVariables.value(tjs_variable_game_chapter) );
};

TJS_auto = new TJS();
TJS_map = new TjsMapData();

Window_ChoiceList.prototype.maxLines = function() {
    const messageWindow = this._messageWindow;
    const messageY = messageWindow ? messageWindow.y : 0;
    const messageHeight = messageWindow ? messageWindow.height : 0;
    const centerY = Graphics.boxHeight / 2;
    if (messageY < centerY && messageY + messageHeight > centerY) {
        return 4;
    } else {
        return 11;
    }
};

//-----------------------------------------------------------------------------
// Window_ItemList
//
// The window for selecting an item on the item screen.
Window_ItemList.prototype.drawItemNumber = function(item, x, y, width) {
    if (this.needsNumber()) {
        this.drawText(":", x, y, width - this.textWidth(tjs_max_items), "right");
        this.drawText($gameParty.numItems(item), x, y, width, "right");
    }
};

//-----------------------------------------------------------------------------
// Game_Actor
//
// The game object class for an actor.
Game_Actor.prototype.setup = function(actorId) {
    const actor = $dataActors[actorId];
    this._actorId = actorId;
    this._name = actor.name;
    this._nickname = actor.nickname;
    this._profile = actor.profile;
    this._classId = actor.classId;
    this._level = actor.initialLevel;

    // custom TJS stuff
    this._meta = $dataActors[actorId].meta;
    this._breakingCountWeapon = 0;
    this._breakingCountGun = 0;

    this.initImages();
    this.initExp();
    this.initSkills();
    this.initEquips(actor.equips);
    this.clearParamPlus();
    this.recoverAll();
};
Game_Actor.prototype.maxLevel = function() {
    return tjs_max_character_level;
    // return this.actor().maxLevel;
};
// Parameters:
// 0 = Max HP
// 1 = Max MP
// 2 = Attack
// 3 = Defense
// 4 = Magic Attack
// 5 = Magic Defense
// 6 = Agility
// 7 = Luck
const tjs_class_HP_Warrior = [161, 40750];
const tjs_class_MP_Warrior = [52, 8000];
const tjs_class_ATK_Warrior = [16, 800];
const tjs_class_DEF_Warrior = [16, 800];
const tjs_class_MAT_Warrior = [2, 100];
const tjs_class_MDF_Warrior = [2, 100];
const tjs_class_AGL_Warrior = [5, 250];
const tjs_class_LCK_Warrior = [8, 400];
// -----
const tjs_class_HP_Witch = [125, 25125];
const tjs_class_MP_Witch = [190, 30350];
const tjs_class_ATK_Witch = [8, 400];
const tjs_class_DEF_Witch = [12, 600];
const tjs_class_MAT_Witch = [15, 750];
const tjs_class_MDF_Witch = [10, 500];
const tjs_class_AGL_Witch = [3, 150];
const tjs_class_LCK_Witch = [16, 800];
// -----
const tjs_class_HP_Rogue = [109, 20525];
const tjs_class_MP_Rogue = [112, 16250];
const tjs_class_ATK_Rogue = [7, 350];
const tjs_class_DEF_Rogue = [8, 400];
const tjs_class_MAT_Rogue = [12, 900];
const tjs_class_MDF_Rogue = [4, 200];
const tjs_class_AGL_Rogue = [3, 162];
const tjs_class_LCK_Rogue = [4, 200];
// -----
const tjs_class_HP_Wizard = [95, 16525];
const tjs_class_MP_Wizard = [284, 51025];
const tjs_class_ATK_Wizard = [4, 200];
const tjs_class_DEF_Wizard = [6, 300];
const tjs_class_MAT_Wizard = [20, 1600];
const tjs_class_MDF_Wizard = [12, 600];
const tjs_class_AGL_Wizard = [3, 150];
const tjs_class_LCK_Wizard = [3, 150];
// -----
const tjs_class_HP_Skew = 0.0;
const tjs_class_MP_Skew = 0.0;
const tjs_class_ATK_Skew = 0.0;
const tjs_class_DEF_Skew = 0.0;
const tjs_class_MAT_Skew = 0.0;
const tjs_class_MDF_Skew = 0.0;
const tjs_class_AGL_Skew = 0.0;
const tjs_class_LCK_Skew = 0.0;
// -----
const tjs_class_HP_WarriorWitch = [(tjs_class_HP_Warrior[0] + tjs_class_HP_Witch[0]) * 0.5, (tjs_class_HP_Warrior[1] + tjs_class_HP_Witch[1]) * 0.5];
const tjs_class_HP_WarriorRogue = [(tjs_class_HP_Warrior[0] + tjs_class_HP_Rogue[0]) * 0.5, (tjs_class_HP_Warrior[1] + tjs_class_HP_Rogue[1]) * 0.5];
const tjs_class_HP_WarriorWizard = [(tjs_class_HP_Warrior[0] + tjs_class_HP_Wizard[0]) * 0.5, (tjs_class_HP_Warrior[1] + tjs_class_HP_Wizard[1]) * 0.5];
const tjs_class_HP_WizardRogue = [(tjs_class_HP_Wizard[0] + tjs_class_HP_Rogue[0]) * 0.5, (tjs_class_HP_Wizard[1] + tjs_class_HP_Rogue[1]) * 0.5];
const tjs_class_HP_WizardWitch = [(tjs_class_HP_Wizard[0] + tjs_class_HP_Witch[0]) * 0.5, (tjs_class_HP_Wizard[1] + tjs_class_HP_Witch[1]) * 0.5];
// -----
const tjs_class_MP_WarriorWitch = [(tjs_class_MP_Warrior[0] + tjs_class_MP_Witch[0]) * 0.5, (tjs_class_MP_Warrior[1] + tjs_class_MP_Witch[1]) * 0.5];
const tjs_class_MP_WarriorRogue = [(tjs_class_MP_Warrior[0] + tjs_class_MP_Rogue[0]) * 0.5, (tjs_class_MP_Warrior[1] + tjs_class_MP_Rogue[1]) * 0.5];
const tjs_class_MP_WarriorWizard = [(tjs_class_MP_Warrior[0] + tjs_class_MP_Wizard[0]) * 0.5, (tjs_class_MP_Warrior[1] + tjs_class_MP_Wizard[1]) * 0.5];
const tjs_class_MP_WizardRogue = [(tjs_class_MP_Wizard[0] + tjs_class_MP_Rogue[0]) * 0.5, (tjs_class_MP_Wizard[1] + tjs_class_MP_Rogue[1]) * 0.5];
const tjs_class_MP_WizardWitch = [(tjs_class_MP_Wizard[0] + tjs_class_MP_Witch[0]) * 0.5, (tjs_class_MP_Wizard[1] + tjs_class_MP_Witch[1]) * 0.5];
// -----
const tjs_class_ATK_WarriorWitch = [(tjs_class_ATK_Warrior[0] + tjs_class_ATK_Witch[0]) * 0.5, (tjs_class_ATK_Warrior[1] + tjs_class_ATK_Witch[1]) * 0.5];
const tjs_class_ATK_WarriorRogue = [(tjs_class_ATK_Warrior[0] + tjs_class_ATK_Rogue[0]) * 0.5, (tjs_class_ATK_Warrior[1] + tjs_class_ATK_Rogue[1]) * 0.5];
const tjs_class_ATK_WarriorWizard = [(tjs_class_ATK_Warrior[0] + tjs_class_ATK_Wizard[0]) * 0.5, (tjs_class_ATK_Warrior[1] + tjs_class_ATK_Wizard[1]) * 0.5];
const tjs_class_ATK_WizardRogue = [(tjs_class_ATK_Wizard[0] + tjs_class_ATK_Rogue[0]) * 0.5, (tjs_class_ATK_Wizard[1] + tjs_class_ATK_Rogue[1]) * 0.5];
const tjs_class_ATK_WizardWitch = [(tjs_class_ATK_Wizard[0] + tjs_class_ATK_Witch[0]) * 0.5, (tjs_class_ATK_Wizard[1] + tjs_class_ATK_Witch[1]) * 0.5];
// -----
const tjs_class_DEF_WarriorWitch = [(tjs_class_DEF_Warrior[0] + tjs_class_DEF_Witch[0]) * 0.5, (tjs_class_DEF_Warrior[1] + tjs_class_DEF_Witch[1]) * 0.5];
const tjs_class_DEF_WarriorRogue = [(tjs_class_DEF_Warrior[0] + tjs_class_DEF_Rogue[0]) * 0.5, (tjs_class_DEF_Warrior[1] + tjs_class_DEF_Rogue[1]) * 0.5];
const tjs_class_DEF_WarriorWizard = [(tjs_class_DEF_Warrior[0] + tjs_class_DEF_Wizard[0]) * 0.5, (tjs_class_DEF_Warrior[1] + tjs_class_DEF_Wizard[1]) * 0.5];
const tjs_class_DEF_WizardRogue = [(tjs_class_DEF_Wizard[0] + tjs_class_DEF_Rogue[0]) * 0.5, (tjs_class_DEF_Wizard[1] + tjs_class_DEF_Rogue[1]) * 0.5];
const tjs_class_DEF_WizardWitch = [(tjs_class_DEF_Wizard[0] + tjs_class_DEF_Witch[0]) * 0.5, (tjs_class_DEF_Wizard[1] + tjs_class_DEF_Witch[1]) * 0.5];
// -----
const tjs_class_MAT_WarriorWitch = [(tjs_class_MAT_Warrior[0] + tjs_class_MAT_Witch[0]) * 0.5, (tjs_class_MAT_Warrior[1] + tjs_class_MAT_Witch[1]) * 0.5];
const tjs_class_MAT_WarriorRogue = [(tjs_class_MAT_Warrior[0] + tjs_class_MAT_Rogue[0]) * 0.5, (tjs_class_MAT_Warrior[1] + tjs_class_MAT_Rogue[1]) * 0.5];
const tjs_class_MAT_WarriorWizard = [(tjs_class_MAT_Warrior[0] + tjs_class_MAT_Wizard[0]) * 0.5, (tjs_class_MAT_Warrior[1] + tjs_class_MAT_Wizard[1]) * 0.5];
const tjs_class_MAT_WizardRogue = [(tjs_class_MAT_Wizard[0] + tjs_class_MAT_Rogue[0]) * 0.5, (tjs_class_MAT_Wizard[1] + tjs_class_MAT_Rogue[1]) * 0.5];
const tjs_class_MAT_WizardWitch = [(tjs_class_MAT_Wizard[0] + tjs_class_MAT_Witch[0]) * 0.5, (tjs_class_MAT_Wizard[1] + tjs_class_MAT_Witch[1]) * 0.5];
// -----
const tjs_class_MDF_WarriorWitch = [(tjs_class_MDF_Warrior[0] + tjs_class_MDF_Witch[0]) * 0.5, (tjs_class_MDF_Warrior[1] + tjs_class_MDF_Witch[1]) * 0.5];
const tjs_class_MDF_WarriorRogue = [(tjs_class_MDF_Warrior[0] + tjs_class_MDF_Rogue[0]) * 0.5, (tjs_class_MDF_Warrior[1] + tjs_class_MDF_Rogue[1]) * 0.5];
const tjs_class_MDF_WarriorWizard = [(tjs_class_MDF_Warrior[0] + tjs_class_MDF_Wizard[0]) * 0.5, (tjs_class_MDF_Warrior[1] + tjs_class_MDF_Wizard[1]) * 0.5];
const tjs_class_MDF_WizardRogue = [(tjs_class_MDF_Wizard[0] + tjs_class_MDF_Rogue[0]) * 0.5, (tjs_class_MDF_Wizard[1] + tjs_class_MDF_Rogue[1]) * 0.5];
const tjs_class_MDF_WizardWitch = [(tjs_class_MDF_Wizard[0] + tjs_class_MDF_Witch[0]) * 0.5, (tjs_class_MDF_Wizard[1] + tjs_class_MDF_Witch[1]) * 0.5];
// -----
const tjs_class_AGL_WarriorWitch = [(tjs_class_AGL_Warrior[0] + tjs_class_AGL_Witch[0]) * 0.5, (tjs_class_AGL_Warrior[1] + tjs_class_AGL_Witch[1]) * 0.5];
const tjs_class_AGL_WarriorRogue = [(tjs_class_AGL_Warrior[0] + tjs_class_AGL_Rogue[0]) * 0.5, (tjs_class_AGL_Warrior[1] + tjs_class_AGL_Rogue[1]) * 0.5];
const tjs_class_AGL_WarriorWizard = [(tjs_class_AGL_Warrior[0] + tjs_class_AGL_Wizard[0]) * 0.5, (tjs_class_AGL_Warrior[1] + tjs_class_AGL_Wizard[1]) * 0.5];
const tjs_class_AGL_WizardRogue = [(tjs_class_AGL_Wizard[0] + tjs_class_AGL_Rogue[0]) * 0.5, (tjs_class_AGL_Wizard[1] + tjs_class_AGL_Rogue[1]) * 0.5];
const tjs_class_AGL_WizardWitch = [(tjs_class_AGL_Wizard[0] + tjs_class_AGL_Witch[0]) * 0.5, (tjs_class_AGL_Wizard[1] + tjs_class_AGL_Witch[1]) * 0.5];
// -----
const tjs_class_LCK_WarriorWitch = [(tjs_class_LCK_Warrior[0] + tjs_class_LCK_Witch[0]) * 0.5, (tjs_class_LCK_Warrior[1] + tjs_class_LCK_Witch[1]) * 0.5];
const tjs_class_LCK_WarriorRogue = [(tjs_class_LCK_Warrior[0] + tjs_class_LCK_Rogue[0]) * 0.5, (tjs_class_LCK_Warrior[1] + tjs_class_LCK_Rogue[1]) * 0.5];
const tjs_class_LCK_WarriorWizard = [(tjs_class_LCK_Warrior[0] + tjs_class_LCK_Wizard[0]) * 0.5, (tjs_class_LCK_Warrior[1] + tjs_class_LCK_Wizard[1]) * 0.5];
const tjs_class_LCK_WizardRogue = [(tjs_class_LCK_Wizard[0] + tjs_class_LCK_Rogue[0]) * 0.5, (tjs_class_LCK_Wizard[1] + tjs_class_LCK_Rogue[1]) * 0.5];
const tjs_class_LCK_WizardWitch = [(tjs_class_LCK_Wizard[0] + tjs_class_LCK_Witch[0]) * 0.5, (tjs_class_LCK_Wizard[1] + tjs_class_LCK_Witch[1]) * 0.5];
// -----
Game_Actor.prototype.ParamBaseForLevel = function(paramId, level) {
    const lvl = level.clamp(1, tjs_max_character_level);
    const cls = this.currentClass();
    const levelFactor = (lvl - 1) / (tjs_max_character_level - 1.00000);
    // Parameters:
    // 0 = Max HP
    // 1 = Max MP
    // 2 = Attack
    // 3 = Defense
    // 4 = Magic Attack
    // 5 = Magic Defense
    // 6 = Agility
    // 7 = Luck

    // Classes:
    // 1 = Greatsword Master
    // 2 = Axe Master
    // 3 = Combat Mage
    // 4 = Witch
    // 5 = Wizard
    // 6 = Thief
    // 7 = Axe Master / Mage
    // 8 = Axe Master / Witch
    // 9 = Axe Master / Thief
    // 10 = Mage / Witch
    // 11 = Thief / Mage
    // 12 = Omni
    // 13 = Corporate Executive
    // 14 = College Professor
    // 15 = Greatsword Master / Mage
    // 16 = Greatsword Master / Witch
    // 17 = Greatsword Master / Thief
    // 18 = Ranger
    // 19 = Samurai
    // 20 = Ninja
    // 21 = Child Swordfighter
    // 22-24 ...

    // 1 = Greatsword Master
    if (cls.id == 1) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( tjs_class_HP_Warrior[0], tjs_class_HP_Warrior[1], levelFactor, tjs_class_HP_Skew )); // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( tjs_class_MP_Warrior[0], tjs_class_MP_Warrior[1], levelFactor, tjs_class_MP_Skew )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( tjs_class_ATK_Warrior[0], tjs_class_ATK_Warrior[1], levelFactor, tjs_class_ATK_Skew )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( tjs_class_DEF_Warrior[0], tjs_class_DEF_Warrior[1], levelFactor, tjs_class_DEF_Skew )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( tjs_class_MAT_Warrior[0], tjs_class_MAT_Warrior[1], levelFactor, tjs_class_MAT_Skew )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( tjs_class_MDF_Warrior[0], tjs_class_MDF_Warrior[1], levelFactor, tjs_class_MDF_Skew )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( tjs_class_AGL_Warrior[0], tjs_class_AGL_Warrior[1], levelFactor, tjs_class_AGL_Skew )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( tjs_class_LCK_Warrior[0], tjs_class_LCK_Warrior[1], levelFactor, tjs_class_LCK_Skew )); // Luck
    }
    // 2 = Axe Master
    else if (cls.id == 2) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( tjs_class_HP_Warrior[0], tjs_class_HP_Warrior[1], levelFactor, tjs_class_HP_Skew )); // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( tjs_class_MP_Warrior[0], tjs_class_MP_Warrior[1], levelFactor, tjs_class_MP_Skew )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( tjs_class_ATK_Warrior[0], tjs_class_ATK_Warrior[1], levelFactor, tjs_class_ATK_Skew )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( tjs_class_DEF_Warrior[0], tjs_class_DEF_Warrior[1], levelFactor, tjs_class_DEF_Skew )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( tjs_class_MAT_Warrior[0], tjs_class_MAT_Warrior[1], levelFactor, tjs_class_MAT_Skew )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( tjs_class_MDF_Warrior[0], tjs_class_MDF_Warrior[1], levelFactor, tjs_class_MDF_Skew )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( tjs_class_AGL_Warrior[0], tjs_class_AGL_Warrior[1], levelFactor, tjs_class_AGL_Skew )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( tjs_class_LCK_Warrior[0], tjs_class_LCK_Warrior[1], levelFactor, tjs_class_LCK_Skew )); // Luck
    }
    // 3 = Combat Mage
    else if (cls.id == 3) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( tjs_class_HP_Wizard[0], tjs_class_HP_Wizard[1], levelFactor, tjs_class_HP_Skew )); // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( tjs_class_MP_Wizard[0], tjs_class_MP_Wizard[1], levelFactor, tjs_class_MP_Skew )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( tjs_class_ATK_Wizard[0], tjs_class_ATK_Wizard[1], levelFactor, tjs_class_ATK_Skew )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( tjs_class_DEF_Wizard[0], tjs_class_DEF_Wizard[1], levelFactor, tjs_class_DEF_Skew )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( tjs_class_MAT_Wizard[0], tjs_class_MAT_Wizard[1], levelFactor, tjs_class_MAT_Skew )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( tjs_class_MDF_Wizard[0], tjs_class_MDF_Wizard[1], levelFactor, tjs_class_MDF_Skew )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( tjs_class_AGL_Wizard[0], tjs_class_AGL_Wizard[1], levelFactor, tjs_class_AGL_Skew )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( tjs_class_LCK_Wizard[0], tjs_class_LCK_Wizard[1], levelFactor, tjs_class_LCK_Skew )); // Luck
    }
    // 4 = Witch
    else if (cls.id == 4) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( tjs_class_HP_Witch[0], tjs_class_HP_Witch[1], levelFactor, tjs_class_HP_Skew )); // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( tjs_class_MP_Witch[0], tjs_class_MP_Witch[1], levelFactor, tjs_class_MP_Skew )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( tjs_class_ATK_Witch[0], tjs_class_ATK_Witch[1], levelFactor, tjs_class_ATK_Skew )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( tjs_class_DEF_Witch[0], tjs_class_DEF_Witch[1], levelFactor, tjs_class_DEF_Skew )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( tjs_class_MAT_Witch[0], tjs_class_MAT_Witch[1], levelFactor, tjs_class_MAT_Skew )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( tjs_class_MDF_Witch[0], tjs_class_MDF_Witch[1], levelFactor, tjs_class_MDF_Skew )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( tjs_class_AGL_Witch[0], tjs_class_AGL_Witch[1], levelFactor, tjs_class_AGL_Skew )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( tjs_class_LCK_Witch[0], tjs_class_LCK_Witch[1], levelFactor, tjs_class_LCK_Skew )); // Luck
    }
    // 5 = Wizard
    else if (cls.id == 5) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( tjs_class_HP_Wizard[0], tjs_class_HP_Wizard[1], levelFactor, tjs_class_HP_Skew )); // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( tjs_class_MP_Wizard[0], tjs_class_MP_Wizard[1], levelFactor, tjs_class_MP_Skew )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( tjs_class_ATK_Wizard[0], tjs_class_ATK_Wizard[1], levelFactor, tjs_class_ATK_Skew )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( tjs_class_DEF_Wizard[0], tjs_class_DEF_Wizard[1], levelFactor, tjs_class_DEF_Skew )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( tjs_class_MAT_Wizard[0], tjs_class_MAT_Wizard[1], levelFactor, tjs_class_MAT_Skew )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( tjs_class_MDF_Wizard[0], tjs_class_MDF_Wizard[1], levelFactor, tjs_class_MDF_Skew )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( tjs_class_AGL_Wizard[0], tjs_class_AGL_Wizard[1], levelFactor, tjs_class_AGL_Skew )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( tjs_class_LCK_Wizard[0], tjs_class_LCK_Wizard[1], levelFactor, tjs_class_LCK_Skew )); // Luck
    }
    // 6 = Thief
    else if (cls.id == 6) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( tjs_class_HP_Rogue[0], tjs_class_HP_Rogue[1], levelFactor, tjs_class_HP_Skew )); // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( tjs_class_MP_Rogue[0], tjs_class_MP_Rogue[1], levelFactor, tjs_class_MP_Skew )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( tjs_class_ATK_Rogue[0], tjs_class_ATK_Rogue[1], levelFactor, tjs_class_ATK_Skew )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( tjs_class_DEF_Rogue[0], tjs_class_DEF_Rogue[1], levelFactor, tjs_class_DEF_Skew )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( tjs_class_MAT_Rogue[0], tjs_class_MAT_Rogue[1], levelFactor, tjs_class_MAT_Skew )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( tjs_class_MDF_Rogue[0], tjs_class_MDF_Rogue[1], levelFactor, tjs_class_MDF_Skew )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( tjs_class_AGL_Rogue[0], tjs_class_AGL_Rogue[1], levelFactor, tjs_class_AGL_Skew )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( tjs_class_LCK_Rogue[0], tjs_class_LCK_Rogue[1], levelFactor, tjs_class_LCK_Skew )); // Luck
    }
    // 7 = Axe Master / Mage
    else if (cls.id == 7) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( tjs_class_HP_WarriorWizard[0], tjs_class_HP_WarriorWizard[1], levelFactor, tjs_class_HP_Skew )); // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( tjs_class_MP_WarriorWizard[0], tjs_class_MP_WarriorWizard[1], levelFactor, tjs_class_MP_Skew )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( tjs_class_ATK_Warrior[0], tjs_class_ATK_Warrior[1], levelFactor, tjs_class_ATK_Skew )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( tjs_class_DEF_WarriorWizard[0], tjs_class_DEF_WarriorWizard[1], levelFactor, tjs_class_DEF_Skew )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( tjs_class_MAT_WarriorWizard[0], tjs_class_MAT_WarriorWizard[1], levelFactor, tjs_class_MAT_Skew )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( tjs_class_MDF_WarriorWizard[0], tjs_class_MDF_WarriorWizard[1], levelFactor, tjs_class_MDF_Skew )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( tjs_class_AGL_WarriorWizard[0], tjs_class_AGL_WarriorWizard[1], levelFactor, tjs_class_AGL_Skew )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( tjs_class_LCK_WarriorWizard[0], tjs_class_LCK_WarriorWizard[1], levelFactor, tjs_class_LCK_Skew )); // Luck
    }
    // 8 = Axe Master / Witch
    else if (cls.id == 8) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( tjs_class_HP_WarriorWitch[0], tjs_class_HP_WarriorWitch[1], levelFactor, tjs_class_HP_Skew )); // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( tjs_class_MP_WarriorWitch[0], tjs_class_MP_WarriorWitch[1], levelFactor, tjs_class_MP_Skew )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( tjs_class_ATK_Warrior[0], tjs_class_ATK_Warrior[1], levelFactor, tjs_class_ATK_Skew )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( tjs_class_DEF_WarriorWitch[0], tjs_class_DEF_WarriorWitch[1], levelFactor, tjs_class_DEF_Skew )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( tjs_class_MAT_WarriorWitch[0], tjs_class_MAT_WarriorWitch[1], levelFactor, tjs_class_MAT_Skew )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( tjs_class_MDF_WarriorWitch[0], tjs_class_MDF_WarriorWitch[1], levelFactor, tjs_class_MDF_Skew )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( tjs_class_AGL_WarriorWitch[0], tjs_class_AGL_WarriorWitch[1], levelFactor, tjs_class_AGL_Skew )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( tjs_class_LCK_WarriorWitch[0], tjs_class_LCK_WarriorWitch[1], levelFactor, tjs_class_LCK_Skew )); // Luck
    }
    // 9 = Axe Master / Thief
    else if (cls.id == 9) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( tjs_class_HP_WarriorRogue[0], tjs_class_HP_WarriorRogue[1], levelFactor, tjs_class_HP_Skew )); // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( tjs_class_MP_WarriorRogue[0], tjs_class_MP_WarriorRogue[1], levelFactor, tjs_class_MP_Skew )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( tjs_class_ATK_Warrior[0], tjs_class_ATK_Warrior[1], levelFactor, tjs_class_ATK_Skew )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( tjs_class_DEF_WarriorRogue[0], tjs_class_DEF_WarriorRogue[1], levelFactor, tjs_class_DEF_Skew )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( tjs_class_MAT_WarriorRogue[0], tjs_class_MAT_WarriorRogue[1], levelFactor, tjs_class_MAT_Skew )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( tjs_class_MDF_WarriorRogue[0], tjs_class_MDF_WarriorRogue[1], levelFactor, tjs_class_MDF_Skew )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( tjs_class_AGL_WarriorRogue[0], tjs_class_AGL_WarriorRogue[1], levelFactor, tjs_class_AGL_Skew )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( tjs_class_LCK_WarriorRogue[0], tjs_class_LCK_WarriorRogue[1], levelFactor, tjs_class_LCK_Skew )); // Luck
    }
    // 10 = Mage / Witch
    else if (cls.id == 10) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( tjs_class_HP_WizardWitch[0], tjs_class_HP_WizardWitch[1], levelFactor, tjs_class_HP_Skew )); // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( tjs_class_MP_WizardWitch[0], tjs_class_MP_WizardWitch[1], levelFactor, tjs_class_MP_Skew )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( tjs_class_ATK_WizardWitch[0], tjs_class_ATK_WizardWitch[1], levelFactor, tjs_class_ATK_Skew )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( tjs_class_DEF_WizardWitch[0], tjs_class_DEF_WizardWitch[1], levelFactor, tjs_class_DEF_Skew )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( tjs_class_MAT_WizardWitch[0], tjs_class_MAT_WizardWitch[1], levelFactor, tjs_class_MAT_Skew )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( tjs_class_MDF_WizardWitch[0], tjs_class_MDF_WizardWitch[1], levelFactor, tjs_class_MDF_Skew )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( tjs_class_AGL_WizardWitch[0], tjs_class_AGL_WizardWitch[1], levelFactor, tjs_class_AGL_Skew )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( tjs_class_LCK_WizardWitch[0], tjs_class_LCK_WizardWitch[1], levelFactor, tjs_class_LCK_Skew )); // Luck
    }
    // 11 = Thief / Mage
    else if (cls.id == 11) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( tjs_class_HP_WizardRogue[0], tjs_class_HP_WizardRogue[1], levelFactor, tjs_class_HP_Skew )); // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( tjs_class_MP_WizardRogue[0], tjs_class_MP_WizardRogue[1], levelFactor, tjs_class_MP_Skew )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( tjs_class_ATK_WizardRogue[0], tjs_class_ATK_WizardRogue[1], levelFactor, tjs_class_ATK_Skew )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( tjs_class_DEF_WizardRogue[0], tjs_class_DEF_WizardRogue[1], levelFactor, tjs_class_DEF_Skew )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( tjs_class_MAT_WizardRogue[0], tjs_class_MAT_WizardRogue[1], levelFactor, tjs_class_MAT_Skew )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( tjs_class_MDF_WizardRogue[0], tjs_class_MDF_WizardRogue[1], levelFactor, tjs_class_MDF_Skew )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( tjs_class_AGL_WizardRogue[0], tjs_class_AGL_WizardRogue[1], levelFactor, tjs_class_AGL_Skew )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( tjs_class_LCK_WizardRogue[0], tjs_class_LCK_WizardRogue[1], levelFactor, tjs_class_LCK_Skew )); // Luck
    }
    // 15 = Greatsword Master / Mage
    else if (cls.id == 15) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( tjs_class_HP_WarriorWizard[0], tjs_class_HP_WarriorWizard[1], levelFactor, tjs_class_HP_Skew )); // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( tjs_class_MP_WarriorWizard[0], tjs_class_MP_WarriorWizard[1], levelFactor, tjs_class_MP_Skew )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( tjs_class_ATK_Warrior[0], tjs_class_ATK_Warrior[1], levelFactor, tjs_class_ATK_Skew )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( tjs_class_DEF_WarriorWizard[0], tjs_class_DEF_WarriorWizard[1], levelFactor, tjs_class_DEF_Skew )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( tjs_class_MAT_WarriorWizard[0], tjs_class_MAT_WarriorWizard[1], levelFactor, tjs_class_MAT_Skew )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( tjs_class_MDF_WarriorWizard[0], tjs_class_MDF_WarriorWizard[1], levelFactor, tjs_class_MDF_Skew )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( tjs_class_AGL_WarriorWizard[0], tjs_class_AGL_WarriorWizard[1], levelFactor, tjs_class_AGL_Skew )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( tjs_class_LCK_WarriorWizard[0], tjs_class_LCK_WarriorWizard[1], levelFactor, tjs_class_LCK_Skew )); // Luck
    }
    // 16 = Greatsword Master / Witch
    else if (cls.id == 16) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( tjs_class_HP_WarriorWitch[0], tjs_class_HP_WarriorWitch[1], levelFactor, tjs_class_HP_Skew )); // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( tjs_class_MP_WarriorWitch[0], tjs_class_MP_WarriorWitch[1], levelFactor, tjs_class_MP_Skew )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( tjs_class_ATK_Warrior[0], tjs_class_ATK_Warrior[1], levelFactor, tjs_class_ATK_Skew )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( tjs_class_DEF_WarriorWitch[0], tjs_class_DEF_WarriorWitch[1], levelFactor, tjs_class_DEF_Skew )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( tjs_class_MAT_WarriorWitch[0], tjs_class_MAT_WarriorWitch[1], levelFactor, tjs_class_MAT_Skew )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( tjs_class_MDF_WarriorWitch[0], tjs_class_MDF_WarriorWitch[1], levelFactor, tjs_class_MDF_Skew )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( tjs_class_AGL_WarriorWitch[0], tjs_class_AGL_WarriorWitch[1], levelFactor, tjs_class_AGL_Skew )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( tjs_class_LCK_WarriorWitch[0], tjs_class_LCK_WarriorWitch[1], levelFactor, tjs_class_LCK_Skew )); // Luck
    }
    // 17 = Greatsword Master / Thief
    else if (cls.id == 17) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( tjs_class_HP_WarriorRogue[0], tjs_class_HP_WarriorRogue[1], levelFactor, tjs_class_HP_Skew )); // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( tjs_class_MP_WarriorRogue[0], tjs_class_MP_WarriorRogue[1], levelFactor, tjs_class_MP_Skew )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( tjs_class_ATK_Warrior[0], tjs_class_ATK_Warrior[1], levelFactor, tjs_class_ATK_Skew )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( tjs_class_DEF_WarriorRogue[0], tjs_class_DEF_WarriorRogue[1], levelFactor, tjs_class_DEF_Skew )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( tjs_class_MAT_WarriorRogue[0], tjs_class_MAT_WarriorRogue[1], levelFactor, tjs_class_MAT_Skew )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( tjs_class_MDF_WarriorRogue[0], tjs_class_MDF_WarriorRogue[1], levelFactor, tjs_class_MDF_Skew )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( tjs_class_AGL_WarriorRogue[0], tjs_class_AGL_WarriorRogue[1], levelFactor, tjs_class_AGL_Skew )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( tjs_class_LCK_WarriorRogue[0], tjs_class_LCK_WarriorRogue[1], levelFactor, tjs_class_LCK_Skew )); // Luck
    }
    // 18 = Ranger
    else if (cls.id == 18) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( tjs_class_HP_Warrior[0], tjs_class_HP_Warrior[1], levelFactor, tjs_class_HP_Skew )); // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( tjs_class_MP_Warrior[0], tjs_class_MP_Warrior[1], levelFactor, tjs_class_MP_Skew )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( tjs_class_ATK_Warrior[0], tjs_class_ATK_Warrior[1], levelFactor, tjs_class_ATK_Skew )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( tjs_class_DEF_Warrior[0], tjs_class_DEF_Warrior[1], levelFactor, tjs_class_DEF_Skew )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( tjs_class_MAT_Warrior[0], tjs_class_MAT_Warrior[1], levelFactor, tjs_class_MAT_Skew )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( tjs_class_MDF_Warrior[0], tjs_class_MDF_Warrior[1], levelFactor, tjs_class_MDF_Skew )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( tjs_class_AGL_Warrior[0], tjs_class_AGL_Warrior[1], levelFactor, tjs_class_AGL_Skew )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( tjs_class_LCK_Warrior[0], tjs_class_LCK_Warrior[1], levelFactor, tjs_class_LCK_Skew )); // Luck
    }
    // 19 = Samurai
    else if (cls.id == 19) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( tjs_class_HP_Warrior[0], tjs_class_HP_Warrior[1], levelFactor, tjs_class_HP_Skew )); // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( tjs_class_MP_Warrior[0], tjs_class_MP_Warrior[1], levelFactor, tjs_class_MP_Skew )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( tjs_class_ATK_Warrior[0], tjs_class_ATK_Warrior[1], levelFactor, tjs_class_ATK_Skew )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( tjs_class_DEF_Warrior[0], tjs_class_DEF_Warrior[1], levelFactor, tjs_class_DEF_Skew )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( tjs_class_MAT_Warrior[0], tjs_class_MAT_Warrior[1], levelFactor, tjs_class_MAT_Skew )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( tjs_class_MDF_Warrior[0], tjs_class_MDF_Warrior[1], levelFactor, tjs_class_MDF_Skew )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( tjs_class_AGL_Warrior[0], tjs_class_AGL_Warrior[1], levelFactor, tjs_class_AGL_Skew )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( tjs_class_LCK_Warrior[0], tjs_class_LCK_Warrior[1], levelFactor, tjs_class_LCK_Skew )); // Luck
    }
    // 20 = Ninja
    else if (cls.id == 20) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( tjs_class_HP_WarriorRogue[0], tjs_class_HP_WarriorRogue[1], levelFactor, tjs_class_HP_Skew )); // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( tjs_class_MP_WarriorRogue[0], tjs_class_MP_WarriorRogue[1], levelFactor, tjs_class_MP_Skew )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( tjs_class_ATK_Warrior[0], tjs_class_ATK_Warrior[1], levelFactor, tjs_class_ATK_Skew )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( tjs_class_DEF_WarriorRogue[0], tjs_class_DEF_WarriorRogue[1], levelFactor, tjs_class_DEF_Skew )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( tjs_class_MAT_WarriorRogue[0], tjs_class_MAT_WarriorRogue[1], levelFactor, tjs_class_MAT_Skew )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( tjs_class_MDF_WarriorRogue[0], tjs_class_MDF_WarriorRogue[1], levelFactor, tjs_class_MDF_Skew )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( tjs_class_AGL_WarriorRogue[0], tjs_class_AGL_WarriorRogue[1], levelFactor, tjs_class_AGL_Skew )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( tjs_class_LCK_WarriorRogue[0], tjs_class_LCK_WarriorRogue[1], levelFactor, tjs_class_LCK_Skew )); // Luck
    }
    // 21 = Child Swordfighter
    else if (cls.id == 21) {
        if (paramId == 0) return Math.round(TJS_auto.LerpSkew( tjs_class_HP_Warrior[0], tjs_class_HP_Warrior[1], levelFactor, tjs_class_HP_Skew )); // Max HP
        if (paramId == 1) return Math.round(TJS_auto.LerpSkew( tjs_class_MP_Warrior[0], tjs_class_MP_Warrior[1], levelFactor, tjs_class_MP_Skew )); // Max MP
        if (paramId == 2) return Math.round(TJS_auto.LerpSkew( tjs_class_ATK_Warrior[0], tjs_class_ATK_Warrior[1], levelFactor, tjs_class_ATK_Skew )); // Attack
        if (paramId == 3) return Math.round(TJS_auto.LerpSkew( tjs_class_DEF_Warrior[0], tjs_class_DEF_Warrior[1], levelFactor, tjs_class_DEF_Skew )); // Defense
        if (paramId == 4) return Math.round(TJS_auto.LerpSkew( tjs_class_MAT_Warrior[0], tjs_class_MAT_Warrior[1], levelFactor, tjs_class_MAT_Skew )); // Magic Attack
        if (paramId == 5) return Math.round(TJS_auto.LerpSkew( tjs_class_MDF_Warrior[0], tjs_class_MDF_Warrior[1], levelFactor, tjs_class_MDF_Skew )); // Magic Defense
        if (paramId == 6) return Math.round(TJS_auto.LerpSkew( tjs_class_AGL_Warrior[0], tjs_class_AGL_Warrior[1], levelFactor, tjs_class_AGL_Skew )); // Agility
        if (paramId == 7) return Math.round(TJS_auto.LerpSkew( tjs_class_LCK_Warrior[0], tjs_class_LCK_Warrior[1], levelFactor, tjs_class_LCK_Skew )); // Luck
    }

    // Default
    return 100;

    /*
    // Default
    if (paramId == 0) return Math.round(TJS_auto.LerpSkew( 50, 12000, levelFactor, -0.625 )); // Max HP
    if (paramId == 1) return Math.round(TJS_auto.LerpSkew( 5, 2000, levelFactor, 0 )); // Max MP
    if (paramId == 2) return Math.round(TJS_auto.LerpSkew( 5, 500, levelFactor, 0 )); // Attack
    if (paramId == 3) return Math.round(TJS_auto.LerpSkew( 3, 325, levelFactor, 0 )); // Defense
    if (paramId == 4) return Math.round(TJS_auto.LerpSkew( 1, 200, levelFactor, 0 )); // Magic Attack
    if (paramId == 5) return Math.round(TJS_auto.LerpSkew( 1, 50, levelFactor, 0 )); // Magic Defense
    if (paramId == 6) return Math.round(TJS_auto.LerpSkew( 3, 300, levelFactor, 0 )); // Agility
    if (paramId == 7) return Math.round(TJS_auto.LerpSkew( 1, 1000, levelFactor, 0 )); // Luck
    */
};
Game_Actor.prototype.paramBase = function(paramId) {
    // return this.currentClass().params[paramId][this._level];
    return this.ParamBaseForLevel( paramId, this._level );
};
Game_Actor.prototype.GetDp = function() {
    var pct = this._hp / this.param(0);
    pct = Math.pow(pct, 2.00000);
    pct = 1.00000 - pct;
    pct *= tjs_combat_hp_dampening;
    pct = 1.00000 - pct;

    return pct * tjs_battle_master_damage_taken_adjust_actor;
};
Game_Actor.prototype.lerp = function(f0, f1) {
    return TJS_auto.Lerp( f0, f1, (this.level - 1) / (tjs_max_character_level - 1.00000) );
};
Game_Actor.prototype.GetLevelMultiplierForEquip = function(slot_index) {
    var levelFactor = 1;

    if ( slot_index == 0 ) {
        if ( this._equips[0] != null ) {
            if ( $dataWeapons[this._equips[0]._itemId].meta ) {
                if ( $dataWeapons[this._equips[0]._itemId].meta.tjsItemLevel ) levelFactor = Number($dataWeapons[this._equips[0]._itemId].meta.tjsItemLevel);
                if ( $dataWeapons[this._equips[0]._itemId].meta.tjsWeaponLevel ) levelFactor = Number($dataWeapons[this._equips[0]._itemId].meta.tjsWeaponLevel);
                if ( $dataWeapons[this._equips[0]._itemId].meta.tjsLevel ) levelFactor = Number($dataWeapons[this._equips[0]._itemId].meta.tjsLevel);
            }
        }
    } else
    if ( slot_index > 0 ) {
        if ( this._equips[slot_index] != null ) {
            if ( $dataArmors[this._equips[slot_index]._itemId].meta ) {
                if ( $dataArmors[this._equips[slot_index]._itemId].meta.tjsItemLevel ) levelFactor = Number($dataArmors[this._equips[slot_index]._itemId].meta.tjsItemLevel);
                if ( $dataArmors[this._equips[slot_index]._itemId].meta.tjsWeaponLevel ) levelFactor = Number($dataArmors[this._equips[slot_index]._itemId].meta.tjsWeaponLevel);
                if ( $dataArmors[this._equips[slot_index]._itemId].meta.tjsLevel ) levelFactor = Number($dataArmors[this._equips[slot_index]._itemId].meta.tjsLevel);
            }
        }
    }

    levelFactor -= 1;
    levelFactor = Math.max(levelFactor, 0);
    levelFactor /= tjs_max_item_levels - 1.00000;

    if ( slot_index < 0 ) {
        levelFactor = (this.level - 1) / (tjs_max_character_level - 1.00000);
    }

    // levelFactor = TJS_auto.Lerp(levelFactor, levelFactor * levelFactor, 0.50000);

    return levelFactor;
};
Game_Actor.prototype.GetModifiedMagicPointCost = function(equip_slot_index, mp_base_cost) {
    if ( equip_slot_index < 0 ) return mp_base_cost;

    var cost = mp_base_cost;
    var cLevel = 1;

    if ( this._equips[equip_slot_index] ) {
        if ( equip_slot_index == 0 ) {
            if ( $dataWeapons[this._equips[0]._itemId].meta ) {
                if ( $dataWeapons[this._equips[0]._itemId].meta.tjsItemLevel ) cLevel = Number($dataWeapons[this._equips[0]._itemId].meta.tjsItemLevel);
                if ( $dataWeapons[this._equips[0]._itemId].meta.tjsWeaponLevel ) cLevel = Number($dataWeapons[this._equips[0]._itemId].meta.tjsWeaponLevel);
                if ( $dataWeapons[this._equips[0]._itemId].meta.tjsLevel ) cLevel = Number($dataWeapons[this._equips[0]._itemId].meta.tjsLevel);
            }
        } else
        if ( equip_slot_index > 1 ) {
            if ( $dataArmors[this._equips[equip_slot_index]._itemId].meta ) {
                if ( $dataArmors[this._equips[equip_slot_index]._itemId].meta.tjsItemLevel ) cLevel = Number($dataArmors[this._equips[equip_slot_index]._itemId].meta.tjsItemLevel);
                if ( $dataArmors[this._equips[equip_slot_index]._itemId].meta.tjsWeaponLevel ) cLevel = Number($dataArmors[this._equips[equip_slot_index]._itemId].meta.tjsWeaponLevel);
                if ( $dataArmors[this._equips[equip_slot_index]._itemId].meta.tjsLevel ) cLevel = Number($dataArmors[this._equips[equip_slot_index]._itemId].meta.tjsLevel);
            }
        }
    }

    const lerpValue = (cLevel - 1) / (tjs_max_item_levels - 1);
    const mult = TJS_auto.Lerp( 1.00000, 32.00000, lerpValue );

    return cost * mult;
};
Game_Actor.prototype.skillMpCost = function(skill) {
    var cost = skill.mpCost * this.mcr;

    if ( $dataSkills[skill.id].meta ) {
        if ( $dataSkills[skill.id].meta.tjsMeleeWeapon ) {
            cost = this.GetModifiedMagicPointCost( 0, cost );
        }
        if ( $dataSkills[skill.id].meta.tjsMagicMeleeWeapon ) {
            cost = this.GetModifiedMagicPointCost( 0, cost );
        }
        if ( $dataSkills[skill.id].meta.tjsGun ) {
            cost = this.GetModifiedMagicPointCost( 2, cost );
        }
        if ( $dataSkills[skill.id].meta.tjsSpell ) {
            cost = this.GetModifiedMagicPointCost( 3, cost );
        }
    }

    return Math.floor(cost);
};
Game_Actor.prototype.updateStateSteps = function(state) {
    if (state.removeByWalking) {
        if (this._stateSteps[state.id] > 0) {
            if (--this._stateSteps[state.id] === 0) {
                this.removeState(state.id);

                if ( (state.id == tjs_state_concealed_skin_tone) && (this.actorId() == 1) ) {
                    if ( $gameSwitches.value(tjs_switch_dan_wearing_shirt) == true ) {
                        $gameParty.members()[0].setCharacterImage('walking_Daniel1', 0);
                        $gameParty.members()[0].setFaceImage('face_Daniel1', 0);
                        $gamePlayer.refresh();
                    } else {
                        $gameParty.members()[0].setCharacterImage('walking_Daniel1', 4);
                        $gameParty.members()[0].setFaceImage('face_Daniel1', 4);
                        $gamePlayer.refresh();
                    }

                    $gameSwitches.setValue(tjs_switch_concealed_skin_tone, false);
                }
            }
        }
    }
};
Game_Actor.prototype.maxTp = function() {
    var value = 100;

    if ( $dataActors[this.actorId()].meta ) {
        if ( $dataActors[this.actorId()].meta.tjsMaxSP ) value = Number( $dataActors[this.actorId()].meta.tjsMaxSP );
        if ( $dataActors[this.actorId()].meta.tjsMaxNp ) value = Number( $dataActors[this.actorId()].meta.tjsMaxNp );
    }

    return value;
};
Game_Actor.prototype.UpdateBrokenGear = function() {
    if ( this.weapons()[0] ) {
        if ( this.weapons()[0].id == tjs_weaponID_broken_weapon ) this.addState(tjs_state_broken_weapon);
        else this.removeState(tjs_state_broken_weapon);
    }
        else this.removeState(tjs_state_broken_weapon);

    if ( this.equips()[2] ) {
        if ( this.equips()[2].id == tjs_armorID_broken_2nd_weapon ) this.addState(tjs_state_broken_2nd_weapon);
        else this.removeState(tjs_state_broken_2nd_weapon);
    }
        else this.removeState(tjs_state_broken_2nd_weapon);
};
Game_Actor.prototype.onBattleEnd = function() {
    this.clearResult();
    this.removeBattleStates();
    this.removeAllBuffs();
    this.clearActions();
    if (!this.isPreserveTp()) {
        this.clearTp();
    }

    this.UpdateBrokenGear();

    this.appear();
};
Game_Actor.prototype.refresh = function() {
    this.releaseUnequippableItems(false);
    this.UpdateBrokenGear();
    Game_Battler.prototype.refresh.call(this);
};

//-----------------------------------------------------------------------------
// Game_Enemy
//
// The game object class for an enemy.
Game_Enemy.prototype.setup = function(enemyId, x, y) {
    this._enemyId = enemyId;
    this._screenX = x;
    this._screenY = y;

    // Custom TJS stuff
    this._meta = $dataEnemies[enemyId].meta;

    this.recoverAll();
};
Game_Enemy.prototype.lerp = function(f0, f1) {
    var lvl = 1;
    if ( $dataEnemies[this._enemyId].meta ) {
        if ( $dataEnemies[this._enemyId].meta.tjsLevel ) lvl = Number( $dataEnemies[this._enemyId].meta.tjsLevel );
        if ( $dataEnemies[this._enemyId].meta.tjsEnemyLevel ) lvl = Number( $dataEnemies[this._enemyId].meta.tjsEnemyLevel );
    }

    lvl = (lvl - 1) / (tjs_max_character_level - 1.00000);

    return TJS_auto.Lerp( f0, f1, lvl );
};
Game_Enemy.prototype.lerp0 = function(f0, f1) {
    return this.lerp( f0, f1 );
};
Game_Enemy.prototype.lerp2 = function(f0, f1) {
    return this.lerp( f0, f1 );
};
Game_Enemy.prototype.lerp3 = function(f0, f1) {
    return this.lerp( f0, f1 );
};
Game_Enemy.prototype.GetLevelMultiplierForEquip = function(slot_index) {
    var lvl = 1;
    if ( $dataEnemies[this._enemyId].meta ) {
        if ( $dataEnemies[this._enemyId].meta.tjsLevel ) lvl = Number( $dataEnemies[this._enemyId].meta.tjsLevel );
        if ( $dataEnemies[this._enemyId].meta.tjsEnemyLevel ) lvl = Number( $dataEnemies[this._enemyId].meta.tjsEnemyLevel );

        if ( slot_index == 0 ) {
            if ( $dataEnemies[this._enemyId].meta.tjsMeleeLevel ) lvl = Number( $dataEnemies[this._enemyId].meta.tjsMeleeLevel );
            if ( $dataEnemies[this._enemyId].meta.tjsAttackLevel ) lvl = Number( $dataEnemies[this._enemyId].meta.tjsAttackLevel );
        } else
        if ( slot_index == 1 ) {
            if ( $dataEnemies[this._enemyId].meta.tjsMeleeLevel ) lvl = Number( $dataEnemies[this._enemyId].meta.tjsMeleeLevel );
            if ( $dataEnemies[this._enemyId].meta.tjsAttackLevel ) lvl = Number( $dataEnemies[this._enemyId].meta.tjsAttackLevel );
            if ( $dataEnemies[this._enemyId].meta.tjsMelee2Level ) lvl = Number( $dataEnemies[this._enemyId].meta.tjsMelee2Level );
            if ( $dataEnemies[this._enemyId].meta.tjsAttack2Level ) lvl = Number( $dataEnemies[this._enemyId].meta.tjsAttack2Level );
        } else
        if ( slot_index == 2 ) {
            if ( $dataEnemies[this._enemyId].meta.tjsGunLevel ) lvl = Number( $dataEnemies[this._enemyId].meta.tjsGunLevel );
            if ( $dataEnemies[this._enemyId].meta.tjsAttack3Level ) lvl = Number( $dataEnemies[this._enemyId].meta.tjsAttack3Level );
        } else
        if ( slot_index == 3 ) {
            if ( $dataEnemies[this._enemyId].meta.tjsBookLevel ) lvl = Number( $dataEnemies[this._enemyId].meta.tjsBookLevel );
            if ( $dataEnemies[this._enemyId].meta.tjsSpellLevel ) lvl = Number( $dataEnemies[this._enemyId].meta.tjsSpellLevel );
            if ( $dataEnemies[this._enemyId].meta.tjsAttack4Level ) lvl = Number( $dataEnemies[this._enemyId].meta.tjsAttack4Level );
        }
    }

    lvl = (lvl - 1) / (tjs_max_character_level - 1.00000);

    return lvl;
};
Game_Enemy.prototype.maxTp = function() {
    var value = 100;

    if ( $dataEnemies[this.enemyId()].meta ) {
        if ( $dataEnemies[this.enemyId()].meta.tjsMaxSP ) value = Number( $dataEnemies[this.enemyId()].meta.tjsMaxSP );
        if ( $dataEnemies[this.enemyId()].meta.tjsMaxNp ) value = Number( $dataEnemies[this.enemyId()].meta.tjsMaxNp );
    }

    return value;
};
Game_Enemy.prototype.InitialTp = function() {
    var value = this.maxTp();

    if ( $dataEnemies[this.enemyId()].meta ) {
        if ( $dataEnemies[this.enemyId()].meta.tjsInitSP ) value = Number( $dataEnemies[this.enemyId()].meta.tjsInitSP );
        if ( $dataEnemies[this.enemyId()].meta.tjsInitNp ) value = Number( $dataEnemies[this.enemyId()].meta.tjsInitNp );
    }

    return value;
};
Game_Enemy.prototype.initTp = function() {
    this.setTp( this.InitialTp() );
};

//-----------------------------------------------------------------------------
// Game_Party
//
// The game object class for the party. Information such as gold and items is
// included.
Game_Party.prototype.maxItems = function(/*item*/item) {
    var count = tjs_max_items;

    // Don't check for weapons or armors, only items
    if ( item.etypeId ) return count;

    if ( $dataItems[item.id].meta ) {
        if ( $dataItems[item.id].meta.tjsMaxCount ) count = Number($dataItems[item.id].meta.tjsMaxCount);
    }

    return count;
};

//-----------------------------------------------------------------------------
// Window_ShopBuy
//
// The window for selecting an item to buy on the shop screen.
Window_ShopBuy.prototype.price = function(item) {
    return this._price[this._data.indexOf(item)] || 0;
};
Window_ShopBuy.prototype.makeItemList = function() {
    this._data = [];
    this._price = [];
    for (const goods of this._shopGoods) {
        const item = this.goodsToItem(goods);
        if (item) {
            this._data.push(item);
            this._price.push(goods[2] === 0 ? this.GetPrice(item) : goods[3]);
            // console.log( goods );
            // console.log( item );
        }
    }
};
Window_ShopBuy.prototype.GetPrice = function(item) {
    var price = item.price;

    if (item.meta) {
        if (item.meta.tjsFoodPrice) price = this.CalcFoodPrice( Number(item.meta.tjsFoodPrice) );

        var itemLevel = -1;
        if (item.meta.tjsItemLevel) itemLevel = Number(item.meta.tjsItemLevel);
        if (item.meta.tjsWeaponLevel) itemLevel = Number(item.meta.tjsWeaponLevel);
        if (item.meta.tjsLevel) itemLevel = Number(item.meta.tjsLevel);
        if (itemLevel > 0) {
            if ( (item.meta.tjsLeveledByChapterPrice) || (item.meta.tjsMeleeWeapon) || (item.meta.tjsGun) || (item.meta.tjsArmor) || (item.meta.tjsBook) ) {
                price = this.CalcLevelByChapterPrice( price, itemLevel );
            }
        }
    }

    return Math.ceil(price);
};
Window_ShopBuy.prototype.CalcLevelByChapterPrice = function(base_price, item_level) {
    const chapter = Number($gameVariables.value(tjs_variable_game_chapter));

    const multiplier1 = ((item_level - 1) * 2.21) + 1;
    const multiplier2 = TJS_auto.LerpSkew( 1.00000, 9.12345, chapter / 20.00000, -0.5 );
    const price = base_price * multiplier1 * multiplier2;

    return price;
};
Window_ShopBuy.prototype.CalcFoodPrice = function(base_price) {
    const chapter = Number($gameVariables.value(tjs_variable_game_chapter));

    var price = (base_price * TJS_auto.LerpSkew( 3.25000, 142.12345, chapter / 20.00000, -0.45 )) + (chapter * 2.125) + 1;
    price *= 0.2;

    return price;
};

//-----------------------------------------------------------------------------
// Window_ShopNumber
//
// The window for inputting quantity of items to buy or sell on the shop
// screen.
Window_ShopNumber.prototype.maxDigits = function() {
    return tjs_max_items_digits;
};

//-----------------------------------------------------------------------------
// Game_Player
//
// The game object class for the player. It contains event starting
// determinants and map scrolling functions.
Game_Player.prototype.ConsumeFoodFromSteps = function() {
    tjs_food_steps = 0;

    var starving = 0;
    for (let i = 0; i < $gameParty.size(); i++) {
        if ( $gameParty.members()[i].tp < 1 ) {
            Game_Interpreter.prototype.changeHp.call(
                this, $gameParty.members()[i], Math.round($gameParty.members()[i].mhp * -0.025), true
            );
            starving++;
        }
        else {
            var tpConsume = 1;
        if ( $dataActors[$gameParty.members()[i].actorId()].meta ) {
            if ( $dataActors[$gameParty.members()[i].actorId()].meta.tjsFoodConsume ) tpConsume = Number( $dataActors[$gameParty.members()[i].actorId()].meta.tjsFoodConsume );
        }
            $gameParty.members()[i].gainSilentTp( -tpConsume );
        }
    }

    if (starving > 0) {
        $gameScreen.startFlash([255, 0, 0, 127], 10);
    }
};

Game_Player.prototype.increaseSteps = function() {
    Game_Character.prototype.increaseSteps.call(this);
    if (this.isNormal()) {
        $gameParty.increaseSteps();
    }

    const foodUseSteps = ( $gameVariables.value(tjs_var_steps_food_use) );
    if ( foodUseSteps > 0 ) {
        if (!this.isMoveRouteForcing()) {
            if (this.isInVehicle()) tjs_food_steps += 0.1;
            else tjs_food_steps += 1;
        }

        if ( tjs_food_steps >= foodUseSteps ) this.ConsumeFoodFromSteps();
    }

    if ( !this.isInVehicle() ) TJS_auto.Hunt();
};

//-----------------------------------------------------------------------------
// Game_Action
//
// The game object class for a battle action.
Game_Action.prototype.initialize = function(subject, forcing) {
    this._meta = 0;
    this._subjectMeta = 0;
    this._partyMember = -1;

    this._subjectActorId = 0;
    this._subjectEnemyIndex = -1;
    this._forcing = forcing || false;
    this.setSubject(subject);
    this.clear();
};
Game_Action.prototype.clear = function() {
    this._item = new Game_Item();
    this._targetIndex = -1;

    this._meta = 0;
};
Game_Action.prototype.setSubject = function(subject) {
    if (subject.isActor()) {
        this._subjectActorId = subject.actorId();
        this._subjectEnemyIndex = -1;
    } else {
        this._subjectEnemyIndex = subject.index();
        this._subjectActorId = 0;
    }

    this._partyMember = -1;
    this._enemyId = -1;
    if (subject.isActor()) {
        for (let i = 0; i < $gameParty.members().length; i++) {
            if ( this._subjectActorId == $gameParty.members()[i].actorId() ) this._partyMember = i;
        }
    } else {
        this._enemyId = subject.enemyId();
    }

    /*
    this._subjectMeta = 0;
    if ( this._partyMember > -1 ) {
        if ( $dataActors[this._subjectActorId].meta ) {
            this._subjectMeta = $dataActors[this._subjectActorId].meta;
        }
    }

    if (this._subjectActorId > 0) {
        if ( $dataActors[this._subjectActorId].meta ) {
            this._subjectMeta = $dataActors[this._subjectActorId].meta;
        }
    } else {
        if ( $dataEnemies[$gameTroop.members()[this._subjectEnemyIndex].id].meta ) {
            this._subjectMeta = $dataEnemies[$gameTroop.members()[this._subjectEnemyIndex].id].meta;
        }
    }

    console.log(this._subjectMeta);
    */
};
Game_Action.prototype.apply = function(target) {
    if ( target.isActor() ) {
        for (let i = 0; i < $gameParty.battleMembers().length; i++) {
            if ( target.actorId() == $gameParty.battleMembers()[i].actorId() ) TJS_auto._currentTargetedActor = i;
        }
    } else if ( this._partyMember > -1 ) {
        TJS_auto._currentTargetedActor = this._partyMember;
    } else {
        TJS_auto._currentTargetedActor = 9999;
    }

    const result = target.result();
    this.subject().clearResult();
    result.clear();
    result.used = this.testApply(target);
    result.missed = result.used && Math.random() >= this.itemHit(target);
    result.evaded = !result.missed && Math.random() < this.itemEva(target);
    result.physical = this.isPhysical();
    result.drain = this.isDrain();
    if (result.isHit()) {
        if ( this._partyMember > -1 ) {
            if ( this._meta.tjsMeleeWeapon ) {
                if ( TJS_auto.CheckWeaponBreak(this._partyMember) == true ) {
                    this.updateLastTarget(target);
                    return;
                }
            }
            if ( this._meta.tjsMagicMeleeWeapon ) {
                if ( TJS_auto.CheckWeaponBreak(this._partyMember) == true ) {
                    this.updateLastTarget(target);
                    return;
                }
            }
            if ( this._meta.tjsGun ) {
                if ( TJS_auto.CheckGunBreak(this._partyMember) == true ) {
                    this.updateLastTarget(target);
                    return;
                }
            }
        }

        if (this.item().damage.type > 0) {
            result.critical = Math.random() < this.itemCri(target);
            const value = this.makeDamageValue(target, result.critical);
            this.executeDamage(target, value);
        }
        for (const effect of this.item().effects) {
            this.applyItemEffect(target, effect);
        }
        this.applyItemUserEffect(target);
    }
    this.updateLastTarget(target);
};
Game_Action.prototype.setSkill = function(skillId) {
    this._item.setObject($dataSkills[skillId]);

    this._meta = 0;
    if ( $dataSkills[skillId].meta ) this._meta = $dataSkills[skillId].meta;

    // console.log(this._meta);
};
Game_Action.prototype.setItem = function(itemId) {
    this._item.setObject($dataItems[itemId]);

    this._meta = 0;
    if ( $dataItems[itemId].meta ) this._meta = $dataItems[itemId].meta;
};
Game_Action.prototype.CalcFxDuration = function(element_rate) {
    var turns = 5;
    if ( this._meta.tjsCurseDuration ) turns = Number( this._meta.tjsCurseDuration );
    turns *= element_rate;
    turns = Math.round(turns);

    return turns;
};
Game_Action.prototype.makeDamageValue = function(target, critical) {
    const item = this.item();
    const baseValue = this.evalDamageFormula(target);
    let elementTargetDamageRate = this.calcElementRate(target);
    this.displayMessageAboutElementRate( target, this.getRealItemElementId() );
    let value = baseValue * elementTargetDamageRate;
    const luckSkew = this.GetLuckSkew(this.subject(), target);

    if ( (this._meta.tjsP) && (this._meta.tjsE) && (this.getIsActionPhysicalElement() == false) ) {
        let valuePhysical = baseValue * Number(this._meta.tjsP) * this.calcElementRatePhysical(target);
        let valueElemental = baseValue * Number(this._meta.tjsE) * elementTargetDamageRate;
        let valueElemental2 = 0;
        if (this._meta.tjsE2) valueElemental2 = baseValue * Number(this._meta.tjsE2) * Math.max(0, elementTargetDamageRate - 1);

        value = valuePhysical + valueElemental + valueElemental2;
    }

    if (this._meta.tjsCursePhysicalAttack) {
        const baseStrength = 1.00000 + ((Number(this._meta.tjsCursePhysicalAttack) - 1.00000));
        const curseStrength = Math.max(this.GetCurseStrength( baseStrength, luckSkew ) * elementTargetDamageRate, 1.0);
        target.InflictFxPhysicalAttack( curseStrength );
        target.SetFxTurnsLeft( this.CalcFxDuration(elementTargetDamageRate) );
        if ( curseStrength > 1.00000 ) BattleManager._logWindow.addText( target.name() + " is impaired with reduced physical attack abilities, down to " + Math.round(target._fxPhysicalAttack*100.000000) + "% attack and agility scores!" );
    }
    if (this._meta.tjsCurseMagicalAttack) {
        const baseStrength = 1.00000 + ((Number(this._meta.tjsCurseMagicalAttack) - 1.00000));
        const curseStrength = Math.max(this.GetCurseStrength( baseStrength, luckSkew ) * elementTargetDamageRate, 1.0);
        target.InflictFxMagicalAttack( curseStrength );
        target.SetFxTurnsLeft( this.CalcFxDuration(elementTargetDamageRate) );
        if ( curseStrength > 1.00000 ) BattleManager._logWindow.addText( target.name() + " is impaired with reduced magical attack abilities, down to " + Math.round(target._fxMagicalAttack*100.000000) + "% magical attack and maximum magic points!" );
    }
    if (this._meta.tjsCursePhysicalDefense) {
        const baseStrength = 1.00000 + ((Number(this._meta.tjsCursePhysicalDefense) - 1.00000));
        const curseStrength = Math.max(this.GetCurseStrength( baseStrength, luckSkew ) * elementTargetDamageRate, 1.0);
        target.InflictFxPhysicalDefense( curseStrength );
        target.SetFxTurnsLeft( this.CalcFxDuration(elementTargetDamageRate) );
        if ( curseStrength > 1.00000 ) BattleManager._logWindow.addText( target.name() + " is impaired with reduced physical defense abilities, down to " + Math.round(target._fxPhysicalDefense*100.000000) + "% defense and agility scores!" );
    }
    if (this._meta.tjsCurseMagicalDefense) {
        const baseStrength = 1.00000 + ((Number(this._meta.tjsCurseMagicalDefense) - 1.00000));
        const curseStrength = Math.max(this.GetCurseStrength( baseStrength, luckSkew ) * elementTargetDamageRate, 1.0);
        target.InflictFxMagicalDefense( curseStrength );
        target.SetFxTurnsLeft( this.CalcFxDuration(elementTargetDamageRate) );
        if ( curseStrength > 1.00000 ) BattleManager._logWindow.addText( target.name() + " is impaired with reduced magical defense abilities, down to " + Math.round(target._fxMagicalDefense*100.000000) + "% magical defense and luck scores!" );
    }
    if (this._meta.tjsHpDrain) {
        const vr = (item.damage.variance) * 0.01;
        const vr1 = (1.00000 - vr) + (Math.random() * vr * 2.00000);
        const vr2 = ((1.00000 - vr) + (Math.random() * vr * 2.00000)) * (luckSkew + 1.00000);
        var dr = ( this.GetDrainStrength(Number(this._meta.tjsHpDrain)) * vr1 );
        if ( luckSkew > 0 ) dr = TJS_auto.Lerp( dr, dr * 2.5, luckSkew );
        if ( luckSkew < 0 ) dr = TJS_auto.Lerp( dr, dr * 0.1, -luckSkew );
        dr = Math.round( dr );
        const eId = this.getRealItemElementId();
        target.InflictFxHpDrain( dr, eId );
        target.SetFxTurnsLeft( Math.round(this.CalcFxDuration() * vr2) );
        const dm = Math.round(dr * target.elementRate(eId));
        if ( dm > 0 ) BattleManager._logWindow.addText( target.name() + " now suffers from " + dm + " HP of damage per turn, from " + TJS_auto.GetTextForElement(eId) + " damage!" );
    }

    if (this.isPhysical()) {
        value *= target.pdr;
    }
    if (this.isMagical()) {
        value *= target.mdr;
    }
    if (baseValue < 0) {
        value *= target.rec;
    }
    if (critical) {
        value = this.applyCritical(value);
    }
    value = this.applyVariance(value, item.damage.variance);
    value = this.applyGuard(value, target);
    value = Math.round(value);

    // Shake screen when enemy hits player
    if ( (target.isActor()) && (value > 0) ) {
        $gameScreen.startShake(8, 6, 24);
    }

    return value;
};
Game_Action.prototype.GetLuckSkew = function(attacker, defender) {
    if ( !attacker ) return 0;
    if ( !attacker.luk ) return 0;
    if ( !defender ) return 0;
    if ( !defender.luk ) return 0;
    if ( attacker.luk < 1 ) return 0;
    if ( defender.luk < 1 ) return 0;

    if ( attacker.luk > defender.luk ) {
        const ratio = defender.luk / attacker.luk;
        return 1.00000 - ratio;
    }
    if ( attacker.luk < defender.luk ) {
        const ratio = attacker.luk / defender.luk;
        return -1.00000 + ratio;
    }

    return 0;
};
Game_Action.prototype.GetDrainStrength = function(meta_level) {
    const metaLevel = Math.max(1.00000, meta_level);
    var lvl = 1;
    if ( this._partyMember > -1 ) {
        lvl = $gameParty.members()[this._partyMember].level;
        return TJS_auto.Lerp( metaLevel, metaLevel * 200, (lvl-1)/(tjs_max_character_level - 1.00000) );
    }
    if ( this._enemyId > -1 ) {
        if ( $dataEnemies[this._enemyId].meta ) {
            if ( $dataEnemies[this._enemyId].meta.tjsLevel ) {
                lvl = Number($dataEnemies[this._enemyId].meta.tjsLevel);
                return metaLevel * lvl;
            }
        }
    }
    // return TJS_auto.Lerp( metaLevel, metaLevel * 5, (lvl-1)/(tjs_max_character_level - 1.00000) );
    return metaLevel;
};
Game_Action.prototype.GetCurseStrength = function(meta_level, luck_skew) {
    var metaLevel = Math.max(1.00000, meta_level);
    if ( luck_skew > 0 ) metaLevel = TJS_auto.Lerp( metaLevel, metaLevel * 2.50000, luck_skew );
    if ( luck_skew < 0 ) metaLevel = TJS_auto.Lerp( metaLevel, 1.00000, -luck_skew );
    var lvl = 1;
    if ( this._partyMember > -1 ) lvl = $gameParty.members()[this._partyMember].level;
    if ( this._enemyId > -1 ) {
        if ( $dataEnemies[this._enemyId].meta ) {
            if ( $dataEnemies[this._enemyId].meta.tjsLevel ) lvl = Number($dataEnemies[this._enemyId].meta.tjsLevel);
        }
    }
    return TJS_auto.Lerp( metaLevel, metaLevel * metaLevel, (lvl-1)/(tjs_max_character_level - 1.00000) );
};
Game_Action.prototype.getIsActionPhysicalElement = function() {
    if ( this.getRealItemElementId() == 1 ) return true;

    return false;
};
Game_Action.prototype.calcElementRate = function(target) {
    /*
    if (Number(this.item().damage.elementId) < 0) {
        return this.elementsMaxRate(target, this.subject().attackElements());
    } else {
        return target.elementRate( this.getRealItemElementId() );
    }
    */
    return target.elementRate( this.getRealItemElementId() );
};
Game_Action.prototype.calcElementRatePhysical = function(target) {
    /*
    if (Number(this.item().damage.elementId) < 0) {
        return this.elementsMaxRate(target, this.subject().attackElements());
    } else {
        return target.elementRate( 1 );
    }
    */
    return target.elementRate( 1 );
};
Game_Action.prototype.getRealItemElementId = function() {
    // console.log( $gameParty.members()[this._partyMember].weapons()[0] );

    var element_id = Number(this.item().damage.elementId);
    if (element_id < 1) {
        element_id = 1;

        if ( this._partyMember > -1 ) {
            if ( this.isAttack() ) {
                const traits = $gameParty.members()[this._partyMember].weapons()[0].traits;
                element_id = TJS_auto.GetAttackElementFromTraits( traits );
                if (element_id < 1) element_id = 1;
            }
        } else {
        }
    }

    if (this._meta.tjsElement) {
        element_id = TJS_auto.GetElementIDFromText( this._meta.tjsElement );
    }

    if (this._partyMember > -1) {
        if (this._meta.tjsMeleeWeapon) {
            const traits = $gameParty.members()[this._partyMember].weapons()[0].traits;
            element_id = TJS_auto.GetAttackElementFromTraits( traits );
            if (element_id < 1) element_id = 1;
        }
        if (this._meta.tjsGun) {
            const traits = $gameParty.members()[this._partyMember].equips()[2].traits;
            element_id = TJS_auto.GetAttackElementFromTraits( traits );
            if (element_id < 1) element_id = 10; // Mana Force, the standard for magi-guns, NOT Physical!

            if ($gameParty.members()[this._partyMember].equips()[2].meta) {
                if ($gameParty.members()[this._partyMember].equips()[2].meta.tjsElement) {
                    element_id = TJS_auto.GetElementIDFromText( $gameParty.members()[this._partyMember].equips()[2].meta.tjsElement );
                    if (element_id < 1) element_id = 10; // Mana Force, the standard for magi-guns, NOT Physical!
                }
            }
        }
    }

    return element_id;
};
Game_Action.prototype.displayMessageAboutElementRate = function(target, element_index) {
    if ( !BattleManager._logWindow ) return;

    var element_rate = target.elementRate( element_index ) * 100;
    // BattleManager._logWindow.addText( TJS_auto.GetTextForElement(element_index) + " is " + element_rate + "% effective!" );

    if (element_rate < 99.5) {
        if (element_rate < 1) {
            BattleManager._logWindow.addText( target.name() + " is immune to " + TJS_auto.GetTextForElement(element_index) + "." );
            return;
        }
        if (element_rate < 33) {
            BattleManager._logWindow.addText( target.name() + " is REALLY tough against " + TJS_auto.GetTextForElement(element_index) + "." );
            return;
        }
        if (element_rate < 61) {
            BattleManager._logWindow.addText( target.name() + " is tough against " + TJS_auto.GetTextForElement(element_index) + "." );
            return;
        }
        if (element_rate < 81) {
            BattleManager._logWindow.addText( target.name() + " is somewhat tough against " + TJS_auto.GetTextForElement(element_index) + "." );
            return;
        }
        if (element_rate < 100) {
            BattleManager._logWindow.addText( target.name() + " is slightly tough against " + TJS_auto.GetTextForElement(element_index) + "." );
            return;
        }
    }
    if (element_rate > 100.5) {
        if (element_rate > 349) {
            BattleManager._logWindow.addText( target.name() + " is VERY weak against " + TJS_auto.GetTextForElement(element_index) + "." );
            return;
        }
        if (element_rate > 299) {
            BattleManager._logWindow.addText( target.name() + " is quite weak against " + TJS_auto.GetTextForElement(element_index) + "." );
            return;
        }
        if (element_rate > 249) {
            BattleManager._logWindow.addText( target.name() + " is substantially weak against " + TJS_auto.GetTextForElement(element_index) + "." );
            return;
        }
        if (element_rate > 199) {
            BattleManager._logWindow.addText( target.name() + " is weak against " + TJS_auto.GetTextForElement(element_index) + "." );
            return;
        }
        if (element_rate > 149) {
            BattleManager._logWindow.addText( target.name() + " is a little weak against " + TJS_auto.GetTextForElement(element_index) + "." );
            return;
        }
        if (element_rate > 100) {
            BattleManager._logWindow.addText( target.name() + " is a slightly weak against " + TJS_auto.GetTextForElement(element_index) + "." );
            return;
        }
    }
};
//-----------------------------------------------------------------------------
Window_Base.prototype.lineHeightB = function() {
    return 36 * 0.6;
};

Window_MenuStatus.prototype.numVisibleRows = function() {
    return 6;
};

Window_ItemList.prototype.maxCols = function() {
    return 4;
};

Window_ItemList.prototype.colSpacing = function() {
    return 4;
};

Window_MapName.prototype.open = function() {
    this.refresh();
    this._showCount = 480;
};

Window_SkillList.prototype.maxCols = function() {
    return 4;
};

Window_SkillList.prototype.colSpacing = function() {
    return 4;
};

Window_BattleStatus.prototype.initialize = function(rect) {
    Window_StatusBase.prototype.initialize.call(this, rect);

    this._activeActorId = -1;

    this.frameVisible = false;
    this.openness = 0;
    this._bitmapsReady = 0;
    this.preparePartyRefresh();
};

Window_BattleStatus.prototype.drawItem = function(index) {
    this._activeActorId = $gameParty.members()[index].actorId;

    this.drawItemImage(index);
    this.drawItemStatus(index);
};

Window_BattleStatus.prototype.extraHeight = function() {
    return 12;
};

Window_BattleStatus.prototype.maxCols = function() {
    return 8;
};

Window_BattleStatus.prototype.updatePadding = function() {
    this.padding = 1;
};

Window_BattleStatus.prototype.faceRect = function(index) {
    const rect = this.itemRect(index);
    rect.pad(-1);
    rect.height = this.nameY(rect) + this.gaugeLineHeight() / 2 - rect.y;
    rect.height += 12;
    return rect;
};

Window_BattleStatus.prototype.drawItemImage = function(index) {
    /*
    if ( BattleManager._targets.length > 0 ) {
        console.log( BattleManager._targets );

        this.deselect(index);

        for (let i = 0; i < BattleManager._targets.length; i++) {
            if ( BattleManager._targets[i].isActor() ) {
                if ( BattleManager._targets[i].actorId == $gameParty.battleMembers()[index].actorId ) {
                    this.select(index);
                }
            }
        }
    }
    */

    const actor = this.actor(index);
    const rect = this.faceRect(index);
    this.drawActorFace(actor, rect.x, rect.y, rect.width, rect.height);
};

Window_BattleStatus.prototype.update = function() {
    /*
    this.toneFlipped = false;

    for (let i = 0; i < BattleManager._targets.length; i++) {
        if ( BattleManager._targets[i].isActor() ) {
            if ( BattleManager._targets[i].actorId == this._activeActorId ) {
                this.toneFlipped = true;
            }
        }
    }
    */

    if ( TJS_auto._currentTargetedActor > -1 ) {
        for (let i = 0; i < $gameParty.battleMembers().length; i++) this.deselect(i);

        this.select( TJS_auto._currentTargetedActor );

        if ( TJS_auto._currentTargetedActor > 999 ) TJS_auto._currentTargetedActor = -1;
    }

    Window_StatusBase.prototype.update.call(this);
    if ($gameTemp.isBattleRefreshRequested()) {
        this.preparePartyRefresh();
    }
};

Game_Party.prototype.maxBattleMembers = function() {
    return tjs_max_party_size;
};
Game_Party.prototype.maxGold = function() {
    return 999999999;
};

/*
Sprite_Battleback.prototype.adjustPosition = function() {
    this.width = Math.floor((1000 * Graphics.width) / 816);
    this.height = Math.floor((740 * Graphics.height) / 624);
    this.x = (Graphics.width - this.width) / 2;
    if ($gameSystem.isSideView()) {
        this.y = Graphics.height - this.height;
    } else {
        this.y = 0;
    }
    const ratioX = this.width / this.bitmap.width;
    const ratioY = this.height / this.bitmap.height;
    const scale = Math.max(ratioX, ratioY, 1.0);
    this.scale.x = scale;
    this.scale.y = scale;

    this.x = -40;
    this.y = 0;
    this.scale.x = 2;
    this.scale.y = 2;
};
*/
Sprite_Battleback.prototype.terrainBattleback1Name = function(type) {
    switch (type) {
        case 24:
        case 25:
            return "Wasteland";
        case 26:
        case 27:
            return "DirtField";
        case 32:
        case 33:
            return "Desert";
        case 34:
            return "Lava1";
        case 35:
            return "Lava2";
        case 40:
        case 41:
            return "Snowfield";
        case 42:
            return "Clouds";
        case 4:
        case 5:
            return "PoisonSwamp";
        default:
            return null;
    }
};

Sprite_Battleback.prototype.terrainBattleback2Name = function(type) {
    switch (type) {
        case 20:
        case 21:
            return "Forest";
        case 22:
        case 30:
        case 38:
            return "Cliff";
        case 24:
        case 25:
        case 26:
        case 27:
            return "Wasteland";
        case 32:
        case 33:
            return "Desert";
        case 34:
        case 35:
            return "Lava";
        case 40:
        case 41:
            return "Snowfield";
        case 42:
            return "Clouds";
        case 4:
        case 5:
            return "PoisonSwamp";
        case 36:
            return "cst_PalmTrees_1";
    }
};

Sprite_Gauge.prototype.bitmapWidth = function() {
    return 192;
};

Sprite_Gauge.prototype.bitmapHeight = function() {
    return 32;
};

Sprite_Gauge.prototype.textHeight = function() {
    return 24;
};

Sprite_Gauge.prototype.gaugeHeight = function() {
    return 12;
};

Sprite_Gauge.prototype.drawValue = function() {
    const currentValue = this.currentValue();
    const currentMaxValue = this.currentMaxValue();
    const width = this.bitmapWidth();
    const height = this.textHeight();
    this.setupValueFont();
    this.bitmap.drawText(currentValue + " / " + currentMaxValue, 0, 0, width, height, "right");
};

//-----------------------------------------------------------------------------
// Game_Battler
//
// The superclass of Game_Actor and Game_Enemy. It contains methods for sprites
// and actions.
Game_Battler.prototype.chargeTpByDamage = function(damageRate) {
    // const value = Math.floor(50 * damageRate * this.tcr);
    // this.gainSilentTp(0);
};
Game_Battler.prototype.onBattleStart = function(advantageous) {
    this.setActionState("undecided");
    this.clearMotion();
    this.initTpbChargeTime(advantageous);
    this.initTpbTurn();
    if (!this.isPreserveTp()) {
        this.initTp();
    }

    this.ResetTjsCustomVars();
};
Game_Battler.prototype.onBattleEnd = function() {
    this.clearResult();
    this.removeBattleStates();
    this.removeAllBuffs();
    this.clearActions();
    if (!this.isPreserveTp()) {
        this.clearTp();
    }

    this.ResetTjsCustomVars();

    this.appear();
};
Game_Battler.prototype.onTurnEnd = function() {
    this.clearResult();
    this.regenerateAll();
    this.updateStateTurns();
    this.updateBuffTurns();
    this.removeStatesAuto(2);

    this.DrainHpFromFx();
};

//-----------------------------------------------------------------------------
// Window_EquipStatus
//
// The window for displaying parameter changes on the equipment screen.

Window_EquipStatus.prototype.initialize = function(rect) {
    Window_StatusBase.prototype.initialize.call(this, rect);
    this._actor = null;
    this._tempActor = null;
    this.refresh();
};

Window_EquipStatus.prototype.itemPadding = function() {
    return 2;
};

Window_EquipStatus.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

Window_EquipStatus.prototype.colSpacing = function() {
    return 0;
};

Window_EquipStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        const nameRect = this.itemLineRect(0);
        this.drawActorName(this._actor, nameRect.x, 0, nameRect.width);
        // this.drawActorFace(this._actor, nameRect.x, nameRect.height);
        this.drawAllParams();
    }
};

Window_EquipStatus.prototype.setTempActor = function(tempActor) {
    if (this._tempActor !== tempActor) {
        this._tempActor = tempActor;
        this.refresh();
    }
};

Window_EquipStatus.prototype.drawAllParams = function() {
    for (let i = 0; i < 8; i++) {
        const x = this.itemPadding();
        const y = this.paramY(i);
        this.drawItem(x, y, i);
    }

    for (let i = 0; i < 10; i++) {
        const x = this.itemPadding();
        const y = this.paramY(i + 9);
        this.drawItemX(x, y, i);
    }

    /*
    for (let i = 0; i < 10; i++) {
        const x = this.itemPadding();
        const y = this.paramY(i + 20);
        this.drawItemS(x, y, i);
    }
    */

    this.drawItemS(this.itemPadding(), this.paramY(19), 6);
    this.drawItemS(this.itemPadding(), this.paramY(20), 7);
    this.drawItemS(this.itemPadding(), this.paramY(21), 9);

    this.DrawListOfElementRatesDiff( this.itemPadding(), this.paramY(23) );
};

Window_EquipStatus.prototype.DrawListOfElementRatesDiff = function(x, y) {
    const actor = this._actor;
    const actorT = this._tempActor;
    const lineHeight = this.lineHeight() * 0.6;
    const width = 140;
    const x2 = width + 10;
    const width2 = 50;
    const count = $dataSystem.elements.length;

    this.changeTextColor(ColorManager.systemColor());
    this.drawText( "Effects of damage types:", x, y, x2 + width2 );
    this.resetTextColor();

    for (let i = 1; i < count; i++) {
        const y2 = y + (lineHeight * i);

        this.changeTextColor(ColorManager.systemColor());
        this.drawText( $dataSystem.elements[i], x, y2, width );
        this.resetTextColor();

        const value = Math.round(Number(actor.elementRate(i)) * 100);
        this.drawText( value + "%", x2, y2, width2, "right" );
        this.resetTextColor();

        /*
        this.changeTextColor(ColorManager.systemColor());
        this.drawText( "->", x2 + width2 + 5, y2, 20 );
        this.resetTextColor();
        */

        this.drawRightArrow(x2 + width2, y2);
        this.resetTextColor();

        if (this._tempActor) {
            const value2 = Math.round(Number(actorT.elementRate(i)) * 100);
            this.changeTextColor(ColorManager.paramchangeTextColor(value-value2));
            this.drawText( value2 + "%", x2 + width2 + 34, y2, width2, "right" );
            this.resetTextColor();
        }
    }
};

Window_EquipStatus.prototype.drawItem = function(x, y, paramId) {
    const paramX = this.paramX();
    const paramWidth = this.paramWidth();
    const rightArrowWidth = this.rightArrowWidth();
    this.drawParamName(x, y, paramId);
    if (this._actor) {
        this.drawCurrentParam(paramX, y, paramId);
    }
    this.drawRightArrow(paramX + paramWidth, y);
    if (this._tempActor) {
        this.drawNewParam(paramX + paramWidth + rightArrowWidth, y, paramId);
    }
};

// New
Window_EquipStatus.prototype.drawItemX = function(x, y, xparamId) {
    const paramX = this.paramX();
    const paramWidth = this.paramWidth();
    const rightArrowWidth = this.rightArrowWidth();
    this.drawParamNameX(x, y, xparamId);
    if (this._actor) {
        this.drawCurrentParamX(paramX, y, xparamId);
    }
    this.drawRightArrow(paramX + paramWidth, y);
    if (this._tempActor) {
        this.drawNewParamX(paramX + paramWidth + rightArrowWidth, y, xparamId);
    }
};
Window_EquipStatus.prototype.drawItemS = function(x, y, sparamId) {
    const paramX = this.paramX();
    const paramWidth = this.paramWidth();
    const rightArrowWidth = this.rightArrowWidth();
    this.drawParamNameS(x, y, sparamId);
    if (this._actor) {
        this.drawCurrentParamS(paramX, y, sparamId);
    }
    this.drawRightArrow(paramX + paramWidth, y);
    if (this._tempActor) {
        this.drawNewParamS(paramX + paramWidth + rightArrowWidth, y, sparamId);
    }
};

Window_EquipStatus.prototype.drawParamName = function(x, y, paramId) {
    const width = this.paramX() - this.itemPadding() * 2;
    this.changeTextColor(ColorManager.systemColor());
    this.drawText(TextManager.param(paramId), x, y, width);
    this.resetTextColor();
};

// New
Window_EquipStatus.prototype.drawParamNameX = function(x, y, xparamId) {
    const width = this.paramX() - this.itemPadding() * 2;
    this.changeTextColor(ColorManager.systemColor());
    // this.drawText(TextManager.xparam(xparamId), x, y + 8, width);
    if (xparamId == 0) {this.drawText("Hit Rate", x, y, width);}
    else if (xparamId == 1) {this.drawText("Evade Rate", x, y, width);}
    else if (xparamId == 2) {this.drawText("Crit. Hit Rate", x, y, width);}
    else if (xparamId == 3) {this.drawText("Critical Evade", x, y, width);}
    else if (xparamId == 4) {this.drawText("Magical Evade", x, y, width);}
    else if (xparamId == 5) {this.drawText("Magic Reflect", x, y, width);}
    else if (xparamId == 6) {this.drawText("Counter Attack", x, y, width);}
    else if (xparamId == 7) {this.drawText("HP Regen.", x, y, width);}
    else if (xparamId == 8) {this.drawText("MP Regen.", x, y, width);}
    else if (xparamId == 9) {this.drawText("NP Regen.", x, y, width);}

    this.resetTextColor();
};
Window_EquipStatus.prototype.drawParamNameS = function(x, y, sparamId) {
    const width = this.paramX() - this.itemPadding() * 2;
    this.changeTextColor(ColorManager.systemColor());
    // this.drawText(TextManager.xparam(xparamId), x, y + 8, width);
    if (sparamId == 0) {this.drawText("Target Rate", x, y, width);}
    else if (sparamId == 1) {this.drawText("Guard Effect", x, y, width);}
    else if (sparamId == 2) {this.drawText("Recovery Effect", x, y, width);}
    else if (sparamId == 3) {this.drawText("Pharmacology", x, y, width);}
    else if (sparamId == 4) {this.drawText("MP Cost Rate", x, y, width);}
    else if (sparamId == 5) {this.drawText("NP Charge Rate", x, y, width);}
    else if (sparamId == 6) {this.drawText("Physical Damage", x, y, width);}
    else if (sparamId == 7) {this.drawText("Magical Damage", x, y, width);}
    else if (sparamId == 8) {this.drawText("Floor Damage", x, y, width);}
    else if (sparamId == 9) {this.drawText("EXP Gain Rate", x, y, width);}

    this.resetTextColor();
};

Window_EquipStatus.prototype.drawCurrentParam = function(x, y, paramId) {
    const paramWidth = this.paramWidth();
    this.resetTextColor();
    this.drawText(this._actor.param(paramId), x, y, paramWidth, "right");
};

// New
Window_EquipStatus.prototype.drawCurrentParamX = function(x, y, xparamId) {
    const paramWidth = this.paramWidth();
    const value = this._actor.xparam(xparamId);
    const v = Math.round(Math.max(Math.min(value * 100, 9999), -999));
    this.resetTextColor();
    this.drawText(v + "%", x, y, paramWidth, "right");
};
Window_EquipStatus.prototype.drawCurrentParamS = function(x, y, sparamId) {
    const paramWidth = this.paramWidth();
    const value = this._actor.sparam(sparamId);
    const v = Math.round(Math.max(Math.min(value * 100, 9999), -999) * 10) / 10;
    this.resetTextColor();
    this.drawText(v + "%", x, y, paramWidth, "right");
};

Window_EquipStatus.prototype.drawRightArrow = function(x, y) {
    const rightArrowWidth = this.rightArrowWidth();
    this.changeTextColor(ColorManager.systemColor());
    this.drawText("\u2192", x, y, rightArrowWidth, "center");
};

Window_EquipStatus.prototype.drawNewParam = function(x, y, paramId) {
    const paramWidth = this.paramWidth();
    const newValue = this._tempActor.param(paramId);
    const diffvalue = newValue - this._actor.param(paramId);
    this.changeTextColor(ColorManager.paramchangeTextColor(diffvalue));
    this.drawText(newValue, x, y, paramWidth, "right");
};

// New
Window_EquipStatus.prototype.drawNewParamX = function(x, y, xparamId) {
    const paramWidth = this.paramWidth();
    const newValue = this._tempActor.xparam(xparamId);
    const diffvalue = newValue - this._actor.xparam(xparamId);
    const v = Math.round(Math.max(Math.min(newValue * 100, 9999), -999));
    this.changeTextColor(ColorManager.paramchangeTextColor(diffvalue));
    this.drawText(v + "%", x, y, paramWidth, "right");
};
// New
Window_EquipStatus.prototype.drawNewParamS = function(x, y, sparamId) {
    const paramWidth = this.paramWidth();
    const newValue = this._tempActor.sparam(sparamId);
    const diffvalue = newValue - this._actor.sparam(sparamId);
    const v = Math.round(Math.max(Math.min(newValue * 100, 9999), -999) * 10) / 10;

    if ((sparamId == 6) || (sparamId == 7)) {
        this.changeTextColor(ColorManager.paramchangeTextColor(-diffvalue));
    } else {
        this.changeTextColor(ColorManager.paramchangeTextColor(diffvalue));
    }

    this.drawText(v + "%", x, y, paramWidth, "right");
};

Window_EquipStatus.prototype.rightArrowWidth = function() {
    return 24;
};

Window_EquipStatus.prototype.paramWidth = function() {
    return 60;
};

Window_EquipStatus.prototype.paramX = function() {
    const itemPadding = this.itemPadding();
    const rightArrowWidth = this.rightArrowWidth();
    const paramWidth = this.paramWidth();
    return this.innerWidth - itemPadding - paramWidth * 2 - rightArrowWidth;
};

Window_EquipStatus.prototype.paramY = function(index) {
    // const faceHeight = ImageManager.faceHeight;
    // return faceHeight + Math.floor(this.lineHeight() * (index + 1.25) * 0.65);
    return Math.floor(this.lineHeight() * (index + 1) * 0.6);
};

//-----------------------------------------------------------------------------
// Window_StatusBase
//
// The superclass of windows for displaying actor status.
Window_StatusBase.prototype.initialize = function(rect) {
    Window_Selectable.prototype.initialize.call(this, rect);
    this._additionalSprites = {};
    this.loadFaceImages();
};

Window_StatusBase.prototype.loadFaceImages = function() {
    for (const actor of $gameParty.members()) {
        ImageManager.loadFace(actor.faceName());
    }
};

Window_StatusBase.prototype.refresh = function() {
    this.hideAdditionalSprites();
    Window_Selectable.prototype.refresh.call(this);
};

Window_StatusBase.prototype.hideAdditionalSprites = function() {
    for (const sprite of Object.values(this._additionalSprites)) {
        sprite.hide();
    }
};

Window_StatusBase.prototype.placeActorName = function(actor, x, y) {
    const key = "actor%1-name".format(actor.actorId());
    const sprite = this.createInnerSprite(key, Sprite_Name);
    sprite.setup(actor);
    sprite.move(x, y);
    sprite.show();
};

Window_StatusBase.prototype.placeStateIcon = function(actor, x, y) {
    const key = "actor%1-stateIcon".format(actor.actorId());
    const sprite = this.createInnerSprite(key, Sprite_StateIcon);
    sprite.setup(actor);
    sprite.move(x, y);
    sprite.show();
};

Window_StatusBase.prototype.placeGauge = function(actor, type, x, y) {
    const key = "actor%1-gauge-%2".format(actor.actorId(), type);
    const sprite = this.createInnerSprite(key, Sprite_Gauge);
    sprite.setup(actor, type);
    sprite.move(x, y);
    sprite.show();
};

Window_StatusBase.prototype.createInnerSprite = function(key, spriteClass) {
    const dict = this._additionalSprites;
    if (dict[key]) {
        return dict[key];
    } else {
        const sprite = new spriteClass();
        dict[key] = sprite;
        this.addInnerChild(sprite);
        return sprite;
    }
};

Window_StatusBase.prototype.placeTimeGauge = function(actor, x, y) {
    if (BattleManager.isTpb()) {
        this.placeGauge(actor, "time", x, y);
    }
};

Window_StatusBase.prototype.placeBasicGauges = function(actor, x, y) {
    this.placeGauge(actor, "hp", x, y);
    this.placeGauge(actor, "mp", x, y + this.gaugeLineHeight());
    if ($dataSystem.optDisplayTp) {
        this.placeGauge(actor, "tp", x, y + this.gaugeLineHeight() * 2);
    }
};

Window_StatusBase.prototype.gaugeLineHeight = function() {
    return 24;
};

Window_StatusBase.prototype.drawActorCharacter = function(actor, x, y) {
    this.drawCharacter(actor.characterName(), actor.characterIndex(), x, y);
};

// prettier-ignore
Window_StatusBase.prototype.drawActorFace = function(
    actor, x, y, width, height
) {
    this.drawFace(actor.faceName(), actor.faceIndex(), x, y, width, height);
};

Window_StatusBase.prototype.drawActorName = function(actor, x, y, width) {
    width = width || 160;
    this.changeTextColor(ColorManager.hpColor(actor));
    this.drawText(actor.name(), x, y, width);
};

// New
Window_StatusBase.prototype.drawActorClass = function(actor, x, y, width) {
    width = width || 300;
    this.resetTextColor();
    this.drawText(actor.currentClass().name, x, y, width);
};

Window_StatusBase.prototype.drawActorNickname = function(actor, x, y, width) {
    width = width || 300;
    this.resetTextColor();
    this.drawText(actor.nickname(), x, y, width);
};

Window_StatusBase.prototype.drawActorLevel = function(actor, x, y) {
    this.changeTextColor(ColorManager.systemColor());
    this.drawText(TextManager.levelA, x, y, 50);
    this.resetTextColor();
    this.drawText(actor.level, x + 72, y, 30, "right");
};

Window_StatusBase.prototype.drawActorIcons = function(actor, x, y, width) {
    width = width || 144;
    const iconWidth = ImageManager.iconWidth;
    const icons = actor.allIcons().slice(0, Math.floor(width / iconWidth));
    let iconX = x;
    for (const icon of icons) {
        this.drawIcon(icon, iconX, y + 2);
        iconX += iconWidth;
    }
};

// New
Window_StatusBase.prototype.drawActorSimpleStatus = function(actor, x, y) {
    const lineHeight = this.lineHeight();
    const x2 = x + 170;
    this.drawActorName(actor, x, y);
    this.drawActorLevel(actor, x, y + (lineHeight * 1 * 0.6));
    this.drawActorIcons(actor, x, y + (lineHeight * 2 * 0.6) + 5);
    this.drawActorClass(actor, x2, y);
    this.placeBasicGauges(actor, x2, y + (lineHeight * 0.6) + 5);
};
// New
Window_StatusBase.prototype.drawActorSimpleStatusX = function(actor, x, y) {
    const lineHeight = this.lineHeight() * 0.6;
    const x2 = x + 170;
    this.drawActorName(actor, x, y);
    this.drawActorClass(actor, x2, y);
    this.drawActorNickname(actor, x, y + lineHeight);
    this.drawActorLevel(actor, x, y + (lineHeight * 2));
    this.drawActorIcons(actor, x, y + (lineHeight * 3) + 5);
    this.placeBasicGauges(actor, x2, y + (lineHeight * 2) + 5);
};

Window_StatusBase.prototype.actorSlotName = function(actor, index) {
    const slots = actor.equipSlots();
    return $dataSystem.equipTypes[slots[index]];
};

// New
Window_StatusBase.prototype.DrawListOfStatesText = function(actor, x, y, itemCount) {
    const lineHeight = this.lineHeight() * 0.6;
    const width = 310;
    var numItems = itemCount;
    if ( actor.states().length < numItems ) { numItems = actor.states().length; }
    var index = 0;
    var count = 0;
    for (let i = 0; i < actor.states().length; i++) {
        if ( index >= actor.states().length ) { break; }
        if ( count >= itemCount ) { break; }

        if ( actor.states()[index].iconIndex == 0 ) {
            index += 1;
        } else {
            this.drawText(actor.states()[index].name, x, y + (lineHeight * count), width);
            index += 1;
            count += 1;
        }
    }
};
// New
Window_StatusBase.prototype.DrawListOfElementRates = function(actor, x, y) {
    const lineHeight = this.lineHeight() * 0.6;
    const width = 170;
    const x2 = width + 10;
    const width2 = 60;
    const count = $dataSystem.elements.length;

    this.changeTextColor(ColorManager.systemColor());
    this.drawText( "Effects of damage types:", x, y, x2 + width2 );
    this.resetTextColor();

    for (let i = 1; i < count; i++) {
        this.changeTextColor(ColorManager.systemColor());
        this.drawText( $dataSystem.elements[i], x, y + (lineHeight * (i)), width );
        this.resetTextColor();
        const value = Math.round(Number(actor.elementRate(i)) * 100);
        this.drawText( value + "%", x2, y + (lineHeight * (i)), width2, "right" );
        this.resetTextColor();
    }
};
// New
Window_StatusBase.prototype.Draw_Params = function(x, y) {
    for (let i = 0; i < 8; i++) {
        this.Draw_Item(x, y + (i * 22), i);
    }
};
// New
Window_StatusBase.prototype.Draw_ParamsX = function(x, y) {
    for (let i = 0; i < 10; i++) {
        this.Draw_ItemX(x, y + (i * 22), i);
    }
};
// New
Window_StatusBase.prototype.Draw_ParamsS = function(x, y) {
    this.Draw_ItemS(x, y, 6);
    this.Draw_ItemS(x, y + 22, 7);
    this.Draw_ItemS(x, y + 44, 9);
};
// New
Window_StatusBase.prototype.Draw_CurrentParam = function(x, y, paramId) {
    const paramWidth = this.Param_Width();
    this.resetTextColor();
    this.drawText(this._actor.param(paramId), x, y, paramWidth, "right");
};
// New
Window_StatusBase.prototype.Draw_CurrentParamX = function(x, y, xparamId) {
    const paramWidth = this.Param_Width();
    const value = this._actor.xparam(xparamId);
    const v = Math.round(Math.max(Math.min(value * 100, 9999), -999));
    this.resetTextColor();
    this.drawText(v + "%", x, y, paramWidth, "right");
};
// New
Window_StatusBase.prototype.Draw_CurrentParamS = function(x, y, sparamId) {
    const paramWidth = this.Param_Width();
    const value = this._actor.sparam(sparamId);
    const v = Math.round(Math.max(Math.min(value * 100, 9999), -999) * 10) / 10;
    this.resetTextColor();
    this.drawText(v + "%", x, y, paramWidth, "right");
};
// New
Window_StatusBase.prototype.Draw_Item = function(x, y, paramId) {
    const paramWidth = 160;
    this.Draw_ParamName(x, y, paramId);
    if (this._actor) {
        this.Draw_CurrentParam(paramWidth + x, y, paramId);
    }
};
// New
Window_StatusBase.prototype.Draw_ItemX = function(x, y, xparamId) {
    const paramWidth = 160;
    this.Draw_ParamNameX(x, y, xparamId);
    if (this._actor) {
        this.Draw_CurrentParamX(paramWidth + x, y, xparamId);
    }
};
// New
Window_StatusBase.prototype.Draw_ItemS = function(x, y, sparamId) {
    const paramWidth = 160;
    this.Draw_ParamNameS(x, y, sparamId);
    if (this._actor) {
        this.Draw_CurrentParamS(paramWidth + x, y, sparamId);
    }
};
// New
Window_StatusBase.prototype.Draw_ParamName = function(x, y, paramId) {
    const width = 150;
    this.changeTextColor(ColorManager.systemColor());
    this.drawText(TextManager.param(paramId), x, y, width);
    this.resetTextColor();
};
// New
Window_StatusBase.prototype.Draw_ParamNameX = function(x, y, xparamId) {
    const width = 150;
    this.changeTextColor(ColorManager.systemColor());
    if (xparamId == 0) {this.drawText("Hit Rate", x, y, width);}
    else if (xparamId == 1) {this.drawText("Evade Rate", x, y, width);}
    else if (xparamId == 2) {this.drawText("Crit. Hit Rate", x, y, width);}
    else if (xparamId == 3) {this.drawText("Critical Evade", x, y, width);}
    else if (xparamId == 4) {this.drawText("Magical Evade", x, y, width);}
    else if (xparamId == 5) {this.drawText("Magic Reflect", x, y, width);}
    else if (xparamId == 6) {this.drawText("Counter Attack", x, y, width);}
    else if (xparamId == 7) {this.drawText("HP Regen.", x, y, width);}
    else if (xparamId == 8) {this.drawText("MP Regen.", x, y, width);}
    else if (xparamId == 9) {this.drawText("NP Regen.", x, y, width);}

    this.resetTextColor();
};
// New
Window_StatusBase.prototype.Draw_ParamNameS = function(x, y, sparamId) {
    const width = 150;
    this.changeTextColor(ColorManager.systemColor());
    if (sparamId == 0) {this.drawText("Target Rate", x, y, width);}
    else if (sparamId == 1) {this.drawText("Guard Effect", x, y, width);}
    else if (sparamId == 2) {this.drawText("Recovery Effect", x, y, width);}
    else if (sparamId == 3) {this.drawText("Pharmacology", x, y, width);}
    else if (sparamId == 4) {this.drawText("MP Cost Rate", x, y, width);}
    else if (sparamId == 5) {this.drawText("NP Charge Rate", x, y, width);}
    else if (sparamId == 6) {this.drawText("Physical Damage", x, y, width);}
    else if (sparamId == 7) {this.drawText("Magical Damage", x, y, width);}
    else if (sparamId == 8) {this.drawText("Floor Damage", x, y, width);}
    else if (sparamId == 9) {this.drawText("EXP Gain Rate", x, y, width);}

    this.resetTextColor();
};
// New
Window_StatusBase.prototype.Draw_CurrentParam = function(x, y, paramId) {
    const paramWidth = this.Param_Width();
    this.resetTextColor();
    this.drawText(this._actor.param(paramId), x, y, paramWidth, "right");
};
// New
Window_StatusBase.prototype.Draw_CurrentParamX = function(x, y, xparamId) {
    const paramWidth = this.Param_Width();
    const value = this._actor.xparam(xparamId);
    const v = Math.round(Math.max(Math.min(value * 100, 9999), -999));
    this.resetTextColor();
    this.drawText(v + "%", x, y, paramWidth, "right");
};
// New
Window_StatusBase.prototype.Draw_CurrentParamS = function(x, y, sparamId) {
    const paramWidth = this.Param_Width();
    const value = this._actor.sparam(sparamId);
    const v = Math.round(Math.max(Math.min(value * 100, 9999), -999) * 10) / 10;
    this.resetTextColor();
    this.drawText(v + "%", x, y, paramWidth, "right");
};
// New
Window_StatusBase.prototype.Param_Width = function() {
    return 60;
};
// New
Window_StatusBase.prototype.Draw_MaxNumberActionsPerTurn = function(actor, x, y) {
    this.changeTextColor(ColorManager.systemColor());
    this.drawText( "Maximum number of", x, y, 170 );
    this.drawText( "actions per turn:", x, y + this.lineHeightB(), 170 );
    this.resetTextColor();
    this.drawText( (actor.actionPlusSet().length + 1) + " actions", x, y + (this.lineHeightB() * 2), 170, "left" );
};
// New
Window_StatusBase.prototype.Draw_ChancesActionsPerTurn = function(actor, x, y) {
    this.changeTextColor(ColorManager.systemColor());
    this.drawText( "Chances of actions", x, y, 180 );
    this.drawText( "per turn:", x, y + this.lineHeightB(), 180 );
    this.resetTextColor();

    const values = actor.actionPlusSet().sort((a, b) => (b - a));
    const valuesSize = values.length;

    // this.drawText( "1: 100%", x, y + this.lineHeightB(), 180, "right" );
    this.drawText( "1:", x, y + this.lineHeightB(), 130, "right" );
    this.drawText( "100%", x, y + this.lineHeightB(), 180, "right" );
    for (let i = 0; i < valuesSize; i++) {
        const y2 = y + (this.lineHeightB() * (i+2));
        this.drawText( (i+2) + ":", x, y2, 130, "right" );
        const v = Math.round(Number(values[i]) * 100);
        this.drawText( v + "%", x, y2, 180, "right" );
    }
};

// New
Window_MenuStatus.prototype.drawItemStatus = function(index) {
    const actor = this.actor(index);
    const rect = this.itemRect(index);
    const x = rect.x + 144 + 12;
    const y = rect.y + Math.floor(rect.height / 2 - this.lineHeight() * 1.5);
    // this.drawActorSimpleStatus(actor, 150, y);
    this.drawActorSimpleStatusX(actor, 150, rect.y);
};
// New
Window_MenuStatus.prototype.drawItem = function(index) {
    this.drawPendingItemBackground(index);
    this.drawItemImage(index);
    this.drawItemStatus(index);
    this.DrawActiveStates(index);
};
// New
Window_MenuStatus.prototype.DrawActiveStates = function(index) {
    const actor = this.actor(index);
    const rect = this.itemRect(index);
    const x = rect.x + 630;
    const y = rect.y; // + Math.floor(rect.height / 2 - this.lineHeight() * 1.5);
    const maxNumberItems = Math.floor( rect.height / (this.lineHeight() * 0.6) );
    this.DrawListOfStatesText(actor, x, y, maxNumberItems);
};

// New
Window_Status.prototype.drawBasicInfo = function(x, y) {
    const lineHeight = this.lineHeight() * 0.8;
    this.drawActorLevel(this._actor, x, y + lineHeight * 0);
    this.drawActorIcons(this._actor, x, y + lineHeight * 1);
    this.placeBasicGauges(this._actor, x, y + lineHeight * 2);
};
// New
Window_Status.prototype.drawExpInfo = function(x, y) {
    const lineHeight = this.lineHeight() * 0.6;
    const expTotal = TextManager.expTotal.format(TextManager.exp);
    const expNext = TextManager.expNext.format(TextManager.level);
    this.changeTextColor(ColorManager.systemColor());
    this.drawText(expTotal, x, y + lineHeight * 0, 270);
    this.drawText(expNext, x, y + lineHeight * 2, 270);
    this.resetTextColor();
    this.drawText(this.expTotalValue(), x, y + lineHeight * 1, 270, "right");
    this.drawText(this.expNextValue(), x, y + lineHeight * 3, 270, "right");
};
// New
Window_Status.prototype.drawBlock1 = function() {
    const y = this.block1Y();
    this.drawActorName(this._actor, 2, y, 160);
    this.drawActorClass(this._actor, 200, y, 300);
    this.drawActorNickname(this._actor, 530, y, 300);
};
// New
Window_Status.prototype.drawBlock2 = function() {
    const y = this.block2Y() - 26;
    this.drawActorFace(this._actor, 2, y);
    this.drawBasicInfo(200, y);
    this.drawExpInfo(530, y);
};
// New
Window_Status.prototype.refresh = function() {
    Window_StatusBase.prototype.refresh.call(this);
    if (this._actor) {
        this.drawBlock1();
        this.drawBlock2();

        this.DrawListOfElementRates( this._actor, 0, 164 );

        this.changeTextColor(ColorManager.systemColor());
        this.drawText( "Current Effects/States:", 270, 164, 310 );
        this.resetTextColor();
        this.DrawListOfStatesText( this._actor, 270, 186, 14 );

        this.Draw_Params( 600, 142 );
        this.Draw_ParamsS( 600, 340 );
        this.Draw_ParamsX( 860, 142 );

        // this.Draw_MaxNumberActionsPerTurn( this._actor, 0, 516 ); //170
        // this.Draw_ChancesActionsPerTurn( this._actor, 270, 516 ); // 180
        this.Draw_MaxNumberActionsPerTurn( this._actor, 600, 428 ); //170
        this.Draw_ChancesActionsPerTurn( this._actor, 860, 428 ); // 180
    }
};

//-----------------------------------------------------------------------------
// Scene_Status
//
// The scene class of the status screen.
Scene_Status.prototype.statusWindowRect = function() {
    const wx = 0;
    const wy = this.mainAreaTop();
    const ww = 1110; // Graphics.boxWidth;
    const wh = this.profileWindowRect().y - wy;
    return new Rectangle(wx, wy, ww, wh);
};
Scene_Status.prototype.createStatusParamsWindow = function() {
    // const rect = this.statusParamsWindowRect();
    // this._statusParamsWindow = new Window_StatusParams(rect);
    // this.addWindow(this._statusParamsWindow);
};
Scene_Status.prototype.refreshActor = function() {
    const actor = this.actor();
    this._profileWindow.setText(actor.profile());
    this._statusWindow.setActor(actor);
    // this._statusParamsWindow.setActor(actor);
    this._statusEquipWindow.setActor(actor);
};
Scene_Status.prototype.statusEquipWindowRect = function() {
    const ww = Graphics.boxWidth - 1110;
    const wx = 1110;
    const wy = this.mainAreaTop();
    const wh = this.profileWindowRect().y - wy;
    return new Rectangle(wx, wy, ww, wh);
};

//-----------------------------------------------------------------------------
// Window_ShopCommand
//
// The window for selecting buy/sell on the shop screen.
Window_ShopCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.buy, "buy");
    this.addCommand(TextManager.sell, "sell", !this._purchaseOnly);
    this.addCommand("Quit", "cancel");
};

//-----------------------------------------------------------------------------
// Window_ShopStatus
//
// The window for displaying number of items in possession and the actor's
// equipment on the shop screen.
Window_ShopStatus.prototype.pageSize = function() {
    return 10;
};

//-----------------------------------------------------------------------------
// Window_BattleEnemy
//
// The window for selecting a target enemy on the battle screen.
Window_BattleEnemy.prototype.maxCols = function() {
    return 4;
};

//-----------------------------------------------------------------------------
// Window_SavefileList
//
// The window for selecting a save file on the save and load screens.
Window_SavefileList.prototype.drawItem = function(index) {
    const savefileId = this.indexToSavefileId(index);
    const info = DataManager.savefileInfo(savefileId);
    const rect = this.itemRectWithPadding(index);
    this.resetTextColor();
    this.changePaintOpacity(this.isEnabled(savefileId));
    this.drawTitle(savefileId, rect.x, rect.y);
    if (info) {
        this.drawContents(info, rect);
    }
};
Window_SavefileList.prototype.drawTitle = function(savefileId, x, y) {
    if (savefileId === 0) {
        this.drawText(TextManager.autosave, x, y, 100, "right");
    } else {
        this.drawText(TextManager.file + " " + savefileId, x, y, 100, "right");
    }
};
Window_SavefileList.prototype.drawContents = function(info, rect) {
    const bottom = rect.y + rect.height;
    const right = rect.width;
    const lineHeight = this.lineHeightB();

    this.drawText(info.playtime, rect.x, rect.y + lineHeight, 100, "right");

    if ( info.money != undefined ) this.drawText( String(info.money) + String($dataSystem.currencyUnit), rect.x, rect.y + (lineHeight*2), 100, "right" );
    if ( info.chapter != undefined ) this.drawText( TJS_auto.GetChapterTextForVariable(info.chapter), rect.x, rect.y + (lineHeight*4), 100, "right" );
    if ( info.actors ) {
        for (let i = 0; i < 6; i++) {
            this.drawText( info.actors[i].name() + ", ", rect.x + 150, rect.y + (lineHeight*i), 180 );
            this.drawText( info.actors[i].currentClass().name, rect.x + 330, rect.y + (lineHeight*i), 270 );
            this.drawText( "Level", rect.x + 620, rect.y + (lineHeight*i), 50, "right" );
            this.drawText( String(info.actors[i].level) + ",", rect.x + 680, rect.y + (lineHeight*i), 40, "right" );
            this.drawText( String(info.actors[i].hp) + " / ", rect.x + 730, rect.y + (lineHeight*i), 100, "right" );
            this.drawText( String(info.actors[i].mhp) + " HP", rect.x + 830, rect.y + (lineHeight*i), 100, "right" );
        }
    }
    if ( info.loc != undefined ) {
        this.drawText( "Location:", rect.x + 980, rect.y, right - 980 );
        this.drawText( info.loc, rect.x + 1000, rect.y + (lineHeight*1), right - 1000 );
    }

    /*
    if (rect.width >= 420) {
        this.drawPartyCharacters(info, rect.x + 220, bottom - 8);
    }
    const lineHeight = this.lineHeight();
    const y2 = bottom - lineHeight - 4;
    if (y2 >= lineHeight) {
        this.drawPlaytime(info, rect.x, y2, rect.width);
    }
    */
};

DataManager.maxSavefiles = function() {
    return 50;
};
DataManager.makeSavefileInfo = function() {
    const info = {};
    info.title = $dataSystem.gameTitle;
    info.characters = $gameParty.charactersForSavefile();
    info.faces = $gameParty.facesForSavefile();
    info.playtime = $gameSystem.playtimeText();
    info.timestamp = Date.now();

    // Custom TJS stuff
    info.actors = [ $gameParty.members()[0], $gameParty.members()[1], $gameParty.members()[2],
                    $gameParty.members()[3], $gameParty.members()[4], $gameParty.members()[5] ];
    info.chapter = $gameVariables.value(tjs_variable_game_chapter);
    info.money = $gameParty.gold();
    info.loc = $gameMap.displayName();

    return info;
};

Window_Base.prototype.initialize = function(rect) {
    Window.prototype.initialize.call(this);

    this.toneFlipped = false;

    this.loadWindowskin();
    this.checkRectObject(rect);
    this.move(rect.x, rect.y, rect.width, rect.height);
    this.updatePadding();
    this.updateBackOpacity();
    this.updateTone();
    this.createContents();
    this._opening = false;
    this._closing = false;
    this._dimmerSprite = null;
};
Window_Base.prototype.updateToneInverse = function() {
    const tone = $gameSystem.windowTone();
    this.setTone(-tone[0], -tone[1], -tone[2]);
};
Window_Base.prototype.updateTone = function() {
    if ( this.toneFlipped ) {
        this.updateToneInverse();
        return;
    }

    const tone = $gameSystem.windowTone();
    this.setTone(tone[0], tone[1], tone[2]);
};

BattleManager.startAction = function() {
    TJS_auto._currentTargetedActor = -1;
    // for (let i = 0; i < $gameParty.battleMembers().length; i++) this.deselect(i);

    if ( this._subject.isActor() ) {
        s_id = this._subject.actorId();
        for ( let i = 0; i < $gameParty.battleMembers().length; i++) {
            if ( $gameParty.battleMembers()[i].actorId() == s_id ) TJS_auto._currentTargetedActor = i;
        }
    }

    const subject = this._subject;
    const action = subject.currentAction();
    const targets = action.makeTargets();
    this._phase = "action";
    this._action = action;
    this._targets = targets;
    subject.cancelMotionRefresh();
    subject.useItem(action.item());
    this._action.applyGlobal();
    this._logWindow.startAction(subject, action, targets);
};

BattleManager.endAction = function() {
    this._logWindow.endAction(this._subject);
    this._phase = "turn";
    if (this._subject.numActions() === 0) {
        this.endBattlerActions(this._subject);
        this._subject = null;
    }

    TJS_auto._currentTargetedActor = 9999;
    // for (let i = 0; i < $gameParty.battleMembers().length; i++) this.deselect(i);
};

BattleManager.endTurn = function() {
    this._phase = "turnEnd";
    this._preemptive = false;
    this._surprise = false;

    TJS_auto._currentTargetedActor = 9999;
    // for (let i = 0; i < $gameParty.battleMembers().length; i++) this.deselect(i);
};

BattleManager.startBattle = function() {
    TJS_auto._currentTargetedActor = 9999;

    this._phase = "start";
    $gameSystem.onBattleStart();
    $gameParty.onBattleStart(this._preemptive);
    $gameTroop.onBattleStart(this._surprise);
    this.displayStartMessages();
};

BattleManager.makeRewards = function() {
    const mult = 0.90000 + (Math.random() * 0.20000);

    this._rewards = {
        gold: Math.ceil($gameTroop.goldTotal() * mult),
        exp: Math.ceil($gameTroop.expTotal() * mult),
        items: $gameTroop.makeDropItems()
    };
};

//-----------------------------------------------------------------------------
// Window_BattleLog
//
// The window for displaying battle progress. No frame is displayed, but it is
// handled as a window for convenience.
Window_BattleLog.prototype.maxLines = function() {
    return 14;
};
Window_BattleLog.prototype.messageSpeed = function() {
    return 24;
};
Window_BattleLog.prototype.updateWaitCount = function() {
    if (this._waitCount > 0) {
        this._waitCount -= this.isFastForward() ? 5 : 1;
        if (this._waitCount < 0) {
            this._waitCount = 0;
        }
        return true;
    }
    return false;
};
Window_BattleLog.prototype.startAction = function(subject, action, targets) {
    const item = action.item();
    this.push("performActionStart", subject, action);
    this.push("waitForMovement");
    this.push("performAction", subject, action);
    this.push("showAnimation", subject, targets.clone(), item.animationId);
    // this.displayAction(subject, item);
    this.TjsDisplayAction(subject, item, targets);
};
Window_BattleLog.prototype.TjsDisplayAction = function(subject, item, targets) {
    const numMethods = this._methods.length;

    console.log( item );
    console.log( subject );
    console.log( targets );

    var hasMessage = false;
    if (DataManager.isSkill(item)) {
        if ( $dataSkills[item.id].meta ) {
            hasMessage = true;
            if ( $dataSkills[item.id].meta.tjsMessageAttacks ) this.TjsDisplayItemMessageAttacks(subject, item, targets);
            else if ( $dataSkills[item.id].meta.tjsMessageAttacksWith ) this.TjsDisplayItemMessageAttacksWith(subject, item, targets);
            else if ( $dataSkills[item.id].meta.tjsMessageCasts ) this.TjsDisplayItemMessageCasts(subject, item, targets);
            else if ( $dataSkills[item.id].meta.tjsMessageUses ) this.TjsDisplayItemMessageUses(subject, item, targets);
            else hasMessage = false;
        }

        if ( hasMessage == false ) {
            this.displayItemMessage(item.message1, subject, item);
            this.displayItemMessage(item.message2, subject, item);
        }
    } else {
        this.displayItemMessage(TextManager.useItem, subject, item);
    }

    /*
    if (DataManager.isSkill(item)) {
        this.displayItemMessage(item.message1, subject, item);
        this.displayItemMessage(item.message2, subject, item);
    } else {
        this.displayItemMessage(TextManager.useItem, subject, item);
    }
    */

    if (this._methods.length === numMethods) {
        this.push("wait");
    }
};
Window_BattleLog.prototype.TjsDisplayItemMessageAttacks = function(subject, item, targets) {
    if ( targets.length < 1 ) {
        this.push( "addText", subject.name() + " attacks." );
        return;
    }
    else if ( targets.length == 1 ) {
        this.push( "addText", subject.name() + " attacks " + targets[0].name() + "." );
        return;
    }
    else if ( targets.length > 1 ) {
        var targetsSame = true;
        const target0Name = targets[0].name();
        for (let i = 1; i < targets.length; i++) {
            if ( targets[i].name() !== target0Name ) { targetsSame = false; break; }
        }

        if ( !targetsSame ) this.push( "addText", subject.name() + " attacks multiple targets." );
        else this.push( "addText", subject.name() + " attacks " + targets[0].name() + "." );
        return;
    }
};
Window_BattleLog.prototype.TjsDisplayItemMessageAttacksWith = function(subject, item, targets) {
    if ( targets.length < 1 ) {
        this.push( "addText", subject.name() + " attacks with " + item.name + "." );
        return;
    }
    else if ( targets.length == 1 ) {
        this.push( "addText", subject.name() + " attacks " + targets[0].name() + " with " + item.name + "." );
        return;
    }
    else if ( targets.length > 1 ) {
        var targetsSame = true;
        const target0Name = targets[0].name();
        for (let i = 1; i < targets.length; i++) {
            if ( targets[i].name() !== target0Name ) { targetsSame = false; break; }
        }

        if ( !targetsSame ) this.push( "addText", subject.name() + " attacks multiple targets with " + item.name + "." );
        else this.push( "addText", subject.name() + " attacks " + targets[0].name() + " with " + item.name + "." );
        return;
    }
};
Window_BattleLog.prototype.TjsDisplayItemMessageCasts = function(subject, item, targets) {
    if ( targets.length < 1 ) {
        this.push( "addText", subject.name() + " casts " + item.name + "." );
        return;
    }
    else if ( targets.length == 1 ) {
        this.push( "addText", subject.name() + " casts " + item.name + " at " + targets[0].name() + "." );
        return;
    }
    else if ( targets.length > 1 ) {
        var targetsSame = true;
        const target0Name = targets[0].name();
        for (let i = 1; i < targets.length; i++) {
            if ( targets[i].name() !== target0Name ) { targetsSame = false; break; }
        }

        if ( !targetsSame ) this.push( "addText", subject.name() + " casts " + item.name + " at multiple targets." );
        else this.push( "addText", subject.name() + " casts " + item.name + " at " + targets[0].name() + "." );
        return;
    }
};
Window_BattleLog.prototype.TjsDisplayItemMessageUses = function(subject, item, targets) {
    if ( targets.length < 1 ) {
        this.push( "addText", subject.name() + " uses " + item.name + "." );
        return;
    }
    else if ( targets.length == 1 ) {
        this.push( "addText", subject.name() + " uses " + item.name + " on " + targets[0].name() + "." );
        return;
    }
    else if ( targets.length > 1 ) {
        var targetsSame = true;
        const target0Name = targets[0].name();
        for (let i = 1; i < targets.length; i++) {
            if ( targets[i].name() !== target0Name ) { targetsSame = false; break; }
        }

        if ( !targetsSame ) this.push( "addText", subject.name() + " uses " + item.name + " on multiple targets." );
        else this.push( "addText", subject.name() + " uses " + item.name + " on " + targets[0].name() + "." );
        return;
    }
};
Window_BattleLog.prototype.displayItemMessage = function(fmt, subject, item) {
    if (fmt) {
        this.push("addText", fmt.format(subject.name(), item.name));
    }
};

})();
