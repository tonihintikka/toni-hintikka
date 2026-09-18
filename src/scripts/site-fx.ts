/**
 * Site motion — anime.js v4 (2026)
 * Aesthetic: ink forest + copper; restraint over spectacle.
 * Honors prefers-reduced-motion.
 */
import { animate, createTimeline, engine, onScroll, splitText, stagger } from 'animejs';

engine.timeUnit = 's';

const reduceMotion = () =>
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function markReady() {
	document.documentElement.dataset.thFx = 'ready';
}

function heroEntrance() {
	const hero = document.querySelector('.hero');
	if (!hero) return;

	const title = hero.querySelector('h1');
	const tagline = hero.querySelector('.tagline');
	const actions = hero.querySelectorAll('.actions .sl-link-button');

	if (title) {
		const { chars } = splitText(title, { chars: true });
		animate(chars, {
			opacity: [0, 1],
			y: [14, 0],
			delay: stagger(0.018, { start: 0.05 }),
			duration: 0.55,
			ease: 'outCubic',
		});
	}

	const tl = createTimeline({ defaults: { ease: 'outCubic' } });
	if (tagline) tl.add(tagline, { opacity: [0, 1], y: [18, 0], duration: 0.55 }, 0.28);
	if (actions.length) {
		tl.add(
			actions,
			{ opacity: [0, 1], y: [14, 0], duration: 0.45, delay: stagger(0.08) },
			0.4,
		);
	}
}

function scrollReveals() {
	const nodes = document.querySelectorAll(
		'.sl-markdown-content > :is(h2, h3, p, ul, ol, table, blockquote)',
	);
	nodes.forEach((el) => {
		const node = el as HTMLElement;
		node.style.opacity = '0';
		node.style.transform = 'translateY(1.1rem)';
		let done = false;
		onScroll({
			target: node,
			repeat: false,
			onEnter: () => {
				if (done) return;
				done = true;
				animate(node, { opacity: 1, y: 0, duration: 0.55, ease: 'outCubic' });
			},
		});
	});
}

function magneticCtas() {
	document.querySelectorAll('.sl-link-button.primary').forEach((btn) => {
		const el = btn as HTMLElement;
		el.addEventListener('pointermove', (e) => {
			const r = el.getBoundingClientRect();
			const x = ((e as PointerEvent).clientX - r.left - r.width / 2) * 0.22;
			const y = ((e as PointerEvent).clientY - r.top - r.height / 2) * 0.22;
			animate(el, { x, y, duration: 0.28, ease: 'outQuad' });
		});
		el.addEventListener('pointerleave', () => {
			animate(el, { x: 0, y: 0, duration: 0.4, ease: 'outElastic(1, 0.6)' });
		});
	});
}

function pointerGlow() {
	const glow = document.createElement('div');
	glow.className = 'th-pointer-glow';
	glow.setAttribute('aria-hidden', 'true');
	document.body.appendChild(glow);

	let mx = window.innerWidth * 0.35;
	let my = window.innerHeight * 0.25;
	let cx = mx;
	let cy = my;
	let raf = 0;

	const tick = () => {
		cx += (mx - cx) * 0.08;
		cy += (my - cy) * 0.08;
		glow.style.transform = `translate(${cx}px, ${cy}px)`;
		raf = requestAnimationFrame(tick);
	};

	window.addEventListener(
		'pointermove',
		(e) => {
			mx = e.clientX;
			my = e.clientY;
		},
		{ passive: true },
	);
	raf = requestAnimationFrame(tick);

	document.addEventListener('visibilitychange', () => {
		if (document.hidden) cancelAnimationFrame(raf);
		else raf = requestAnimationFrame(tick);
	});
}

function boot() {
	markReady();
	if (reduceMotion()) return;
	heroEntrance();
	scrollReveals();
	magneticCtas();
	pointerGlow();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
	boot();
}
