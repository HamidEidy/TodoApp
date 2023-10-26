<template>
    <div id="news">
        <div id="messages" v-for="items in listItems">
            <div>
                <div id="newstitle">{{ items.title }}</div>
              <div id="newsbody" >{{ items.body }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            listItems: [

            ]
        }
    },
    created() {
        axios.get("https://jsonplaceholder.typicode.com/posts?_start=1&_limit=5").then(({ data }) => {
            const dataa = Object.entries(data).map(([title, body]) => {
                return {
                    title,
                    ...body
                };
            })
            this.listItems = dataa
        }
        )
        .catch("check your connection")
    }
}





</script>



<style scoped></style>