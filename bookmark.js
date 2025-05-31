if (location.href != 'https://act.hoyolab.com/app/community-game-records-sea/index.html#/ys') {
	alert('Please click the bookmark again after the page has loaded!');
	window.open('https://act.hoyolab.com/app/community-game-records-sea/index.html#/ys', '_self');
} else {
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
					'%ORIGIN%/r#' +
						o.data.world_explorations
							.reverse()
							.flatMap((w) => w.area_exploration_list)
							.map((o) => `${o.name}:${(o.exploration_percentage / 10).toFixed(1)}`)
							.join(';'),
					'_self'
				);
			});
	}, 10);
	document.querySelector('#anchor_exploration .block-title-text-more').click();
}
