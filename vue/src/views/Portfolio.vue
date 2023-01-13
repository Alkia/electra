<template>
  <div class="container">
    <h2>
		Electra Wallet
		</h2>
    <div class="row row-sm-revers">
      <div class="col-md-6">
        <div class="electra_sp"><SpAssets /></div>
        <div class="electra_sp"><SpTokenTransferList /></div>
      </div>
      <div class="col-md-5 col-lg-4 col-md-offset-1 col-lg-offset-2">
        <div class="electra_sp_free"><SpTokenTransfer /></div>
      </div>
    </div>
  </div>
</template>

<script>
import { SpAssets, SpTokenTransfer, SpTokenTransferList } from '@starport/vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Portfolio',

  components: { SpTokenTransfer, SpAssets, SpTokenTransferList },

  setup() {
    // store
    let $s = useStore()

    // computed
    let address = computed(() => $s.getters['common/wallet/address'])

    return {
      address
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
.col {
  flex-grow: 1;
  padding: 20px;
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
.electra_sp_free {
    border-radius: 1.2rem;
    padding: 2rem;
    font-size: 1.4rem;
    background: rgba(234,220,255,0.3);
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    margin-bottom: 2rem;
}
</style>
