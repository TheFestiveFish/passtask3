<template>
    <div class="grid-container">
        <div class="item1"><h1>User Inputs Demonstration</h1></div>
        <div class="item2">
            <form @submit.prevent="handleSubmit">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="formData.name" required>
  
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="formData.email" required>
  
                <button type="submit">Submit</button>
            </form>
            <div>
                <h2>User Information</h2>
                <p>Name: {{ formData.name }}</p>
                <p>Email: {{ formData.email }}</p>
            </div>
        </div>
        <div class="item3">
            <p>This app demonstrates the use of user inputs,<br>a button function, and components. It does this<br>through the use of v-model in Vue3 and<br>html form elements.</p>
        </div>

    </div>



  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
        },
      };
    }
  };
  </script>
