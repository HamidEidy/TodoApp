<template>
    <div id="todos">
        <div class="inputs">
            <input class="checkmark" type="checkbox" v-model="completedfilter" name="completedfilter" />
            <label for="completedfilter">
                Completed Plans
            </label>
        </div>
        <div class="inputs">
            <input class="checkmark" type="checkbox" v-model="progressfilter" name="Progressfilter" />
            <label for="Progressfilter">
                In Progress
            </label>
        </div>


        <div id="completedlist" :class="{ disappear: !completedfilter }">
            <div class="titlefilter" id="productplanning">
                <h6>Completed plans</h6>
            </div>

            <p v-if="completed.length < 1">empty...</p>



            <div id="donetodos" v-for="(items, index) in completed" :key="index">
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
                <li v-for="(items, index) in progress" :key="Date">
                    <div class="inputs">
                        <lord-icon @click="movetodone(index)" data-toggle="tooltip" title="Done"
                            src="https://cdn.lordicon.com/meohwfyv.json" trigger="morph" colors="primary:#16c72e"
                            style="width:30px;height:30px">
                        </lord-icon>
                        <lord-icon @click="movetotrash(index)" data-toggle="tooltip" title="Delete"
                            src="https://cdn.lordicon.com/meohwfyv.json" trigger="morph" colors="primary:#e83a30"
                            style="width:30px;height:30px">
                        </lord-icon>
                        <label for="Progressfilter">

                            {{ items.text }}
                        </label>

                    </div>
                </li>
            </ul>
            <input id="placehold" type="text" placeholder=" +   add item" v-model="newtodo" @click="donetodo">
        </div>
        <teleport to="#teleporttarget">
            {{ progress.length }}
        </teleport>
        <teleport to="#trashitems">
            <div v-for="(items, index) in trash" :key="index">
                <p>
                    {{ items.text }}
                </p>
            </div>

        </teleport>
        <teleport to="#trashlength">
            <p>{{ trash.length }}</p>
        </teleport>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useToast } from "vue-toastification";
const toast = useToast()
const newtodo = ref('');
const completedfilter = ref(true);
const progressfilter = ref(true);
const completed = reactive([]);
const trash = reactive([]);
const progress = reactive([])

function donetodo() {
    if (newtodo.value) {
        const todofield = { text: `${newtodo.value}`, done: 'false' }
        console.log(todofield)
        progress.push({
            ...todofield
        })
        toast.success("Add New Todo");
        newtodo.value = ''
    } else {
        toast.error("Leave a Value")
    }
}
function movetodone(index) {
    progress[index].done = true
    completed.push(progress[index])
    progress.splice(index, 1)
    toast.success("DONE")
}
function movetotrash(index) {
    console.log(progress[index])
    trash.push(progress[index])
    progress.splice(index, 1)
    toast.warning("Deleted")
}
</script>


<style scoped></style>