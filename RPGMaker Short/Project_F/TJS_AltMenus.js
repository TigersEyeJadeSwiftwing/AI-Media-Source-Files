//=============================================================================
// RPG Maker MZ - TJS Alternative Menu Screens and custom game functions
//=============================================================================
/*:
 * @target MZ
 * @plugindesc Alternative menu screen layouts.
 * @author Tiger's Eye Jade Swiftwing
 *
 * @help TJS_AltMenus.js
 *
 * This plugin changes the layouts of the menu screens.
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
 * @desc Value for reducing damage of incoming attacks when HP gets low, times 0.00001
 *
 * @param HP Dampening Inverse
 * @type number
 * @default 68250
 * @min 1000
 * @max 100000
 * @desc Value for reducing damage of incoming attacks when HP is high, times 0.00001
 *
 * @param Max Items
 * @type number
 * @default 999
 * @min 50
 * @max 9999
 * @desc Maximum number of any item the player's party can carry.
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
 */

(() => {
var TJS_auto = {};
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
            return this.param(2) * ((1.0 - tjs_combat_variance_physical_attack) + (Math.random() * 2.0 * tjs_combat_variance_physical_attack));
        },
        configurable: true
    },
    // Magical Attack, with variance
    ma1: {
        get: function() {
            return this.param(4) * ((1.0 - tjs_combat_variance_magical_attack) + (Math.random() * 2.0 * tjs_combat_variance_magical_attack));
        },
        configurable: true
    },
    // Combined Attack, with variance
    ca1: {
        get: function() {
            var p = this.param(2) * ((1.0 - tjs_combat_variance_physical_attack) + (Math.random() * 2.0 * tjs_combat_variance_physical_attack));
            var m = this.param(4) * ((1.0 - tjs_combat_variance_magical_attack) + (Math.random() * 2.0 * tjs_combat_variance_magical_attack));
            return (p + m) * 0.5;
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
    // Hit point percentage damage dampening factor
    dmpn: {
        get: function() {
            var pct = this._hp / this.param(0);
            pct = 1.00000 - pct;
            pct *= tjs_combat_hp_dampening;
            pct = 1.00000 - pct;
            return pct;
        },
        configurable: true
    },
    // Hit point percentage damage dampening factor, inverted
    dmpi: {
        get: function() {
            var pct = this._hp / this.param(0);
            pct *= tjs_combat_hp_dampening_inverse;
            pct = 1.00000 - pct;
            return pct;
        },
        configurable: true
    }
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
};
Game_BattlerBase.prototype.pa = function(multiplier) {
    return this.pa1 * multiplier * 0.01;
};
Game_BattlerBase.prototype.ma = function(multiplier) {
    return this.ma1 * multiplier * 0.01;
};
Game_BattlerBase.prototype.ca = function(multiplier) {
    return this.ca1 * multiplier * 0.01;
};
Game_BattlerBase.prototype.pd = function(multiplier) {
    return this.pd1 * multiplier * 0.01;
};
Game_BattlerBase.prototype.md = function(multiplier) {
    return this.md1 * multiplier * 0.01;
};
Game_BattlerBase.prototype.cd = function(multiplier) {
    return this.cd1 * multiplier * 0.01;
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

    var value = 100;

    if ( this.isStateAffected(tjs_halfZarakiteState) ) { value = tjs_halfZarakiteTpMax; }
    if ( this.isStateAffected(tjs_halfZarakiteStateF) ) { value = tjs_halfZarakiteFTpMax; }
    if ( this.isStateAffected(tjs_zarakiteState) ) { value = tjs_zarakiteTpMax; }

    return value;
};
// New
Game_BattlerBase.prototype.ValueByLevel = function(vMin, vMax, skew) {
    var lvl = (this.level - 1) / 98.00000;
    if (skew < 0) {
        var lvl2 = lvl * lvl;
        lvl = (lvl * (1 + skew)) + (lvl2 * -skew);
    }
    if (skew > 0) {
        var lvl2 = 1.00000 - lvl;
        lvl2 = lvl2 * lvl2;
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
        var v2 = this.ValueByLevel(0.320, 0.9625, 1.00);
        var v3 = this.ValueByLevel(0.250, 0.9125, 0.50);
        var v4 = this.ValueByLevel(0.100, 0.8725, 0.25);
        var v5 = this.ValueByLevel(0.010, 0.8025, 0.10);
        var c = Math.round(this.ValueByLevel(2, 5, 0.640));
        if (c > 0.1) ar.push(v1);
        if (c > 1.1) ar.push(v2);
        if (c > 2.1) ar.push(v3);
        if (c > 3.1) ar.push(v4);
        if (c > 4.1) ar.push(v5);
    }
    if ( this.hasSkill(tjs_skill_race_female_halfZarakite) && (!this.isStateAffected(tjs_decapitatedState)) ) {
        var v1 = this.ValueByLevel(0.500, 0.750, 0);
        ar.push(v1);
    }

    // Class
    if ( this.hasSkill(tjs_skill_class_warrior) ) {
        var v1 = this.ValueByLevel(0.640, 0.950, 1.00);
        var v2 = this.ValueByLevel(0.320, 0.925, 0.64);
        var v3 = this.ValueByLevel(0.160, 0.865, 0.32);
        var v4 = this.ValueByLevel(0.080, 0.775, 0.16);
        var v5 = this.ValueByLevel(0.040, 0.680, -0.08);
        var v6 = this.ValueByLevel(0.020, 0.600, -0.16);
        var v7 = this.ValueByLevel(0.014, 0.500, -0.24);
        var v8 = this.ValueByLevel(0.010, 0.400, -0.32);
        var c = Math.round(this.ValueByLevel(2, 8, 0.640));
        if (c > 0.1) ar.push(v1);
        if (c > 1.1) ar.push(v2);
        if (c > 2.1) ar.push(v3);
        if (c > 3.1) ar.push(v4);
        if (c > 4.1) ar.push(v5);
        if (c > 5.1) ar.push(v6);
        if (c > 6.1) ar.push(v7);
        if (c > 7.1) ar.push(v8);
    }
    if ( this.hasSkill(tjs_skill_class_warrior_dual) ) {
        var v1 = this.ValueByLevel(0.500, 0.925, 0.95);
        var v2 = this.ValueByLevel(0.300, 0.900, 0.62);
        var v3 = this.ValueByLevel(0.150, 0.825, 0.28);
        var v4 = this.ValueByLevel(0.070, 0.725, 0.12);
        var v5 = this.ValueByLevel(0.036, 0.625, -0.10);
        var v6 = this.ValueByLevel(0.018, 0.540, -0.21);
        var v7 = this.ValueByLevel(0.012, 0.450, -0.36);
        var v8 = this.ValueByLevel(0.010, 0.333, -0.55);
        var c = Math.round(this.ValueByLevel(2, 8, 0.325));
        if (c > 0.1) ar.push(v1);
        if (c > 1.1) ar.push(v2);
        if (c > 2.1) ar.push(v3);
        if (c > 3.1) ar.push(v4);
        if (c > 4.1) ar.push(v5);
        if (c > 5.1) ar.push(v6);
        if (c > 6.1) ar.push(v7);
        if (c > 7.1) ar.push(v8);
    }
    if ( this.hasSkill(tjs_skill_class_wizard) ) {
        var v1 = this.ValueByLevel(0.040, 0.250, 0.125);
        var v2 = this.ValueByLevel(0.010, 0.125, -0.400);
        var c = Math.round(this.ValueByLevel(1, 2, 0));
        if (c > 0.1) ar.push(v1);
        if (c > 1.1) ar.push(v2);
    }
    if ( this.hasSkill(tjs_skill_class_witch) ) {
        var v1 = this.ValueByLevel(0.175, 0.800, 0.500);
        var v2 = this.ValueByLevel(0.120, 0.625, 0.250);
        var v3 = this.ValueByLevel(0.040, 0.500, 0.000);
        var v4 = this.ValueByLevel(0.010, 0.425, -0.125);
        var c = Math.round(this.ValueByLevel(1, 4, 0.250));
        if (c > 0.1) ar.push(v1);
        if (c > 1.1) ar.push(v2);
        if (c > 2.1) ar.push(v3);
        if (c > 3.1) ar.push(v4);
    }
    if ( this.hasSkill(tjs_skill_class_thief) ) {
        var v1 = this.ValueByLevel(0.125, 0.7225, 0.400);
        var v2 = this.ValueByLevel(0.090, 0.5750, 0.200);
        var v3 = this.ValueByLevel(0.025, 0.4125, 0.000);
        var v4 = this.ValueByLevel(0.010, 0.3125, -0.200);
        var c = Math.round(this.ValueByLevel(1, 4, 0.100));
        if (c > 0.1) ar.push(v1);
        if (c > 1.1) ar.push(v2);
        if (c > 2.1) ar.push(v3);
        if (c > 3.1) ar.push(v4);
    }

    return ar;
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
    this._TjsMapData = new TjsMapData();
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

    if ($dataMap[mapId].meta) this._TjsMapData.ReadFromMeta( $dataMap[mapId].meta );
    this._TjsMapData.UpdateGameVars();
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
	this._foodSteps = 100;
	this._huntChanceSmall = 0;
	this._huntChanceLarge = 0;
	this._decapBase = 0.00000;
	this._suppressDecap = false;
	this._shirtOff = true;
};
TjsMapData.prototype.CopyFrom = function(other) {
    if (!other) return;

	this._foodSteps = other._foodSteps;
	this._huntChanceSmall = other._huntChanceSmall;
	this._huntChanceLarge = other._huntChanceLarge;
	this._decapBase = other._decapBase;
	this._suppressDecap = other._suppressDecap;
	this._shirtOff = other._shirtOff;
};
TjsMapData.prototype.ReadFromMeta = function(meta) {
    if (!meta) return;

    this.SetDefaults();

	if (meta.tjsFoodSteps) this._foodSteps = Number(meta.tjsFoodSteps);
	if (meta.tjsHuntSmall) this._huntChanceSmall = Number(meta.tjsHuntSmall);
	if (meta.tjsHuntLarge) this._huntChanceLarge = Number(meta.tjsHuntLarge);
	if (meta.tjsDecapBase) this._decapBase = Number(meta.tjsDecapBase);
	if (meta.tjsSuppressDecapOff) this._suppressDecap = false;
	if (meta.tjsSuppressDecapOn) this._suppressDecap = true;
	if (meta.tjsShirtOff) this._shirtOff = true;
	if (meta.tjsShirtOn) this._shirtOff = false;
};
TjsMapData.prototype.UpdateGameVars = function() {
    $gameVariables.setValue( tjs_var_steps_food_use, Number(this._foodSteps) );
    $gameVariables.setValue( tjs_hunting_chance_small, Number(this._huntChanceSmall) );
    $gameVariables.setValue( tjs_hunting_chance_large, Number(this._huntChanceLarge) );
    $gameVariables.setValue( tjs_var_decap_base, Number(this._decapBase) );
    $gameVariables.setValue( tjs_var_decap_chance, Number(this._decapBase) * Number($gameVariables.value(tjs_var_decap_modifier)) * 0.01000 );
    $gameSwitches.setValue( tjs_switch_suppress_decap, Boolean(this._suppressDecap) );
    $gameSwitches.setValue( tjs_switch_wearing_shirt, Boolean(!this._shirtOff) );

    if ( !$gameParty.members()[0].isStateAffected(tjs_decapitatedState) ) {
        if ( $gameSwitches.value(tjs_switch_wearing_shirt) == false ) {
            $gameParty.members()[0].setCharacterImage('img/characters/walking_Daniel1', 4);
            $gameParty.members()[0].setFaceImage('img/faces/face_Daniel1', 4);
        } else {
            $gameParty.members()[0].setCharacterImage('img/characters/walking_Daniel1', 0);
            $gameParty.members()[0].setFaceImage('img/faces/face_Daniel1', 0);
        }
    }
};
//-----------------------------------------------------------------------------
// TJS
//-----------------------------------------------------------------------------
function TJS() {
	this.initialize.apply(this, arguments);
	this.registerPluginCommands();
}
TJS.prototype.initialize = function() {
	// this.registerPluginCommands();
};
// Utility
TJS.prototype.Lerp = function(a, b, towardsB) {
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
            const level_factor = ($gameParty.members()[i].level - 1) / 98.00000;
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
        // $gameMap._interpreter.setWaitMode('message');
        // this.setWaitMode('message');
        Game_Interpreter.prototype.setWaitMode.call(this, 'message');
    } else {
        $gameVariables.setValue(varId, v);
    }
};
// Thief stuff
TJS.prototype.CalculateThiefChanceOfSuccess = function(thief_level, thief_detection_level, trap_level, starting_chance) {
    var chance = starting_chance * 0.0001;

    var chance_skewed = 1.00000 - chance;
    chance_skewed *= chance_skewed;
    chance_skewed = 1.00000 - chance_skewed;
    chance = TJS_auto.Lerp(chance, chance_skewed, thief_level * 0.01);

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
        party_member_who_succeeded = TJS_auto.CheckIfOpenedLock(i, lockLevel, chance) * (i + 1);
        if ( party_member_who_succeeded < 0 ) { party_member_who_succeeded = -1; break; }
        if ( party_member_who_succeeded > 0 ) { break; }
    }

    $gameVariables.setValue(varId, party_member_who_succeeded);
};
TJS.prototype.CheckWhoHackedThing = function(args) {
    const thingLevel = Number(args.ThingLevel);
    const chance = Number(args.Chance);
    const varId = Number(args.Variable);

    var party_member_who_succeeded = 0;
    for (let i = 0; i < $gameParty.size(); i++) {
        party_member_who_succeeded = TJS_auto.CheckIfThingHacked(i, thingLevel, chance) * (i + 1);
        if ( party_member_who_succeeded < 0 ) { party_member_who_succeeded = -1; break; }
        if ( party_member_who_succeeded > 0 ) { break; }
    }

    $gameVariables.setValue(varId, party_member_who_succeeded);
};
// Zarakite and half zarakite race / skill / state stuff
TJS.prototype.ApplyStatesForRaceToParty = function() {

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
	PluginManager.registerCommand("TJS_AltMenus", "Set Hunting Active", this.pluginCommand_SetHuntingActive);
	PluginManager.registerCommand("TJS_AltMenus", "Set Hunting Chances", this.pluginCommand_SetHuntingChances);
	PluginManager.registerCommand("TJS_AltMenus", "Show Class Choice List", this.pluginCommand_ChooseCharacterClassChoiceList);
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

    // var valueMax = 100;
    // if ( $gameActors.actor(actorId).isStateAffected(60) ) { valueMax = 500; }
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
    if ( classIndex == tjs_class_mage ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_staff;
    }
    if ( classIndex == tjs_class_witch ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_longsword;
    }
    if ( classIndex == tjs_class_wizard ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_staff;
    }
    if ( classIndex == tjs_class_thief ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_longsword;
    }
    if ( classIndex == tjs_class_ranger ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_dual_swords;
    }
    if ( classIndex == tjs_class_axe_master_mage ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_hand_ax;
    }
    if ( classIndex == tjs_class_axe_master_witch ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_hand_ax;
    }
    if ( classIndex == tjs_class_axe_master_thief ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_hand_ax;
    }
    if ( classIndex == tjs_class_mage_witch ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_longsword;
    }
    if ( classIndex == tjs_class_thief_mage ) {
        nClass = classIndex;
        weaponIndex = tjs_weapon_longsword;
    }

    $gameParty.members()[partyMember].changeClass(nClass, false);
    $gameParty.gainItem($dataWeapons[weaponIndex], 1);
    $gameParty.members()[partyMember].changeEquipById(1, weaponIndex);
};
TJS.prototype.pluginCommand_ChooseCharacterClassChoiceList = function(args) {
    var partyMemberIndex = Number(args.PartyMemberIndex);
    var windowLocation = Number(args.WindowLocation);

    const choiceListText = ["Axe Master","Combat Mage","Witch","Wizard","Thief","Ranger","Axe Master / Mage","Axe Master / Witch","Axe Master / Thief","Mage / Witch","Thief / Mage"];
    const choiceListValues = [tjs_class_axe_master,tjs_class_mage,tjs_class_witch,tjs_class_wizard,tjs_class_thief,tjs_class_ranger,tjs_class_axe_master_mage,tjs_class_axe_master_witch,tjs_class_axe_master_thief,tjs_class_mage_witch,tjs_class_thief_mage];

    $gameMessage.setChoices(choiceListText, 0, -1);
    $gameMessage.setChoiceBackground(1);
    $gameMessage.setChoicePositionType(windowLocation);
    $gameMessage.setChoiceCallback(n => {
        TJS_auto.SetCharacterClass(partyMemberIndex, choiceListValues[n]);
    });
    Game_Interpreter.prototype.setWaitMode.call(this, 'message');
};
// TJS.prototype. = function()

TJS_auto = new TJS();

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

//-----------------------------------------------------------------------------
// Game_Party
//
// The game object class for the party. Information such as gold and items is
// included.
Game_Party.prototype.maxItems = function() {
    return tjs_max_items;
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

    for (let i = 0; i < $gameParty.size(); i++) {
        if ( $gameParty.members()[i].tp < 1 ) {
            Game_Interpreter.prototype.changeHp.call(
                this, $gameParty.members()[i], $gameParty.members()[i].mhp * -0.05, true
            );
        }
        else $gameParty.members()[i].gainSilentTp(-1);
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

    this._subjectMeta = 0;
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
Game_Action.prototype.makeDamageValue = function(target, critical) {
    const item = this.item();
    const baseValue = this.evalDamageFormula(target);
    let elementTargetDamageRate = this.calcElementRate(target);
    let value = baseValue * elementTargetDamageRate;

    if ( (this._meta.tjsP) && (this._meta.tjsE) && (this.getIsActionPhysicalElement() == false) ) {
        let valuePhysical = baseValue * Number(this._meta.tjsP) * this.calcElementRatePhysical(target);
        let valueElemental = baseValue * Number(this._meta.tjsE) * elementTargetDamageRate;
        let valueElemental2 = 0;
        if (this._meta.tjsE2) valueElemental2 = baseValue * Number(this._meta.tjsE2) * Math.max(0, elementTargetDamageRate - 1);

        value = Math.round(valuePhysical + valueElemental + valueElemental2);
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
    return value;
};
Game_Action.prototype.getIsActionPhysicalElement = function() {
    if ( Number(this.item().damage.elementId) == 1 ) return true;

    return false;
};
Game_Action.prototype.calcElementRate = function(target) {
    if (this.item().damage.elementId < 0) {
        return this.elementsMaxRate(target, this.subject().attackElements());
    } else {
        return target.elementRate(this.item().damage.elementId);
    }
};
Game_Action.prototype.calcElementRatePhysical = function(target) {
    if (this.item().damage.elementId < 0) {
        return this.elementsMaxRate(target, this.subject().attackElements());
    } else {
        return target.elementRate( 1 );
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

Game_Party.prototype.maxBattleMembers = function() {
    return 16;
};

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

Game_Battler.prototype.chargeTpByDamage = function(damageRate) {
    // const value = Math.floor(50 * damageRate * this.tcr);
    this.gainSilentTp(0);
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
    if (xparamId == 1) {this.drawText("Evade Rate", x, y, width);}
    if (xparamId == 2) {this.drawText("Crit. Hit Rate", x, y, width);}
    if (xparamId == 3) {this.drawText("Critical Evade", x, y, width);}
    if (xparamId == 4) {this.drawText("Magical Evade", x, y, width);}
    if (xparamId == 5) {this.drawText("Magic Reflect", x, y, width);}
    if (xparamId == 6) {this.drawText("Counter Attack", x, y, width);}
    if (xparamId == 7) {this.drawText("HP Regen.", x, y, width);}
    if (xparamId == 8) {this.drawText("MP Regen.", x, y, width);}
    if (xparamId == 9) {this.drawText("SP Regen.", x, y, width);}
    this.resetTextColor();
};
Window_EquipStatus.prototype.drawParamNameS = function(x, y, sparamId) {
    const width = this.paramX() - this.itemPadding() * 2;
    this.changeTextColor(ColorManager.systemColor());
    // this.drawText(TextManager.xparam(xparamId), x, y + 8, width);
    if (sparamId == 0) {this.drawText("Target Rate", x, y, width);}
    if (sparamId == 1) {this.drawText("Guard Effect", x, y, width);}
    if (sparamId == 2) {this.drawText("Recovery Effect", x, y, width);}
    if (sparamId == 3) {this.drawText("Pharmacology", x, y, width);}
    if (sparamId == 4) {this.drawText("MP Cost Rate", x, y, width);}
    if (sparamId == 5) {this.drawText("SP Charge Rate", x, y, width);}
    if (sparamId == 6) {this.drawText("Physical Damage", x, y, width);}
    if (sparamId == 7) {this.drawText("Magical Damage", x, y, width);}
    if (sparamId == 8) {this.drawText("Floor Damage", x, y, width);}
    if (sparamId == 9) {this.drawText("XP Gain Rate", x, y, width);}
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
    this.drawText(actor.level, x + 80, y, 22, "right");
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
    if (xparamId == 1) {this.drawText("Evade Rate", x, y, width);}
    if (xparamId == 2) {this.drawText("Crit. Hit Rate", x, y, width);}
    if (xparamId == 3) {this.drawText("Critical Evade", x, y, width);}
    if (xparamId == 4) {this.drawText("Magical Evade", x, y, width);}
    if (xparamId == 5) {this.drawText("Magic Reflect", x, y, width);}
    if (xparamId == 6) {this.drawText("Counter Attack", x, y, width);}
    if (xparamId == 7) {this.drawText("HP Regen.", x, y, width);}
    if (xparamId == 8) {this.drawText("MP Regen.", x, y, width);}
    if (xparamId == 9) {this.drawText("SP Regen.", x, y, width);}
    this.resetTextColor();
};
// New
Window_StatusBase.prototype.Draw_ParamNameS = function(x, y, sparamId) {
    const width = 150;
    this.changeTextColor(ColorManager.systemColor());
    if (sparamId == 0) {this.drawText("Target Rate", x, y, width);}
    if (sparamId == 1) {this.drawText("Guard Effect", x, y, width);}
    if (sparamId == 2) {this.drawText("Recovery Effect", x, y, width);}
    if (sparamId == 3) {this.drawText("Pharmacology", x, y, width);}
    if (sparamId == 4) {this.drawText("MP Cost Rate", x, y, width);}
    if (sparamId == 5) {this.drawText("SP Charge Rate", x, y, width);}
    if (sparamId == 6) {this.drawText("Physical Damage", x, y, width);}
    if (sparamId == 7) {this.drawText("Magical Damage", x, y, width);}
    if (sparamId == 8) {this.drawText("Floor Damage", x, y, width);}
    if (sparamId == 9) {this.drawText("XP Gain Rate", x, y, width);}
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
    this.drawText( "Maximum number of actions", x, y, 250 );
    this.drawText( "per turn:", x, y + this.lineHeightB(), 250 );
    this.resetTextColor();
    this.drawText( actor.actionPlusSet().length + 1, x, y + this.lineHeightB(), 250, "right" );
};
// New
Window_StatusBase.prototype.Draw_ChancesActionsPerTurn = function(actor, x, y) {
    this.changeTextColor(ColorManager.systemColor());
    this.drawText( "Chances of actions", x, y, 180 );
    this.drawText( "per turn:", x, y + this.lineHeightB(), 180 );
    this.resetTextColor();

    const values = actor.actionPlusSet().sort((a, b) => (b - a));
    const valuesSize = values.length;
    this.drawText( "1: 100%", x, y + this.lineHeightB(), 180, "right" );
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
    this.drawActorSimpleStatus(actor, 150, y);
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

        this.Draw_Params( 600, 164 );
        this.Draw_ParamsS( 600, 362 );
        this.Draw_ParamsX( 860, 164 );

        this.Draw_MaxNumberActionsPerTurn( this._actor, 0, 516 );
        this.Draw_ChancesActionsPerTurn( this._actor, 270, 516 );
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
*/
})();
