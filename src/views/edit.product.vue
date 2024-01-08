<template>
  <div id="App">
    <div class="body">
      <div class="admin-container">

        <nav
          class="md:left-0  md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl border border-black-600 bg-[#F1F0EC] flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
          <div
            class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap bg-[#F4F7F6] items-center justify-between w-full mx-auto">
            <div
              class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded">

              <h6
                class="md:min-w-full text-blueGray-500 text-2xl mt-3 text-center font-bold block pt-1 pb-4 no-underline">
                Admin
              </h6>
              <div class="group hover:bg-blue-400  transition duration-300 p-2 my-2 flex rounded-md">
                <svg class="mx-2 h-5 w-7 " xmlns="http://www.w3.org/2000/svg" height="16" width="18"
                  viewBox="0 0 576 512">
                  <path
                    d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z" />
                </svg>
                <router-link :to="'/admin/'" class=" text-gray-500 items-center mx-2  rounded-md hover:text-white ">
                  Account
                </router-link>
              </div>


              <div class="group hover:bg-blue-400 hover:text-white transition duration-300 p-2 my-2 flex rounded-md">
                <svg class="mx-2 h-5 w-7 " xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                  viewBox="0 0 512 512">
                  <path
                    d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
                </svg>
                <router-link :to="'/adminproduct/'"
                  class=" text-gray-500 items-center mx-2  rounded-md hover:text-white ">
                  Product
                </router-link>
              </div>


              <div class="group hover:bg-blue-400 hover:text-white transition duration-300 p-2 my-2 flex rounded-md">
                <svg class="mx-2 h-5 w-7 " xmlns="http://www.w3.org/2000/svg" height="16" width="18"
                  viewBox="0 0 576 512">
                  <path
                    d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
                </svg>
                <router-link :to="'/admincategory/'"
                  class=" text-gray-500 items-center mx-2  rounded-md hover:text-white ">
                  Category
                </router-link>
              </div>
            </div>
          </div>
        </nav>

        <div class="content">
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
              <i onclick="onNight(this)"
                class="night icon__nav hover:text-[#00AC9A] cursor-pointer py-2 px-3 rounded-md"><svg
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
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
              <div id="logoutButton" @click="logout" class="mx-3 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512" onclick="logout()">
                  <path
                    d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <editproduct></editproduct>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import editproduct from "../components/admin1/editproduct.vue";

export default {
  components: {
    editproduct,
  },
};
</script>