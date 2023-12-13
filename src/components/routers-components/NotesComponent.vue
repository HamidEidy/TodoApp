<template>
    <div id="note">
        <!-- The Modal -->
        <div id="addnotebox" class="modal">
            <!-- Modal Content -->
            <form class="modal-content">
                <span id="closeaddnotebox" @click="closent" title="Close Modal">&times;</span>
                <div class="container">
                    <p id="title">Add Note</p>
                    <label for="uname">Title</label>
                    <input required type="text" placeholder="Enter Title" name="uname" key="title" v-model="titleval">
                    <label for="psw">Note</label>
                    <textarea rows="5" name="text" placeholder="Enter text" key="text" v-model="textval"></textarea>
                    <span class="addbtn" @click="addnotes">Add Note</span>
                </div>
            </form>
        </div>
        <div id="notesbody">
            <div id="title">
                <h6>NoteBox</h6>
                <button class="addbtn" @click="opennotebox()">Add Note</button>
            </div>
            <p v-if="notes.length < 1">empty...
            </p>
            <ul id="contents">
                <li id="notebox" v-for="items, index in notes" :key="index">
                    <div id="notehead">
                        <p id="titletext">{{ items.title }} </p>
                        <p id="deletenote" @click="deletenote(index)" title="Close Modal">&times;</p>
                    </div>
                    <p id="body">{{ items.text }}</p>
                </li>
            </ul>
        </div>
    </div>
    <teleport to="#trashitems">
        <div v-for="(items, index) in notetrash" :key="index">
            <p> {{ items.title }}</p>
        </div>
    </teleport>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useToast } from "vue-toastification";
import { useNoteStore } from '../../../store/note';
const store = useNoteStore();
const toast = useToast()
function opennotebox() {
    $('#addnotebox').show()
}
function closent() {
    $('#addnotebox').hide()
}
const notes = computed(() => store.allnotes);
const titleval = ref('');
const textval = ref('');
function addnotes() {
    if (titleval.value && textval.value) {
        const newnotes = { title: `${titleval.value}`, text: `${textval.value}` }
        store.addtonotes(newnotes)
        $('#addnotebox').hide()
        titleval.value = textval.value = ''
    } else {
        toast.error("Leave a Value")
    }
}
const notetrash = reactive([])
function deletenote(index) {
    notetrash.push(notes[index])
    notes.splice(index, 1)
    toast.warning("Deleted")
}
</script>



<style scoped></style>