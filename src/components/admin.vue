<template>
  <div>
    <el-form>
           <el-form-item label="密码:">
             <el-input type="password" v-model="form.pass"></el-input>
           </el-form-item>
      <el-form-item label="账号:">
        <el-input v-model="form.user"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        form: {
          pass: '',
          user: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
