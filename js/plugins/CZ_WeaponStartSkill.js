/*:
 * @target MZ
 * @plugindesc 武器装備時のみ戦闘開始時に特定のスキルを発動する。
 * @author Canata_Zer0 + ChatGPT
 *
 * @help
 * 武器のメモ欄に以下を記載：
 * <BattleStartSkill: スキルID>
 */

(() => {
    const _BattleManager_startBattle = BattleManager.startBattle;
    BattleManager.startBattle = function() {
        _BattleManager_startBattle.call(this);

        $gameParty.members().forEach(actor => {
            actor.weapons().forEach(weapon => {
                const skillId = Number(weapon.meta.BattleStartSkill);
                if (skillId) actor.useBattleSkill(skillId);
            });
        });
    };

    Game_Actor.prototype.useBattleSkill = function(skillId) {
        if (!$dataSkills[skillId]) return;
        const action = new Game_Action(this);
        action.setSkill(skillId);
        action.applyGlobal();
        const targets = action.makeTargets();
        targets.forEach(target => {
            action.apply(target);
            action.executeDamage(target, action.makeDamageValue(target, action.isCritical));
        });
    };
})();
