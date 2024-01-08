<template>
    <div class="flex justify-center">
      <div class="pt-16 pb-16 max-w-xl m-10">
        <div class="page-width page-width--tiny page-content">
          <h1 class="text-2xl font-bold text-center py-4">Login</h1>
  
          <div id="CustomerLoginForm" class="form-vertical">
            <form @submit.prevent="submitForm">
              <div class="oxi_social_wrapper" style="">
          <iframe
            id="social_login_frame"
            title="Social Login Frame"
            src="https://social-login.oxiapps.com/widget?site=tobivn.myshopify.com&amp;vt=928365&amp;parenturl=https://www.tobiclo.com/account/register"
            style="
              width: 100%;
              max-width: 100%;
              padding-top: 0px;
              margin-bottom: 5px;
              border: 0px;
              height: 96px;
            "
            scrolling="no"
          ></iframe>
        </div>

              <div class="">
                <label for="email" class="p-1">Email</label>
                <input
                  type="email"
                  id="email"
                  class="p-1 w-full bg-[#F1F0EC] border border-1 border-black"
                  autocorrect="off"
                  v-model="form.email"
                />
              </div>
              <div class="flex justify-between py-3">
                <div class="grid__item one-half">
                  <label for="password">Password</label>

                </div>
                <div class="grid__item one-half text-right">
                  <small class="label-info">
                    <a href="#recover" id="RecoverPassword">
                      Forgot password?
                    </a>
                  </small>
                </div>
              </div>
              <input
                    type="password"
                    id="password"
                    class="p-1  w-full bg-[#F1F0EC] border border-1 border-black"
                    v-model="form.password"
                  />
  
              <button type="submit" class="bg-black text-white p-2 w-full my-3">
                Sign In
              </button>
              <p>
                <router-link to="/create" id="customer_register_link">
                  Create account
                </router-link>
              </p>
              <input type="hidden" name="return_url" value="/account" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
      };
    },
    methods: {
      async submitForm() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', this.form);
        console.log(response.data);

        localStorage.setItem('token', response.data.token);

        if (response.data.user && response.data.user.role === 'admin') {
          this.$router.push({ name: 'admin' });
        } else {
          this.$router.push({ name: 'home' });
        }

      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
  },
    setup() {
      const router = useRouter();
    },
  };
  </script>
  