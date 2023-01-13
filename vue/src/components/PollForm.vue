<template>
    <div>
      <div class="electra_sp sp-voter__main sp-shadow sp-form-group">
          <form class="sp-voter__main__form">
            <div class="sp-voter__main__rcpt__header sp-box-header">
                <h3> Create a Poll </h3>
            </div>
            <div class="spacing">
                <input class="sp-input" style="border-radius: 1rem;" placeholder="Title" v-model="title" />
                <br/><br/>
                <div v-for="(option, index) in options" v-bind:key="'option' + index">
                <input class="sp-input" placeholder="Option" v-model="option.title" />
                </div>
                <br/>
                <sp-button @click="add">+ Add option</sp-button> &nbsp;
                <sp-button @click="submit">Create poll</sp-button>
            </div>
          </form>
      </div>
    </div>
</template>
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
    .spacing{
        padding: 1rem;
        margin: 1rem;
    }
  
</style>
<script>
export default {
    name: "PollForm",
    data() {
      return {
        title: "",
        options: [{
          title: "",
        }],
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
      }
    },
    methods: {
      add() {
        this.options = [...this.options, { title: "" }];
      },
      async submit() {
        const value = {
          creator: this.currentAccount,
          title: this.title,
          options: this.options.map((o) => o.title),
        };
		// TO FIX BEFORE PUBLISHING - There may be a problem here (the transaction does not complete) 
        // Old tuto for ref: await this.$store.dispatch("cosmonaut.voter.voter/sendMsgCreatePoll", {
        await this.$store.dispatch("electra.voter/sendMsgCreatePoll", {
          value,
          fee: [],
        });
      },
    },
  };
</script>