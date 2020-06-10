/*
*    This plugin is edit from "emojione" plugin, and design for custom emoji needs.
*    Special thanks to:  braune-digital;
*    If you have any issue with this plugin, please contact me at: empty@null.net
*/
CKEDITOR.plugins.add( 'hkemoji', {
	icons: 'hkemoji',
	requires: 'dialog',
	init: function(editor) {
		var pluginDirectory = this.path;
        editor.config.smiley_path =  this.path + 'sticker/';
		editor.addCommand( 'hkemoji', new CKEDITOR.dialogCommand( 'hkemojiDialog' ) );
		editor.ui.addButton( 'HKemoji', {
			label: '插入表情',
			command: 'hkemoji',
			toolbar: 'insert'
		});
		CKEDITOR.dialog.add( 'hkemojiDialog', this.path + 'dialogs/hkemoji.js' );
	}
});

// if you wanna change [tabs ID] and [tab names] , please change at file "dialogs/hkemoji.js", and folder name in "sticker/[?]"
CKEDITOR.config.hkemoji = {
	tabs: {
		ac: 'AC',
		ac2: 'AC娘2',
        	},
	emojis: {
		ac: ['ac0.png','ac1.png','ac2.png','ac3.png','ac4.png','ac5.png','ac6.png','ac7.png','ac8.png','ac9.png','ac10.png','ac11.png','ac12.png','ac13.png','ac14.png','ac15.png','ac16.png','ac17.png','ac18.png','ac19.png','ac20.png','ac21.png','ac22.png','ac23.png','ac24.png','ac25.png','ac26.png','ac27.png','ac28.png','ac29.png','ac30.png','ac31.png','ac32.png','ac33.png','ac34.png','ac35.png','ac36.png','ac37.png','ac38.png','ac39.png','ac40.png','ac41.png','ac42.png'],
		ac2: ['a2_02.png','a2_05.png','a2_03.png','a2_04.png','a2_07.png','a2_08.png','a2_09.png','a2_10.png','a2_14.png','a2_16.png','a2_15.png','a2_17.png','a2_21.png','a2_23.png','a2_24.png','a2_25.png','a2_27.png','a2_28.png','a2_30.png','a2_31.png','a2_32.png','a2_33.png','a2_36.png','a2_51.png','a2_53.png','a2_54.png','a2_55.png','a2_47.png','a2_48.png','a2_45.png','a2_49.png','a2_18.png','a2_19.png','a2_52.png','a2_26.png','a2_11.png','a2_12.png','a2_13.png','a2_20.png','a2_22.png','a2_42.png','a2_37.png','a2_38.png','a2_39.png','a2_41.png','a2_40.png']
 	}
};