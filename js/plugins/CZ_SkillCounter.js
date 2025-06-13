/*:
 * @target MZ
 * @plugindesc 攻撃を受けたときに指定スキルで反撃するプラグイン v1.3（セーブ非破損版） 
 * @author Canata_Zer0 + ChatGPT
 *
 * @help
 * ■ 武器・防具・ステートのメモ欄に以下記入：
 * <CounterSkill: 10>  // 攻撃を受けたらスキルID10番で反撃
 *
 * ■ 機能
 * ・戦闘中のみ
 * ・反撃スキル自動即発動
 * ・セーブデータ破損防止
 */

(() => {
    const _Game_Battler_onDamage = Game_Battler.prototype.onDamage;
    Game_Battler.prototype.onDamage = function(value) {
        _Game_Battler_onDamage.call(this, value);

        if (!$gameParty.inBattle()) return;

        const counterSkillId = this.counterSkillId();
        if (counterSkillId) {
            const skillId = Number(counterSkillId);
            const lastSubjectId = this._lastSubjectId;
            let targetIndex = 0;

            // 直前の攻撃者（アクター or 敵）を取得
            const subject = this.lastSubject();
            if (subject) {
                targetIndex = subject.index();
            }

            console.log(`${this.name()}が反撃スキル${skillId}を発動！（相手：${targetIndex}）`);

            this.forceAction(skillId, targetIndex);
            BattleManager._actionForcedBattler = this;
            BattleManager.processForcedAction();
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

    // 攻撃者情報のID記録
    const _Game_Action_apply = Game_Action.prototype.apply;
    Game_Action.prototype.apply = function(target) {
        const subject = this.subject();
        if (subject.isActor()) {
            target._lastSubjectId = {type: 'actor', id: subject.actorId()};
        } else if (subject.isEnemy()) {
            target._lastSubjectId = {type: 'enemy', id: subject.index()};
        }
        _Game_Action_apply.call(this, target);
    };

    // IDから直前の攻撃者オブジェクト取得
    Game_Battler.prototype.lastSubject = function() {
        const data = this._lastSubjectId;
        if (!data) return null;
        if (data.type === 'actor') {
            return $gameActors.actor(data.id);
        } else if (data.type === 'enemy') {
            return $gameTroop.members()[data.id];
        }
        return null;
    };

})();
