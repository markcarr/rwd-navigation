// Responisve navigation
// Mark Carr

var App = {};

;(function($, window, document){
	'use strict';

	$(document).ready(function(){
		$('nav.main').each(function(){
			new App.Navigation(this);
		});
	});

	var Navigation = this.Navigation = function(element, options){
		this.element = $(element);
		this.options = $.extend({}, this.options, options);

		this.initialise();
	};

	Navigation.prototype = {
		options: {},

		initialise: function(){
			this.setElements();
			this.setEvents();
			this.resize();
		},

		setElements: function(){
			this.$button = this.element.find('label');
			this.$expand = this.element.prev('#expand');
			this.$clickOut = this.element.nextAll('.mast, .wrapper');
		},

		setEvents: function(){
			var self = this;

			this.$clickOut.on('click', function(){
				self.reset();
			});

			this.$button.on('click', function(){
				$(document.body).toggleClass('no-scroll');
			});
		},

		reset: function(){
			this.$expand.attr('checked', false);
			$(document.body).removeClass('no-scroll');
		},

		resize: function(){
			var self = this;

			$(window).on('resize', function(){
				self.reset();
			});
		}
	};

	$.fn.navigation = function(options){
		new Navigation(this, options);
		return this;
	};

}).apply(App, [jQuery, window, document]);