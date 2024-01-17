<script>
	import { PUBLIC_SHOP_NAME } from '$env/static/public';

	let status = '';
	// @ts-ignore
	const handleSubmit = async (data) => {
		status = 'E-Mail wird verschickt...';
		const formData = new FormData(data.currentTarget);
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);
		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
			status = 'Ihre E-Mail wurde erfolgreich versendet ';
		}
	};
</script>

<svelte:head>
	<title>Kontaktaufnahme | {PUBLIC_SHOP_NAME}</title>
	<meta
		name="description"
		content="Kontaktieren Sie uns auf Kastonia.de – Wir sind hier, um Ihre Fragen zu beantworten und Unterstützung zu bieten. Finden Sie unsere Kontaktdaten und wie Sie einfach mit unserem Team in Verbindung treten können."
	/>
</svelte:head>

<section class="bg-white">
	<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
		<h2
			class="mb-4 text-4xl tracking-tight font-extrabold drop-shadow-lg text-center text-gray-900"
		>
			Kontaktieren Sie uns
		</h2>
		<p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
			Wir sind hier, um Ihnen zuzuhören und Unterstützung zu bieten. Teilen Sie uns Ihre Wünsche und
			Fragen über unser Kontaktformular mit
		</p>
		<form on:submit|preventDefault={handleSubmit} class="space-y-8">
			<input type="hidden" name="access_key" value="36766029-f272-4f5b-a7b9-664e011c5182" />
			<input type="hidden" name="subject" value="Kontaktaufnahme durch das Formular" />
			<div>
				<label for="Name" class="block mb-2 text-sm font-medium text-gray-900">Ihr Name</label>
				<input
					type="text"
					name="name"
					class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
					placeholder="Max Mustermann"
					required
				/>
			</div>
			<div>
				<label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>Ihre Mobilfunknummer (optional)</label
				>
				<input
					type="text"
					name="mobile"
					class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
					placeholder="Bsp.: +49 171 123456"
				/>
			</div>
			<div>
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900">Ihre E-Mail</label>
				<input
					type="email"
					name="email"
					class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
					placeholder="max@mustermann.de"
					required
				/>
			</div>

			<div class="sm:col-span-2">
				<label for="message" class="block mb-2 text-sm font-medium text-gray-900"
					>Ihre Nachricht</label
				>
				<textarea
					id="message"
					name="message"
					rows="6"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
					placeholder="Beschreiben Sie ihr Anliegen..."
				/>
			</div>

			<div class="h-captcha" data-captcha="true" />
			<button
				type="submit"
				class="py-3 px-5 text-sm font-medium text-center shadow-lg text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
				>Abschicken</button
			>

			<div
				class="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
				role="alert"
			>
				<svg
					class="flex-shrink-0 inline w-4 h-4 me-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
					/>
				</svg>
				<span class="sr-only">Info</span>
				<div>
					<span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
				</div>
			</div>
		</form>

		<script src="https://web3forms.com/client/script.js" async defer></script>
	</div>
</section>
