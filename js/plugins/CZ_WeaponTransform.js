/*:
 * @plugindesc 戦闘中にスキルで武器を変形させるプラグイン
 * @author Canata_Zer0 + Gemini
 * @target MZ
 * @version 1.0.0
 *
 * @help WeaponTransform.js
 *
 * このプラグインは、戦闘中に特定のスキルを使用することで武器を
 * 別の武器に変形させる機能を提供します。
 * 戦闘が終了すると、武器は自動的に元の状態に戻ります。
 *
 * ■ 使い方
 * 1. 変形させたい武器のメモ欄に、以下の形式でタグを記述します。
 *
 * <transform: スキルID, 変形後の武器ID>
 *
 * ・スキルID: 武器を変形させるために使用するスキルのIDを指定します。
 * ・変形後の武器ID: 変形後に装備する武器のデータベース上のIDを指定します。
 *
 * ■ 設定例
 * 武器Aと武器Bをスキルで相互に切り替えたい場合：
 *
 * ・武器A (ID: 1) のメモ欄:
 * <transform: 10, 2>
 * (スキルID 10 を使うと、武器ID 2 に変形します)
 *
 * ・武器B (ID: 2) のメモ欄:
 * <transform: 10, 1>
 * (スキルID 10 を使うと、武器ID 1 に戻ります)
 *
 * これにより、戦闘中にスキルID 10 を使用するたびに、
 * 武器Aと武器Bが交互に切り替わります。
 *
 * この機能は、アクターが装備している全ての武器に適用されます。
 * 例えば、二刀流で同じ変形設定を持つ武器を2つ装備している場合、
 * それら両方が同時に変形します。
 */

(() => {
    'use strict';

    //-----------------------------------------------------------------------------
    // Game_Actor
    // 戦闘開始・終了時の装備の保存と復元処理を追加します。
    //-----------------------------------------------------------------------------

    // 元のonBattleStart処理を保持
    const _Game_Actor_onBattleStart = Game_Actor.prototype.onBattleStart;
    Game_Actor.prototype.onBattleStart = function() {
        _Game_Actor_onBattleStart.apply(this, arguments);
        // 戦闘開始時の全装備の情報を保存（IDと、武器か防具かのフラグ）
        this._originalEquips = this.equips().map(item => {
            if (item) {
                return { id: item.id, isWeapon: DataManager.isWeapon(item) };
            }
            return null; // 装備していないスロット
        });
    };

    // 元のonBattleEnd処理を保持
    const _Game_Actor_onBattleEnd = Game_Actor.prototype.onBattleEnd;
    Game_Actor.prototype.onBattleEnd = function() {
        _Game_Actor_onBattleEnd.apply(this, arguments);
        // 戦闘開始時に保存した装備情報があれば、元に戻す
        if (this._originalEquips) {
            this._originalEquips.forEach((originalEquip, i) => {
                const currentItem = this.equips()[i];
                const currentItemId = currentItem ? currentItem.id : 0;
                const originalItemId = originalEquip ? originalEquip.id : 0;

                // 現在の装備が戦闘開始時のものと異なる場合のみ戻す
                if (currentItemId !== originalItemId) {
                    let itemToEquip = null;
                    if (originalEquip) {
                        if (originalEquip.isWeapon) {
                            itemToEquip = $dataWeapons[originalEquip.id];
                        } else {
                            itemToEquip = $dataArmors[originalEquip.id];
                        }
                    }
                    // changeEquipで装備を元に戻す
                    this.changeEquip(i, itemToEquip);
                }
            });
            // 復元後、保存した情報はクリアする
            this._originalEquips = null;
        }
    };

    //-----------------------------------------------------------------------------
    // Game_Action
    // スキル使用時の武器変形処理を追加します。
    //-----------------------------------------------------------------------------

    // 元のapply処理を保持
    const _Game_Action_apply = Game_Action.prototype.apply;
    Game_Action.prototype.apply = function(target) {
        _Game_Action_apply.call(this, target);
        
        const subject = this.subject();
        // 使用者がアクターで、かつ使用したのがスキルでなければ処理を中断
        if (!subject.isActor() || !this.isSkill()) {
            return;
        }

        const usedSkillId = this.item().id;

        // アクターの現在の装備を一つずつチェック
        subject.equips().forEach((equip, slotId) => {
            // 装備が存在し、それが武器であり、かつメモ欄に 'transform' の記述があるか
            if (equip && DataManager.isWeapon(equip) && equip.meta.transform) {
                // メタデータをパース: "スキルID,武器ID" -> [スキルID, 武器ID]
                const transformData = equip.meta.transform.split(',').map(s => parseInt(s.trim(), 10));
                const transformSkillId = transformData[0];
                const transformWeaponId = transformData[1];

                // 使用したスキルが、武器に設定された変形スキルIDと一致するか
                if (usedSkillId === transformSkillId) {
                    const newWeapon = $dataWeapons[transformWeaponId];
                    if (newWeapon) {
                        // 該当スロットの武器を指定された新しい武器に変更
                        subject.changeEquip(slotId, newWeapon);
                    }
                }
            }
        });
    };

})();