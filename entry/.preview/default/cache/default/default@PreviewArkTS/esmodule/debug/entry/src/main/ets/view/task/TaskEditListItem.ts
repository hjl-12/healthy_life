if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface FrequencyItem_Params {
    settingParams?: ITaskItem;
    frequency?: string;
}
interface RemindTimeItem_Params {
    settingParams?: ITaskItem;
}
interface OpenRemindItem_Params {
    settingParams?: ITaskItem;
}
interface TargetSetItem_Params {
    settingParams?: ITaskItem;
}
interface TaskChooseItem_Params {
    settingParams?: ITaskItem;
}
import type { ITaskItem } from '../../model/TaskInitList';
import { CommonConstants as Const } from "@bundle:com.example.healthy_life/entry/ets/common/constants/CommonConstants";
import { taskType } from "@bundle:com.example.healthy_life/entry/ets/viewmodel/TaskInfo";
function __Text__targetSetCommon(): void {
    Text.fontSize(Const.DEFAULT_16);
    Text.flexGrow(1);
    Text.margin({ right: Const.DEFAULT_8 });
    Text.align(Alignment.End);
}
function __Text__targetSettingStyle(isOpen: boolean, taskID: number): void {
    Text.fontColor(isOpen && taskID !== taskType.smile && taskID !== taskType.brushTeeth ? { "id": 16777249, "type": 10001, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" } : { "id": 16777232, "type": 10001, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
}
function __Text__remindTimeStyle(isOpen: boolean, isAlarm: boolean): void {
    Text.fontColor(isOpen && isAlarm ? { "id": 16777249, "type": 10001, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" } : { "id": 16777232, "type": 10001, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
}
function __Text__frequencyStyle(isOpen: boolean, isAlarm: boolean): void {
    Text.fontSize(Const.DEFAULT_12);
    Text.flexGrow(1);
    Text.margin({ right: Const.DEFAULT_8 });
    Text.textAlign(TextAlign.End);
    Text.fontColor(isOpen && isAlarm ? { "id": 16777249, "type": 10001, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" } : { "id": 16777232, "type": 10001, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
}
export class TaskChooseItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__settingParams = this.initializeConsume("settingParams", "settingParams");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TaskChooseItem_Params) {
    }
    updateStateVars(params: TaskChooseItem_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__settingParams.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__settingParams.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __settingParams: ObservedPropertyAbstractPU<ITaskItem>;
    get settingParams() {
        return this.__settingParams.get();
    }
    set settingParams(newValue: ITaskItem) {
        this.__settingParams.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(55:5)");
            Row.width(Const.THOUSANDTH_1000);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.settingParams.taskName);
            Text.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(56:7)");
            Text.fontSize(Const.DEFAULT_20);
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Toggle.create({ type: ToggleType.Switch, isOn: this.settingParams.isOpen });
            Toggle.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(57:7)");
            Toggle.width(Const.DEFAULT_56);
            Toggle.height(Const.DEFAULT_32);
            Toggle.selectedColor({ "id": 16777228, "type": 10001, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Toggle.onChange((isOn) => {
                this.settingParams.isOpen = isOn;
            });
        }, Toggle);
        Toggle.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class TargetSetItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__settingParams = this.initializeConsume("settingParams", "settingParams");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TargetSetItem_Params) {
    }
    updateStateVars(params: TargetSetItem_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__settingParams.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__settingParams.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __settingParams: ObservedPropertyAbstractPU<ITaskItem>;
    get settingParams() {
        return this.__settingParams.get();
    }
    set settingParams(newValue: ITaskItem) {
        this.__settingParams.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(75:5)");
            Row.width(Const.THOUSANDTH_1000);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777361, "type": 10003, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(76:7)");
            Text.fontSize(Const.DEFAULT_20);
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(80:7)");
            Blank.layoutWeight(1);
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.settingParams?.unit === '') {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(`${this.settingParams?.targetValue}`);
                        Text.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(83:9)");
                        __Text__targetSetCommon();
                        __Text__targetSettingStyle(this.settingParams?.isOpen, this.settingParams?.taskID);
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(`${this.settingParams?.targetValue} ${this.settingParams?.unit} ${Const.PER_DAY}`);
                        Text.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(87:9)");
                        __Text__targetSetCommon();
                        __Text__targetSettingStyle(this.settingParams?.isOpen, this.settingParams?.taskID);
                    }, Text);
                    Text.pop();
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777252, "type": 20000, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(91:7)");
            Image.width(Const.DEFAULT_8);
            Image.height(Const.DEFAULT_16);
        }, Image);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class OpenRemindItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__settingParams = this.initializeConsume("settingParams", "settingParams");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: OpenRemindItem_Params) {
    }
    updateStateVars(params: OpenRemindItem_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__settingParams.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__settingParams.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __settingParams: ObservedPropertyAbstractPU<ITaskItem>;
    get settingParams() {
        return this.__settingParams.get();
    }
    set settingParams(newValue: ITaskItem) {
        this.__settingParams.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(103:5)");
            Row.width(Const.THOUSANDTH_1000);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777351, "type": 10003, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(104:7)");
            Text.fontSize(Const.DEFAULT_20);
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Toggle.create({ type: ToggleType.Switch, isOn: this.settingParams?.isAlarm });
            Toggle.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(108:7)");
            Toggle.width(Const.DEFAULT_56);
            Toggle.height(Const.DEFAULT_32);
            Toggle.selectedColor({ "id": 16777228, "type": 10001, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Toggle.onChange((isOn) => {
                this.settingParams.isAlarm = isOn;
            });
        }, Toggle);
        Toggle.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class RemindTimeItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__settingParams = this.initializeConsume("settingParams", "settingParams");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: RemindTimeItem_Params) {
    }
    updateStateVars(params: RemindTimeItem_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__settingParams.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__settingParams.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __settingParams: ObservedPropertyAbstractPU<ITaskItem>;
    get settingParams() {
        return this.__settingParams.get();
    }
    set settingParams(newValue: ITaskItem) {
        this.__settingParams.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(126:5)");
            Row.width(Const.THOUSANDTH_1000);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777354, "type": 10003, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(127:7)");
            Text.fontSize(Const.DEFAULT_20);
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(128:7)");
            Blank.layoutWeight(1);
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.settingParams?.startTime);
            Text.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(130:7)");
            __Text__targetSetCommon();
            __Text__remindTimeStyle(this.settingParams?.isOpen, this.settingParams?.isAlarm);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777252, "type": 20000, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(133:7)");
            Image.width(Const.DEFAULT_8);
            Image.height(Const.DEFAULT_16);
        }, Image);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class FrequencyItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__settingParams = this.initializeConsume("settingParams", "settingParams");
        this.__frequency = this.initializeConsume("frequency", "frequency");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: FrequencyItem_Params) {
    }
    updateStateVars(params: FrequencyItem_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__settingParams.purgeDependencyOnElmtId(rmElmtId);
        this.__frequency.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__settingParams.aboutToBeDeleted();
        this.__frequency.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __settingParams: ObservedPropertyAbstractPU<ITaskItem>;
    get settingParams() {
        return this.__settingParams.get();
    }
    set settingParams(newValue: ITaskItem) {
        this.__settingParams.set(newValue);
    }
    private __frequency: ObservedPropertyAbstractPU<string>;
    get frequency() {
        return this.__frequency.get();
    }
    set frequency(newValue: string) {
        this.__frequency.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(146:5)");
            Row.width(Const.THOUSANDTH_1000);
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777344, "type": 10003, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(147:7)");
            Text.fontSize(Const.DEFAULT_20);
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.frequency);
            Text.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(148:7)");
            __Text__targetSetCommon();
            __Text__frequencyStyle(this.settingParams?.isOpen, this.settingParams?.isAlarm);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777252, "type": 20000, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/view/task/TaskEditListItem.ets(151:7)");
            Image.width(Const.DEFAULT_8);
            Image.height(Const.DEFAULT_16);
        }, Image);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
