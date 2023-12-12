<template>
    <!-- img and calendar -->
    <div id="topside">
        <img src="./../assets/TodoImg.webp" alt="NotePad">
        <div id="calendar">
            <div id="timeframe">
                <div id="hours">{{ hours }}</div>
                <div id="divider">:</div>
                <div id="minutes">{{ minutes }}</div>
            </div>
            <div id="dateframe">
                <p id="dayname"> {{ daynumber }} </p>
                <p id="daynumber"> {{ daymonth }}</p>
                <p id="monthname">{{ monthname }}</p>
            </div>
        </div>
    </div>
    <!-- end img and calendar -->


    <ul id="sidebarlist">

        <!-- start trash item -->
        <div id="trash">
            <li @click="opentrashbox()"><lord-icon src="https://cdn.lordicon.com/qjwkduhc.json" trigger="hover"
                    colors="primary:#646e78,secondary:#4bb3fd,tertiary:#ebe6ef" state="hover-empty"
                    style="width:40px;height:40px">
                    <span>Trash</span> </lord-icon></li>

            <!-- The Modal -->
            <div id="trashcontent" class="modal">
                <p id="titles">Trash Bin</p>
                <span id="closetrashbox" @click="closetrshbox" class="close" title="Close Modal">&times;</span>
                <!-- Modal Content -->
                <form>
                    <div id="trashitems">
                    </div>
                </form>
            </div>
        </div>
        <!-- end trash item -->

        <!-- start Upgrade Item -->
        <div id="upgrade">
            <li @click="openupgradebox()">
                <lord-icon src="https://cdn.lordicon.com/eduyadkp.json" trigger="hover" style="width:40px;height:40px">
                    <span class="tag">Upgrade</span> </lord-icon>
            </li>
            <!-- The Modal -->
            <div id="buy" class="modal">
                <span id="closeupgrade" @click="closeupgrdbox" class="close" title="Close Modal">&times;</span>
                <!-- Modal Content -->
                <form>
                    <div id="title">SELECT YOUR PLAN</div>
                    <div class="container">
                        <div id="silverplan">
                            <div class="coin">
                                <lord-icon src="https://cdn.lordicon.com/hpnrikyx.json" trigger="loop" delay="700"
                                    colors="primary:#575851,secondary:#c0c0c0" state="loop"
                                    style="width:100px;height:100px">
                                </lord-icon>
                            </div>
                            <div class="caption">
                                <h6>6 Month</h6>
                                <p> <ion-icon name="radio-button-on-outline"
                                        style="color: #515758; height: 12px"></ion-icon>
                                    40% discount</p>
                                <p><ion-icon name="radio-button-on-outline"
                                        style="color: #515758;  height: 12px"></ion-icon>
                                    Access
                                    to all
                                    parts</p>
                                <p><ion-icon name="radio-button-on-outline"
                                        style="color: #515758; height: 12px"></ion-icon>Progress
                                    calculation chart</p>

                                <p><ion-icon name="radio-button-on-outline"
                                        style="color: #515758; height: 12px"></ion-icon>Chat
                                    With Users</p>
                                <div class="buydetail">
                                    <p class="off">60$</p>
                                    <p class="price">48$</p>
                                    <p class="buybtn">Buy</p>
                                </div>
                            </div>
                        </div>
                        <div id="goldplan">
                            <div class="coin">
                                <lord-icon src="https://cdn.lordicon.com/hpnrikyx.json" trigger="loop" delay="500"
                                    colors="primary:#b26836,secondary:#ffc738" style="width:150px;height:150px">
                                </lord-icon>
                            </div>
                            <div class="caption">
                                <h6>1 Year</h6>
                                <p><ion-icon name="radio-button-on-outline" style="color: #ffc738; height: 12px"></ion-icon>
                                    40% discount</p>
                                <p><ion-icon name="radio-button-on-outline"
                                        style="color: #ffc738;  height: 12px"></ion-icon>
                                    Access
                                    to all
                                    parts</p>
                                <p><ion-icon name="radio-button-on-outline"
                                        style="color: #ffc738; height: 12px"></ion-icon>Progress
                                    calculation chart</p>

                                <p><ion-icon name="radio-button-on-outline"
                                        style="color: #ffc738; height: 12px"></ion-icon>Chat
                                    With Users</p>
                                <div class="buydetail">
                                    <p class="off">60$</p>
                                    <p class="price">48$</p>
                                    <p class="buybtn">Buy</p>
                                </div>
                            </div>
                        </div>
                        <div id="bronzeplan">
                            <div class="coin">
                                <lord-icon src="https://cdn.lordicon.com/hpnrikyx.json" trigger="loop" delay="900"
                                    colors="primary:#986634,secondary:#e07f1f" state="loop"
                                    style="width:100px;height:100px">
                                </lord-icon>
                            </div>
                            <div class="caption">
                                <h6>1 Month</h6>
                                <p><ion-icon name="radio-button-on-outline" style="color: #515758; height: 12px"></ion-icon>
                                    40% discount</p>
                                <p><ion-icon name="radio-button-on-outline"
                                        style="color: #515758;  height: 12px"></ion-icon>
                                    Access
                                    to all
                                    parts</p>
                                <p><ion-icon name="radio-button-on-outline"
                                        style="color: #515758; height: 12px"></ion-icon>Progress
                                    calculation chart</p>

                                <p><ion-icon name="radio-button-on-outline"
                                        style="color: #515758; height: 12px"></ion-icon>Chat
                                    With Users</p>
                                <div class="buydetail">
                                    <p class="off">60$</p>
                                    <p class="price">48$</p>
                                    <p class="buybtn">Buy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- End Upgrade Item -->

        <!-- start about item -->
        <li id="aboutme" data-bs-toggle="collapse" data-bs-target="#demo"><lord-icon
                src="https://cdn.lordicon.com/jnlncdtk.json" trigger="hover"
                colors="primary:#646e78,secondary:#ad6836,tertiary:#4faef9,quaternary:#f3c3ba,quinary:#e7e2eb"
                style="width:40px;height:40px"><span class="tag">About Me</span>
            </lord-icon></li>

        <div id="demo" class="collapse">
            <div class="contcol">
                My name is Hamidreza<br>
                You can contact me in the following ways

            </div>
        </div>

    </ul>
    <!-- end about item -->


    <!-- link in sidebar buttom -->
    <div id="btmtext">
        <div id="callme">
            <a href="#" data-toggle="tooltip" title="Linkedin"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="https://www.instagram.com/hamidreza__eidy/" data-toggle="tooltip" title="Instagram"
                target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
            <a href="mailto: abc@example.com" data-toggle="tooltip" title="Mail"><ion-icon
                    name="mail-outline"></ion-icon></a>
            <a href=”tel:09017149865″ data-toggle="tooltip" title="Call"><ion-icon name="call-outline"></ion-icon></a>
            <a href="#" data-toggle="tooltip" title="github"><ion-icon name="logo-github"></ion-icon></a>
        </div>
        <p id="detail">Assistant to manage daily tasks</p>
    </div>
</template>





<script setup>
import { ref, onMounted } from 'vue'
function openupgradebox() {
    $('#buy').show()
}
function opentrashbox() {
    $('#trashcontent').show()
}
function closetrshbox() {
    $('#trashcontent').hide()
}
function closeupgrdbox() {
    $('#buy').hide()
}
const hours = ref(0);
const minutes = ref(0);
const daynumber = ref('');
const daymonth = ref('');
const monthname = ref('');
onMounted(() => {
    const current = new Date();
    //get hour
    const hour = current.getHours()
    hours.value = hour <= 9 ? `${hour}`.padStart(2, 0) : hour;

    //get min
    const min = current.getMinutes()
    minutes.value = min <= 9 ? `${min}`.padStart(2, 0) : min;

    //get calender
    const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = dayName[new Date().getDay()];
    daynumber.value = day
    const month = current.toLocaleString('default', { month: 'long' });
    monthname.value = month;
    daymonth.value = current.getDate()
})
</script>



<style scoped></style>