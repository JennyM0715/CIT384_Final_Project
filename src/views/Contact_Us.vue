<template>
  <div class="contact_us">
      <!----<h1>This is an contact us page</h1>--->
      <main role="main">
        <div class="Contact_container">
          <h1>Contact Us!</h1>
          <p>Please fill in this form to send your feedback!</p>
          <div>
            <validation-observer ref="observer" v-slot="{ handleSubmit }">
              <b-form  @submit.stop.prevent="handleSubmit(onSubmit)">
                <validation-provider
                  name="fullname"
                  :rules="{ required: true, min: 3 }"
                  v-slot="validationContext"
                >
                  <b-form-group id="fullname-input-group-1" label="Full Name" label-for="fullname-input-1">
                    <b-form-input
                      id="fullname"
                      name="fullname"
                      v-model="form.fullname"
                      :state="getValidationState(validationContext)"
                      aria-describedby="fullname-1-live-feedback"
                      placeholder="Enter Full Name"
                    ></b-form-input>
                    <b-form-invalid-feedback id="fullname-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
            
            <validation-provider
                  name="mailaddr"
                  :rules="{ required: true, min: 3 }"
                  v-slot="validationContext"
                >
                  <b-form-group id="mailaddr-input-group-2" label="Email Address" label-for="mailaddr-input-2">
                    <b-form-input
                      id="mailaddr"
                      name="mailaddr"
                      v-model="form.mailaddr"
                      :state="getValidationState(validationContext)"
                      aria-describedby="mailaddr-2-live-feedback"
                      placeholder="Enter Email Address"
                    ></b-form-input>
                    <b-form-invalid-feedback id="mailaddr-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
            
            
            <validation-provider
                  name="subject"
                  :rules="{ required: true, min: 3 }"
                  v-slot="validationContext"
                >
                  <b-form-group id="subject-input-group-3" label="Subject" label-for="subject-input-3">
                    <b-form-input
                      id="subject"
                      name="subject"
                      v-model="form.subject"
                      :state="getValidationState(validationContext)"
                      aria-describedby="subject-3-live-feedback"
                      placeholder="Subject"
                    ></b-form-input>
                    <b-form-invalid-feedback id="subject-3-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>


            <validation-provider
                  name="message"
                  :rules="{ required: true, min: 3 }"
                  v-slot="validationContext"
                >
            <b-form-group id="message-input-group-4" label="Message" label-for="message-input-4">
                    <textarea
                      id="message"
                      name="message"
                      v-model="form.message"
                      :state="getValidationState(validationContext)"
                      aria-describedby="message-4-live-feedback"
                      cols="5"
                      rows="5"
                      placeholder="Enter your message here..."
                  ></textarea>
                    <b-form-invalid-feedback id="message-4-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>

                 <b-button type="submit" variant="success">Send Message</b-button>
              

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
                          <p>Your feedback has been recieved and will take 1-2 weeks response.</p>
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
        fullname: null,
        mailaddr: null,
        subject: null,
        message: null
      }
    };
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    resetForm() {
      this.form = {
        fullname: null,
        mailaddr: null,
        subject: null,
        message: null
        
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