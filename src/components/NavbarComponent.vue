<template>
    <p id="designlogo">Plan DO</p>
    <div class="routres">
        <div class="routlink row ">
            <router-link id="tagli" to="/TodosComponent"><button>{{ todo }}</button>
                Todos</router-link>
            <router-link id="tagli" class="col-md-1 col-sm-6 col-xs-6" to="/NotesComponent"><button>
            {{note}}</button>
                Notes</router-link>
            <router-link id="tagli" to="/NewsComponent"><button>5</button>
                News</router-link>
            <router-link id="tagli" to="/FilesComponent">Analytices
            </router-link>

        </div>
    </div>
</template>




<script setup>

 import { computed } from 'vue';
import { useTaskStore } from '../../store/task';
 const store = useTaskStore();
 const todo = computed(()=> store.InHold.length)
 const note = computed(() => store.notes.length)
</script>




<style scoped>
#proicon {
    position: absolute !important;
    margin-left: -4px;
}

#tagli.router-link-active {

    padding-bottom: 14px;
    border-bottom: 2px solid #208EFE;

}

.banalert {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: fit-content;
    height: fit-content;
    text-align: center;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0px 12px 28px 0px rgba(140, 149, 159, 0.3);
    padding: 30px 100px;
}

#alerttitle {
    font-size: 50px;
    color: #595959;
    margin-bottom: 10px;
}

.alertbody {
    font-size: 20px;
    color: #595959;
    margin-bottom: 30px;
}

#updatebtn {
    background-color: #2B77C0;
    color: #FFFFFF;
    border: none;
    border-radius: 10px;
    padding: 10px 30px;
    font-size: 25px;
    margin: 0px 20px;
}

#cnslbtn {
    background-color: #AAAAAA;
    color: #FFFFFF;
    border: none;
    border-radius: 10px;
    padding: 10px 30px;
    font-size: 25px;
    margin: 0px 20px;
}
</style>


