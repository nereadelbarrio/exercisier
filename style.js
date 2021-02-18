(function (blink) {
	'use strict';

	var exercisierStyle = function () {
			blink.theme.styles.mcgrawhill.apply(this, arguments);
		},
		page = blink.currentPage;

	exercisierStyle.prototype = {
		parent: blink.theme.styles.mcgrawhill.prototype,
		bodyClassName: 'content_type_clase_exercisier',
		toolbar: {
			name: 'exercisier',
			items: ['Blink_popover']
		},
		extraPlugins: ['blink_popover'],
		ckEditorStyles: {
			name: 'exercisier',
			styles: [
				{ name: 'Título Prepárate', element: 'h2', attributes: { 'class': 'bck-title bck-title-preparate'} },
				{ name: 'Título 4', element: 'h3', attributes: { 'class': 'bck-title bck-title-4'} },

				{ name: 'Énfasis-2', element: 'span', attributes: { 'class': 'bck-enfasis-2'} },
				{ name: 'Énfasis-3', element: 'span', attributes: { 'class': 'bck-enfasis-3'} },

				{ name: 'Lista Ordenada 2', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-2' } },
				{ name: 'Lista Ordenada 3', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-3' } },

				{ name: 'Caja 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-3' } },
				{ name: 'Caja 4', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-4' } },
				{ name: 'Caja 5', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-5' } },
				{ name: 'Caja Duo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-6' } },
				{ name: 'Caja 7', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-7' } },
				{ name: 'Caja Vídeo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-8' } },

				{ name: 'Icono Reperage', element: 'span', attributes: { 'class': 'icon icon-reperage' } },

				{ name: 'Desplegable 3', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown bck-dropdown-3' } },
			]
		},
		slidesTitle: {},
		subunits: [],
		totalSlides: 0,

		init: function () {
			var that = this;
			this.parent.init.call(this.parent, this);
			this.parent.initInfoPopover();
			blink.events.on("course_loaded", function(){
				deshabilitarMenuContextual("video, img, audio, .audio");
			});
			this.blockLeftButton()
		},

		blockLeftButton: function () { 
			$("body").on("contextmenu",function(e){
				e.preventDefault();
				return false;
			 }); 
			 if ($('.short-answer') && !$('.bck-dropdown').hasClass('open')) {
				 $('.short-answer .bck-dropdown .bck-dropdown-content').hide()
			 }
			 
		},

		removeFinalSlide: function () {
			var parent = blink.theme.styles.basic.prototype;
			parent.removeFinalSlide.call(this, true);
		},

		formatCarouselindicators: function () {
			this.parent.formatCarouselindicators.call(this.parent, this, 'exercisier-navbar');
		},

		showBookIndexInClass: function () {
			return modoVisualizacionLabel != "standalone";
		},

		animateNavbarOnScroll: function () {
			this.parent.animateNavbarOnScroll.call(this.parent, this, 'exercisier-navbar');
		},

		activityDropdown: function () {
		    return false;
		},
		deshabilitarMenuContextualGaleria: function(){
			return true;
		},
		permiteVerUltimaSlide: function(){
			return false;
		}

	};

	exercisierStyle.prototype = _.extend({}, new blink.theme.styles.mcgrawhill(), exercisierStyle.prototype);

	blink.theme.styles['exercisier'] = exercisierStyle;

})(blink);
