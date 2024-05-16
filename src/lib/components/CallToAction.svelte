<script>
	import image from '$lib/assets/planning.jpg';
	import { Image } from '@unpic/svelte';
	import { PUBLIC_SHOP_URL } from '$env/static/public';
</script>

<div class="my-10 mx-auto sm:mx-0 sm:my-0">
	<section class="relative mt-10 rounded-md overflow-hidden">
		<Image
			class="md:h-64 xs:h-100 object-cover object-center w-full"
			layout="constrained"
			src={image}
			alt="Termin Vereinbarung"
			width="1456"
			height="256"
		/>

		<div class="bg-gray-900 bg-opacity-50 flex xs:py-12 md:px-3 items-center absolute inset-0">
			<div class="px-10 xs:px-3 max-w-xl">
				<h2 class="text-2xl text-white font-semibold">Gute Dinge brauchen Planung</h2>
				<p class="mt-2 text-gray-300">
					Für ein optimales Endergebnis ist eine sorgfältige Planung entscheidend. Wir stehen Ihnen
					bei der Gestaltung von Terrassenüberdachungen, Kaltwintergärten und Geländern zur Seite.
				</p>
				<a href="{PUBLIC_SHOP_URL}/contact">
					<button
						class="flex items-center mt-4 px-3 py-2 bg-green-700 text-white text-sm uppercase font-medium rounded hover:bg-green-500 focus:outline-none focus:bg-green-500"
					>
						<span>Termin vereinbaren</span>
						<svg
							class="h-5 w-5 mx-2"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</button>
				</a>
			</div>
		</div>
	</section>
</div>
