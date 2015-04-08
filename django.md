# Djangoѧϰ�ʼ�

## 1. ��װ
* Ŀǰ֧�ִ�2.5��ò�ƣ������µ�3.4�����а汾Python�����Խ�������߰汾�ͺ��ˣ�ò�����°�Python���Դ���pip��һ��python�������ߣ��ܺ��ã��ر�����
* ��װ��pip�³����򵥣�����`pip install django==1.7.5`��1.7.5�ǵ�ǰ���°汾
* ��װ���Ժ��½���Ŀ�ã�`django-admin.py startproject <��Ŀ����>`�����Զ�����Ŀ¼

## 2. �򵥵��÷�
* ���Դ���WEB�������ǣ�`python manage.py runserver`
* Tour360Ŀ¼�£���ʱ�趨��ĿĿ¼��Tour360��urls.py ��·�ɹ���
* ��ͼģ����Ҫ�Լ����� ���趨��views.py
* ·�ɵ�д������ʵ�����Examples���Բο�

	> \#url(r'^$','tour360.views.home',name='home'),   
	> \#url(r'^blog/',include('blog.urls')),  
	> url(r'^admin/',include(admin.site.urls)),  
	> url(r'^hello/',hello),  
	> url(r'^$',blank),  
* �ǵ�·��urls.py����Ҫimport��ͼ�Ŀ⣬�����ҵ���ͼ��: `from tour360.views import *`
 * һ����ͼ���ܱ��뷵��һ��HttpResponse
* ������urls�е�д��: `url(r'^hello/(\w+)/$',hello)`,������+�����д��
* �ڴ����views���棬���offset����,���磺`Def hello(request,offset):`����ʵoffset��������ɱ�ı�����������ж����������ͼ����Ӿͺ��ˣ��������Լ�������
* **PS������ʼ����String�ͣ������Ǵ�����Ҳ��String��**

## 3. ���õ����
* Ŀǰ������RESTFul��ܣ�<http://www.django-rest-framework.org/>


## 4. �����̨
* ͨ��: http://<website>/admin ���룬��Ҫ��serttings.py������м���Ͳ���������Ĭ���Ǵ򿪵ġ�Ȼ���Ҫ���û��˺ţ����ʱ�����ֱ����:��python manager.py createsuperuser�������뽻��ʽ������˺ŶԻ������µĹ����û�
* Ĭ����ϵͳ�Լ������ݵĹ�����������Ĺ���һ�����û��˺�ʲô�ģ�
* ���Ҫ�������Լ�������ģ�ͽ�ȥ������Ҫ��appĿ¼�µ�admin.py�У�
	> from django.contrib import admin//�����ϵͳ�Զ�����  
	> from mysite.books.models import Publisher, Author, Book//�����import���Լ���ģ��  
	> admin.site.register(Publisher)//�����������Լ���ģ�Ͷ���  
	> admin.site.register(Author)//�����������Լ���ģ�Ͷ���  
	> admin.site.register(Book)//�����������Լ���ģ�Ͷ���  

* �Ǳ����ֶ�����models���趨�ã����磺
	> Class User(models.Model):  
	> 	Name = models.CharField(max_length=20,blank=True)  

* �����Զ����ڹ�������µ����ݱ༭���б�ҳ�棬��������admin.py���Լ�дһ��������࣬���磺
	> classMemberAdmin(admin.ModelAdmin):  
	> 	list_display=('name','phone','email','QQ')  

	> classActorAgentInfo(models.Model):  
	> 	id=models.IntegerField(blank=True,null=False,primary_key=True,verbose_name='���')  
	> 	status=models.IntegerField(blank=True,null=True,verbose_name='״̬')  
	> 	agent_type=models.IntegerField(blank=True,null=True,verbose_name='�ͻ�����')  
* �����ݿ������ֶ��м���verbose_name�������ֶ��ں�̨admin����˿�����ʾָ��������

* Ȼ����ע�ᵽ����˿��е�ʱ��Ҫ�����һ����������admin.site.register(Member,MemberAdmin)�������������б��оͻ���ʾname��phone��email��QQ�⼸�����ԣ��ܰ���
* ���Ҫ���������������ԣ���search_fields = ('first_name', 'last_name')�������������������ֶ�
* ���Ҫ��������������ԣ���list_filter = ('publication_date')��
* ���ػ�������Setting.py�е�MIDDLEWARE_CLASSES�м����м������'django.middleware.locale.LocaleMiddleware'��
* model admin�ｨһ��field���������ڱ���������ӵ���һ�ű�ı༭ҳ���filterҳ�棨�������˵��ʱû��ʵ�飩
* ������ŵ� model ������ ���ŷ��� ������������ �������� ��ͷ���ú��� ��� ��ô admin ��ͷ list_display ����ֱ��ָ�����ŷ������ Ȼ���̨�Ľ����������˵�ɶ��ֱ�Ӱ������ɺ��� ~~

## 5. ��ǰ��Ŀ���õĻ���
* Python 2.7.x��pyodbc��python�汾��Ҫ��
* Django 1.7.6
* virtualenv�����⿪��������
* pyodbc��ͨ��odbc����sqlserver��
* django-pyodbc�����ݿ��ˣ���Ҫĳ��exe��֧�ֿ⣬��Ҫeasy_install+�����ļ�����virtualenv�°�װ�����⻷����
* sql server2008
