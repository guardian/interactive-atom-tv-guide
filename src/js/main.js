import xr from 'xr'
import blocksTemplate from '../templates/blocks.html'
import Mustache from 'mustache'

var el = document.createElement('script');
el.src = '<%= path %>/app.js';
document.body.appendChild(el);


xr.get('https://interactive.guim.co.uk/docsdata-test/13Z-k6cmhNn4goSjAPrz9vCEdWecIfjxFPc9nVh9v3Ks.json').then((resp) => {
		var sheets = resp.data.sheets;
		var html = Mustache.render(blocksTemplate, sheets);

		return html;
	});
