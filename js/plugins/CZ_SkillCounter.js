/*:
 * @target MZ
 * @plugindesc 攻撃を受けたときに指定スキルで反撃するプラグイン v1.2（エラー完全解消版） 
 * @author Canata_Zer0 + ChatGPT
 *
 * @help
 * ■ 武器・防具・ステートのメモ欄に以下記入：
 * <CounterSkill: 10>  // 攻撃を受けたらスキルID10番で反撃
 *
 * ■ 機能
 * ・戦闘中のみ
 * ・通常攻撃・スキル受け時OK
 * ・反撃スキル自動即発動
 */

(() => {
    const _Game_Battler_onDamage = Game_Battler.prototype.onDamage;
    Game_Battler.prototype.onDamage = function(value) {
        _Game_Battler_onDamage.call(this, value);

        if (!$gameParty.inBattle()) return;

        const counterSkillId = this.counterSkillId();
        if (counterSkillId) {
            const skillId = Number(counterSkillId);
            const subject = this._lastSubject; // 攻撃した相手
            const targetIndex = subject ? subject.index() : 0;

            console.log(`${this.name()}が反撃スキル${skillId}を発動！（相手：${targetIndex}）`);

            this.forceAction(skillId, targetIndex); // スキル・対象セット
            BattleManager._actionForcedBattler = this; // 強制行動設定
            BattleManager.processForcedAction(); // 実行
        }
    };

    Game_Battler.prototype.counterSkillId = function() {
        const traitObjects = this.traitObjects();
        for (const obj of traitObjects) {
            if (obj && obj.meta && obj.meta.CounterSkill) {
                return obj.meta.CounterSkill;
            }
        }
        return null;
    };

    const _Game_Action_apply = Game_Action.prototype.apply;
    Game_Action.prototype.apply = function(target) {
        target._lastSubject = this.subject(); // 攻撃者記録
        _Game_Action_apply.call(this, target);
    };
})();
