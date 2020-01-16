import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as onMount, G as globals, w as mount_component, x as transition_in, y as transition_out, z as destroy_component, V as binding_callbacks, a4 as bind, e as element, l as space, c as claim_element, a as children, b as detach_dev, p as claim_space, f as attr_dev, Q as toggle_class, h as add_location, W as add_render_callback, j as insert_dev, k as append_dev, X as add_resize_listener, A as group_outros, B as check_outros, a5 as add_flush_callback } from './index.b2dd6920.js';
import { R as Repl } from './Repl.8a307c73.js';
import { p as process_example } from './examples.83e383fd.js';
import { I as InputOutputToggle } from './InputOutputToggle.15f43494.js';

/* src\components\Repl\ReplWidget.svelte generated by Svelte v3.12.0 */
const { Object: Object_1 } = globals;

const file = "src\\components\\Repl\\ReplWidget.svelte";

// (116:2) {#if true}
function create_if_block_1(ctx) {
	var current;

	let repl_1_props = {
		workersUrl: "workers",
		fixed: ctx.mobile,
		svelteUrl: ctx.svelteUrl,
		rollupUrl: ctx.rollupUrl,
		embedded: true,
		relaxed: true
	};
	var repl_1 = new Repl({ props: repl_1_props, $$inline: true });

	ctx.repl_1_binding(repl_1);

	const block = {
		c: function create() {
			repl_1.$$.fragment.c();
		},

		l: function claim(nodes) {
			repl_1.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(repl_1, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var repl_1_changes = {};
			if (changed.mobile) repl_1_changes.fixed = ctx.mobile;
			if (changed.svelteUrl) repl_1_changes.svelteUrl = ctx.svelteUrl;
			repl_1.$set(repl_1_changes);
		},

		i: function intro(local) {
			if (current) return;
			transition_in(repl_1.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(repl_1.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			ctx.repl_1_binding(null);

			destroy_component(repl_1, detaching);
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_1.name, type: "if", source: "(116:2) {#if true}", ctx });
	return block;
}

// (129:1) {#if mobile}
function create_if_block(ctx) {
	var updating_checked, current;

	function inputoutputtoggle_checked_binding(value) {
		ctx.inputoutputtoggle_checked_binding.call(null, value);
		updating_checked = true;
		add_flush_callback(() => updating_checked = false);
	}

	let inputoutputtoggle_props = {};
	if (ctx.checked !== void 0) {
		inputoutputtoggle_props.checked = ctx.checked;
	}
	var inputoutputtoggle = new InputOutputToggle({
		props: inputoutputtoggle_props,
		$$inline: true
	});

	binding_callbacks.push(() => bind(inputoutputtoggle, 'checked', inputoutputtoggle_checked_binding));

	const block = {
		c: function create() {
			inputoutputtoggle.$$.fragment.c();
		},

		l: function claim(nodes) {
			inputoutputtoggle.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(inputoutputtoggle, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var inputoutputtoggle_changes = {};
			if (!updating_checked && changed.checked) {
				inputoutputtoggle_changes.checked = ctx.checked;
			}
			inputoutputtoggle.$set(inputoutputtoggle_changes);
		},

		i: function intro(local) {
			if (current) return;
			transition_in(inputoutputtoggle.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(inputoutputtoggle.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			destroy_component(inputoutputtoggle, detaching);
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block.name, type: "if", source: "(129:1) {#if mobile}", ctx });
	return block;
}

function create_fragment(ctx) {
	var div1, div0, t, div1_resize_listener, current;

	var if_block0 =  create_if_block_1(ctx);

	var if_block1 = (ctx.mobile) && create_if_block(ctx);

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			if (if_block0) if_block0.c();
			t = space();
			if (if_block1) if_block1.c();
			this.h();
		},

		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			if (if_block0) if_block0.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			t = claim_space(div1_nodes);
			if (if_block1) if_block1.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(div0, "class", "viewport svelte-1c57uyk");
			toggle_class(div0, "offset", ctx.checked);
			add_location(div0, file, 114, 1, 2440);
			add_render_callback(() => ctx.div1_resize_handler.call(div1));
			attr_dev(div1, "class", "repl-outer svelte-1c57uyk");
			toggle_class(div1, "mobile", ctx.mobile);
			add_location(div1, file, 113, 0, 2376);
		},

		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			if (if_block0) if_block0.m(div0, null);
			append_dev(div1, t);
			if (if_block1) if_block1.m(div1, null);
			div1_resize_listener = add_resize_listener(div1, ctx.div1_resize_handler.bind(div1));
			current = true;
		},

		p: function update(changed, ctx) {
			if_block0.p(changed, ctx);

			if (changed.checked) {
				toggle_class(div0, "offset", ctx.checked);
			}

			if (ctx.mobile) {
				if (if_block1) {
					if_block1.p(changed, ctx);
					transition_in(if_block1, 1);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div1, null);
				}
			} else if (if_block1) {
				group_outros();
				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});
				check_outros();
			}

			if (changed.mobile) {
				toggle_class(div1, "mobile", ctx.mobile);
			}
		},

		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			current = true;
		},

		o: function outro(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(div1);
			}

			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			div1_resize_listener.cancel();
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function instance($$self, $$props, $$invalidate) {
	

	let { version = '3', gist = null, example = null, embedded = false } = $$props;

	let repl;
	let name = 'loading...';
	let width =  window.innerWidth - 32
		;

	let checked = false;

	onMount(() => {
		if (version !== 'local') {
			fetch(`https://unpkg.com/svelte@${version}/package.json`)
				.then(r => r.json())
				.then(pkg => {
					$$invalidate('version', version = pkg.version);
				});
		}

		if (gist) {
			fetch(`repl/${gist}.json`).then(r => r.json()).then(data => {
				const { description, files } = data;

				$$invalidate('name', name = description);

				const components = Object.keys(files)
					.map(file => {
						const dot = file.lastIndexOf('.');
						if (!~dot) return;

						const source = files[file].content;

						return {
							name: file.slice(0, dot),
							type: file.slice(dot + 1),
							source
						};
					})
					.filter(x => x.type === 'svelte' || x.type === 'js')
					.sort((a, b) => {
						if (a.name === 'App' && a.type === 'svelte') return -1;
						if (b.name === 'App' && b.type === 'svelte') return 1;

						if (a.type !== b.type) return a.type === 'svelte' ? -1 : 1;

						return a.name < b.name ? -1 : 1;
					});

				repl.set({ components });
			});
		} else if (example) {
			fetch(`examples/${example}.json`).then(async response => {
				if (response.ok) {
					const data = await response.json();

					repl.set({
						components: process_example(data.files)
					});
				}
			});
		}
	});

	const rollupUrl = `https://unpkg.com/rollup@1/dist/rollup.browser.js`;

	const writable_props = ['version', 'gist', 'example', 'embedded'];
	Object_1.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<ReplWidget> was created with unknown prop '${key}'`);
	});

	function repl_1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			$$invalidate('repl', repl = $$value);
		});
	}

	function inputoutputtoggle_checked_binding(value) {
		checked = value;
		$$invalidate('checked', checked);
	}

	function div1_resize_handler() {
		width = this.clientWidth;
		$$invalidate('width', width);
	}

	$$self.$set = $$props => {
		if ('version' in $$props) $$invalidate('version', version = $$props.version);
		if ('gist' in $$props) $$invalidate('gist', gist = $$props.gist);
		if ('example' in $$props) $$invalidate('example', example = $$props.example);
		if ('embedded' in $$props) $$invalidate('embedded', embedded = $$props.embedded);
	};

	$$self.$capture_state = () => {
		return { version, gist, example, embedded, repl, name, width, checked, svelteUrl, mobile };
	};

	$$self.$inject_state = $$props => {
		if ('version' in $$props) $$invalidate('version', version = $$props.version);
		if ('gist' in $$props) $$invalidate('gist', gist = $$props.gist);
		if ('example' in $$props) $$invalidate('example', example = $$props.example);
		if ('embedded' in $$props) $$invalidate('embedded', embedded = $$props.embedded);
		if ('repl' in $$props) $$invalidate('repl', repl = $$props.repl);
		if ('name' in $$props) $$invalidate('name', name = $$props.name);
		if ('width' in $$props) $$invalidate('width', width = $$props.width);
		if ('checked' in $$props) $$invalidate('checked', checked = $$props.checked);
		if ('svelteUrl' in $$props) $$invalidate('svelteUrl', svelteUrl = $$props.svelteUrl);
		if ('mobile' in $$props) $$invalidate('mobile', mobile = $$props.mobile);
	};

	let svelteUrl, mobile;

	$$self.$$.update = ($$dirty = { embedded: 1, name: 1, version: 1, width: 1 }) => {
		if ($$dirty.embedded || $$dirty.name) { if (embedded) document.title = `${name} • Svelte REPL`; }
		if ($$dirty.version) { $$invalidate('svelteUrl', svelteUrl =  version === 'local' ?
				`${location.origin}/repl/local` :
				`https://unpkg.com/svelte@${version}`); }
		if ($$dirty.width) { $$invalidate('mobile', mobile = width < 560); }
	};

	return {
		version,
		gist,
		example,
		embedded,
		repl,
		width,
		checked,
		rollupUrl,
		svelteUrl,
		mobile,
		repl_1_binding,
		inputoutputtoggle_checked_binding,
		div1_resize_handler
	};
}

class ReplWidget extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["version", "gist", "example", "embedded"]);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "ReplWidget", options, id: create_fragment.name });
	}

	get version() {
		throw new Error("<ReplWidget>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set version(value) {
		throw new Error("<ReplWidget>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get gist() {
		throw new Error("<ReplWidget>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set gist(value) {
		throw new Error("<ReplWidget>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get example() {
		throw new Error("<ReplWidget>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set example(value) {
		throw new Error("<ReplWidget>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get embedded() {
		throw new Error("<ReplWidget>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set embedded(value) {
		throw new Error("<ReplWidget>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { ReplWidget as R };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwbFdpZGdldC4yMWYyOGQxZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUmVwbC9SZXBsV2lkZ2V0LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgUmVwbCBmcm9tICdAc3ZlbHRlanMvc3ZlbHRlLXJlcGwnO1xuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcblxuXHRpbXBvcnQgeyBwcm9jZXNzX2V4YW1wbGUgfSBmcm9tICcuLi8uLi91dGlscy9leGFtcGxlcyc7XG5cdGltcG9ydCBJbnB1dE91dHB1dFRvZ2dsZSBmcm9tICcuL0lucHV0T3V0cHV0VG9nZ2xlLnN2ZWx0ZSc7XG5cblx0ZXhwb3J0IGxldCB2ZXJzaW9uID0gJzMnO1xuXHRleHBvcnQgbGV0IGdpc3QgPSBudWxsO1xuXHRleHBvcnQgbGV0IGV4YW1wbGUgPSBudWxsO1xuXHRleHBvcnQgbGV0IGVtYmVkZGVkID0gZmFsc2U7XG5cblx0bGV0IHJlcGw7XG5cdGxldCBuYW1lID0gJ2xvYWRpbmcuLi4nO1xuXHRsZXQgd2lkdGggPSBwcm9jZXNzLmJyb3dzZXJcblx0XHQ/IHdpbmRvdy5pbm5lcldpZHRoIC0gMzJcblx0XHQ6IDEwMDA7XG5cblx0bGV0IGNoZWNrZWQgPSBmYWxzZTtcblxuXHRvbk1vdW50KCgpID0+IHtcblx0XHRpZiAodmVyc2lvbiAhPT0gJ2xvY2FsJykge1xuXHRcdFx0ZmV0Y2goYGh0dHBzOi8vdW5wa2cuY29tL3N2ZWx0ZUAke3ZlcnNpb259L3BhY2thZ2UuanNvbmApXG5cdFx0XHRcdC50aGVuKHIgPT4gci5qc29uKCkpXG5cdFx0XHRcdC50aGVuKHBrZyA9PiB7XG5cdFx0XHRcdFx0dmVyc2lvbiA9IHBrZy52ZXJzaW9uO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoZ2lzdCkge1xuXHRcdFx0ZmV0Y2goYHJlcGwvJHtnaXN0fS5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHRjb25zdCB7IGRlc2NyaXB0aW9uLCBmaWxlcyB9ID0gZGF0YTtcblxuXHRcdFx0XHRuYW1lID0gZGVzY3JpcHRpb247XG5cblx0XHRcdFx0Y29uc3QgY29tcG9uZW50cyA9IE9iamVjdC5rZXlzKGZpbGVzKVxuXHRcdFx0XHRcdC5tYXAoZmlsZSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBkb3QgPSBmaWxlLmxhc3RJbmRleE9mKCcuJyk7XG5cdFx0XHRcdFx0XHRpZiAoIX5kb3QpIHJldHVybjtcblxuXHRcdFx0XHRcdFx0Y29uc3Qgc291cmNlID0gZmlsZXNbZmlsZV0uY29udGVudDtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0bmFtZTogZmlsZS5zbGljZSgwLCBkb3QpLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiBmaWxlLnNsaWNlKGRvdCArIDEpLFxuXHRcdFx0XHRcdFx0XHRzb3VyY2Vcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZmlsdGVyKHggPT4geC50eXBlID09PSAnc3ZlbHRlJyB8fCB4LnR5cGUgPT09ICdqcycpXG5cdFx0XHRcdFx0LnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdFx0XHRcdGlmIChhLm5hbWUgPT09ICdBcHAnICYmIGEudHlwZSA9PT0gJ3N2ZWx0ZScpIHJldHVybiAtMTtcblx0XHRcdFx0XHRcdGlmIChiLm5hbWUgPT09ICdBcHAnICYmIGIudHlwZSA9PT0gJ3N2ZWx0ZScpIHJldHVybiAxO1xuXG5cdFx0XHRcdFx0XHRpZiAoYS50eXBlICE9PSBiLnR5cGUpIHJldHVybiBhLnR5cGUgPT09ICdzdmVsdGUnID8gLTEgOiAxO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gYS5uYW1lIDwgYi5uYW1lID8gLTEgOiAxO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJlcGwuc2V0KHsgY29tcG9uZW50cyB9KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAoZXhhbXBsZSkge1xuXHRcdFx0ZmV0Y2goYGV4YW1wbGVzLyR7ZXhhbXBsZX0uanNvbmApLnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG5cdFx0XHRcdFx0cmVwbC5zZXQoe1xuXHRcdFx0XHRcdFx0Y29tcG9uZW50czogcHJvY2Vzc19leGFtcGxlKGRhdGEuZmlsZXMpXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG5cblx0JDogaWYgKGVtYmVkZGVkKSBkb2N1bWVudC50aXRsZSA9IGAke25hbWV9IOKAoiBTdmVsdGUgUkVQTGA7XG5cblx0JDogc3ZlbHRlVXJsID0gcHJvY2Vzcy5icm93c2VyICYmIHZlcnNpb24gPT09ICdsb2NhbCcgP1xuXHRcdGAke2xvY2F0aW9uLm9yaWdpbn0vcmVwbC9sb2NhbGAgOlxuXHRcdGBodHRwczovL3VucGtnLmNvbS9zdmVsdGVAJHt2ZXJzaW9ufWA7XG5cblx0Y29uc3Qgcm9sbHVwVXJsID0gYGh0dHBzOi8vdW5wa2cuY29tL3JvbGx1cEAxL2Rpc3Qvcm9sbHVwLmJyb3dzZXIuanNgO1xuXG5cdCQ6IG1vYmlsZSA9IHdpZHRoIDwgNTYwO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0LnJlcGwtb3V0ZXIge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjayk7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdC0tcGFuZS1jb250cm9scy1oOiA0LjJyZW07XG5cdH1cblxuXHQudmlld3BvcnQge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0fVxuXG5cdC5tb2JpbGUgLnZpZXdwb3J0IHtcblx0XHR3aWR0aDogMjAwJTtcblx0XHRoZWlnaHQ6IGNhbGMoMTAwJSAtIDQycHgpO1xuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuXHR9XG5cblx0Lm1vYmlsZSAub2Zmc2V0IHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcblx0fVxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cInJlcGwtb3V0ZXJcIiBiaW5kOmNsaWVudFdpZHRoPXt3aWR0aH0gY2xhc3M6bW9iaWxlPlxuXHQ8ZGl2IGNsYXNzPVwidmlld3BvcnRcIiBjbGFzczpvZmZzZXQ9e2NoZWNrZWR9PlxuXHRcdHsjaWYgcHJvY2Vzcy5icm93c2VyfVxuXHRcdFx0PFJlcGxcblx0XHRcdFx0YmluZDp0aGlzPXtyZXBsfVxuXHRcdFx0XHR3b3JrZXJzVXJsPVwid29ya2Vyc1wiXG5cdFx0XHRcdGZpeGVkPXttb2JpbGV9XG5cdFx0XHRcdHtzdmVsdGVVcmx9XG5cdFx0XHRcdHtyb2xsdXBVcmx9XG5cdFx0XHRcdGVtYmVkZGVkXG5cdFx0XHRcdHJlbGF4ZWRcblx0XHRcdC8+XG5cdFx0ey9pZn1cblx0PC9kaXY+XG5cblx0eyNpZiBtb2JpbGV9XG5cdFx0PElucHV0T3V0cHV0VG9nZ2xlIGJpbmQ6Y2hlY2tlZC8+XG5cdHsvaWZ9XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O2FBdUhXLE1BQU07aUJBQ1osU0FBUztpQkFDVCxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBRkgsTUFBTTt5REFDWixTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBU1ksT0FBTzt3Q0FBUCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0Q0FBUCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBRDNCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQWR5QixP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