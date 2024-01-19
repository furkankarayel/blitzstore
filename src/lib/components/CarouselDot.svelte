<script>
	export let active = false;
	export let number = 0;
</script>

<button
	class="{active ? 'h-7 w-7 opacity-70' : 'h-5 w-5 opacity-30'}
        bg-[#5d5d5d] rounded-full transition-all"
	aria-label="Carousel Button {number}"
	on:click
/>
