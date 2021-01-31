# Cookies bar
Npm package for easy implementation of a cookie bar.

## Install
In a public folder (will be accessible in production env) run following command
```
npm i am-cookies-bar
```

## Insert into a template (eg. for Nette)
```$html
<link rel="stylesheet" type="text/css" href="{$basePath}/node_modules/am-cookies-bar/dist/cookiesbar.css"/>
<script src="{$basePath}/node_modules/am-cookies-bar/dist/cookiesbar.min.js"></script>
<script>
	$.cookiesBar.init({
		// Options
		// info_link: {plink Page:Cookies},
	});
</script>
```

## Options
- `key`: Cookies key
- `main_class`: main wrapper CSS class
- `classes`: another wrapper classes
- `text`: Text of the cookies bar
- `agree_classes`: CSS classes of the agree button
- `agree_text`: Text of the agree button
- `info`: bool value - if you want to show additional info button
- `info_text`: Text of the info button
- `info_classes`: CSS classes of the info button
- `info_link`: Link for the info button
- `info_target`: `_self | _blank` (default `_self`)
- `bar_html`: HTMl template of the bar

## Theming
Base style is in `sass/cookiesbar.scss`. If you want to change theme you can include your own css, or use `sass` and change default variables.
