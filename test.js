// ����GUID/UUID�ĺ���
function guid() {
	//���������ں����ڣ�����s4�������ռ���ں����ڲ�������ͺ�����ͬ���ĺ�����ͻ
	function s4() {
		// Math.floor: ���С�ڻ��ߵ��ڲ���������
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}

	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
// sample..


console.log(
	'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 0x3 | 0x8;
		return v.toString(16);
	})
);