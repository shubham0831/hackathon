import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as create_slot, a as assign, c as clean, e as exclude_internal_props, b as clsx, f as element, g as claim_element, h as children, j as detach_dev, m as set_attributes, l as add_location, n as insert_dev, w as get_slot_context, x as get_slot_changes, u as get_spread_update, r as transition_in, t as transition_out } from './client.8d637038.js';

/* node_modules/sveltestrap/src/CardText.svelte generated by Svelte v3.18.1 */
const file = "node_modules/sveltestrap/src/CardText.svelte";

function create_fragment(ctx) {
	let p;
	let current;
	const default_slot_template = /*$$slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);
	let p_levels = [/*props*/ ctx[1], { class: /*classes*/ ctx[0] }];
	let p_data = {};

	for (let i = 0; i < p_levels.length; i += 1) {
		p_data = assign(p_data, p_levels[i]);
	}

	const block = {
		c: function create() {
			p = element("p");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			if (default_slot) default_slot.l(p_nodes);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(p, p_data);
			add_location(p, file, 12, 0, 217);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);

			if (default_slot) {
				default_slot.m(p, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot && default_slot.p && dirty & /*$$scope*/ 16) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[4], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[4], dirty, null));
			}

			set_attributes(p, get_spread_update(p_levels, [
				dirty & /*props*/ 2 && /*props*/ ctx[1],
				dirty & /*classes*/ 1 && { class: /*classes*/ ctx[0] }
			]));
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { class: className = "" } = $$props;
	const props = clean($$props);
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$new_props => {
		$$invalidate(3, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
		if ("$$scope" in $$new_props) $$invalidate(4, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => {
		return { className, classes };
	};

	$$self.$inject_state = $$new_props => {
		$$invalidate(3, $$props = assign(assign({}, $$props), $$new_props));
		if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
		if ("classes" in $$props) $$invalidate(0, classes = $$new_props.classes);
	};

	let classes;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*className*/ 4) {
			 $$invalidate(0, classes = clsx(className, "card-text"));
		}
	};

	$$props = exclude_internal_props($$props);
	return [classes, props, className, $$props, $$scope, $$slots];
}

class CardText extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { class: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CardText",
			options,
			id: create_fragment.name
		});
	}

	get class() {
		throw new Error("<CardText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<CardText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { CardText as C };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZFRleHQuMzg4OWIzNWQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGVzdHJhcC9zcmMvQ2FyZFRleHQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuICBpbXBvcnQgeyBjbGVhbiB9IGZyb20gJy4vdXRpbHMnO1xuXG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG5cbiAgY29uc3QgcHJvcHMgPSBjbGVhbigkJHByb3BzKTtcblxuICAkOiBjbGFzc2VzID0gY2xzeChjbGFzc05hbWUsICdjYXJkLXRleHQnKTtcbjwvc2NyaXB0PlxuXG48cCB7Li4ucHJvcHN9IGNsYXNzPXtjbGFzc2VzfT5cbiAgPHNsb3QgLz5cbjwvcD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztjQUlNLFNBQVMsR0FBRyxFQUFFO09BR1osS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFFeEIsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
