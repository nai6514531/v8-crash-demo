const { ccclass } = cc._decorator;

@ccclass
export class Helloworld1 extends cc.Component {
	clickHandler() {
		cc.director.loadScene("helloworld2");
	}
}
