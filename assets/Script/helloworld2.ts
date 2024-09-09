const { ccclass } = cc._decorator;

@ccclass
export class Helloworld2 extends cc.Component {
	clickHandler() {
		cc.director.loadScene("helloworld3");
	}
}
