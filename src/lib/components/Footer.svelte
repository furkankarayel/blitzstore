<script>
	import { PUBLIC_SHOP_MODE } from '$env/static/public';
	import logo from '$lib/assets/logo.png';
</script>

<footer class="text-center lg:text-left bg-[#441c24] text-black-600">
	<div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
		<div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
			<div class="sm:col-span-2">
				<a href="/" aria-label="Go home" title="Company" class="inline-flex items-center">
					<img class="h-10" alt="Kastonia Logo" src={logo} />
				</a>
				<div class="mt-6 lg:max-w-sm">
					<p class="text-sm text-white drop-shadow-sm">
						Ihr zuverlässiger Ansprechpartner für Felgenaufbereitung!
					</p>
					<p class="mt-4 text-sm text-white drop-shadow-sm" />
				</div>
			</div>
			<div class="space-y-2 text-sm">
				<p class="text-base font-bold tracking-wide text-white drop-shadow-sm">Kontakt</p>

				<div class="flex xs:justify-center md:justify-start">
					<p class="mr-1 text-white drop-shadow-sm">Email:</p>
					<a
						href="mailto:info@fm-felgentechnik.de"
						aria-label="Unsere E-Mail"
						title="Unsere E-Mail"
						class="text-white drop-shadow-sm">info@fm-felgentechnik.de</a
					>
				</div>
				<div class="flex xs:justify-center md:justify-start">
					<a
						href="https://www.google.com/maps"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Our address"
						title="Our address"
						class="text-white drop-shadow-sm"
					>
						Meckenbeuren am Bodensee, Deutschland
					</a>
				</div>
			</div>
			<div>
				<span class="text-base font-bold tracking-wide text-white drop-shadow-sm"
					>Soziale Medien</span
				>
				<div class="flex xs:justify-center md:justify-start mt-1 space-x-3">
					<a href="https://www.instagram.com/" class="text-white drop-shadow-sm">
						<svg viewBox="0 0 30 30" fill="currentColor" class="h-10">
							<circle cx="15" cy="15" r="4" />
							<path
								d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
							/>
						</svg>
					</a>
				</div>
				<p class="mt-4 text-sm text-white drop-shadow-sm">
					Unsere Präsenz in den sozialen Medien ist aktuell in Arbeit
				</p>
			</div>
		</div>
		<div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
			<p class="text-sm text-white drop-shadow-sm my-5">
				© Copyright 2024, FM-Felgentechnik.de All rights reserved.
			</p>
			<ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
				<li>
					<a href="/about" class="text-white xs:text-sm drop-shadow-sm">Über uns</a>
				</li>
				<li>
					<a href="/agb" class="text-white xs:text-sm drop-shadow-sm">AGB</a>
				</li>
				<li>
					<a href="/datenschutz" class="text-white xs:text-sm drop-shadow-sm">Datenschutz</a>
				</li>
				<li>
					<a href="/impressum" class="text-white xs:text-sm drop-shadow-sm">Impressum</a>
				</li>
				<li>
					<a href="/contact" class="text-white xs:text-sm drop-shadow-sm">Kontakt</a>
				</li>
			</ul>
		</div>
	</div>
</footer>
