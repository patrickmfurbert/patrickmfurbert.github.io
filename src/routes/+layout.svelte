<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Patrick Furbert - Software Engineer</title>
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
	<meta name="description" content="Patrick Furbert's portfolio and resume - Software Engineer with expertise in Java, Spring Boot, Python, and full-stack development" />
</svelte:head>

{@render children?.()}
