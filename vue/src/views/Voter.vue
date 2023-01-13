<template>
	<div>
		<div class="container">
			<!-- this line is used by starport scaffolding # 4 -->
		<h2>
		Voter Module
		</h2>
		<PollForm />
		<PollList />
		</div>
	</div>
</template>
<script>
    import PollForm from "../components/PollForm.vue";
    import PollList from "../components/PollList.vue";
    export default {
      name: 'Types',
      components: { PollForm, PollList },
    }
</script>