<template>
	<div>
		<div class="container">
			<!-- this line is used by starport scaffolding # 4 -->
		<h2>
		Electra Governance 
		</h2>
        <div ><PollForm /></div>
		
		<div ><PollList /></div>
		</div>
	</div>
</template>

<script>
    import PollForm from "../components/PollForm.vue";
    import PollList from "../components/PollList.vue";
const newLocal = 'Types';
    export default {
      name: newLocal,
      components: {  PollForm, PollList },
    }
</script>
