//=============================================================================
// MPP_Pseudo3DBattle_Op1.js
//=============================================================================
// Copyright (c) 2023 Mokusei Penguin
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Changes the camera movement in Pseudo3DBattle to the front view.
 * @author Mokusei Penguin
 * @url
 * 
 * @base MPP_Pseudo3DBattle
 * @orderAfter MPP_Pseudo3DBattle
 *
 * @help [version 1.0.0]
 * - This plugin is for RPG Maker MZ.
 * - Changes the camera movement in Pseudo3DBattle to the front view.
 * 
 * ================================
 * Mail : wood_penguin＠yahoo.co.jp (＠ is half-width)
 * Blog : http://woodpenguin.blog.fc2.com/
 * License : MIT license
 * 
 */

/*:ja
 * @target MZ
 * @plugindesc 疑似3Dバトルのカメラ移動をフロントビュー向けに変更します。
 * @author 木星ペンギン
 * @url
 * 
 * @base MPP_Pseudo3DBattle
 * @orderAfter MPP_Pseudo3DBattle
 *
 * @help [version 1.0.0]
 * - このプラグインはRPGツクールMZ用です。
 * - 疑似3Dバトルのカメラ移動をフロントビュー向けに変更します。
 * 
 * ================================
 * Mail : wood_penguin＠yahoo.co.jp (＠は半角)
 * Blog : http://woodpenguin.blog.fc2.com/
 * License : MIT license
 * 
 */

(() => {
    'use strict';
    
    const pluginName = 'MPP_Pseudo3DBattle_Op1';
    
    // カメラ設定
    BattleManager._pseudo3dDriftBase = { x:16, y:10, altitude:10, skew:0.12 };
    BattleManager._pseudo3dMoveMethods = {
        ...BattleManager._pseudo3dMoveMethods,
        setup() {
            return {
                y: this.centerY() + 32,
                altitude: -15,
                scale: 0.77,
                duration: 0
            };
        },
        startBattle() {
            return { duration: 120 };
        },
        targeting(targets) {
            return {
                y: this.centerY() + 16,
                altitude: 10,
                duration: this.isAction() ? 10 : 16,
                drift: 0.75,
                priority: 3
            };
        },
        actionStart(subject) {
            const targets = BattleManager._targets;
            if (targets.length === 0 || targets[0].isActor()) {
                return {
                    altitude: -5,
                    duration: 24,
                    priority: 1,
                };
            } else {
                const pos = this.actionTargets2dPosition();
                return {
                    x: this.bringInsideXByRate(pos.x, 0.2),
                    y: this.bringInsideYByRate(pos.y, 0.2),
                    altitude: -20,
                    scale: 0.97,
                    duration: 30,
                    type: 'Slow start and end',
                    drift: 0.5,
                    priority: 1,
                    route: [
                        {
                            altitude: 10,
                            duration: 120,
                            type: 'Constant speed',
                        }
                    ]
                };
            }
        },
        actionStartForOne(subject) {
            const targets = BattleManager._targets;
            if (targets.length === 0 || targets[0].isActor()) {
                return {
                    altitude: -5,
                    duration: 24,
                    priority: 1,
                };
            } else {
                const pos = this.actionTargets2dPosition();
                return {
                    x: this.bringInsideXByRate(pos.x, 0.2),
                    y: this.bringInsideYByRate(pos.y, 0.2),
                    altitude: -5,
                    scale: 1.03,
                    duration: 24,
                    priority: 1,
                };
            }
        },
        actionStartShort() {
            return {
                altitude: -5,
                duration: 24,
                priority: 1,
            };
        },
        damage(target) {
            if (!target || target.isActor()) {
                return null;
            }
            const pos = this.targets2dPosition([target]);
            return {
                x: this.bringInsideXByRate(pos.x, 0.3),
                y: this.bringInsideYByRate(pos.y, 0.3),
                altitude: -5,
                scale: 1.02,
                duration: 45,
                type: 'Slow start and end',
                drift: 0.5,
                priority: 1
            };
        },
        collapse(target) {
            if (!target || target.isActor()) {
                return null;
            }
            const pos = this.targets2dPosition([target]);
            return {
                x: this.bringInsideXByRate(pos.x, 0.3),
                y: this.bringInsideYByRate(pos.y, 0.3),
                altitude: -5,
                scale: 1.05,
                duration: 12,
                drift: 0.5,
                priority: 4
            };
        },
        victory() {
            return {
                altitude: 0,
                duration: 90,
                type: 'Slow start and end',
                priority: 4,
                route: [
                    {
                        altitude: -30,
                        duration: 240
                    }
                ]
            };
        },
        escape() {
            return {
                x: this.centerX(),
                y: this.centerY() + 8,
                altitude: -30,
                scale: 0.92,
                duration: 60,
                type: 'Slow start and end',
                drift: 0,
                priority: 4
            };
        },
        focus(targets, scale, duration) {
            const pos = this.targets2dPosition(targets);
            if (!pos) return null;
            return {
                x: this.bringInsideXByRate(pos.x, 0.4),
                y: this.bringInsideYByRate(pos.y, 0.1),
                altitude: -10,
                scale,
                duration,
                priority: 2
            };
        }
    };
    
    //-------------------------------------------------------------------------
    // Window_BattleLog

    const _Window_BattleLog_callP3dPerformCollapseMethod = Window_BattleLog.prototype.callP3dPerformCollapseMethod
    Window_BattleLog.prototype.callP3dPerformCollapseMethod = function(target) {
        const action = BattleManager._action;
        if (!action.isAttack()) {
            _Window_BattleLog_callP3dPerformCollapseMethod.apply(this, arguments);
        }
    };
    
})();
