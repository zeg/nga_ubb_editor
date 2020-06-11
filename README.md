# nga_ubb_editor
nga发帖代码编辑器

NGA编辑器的可视化版本，基于CKEditor

如果看不到切换可视化编辑器的按钮 在控制台输入 

postfunc.useWysiwyg = 1 

然后按住发帖按钮直到变色


========================================


如果要本地调试 首先需要在本机安装http服务 使本地代码可以在浏览器中访问 在控制台输入 

__SCRIPTS.ubbeditor = 'https://127.0.0.1/...你本地的代码路径../index.html' 

然后再打开编辑器


==========================================


以下常用变量已由父页面导入至编辑器页面

__NOW __CACHE_PATH __IMG_BASE __IMGPATH __IMG_STYLE __COMMONRES_PATH __BBSURL __ATTACH_BASE __ATTACH_BASE_UPLOAD __ATTACH_BASE_UPLOAD_SEC __ATTACH_BASE_VIEW __ATTACH_BASE_VIEW_SEC __RES_BASE __RES_BASE_SEC __CURRENT_FID __CURRENT_F_BIT __JSBASE __CSSBASE __UICON_BASE

