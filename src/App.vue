<script>
import Sidebar from './components/Sidebar.vue'
import NavbarComponent from './components/NavbarComponent.vue'



export default{
components: {
  Sidebar,
    NavbarComponent
}
}
</script>

<template>
  <body>
    <div class="container-fluid">
      <div class="row">
        <aside class="col-md-3 col-lg-2 col-sm-3 col-12 ">
          <Sidebar></Sidebar>
        </aside>
        <div class="col-md-9 col-lg-10 col-sm-9 col-12 p-0">
          <header>
            <NavbarComponent></NavbarComponent>
          </header>
          <main>
            <router-view v-slot="{ Component }">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </router-view>
          </main>
        </div>
      </div>
    </div>
  </body>
</template>

<style>
body{
  background: hsla(200, 8%, 93%, 1);

  background: linear-gradient(90deg, hsla(200, 8%, 93%, 1) 0%, hsla(217, 35%, 83%, 1) 0%, hsla(0, 33%, 99%, 1) 100%);
  
  background: -moz-linear-gradient(90deg, hsla(200, 8%, 93%, 1) 0%, hsla(217, 35%, 83%, 1) 0%, hsla(0, 33%, 99%, 1) 100%);
  
  background: -webkit-linear-gradient(90deg, hsla(200, 8%, 93%, 1) 0%, hsla(217, 35%, 83%, 1) 0%, hsla(0, 33%, 99%, 1) 100%);
  
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#EBEDEE", endColorstr="#C3CFE2", GradientType=1 );
}
</style>