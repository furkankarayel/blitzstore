<script lang="ts">
	import { PUBLIC_SHOP_MODE } from '$env/static/public';
	import MediaQuery from './MediaQuery.svelte';
	export let title: string;
	export let image: string;
	export let hoverImage = '';
	export let price: number;
	export let salePrice: number = 0;
	export let link: string;

	let hovered = false;
	const mobileStyles = {
		borderRadius: 3,
		padding: '3px 5px',
		border: '1px solid transparent'
	};

	const desktopStyles = {
		borderRadius: 3,
		padding: '3px 5px',
		border: '1px solid transparent'
	};
</script>

<!-- <div class="flex flex-col justify-center items-center ">
	<a
		class="aspect-square block mb-6"
		href={link}
		on:mouseenter={() => (hovered = true)}
		on:mouseleave={() => (hovered = false)}
		on:touchstart={() => (hovered = true)}
		on:touchend={() => (hovered = false)}
	>
		<img
			class="object-cover aspect-square "
			width="700"
			height="700"
			loading="lazy"
			src={hovered && hoverImage.length !== 0 ? hoverImage : image}
			alt="{title} image"
		/>
	</a>
	<div class="flex flex-col justify-start flex-grow text-center leading-tight gap-1">
		<a
			class="font-light shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
			href={link}>{title}</a
		>
		<div class="flex justify-center gap-3 ">
			{#if PUBLIC_SHOP_MODE != '0'}
				{#if salePrice === 0}
					<span class="font-medium">€{price}</span>
				{:else}
					<span class="text-red-600 font-medium">€{salePrice}</span>
					<span class="text-gray-600 line-through font-light">€{price}</span>
				{/if}
			{/if}
		</div>
	</div>
</div> -->
<div>
	<MediaQuery query="(min-width: 2000px)" let:matches>
		{#if matches}
			<a
				class="aspect-square block mb-6"
				href={link}
				on:mouseenter={() => (hovered = true)}
				on:mouseleave={() => (hovered = false)}
				on:touchstart={() => (hovered = true)}
				on:touchend={() => (hovered = false)}
			>
				<div
					class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat xs:h-10 sm:h-10 p-12 text-center"
					style="background-image: url('{image}'); height: 300px"
				>
					<div
						class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
						style="background-color: rgba(0, 0, 0, 0.3)"
					>
						<div class="flex h-full items-center justify-center">
							<div class="text-white">
								<a class="font-light" href={link} />
								<h2
									class="mb-4 xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-5xl font-bold shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
								>
									{title}
								</h2>
							</div>
						</div>
					</div>
				</div>
			</a>
		{/if}
	</MediaQuery>
	<MediaQuery query="(min-width: 1281px) and (max-width: 1990px)" let:matches>
		{#if matches}
			<a
				class="aspect-square block mb-6"
				href={link}
				on:mouseenter={() => (hovered = true)}
				on:mouseleave={() => (hovered = false)}
				on:touchstart={() => (hovered = true)}
				on:touchend={() => (hovered = false)}
			>
				<div
					class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat xs:h-10 sm:h-10 p-12 text-center"
					style="background-image: url('{image}'); height: 300px"
				>
					<div
						class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
						style="background-color: rgba(0, 0, 0, 0.3)"
					>
						<div class="flex h-full items-center justify-center">
							<div class="text-white">
								<a class="font-light" href={link} />
								<h2
									class="mb-4 xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-bold shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
								>
									{title}
								</h2>
							</div>
						</div>
					</div>
				</div>
			</a>
		{/if}
	</MediaQuery>

	<MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
		{#if matches}
			<a
				class="aspect-square block mb-6"
				href={link}
				on:mouseenter={() => (hovered = true)}
				on:mouseleave={() => (hovered = false)}
				on:touchstart={() => (hovered = true)}
				on:touchend={() => (hovered = false)}
			>
				<div
					class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat xs:h-10 sm:h-10 p-12 text-center"
					style="background-image: url('{image}'); height: 300px"
				>
					<div
						class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
						style="background-color: rgba(0, 0, 0, 0.3)"
					>
						<div class="flex h-full items-center justify-center">
							<div class="text-white">
								<a class="font-light" href={link} />
								<h2
									class="mb-4  xs:text-xl sm:text-xl md:text-2xl lg:text-lg xl:text-2xl font-bold shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
								>
									{title}
								</h2>
							</div>
						</div>
					</div>
				</div>
			</a>
		{/if}
	</MediaQuery>

	<MediaQuery query="(max-width: 480px)" let:matches>
		{#if matches}
			<a
				class="aspect-square block mb-6"
				href={link}
				on:mouseenter={() => (hovered = true)}
				on:mouseleave={() => (hovered = false)}
				on:touchstart={() => (hovered = true)}
				on:touchend={() => (hovered = false)}
			>
				<div
					class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat xs:h-10 sm:h-10 p-12 text-center"
					style="background-image: url('{image}'); height: 150px"
				>
					<div
						class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
						style="background-color: rgba(0, 0, 0, 0.3)"
					>
						<div class="flex h-full items-center justify-center">
							<div class="text-white">
								<a class="font-light" href={link} />
								<h2
									class="mb-4  xs:text-sm sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-bold shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
								>
									{title}
								</h2>
							</div>
						</div>
					</div>
				</div>
			</a>
		{/if}
	</MediaQuery>
</div>
