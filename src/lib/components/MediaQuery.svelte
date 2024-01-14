<script>
	import { onMount } from 'svelte';

	// @ts-ignore
	export let query;

	// @ts-ignore
	let mql;
	// @ts-ignore
	let mqlListener;
	let wasMounted = false;
	let matches = false;

	onMount(() => {
		wasMounted = true;
		return () => {
			removeActiveListener();
		};
	});

	// @ts-ignore
	$: {
		if (wasMounted) {
			removeActiveListener();
			// @ts-ignore
			addNewListener(query);
		}
	}

	// @ts-ignore
	function addNewListener(query) {
		mql = window.matchMedia(query);
		// @ts-ignore
		mqlListener = (v) => (matches = v.matches);
		mql.addListener(mqlListener);
		matches = mql.matches;
	}

	function removeActiveListener() {
		// @ts-ignore
		if (mql && mqlListener) {
			mql.removeListener(mqlListener);
		}
	}
</script>

<slot {matches} />
