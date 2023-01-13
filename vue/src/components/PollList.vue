<template>
    <div class=" electra_sp sp-shadow sp-form-group">
        <div class="sp-voter__main__rcpt__header sp-box-header">
            <h3> List of Polls </h3>
        </div><br/>
    <div class="electra_poll" v-for="poll in polls" v-bind:key="'poll' + poll.id">
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
<style scoped>
  .electra_sp {
    border-radius: 1.2rem;
    padding: 2rem;
    font-size: 1.4rem;
    background: rgba(234,220,255,0.3);
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    margin-bottom: 2rem;
    margin-left: 15rem;
  }
  .electra_poll {
    border-radius: 1.2rem;
    padding: 1rem;
    margin: 10rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    background: whitesmoke;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    margin-bottom: 0.5rem;
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