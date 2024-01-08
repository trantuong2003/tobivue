<template>
  <div class="appp">
    <nav class="h-screen p-3 bg-[#F4F7F6] overflow-y-auto fixed w-72 border ">
      <div class="p-4 text-center ">
        <h2>Admin Page</h2>
      </div>

      <div
        class="w-56 h-max rounded-lg bg-[#F4F7F6] p-3 border-2 border-dotted border-[rgb(233,230,225)] mx-3 mb-4 md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow ">
        <h3 class="text-xs">MAIN</h3>
        <p class="text-xs text-gray-400">Unique dashboard designs</p>
        <hr style="margin: 10px" />
        <div id="my-dashboard" class="flex justify-between cursor-pointer focus:cursor-auto hover:text-[#00AC9A]">
          <div class="flex">
            <i class="fa-regular fa-credit-card p-1"></i>
            <h5>Account</h5>
          </div>
        </div>

        <hr style="margin: 10px" />

        <div id="unique-dashboard" class="flex justify-between cursor-pointer focus:cursor-auto hover:text-[#00AC9A]">
          <div class="flex">
            <i class="fa-regular fa-rectangle-list p-1"></i>
            <h5>Product</h5>
          </div>
        </div>

        <hr style="margin: 10px" />

        <div id="applications" class="flex justify-between cursor-pointer focus:cursor-auto hover:text-[#00AC9A]">
          <div class="flex">
            <i class="fa-regular fa-folder-open p-1"></i>
            <h5>Category</h5>
          </div>
        </div>

        <hr style="margin: 10px" />
      </div>
    </nav>
  </div>

  <div class="flex text-base ">

    <div class="w-5/6">
      <div class="navbar__top flex items-center justify-between fixed top-0 right-0 left-72 bg-[#F4F7F6] h-14 m-3">
        <div class="basis-5/6 flex items-center w-28">

          <img class="w-24 pl-2" src="https://www.tobiclo.com/cdn/shop/files/logo_110x.png?v=1695203315" alt="logo" />
          <input class="focus:border-blue-400 w-full px-2 py-1 mx-3 my-2 rounded-md hover:cursor-pointer" type="text"
            placeholder="input your text" />
        </div>
        <div class="basic-1/6 flex items-center">



          <i class="icon__nav relative hover:text-[#00AC9A] cursor-pointer py-2 px-3 rounded-md"
            onmouseover="listDashboards()"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
            </svg>

          </i>
          <i onclick="onNight(this)" class="night icon__nav hover:text-[#00AC9A] cursor-pointer py-2 px-3 rounded-md"><svg
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </i>
          <i class="icon__nav hover:text-[#00AC9A] cursor-pointer py-2 px-3 rounded-md w-14"
            onmouseover="listSettings()"><img class="rounded-full"
              src="https://i.pinimg.com/originals/26/ee/73/26ee73636f3429e3df522ae219c064fd.png" alt="avatar" />
            <div class="modal__settings absolute top-14 right-0 w-60 bg-white z-50 shadow-md rounded-xl hidden">
              <div class="flex justify-center py-4 border-b border-solid border-gray-500 items-center">
                <img class="w-9 h-9 rounded-md"
                  src="https://i.pinimg.com/originals/26/ee/73/26ee73636f3429e3df522ae219c064fd.png" alt="" />

              </div>

            </div>
          </i>
          <div id="logoutButton" @click="logout" class="mx-3">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512" onclick="logout()">
              <path
                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
            </svg>
          </div>
        </div>
      </div>


      <div class="container  w-5xl">
        <div class="body ">
          <div class="admin-container">

            <div class="content ">
              <div class="">
                <table class="w-72 divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        STT
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Email
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Password
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="(user, index) in users" :key="user.email">
                      <td class="px-6 py-4">{{ index + 1 }}</td>
                      <td class="px-6 py-4">{{ user.name }}</td>
                      <td class="px-6 py-4">{{ user.email }}</td>

                      <td class="px-6 py-4">{{ user.hashed_password }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  </div>
</template>


<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
import bcrypt from 'bcryptjs';

export default {
  name: "Header",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    axios
      .get("https://tobilaravel-production.up.railway.app/api/admin")
      .then((response) => {
        this.users = response.data.users;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
  computed: {
    hashedPasswords() {
      return this.users.map((user) => ({
        ...user,
        hashed_password: bcrypt.hashSync(user.password, 10),
      }));
    },
  },
  setup() {
    const router = useRouter();

    const logout = async () => {
      try {
        await axios.post('https://tobilaravel-production.up.railway.app/api/logout');

        localStorage.removeItem('token');

        router.push({ name: 'login' });

      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

    return { logout };
  },
};
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.body {
  margin: 0;
  padding: 0;
  font-family: "Arial", sans-serif;
}

/* .admin-container {
  display: flex;
  height: 100%;
} */



.content {
  flex: 1;
  padding: 20px;
}




.appp {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
}

body {
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

/* Profile overview styles */

.profile-overview {
  background-color: #fff;
  padding: 20px;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.row {
  margin-bottom: 20px;
}

.col-md-12 {
  width: 30%;
  float: left;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.profile-info {
  text-align: left;
}

.profile-name {
  font-size: 24px;
  font-weight: bold;
}

.profile-title {
  font-size: 16px;
  font-weight: bold;
}

.profile-bio {
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.5;
}

.profile-skills {
  margin-top: 20px;
}

.profile-skills-title {
  font-size: 16px;
  font-weight: bold;
}

.profile-skills-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.profile-skills-list li {
  margin-bottom: 10px;
}

.profile-experience {
  margin-top: 20px;
}

.profile-experience-title {
  font-size: 16px;
  font-weight: bold;
}

.profile-experience-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.profile-experience-list li {
  margin-bottom: 10px;
}

input[name="post"] {
  width: 450px;
  height: 100px;
  padding-left: 5px;
  padding-bottom: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(59, 64, 127);
}

button {
  background-color: cadetblue;
  margin-top: 20px;
  margin-left: 350px;
}

.post {
  background-color: #ffffff;
  padding: 20px;
}

.post h2 {
  font-size: 24px;
  color: #000000;
}

.post p {
  font-size: 16px;
  color: #000000;
}

.post img {
  width: 100%;
}

.post ul {
  margin-bottom: 20px;
}

.post li {
  list-style-type: none;
  font-size: 16px;
  color: #000000;
}

.post a {
  text-decoration: none;
  color: #000000;
}

.comment {
  width: 450px;
  border: 1px dotted black;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
}

.active-status {
  opacity: 0.5;
  font-size: 16px;
}

.content {
  opacity: 0.5;
  font-size: 16px;
}

.col-md-12 {
  margin-left: 20px;
  margin-right: 20px;
}

div[id="cate"] {
  margin-left: 20px;
  text-align: right;
}

.cate ul li {
  color: aqua;
  margin-top: 10px;
  font-size: 16px;
}
</style>
