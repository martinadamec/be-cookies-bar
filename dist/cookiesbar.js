(function () {
	$.extend({
		cookiesBar: {
			options: {
				'key': '_cb-eu-cookies',
				'main_class': '_cb',
				'classes': '',
				'text': 'Tento web využívá cookies. Jeho používáním s tím vyjadřujete souhlas.',
				// Agree button
				'agree_classes': '_cb-js-agree',
				'agree_text': 'Přečetl/la jsem a souhlasím',
				// More info button
				'info_text': 'Více informací',
				'info_classes': '',
				'info_link': '',
				'info_target': '_self',
				// Bar
				'bar_classes': '_cb',
				'bar_html': '<div class="[main_class] [classes]"><div class="_cb-container"><div class="_cb-content"><div class="_cb-text">[text]</div><div class="_cb-buttons"><div class="_cb-agree"><a href="#" class="[agree_classes]">[agree_text]</a></div><div class="_cb-info"><a href="[info_link]" target="[info_target]" class="[info_classes]">[info_text]</a></div></div></div></div></div>'
			},

			init: function (options) {
				var self = this;
				self.options = $.extend(self.options, options);

				// Create bar
				if ( !self.getCookie(self.options.key) ) {
					$('body').append(self.createBar());
					self.acceptListener();
				}
			},

			getCookie:  function(name) {
				match = document.cookie.match(new RegExp('(^| )' + name + '=(?<value>([^;]+))'));
				return match ? match.groups.value : null;
			},

			createBar: function () {
				var self = this,
					html = self.options.bar_html,
					replace = ['main_class', 'classes', 'text', 'agree_classes', 'agree_text', 'info_text', 'info_classes', 'info_link', 'info_target'];

				for ( i in replace )
				{
					html = html.replace('[' + replace[i] + ']', self.options[replace[i]]);
				}

				return html;
			},

			hideBar: function () {
				$('.' + this.options.main_class).slideUp("fast");
			},

			acceptListener: function() {
				var self = this;
				$('html').on('click touch pad', '._cb-js-agree', function (e) {
					var date = new Date();
					date.setFullYear(date.getFullYear() + 10);
					document.cookie = self.options.key + '=1; path=/; expires=' + date.toGMTString();
					self.hideBar();
					e.preventDefault();
					return false;
				});
			},
		}
	});

})(jQuery);
