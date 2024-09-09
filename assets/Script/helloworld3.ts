const { ccclass } = cc._decorator;

@ccclass
export class Helloworld3 extends cc.Component {
	clickHandler() {
		cc.director.loadScene("helloworld1");
	}
}
