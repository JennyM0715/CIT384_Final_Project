<template>
  <div class="contact_us">
    <!----<h1>This is an contact us page</h1>--->
    <main role="main">
      <div class="Contact_container">
        <h1>Contact Us!</h1>
        <p>Please fill in this form to send your feedback!</p>
       <!---- <form class="form-contact" method="POST" action="contact_form.php">-->
         <!--<form class="form-contact" method="POST" action="https://formspree.io/email@domain.tld">-->
        <form class="form-contact" action="#">
          <input
            type="text"
            name="fullname"
            placeholder="Enter Full Name"
            required
          />

          <input
            type="email"
            name="mailaddr"
            placeholder="Your Email Address"
            required
          />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea
            name="message"
            cols="5"
            rows="5"
            placeholder="Message"
            required
          ></textarea>
          <div class="clearfix">
           <router-link to="/">
            <button
              id="cbtn"
              type="cancel"
              style="width: 150px"
              
              class="cancelbtn"
            >
           Cancel
              
            </button>
            </router-link> 
           <!--- <div>
           <b-button v-b-modal.modal-1>Send Message</b-button>
          <b-modal id="modal-1" title="BootstrapVue">
              <p class="my-4">Your message has been sent and will be processed!</p>
          </b-modal>
            </div>-->
            <button
              id="sendbtn"
              type="submit"
              name="sendmsg-button"
              style="width: 150px"
              class="contactbtn"
            >Send Message
            </button>
           
          </div>
        </form>
      </div>
    </main>
  </div>
</template>


<style>
      
      /* Extra styles for the cancel button */
      #cbtn {
        padding: 14px 20px;
        background-color: #f44336;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: left;
        margin-top: 2%;
      }

      /* Float cancel and signup buttons and add an equal width*/
      .cancelbtn,
      .contactbtn {
        float: inline-start;
        width: 20%;
      }
      input[type="submit"] {
        background-color: #4caf50;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: right;
      }

      input[type="submit"]:hover {
        background-color: #45a049;
      }
      /* Set a style for all buttons */
      #sendbtn {
        background-color: #4caf50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 20%;
        opacity: 0.9;
        border-radius: 4px;
        cursor: pointer;
        float: right;
      }

      #cbtn:hover,
      #sendbtn:hover {
        opacity: 1;
      }

    </style>

   
