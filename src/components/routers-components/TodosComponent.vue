<template>
  <div id="todos">
    <div class="inputs">
      <input
        class="checkmark"
        type="checkbox"
        v-model="completedfilter"
        name="completedfilter"
      />
      <label for="completedfilter"> Completed Plans </label>
    </div>
    <div class="inputs">
      <input
        class="checkmark"
        type="checkbox"
        v-model="progressfilter"
        name="Progressfilter"
      />
      <label for="Progressfilter"> In Progress </label>
    </div>

    <div id="completedlist" :class="{ disappear: !completedfilter }">
      <div class="titlefilter" id="productplanning">
        <h6>Completed plans</h6>
      </div>

      <div id="donetodos" v-for="(items, index) in InHold" :key="index">
        <ion-icon name="checkmark-done"></ion-icon>
        <label id="donetext">
          {{ items.text }}
        </label>
      </div>
    </div>

    <div id="inholdlist" :class="{ disappear: !progressfilter }">
      <div class="titlefilter">
        <h6>in progress</h6>
      </div>
      <ul>
        <li v-for="(items, index) in donetodos" :key="items.title">
          <div class="inputs">
            <lord-icon
              @click="movetodone(index)"
              data-toggle="tooltip"
              title="Done"
              src="https://cdn.lordicon.com/meohwfyv.json"
              trigger="morph"
              colors="primary:#16c72e"
              style="width: 30px; height: 30px"
            >
            </lord-icon>
            <lord-icon
              @click="movetotrash(index)"
              data-toggle="tooltip"
              title="Delete"
              src="https://cdn.lordicon.com/meohwfyv.json"
              trigger="morph"
              colors="primary:#e83a30"
              style="width: 30px; height: 30px"
            >
            </lord-icon>
            <label for="Progressfilter">
              {{ items.text }}
            </label>
          </div>
        </li>
      </ul>
      <input
        id="placehold"
        type="text"
        placeholder=" +   add item"
        v-model="newtodo"
        @click="donetodo"
      />
    </div>
    <div id="trsh">
      {{ trash }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTaskStore } from "../../../store/task";
const store = useTaskStore();
const newtodo = ref("");
const completedfilter = ref(true);
const progressfilter = ref(true);
 const donetodos = computed(() => store.donetodos);
 const InHold = computed(() => store.InHold);
 const trash = computed(() => store.trash);

function donetodo() {
  if (newtodo.value) {
    const todofield = { text: `${newtodo.value}`, done: true };
store.addtodo(todofield)
    newtodo.value = "";
  } else {
    $('#placehold').attr('placeholder', '      Type your Plan + Click', 'color' , 'red')
  }
}
function movetodone(index) {
  store.movetodones(index);
}
function movetotrash(index) {
    store.movetotrash(index);
}
 
</script>

<style scoped>
#donetodos {
  position: relative;
}
#trsh{
  display: none;
}
</style>