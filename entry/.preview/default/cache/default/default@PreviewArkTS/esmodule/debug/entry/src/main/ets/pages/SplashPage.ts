if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SplashIndex_Params {
    context?: common.UIAbilityContext;
    dialogController?: CustomDialogController;
}
import type common from "@ohos:app.ability.common";
import router from "@ohos:router";
import preferences from "@ohos:data.preferences";
import Logger from "@bundle:com.example.healthy_life/entry/ets/common/utils/Logger";
import { CommonConstants as Const } from "@bundle:com.example.healthy_life/entry/ets/common/constants/CommonConstants";
import UserPrivacyDialog from "@bundle:com.example.healthy_life/entry/ets/view/dialog/UserPrivacyDialog";
// app preferences name
const H_STORE: string = 'healthAppStore';
const IS_PRIVACY: string = 'isPrivacy';
class SplashIndex extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.context = getContext(this) as common.UIAbilityContext;
        this.dialogController = new CustomDialogController({
            builder: () => {
                let jsDialog = new UserPrivacyDialog(this, {
                    cancel: () => {
                        this.exitApp();
                    },
                    confirm: () => {
                        this.onConfirm();
                    }
                }, undefined, -1, () => { }, { page: "entry/src/main/ets/pages/SplashPage.ets", line: 32 });
                jsDialog.setController(this.dialogController);
                ViewPU.create(jsDialog);
                let paramsLambda = () => {
                    return {
                        cancel: () => {
                            this.exitApp();
                        },
                        confirm: () => {
                            this.onConfirm();
                        }
                    };
                };
                jsDialog.paramsGenerator_ = paramsLambda;
            },
            cancel: () => {
                this.exitApp();
            },
            autoCancel: false,
            alignment: DialogAlignment.Bottom,
            offset: { dx: 0, dy: Const.OFFSET_24 }
        }, this);
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SplashIndex_Params) {
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.dialogController !== undefined) {
            this.dialogController = params.dialogController;
        }
    }
    updateStateVars(params: SplashIndex_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private context: common.UIAbilityContext;
    private dialogController: CustomDialogController;
    onConfirm() {
        let preference = preferences.getPreferences(this.context, H_STORE);
        preference.then((res) => {
            res.put(IS_PRIVACY, true).then(() => {
                res.flush(); // 将更改保存到持久存储
                Logger.info('SplashPage', 'isPrivacy is put success');
            }).catch((err: Error) => {
                Logger.info('SplashPage', 'isPrivacy put failed. Cause: ' + err);
            });
        });
        this.jumpAdPage(); // 跳转广告页
    }
    exitApp() {
        this.context.terminateSelf();
    }
    /*
       跳转广告页
     */
    jumpAdPage() {
        setTimeout(() => {
            router.replaceUrl({ url: 'pages/AdvertisingPage' });
        }, Const.LAUNCHER_DELAY_TIME);
    }
    // 组件即将出现时回调该接口，具体时机为在创建自定义组件的新实例后，在执行其build()函数之前执行
    aboutToAppear() {
        let preference = preferences.getPreferences(this.context, H_STORE);
        preference.then((res) => {
            res.get(IS_PRIVACY, false).then((isPrivate) => {
                if (isPrivate === true) {
                    this.jumpAdPage();
                }
                else {
                    this.dialogController.open();
                }
            });
        });
    }
    aboutToDisappear() {
        clearTimeout();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/SplashPage.ets(94:5)");
            Column.width('100%');
            Column.height('100%');
            Column.backgroundImagePosition({ x: 0, y: 0 });
            Column.backgroundImage({ "id": 16777314, "type": 20000, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Column.backgroundImageSize({ width: '100%', height: '100%' });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777220, "type": 20000, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/SplashPage.ets(95:7)");
            Image.width({ "id": 16777266, "type": 10002, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Image.aspectRatio(1);
            Image.margin({ top: { "id": 16777266, "type": 10002, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777320, "type": 10003, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/SplashPage.ets(99:7)");
            Text.fontFamily({ "id": 16777331, "type": 10003, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Text.fontSize({ "id": 16777274, "type": 10002, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Text.fontColor({ "id": 16777249, "type": 10001, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Text.fontWeight(Const.FONT_WEIGHT_700);
            Text.letterSpacing(Const.LETTER_1);
            Text.margin({
                top: { "id": 16777271, "type": 10002, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" },
                bottom: { "id": 16777294, "type": 10002, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" }
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777319, "type": 10003, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/SplashPage.ets(109:7)");
            Text.fontFamily({ "id": 16777330, "type": 10003, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Text.fontColor({ "id": 16777249, "type": 10001, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Text.fontWeight(Const.FONT_WEIGHT_400);
            Text.letterSpacing(Const.LETTER_34);
            Text.opacity(Const.OPACITY_6);
            Text.fontSize({ "id": 16777269, "type": 10002, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "SplashIndex";
    }
}
registerNamedRoute(() => new SplashIndex(undefined, {}), "", { bundleName: "com.example.healthy_life", moduleName: "entry", pagePath: "pages/SplashPage", pageFullPath: "entry/src/main/ets/pages/SplashPage", integratedHsp: "false" });
