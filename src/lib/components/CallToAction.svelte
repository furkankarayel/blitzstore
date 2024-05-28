<script>
	import image from '$lib/assets/planning.jpg';
	import { PUBLIC_SHOP_URL } from '$env/static/public';
</script>

<div
	class="my-20 lg:px-10 max-w-10xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-20 justify-center py-10 lg:py-14"
>
	<div
		class="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 md:pt-2 lg:pt-0 drop-shadow-custom hover:drop-shadow-customhov"
	>
		<img class="w-full" src={image} alt="" />
	</div>
	<div class="lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
		<h1
			class="text-4xl md:text-5xl xl:text-[50px] leading-[1.2] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold bg-gradient-to-b from-black text-transparent to-gray-400 bg-clip-text drop-shadow-custom hover:drop-shadow-customhov"
		>
			Gestalten Sie ihre Vision, <br />wir verwirklichen sie.
		</h1>
		<p
			class="xs:text-md lg:text-md md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left text-gray-800"
		>
			Mit unserer sorgfältigen Planung erzielen Sie optimale Ergebnisse. Wir unterstützen Sie bei
			der Gestaltung von Terrassenüberdachungen, Kaltwintergärten und Geländern, um Ihre Wünsche zu
			verwirklichen.
		</p>
		<div class="flex gap-x-5 flex-col gap-y-2.5 lg:flex-row">
			<a
				href="{PUBLIC_SHOP_URL}/contact"
				class="flex w-full lg:w-fit items-center text-white justify-center rounded-lg bg-[#15803d] px-6 py-2.5 font-semibold hover:bg-green-500 focus:outline-none focus:bg-green-500"
				><span>Jetzt Termin sichern </span>
			</a>
		</div>
	</div>
</div>

<style>
	.custom-height {
		height: 400px;
	}

	.custom-height img {
		height: 100%;
	}
</style>
