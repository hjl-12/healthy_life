if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TaskCard_Params {
    taskInfoStr?: string;
    clickAction?: Function;
    taskInfo?: TaskInfo;
}
import { TaskMapById } from "@bundle:com.example.healthy_life/entry/ets/model/TaskInitList";
import HealthText from "@bundle:com.example.healthy_life/entry/ets/view/HealthTextComponent";
import { CommonConstants as Const } from "@bundle:com.example.healthy_life/entry/ets/common/constants/CommonConstants";
import TaskInfo from "@bundle:com.example.healthy_life/entry/ets/viewmodel/TaskInfo";
function __Text__labelTextStyle(): void {
    Text.fontSize({ "id": 16777269, "type": 10002, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
    Text.fontWeight(Const.FONT_WEIGHT_500);
    Text.opacity(Const.OPACITY_6);
    Text.fontFamily({ "id": 16777330, "type": 10003, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
}
export class TaskCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__taskInfoStr = new SynchedPropertySimpleOneWayPU(params.taskInfoStr, this, "taskInfoStr");
        this.clickAction = (isClick: boolean) => {
        };
        this.__taskInfo = new ObservedPropertyObjectPU(new TaskInfo(-1, '', -1, '', false, '', '', '', false, '', false), this, "taskInfo");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TaskCard_Params) {
        if (params.taskInfoStr === undefined) {
            this.__taskInfoStr.set('');
        }
        if (params.clickAction !== undefined) {
            this.clickAction = params.clickAction;
        }
        if (params.taskInfo !== undefined) {
            this.taskInfo = params.taskInfo;
        }
    }
    updateStateVars(params: TaskCard_Params) {
        this.__taskInfoStr.reset(params.taskInfoStr);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__taskInfoStr.purgeDependencyOnElmtId(rmElmtId);
        this.__taskInfo.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__taskInfoStr.aboutToBeDeleted();
        this.__taskInfo.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __taskInfoStr: SynchedPropertySimpleOneWayPU<string>;
    get taskInfoStr() {
        return this.__taskInfoStr.get();
    }
    set taskInfoStr(newValue: string) {
        this.__taskInfoStr.set(newValue);
    }
    private clickAction: Function;
    private __taskInfo: ObservedPropertyObjectPU<TaskInfo>;
    get taskInfo() {
        return this.__taskInfo.get();
    }
    set taskInfo(newValue: TaskInfo) {
        this.__taskInfo.set(newValue);
    }
    aboutToAppear() {
        this.taskInfo = JSON.parse(this.taskInfoStr);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
targetValueBuilder();
{
    Logger.error('TaskInfoTable', `${date} query no results!`);
    if (this.taskInfo.isDone) {
        HealthText({ title: '', titleResource: { "id": 16777365, "type": 10003, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" } });
    }
    else {
        Row();
        {
            HealthText({
                title: this.taskInfo.finValue || `--`,
                fontSize: { "id": 16777274, "type": 10002, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" }
            });
            Text(` / ${this.taskInfo.targetValue} ${TaskMapById[this.taskInfo.taskID - 1].unit}`)
                .labelTextStyle()
                .fontWeight(Const.FONT_WEIGHT_400);
        }
    }
}
build();
{
    Row();
    {
        Row({ space: Const.DEFAULT_6 });
        {
            Image(TaskMapById[this.taskInfo.taskID - 1].icon)
                .width({ "id": 16777279, "type": 10002, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" }).height({ "id": 16777279, "type": 10002, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" })
                .objectFit(ImageFit.Contain);
            HealthText({
                title: '',
                titleResource: TaskMapById[this.taskInfo.taskID - 1].taskName,
                fontFamily: { "id": 16777330, "type": 10003, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" }
            });
        }
        this.targetValueBuilder();
    }
    allSize()
        .justifyContent(FlexAlign.SpaceBetween)
        .borderRadius({ "id": 16777274, "type": 10002, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" })
        .padding({ left: Const.THOUSANDTH_50, right: Const.THOUSANDTH_33 })
        .backgroundColor({ "id": 16777250, "type": 10001, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" })
        .onClick(() => this.clickAction(true))
        .gesture(LongPressGesture().onAction(() => this.clickAction(false)));
}
