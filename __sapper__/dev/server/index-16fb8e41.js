'use strict';

var index = require('./index-0642fb9d.js');
var index$1 = require('./index-2209bb13.js');
require('./index-93f59318.js');
require('yootils');
var Repl = require('./Repl-78ed57fa.js');
var examples = require('./examples-e5967878.js');
var app$1 = require('./app-69fe12cd.js');
var config = require('./config-5bec691e.js');

/* src\routes\examples\_TableOfContents.svelte generated by Svelte v3.12.0 */

const css = {
	code: ".examples-toc.svelte-3jmrq9{overflow-y:auto;height:100%;border-right:1px solid var(--second);background-color:var(--second);color:white;padding:3rem 3rem 0 3rem}.examples-toc.svelte-3jmrq9 li.svelte-3jmrq9{display:block;line-height:1.2;margin:0 0 4.8rem 0}.section-title.svelte-3jmrq9{display:block;padding:0 0 0.8rem 0;font:400 var(--h6) var(--font);text-transform:uppercase;letter-spacing:0.12em;font-weight:700}div.svelte-3jmrq9{display:flex;flex-direction:row;padding:0.2rem 3rem;margin:0 -3rem}div.active.svelte-3jmrq9{background:rgba(0, 0, 0, 0.15) calc(100% - 3rem) 47% no-repeat\r\n\t\t\turl(/icons/arrow-right.svg);background-size:1em 1em;color:white}div.active.loading.svelte-3jmrq9{background:rgba(0, 0, 0, 0.1) calc(100% - 3rem) 47% no-repeat\r\n\t\t\turl(/icons/loading.svg);background-size:1em 1em;color:white}a.svelte-3jmrq9{display:flex;flex:1 1 auto;position:relative;color:var(--sidebar-text);border-bottom:none;font-size:1.6rem;align-items:center;justify-content:start;padding:0}a.svelte-3jmrq9:hover{color:white}.repl-link.svelte-3jmrq9{flex:0 1 auto;font-size:1.2rem;font-weight:700;margin-right:2.5rem}.thumbnail.svelte-3jmrq9{background-color:white;object-fit:contain;width:5rem;height:5rem;border-radius:2px;box-shadow:1px 1px 3px rgba(0, 0, 0, 0.13);margin:0.2em 0.5em 0.2em 0}",
	map: "{\"version\":3,\"file\":\"_TableOfContents.svelte\",\"sources\":[\"_TableOfContents.svelte\"],\"sourcesContent\":[\"<script>\\r\\n\\texport let sections = [];\\r\\n\\texport let active_section = null;\\r\\n\\texport let isLoading = false;\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n\\t.examples-toc {\\r\\n\\t\\toverflow-y: auto;\\r\\n\\t\\theight: 100%;\\r\\n\\t\\tborder-right: 1px solid var(--second);\\r\\n\\t\\tbackground-color: var(--second);\\r\\n\\t\\tcolor: white;\\r\\n\\t\\tpadding: 3rem 3rem 0 3rem;\\r\\n\\t}\\r\\n\\r\\n\\t.examples-toc li {\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\tline-height: 1.2;\\r\\n\\t\\tmargin: 0 0 4.8rem 0;\\r\\n\\t}\\r\\n\\r\\n\\t.section-title {\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\tpadding: 0 0 0.8rem 0;\\r\\n\\t\\tfont: 400 var(--h6) var(--font);\\r\\n\\t\\ttext-transform: uppercase;\\r\\n\\t\\tletter-spacing: 0.12em;\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t}\\r\\n\\r\\n\\tdiv {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: row;\\r\\n\\t\\tpadding: 0.2rem 3rem;\\r\\n\\t\\tmargin: 0 -3rem;\\r\\n\\t}\\r\\n\\r\\n\\tdiv.active {\\r\\n\\t\\tbackground: rgba(0, 0, 0, 0.15) calc(100% - 3rem) 47% no-repeat\\r\\n\\t\\t\\turl(/icons/arrow-right.svg);\\r\\n\\t\\tbackground-size: 1em 1em;\\r\\n\\t\\tcolor: white;\\r\\n\\t}\\r\\n\\r\\n\\tdiv.active.loading {\\r\\n\\t\\tbackground: rgba(0, 0, 0, 0.1) calc(100% - 3rem) 47% no-repeat\\r\\n\\t\\t\\turl(/icons/loading.svg);\\r\\n\\t\\tbackground-size: 1em 1em;\\r\\n\\t\\tcolor: white;\\r\\n\\t}\\r\\n\\r\\n\\ta {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex: 1 1 auto;\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tcolor: var(--sidebar-text);\\r\\n\\t\\tborder-bottom: none;\\r\\n\\t\\tfont-size: 1.6rem;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: start;\\r\\n\\t\\tpadding: 0;\\r\\n\\t}\\r\\n\\r\\n\\ta:hover {\\r\\n\\t\\tcolor: white;\\r\\n\\t}\\r\\n\\r\\n\\t.repl-link {\\r\\n\\t\\tflex: 0 1 auto;\\r\\n\\t\\tfont-size: 1.2rem;\\r\\n\\t\\tfont-weight: 700;\\r\\n\\t\\tmargin-right: 2.5rem;\\r\\n\\t}\\r\\n\\r\\n\\t.thumbnail {\\r\\n\\t\\tbackground-color: white;\\r\\n\\t\\tobject-fit: contain;\\r\\n\\t\\twidth: 5rem;\\r\\n\\t\\theight: 5rem;\\r\\n\\t\\tborder-radius: 2px;\\r\\n\\t\\tbox-shadow: 1px 1px 3px rgba(0, 0, 0, 0.13);\\r\\n\\t\\tmargin: 0.2em 0.5em 0.2em 0;\\r\\n\\t}\\r\\n</style>\\r\\n\\r\\n<ul class=\\\"examples-toc\\\">\\r\\n\\t{#each sections as section}\\r\\n\\t\\t<li>\\r\\n\\t\\t\\t<span class=\\\"section-title\\\">{section.title}</span>\\r\\n\\r\\n\\t\\t\\t{#each section.examples as example}\\r\\n\\t\\t\\t\\t<div\\r\\n\\t\\t\\t\\t\\tclass=\\\"row\\\"\\r\\n\\t\\t\\t\\t\\tclass:active={example.slug === active_section}\\r\\n\\t\\t\\t\\t\\tclass:loading={isLoading}>\\r\\n\\t\\t\\t\\t\\t<a\\r\\n\\t\\t\\t\\t\\t\\thref=\\\"examples#{example.slug}\\\"\\r\\n\\t\\t\\t\\t\\t\\tclass=\\\"row\\\"\\r\\n\\t\\t\\t\\t\\t\\tclass:active={example.slug === active_section}\\r\\n\\t\\t\\t\\t\\t\\tclass:loading={isLoading}>\\r\\n\\t\\t\\t\\t\\t\\t<img\\r\\n\\t\\t\\t\\t\\t\\t\\tclass=\\\"thumbnail\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\talt=\\\"{example.title} thumbnail\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tsrc=\\\"examples/thumbnails/{example.slug}.jpg\\\" />\\r\\n\\r\\n\\t\\t\\t\\t\\t\\t<span>{example.title}</span>\\r\\n\\t\\t\\t\\t\\t</a>\\r\\n\\t\\t\\t\\t\\t{#if example.slug === active_section}\\r\\n\\t\\t\\t\\t\\t\\t<a href=\\\"repl/{example.slug}\\\" class=\\\"repl-link\\\">REPL</a>\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</li>\\r\\n\\t{/each}\\r\\n</ul>\\r\\n\"],\"names\":[],\"mappings\":\"AAOC,aAAa,cAAC,CAAC,AACd,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CAAC,CACrC,gBAAgB,CAAE,IAAI,QAAQ,CAAC,CAC/B,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,AAC1B,CAAC,AAED,2BAAa,CAAC,EAAE,cAAC,CAAC,AACjB,OAAO,CAAE,KAAK,CACd,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,AACrB,CAAC,AAED,cAAc,cAAC,CAAC,AACf,OAAO,CAAE,KAAK,CACd,OAAO,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACrB,IAAI,CAAE,GAAG,CAAC,IAAI,IAAI,CAAC,CAAC,IAAI,MAAM,CAAC,CAC/B,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,GAAG,cAAC,CAAC,AACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,OAAO,CAAE,MAAM,CAAC,IAAI,CACpB,MAAM,CAAE,CAAC,CAAC,KAAK,AAChB,CAAC,AAED,GAAG,OAAO,cAAC,CAAC,AACX,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,SAAS;GAC9D,IAAI,sBAAsB,CAAC,CAC5B,eAAe,CAAE,GAAG,CAAC,GAAG,CACxB,KAAK,CAAE,KAAK,AACb,CAAC,AAED,GAAG,OAAO,QAAQ,cAAC,CAAC,AACnB,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,SAAS;GAC7D,IAAI,kBAAkB,CAAC,CACxB,eAAe,CAAE,GAAG,CAAC,GAAG,CACxB,KAAK,CAAE,KAAK,AACb,CAAC,AAED,CAAC,cAAC,CAAC,AACF,OAAO,CAAE,IAAI,CACb,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CACd,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,cAAc,CAAC,CAC1B,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,KAAK,CACtB,OAAO,CAAE,CAAC,AACX,CAAC,AAED,eAAC,MAAM,AAAC,CAAC,AACR,KAAK,CAAE,KAAK,AACb,CAAC,AAED,UAAU,cAAC,CAAC,AACX,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CACd,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,YAAY,CAAE,MAAM,AACrB,CAAC,AAED,UAAU,cAAC,CAAC,AACX,gBAAgB,CAAE,KAAK,CACvB,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC3C,MAAM,CAAE,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,AAC5B,CAAC\"}"
};

const TableOfContents = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { sections = [], active_section = null, isLoading = false } = $$props;

	if ($$props.sections === void 0 && $$bindings.sections && sections !== void 0) $$bindings.sections(sections);
	if ($$props.active_section === void 0 && $$bindings.active_section && active_section !== void 0) $$bindings.active_section(active_section);
	if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0) $$bindings.isLoading(isLoading);

	$$result.css.add(css);

	return `<ul class="examples-toc svelte-3jmrq9">
		${index.each(sections, (section) => `<li class="svelte-3jmrq9">
				<span class="section-title svelte-3jmrq9">${index.escape(section.title)}</span>

				${index.each(section.examples, (example) => `<div class="${[`row svelte-3jmrq9`, example.slug === active_section ? "active" : "", isLoading ? "loading" : ""].join(' ').trim() }">
						<a href="examples#${index.escape(example.slug)}" class="${[`row svelte-3jmrq9`, example.slug === active_section ? "active" : "", isLoading ? "loading" : ""].join(' ').trim() }">
							<img class="thumbnail svelte-3jmrq9" alt="${index.escape(example.title)} thumbnail" src="examples/thumbnails/${index.escape(example.slug)}.jpg">

							<span>${index.escape(example.title)}</span>
						</a>
						${ example.slug === active_section ? `<a href="repl/${index.escape(example.slug)}" class="repl-link svelte-3jmrq9">REPL</a>` : `` }
					</div>`)}
			</li>`)}
	</ul>`;
});

/* src\routes\examples\index.svelte generated by Svelte v3.12.0 */

const css$1 = {
	code: ".examples-container.svelte-1q3cg6d{position:relative;height:calc(100vh - var(--nav-h));overflow:hidden;padding:0 0 42px 0;box-sizing:border-box}.viewport.svelte-1q3cg6d{display:grid;width:300%;height:100%;grid-template-columns:33.333% 66.666%;transition:transform .3s;grid-auto-rows:100%}.repl-container.loading.svelte-1q3cg6d{opacity:0.6}.repl-container.svelte-1q3cg6d .tab-content,.repl-container.svelte-1q3cg6d .tab-content.visible{pointer-events:all;opacity:1}.repl-container.svelte-1q3cg6d .tab-content{visibility:hidden}.repl-container.svelte-1q3cg6d .tab-content.visible{visibility:visible}.offset-1.svelte-1q3cg6d{transform:translate(-33.333%, 0)}.offset-2.svelte-1q3cg6d{transform:translate(-66.666%, 0)}@media(min-width: 768px){.examples-container.svelte-1q3cg6d{padding:0 }.viewport.svelte-1q3cg6d{width:100%;height:100%;display:grid;grid-template-columns:var(--sidebar-mid-w) auto;grid-auto-rows:100%;transition:none}.offset-1.svelte-1q3cg6d,.offset-2.svelte-1q3cg6d{transform:none}}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<!-- FIXME sometimes it adds a trailing slash when landing -->\\r\\n<script context=\\\"module\\\">\\r\\n\\texport async function preload() {\\r\\n\\t\\tconst sections = await this.fetch(`examples.json`).then(r => r.json());\\r\\n\\t\\tconst title_by_slug = sections.reduce((acc, {examples}) => {\\r\\n\\t\\t\\texamples.forEach(({slug, title}) => {\\r\\n\\t\\t\\t\\tacc[slug] = title;\\r\\n\\t\\t\\t});\\r\\n\\r\\n\\t\\t\\treturn acc;\\r\\n\\t\\t}, {});\\r\\n\\r\\n\\t\\treturn {sections, title_by_slug};\\r\\n\\t}\\r\\n</script>\\r\\n\\r\\n<script>\\r\\n\\timport { onMount } from 'svelte';\\r\\n\\timport { goto } from '@sapper/app';\\r\\n\\timport Repl from '@sveltejs/svelte-repl';\\r\\n\\r\\n\\timport ScreenToggle from '../../components/ScreenToggle.svelte';\\r\\n\\timport {\\r\\n\\t\\tmapbox_setup, // see site/content/examples/15-context/00-context-api\\r\\n\\t\\trollupUrl,\\r\\n\\t\\tsvelteUrl\\r\\n\\t} from '../../config';\\r\\n\\timport { process_example } from '../../utils/examples';\\r\\n\\timport { getFragment } from '@sveltejs/site-kit/utils/navigation';\\r\\n\\timport TableOfContents from './_TableOfContents.svelte';\\r\\n\\r\\n\\texport let sections;\\r\\n\\texport let title_by_slug;\\r\\n\\r\\n\\tlet active_slug;\\r\\n\\tlet width;\\r\\n\\tlet offset = 1;\\r\\n\\tlet repl;\\r\\n\\tlet isLoading = false;\\r\\n\\tconst cache = {};\\r\\n\\r\\n\\tfunction showExampleCodeOnChange() {\\r\\n\\t\\toffset = 1;\\r\\n\\t}\\r\\n\\r\\n\\t$: title = title_by_slug[active_slug] || '';\\r\\n\\t$: first_slug = sections[0].examples[0].slug;\\r\\n\\t$: mobile = width < 768; // note: same as per media query below\\r\\n\\t$: replOrientation = (mobile || width > 1080) ? 'columns' : 'rows';\\r\\n\\t$: if (repl && active_slug) {\\r\\n\\t\\tif (active_slug in cache) {\\r\\n\\t\\t\\trepl.set({ components: cache[active_slug] });\\r\\n\\t\\t\\tshowExampleCodeOnChange();\\r\\n\\t\\t} else {\\r\\n\\t\\t\\tisLoading = true;\\r\\n\\t\\t\\tfetch(`examples/${active_slug}.json`)\\r\\n\\t\\t\\t\\t.then(async response => {\\r\\n\\t\\t\\t\\t\\tif (response.ok) {\\r\\n\\t\\t\\t\\t\\t\\tconst {files} = await response.json();\\r\\n\\t\\t\\t\\t\\t\\treturn process_example(files);\\r\\n\\t\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\t})\\r\\n\\t\\t\\t\\t.then(components => {\\r\\n\\t\\t\\t\\t\\tcache[active_slug] = components;\\r\\n\\t\\t\\t\\t\\trepl.set({components});\\r\\n\\t\\t\\t\\t\\tshowExampleCodeOnChange();\\r\\n\\t\\t\\t\\t\\tisLoading = false;\\r\\n\\t\\t\\t\\t})\\r\\n\\t\\t\\t\\t.catch(() => {\\r\\n\\t\\t\\t\\t\\tisLoading = false;\\r\\n\\t\\t\\t\\t});\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\tonMount(() => {\\r\\n\\t\\tconst onhashchange = () => {\\r\\n\\t\\t\\tactive_slug = getFragment();\\r\\n\\t\\t};\\r\\n\\t\\twindow.addEventListener('hashchange', onhashchange, false);\\r\\n\\r\\n\\t\\tconst fragment = getFragment();\\r\\n\\t\\tif (fragment) {\\r\\n\\t\\t\\tactive_slug = fragment;\\r\\n\\t\\t} else {\\r\\n\\t\\t\\tactive_slug = first_slug;\\r\\n\\t\\t\\tgoto(`examples#${active_slug}`);\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\treturn () => {\\r\\n\\t\\t\\twindow.removeEventListener('hashchange', onhashchange, false);\\r\\n\\t\\t};\\r\\n\\t});\\r\\n</script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>{title} {title ? '•' : ''} Svelte Examples</title>\\r\\n\\r\\n\\t<meta name=\\\"twitter:title\\\" content=\\\"Svelte examples\\\">\\r\\n\\t<meta name=\\\"twitter:description\\\" content=\\\"Cybernetically enhanced web apps\\\">\\r\\n\\t<meta name=\\\"Description\\\" content=\\\"Interactive example Svelte apps\\\">\\r\\n</svelte:head>\\r\\n\\r\\n<div class='examples-container' bind:clientWidth={width}>\\r\\n\\t<div class=\\\"viewport offset-{offset}\\\">\\r\\n\\t\\t<TableOfContents {sections} active_section={active_slug} {isLoading} />\\r\\n\\t\\t<div class=\\\"repl-container\\\" class:loading={isLoading}>\\r\\n\\t\\t\\t<Repl\\r\\n\\t\\t\\t\\tbind:this={repl}\\r\\n\\t\\t\\t\\tworkersUrl=\\\"workers\\\"\\r\\n\\t\\t\\t\\t{svelteUrl}\\r\\n\\t\\t\\t\\t{rollupUrl}\\r\\n\\t\\t\\t\\torientation={replOrientation}\\r\\n\\t\\t\\t\\tfixed={mobile}\\r\\n\\t\\t\\t\\trelaxed\\r\\n\\t\\t\\t\\tinjectedJS={mapbox_setup}\\r\\n\\t\\t\\t/>\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n\\t{#if mobile}\\r\\n\\t<ScreenToggle bind:offset labels={['index', 'input', 'output']}/>\\r\\n\\t{/if}\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.examples-container {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\theight: calc(100vh - var(--nav-h));\\r\\n\\t\\toverflow: hidden;\\r\\n\\t\\tpadding: 0 0 42px 0;\\r\\n\\t\\tbox-sizing: border-box;\\r\\n\\t}\\r\\n\\r\\n\\t.viewport {\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\twidth: 300%;\\r\\n\\t\\theight: 100%;\\r\\n\\t\\tgrid-template-columns: 33.333% 66.666%;\\r\\n\\t\\ttransition: transform .3s;\\r\\n\\t\\tgrid-auto-rows: 100%;\\r\\n\\t}\\r\\n\\r\\n\\t.repl-container.loading {\\r\\n\\t\\topacity: 0.6;\\r\\n\\t}\\r\\n\\r\\n\\t/* temp fix for #2499 and #2550 while waiting for a fix for https://github.com/sveltejs/svelte-repl/issues/8 */\\r\\n\\r\\n\\t.repl-container :global(.tab-content),\\r\\n\\t.repl-container :global(.tab-content.visible) {\\r\\n\\t\\tpointer-events: all;\\r\\n\\t\\topacity: 1;\\r\\n\\t}\\r\\n\\t.repl-container :global(.tab-content) {\\r\\n\\t\\tvisibility: hidden;\\r\\n\\t}\\r\\n\\t.repl-container :global(.tab-content.visible) {\\r\\n\\t\\tvisibility: visible;\\r\\n\\t}\\r\\n\\r\\n\\t.offset-1 { transform: translate(-33.333%, 0); }\\r\\n\\t.offset-2 { transform: translate(-66.666%, 0); }\\r\\n\\r\\n\\t@media (min-width: 768px) {\\r\\n\\t\\t.examples-container { padding: 0 }\\r\\n\\r\\n\\t\\t.viewport {\\r\\n\\t\\t\\twidth: 100%;\\r\\n\\t\\t\\theight: 100%;\\r\\n\\t\\t\\tdisplay: grid;\\r\\n\\t\\t\\tgrid-template-columns: var(--sidebar-mid-w) auto;\\r\\n\\t\\t\\tgrid-auto-rows: 100%;\\r\\n\\t\\t\\ttransition: none;\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t.offset-1, .offset-2 { transform: none; }\\r\\n\\t}\\r\\n</style>\\r\\n\"],\"names\":[],\"mappings\":\"AA4HC,mBAAmB,eAAC,CAAC,AACpB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,OAAO,CAAC,CAAC,CAClC,QAAQ,CAAE,MAAM,CAChB,OAAO,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CACnB,UAAU,CAAE,UAAU,AACvB,CAAC,AAED,SAAS,eAAC,CAAC,AACV,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,qBAAqB,CAAE,OAAO,CAAC,OAAO,CACtC,UAAU,CAAE,SAAS,CAAC,GAAG,CACzB,cAAc,CAAE,IAAI,AACrB,CAAC,AAED,eAAe,QAAQ,eAAC,CAAC,AACxB,OAAO,CAAE,GAAG,AACb,CAAC,AAID,8BAAe,CAAC,AAAQ,YAAY,AAAC,CACrC,8BAAe,CAAC,AAAQ,oBAAoB,AAAE,CAAC,AAC9C,cAAc,CAAE,GAAG,CACnB,OAAO,CAAE,CAAC,AACX,CAAC,AACD,8BAAe,CAAC,AAAQ,YAAY,AAAE,CAAC,AACtC,UAAU,CAAE,MAAM,AACnB,CAAC,AACD,8BAAe,CAAC,AAAQ,oBAAoB,AAAE,CAAC,AAC9C,UAAU,CAAE,OAAO,AACpB,CAAC,AAED,SAAS,eAAC,CAAC,AAAC,SAAS,CAAE,UAAU,QAAQ,CAAC,CAAC,CAAC,CAAC,AAAE,CAAC,AAChD,SAAS,eAAC,CAAC,AAAC,SAAS,CAAE,UAAU,QAAQ,CAAC,CAAC,CAAC,CAAC,AAAE,CAAC,AAEhD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,mBAAmB,eAAC,CAAC,AAAC,OAAO,CAAE,CAAC,CAAC,CAAC,AAElC,SAAS,eAAC,CAAC,AACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,eAAe,CAAC,CAAC,IAAI,CAChD,cAAc,CAAE,IAAI,CACpB,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,wBAAS,CAAE,SAAS,eAAC,CAAC,AAAC,SAAS,CAAE,IAAI,AAAE,CAAC,AAC1C,CAAC\"}"
};

async function preload() {
	const sections = await this.fetch(`examples.json`).then(r => r.json());
	const title_by_slug = sections.reduce((acc, {examples}) => {
		examples.forEach(({slug, title}) => {
			acc[slug] = title;
		});

		return acc;
	}, {});

	return {sections, title_by_slug};
}

const Index = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	

	let { sections, title_by_slug } = $$props;

	let active_slug;
	let width;
	let offset = 1;
	let repl;
	let isLoading = false;
	const cache = {};

	function showExampleCodeOnChange() {
		offset = 1;
	}

	index.onMount(() => {
		const onhashchange = () => {
			active_slug = index$1.getFragment();
		};
		window.addEventListener('hashchange', onhashchange, false);

		const fragment = index$1.getFragment();
		if (fragment) {
			active_slug = fragment;
		} else {
			active_slug = first_slug;
			app$1.goto(`examples#${active_slug}`);
		}

		return () => {
			window.removeEventListener('hashchange', onhashchange, false);
		};
	});

	if ($$props.sections === void 0 && $$bindings.sections && sections !== void 0) $$bindings.sections(sections);
	if ($$props.title_by_slug === void 0 && $$bindings.title_by_slug && title_by_slug !== void 0) $$bindings.title_by_slug(title_by_slug);

	$$result.css.add(css$1);

	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		let title = title_by_slug[active_slug] || '';
		let first_slug = sections[0].examples[0].slug;
		let mobile = width < 768;
		let replOrientation =  'rows';
		if (repl && active_slug) {
				if (active_slug in cache) {
					repl.set({ components: cache[active_slug] });
					showExampleCodeOnChange();
				} else {
					isLoading = true;
					fetch(`examples/${active_slug}.json`)
						.then(async response => {
							if (response.ok) {
								const {files} = await response.json();
								return examples.process_example(files);
							}
						})
						.then(components => {
							cache[active_slug] = components;
							repl.set({components});
							showExampleCodeOnChange();
							isLoading = false;
						})
						.catch(() => {
							isLoading = false;
						});
				}
			}

		$$rendered = `




		${($$result.head += `<title>${index.escape(title)} ${index.escape(title ? '•' : '')} Svelte Examples</title><meta name="twitter:title" content="Svelte examples"><meta name="twitter:description" content="Cybernetically enhanced web apps"><meta name="Description" content="Interactive example Svelte apps">`, "")}

		<div class="examples-container svelte-1q3cg6d">
			<div class="viewport offset-${index.escape(offset)} svelte-1q3cg6d">
				${index.validate_component(TableOfContents, 'TableOfContents').$$render($$result, {
			sections: sections,
			active_section: active_slug,
			isLoading: isLoading
		}, {}, {})}
				<div class="${[`repl-container svelte-1q3cg6d`, isLoading ? "loading" : ""].join(' ').trim() }">
					${index.validate_component(Repl.Repl, 'Repl').$$render($$result, {
			workersUrl: "workers",
			svelteUrl: config.svelteUrl,
			rollupUrl: config.rollupUrl,
			orientation: replOrientation,
			fixed: mobile,
			relaxed: true,
			injectedJS: config.mapbox_setup,
			this: repl
		}, {
			this: $$value => { repl = $$value; $$settled = false; }
		}, {})}
				</div>
			</div>
			${  `` }
		</div>`;
	} while (!$$settled);

	return $$rendered;
});

exports.default = Index;
exports.preload = preload;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtMTZmYjhlNDEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZXhhbXBsZXMvX1RhYmxlT2ZDb250ZW50cy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2V4YW1wbGVzL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxyXG5cdGV4cG9ydCBsZXQgc2VjdGlvbnMgPSBbXTtcclxuXHRleHBvcnQgbGV0IGFjdGl2ZV9zZWN0aW9uID0gbnVsbDtcclxuXHRleHBvcnQgbGV0IGlzTG9hZGluZyA9IGZhbHNlO1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQuZXhhbXBsZXMtdG9jIHtcclxuXHRcdG92ZXJmbG93LXk6IGF1dG87XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmQpO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kKTtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdHBhZGRpbmc6IDNyZW0gM3JlbSAwIDNyZW07XHJcblx0fVxyXG5cclxuXHQuZXhhbXBsZXMtdG9jIGxpIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEuMjtcclxuXHRcdG1hcmdpbjogMCAwIDQuOHJlbSAwO1xyXG5cdH1cclxuXHJcblx0LnNlY3Rpb24tdGl0bGUge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRwYWRkaW5nOiAwIDAgMC44cmVtIDA7XHJcblx0XHRmb250OiA0MDAgdmFyKC0taDYpIHZhcigtLWZvbnQpO1xyXG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdGxldHRlci1zcGFjaW5nOiAwLjEyZW07XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdH1cclxuXHJcblx0ZGl2IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0cGFkZGluZzogMC4ycmVtIDNyZW07XHJcblx0XHRtYXJnaW46IDAgLTNyZW07XHJcblx0fVxyXG5cclxuXHRkaXYuYWN0aXZlIHtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSkgY2FsYygxMDAlIC0gM3JlbSkgNDclIG5vLXJlcGVhdFxyXG5cdFx0XHR1cmwoL2ljb25zL2Fycm93LXJpZ2h0LnN2Zyk7XHJcblx0XHRiYWNrZ3JvdW5kLXNpemU6IDFlbSAxZW07XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0fVxyXG5cclxuXHRkaXYuYWN0aXZlLmxvYWRpbmcge1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpIGNhbGMoMTAwJSAtIDNyZW0pIDQ3JSBuby1yZXBlYXRcclxuXHRcdFx0dXJsKC9pY29ucy9sb2FkaW5nLnN2Zyk7XHJcblx0XHRiYWNrZ3JvdW5kLXNpemU6IDFlbSAxZW07XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0fVxyXG5cclxuXHRhIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4OiAxIDEgYXV0bztcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGNvbG9yOiB2YXIoLS1zaWRlYmFyLXRleHQpO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcclxuXHRcdGZvbnQtc2l6ZTogMS42cmVtO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdH1cclxuXHJcblx0YTpob3ZlciB7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0fVxyXG5cclxuXHQucmVwbC1saW5rIHtcclxuXHRcdGZsZXg6IDAgMSBhdXRvO1xyXG5cdFx0Zm9udC1zaXplOiAxLjJyZW07XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyLjVyZW07XHJcblx0fVxyXG5cclxuXHQudGh1bWJuYWlsIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdFx0b2JqZWN0LWZpdDogY29udGFpbjtcclxuXHRcdHdpZHRoOiA1cmVtO1xyXG5cdFx0aGVpZ2h0OiA1cmVtO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG5cdFx0Ym94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEzKTtcclxuXHRcdG1hcmdpbjogMC4yZW0gMC41ZW0gMC4yZW0gMDtcclxuXHR9XHJcbjwvc3R5bGU+XHJcblxyXG48dWwgY2xhc3M9XCJleGFtcGxlcy10b2NcIj5cclxuXHR7I2VhY2ggc2VjdGlvbnMgYXMgc2VjdGlvbn1cclxuXHRcdDxsaT5cclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+e3NlY3Rpb24udGl0bGV9PC9zcGFuPlxyXG5cclxuXHRcdFx0eyNlYWNoIHNlY3Rpb24uZXhhbXBsZXMgYXMgZXhhbXBsZX1cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzcz1cInJvd1wiXHJcblx0XHRcdFx0XHRjbGFzczphY3RpdmU9e2V4YW1wbGUuc2x1ZyA9PT0gYWN0aXZlX3NlY3Rpb259XHJcblx0XHRcdFx0XHRjbGFzczpsb2FkaW5nPXtpc0xvYWRpbmd9PlxyXG5cdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0aHJlZj1cImV4YW1wbGVzI3tleGFtcGxlLnNsdWd9XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJyb3dcIlxyXG5cdFx0XHRcdFx0XHRjbGFzczphY3RpdmU9e2V4YW1wbGUuc2x1ZyA9PT0gYWN0aXZlX3NlY3Rpb259XHJcblx0XHRcdFx0XHRcdGNsYXNzOmxvYWRpbmc9e2lzTG9hZGluZ30+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cInRodW1ibmFpbFwiXHJcblx0XHRcdFx0XHRcdFx0YWx0PVwie2V4YW1wbGUudGl0bGV9IHRodW1ibmFpbFwiXHJcblx0XHRcdFx0XHRcdFx0c3JjPVwiZXhhbXBsZXMvdGh1bWJuYWlscy97ZXhhbXBsZS5zbHVnfS5qcGdcIiAvPlxyXG5cclxuXHRcdFx0XHRcdFx0PHNwYW4+e2V4YW1wbGUudGl0bGV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0eyNpZiBleGFtcGxlLnNsdWcgPT09IGFjdGl2ZV9zZWN0aW9ufVxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwicmVwbC97ZXhhbXBsZS5zbHVnfVwiIGNsYXNzPVwicmVwbC1saW5rXCI+UkVQTDwvYT5cclxuXHRcdFx0XHRcdHsvaWZ9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdHsvZWFjaH1cclxuXHRcdDwvbGk+XHJcblx0ey9lYWNofVxyXG48L3VsPlxyXG4iLCI8IS0tIEZJWE1FIHNvbWV0aW1lcyBpdCBhZGRzIGEgdHJhaWxpbmcgc2xhc2ggd2hlbiBsYW5kaW5nIC0tPlxyXG48c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cclxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCgpIHtcclxuXHRcdGNvbnN0IHNlY3Rpb25zID0gYXdhaXQgdGhpcy5mZXRjaChgZXhhbXBsZXMuanNvbmApLnRoZW4ociA9PiByLmpzb24oKSk7XHJcblx0XHRjb25zdCB0aXRsZV9ieV9zbHVnID0gc2VjdGlvbnMucmVkdWNlKChhY2MsIHtleGFtcGxlc30pID0+IHtcclxuXHRcdFx0ZXhhbXBsZXMuZm9yRWFjaCgoe3NsdWcsIHRpdGxlfSkgPT4ge1xyXG5cdFx0XHRcdGFjY1tzbHVnXSA9IHRpdGxlO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiBhY2M7XHJcblx0XHR9LCB7fSk7XHJcblxyXG5cdFx0cmV0dXJuIHtzZWN0aW9ucywgdGl0bGVfYnlfc2x1Z307XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XHJcblx0aW1wb3J0IHsgZ290byB9IGZyb20gJ0BzYXBwZXIvYXBwJztcclxuXHRpbXBvcnQgUmVwbCBmcm9tICdAc3ZlbHRlanMvc3ZlbHRlLXJlcGwnO1xyXG5cclxuXHRpbXBvcnQgU2NyZWVuVG9nZ2xlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2NyZWVuVG9nZ2xlLnN2ZWx0ZSc7XHJcblx0aW1wb3J0IHtcclxuXHRcdG1hcGJveF9zZXR1cCwgLy8gc2VlIHNpdGUvY29udGVudC9leGFtcGxlcy8xNS1jb250ZXh0LzAwLWNvbnRleHQtYXBpXHJcblx0XHRyb2xsdXBVcmwsXHJcblx0XHRzdmVsdGVVcmxcclxuXHR9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcblx0aW1wb3J0IHsgcHJvY2Vzc19leGFtcGxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXhhbXBsZXMnO1xyXG5cdGltcG9ydCB7IGdldEZyYWdtZW50IH0gZnJvbSAnQHN2ZWx0ZWpzL3NpdGUta2l0L3V0aWxzL25hdmlnYXRpb24nO1xyXG5cdGltcG9ydCBUYWJsZU9mQ29udGVudHMgZnJvbSAnLi9fVGFibGVPZkNvbnRlbnRzLnN2ZWx0ZSc7XHJcblxyXG5cdGV4cG9ydCBsZXQgc2VjdGlvbnM7XHJcblx0ZXhwb3J0IGxldCB0aXRsZV9ieV9zbHVnO1xyXG5cclxuXHRsZXQgYWN0aXZlX3NsdWc7XHJcblx0bGV0IHdpZHRoO1xyXG5cdGxldCBvZmZzZXQgPSAxO1xyXG5cdGxldCByZXBsO1xyXG5cdGxldCBpc0xvYWRpbmcgPSBmYWxzZTtcclxuXHRjb25zdCBjYWNoZSA9IHt9O1xyXG5cclxuXHRmdW5jdGlvbiBzaG93RXhhbXBsZUNvZGVPbkNoYW5nZSgpIHtcclxuXHRcdG9mZnNldCA9IDE7XHJcblx0fVxyXG5cclxuXHQkOiB0aXRsZSA9IHRpdGxlX2J5X3NsdWdbYWN0aXZlX3NsdWddIHx8ICcnO1xyXG5cdCQ6IGZpcnN0X3NsdWcgPSBzZWN0aW9uc1swXS5leGFtcGxlc1swXS5zbHVnO1xyXG5cdCQ6IG1vYmlsZSA9IHdpZHRoIDwgNzY4OyAvLyBub3RlOiBzYW1lIGFzIHBlciBtZWRpYSBxdWVyeSBiZWxvd1xyXG5cdCQ6IHJlcGxPcmllbnRhdGlvbiA9IChtb2JpbGUgfHwgd2lkdGggPiAxMDgwKSA/ICdjb2x1bW5zJyA6ICdyb3dzJztcclxuXHQkOiBpZiAocmVwbCAmJiBhY3RpdmVfc2x1Zykge1xyXG5cdFx0aWYgKGFjdGl2ZV9zbHVnIGluIGNhY2hlKSB7XHJcblx0XHRcdHJlcGwuc2V0KHsgY29tcG9uZW50czogY2FjaGVbYWN0aXZlX3NsdWddIH0pO1xyXG5cdFx0XHRzaG93RXhhbXBsZUNvZGVPbkNoYW5nZSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aXNMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0ZmV0Y2goYGV4YW1wbGVzLyR7YWN0aXZlX3NsdWd9Lmpzb25gKVxyXG5cdFx0XHRcdC50aGVuKGFzeW5jIHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXNwb25zZS5vaykge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB7ZmlsZXN9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvY2Vzc19leGFtcGxlKGZpbGVzKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC50aGVuKGNvbXBvbmVudHMgPT4ge1xyXG5cdFx0XHRcdFx0Y2FjaGVbYWN0aXZlX3NsdWddID0gY29tcG9uZW50cztcclxuXHRcdFx0XHRcdHJlcGwuc2V0KHtjb21wb25lbnRzfSk7XHJcblx0XHRcdFx0XHRzaG93RXhhbXBsZUNvZGVPbkNoYW5nZSgpO1xyXG5cdFx0XHRcdFx0aXNMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goKCkgPT4ge1xyXG5cdFx0XHRcdFx0aXNMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvbk1vdW50KCgpID0+IHtcclxuXHRcdGNvbnN0IG9uaGFzaGNoYW5nZSA9ICgpID0+IHtcclxuXHRcdFx0YWN0aXZlX3NsdWcgPSBnZXRGcmFnbWVudCgpO1xyXG5cdFx0fTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgb25oYXNoY2hhbmdlLCBmYWxzZSk7XHJcblxyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSBnZXRGcmFnbWVudCgpO1xyXG5cdFx0aWYgKGZyYWdtZW50KSB7XHJcblx0XHRcdGFjdGl2ZV9zbHVnID0gZnJhZ21lbnQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhY3RpdmVfc2x1ZyA9IGZpcnN0X3NsdWc7XHJcblx0XHRcdGdvdG8oYGV4YW1wbGVzIyR7YWN0aXZlX3NsdWd9YCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBvbmhhc2hjaGFuZ2UsIGZhbHNlKTtcclxuXHRcdH07XHJcblx0fSk7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN2ZWx0ZTpoZWFkPlxyXG5cdDx0aXRsZT57dGl0bGV9IHt0aXRsZSA/ICfigKInIDogJyd9IFN2ZWx0ZSBFeGFtcGxlczwvdGl0bGU+XHJcblxyXG5cdDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIlN2ZWx0ZSBleGFtcGxlc1wiPlxyXG5cdDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkN5YmVybmV0aWNhbGx5IGVuaGFuY2VkIHdlYiBhcHBzXCI+XHJcblx0PG1ldGEgbmFtZT1cIkRlc2NyaXB0aW9uXCIgY29udGVudD1cIkludGVyYWN0aXZlIGV4YW1wbGUgU3ZlbHRlIGFwcHNcIj5cclxuPC9zdmVsdGU6aGVhZD5cclxuXHJcbjxkaXYgY2xhc3M9J2V4YW1wbGVzLWNvbnRhaW5lcicgYmluZDpjbGllbnRXaWR0aD17d2lkdGh9PlxyXG5cdDxkaXYgY2xhc3M9XCJ2aWV3cG9ydCBvZmZzZXQte29mZnNldH1cIj5cclxuXHRcdDxUYWJsZU9mQ29udGVudHMge3NlY3Rpb25zfSBhY3RpdmVfc2VjdGlvbj17YWN0aXZlX3NsdWd9IHtpc0xvYWRpbmd9IC8+XHJcblx0XHQ8ZGl2IGNsYXNzPVwicmVwbC1jb250YWluZXJcIiBjbGFzczpsb2FkaW5nPXtpc0xvYWRpbmd9PlxyXG5cdFx0XHQ8UmVwbFxyXG5cdFx0XHRcdGJpbmQ6dGhpcz17cmVwbH1cclxuXHRcdFx0XHR3b3JrZXJzVXJsPVwid29ya2Vyc1wiXHJcblx0XHRcdFx0e3N2ZWx0ZVVybH1cclxuXHRcdFx0XHR7cm9sbHVwVXJsfVxyXG5cdFx0XHRcdG9yaWVudGF0aW9uPXtyZXBsT3JpZW50YXRpb259XHJcblx0XHRcdFx0Zml4ZWQ9e21vYmlsZX1cclxuXHRcdFx0XHRyZWxheGVkXHJcblx0XHRcdFx0aW5qZWN0ZWRKUz17bWFwYm94X3NldHVwfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcblx0eyNpZiBtb2JpbGV9XHJcblx0PFNjcmVlblRvZ2dsZSBiaW5kOm9mZnNldCBsYWJlbHM9e1snaW5kZXgnLCAnaW5wdXQnLCAnb3V0cHV0J119Lz5cclxuXHR7L2lmfVxyXG48L2Rpdj5cclxuXHJcbjxzdHlsZT5cclxuXHQuZXhhbXBsZXMtY29udGFpbmVyIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLW5hdi1oKSk7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0cGFkZGluZzogMCAwIDQycHggMDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG5cclxuXHQudmlld3BvcnQge1xyXG5cdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdHdpZHRoOiAzMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMy4zMzMlIDY2LjY2NiU7XHJcblx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzO1xyXG5cdFx0Z3JpZC1hdXRvLXJvd3M6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQucmVwbC1jb250YWluZXIubG9hZGluZyB7XHJcblx0XHRvcGFjaXR5OiAwLjY7XHJcblx0fVxyXG5cclxuXHQvKiB0ZW1wIGZpeCBmb3IgIzI0OTkgYW5kICMyNTUwIHdoaWxlIHdhaXRpbmcgZm9yIGEgZml4IGZvciBodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc3ZlbHRlLXJlcGwvaXNzdWVzLzggKi9cclxuXHJcblx0LnJlcGwtY29udGFpbmVyIDpnbG9iYWwoLnRhYi1jb250ZW50KSxcclxuXHQucmVwbC1jb250YWluZXIgOmdsb2JhbCgudGFiLWNvbnRlbnQudmlzaWJsZSkge1xyXG5cdFx0cG9pbnRlci1ldmVudHM6IGFsbDtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cdC5yZXBsLWNvbnRhaW5lciA6Z2xvYmFsKC50YWItY29udGVudCkge1xyXG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdH1cclxuXHQucmVwbC1jb250YWluZXIgOmdsb2JhbCgudGFiLWNvbnRlbnQudmlzaWJsZSkge1xyXG5cdFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcclxuXHR9XHJcblxyXG5cdC5vZmZzZXQtMSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMy4zMzMlLCAwKTsgfVxyXG5cdC5vZmZzZXQtMiB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC02Ni42NjYlLCAwKTsgfVxyXG5cclxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHRcdC5leGFtcGxlcy1jb250YWluZXIgeyBwYWRkaW5nOiAwIH1cclxuXHJcblx0XHQudmlld3BvcnQge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXNpZGViYXItbWlkLXcpIGF1dG87XHJcblx0XHRcdGdyaWQtYXV0by1yb3dzOiAxMDAlO1xyXG5cdFx0XHR0cmFuc2l0aW9uOiBub25lO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5vZmZzZXQtMSwgLm9mZnNldC0yIHsgdHJhbnNmb3JtOiBub25lOyB9XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOlsib25Nb3VudCIsImdldEZyYWdtZW50IiwiZ290byIsInByb2Nlc3NfZXhhbXBsZSIsInN2ZWx0ZVVybCIsInJvbGx1cFVybCIsIm1hcGJveF9zZXR1cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNRLE1BQUksUUFBUSxHQUFHLEVBQUUsRUFDYixjQUFjLEdBQUcsSUFBSSxFQUNyQixTQUFTLEdBQUcsaUJBQUssQ0FBQzs7Ozs7Ozs7O2VBb0Z0QixRQUFRLEdBQUksT0FBTzs2REFFSyxhQUFhOztpQkFFbkMsZ0JBQWdCLEdBQUksT0FBTywwQ0FHbEIsK0JBQStCLGtCQUM5QixTQUFTO3VDQUVQLFlBQVksbUNBRWQsK0JBQStCLGtCQUM5QixTQUFTO2dFQUdqQixhQUFhLHNEQUNPLFlBQVk7OzRCQUVoQyxhQUFhOztTQUVoQiwrQkFBK0IsaUNBQ3BCLFlBQVk7Ozs7Ozs7Ozs7Ozs7QUMzR3pCLGVBQWUsT0FBTyxHQUFHO0NBQy9CLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztDQUN2RSxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUs7RUFDMUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLO0dBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7R0FDbEIsQ0FBQyxDQUFDOztFQUVILE9BQU8sR0FBRyxDQUFDO0VBQ1gsRUFB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
