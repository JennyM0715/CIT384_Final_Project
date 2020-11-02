<template>
  <div class="sign_up">
      <!----<h1>This is an contact us page</h1>--->
      <main role="main">
        <div class="SignUp_container">
          <h1>Sign Up With Us!</h1>
        <p>Please fill in this form to recieve promotional offers, discounts, notices on special events, and so much more!</p>
          <div>
            <validation-observer ref="observer" v-slot="{ handleSubmit }">
              <b-form  @submit.stop.prevent="handleSubmit(onSubmit)">
                <validation-provider
                  name="first name"
                  :rules="{ required: true, min: 3 }"
                  v-slot="validationContext"
                >
                  <b-form-group id="fname-input-group-1" label="First Name" label-for="fname-input-1">
                    <b-form-input
                      id="fname"
                      name="first name"
                      v-model="form.fname"
                      :state="getValidationState(validationContext)"
                      aria-describedby="first name-1-live-feedback"
                      placeholder="Enter First Name"
                    ></b-form-input>
                    <b-form-invalid-feedback id="first_name-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
            
            <validation-provider
                  name="last name"
                  :rules="{ required: true, min: 3 }"
                  v-slot="validationContext"
                >
                  <b-form-group id="lname-input-group-2" label="Last Name" label-for="lname-input-2">
                    <b-form-input
                      id="lname "
                      name="last name"
                      v-model="form.lname"
                      :state="getValidationState(validationContext)"
                      aria-describedby="last nanme-2-live-feedback"
                      placeholder="Enter Last Name "
                    ></b-form-input>
                    <b-form-invalid-feedback id="lname-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
            
            
            <validation-provider
                  name="email address"
                  :rules="{ required: true, min: 3 }"
                  v-slot="validationContext"
                >
                  <b-form-group id="mailaddr-input-group-3" label="Email Address" label-for="mailaddr-input-3">
                    <b-form-input
                      id="mailaddr"
                      name="mailaddr"
                      v-model="form.mailaddr"
                      :state="getValidationState(validationContext)"
                      aria-describedby="Email Address-3-live-feedback"
                      placeholder="Enter Email Address"
                    ></b-form-input>
                    <b-form-invalid-feedback id="Email Address-3-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>



                 <b-button type="submit" variant="success">Sign Up</b-button>
              

               <router-link to="/"> <b-button class="ml-2">Cancel</b-button> </router-link> 
              </b-form>
            </validation-observer>

            <div v-if="showModal">
              <transition name="modal">
                <div class="modal-mask">
                  <div class="modal-wrapper">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Success</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" @click="showModal = false">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <p>Thank you for signing up! Please check email for our special offers!</p>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-success"  @click="$router.push({ path: '/' })">Confirm</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
      </div>
    </main>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showModal: false,
      form: {
        fname: null,
		lname: null,
        mailaddr: null
        
      }
    };
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    resetForm() {
      this.form = {
         fname: null,
		lname: null,
        mailaddr: null
        
      };

      this.$nextTick(() => {
        this.$refs.observer.reset();
      });
    },
  
    onSubmit() {
      this.showModal = true
    },
  }
};
</script>