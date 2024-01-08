import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/tuong",
      name: "home",
      component: () => import("../views/Home.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/productdetail/:id", 
      name: "detail",
      component: () => import("../views/Productdetail.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/create",
      name: "create",
      component: () => import("../views/register.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/admin.vue"),
    },
    {
      path: "/adminProduct",
      name: "admin-products",
      component: () => import("../views/AdminProduct.vue"),
    },
    {
      path: "/addproduct",
      name: "addproduct",
      component: () => import("../views/addproduct.vue"),
    },
    {
      path: "/addcategory",
      name: "add-category",
      component: () => import("../views/addcategory.vue"),
    },
    {
      path: "/admincategory",
      name: "admincategory",
      component: () => import("../views/adminCategory.vue"),
    },
    {
      path: "/editProduct/:id",
      name: "edit-products",
      component: () => import("../views/edit.product.vue"),
    },    
    {
      path: "/cart",
      name: "cart-products",
      component: () => import("../views/cart.vue"),
    },    
    {
      path: "/abc",
      name: "dsfs",
      component: () => import("../views/dsfs.vue"),
    },
    {
      path: "/product",
      name: "all-product",
      component: () => import("../views/allsanpham.vue"),
    },

  ],
});

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !localStorage.getItem("token")) {
    return { name: "login" };
  }
  if (to.meta.requiresAuth === false && localStorage.getItem("token")) {
    return { name: "home" };
  }
});
export default router;
