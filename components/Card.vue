<template>
	<div class="container">
		<!-- Content from the parent gets rendered here. -->
		<slot></slot>
	</div>
</template>
<style lang="scss" scoped>
	.container
	{
		background-color: black;
		border-radius: 5px;
		margin: 0 auto;
		width: 95%;
		padding: 10px;
		box-shadow: 0px 1px 4px 2px rgba(0,0,0,0.85);
	}
	@media (min-width: 1200px) {
		.container {
			width: 1110px;
		}
	}
</style>

