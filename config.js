CKEDITOR.editorConfig = function( config ) {
    config.width = '';
    config.height = 800;
	config.language = 'zh-cn';
	config.uiColor = '#f5e8cb';
	config.extraPlugins = 'bbcode,quicktable,hkemoji,spoiler,nga_hr';
    config.removePlugins = 'smiley,templates';
	config.skin = 'moono-lisa';
	config.toolbar = [
		{ name: 'styles', items: [ 'Font', 'FontSize','TextColor'] },
		{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
		'/',
		{ name: 'paragraph', items: [ 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote','-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight'] },
		{ name: 'links', items: [ 'Link', 'Unlink', 'Nga_hr', 'HKemoji','Spoiler'] },
		//,'HKemoji'
		{ name: 'insert', items: [ 'Image', 'Table'] },
		'/',
		{ name: 'editing', items: [ 'Find', 'Replace'] },
		{ name: 'tools', items: ['Undo', 'Redo','-','Maximize', '-', 'Source'] },
	];
	config.font_names ='宋体/simsun;黑体/simhei;Arial/Arial;Arial Black/Arial Black;Book Antiqua/Book Antiqua;Century Gothic/Century Gothic;Comic Sans MS/Comic Sans MS;Courier New/Courier New;Georgia/Georgia;Impact/Impact;Tahoma/Tahoma;Times New Roman/Times New Roman;Trebuchet MS/Trebuchet MS;Script MT Bold/Script MT Bold;Stencil/Stencil;Verdana/Verdana;Lucida Console/Lucida Console';
	config.fontSize_sizes = '100%;110%;120%;130%;140%;150%;';
	config.colorButton_colors = 'skyblue/87CEEB,royalblue/4169E1,blue/0000FF,darkblue/00008B,orange/FFA500,orangered/FF4500,crimson/DC143C,red/FF0000,firebrick/B22222,darkred/8B0000,green/008000,limegreen/32CD32,seagreen/2E8B57,teal/008080,deeppink/FF1493,tomato/FF6347,coral/FF7F50,purple/800080,indigo/4B0082,burlywood/DEB887,sandybrown/F4A460,sienna/A0522D,chocolate/D2691E,silver/C0C0C0';
	config.colorButton_enableAutomatic= false;
	config.colorButton_enableMore= false;
	config.colorButton_normalizeBackground= false;
};
