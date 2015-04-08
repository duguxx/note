# PHP���Laravelѧϰָ��

## 1. ��װ

### 1. ��װComposer

* Windows���а�װ����<https://getcomposer.org/Composer-Setup.exe>	
* Linux֮�����:
	> curl -sS https://getcomposer.org/installer | php
* Linux��ȫ�ְ�װ��:
	> curl -sS https://getcomposer.org/installer | php  
	> mv composer.phar /usr/local/bin/composer  

### 2. ��composer���װ
	`composer global require "laravel/installer=~1.1"`
	
### 3. ����������Ҫ��
	* PHP >= 5.4
	* Mcrypt PHP Extension
	* OpenSSL PHP Extension
	* Mbstring PHP Extension
 
**PS:PHP 5.5�Ļ����밲װjson�⣺**`apt-get install php5-json`


## 2. �򵥵�ʹ��

* Ȼ��laravel new <��ĿĿ¼����>�Ϳ����½�һ����Ŀ��
* ������Ŀ�����У�php artisan serve �Ϳ�����PHP�ڽ���WEB��������Ĭ��ҳ��

* ��Ҫ�ļ�Ŀ¼λ�ã�
	> �������ڣ�app/Http/Controllers/*  
	> ·�����ڣ�app/Http/routes.php  
	> ��ͼλ�ڣ�resources/views/*  
	> �����ļ���config/*  

* �������﷨��
	> Route::get('test','TestController@index');
	> Route::get�ǹ̶��ģ���ʾ��get��ʽ���²⣩
	> test��url�еĵ�ַ
	> TestController@index����ʾ��TestController���е�index���������������

* �������⣺
* ��Ϊ��Laravel5�У�Html��Form�Ѿ����Ǻ���������Ƴ��ˣ�������Ҫ�ֹ���ӣ�
	1. ��composer.json�е�requirement�ֶ�������:`"illuminate/html": "~5.0"`
	2. ִ��Composer update����
	3. ��config/app.php��������provider�����м���:`'Illuminate\Html\HtmlServiceProvider'`
	4. Ȼ����aliases�����м����������У�
		> 'Form'=> 'Illuminate\Html\FormFacade',  
		> 'HTML'=> 'Illuminate\Html\HtmlFacade',  
	5. ���⣬���ڱ�ǩ�ĸ�ʽ�����{!!Form:text('name')!!}����ʽ����ǰ��{{}}�����RAW�ַ�����Ҳ����echo {{}}���������⣩��
	6. �½������������⣺��Ϊ�﷨�䶯��������Ҫ�� `php artisan make:controller <����������>` ���½���
	

* ��ȡ���ύ��������
	> ԭ���ǣ�
	Use Illuminate\Http\Request;
	���޸ĳ�;
	Use Request;
	��Ϊ����app.php�еĶ����ǣ�
	'Request'=>'Illuminate\Support\Facades\Request',
	
	> ԭ���ǣ�Input::all();
	�����ǣ�Request::all();
	
	> �г���ǰ·�ɣ�
	php artisan route:list


���쿴����
5.3 ��������

���� <https://github.com/huanghua581/laravel-getting-started/blob/master/4.2.md> 


���쿪ʼ�ϰ汾�İ�װ
composer create-project laravel/laravel=4.1.27 your-project-name --prefer-dist
ָ����װ�汾��Ҫ��������

