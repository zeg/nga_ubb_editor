CKEDITOR.plugins.add( 'nga_hr' , {
	icons: 'nga_hr',
	init: function( editor ) {
		if ( editor.blockless )
			return;

		editor.addCommand( 'nga_hr', {
			exec: function( editor ) {
				var nowstr=editor.getSelection().getSelectedText();
				editor.insertHtml( '<h4>' + nowstr + '</h4>' );
			},
			allowedContent: '/^([a-z0-9\\-*\\s]+)((?:\\s*\\{[!\\w\\-,\\s\\*]+\\}\\s*|\\s*\\[[!\\w\\-,\\s\\*]+\\]\\s*|\\s*\\([!\\w\\-,\\s\\*]+\\)\\s*){0,3})(?:;\\s*|$)/i'
		});

		editor.ui.addButton( 'Nga_hr', {
			label: '插入段落标题/分割线',
			command: 'nga_hr',
			toolbar: 'insert'
		});

		// var path = this.path;
		editor.on( 'mode', function() {
			if ( this.mode !== 'wysiwyg' ) {
				return;
			}
		});
	}
});