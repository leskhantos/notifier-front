<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
          id="input-group-1"
          label-for="input-1"
      >
        <b-form-input
            class="mt-1"
            id="input-1"
            v-model="form.code"
            required
            placeholder="Код"
        ></b-form-input>

        <b-form-select
            class="mt-1"
            id="input-3"
            v-model="form.delivery_channel"
            :options="channels"
            required
        ></b-form-select>

        <b-form-select
            class="mt-1"
            id="input-3"
            v-model="form.language"
            :options="languages"
            required
        ></b-form-select>
        <b-form-textarea
            class="mt-1"
            id="textarea"
            v-model="form.text"
            placeholder="Контент"
            rows="3"
            max-rows="6"
        ></b-form-textarea>

      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "EditTemplate",
  data() {
    return {
      form: {
        code: '',
        content: '',
        delivery_channel: null,
        language: null
      },
      languages: [{ text: 'Выберите язык', value: null }, 'Английский', 'Русский', 'Казахский'],
      channels: [{ text: 'Выберите тип отправки', value: null }, 'SMS', 'PUSH', 'PUSH+SMS'],
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>

</style>