<template>
    <div id="news">
        <div id="messages" v-for="items in listItems">
            <div>
                <div id="newstitle">{{ items.title }}</div>
                <div id="newsbody">{{ items.body }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
const listItems = ref([])



onMounted(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_start=1&_limit=5").then(({ data }) => {
        const dataa = Object.entries(data).map(([title, body]) => {
            return {
                title,
                ...body
            };
        })
        listItems.value = dataa
    }
    )
        .catch("check your connection")
})
</script>



<style scoped></style>