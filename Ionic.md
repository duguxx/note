# ��Ionic������hybrid APP

ת���ԣ�[��Ionic����hybrid APP](http://hicc.me/create-amazing-app-with-ionic/)  
ԭ���ߣ�[xiaodao](http://hicc.me/)  
�����ذ�Ȩ��ת����ע����Դ��лл~~  
  
ʹ��phonegap����APP�������ڴ˲���ϸ˵�����٣��򵥣���ƽ̨���Լ�����iOS��Android�����webview�Ż��������Ĳ�������ܣ���������е����ơ�����˽��Ϊ **��Ŀǰ���Ҷ��ֱ仯���ٵ��ƶ�APP�г������£���phonegap������APPδ������һ�ֵͳɱ�mvp�ķ���** �����ٷ����������ܿ�^-^

## Ϊʲôѡ��ionic

����[ionicframework](http://ionicframework.com/)����phonegap����hybrid APP�����е�һԱ���㣬��������˵��һԱ��������������ҿ�Դ��

Ionic�����Ʒǳ�������

* ��������
* ���ں�ķ���[AngularJs](https://angularjs.org/)
* Ư����UI
* ǿ���������(���ڸ����ŵ�nodejs)
* �����Ŷӷǳ���Ծ��
* ������׷ǳ���ȫ��
	* ��Գ����ѧϰ���ϣ�Learn Iconic,The Iconic book
	* ngcordova����������Cordova API����Cordova�����װΪAngularJS��չ��ʹ�÷ǳ����㡣
	* ��Դ��ѵ�webfont icon��ionicons,����������icon����
	* ��������������Ŀ��ӻ���������Ionic Creator
* ������������Ҫ�ģ��쳣��Ծ������������

## ��װʹ��

������[ʹ�ý̳�](http://ionicframework.com/getting-started/)��ȫ�㹻��

	$ npm install -g cordova ionic
	$ ionic start myApp tabs
	$ cd myApp
	$ ionic platform add ios
	$ ionic build ios
	$ ionic emulate ios

�Լ�˽���Ƽ��ĵ���������������`$ ionic searve`

## ��ز����չ�Ƽ�

- SQLite�����������APP��Ҫ�־ñ����û����ݣ�ǿ���Ƽ���ʹ��SQLite���洢���ݣ�localstorage�����ݺ����ױ�ϵͳ������һЩ�ӵ�ϵͳ�������ɾ����
	- Hipo��ʹ�õ�[brodysoft��Cordova-SQLitePlugin](https://github.com/brodysoft/Cordova-SQLitePlugin)���Լ����ɵ�ionic�е�[����ʾ��](https://gist.github.com/yijian166/69bd5cbc5c82387f1ac1)��
	- ������ߵ�ngcordova���ṩ��[SQLite](http://ngcordova.com/docs/plugins/sqlite/)���(�ŷ��֣����߱���Ķ���ͬ����Cordova�����ֻ�Ǽ��ɷ�ʽ��һ�����Ǳ��Ƽ�����)
- ���̲����[$cordovaKeyboard](http://ngcordova.com/docs/plugins/keyboard/)��������hybrid APP��֪����ʹ�ñ�ʱ���̵ĵ���/�ر��л������ܶ����⣬Ionic֮ǰ�ķ�������jsʵ�֣�Ч��ʵ�ѹ�ά�����������ԭ������ķ�ʽ���Ż�������⣬�ײ�Ч���ܺã�Ҳǿ���Ƽ���ʹ����������
- ����ͼƬ(�������)�����[$cordovaSplashscreen](http://ngcordova.com/docs/plugins/splashscreen/)��֮�����Ƽ�Ҳ��װ��������ԭ���ǣ�Ĭ�����������ͼƬʱ��ͣ���϶̣�������APP�����ʱ��û��������ݼ��ػ�����ͼ��Ⱦ��(��Ҫ��ѯSQLite���ݿ⣬���߸��������������)����Ҫ�Զ�������ͼƬ�Ĺرգ���ô����Ҫ��װ��������������ֻ�������ʱ������Ļ������Ӱ����������⡣
	- ��Ҫ��ʾ���ǣ���װ�����������ͼƬδ�ر�ʱ��Ĭ�Ͼջ�ת����Ļ�м䣬�����Ҫ�Զ��壬���Ը��Ĳ���е�ԭ�����룬��iOSΪ��,����ĵ���Ļ�ײ�������/src/ios/CDVSplashScreen.m��_activityView.center = CGPointMake(parentView.bounds.size.width / 2, parentView.bounds.size.height / 2 );����Ϊ��_activityView.center = CGPointMake(parentView.bounds.size.width / 2, parentView.bounds.size.height - 80 );
- ֵ��ע���iOS8�е�TouchIDҲ������hybrid APP��ʹ���ˣ�[$cordovaTouchID](http://ngcordova.com/docs/plugins/touchID/)

�����Ƽ��������Լ��ڿ��������е�һ�㾭��̸֮�����ǽ�����ø����Լ�APPʵ�����ѡ���Լ���Ҫ�Ĳ����
