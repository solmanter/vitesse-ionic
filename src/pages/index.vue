<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()

function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()
</script>

<template>
  <div flex flex-col gap-4 p-4>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/SuleymanQ/vitesse-ionic" target="_blank">
        Vitesse Ionic
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />

    <VanField
      v-model="name" label-align="top" :label="t('intro.whats-your-name')"
      :placeholder="t('intro.whats-your-name')" autocomplete="false" class="mx-auto max-w-xl" @keydown.enter="go"
    />

    <div>
      <VanButton class="m-3 max-w-xl w-1/2 text-sm" :disabled="!name" @click="go">
        {{ t('button.go') }}
      </VanButton>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
