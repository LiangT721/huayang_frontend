<template>
  <div class="message container-sm my-5 mt-md-0">
    <h2 class="title text-center text-capitalize py-3 pt-md-0">
      <div v-if="this.$store.getters.lan">Leave your message</div>
      <div v-else>留言板</div>
    </h2>
    <div v-if="this.$store.getters.lan" class="message col-12 col-xxl-8 offset-xxl-2">
      <div class="row">
        <div class="form-floating col-10 offset-1 col-md-5 mb-3">
          <input
            type="text"
            class="form-control"
            id="first_name"
            v-model="first_name"
            placeholder="First Name"
          />
          <label for="first_name" class="ps-4">First Name</label>
        </div>
        <div class="form-floating col-10 offset-1 col-md-5 offset-md-0 mb-3">
          <input
            type="text"
            class="form-control"
            id="last_name"
            v-model="last_name"
            placeholder="Last Name"
          />
          <label for="last_name" class="ps-4">Last Name</label>
        </div>
        <div class="form-floating col-10 offset-1 mb-3">
          <input
            type="text"
            class="form-control"
            id="phone"
            v-model="phone"
            placeholder="Phone Number"
          />
          <label for="phone" class="ps-4">Phone Number</label>
        </div>
        <div class="form-floating col-10 offset-1 mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            v-model="email"
            placeholder="name@example.com"
          />
          <label for="floatingInput" class="ps-4">Email address</label>
        </div>
        <div class="form-floating col-10 offset-1 mb-3">
          <textarea
            name=""
            id="content"
            cols="30"
            rows="10"
            class="form-control"
            v-model="content"
            placeholder="Please leave your message"
          ></textarea>
          <label for="floatingInput" class="ps-4"
            >Please leave your message</label
          >
        </div>
        <button class="btn btn-primary col-3 offset-7" @click="submit">
          <div v-if="this.$store.getters.lan">Submit</div>
          <div v-else>上传</div>
        </button>
      </div>
    </div>
    <div v-else class="message col-12 col-xxl-8 offset-xxl-2">
      <div class="row">
        <div class="form-floating col-10 offset-1 col-md-5 mb-3">
          <input
            type="text"
            class="form-control"
            id="first_name"
            v-model="first_name"
            placeholder="First Name"
          />
          <label for="first_name" class="ps-4">名</label>
        </div>
        <div class="form-floating col-10 offset-1 col-md-5 offset-md-0 mb-3">
          <input
            type="text"
            class="form-control"
            id="last_name"
            v-model="last_name"
            placeholder="Last Name"
          />
          <label for="last_name" class="ps-4">姓</label>
        </div>
        <div class="form-floating col-10 offset-1 mb-3">
          <input
            type="text"
            class="form-control"
            id="phone"
            v-model="phone"
            placeholder="Phone Number"
          />
          <label for="phone" class="ps-4">电话</label>
        </div>
        <div class="form-floating col-10 offset-1 mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            v-model="email"
            placeholder="name@example.com"
          />
          <label for="floatingInput" class="ps-4">电子邮箱</label>
        </div>
        <div class="form-floating col-10 offset-1 mb-3">
          <textarea
            name=""
            id="content"
            cols="30"
            rows="10"
            class="form-control"
            v-model="content"
            placeholder="Please leave your message"
          ></textarea>
          <label for="floatingInput" class="ps-4"
            >如有疑问，请留言</label
          >
        </div>
        <button class="btn btn-primary col-3 offset-7" @click="submit">
          <div v-if="this.$store.getters.lan">Submit</div>
          <div v-else>上传</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      content: "",
    };
  },
  methods: {
    submit() {
        console.log(this.first_name)
        console.log(this.last_name)
        console.log(this.phone)
        console.log(this.email)
        console.log(this.content)
      axios.request({
        url: "http://143.110.222.230/api/message",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          first_name: this.first_name,
          last_name: this.last_name,
          phone: this.phone,
          email: this.email,
          content: this.content,
        },
      }).then(()=>{
        this.first_name = "";
        this.last_name = "";
        this.phone = "";
        this.email = "";
        this.content = "";
        if (this.$store.getters.lan){
          alert("The message has been sent successfully！")
        }else(
          alert("留言已成功发送！")
        )
      }).catch(()=>{
        if (this.$store.getters.lan){
          alert("The message sent failed!")
        }else(
          alert("留言发送未成功！")
        )

      }
        
      );
    },
  },
};
</script>

<style lang="scss" scoped>
#content {
  height: 15em;
}
</style>