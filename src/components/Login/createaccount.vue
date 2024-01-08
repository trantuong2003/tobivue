<template>
  <div class="flex justify-center py-20">
    <div class="max-w-md">
      <h1 class="text-xl text-center font-bold py-3">Create Account</h1>
      <p class="text-danger" v-for="error in errors" :key="error">
        <span v-for="err in error" :key="err">{{ err }}</span>
      </p>

      <form @submit.prevent="register">
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
        <input type="hidden" name="form_type" value="create_customer" /><input
          type="hidden"
          name="utf8"
          value="✓"
        />

        <div class="my-2">
          <p>Name</p>
          <input
            type="text"
            name="customer[last_name]"
            id="name"
            class="w-full p-2 bg-[#F1F0EC] border border-1 border-black"
            autocapitalize="words"
            fdprocessedid="si2y7j"
            v-model="form.name"
          />
        </div>
        <div class="my-2">
          <p for="Email">Email</p>
          <input
            type="email"
            name="customer[email]"
            id="email"
            class="w-full p-2 bg-[#F1F0EC] border border-1 border-black"
            autocorrect="off"
            autocapitalize="off"
            fdprocessedid="rh03v4"
            v-model="form.email"
          />
        </div>
        <div class="my-2">
          <p for="CreatePassword">Password</p>
          <input
            type="password"
            name="customer[password]"
            id="password"
            class="w-full p-2 bg-[#F1F0EC] border border-1 border-black"
            fdprocessedid="2mhqyo"
            v-model="form.password"
          />
        </div>

        <div class="my-2">
          <p for="CreatePassword">re-Password</p>
          <input
            type="password"
            name="customer[password]"
            id="c_assword"
            class="w-full p-2 bg-[#F1F0EC] border border-1 border-black"
            fdprocessedid="2mhqyo"
            v-model="form.c_password"
          />
        </div>

        <p>
          <input
            type="submit"
            value="Create"
            class="text-white bg-black w-full p-3 my-3"
            fdprocessedid="euhi19"
          />
        </p>
      </form>
    </div>
  </div>
</template>

<script scoped>


export default {
    data() {
      return {
        form: {
          name:'',
          email: '',
          password: '',
          c_password: '',
        },
      };
    },
    methods: {
      async register() {
        try {
    
          const response = await axios.post('http://127.0.0.1:8000/api/register', this.form);
          alert('create account sucessfull');
  
          console.log(response.data);
  
          localStorage.setItem('token', response.data.token);
          this.$router.push({ name: 'login' });
        } catch (error) {
    
          console.error('Error submitting form:', error);
        }
      },
    }};
</script>
