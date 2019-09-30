import xr from 'xr'
import blocksTemplate from '../templates/blocks.html'
import Mustache from 'mustache'

var el = document.createElement('script');
el.src = '<%= path %>/app.js';
document.body.appendChild(el);


xr.get('https://interactive.guim.co.uk/docsdata-test/15Y19eKr6Nqz0jA5KuIbS03EOSI3fWgJXJsLsoCVQ2N0.json').then((resp) => {
	var sheets = resp.data.sheets;
	var html = Mustache.render(blocksTemplate, sheets);

	return html;
});
