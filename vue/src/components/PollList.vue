<template>
    <div class=" sp-box sp-shadow sp-form-group">
    <h3> List of Polls </h3>
    <div v-for="poll in polls" v-bind:key="'poll' + poll.id">
        <h4> {{poll.id}}. {{ poll.title }} </h4>
        <AppRadioItem
        @click="submit(poll.id, option)"
        v-for="option in poll.options"
        v-bind:key="option"
        :value="option"
        />
        <AppText type="subtitle">Results: {{ results(poll.id) }}</AppText>
    </div>
    </div>
</template>
<style>
.option-radio > .button {
    height: 40px;
    width: 50%;
}
</style>

<script>
import AppRadioItem from "./AppRadioItem.vue";
import AppText from "./AppText.vue";
import { countBy } from "lodash";
export default {
    components: { AppText, AppRadioItem },
    data() {
    return {
        selected: "",
    };
    },
    computed: {
    currentAccount() {
        if (this._depsLoaded) {
        if (this.loggedIn) {
            return this.$store.getters['common/wallet/address']
        } else {
            return null
        }
        } else {
        return null
        }
    },
    loggedIn() {
        if (this._depsLoaded) {
        return this.$store.getters['common/wallet/loggedIn']
        } else {
        return false
        }
    },
    polls() {
        return (
       // this.$store.getters["cosmonaut.voter.voter/getPollAll"]({
        this.$store.getters["electra.voter/getPollAll"]({
            params: {}
        })?.Poll ?? []
        );
    },
    votes() {
        return (
        //this.$store.getters["cosmonaut.electra.voter/getVoteAll"]({    
        this.$store.getters["electra.voter/getVoteAll"]({
            params: {}
        })?.Vote ?? []
        );
    },
    },
    methods: {
    results(id) {
        const results = this.votes.filter((v) => v.pollID === id);
        return countBy(results, "option");
    },
    async submit(pollID, option) {
        
        const value = { creator: this.currentAccount, pollID, option };
        //await this.$store.dispatch("cosmonaut.voter.voter/sendMsgCreateVote", {
        await this.$store.dispatch("electra.voter/sendMsgCreateVote", {
        value,
        fee: [],
        });
        //await this.$store.dispatch("cosmonaut.voter.voter/QueryPollAll", {
        await this.$store.dispatch("electra.voter/QueryPollAll", {
        options: { subscribe: true, all: true },
        params: {},
        });
    },
    },
};
</script>