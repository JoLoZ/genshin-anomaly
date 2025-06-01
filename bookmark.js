(() => {
	const l = document.createElement('div');
	l.setAttribute(
		'style',
		'height: 100vh; width: 100vw; position: fixed; background: #000b; color: #fff; z-index: 9999;top: 0;display: flex;align-items: center;justify-content: center;'
	);
	l.innerText = 'Collecting Exploration data...';
	document.body.append(l);
	try {
		const u = 'https://act.hoyolab.com/app/community-game-records-sea/index.html#/ys';
		const s = location.hash.split('?')[0];

		if (!location.href.startsWith(u) || (s != '#/ys' && s != '#/ys/exploration')) {
			alert('Navigating to the Battle Chronicle. Click the bookmark again after it loads.');
			window.open(u, '_self');
			return;
		}

		const explorationInterval = setInterval(() => {
			if (!location.hash.split('?')[1]) {
				return;
			}
			clearInterval(explorationInterval);
			fetch(
				'https://sg-public-api.hoyolab.com/event/game_record/genshin/api/index?' +
					location.hash.split('?')[1],
				{ headers: { 'x-rpc-language': 'en-us' }, credentials: 'include' }
			)
				.then((r) => r.json())
				.then((o) => {
					window.open(
						'%ORIGIN%/stats#' +
							o.data.world_explorations
								.reverse()
								.flatMap((w) => w.area_exploration_list)
								.map((o) => `${o.name}:${(o.exploration_percentage / 10).toFixed(1)}`)
								.join(';'),
						'_self'
					);
				});
		}, 10);
		if (s == '#/ys/exploration') {
			return;
		}

		document.querySelector('#anchor_exploration .block-title-text-more').click();
	} catch (e) {
		alert('Something went wrong! Please try again.\nError: ' + e.toString());
		l.remove();
	}
})();
