# Javascript������ʽѧϰ

������Ϊ�˿���һ����վ[TGFCER����](http://wap.tgfcer.com)��Chrome�����׼���ģ���Ϊwap��Ĳ������̫�����ˡ�

## ģʽ

ģʽ|����
----|----
match|����ƥ���ֵ������
search|����ƥ���λ�ã�-1��ʾû��ƥ�䵽
replace|Ѱ�Ҳ��滻

## Ԥ����������ַ�
�ַ�|����|����
----|----|----
\t|/\t/|�Ʊ��
\n|/\n/|�Ʊ��
\r|/\r/|�س���
\f|/\f/|��ҳ��
\a|/\a/|alert�ַ�
\e|/\e/|escape�ַ�
\cX|/\cX/|��X���Ӧ�Ŀ����ַ�
\b|/\b/|������ַ�
\v|/\v/|��ֱ�Ʊ��
\0|/\0/|���ַ�

## �ַ���

### ����
ԭ���������һ���ַ���Ӧһ���ַ������ǿ�����[]����������������[]��������Ӧһ���ַ�����

	alert(/ruby/.test("ruby"));//true
	alert(/[abc]/.test("a"));//true
	alert(/[abc]/.test("b"));//true
	alert(/[abc]/.test("c"));//true
	alert("a bat ,a Cat,a fAt bat ,a faT cat".match(/[bcf]at/gi));//bat,Cat,fAt,bat,faT,cat

### ������
Ҳ�����Ǹ������������£�ǰ��Ӹ�Ԫ�ַ�����ȡ������ʾƥ�䲻��Ϊ����������ַ���

	alert(/[^abc]/.test("a"));//false
	alert(/[^abc]/.test("b"));//false
	alert(/[^abc]/.test("6"));//true
	alert(/[^abc]/.test("gg"));//true

### �����
�������Ǹ����������������¡�������������ƥ�䲻ͬ���͵ĵ����ַ���

	alert(/[a-f]/.test("b"));//true
	alert(/[a-f]/.test("k"));//false
	alert(/[a-z]/.test("h"));//true
	alert(/[A-Z]/.test("gg"));//false
	alert(/[^H-Y]/.test("G"));//true
	alert(/[0-9]/.test("8"));//true
	alert(/[^7-9]/.test("6"));//true

	alert(/[a-m1-5\n]/.test("a"))//true
	alert(/[a-m1-5\n]/.test("3"))//true

	alert(/[a-m1-5\n]/.test(a))//true
	alert(/[a-m1-5\n]/.test("r"))//false

### Ԥ������

�������Ǹ����������������£������������Ѿ��ߵ���ͷ�ˡ������������ŵ���ף�������ǻ��Ƕ�Ӧһ���ַ���

�ַ�|��ͬ��|����
----|----|----
.|[^\n\r]|���˻��кͻس�֮��������ַ�
\d|[0-9]|�����ַ�
\D|[^0-9]|�������ַ�
\s|[ \t\n\x0B\f\r]|�հ��ַ�
\S|[^ \t\n\x0B\f\r]|�ǿհ��ַ�
\w|[a-zA-Z_0-9]|�����ַ�(���е���ĸ)
\W|[^a-zA-Z_0-9]|�ǵ����ַ�

	alert(/\d/.test("3"))//true
	alert(/\d/.test("w"))//false
	alert(/\D/.test("w"))//true
	alert(/\w/.test("w"))//true
	alert(/\w/.test("˾"))//false
	alert(/\W/.test("ͽ"))//true
	alert(/\s/.test(" "))//true
	alert(/\S/.test(" "))//false
	alert(/\S/.test("��"))//true
	alert(/./.test("��"))//true
	alert(/./.test("  "))//true
	alert(/./.test(a))//true

### ����
����Ԫ�ַ��������ַ����ַ���������ǵ���ϣ������ţ��������ǵ���ף�Ԥ�����ࣩ����һ��һ����ƥ�䡣����Ҫƥ�䡰˾ͽ��������ʡ�����򵥶�Ҫ/..../���������50����ַ�����Ҫ���ˡ�������Ǳ�����Ҫһ���򵥵Ĳ�������������������ϵ��

#### ������

����|����|����
----|----|----
?|��������|������λ�һ��
\*|��������|������λ���(�����)
+|��������|����һ�λ��Σ�����һ�Σ�
{n}|Ӳ������|��Ӧ��λ���n��
{n,m}|��������|���ٳ���n�ε�������m��
{n,}|��������|���ٳ���n��(+��������)

	alert(/..../.test("˾ͽ����"))//true
	alert(/˾ͽ����/.test("˾ͽ����"))//true
	alert(/[\u4e00-\u9fa5]{4}/.test("˾ͽ����"))//true
	alert(/[\u4e00-\u9fa5]{4}/.test("˾ͽ����55"))//true
	alert(/^[\u4e00-\u9fa5]+$/.test("������ʽ"))//true
	alert(/^[\u4e00-\u9fa5]+$/.test("������ʽ&*@@"))//false
	alert(/\d{6}/.test("123456"))//true
	alert(/[ruby]{2}/.test("rr"))//true
	alert(/[ruby]{2}/.test("ru"))//true
	alert(/[ruby]{2}/.test("ry"))//true

**/[\u4e00-\u9fa5]/����ƥ�䵥�����֡�**

#### ̰�����ʣ�����������֧��������
- ̰�����ʣ������ᵽ�����м����ʡ����������˵�İ�������������һ�����������ַ����������̲��£�ƥ�䲻�ˣ����ٴӺ���һ����³�����ȥ�����һ���ַ����ٿ���ʱ��������ַ����Ƿ�ƥ�䣬���������ظ�ֱ������Ϊ�㣩
- �������ʣ��ڼ����ʺ���ʺš�����̫���ˣ��ȳ���ǰ���һ���ַ��������������������һ�������ֲ�ƥ�䣬�Ͷ��µڶ���������������һ���������ַ������ַ����ٳ���ƥ�䣬����ٲ�ƥ�䣬�ٳ�һ�����ӵ�������ַ����ַ������������乤����ʽ��̰�������෴��
- ֧�������ʣ��ڼ����ʺ�ӼӺš��������ֶ��и����ϳ��ԵĹ��̣���֧��������ȴֻ����һ�Σ����Ͽ�ζ�����ˡ�����һ������߹��֧���λ�Ĺ���������Ҳ����˵�����������ʡ�����javascript��֧�֣��������������Ļ���Ҳû���ˡ�


	var re1 = /.*bbb/g;//̰��
	var re2 = /.*?bbb/g;//����
	//  var re3 = /.*+bbb/g;//֧����,javascript��֧�֣�IE���������µı�׼�����������
	alert(re1.test("abbbaabbbaaabbbb1234")+"");//true
	alert(re1.exec("abbbaabbbaaabbbb1234")+"");//null
	alert("abbbaabbbaaabbbb1234".match(re1)+"");//abbbaabbbaaabbbb
	 
	alert(re2.test("abbbaabbbaaabbbb1234")+"");//true
	alert(re2.exec("abbbaabbbaaabbbb1234")+"");//aabbb
	alert("abbbaabbbaaabbbb1234".match(re2)+"");//abbb,aabbb,aaabbb

### ����
��ĿǰΪֹ������ֻ��һ���ַ���ƥ�䣬��Ȼ���ʵĳ��֣��ܰ������Ǵ���һ���ܽ���������ͬ�����ַ��������ǲ����ģ�������ֵ�С���ų����ˣ������ű�ʾ��Χ��ѡ�񣬴����ű�ʾ�ظ�������С�������������ظ�����ַ���

	//����+����
	alert(/(dog){2}/.test("dogdog"))//true
	//����+��Χ
	alert("baddad".match(/([bd]ad?)*/))//baddad,dad
	//����+����
	alert("mon and dad".match(/(mon( and dad)?)/))//mon and dad,mon and dad, and dad

### ��������
�������ñ�ʶ��������ʽ�е�ƥ���鲶������ַ�����ÿ���������ö���һ����Ż���������ʶ����ͨ����\��š���ʾ���������á�

	var color = "#990000";
	/#(\d+)/.test(color);
	alert(RegExp.$1);//990000
	 
	alert(/(dog)\1/.test("dogdog"))//true
	 
	var num = "1234 5678";
	var newNum = num.replace(/(\d{4}) (\d{4})/,"$2 $1");
	alert(newNum)

### ��ѡ
�����ڷ����������¡��ڷ����в���ܵ�������|��������������Ϊ������������

	var reg = /(red|black|yellow)!!/;
	alert(reg.test("red!!"))//true
	alert(reg.test("black!!"))//true
	alert(reg.test("yellow!!"))//true

### �ǲ����Է���
���������з��鶼�ܴ����������ã���һ���ر�ķ����֮Ϊ�ǲ����Է��飬���ǲ��ᴴ���������á���֮�����ǲ����Է��顣Ҫ����һ���ǲ����Է��飬ֻҪ�ڷ���������ŵĺ������һ���ʺ���ð�ž����ˡ�

	var color = "#990000";
	/#(?:\d+)/.test(color);
	alert(RegExp.$1);//""
��Ŀ���Ƴ����б�ǩ��ֻ����innerText!

	var html = "<p><a href='http://www.cnblogs.com/rubylouvre/'>Ruby Louvre</a>by <em>˾ͽ����</em></p>";
	var text = html.replace(/<(?:.|\s)*?>/g, "");
	alert(text)
ע�⣺javascript��������������

### ǰհ
�����ڷ����������¡�ǰհ���հ��ʵ�����������ԣ���javascript��֧�ֺ�հ��

������

����|����|����
----|----|----
(?=exp)|����ǰհ|ƥ��expǰ���λ��
(?!exp)|����ǰհ|ƥ����治��exp��λ��
(?<=exp)|�����հ|ƥ��exp�����λ�ò�֧��
(?<!exp)|�����հ|ƥ��ǰ�治��exp��λ�ò�֧��
����ǰհ�������������ĳ��ֵ��ǲ���ĳ���ض����ַ�����������ǰհ���Ǽ��������Ĳ�Ӧ�ó��ֵ��ض��ַ��������������ǲ��ᱻ����ġ�

	var str1 = "bedroom";
	var str2 = "bedding";
	var reBed = /(bed(?=room))///�����ǲ���bed����ַ���ʱ������ȥ�����������ַ����ǲ���room
	alert(reBed.test(str1));//true
	alert(RegExp.$1)//bed
	alert(RegExp.$2 === "")//true
	alert(reBed.test(str2))//false
	var str1 = "bedroom";
	var str2 = "bedding";
	var reBed = /(bed(?!room))/  //Ҫ�������治����room
	alert(reBed.test(str1))//false
	alert(reBed.test(str2))//true

��Ŀ���Ƴ�hr��������б�ǩ��ֻ����innerText!

	var html = "<p><a href='http://www.cnblogs.com/rubylouvre/'>Ruby Louvre</a></p><hr/><p>by <em>˾ͽ����</em></p>";
	var text = html.replace(/<(?!hr)(?:.|\s)*?>/ig,"")
	alert(text)//Ruby Louvre<hr/>by ˾ͽ����

### �߽�

һ��Ҫ���ַ�����õĶ�����

����|����|����
----|----|----
^|��ͷ|ע�ⲻ�ܽ������������ŵĺ���
$|��β| 
\b|���ʱ߽�|ָ[a-zA-Z_0-9]֮����ַ�
\B|�ǵ��ʱ߽�| 
��Ŀ�����һ���ַ���ԭ�ͷ�����ʵ������ĸ��д��

	var a = "ruby";
	String.prototype.capitalize =  function () {
	    return this.replace(/^\w/, function (s) {
	        return s.toUpperCase();
	    });
	}
	alert(a.capitalize())//Ruby
���ʱ߽������Ҫƥ��Ķ�����ǰ�˻�δ�˲���ΪӢ����ĸ�����������ֻ��º��ߡ�

	var str = "12w-eefd&efrew";
	alert(str.match(/\b\w+\b/g))//12w,eefd,efrew

ʵ������|����
----|----
global|�ǵ�ǰ���ʽģʽ�״�ƥ�����ݵĿ�ʼλ�ã���0��ʼ���������ʼֵΪ-1��ÿ�γɹ�ƥ��ʱ��index���Զ�����֮�ı䡣
ignoreCase|���ش���RegExp����ʵ��ʱָ����ignoreCase��־��i����״̬���������RegExp����ʵ��ʱ������i��־�������Է���True�����򷵻�False��Ĭ��ֵΪFalse��
lastIndex|�ǵ�ǰ���ʽģʽ�״�ƥ�����������һ���ַ�����һ��λ�ã���0��ʼ������������Ϊ��������ʱ����ʼλ�ã���ʼֵΪ-1�� ��ʾ����ʼλ�ÿ�ʼ������ÿ�γɹ�ƥ��ʱ��lastIndex����ֵ������֮�ı䡣(ֻ��ʹ��exec()��test()�����Ż����룬����Ϊ0)
multiLine|���ش���RegExp����ʵ��ʱָ����multiLine��־��m����״̬���������RegExp����ʵ��ʱ������m��־�������Է���True�����򷵻�False��Ĭ��ֵΪFalse��
source|���ش���RegExp����ʵ��ʱָ���ı��ʽ�ı��ַ�����

	var str = "JS's Louvre";
	var reg = /\w/g;
	alert(reg.exec(str));//J
	alert(reg.lastIndex);//1
	alert(reg.exec(str));//S
	alert(reg.lastIndex);//2
	alert(reg.exec(str));//s
	alert(reg.lastIndex);//4
	alert(reg.exec(str));//L
	alert(reg.lastIndex);//6

