<template>
  <main class="self-center mx-auto w-10/12 md:w-2/3">
    <form
      class="flex flex-col justify-start"
      @submit.prevent.stop="handleSubmit"
    >
      <h1 class="text-4xl font-semibold leading-none ml-3 tracking-widest mb-8">
        LOGIN
      </h1>
      <div class="relative mb-8">
        <input
          id="email"
          v-model="username"
          class="input bg-white dark:bg-gray-900 appearance-none rounded-full w-full px-4 py-3 pt-5 pb-2 focus:outline-none active:outline-none"
          :class="{ filled: username }"
          type="text"
          autofocus
        />
        <label
          for="email"
          class="label absolute mb-0 -mt-2 pt-4 pl-4 leading-tighter text-gray-400 text-base mt-2 cursor-text"
        >
          Usuario o Email
        </label>
      </div>

      <div class="relative mb-8">
        <input
          id="password"
          v-model="password"
          class="input bg-white dark:bg-gray-900 appearance-none rounded-full w-full px-4 py-3 pt-5 pb-2 focus:outline-none active:outline-none"
          :class="{ filled: password }"
          type="password"
        />
        <label
          for="password"
          class="label absolute mb-0 -mt-2 pt-4 pl-4 leading-tighter text-gray-400 text-base mt-2 cursor-text"
        >
          Contraseña
        </label>
      </div>

      <input
        type="submit"
        value="Iniciar Sesión"
        class="submit focus:outline-none active:outline-none"
      />
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from 'nuxt-composition-api'

export default defineComponent({
  setup() {
    const username = ref('')
    const password = ref('')
    const {
      app: { $auth },
    } = useContext()

    async function handleSubmit() {
      try {
        await $auth.login({
          data: { username: username.value, password: password.value },
        })
      } catch (err) {
        console.log(err.message)
      }
    }

    return {
      username,
      password,
      handleSubmit,
    }
  },
})
</script>

<style lang="postcss" scoped>
.input {
  transition: border 0.2s ease-in-out;
  min-width: 280px;
}
input.submit {
  @apply appearance-none bg-transparent w-full p-3;
  @apply text-lg font-semibold tracking-wide uppercase;
  &:hover {
    @apply text-purple-500;
  }
}

.input:focus + .label,
.input:active + .label,
.input.filled + .label {
  @apply text-purple-700 text-xs;
  transition: all 0.2s ease-out;
  top: -0.1rem;
}

.label {
  @apply left-0;
  transition: all 0.2s ease-out;
  top: 0.4rem;
}
</style>
