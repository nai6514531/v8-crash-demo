const { ccclass } = cc._decorator;

@ccclass
export class Launch extends cc.Component {
	protected async onLoad() {
		cc.director.loadScene("helloworld1");
	}
}
