/*:
 * @target MZ
 * @plugindesc JS Classes.
 * @author DGN
 *
 * @help DGN_classes.js
 *
 * Classes.
 *
 * ----- Plugin List:
 * DGN_globals.js
 * DGN_core.js
 * DGN_classes.js
 * DGN_functions.js
 */

/// JS Classes

class dgnExpLevelList {
    constructor() {
        this.xp_base = [0];
        this.xp_add = [0];
    }
    Init() {
        var accum_base = 0;
        var accum_add = 0;

        for (let i = 1; i <= dragon_max_character_level; i++) {
            let level_factor = i / dragon_max_character_level;
            let level_factor_base = Math.pow(level_factor, dragon_EXP_levels_base_pow);
            let level_factor_add = Math.pow(level_factor, dragon_EXP_levels_base_pow);

            accum_base += DGN.Lerp(dragon_EXP_levels_base_min, dragon_EXP_levels_base_max, level_factor_base);
            accum_add += DGN.Lerp(dragon_EXP_levels_add_min, dragon_EXP_levels_add_max, level_factor_add);

            this.xp_base.push(accum_base);
            this.xp_add.push(accum_add);
        }
    }
    Exp(level, base_multiplier, addition_multiplier) {
        if ((this.xp_base.length < 5) || (this.xp_add.length < 5))
            return level;

        const lvl = (level - 1).clamp(0, dragon_max_character_level);

        return Math.round((this.xp_base[lvl] * base_multiplier) + (this.xp_add[lvl] * addition_multiplier));
    }
};

class dgnInitParty {
    constructor() {
        this.party = [];
        this.party_pool = [];
        this.class_name = [];
        this.class_desc = [];
        this.active_actor_index = -1;
        this.active_party_index = -1;
        this.active_pool_index = -1;
        this.info_intro_start_index = -1;

        this.party.push(1);

        for (let i = 2; i < $dataActors.length; i++) {
            if (!$dataActors[i]) continue;
            if ($dataActors[i].name.length < 1) continue;
            if (!$dataActors[i].is_pc) continue;
            this.party_pool.push(i);
        }

        for (let i = 1; i < $dataClasses.length; i++) {
            this.class_name.push($dataClasses[i].name);
            this.class_desc.push($dataClasses[i].description);
        }

        for (let a = 0; a < this.party.length; a++)
            $gameActors.actor(this.party[a]).changeClass(1, false);
        for (let a = 0; a < this.party_pool.length; a++)
            $gameActors.actor(this.party_pool[a]).changeClass(1, false);

        this.data_party = [];
        this.data_party.push(this.GenerateActorData(1, true));
        this.data_pool = [];
        for (let i = 0; i < this.party_pool.length; i++)
            this.data_pool.push(this.GenerateActorData(this.party_pool[i], false));

        this.data_pool.sort( (a, b) => a[0] - b[0] );

        this.data_info = [];
        const txt_intro = "Please build your adventuring party.\\LB\\LB" +
                            "    Your current party is shown on the left.  The leader, who is the first member, must always be " +
                            "included in your party and cannot be removed.  After starting the game, the party's formation may " +
                            "be changed so that members stand in a different order, but regardless of who stands in front at " +
                            "any time, the leader will always be in charge, and will always be the usual speaker who primarily " +
                            "does the talking when having conversations with NPCs throughout the game.\\LB" +
                            "    You will need to pick a character class for each member of your party.  This window will display " +
                            "character attributes and characteristics of various sorts for each potential member, as well as " +
                            "information about character classes, and each candidate for your party.\\LB" +
                            "    You may choose up to " + String(dragon_max_starting_party_members) + " characters for " +
                            "your adventuring party.  A good number is around 8 or so.  Having more members in your party makes " +
                            "winning battles much easier, but also means progress throughout the game is slower because " +
                            "experience points for defeating enemies gets spread out across more people, and also because " +
                            "more money needs to be gathered from enemies and treasure collected to be spent on more gear " +
                            "for more player characters.\\LB" +
                            "    Keep in mind that weapons and other equipment have a limited number of times they can be " +
                            "used before they wear out and break.  Its normal to buy extra weapons and other gear while in " +
                            "towns and marketplaces because of this.\\LB" +
                            "    If the information in this window takes more than one page to display, select this window and " +
                            "then use up and down controls to page through the data.";
        const t_intro_0 = {
            text_window: true,
            text_header: "Introduction",
            text: txt_intro
        };

        const data_entry_0 = [ 10000, "Introduction", [t_intro_0, t_intro_0, t_intro_0, t_intro_0] ];
        this.data_info.push(data_entry_0);

        for (let i = 0; i < this.party.length; i++)
            this.data_info.push(this.GenerateInfoData(this.party[i]));
        for (let i = 0; i < this.party_pool.length; i++)
            this.data_info.push(this.GenerateInfoData(this.party_pool[i]));

        this.data_info.sort( (a, b) => a[0] - b[0] );
        for (let i = 0; i < this.data_info.length; i++) {
            if (this.data_info[0] == 10000) {
                this.info_intro_start_index = i;
                break;
            }
        }
    }
    GenerateActorData(game_actor_id, is_party) {
        if (game_actor_id < 1) return null;

        const actor = $gameActors.actor(game_actor_id);
        const actor_cls = actor.currentClass();

        const a1 = {
            actor_party_init: true,
            actor_name: actor.name(),
            actor_id: game_actor_id,
            actor_class: actor_cls.name,
            actor_class_id: actor_cls.id,
            actor_is_party: is_party
        };

        const d = [ game_actor_id, actor.name(), [a1] ];

        return d;
    }
    GenerateInfoData(game_actor_id) {
        if (game_actor_id < 1) return null;

        const a = $gameActors.actor(game_actor_id);
        const a_name = a.name();
        const a_class = a.currentClass();
        const a_class_name = a_class.name;

        const a1 = {
            actor_info_window: true,
            actor_id: game_actor_id,
            actor_name: a_name,
            actor_class: a_class,
            actor_class_id: a_class.id,
            actor_class_name: a_class_name
        };

        const d = [ game_actor_id, a.name(), [a1, a1, a1, a1] ];

        return d;
    }
    UpdateData() {
        for (let i = 0; i < this.data_party.length; i++)
            this.data_party[i] = this.GenerateActorData((this.data_party[i])[0], true);
        for (let i = 0; i < this.data_pool.length; i++)
            this.data_pool[i] = this.GenerateActorData((this.data_pool[i])[0], false);

        for (let i = 0; i < this.data_info.length; i++) {
            if ((this.data_info[i])[0] < 10000)
                this.data_info[i] = this.GenerateInfoData( (this.data_info[i])[0] );
        }
    }
    DataParty() {
        return this.data_party;
    }
    DataPool() {
        return this.data_pool;
    }
    DataInfo() {
        return this.data_info;
    }
    DataInfoIntro() {
        return this.info_intro_start_index;
    }
    ActorParty(index) {
        return $gameActors.actor( this.party[(index - 1).clamp(0, this.party.length - 1)] );
    }
    ActorPool(index) {
        return $gameActors.actor( this.party_pool[(index - 1).clamp(0, this.party_pool.length - 1)] );
    }
    Update() {
        this.party.sort((a, b) => a - b);
        this.party_pool.sort((a, b) => a - b);

        this.active_party_index = -1;
        this.active_pool_index = -1;
    }
    AddActorToParty(index) {
        if (index < 0)
            return;

        if (this.party.length >= dragon_max_starting_party_members)
            return;

        let a = this.party_pool[index.clamp(0, this.party_pool.length - 1)];
        this.party_pool.splice( this.party_pool.indexOf(a), 1 );
        this.party.push(a);

        this.Update();

        this.data_party = [];
        for (let i = 0; i < this.party.length; i++)
            this.data_party.push(this.GenerateActorData(this.party[i], true));
        this.data_pool = [];
        for (let i = 0; i < this.party_pool.length; i++)
            this.data_pool.push(this.GenerateActorData(this.party_pool[i], false));

        this.data_party.sort( (a, b) => a[0] - b[0] );
        this.data_pool.sort( (a, b) => a[0] - b[0] );

        this.active_actor_index = -1;
    }
    RemoveActorFromParty(index) {
        if (index < 0)
            return;

        let a = this.party[index.clamp(0, this.party.length - 1)];
        if (a == 1)
            return;

        this.party.splice( this.party.indexOf(a), 1 );
        this.party_pool.push(a);

        this.Update();

        this.data_party = [];
        for (let i = 0; i < this.party.length; i++)
            this.data_party.push(this.GenerateActorData(this.party[i], true));
        this.data_pool = [];
        for (let i = 0; i < this.party_pool.length; i++)
            this.data_pool.push(this.GenerateActorData(this.party_pool[i], false));

        this.data_party.sort( (a, b) => a[0] - b[0] );
        this.data_pool.sort( (a, b) => a[0] - b[0] );

        this.active_actor_index = -1;
    }
    Reset() {
        for (let i = 1; i < this.party.length; i++)
            this.RemoveActorFromParty(i);
    }
    Party() {
        return this.party;
    }
    Pool() {
        return this.party_pool;
    }
    ClassNames() {
        return this.class_name;
    }
    ClassDescriptions() {
        return this.class_desc;
    }
    SizeParty() {
        return this.party.length;
    }
    SizePool() {
        return this.party_pool.length;
    }
    SetActiveActor(index) {
        this.active_actor_index = index;
    }
    Select(index, is_party) {
        this.active_party_index = -1;
        this.active_pool_index = -1;

        if (index < 0) {
            this.active_actor_index = -1;

            return;
        }

        if (is_party == true) {
            if (this.party.length < 1) {
                this.active_actor_index = -1;

                return;
            }

            this.active_party_index = index.clamp(0, this.party.length - 1);
            this.active_actor_index = this.party[ this.active_party_index ];
        }
        else {
            if (this.party_pool.length < 1) {
                this.active_actor_index = -1;

                return;
            }

            this.active_pool_index = index.clamp(0, this.party_pool.length - 1);
            this.active_actor_index = this.party_pool[ this.active_pool_index ];
        }
    }
    ActorIndex() {
        if (this.active_actor_index < 1)
            return -1;

        return this.active_actor_index;
    }
    PartyIndex() {
        return this.active_party_index;
    }
    PoolIndex() {
        return this.active_pool_index;
    }
    Actor() {
        if (this.active_actor_index < 1)
            return null;

        return $gameActors.actor( this.active_actor_index );
    }
    Class() {
        if (this.active_actor_index < 1)
            return null;

        const actor = this.Actor();

        return actor.currentClass();
    }
    IsPartyReady() {
        for (let i = 0; i < this.SizeParty(); i++) {
            const actor = $gameActors.actor( this.party[i] );
            const cls = actor.currentClass();

            if (cls.id == 1)
                return false;
        }

        return true;
    }
};

class dgnChest {
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
        this.cash_chance = 0;
        this.cash_min = 0;
        this.cash_max = 0;
        this.cash_level = 0;

        this.loot_id = [];
        this.loot_count = [];
        this.loot_id_w = [];
        this.loot_count_w = [];
        this.loot_id_a = [];
        this.loot_count_a = [];
        this.cash = 0;
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
        this.cash_chance = 0;
        this.cash_min = 0;
        this.cash_max = 0;
        this.cash_level = 0;

        this.loot_id = [];
        this.loot_count = [];
        this.loot_id_w = [];
        this.loot_count_w = [];
        this.loot_id_a = [];
        this.loot_count_a = [];
        this.cash = 0;
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
        return Math.min( this.loot_id.length, this.loot_count.length );
    }
    LootSizeWeapons() {
        return Math.min( this.loot_id_w.length, this.loot_count_w.length );
    }
    LootSizeArmors() {
        return Math.min( this.loot_id_a.length, this.loot_count_a.length );
    }
    AddItem(item_count, item_chance, item_id, level=1) {
        const i_count = Number(item_count);
        if ( item_id < 1 ) return;
        if ( item_id >= $dataItems.length ) return;
        const i_id = ( $dataItems[Number(item_id)].has_levels == true ) ? Number(item_id) + level - 1 : Number(item_id);
        var i_chance = Number(item_chance) * 0.01;
        if (i_count < 1) return;
        if (i_id < 1) return;
        if (i_chance < 0.01) i_chance = 0.01;
        if (i_chance > 1.00) i_chance = 1.00;

        this.count.push( i_count );
        this.id.push( i_id );
        this.chance.push( i_chance );
    }
    AddWeapon(item_count, item_chance, item_id, level=1) {
        const i_count = Number(item_count);
        if ( item_id < 1 ) return;
        if ( item_id >= $dataWeapons.length ) return;
        const i_id = ( $dataWeapons[Number(item_id)].has_levels == true ) ? Number(item_id) + level - 1 : Number(item_id);
        var i_chance = Number(item_chance) * 0.01;
        if (i_count < 1) return;
        if (i_id < 1) return;
        if (i_chance < 0.01) i_chance = 0.01;
        if (i_chance > 1.00) i_chance = 1.00;

        this.count_w.push( i_count );
        this.id_w.push( i_id );
        this.chance_w.push( i_chance );
    }
    AddArmor(item_count, item_chance, item_id, level=1) {
        const i_count = Number(item_count);
        if ( item_id < 1 ) return;
        if ( item_id >= $dataArmors.length ) return;
        const i_id = ( $dataArmors[Number(item_id)].has_levels == true ) ? Number(item_id) + level - 1 : Number(item_id);
        const i_id_add = ( $dataArmors[Number(item_id)].equip_type == DGN.GetIndexForEquipmentType( "ring" ) )
            ? Math.round(2.0 * (level - 1) / (dragon_max_item_levels))
            : 0;
        var i_chance = Number(item_chance) * 0.01;
        if (i_count < 1) return;
        if (i_id < 1) return;
        if (i_chance < 0.01) i_chance = 0.01;
        if (i_chance > 1.00) i_chance = 1.00;

        this.count_a.push( i_count );
        this.id_a.push( i_id + i_id_add );
        this.chance_a.push( i_chance );
    }
    AddCash(c_chance, c_min, c_max, c_level=1) {
        this.cash_chance = (c_chance * 0.01).clamp( 0, 1 );
        this.cash_min = Math.max( c_min, 0 );
        this.cash_max = Math.max( c_max, 0 );
        this.cash_level = c_level.clamp( 1, dragon_max_item_levels );
    }
    Loot(chance_multiplier=100) {
        this.loot_id = [];
        this.loot_count = [];
        this.loot_id_w = [];
        this.loot_count_w = [];
        this.loot_id_a = [];
        this.loot_count_a = [];
        this.cash = 0;

        // Cash
        if ( Math.random() < this.cash_chance ) {
            const cash_base = DGN.Lerp( this.cash_min, this.cash_max, Math.random() );

            this.cash = Math.round(DGN.CalcLevelByChapterPrice( cash_base, this.cash_level ));
        }

        if ( this.Size() < 0 ) return;

        // Items
        for (let i = 0; i < this.SizeItems(); i++)
        {
            const itm_id = this.id[i];
            const itm_count = this.count[i];

            if ( (Math.random() * 0.999) < (this.chance[i] * chance_multiplier) ) {
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

            if ( (Math.random() * 0.999) < (this.chance_w[i] * chance_multiplier) ) {
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

            if ( (Math.random() * 0.999) < (this.chance_a[i] * chance_multiplier) ) {
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
    Loot_OneRandomItem() {
        if ( this.Size() < 0 ) return;

        const pick = Math.random() * this.Size();

        if ( pick < this.SizeItems() ) {
            const pick_item = Math.round( Math.random() * (this.SizeItems() - 1) );
            if ( this.id[pick_item] < 1 ) return;

            if ( this.loot_id.includes( this.id[pick_item] ) == true ) {
                const index = this.loot_id.indexOf( this.id[pick_item] );
                this.loot_count[index]++;
            }
            else {
                this.loot_id.push( this.id[pick_item] );
                this.loot_count.push( 1 );
            }
        }
        else if ( (pick >= this.SizeItems()) && (pick < (this.SizeItems() + this.SizeWeapons())) ) {
            const pick_weapon = Math.round( Math.random() * (this.SizeWeapons() - 1) );
            if ( this.id_w[pick_weapon] < 1 ) return;

            if ( this.loot_id_w.includes( this.id_w[pick_weapon] ) == true ) {
                const index = this.loot_id_w.indexOf( this.id_w[pick_weapon] );
                this.loot_count_w[index]++;
            }
            else {
                this.loot_id_w.push( this.id_w[pick_weapon] );
                this.loot_count_w.push( 1 );
            }
        }
        else {
            const pick_armor = Math.round( Math.random() * (this.SizeArmors() - 1) );
            if ( this.id_a[pick_armor] < 1 ) return;

            if ( this.loot_id_a.includes( this.id_a[pick_armor] ) == true ) {
                const index = this.loot_id_a.indexOf( this.id_a[pick_armor] );
                this.loot_count_a[index]++;
            }
            else {
                this.loot_id_a.push( this.id_a[pick_armor] );
                this.loot_count_a.push( 1 );
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
        this.cash = 0;
    }
    CopyLootFromOther(other) {
        if ( !other ) return;

        for ( const i of other.loot_id ) {
            if ( this.loot_id.includes(other.loot_id) == true ) {
                const index = this.loot_id.indexOf(other.loot_id);

                this.loot_count[index]++;
            }
            else {
                this.loot_id.push( i );
                this.loot_count.push( 1 );
            }
        }
        for ( const i of other.loot_id_w ) {
            if ( this.loot_id_w.includes(other.loot_id_w) == true ) {
                const index = this.loot_id_w.indexOf(other.loot_id_w);

                this.loot_count_w[index]++;
            }
            else {
                this.loot_id_w.push( i );
                this.loot_count_w.push( 1 );
            }
        }
        for ( const i of other.loot_id_a ) {
            if ( this.loot_id_a.includes(other.loot_id_a) == true ) {
                const index = this.loot_id_a.indexOf(other.loot_id_a);

                this.loot_count_a[index]++;
            }
            else {
                this.loot_id_a.push( i );
                this.loot_count_a.push( 1 );
            }
        }

        this.cash += other.cash;

        /*
        for ( const i of other.loot_id ) this.loot_id.push( i );
        for ( const i of other.loot_count ) this.loot_count.push( i );

        for ( const i of other.loot_id_w ) this.loot_id_w.push( i );
        for ( const i of other.loot_count_w ) this.loot_count_w.push( i );

        for ( const i of other.loot_id_a ) this.loot_id_a.push( i );
        for ( const i of other.loot_count_a ) this.loot_count_a.push( i );
        */
    }
};

var dragon_Chest = [];
var dragon_TotalChest = new dgnChest();
for (let i = 0; i < dragon_number_of_random_chests; i++) {
    dragon_Chest.push( new dgnChest() );
    dragon_Chest[i].Clear();
}
dragon_TotalChest.Clear();

var DRAGON_ExpList = new dgnExpLevelList();
