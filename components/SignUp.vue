<template>
  <div>
    <div class="form-group" v-bind:class="{ 'form-group--error': $v.email.$error }">
      <label class="form__label">Email</label>
      <input class="form__input" v-model.trim="email" @input="$v.email.$touch()">
    </div><span class="form-group__message" v-if="!$v.email.required">Email is required</span><span class="form-group__message" v-if="!$v.email.email">Email must be in format example@email.com</span>
    <div class="form-group" v-bind:class="{ 'form-group--error': $v.password.$error }">
      <label class="form__label">Password</label>
      <input class="form__input" type="password" v-model.trim="password" @input="$v.password.$touch()">
    </div><span class="form-group__message" v-if="!$v.password.required">Password is required</span><span class="form-group__message" v-if="!$v.password.minLength">Password must be longer than 5 letters</span>
    <div class="form-group" v-bind:class="{ 'form-group--error': $v.repeatPassword.$error }">
      <label class="form__label">Repeat password</label>
      <input class="form__input" type="password" v-model.trim="repeatPassword" @input="$v.repeatPassword.$touch()">
    </div><span class="form-group__message" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical</span>
  </div>
</template>
<style lang="scss" scoped>
  .form-group {

  }
  .form-group--error {

  }
  .form-group__message {
    color: red;
    font-weight: bold;
  }
  .form__label {
    font-size: 1em;
    color: #8a8a8a;
    margin: 10px 0px 0px 0px;
    display: block;
  }
  .form__input {
  }
</style>
<script>

  import { email, required, sameAs, minLength } from 'vuelidate/lib/validators'
export default {
    data () {
      return {
        email: '',
        password: '',
        repeatPassword: ''
      }
    },
    validations: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      }
    }
  }
</script>
