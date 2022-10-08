import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, f as element, y as text, J as space, F as create_component, g as claim_element, h as children, z as claim_text, j as detach_dev, K as claim_space, G as claim_component, k as attr_dev, l as add_location, n as insert_dev, o as append_dev, H as mount_component, r as transition_in, t as transition_out, I as destroy_component, B as noop } from './client.4a00b3e5.js';
import { B as Breadcrumb, a as BreadcrumbItem } from './BreadcrumbItem.85bb33ff.js';
import { C as Card, a as CardBody } from './CardBody.75009255.js';
import { C as CardHeader } from './CardHeader.4c41373f.js';
import { R as Row } from './Row.e7403b0e.js';
import { C as CardFooter } from './CardFooter.02267323.js';
import { A as AreaChart } from './AreaChart.372591d1.js';
import { B as BarChart, P as PieChart } from './PieChart.14434031.js';

/* src/routes/charts.svelte generated by Svelte v3.18.1 */
const file = "src/routes/charts.svelte";

// (22:2) <BreadcrumbItem>
function create_default_slot_17(ctx) {
	let a;
	let t;

	const block = {
		c: function create() {
			a = element("a");
			t = text("Dashboard");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, "Dashboard");
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "href", ".");
			add_location(a, file, 22, 4, 887);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_17.name,
		type: "slot",
		source: "(22:2) <BreadcrumbItem>",
		ctx
	});

	return block;
}

// (25:2) <BreadcrumbItem active>
function create_default_slot_16(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Charts");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Charts");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_16.name,
		type: "slot",
		source: "(25:2) <BreadcrumbItem active>",
		ctx
	});

	return block;
}

// (21:0) <Breadcrumb class="mb-4">
function create_default_slot_15(ctx) {
	let t;
	let current;

	const breadcrumbitem0 = new BreadcrumbItem({
			props: {
				$$slots: { default: [create_default_slot_17] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const breadcrumbitem1 = new BreadcrumbItem({
			props: {
				active: true,
				$$slots: { default: [create_default_slot_16] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(breadcrumbitem0.$$.fragment);
			t = space();
			create_component(breadcrumbitem1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(breadcrumbitem0.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(breadcrumbitem1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(breadcrumbitem0, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(breadcrumbitem1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const breadcrumbitem0_changes = {};

			if (dirty & /*$$scope*/ 16) {
				breadcrumbitem0_changes.$$scope = { dirty, ctx };
			}

			breadcrumbitem0.$set(breadcrumbitem0_changes);
			const breadcrumbitem1_changes = {};

			if (dirty & /*$$scope*/ 16) {
				breadcrumbitem1_changes.$$scope = { dirty, ctx };
			}

			breadcrumbitem1.$set(breadcrumbitem1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(breadcrumbitem0.$$.fragment, local);
			transition_in(breadcrumbitem1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(breadcrumbitem0.$$.fragment, local);
			transition_out(breadcrumbitem1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(breadcrumbitem0, detaching);
			if (detaching) detach_dev(t);
			destroy_component(breadcrumbitem1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_15.name,
		type: "slot",
		source: "(21:0) <Breadcrumb class=\\\"mb-4\\\">",
		ctx
	});

	return block;
}

// (29:2) <CardBody>
function create_default_slot_14(ctx) {
	let t0;
	let a;
	let t1;
	let t2;

	const block = {
		c: function create() {
			t0 = text("Chart.js is a third party plugin that is used to generate the charts in this\n    template. The charts below have been customized - for further customization\n    options, please visit the official\n    ");
			a = element("a");
			t1 = text("Chart.js documentation");
			t2 = text("\n    .");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "Chart.js is a third party plugin that is used to generate the charts in this\n    template. The charts below have been customized - for further customization\n    options, please visit the official\n    ");
			a = claim_element(nodes, "A", { target: true, href: true });
			var a_nodes = children(a);
			t1 = claim_text(a_nodes, "Chart.js documentation");
			a_nodes.forEach(detach_dev);
			t2 = claim_text(nodes, "\n    .");
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "target", "_blank");
			attr_dev(a, "href", "https://www.chartjs.org/docs/latest/");
			add_location(a, file, 32, 4, 1234);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, a, anchor);
			append_dev(a, t1);
			insert_dev(target, t2, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(a);
			if (detaching) detach_dev(t2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_14.name,
		type: "slot",
		source: "(29:2) <CardBody>",
		ctx
	});

	return block;
}

// (28:0) <Card class="mb-4">
function create_default_slot_13(ctx) {
	let current;

	const cardbody = new CardBody({
			props: {
				$$slots: { default: [create_default_slot_14] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(cardbody.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(cardbody.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(cardbody, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const cardbody_changes = {};

			if (dirty & /*$$scope*/ 16) {
				cardbody_changes.$$scope = { dirty, ctx };
			}

			cardbody.$set(cardbody_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(cardbody.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(cardbody.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(cardbody, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_13.name,
		type: "slot",
		source: "(28:0) <Card class=\\\"mb-4\\\">",
		ctx
	});

	return block;
}

// (41:2) <CardHeader>
function create_default_slot_12(ctx) {
	let i;
	let t0;
	let t1;

	const block = {
		c: function create() {
			i = element("i");
			t0 = space();
			t1 = text(/*areaCardTitle*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			i = claim_element(nodes, "I", { class: true });
			children(i).forEach(detach_dev);
			t0 = claim_space(nodes);
			t1 = claim_text(nodes, /*areaCardTitle*/ ctx[1]);
			this.h();
		},
		h: function hydrate() {
			attr_dev(i, "class", "fas fa-chart-area");
			add_location(i, file, 41, 4, 1404);
		},
		m: function mount(target, anchor) {
			insert_dev(target, i, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(i);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_12.name,
		type: "slot",
		source: "(41:2) <CardHeader>",
		ctx
	});

	return block;
}

// (45:2) <CardBody>
function create_default_slot_11(ctx) {
	let current;
	const areachart = new AreaChart({ $$inline: true });

	const block = {
		c: function create() {
			create_component(areachart.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(areachart.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(areachart, target, anchor);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(areachart.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(areachart.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(areachart, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_11.name,
		type: "slot",
		source: "(45:2) <CardBody>",
		ctx
	});

	return block;
}

// (48:2) <CardFooter class="small text-muted">
function create_default_slot_10(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text(/*cardFooterText*/ ctx[0]);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, /*cardFooterText*/ ctx[0]);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_10.name,
		type: "slot",
		source: "(48:2) <CardFooter class=\\\"small text-muted\\\">",
		ctx
	});

	return block;
}

// (40:0) <Card class="mb-4">
function create_default_slot_9(ctx) {
	let t0;
	let t1;
	let current;

	const cardheader = new CardHeader({
			props: {
				$$slots: { default: [create_default_slot_12] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const cardbody = new CardBody({
			props: {
				$$slots: { default: [create_default_slot_11] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const cardfooter = new CardFooter({
			props: {
				class: "small text-muted",
				$$slots: { default: [create_default_slot_10] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(cardheader.$$.fragment);
			t0 = space();
			create_component(cardbody.$$.fragment);
			t1 = space();
			create_component(cardfooter.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(cardheader.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(cardbody.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(cardfooter.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(cardheader, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(cardbody, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(cardfooter, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const cardheader_changes = {};

			if (dirty & /*$$scope*/ 16) {
				cardheader_changes.$$scope = { dirty, ctx };
			}

			cardheader.$set(cardheader_changes);
			const cardbody_changes = {};

			if (dirty & /*$$scope*/ 16) {
				cardbody_changes.$$scope = { dirty, ctx };
			}

			cardbody.$set(cardbody_changes);
			const cardfooter_changes = {};

			if (dirty & /*$$scope*/ 16) {
				cardfooter_changes.$$scope = { dirty, ctx };
			}

			cardfooter.$set(cardfooter_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(cardheader.$$.fragment, local);
			transition_in(cardbody.$$.fragment, local);
			transition_in(cardfooter.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(cardheader.$$.fragment, local);
			transition_out(cardbody.$$.fragment, local);
			transition_out(cardfooter.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(cardheader, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(cardbody, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(cardfooter, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_9.name,
		type: "slot",
		source: "(40:0) <Card class=\\\"mb-4\\\">",
		ctx
	});

	return block;
}

// (54:6) <CardHeader>
function create_default_slot_8(ctx) {
	let i;
	let t0;
	let t1;

	const block = {
		c: function create() {
			i = element("i");
			t0 = space();
			t1 = text(/*barCardTitle*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			i = claim_element(nodes, "I", { class: true });
			children(i).forEach(detach_dev);
			t0 = claim_space(nodes);
			t1 = claim_text(nodes, /*barCardTitle*/ ctx[2]);
			this.h();
		},
		h: function hydrate() {
			attr_dev(i, "class", "fas fa-chart-bar");
			add_location(i, file, 54, 8, 1677);
		},
		m: function mount(target, anchor) {
			insert_dev(target, i, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(i);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8.name,
		type: "slot",
		source: "(54:6) <CardHeader>",
		ctx
	});

	return block;
}

// (58:6) <CardBody>
function create_default_slot_7(ctx) {
	let current;
	const barchart = new BarChart({ $$inline: true });

	const block = {
		c: function create() {
			create_component(barchart.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(barchart.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(barchart, target, anchor);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(barchart.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(barchart.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(barchart, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7.name,
		type: "slot",
		source: "(58:6) <CardBody>",
		ctx
	});

	return block;
}

// (61:6) <CardFooter class="small text-muted">
function create_default_slot_6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text(/*cardFooterText*/ ctx[0]);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, /*cardFooterText*/ ctx[0]);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6.name,
		type: "slot",
		source: "(61:6) <CardFooter class=\\\"small text-muted\\\">",
		ctx
	});

	return block;
}

// (53:4) <Card class="mb-4">
function create_default_slot_5(ctx) {
	let t0;
	let t1;
	let current;

	const cardheader = new CardHeader({
			props: {
				$$slots: { default: [create_default_slot_8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const cardbody = new CardBody({
			props: {
				$$slots: { default: [create_default_slot_7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const cardfooter = new CardFooter({
			props: {
				class: "small text-muted",
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(cardheader.$$.fragment);
			t0 = space();
			create_component(cardbody.$$.fragment);
			t1 = space();
			create_component(cardfooter.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(cardheader.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(cardbody.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(cardfooter.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(cardheader, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(cardbody, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(cardfooter, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const cardheader_changes = {};

			if (dirty & /*$$scope*/ 16) {
				cardheader_changes.$$scope = { dirty, ctx };
			}

			cardheader.$set(cardheader_changes);
			const cardbody_changes = {};

			if (dirty & /*$$scope*/ 16) {
				cardbody_changes.$$scope = { dirty, ctx };
			}

			cardbody.$set(cardbody_changes);
			const cardfooter_changes = {};

			if (dirty & /*$$scope*/ 16) {
				cardfooter_changes.$$scope = { dirty, ctx };
			}

			cardfooter.$set(cardfooter_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(cardheader.$$.fragment, local);
			transition_in(cardbody.$$.fragment, local);
			transition_in(cardfooter.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(cardheader.$$.fragment, local);
			transition_out(cardbody.$$.fragment, local);
			transition_out(cardfooter.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(cardheader, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(cardbody, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(cardfooter, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5.name,
		type: "slot",
		source: "(53:4) <Card class=\\\"mb-4\\\">",
		ctx
	});

	return block;
}

// (66:6) <CardHeader>
function create_default_slot_4(ctx) {
	let i;
	let t0;
	let t1;

	const block = {
		c: function create() {
			i = element("i");
			t0 = space();
			t1 = text(/*pieCardTitle*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			i = claim_element(nodes, "I", { class: true });
			children(i).forEach(detach_dev);
			t0 = claim_space(nodes);
			t1 = claim_text(nodes, /*pieCardTitle*/ ctx[3]);
			this.h();
		},
		h: function hydrate() {
			attr_dev(i, "class", "fas fa-chart-pie");
			add_location(i, file, 66, 8, 1977);
		},
		m: function mount(target, anchor) {
			insert_dev(target, i, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(i);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4.name,
		type: "slot",
		source: "(66:6) <CardHeader>",
		ctx
	});

	return block;
}

// (70:6) <CardBody>
function create_default_slot_3(ctx) {
	let current;
	const piechart = new PieChart({ $$inline: true });

	const block = {
		c: function create() {
			create_component(piechart.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(piechart.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(piechart, target, anchor);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(piechart.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(piechart.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(piechart, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3.name,
		type: "slot",
		source: "(70:6) <CardBody>",
		ctx
	});

	return block;
}

// (73:6) <CardFooter class="small text-muted">
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text(/*cardFooterText*/ ctx[0]);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, /*cardFooterText*/ ctx[0]);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2.name,
		type: "slot",
		source: "(73:6) <CardFooter class=\\\"small text-muted\\\">",
		ctx
	});

	return block;
}

// (65:4) <Card class="mb-4">
function create_default_slot_1(ctx) {
	let t0;
	let t1;
	let current;

	const cardheader = new CardHeader({
			props: {
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const cardbody = new CardBody({
			props: {
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const cardfooter = new CardFooter({
			props: {
				class: "small text-muted",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(cardheader.$$.fragment);
			t0 = space();
			create_component(cardbody.$$.fragment);
			t1 = space();
			create_component(cardfooter.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(cardheader.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(cardbody.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(cardfooter.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(cardheader, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(cardbody, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(cardfooter, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const cardheader_changes = {};

			if (dirty & /*$$scope*/ 16) {
				cardheader_changes.$$scope = { dirty, ctx };
			}

			cardheader.$set(cardheader_changes);
			const cardbody_changes = {};

			if (dirty & /*$$scope*/ 16) {
				cardbody_changes.$$scope = { dirty, ctx };
			}

			cardbody.$set(cardbody_changes);
			const cardfooter_changes = {};

			if (dirty & /*$$scope*/ 16) {
				cardfooter_changes.$$scope = { dirty, ctx };
			}

			cardfooter.$set(cardfooter_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(cardheader.$$.fragment, local);
			transition_in(cardbody.$$.fragment, local);
			transition_in(cardfooter.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(cardheader.$$.fragment, local);
			transition_out(cardbody.$$.fragment, local);
			transition_out(cardfooter.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(cardheader, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(cardbody, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(cardfooter, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(65:4) <Card class=\\\"mb-4\\\">",
		ctx
	});

	return block;
}

// (51:0) <Row>
function create_default_slot(ctx) {
	let div0;
	let t;
	let div1;
	let current;

	const card0 = new Card({
			props: {
				class: "mb-4",
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const card1 = new Card({
			props: {
				class: "mb-4",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div0 = element("div");
			create_component(card0.$$.fragment);
			t = space();
			div1 = element("div");
			create_component(card1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(card0.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(card1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "col-lg-6");
			add_location(div0, file, 51, 2, 1603);
			attr_dev(div1, "class", "col-lg-6");
			add_location(div1, file, 63, 2, 1903);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			mount_component(card0, div0, null);
			insert_dev(target, t, anchor);
			insert_dev(target, div1, anchor);
			mount_component(card1, div1, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const card0_changes = {};

			if (dirty & /*$$scope*/ 16) {
				card0_changes.$$scope = { dirty, ctx };
			}

			card0.$set(card0_changes);
			const card1_changes = {};

			if (dirty & /*$$scope*/ 16) {
				card1_changes.$$scope = { dirty, ctx };
			}

			card1.$set(card1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(card0.$$.fragment, local);
			transition_in(card1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(card0.$$.fragment, local);
			transition_out(card1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(card0);
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div1);
			destroy_component(card1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(51:0) <Row>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let t2;
	let t3;
	let t4;
	let current;

	const breadcrumb = new Breadcrumb({
			props: {
				class: "mb-4",
				$$slots: { default: [create_default_slot_15] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const card0 = new Card({
			props: {
				class: "mb-4",
				$$slots: { default: [create_default_slot_13] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const card1 = new Card({
			props: {
				class: "mb-4",
				$$slots: { default: [create_default_slot_9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const row = new Row({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Charts");
			t1 = space();
			create_component(breadcrumb.$$.fragment);
			t2 = space();
			create_component(card0.$$.fragment);
			t3 = space();
			create_component(card1.$$.fragment);
			t4 = space();
			create_component(row.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Charts");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			claim_component(breadcrumb.$$.fragment, nodes);
			t2 = claim_space(nodes);
			claim_component(card0.$$.fragment, nodes);
			t3 = claim_space(nodes);
			claim_component(card1.$$.fragment, nodes);
			t4 = claim_space(nodes);
			claim_component(row.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "mt-4");
			add_location(h1, file, 19, 0, 809);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			mount_component(breadcrumb, target, anchor);
			insert_dev(target, t2, anchor);
			mount_component(card0, target, anchor);
			insert_dev(target, t3, anchor);
			mount_component(card1, target, anchor);
			insert_dev(target, t4, anchor);
			mount_component(row, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const breadcrumb_changes = {};

			if (dirty & /*$$scope*/ 16) {
				breadcrumb_changes.$$scope = { dirty, ctx };
			}

			breadcrumb.$set(breadcrumb_changes);
			const card0_changes = {};

			if (dirty & /*$$scope*/ 16) {
				card0_changes.$$scope = { dirty, ctx };
			}

			card0.$set(card0_changes);
			const card1_changes = {};

			if (dirty & /*$$scope*/ 16) {
				card1_changes.$$scope = { dirty, ctx };
			}

			card1.$set(card1_changes);
			const row_changes = {};

			if (dirty & /*$$scope*/ 16) {
				row_changes.$$scope = { dirty, ctx };
			}

			row.$set(row_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(breadcrumb.$$.fragment, local);
			transition_in(card0.$$.fragment, local);
			transition_in(card1.$$.fragment, local);
			transition_in(row.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(breadcrumb.$$.fragment, local);
			transition_out(card0.$$.fragment, local);
			transition_out(card1.$$.fragment, local);
			transition_out(row.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			destroy_component(breadcrumb, detaching);
			if (detaching) detach_dev(t2);
			destroy_component(card0, detaching);
			if (detaching) detach_dev(t3);
			destroy_component(card1, detaching);
			if (detaching) detach_dev(t4);
			destroy_component(row, detaching);
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

function instance($$self) {
	let cardFooterText = "Updated yesterday at 11:59 PM";
	let areaCardTitle = "Area Chart Example";
	let barCardTitle = "Bar Chart Example";
	let pieCardTitle = "Pie Chart Example";

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("cardFooterText" in $$props) $$invalidate(0, cardFooterText = $$props.cardFooterText);
		if ("areaCardTitle" in $$props) $$invalidate(1, areaCardTitle = $$props.areaCardTitle);
		if ("barCardTitle" in $$props) $$invalidate(2, barCardTitle = $$props.barCardTitle);
		if ("pieCardTitle" in $$props) $$invalidate(3, pieCardTitle = $$props.pieCardTitle);
	};

	return [cardFooterText, areaCardTitle, barCardTitle, pieCardTitle];
}

class Charts extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Charts",
			options,
			id: create_fragment.name
		});
	}
}

export default Charts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnRzLmU4YTQ5NTc3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2NoYXJ0cy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSBcInN2ZWx0ZXN0cmFwL3NyYy9CcmVhZGNydW1iLnN2ZWx0ZVwiO1xuICBpbXBvcnQgQnJlYWRjcnVtYkl0ZW0gZnJvbSBcInN2ZWx0ZXN0cmFwL3NyYy9CcmVhZGNydW1iSXRlbS5zdmVsdGVcIjtcbiAgaW1wb3J0IENhcmQgZnJvbSBcInN2ZWx0ZXN0cmFwL3NyYy9DYXJkLnN2ZWx0ZVwiO1xuICBpbXBvcnQgQ2FyZEJvZHkgZnJvbSBcInN2ZWx0ZXN0cmFwL3NyYy9DYXJkQm9keS5zdmVsdGVcIjtcbiAgaW1wb3J0IENhcmRIZWFkZXIgZnJvbSBcInN2ZWx0ZXN0cmFwL3NyYy9DYXJkSGVhZGVyLnN2ZWx0ZVwiO1xuICBpbXBvcnQgQ2FyZEZvb3RlciBmcm9tIFwic3ZlbHRlc3RyYXAvc3JjL0NhcmRGb290ZXIuc3ZlbHRlXCI7XG4gIGltcG9ydCBSb3cgZnJvbSBcInN2ZWx0ZXN0cmFwL3NyYy9Sb3cuc3ZlbHRlXCI7XG5cbiAgaW1wb3J0IEFyZWFDaGFydCBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFydHMvQXJlYUNoYXJ0LnN2ZWx0ZVwiO1xuICBpbXBvcnQgQmFyQ2hhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhcnRzL0JhckNoYXJ0LnN2ZWx0ZVwiO1xuICBpbXBvcnQgUGllQ2hhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhcnRzL1BpZUNoYXJ0LnN2ZWx0ZVwiO1xuXG4gIGxldCBjYXJkRm9vdGVyVGV4dCA9IFwiVXBkYXRlZCB5ZXN0ZXJkYXkgYXQgMTE6NTkgUE1cIjtcbiAgbGV0IGFyZWFDYXJkVGl0bGUgPSBcIkFyZWEgQ2hhcnQgRXhhbXBsZVwiO1xuICBsZXQgYmFyQ2FyZFRpdGxlID0gXCJCYXIgQ2hhcnQgRXhhbXBsZVwiO1xuICBsZXQgcGllQ2FyZFRpdGxlID0gXCJQaWUgQ2hhcnQgRXhhbXBsZVwiO1xuPC9zY3JpcHQ+XG5cbjxoMSBjbGFzcz1cIm10LTRcIj5DaGFydHM8L2gxPlxuPEJyZWFkY3J1bWIgY2xhc3M9XCJtYi00XCI+XG4gIDxCcmVhZGNydW1iSXRlbT5cbiAgICA8YSBocmVmPVwiLlwiPkRhc2hib2FyZDwvYT5cbiAgPC9CcmVhZGNydW1iSXRlbT5cbiAgPEJyZWFkY3J1bWJJdGVtIGFjdGl2ZT5DaGFydHM8L0JyZWFkY3J1bWJJdGVtPlxuPC9CcmVhZGNydW1iPlxuXG48Q2FyZCBjbGFzcz1cIm1iLTRcIj5cbiAgPENhcmRCb2R5PlxuICAgIENoYXJ0LmpzIGlzIGEgdGhpcmQgcGFydHkgcGx1Z2luIHRoYXQgaXMgdXNlZCB0byBnZW5lcmF0ZSB0aGUgY2hhcnRzIGluIHRoaXNcbiAgICB0ZW1wbGF0ZS4gVGhlIGNoYXJ0cyBiZWxvdyBoYXZlIGJlZW4gY3VzdG9taXplZCAtIGZvciBmdXJ0aGVyIGN1c3RvbWl6YXRpb25cbiAgICBvcHRpb25zLCBwbGVhc2UgdmlzaXQgdGhlIG9mZmljaWFsXG4gICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmNoYXJ0anMub3JnL2RvY3MvbGF0ZXN0L1wiPlxuICAgICAgQ2hhcnQuanMgZG9jdW1lbnRhdGlvblxuICAgIDwvYT5cbiAgICAuXG4gIDwvQ2FyZEJvZHk+XG48L0NhcmQ+XG5cbjxDYXJkIGNsYXNzPVwibWItNFwiPlxuICA8Q2FyZEhlYWRlcj5cbiAgICA8aSBjbGFzcz1cImZhcyBmYS1jaGFydC1hcmVhXCIgLz5cbiAgICB7YXJlYUNhcmRUaXRsZX1cbiAgPC9DYXJkSGVhZGVyPlxuICA8Q2FyZEJvZHk+XG4gICAgPEFyZWFDaGFydCAvPlxuICA8L0NhcmRCb2R5PlxuICA8Q2FyZEZvb3RlciBjbGFzcz1cInNtYWxsIHRleHQtbXV0ZWRcIj57Y2FyZEZvb3RlclRleHR9PC9DYXJkRm9vdGVyPlxuPC9DYXJkPlxuXG48Um93PlxuICA8ZGl2IGNsYXNzPVwiY29sLWxnLTZcIj5cbiAgICA8Q2FyZCBjbGFzcz1cIm1iLTRcIj5cbiAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaGFydC1iYXJcIiAvPlxuICAgICAgICB7YmFyQ2FyZFRpdGxlfVxuICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgPENhcmRCb2R5PlxuICAgICAgICA8QmFyQ2hhcnQgLz5cbiAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICA8Q2FyZEZvb3RlciBjbGFzcz1cInNtYWxsIHRleHQtbXV0ZWRcIj57Y2FyZEZvb3RlclRleHR9PC9DYXJkRm9vdGVyPlxuICAgIDwvQ2FyZD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxuICAgIDxDYXJkIGNsYXNzPVwibWItNFwiPlxuICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoYXJ0LXBpZVwiIC8+XG4gICAgICAgIHtwaWVDYXJkVGl0bGV9XG4gICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICA8Q2FyZEJvZHk+XG4gICAgICAgIDxQaWVDaGFydCAvPlxuICAgICAgPC9DYXJkQm9keT5cbiAgICAgIDxDYXJkRm9vdGVyIGNsYXNzPVwic21hbGwgdGV4dC1tdXRlZFwiPntjYXJkRm9vdGVyVGV4dH08L0NhcmRGb290ZXI+XG4gICAgPC9DYXJkPlxuICA8L2Rpdj5cbjwvUm93PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkEwQ0ssR0FBYTs7Ozs7Ozs0Q0FBYixHQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBS3NCLEdBQWM7Ozs0Q0FBZCxHQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQVE3QyxHQUFZOzs7Ozs7OzJDQUFaLEdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFLdUIsR0FBYzs7OzRDQUFkLEdBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBT2pELEdBQVk7Ozs7Ozs7MkNBQVosR0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUt1QixHQUFjOzs7NENBQWQsR0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBM0RwRCxjQUFjLEdBQUcsK0JBQStCO0tBQ2hELGFBQWEsR0FBRyxvQkFBb0I7S0FDcEMsWUFBWSxHQUFHLG1CQUFtQjtLQUNsQyxZQUFZLEdBQUcsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
