<svelte:head>
	<title>Kastonia.de Kontaktaufnahme</title>
</svelte:head>

<section class="bg-white dark:bg-gray-900">
	<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
		<h2
			class="mb-4 text-4xl tracking-tight font-extrabold drop-shadow-lg text-center text-gray-900 dark:text-white"
		>
			Kontaktieren Sie uns
		</h2>
		<p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
			Wir sind hier, um Ihnen zuzuhören und Unterstützung zu bieten. Teilen Sie uns Ihre Wünsche und
			Fragen über unser Kontaktformular mit
		</p>
		<form action="#" class="space-y-8">
			<div>
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>Ihre E-Mail</label
				>
				<input
					type="email"
					id="email"
					class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
					placeholder="max@mustermann.de"
					required
				/>
			</div>
			<div>
				<label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>Thema</label
				>
				<input
					type="text"
					id="subject"
					class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
					placeholder="Wie können wir Ihnen helfen?"
					required
				/>
			</div>
			<div class="sm:col-span-2">
				<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
					>Ihre Nachricht</label
				>
				<textarea
					id="message"
					rows="6"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Beschreiben Sie ihr Anliegen..."
				/>
			</div>
			<button
				type="submit"
				class="py-3 px-5 text-sm font-medium text-center shadow-lg text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
				>Abschicken</button
			>
		</form>
	</div>
</section>
