<script lang="ts">
	export let name: string;
	export let icon: string;
	export let description: string;
	import * as iconsProvider from '$lib/components/IconsProvider';

	const iconsArray = Object.entries(iconsProvider);
</script>

<div class="md:p-8 lg:p-14 flex flex-col justify-center items-center">
	<div class="w-24 h-24 p-4 rounded-full bg-green-700 flex justify-center items-center">
		{@html iconsArray[Number(icon) - 1][1]}
	</div>
	<h3 class="mt-12 text-xl font-bold text-gray-900">{name}</h3>
	<p class="mt-5 text-base text-gray-600">
		{description}
	</p>
</div>
