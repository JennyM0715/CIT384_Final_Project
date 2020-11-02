<template>

  <div class="contact_us">
    <!----<h1>This is an contact us page</h1>--->
    <main role="main">
      <div class="Contact_container">
        <h1>Contact Us!</h1>
        <p>Please fill in this form to send your feedback!</p>
       <!---- <form class="form-contact" method="POST" action="contact_form.php">-->
         <!--<form class="form-contact" method="POST" action="https://formspree.io/email@domain.tld">-->
        <form class="form-contact" id="contact-form" action="#" name="myForm" >
          <input
          @change="checkValidation()"
            type="text"
            name="fullname"
            placeholder="Enter Full Name"
            id=fn
            required
          />

          <input
          @change="checkValidation()"
            type="email"
            name="mailaddr"
            placeholder="Your Email Address"
            id="em"
            required
          />
          <input @change="checkValidation()" type="text" name="subject" placeholder="Subject" required />
          <textarea
          @change="checkValidation()"
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

             <!--- <button
              id="sendbtn"
              type="submit"
              name="sendmsg-button"
              style="width: 150px"
              class="contactbtn"
            >Send Message
            </button>--->
            <a  type="submit" href="#myModal" v-if="isConfirmAvailable" id="sendbtn" class="contactbtn" style="background-color:green" >Send Message</a>
              <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title"><b>Feedback Received</b></h4>
               <!---<button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>---->
                </div>
              <div class="modal-body">
                Your feedback has been recieved and will take 1-2 weeks response.
              </div>
              <div class="modal-footer">
               <!--<a color="green" class="btn btn-primary" @click="$bvModal.hide('modal')">OK </a>-->



               <!---data-dismiss="modal" is a custom data property for bootstrap-vue that will close the modal-->
               <!---@click="$router.push({ path: '/' }) means that that button element is binded to a click event and when 
               it's clicked it will use vue-router to go to that route / which is currently the home page.--->
               <button data-toggle="modal" color="green" class="btn btn-primary" data-dismiss="modal" aria-hidden="true" >OK</button>
               </div>
               </div>
               </div>
             </div>
 
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  data () {
      return {
        isConfirmAvailable: false
      }
  },

  methods: {
    checkValidation () {
      const requiredFields = document.querySelectorAll('[required]')

      for (let i = 0; i < requiredFields.length; i += 1) {
        let isFieldBlank = (requiredFields[i].value === '')

        if (isFieldBlank) {
          this.isConfirmAvailable = false
          break
        } else {
          this.isConfirmAvailable = true
        }
      }
    }
  }


}
 //checkSubmission: function () {
  //      console.log(document.querySelectorAll('[required]'))
       
        //$router.push({ path: '/' }) // check if fields required
  //   }
  // Form validation code will come here.
     /// validate: function () {
      
    //      var fullname=  document.forms["myForm"]["fullname"]; 
    //       var mailaddr=  document.forms["myForm"]["mailaddr"]; 
    //       var subject=  document.forms["myForm"]["subject"]; 
    //       var message=   document.forms["myForm"]["message"]; 
          
    //       if (fullname.value == "") {  
    //         window.alert("Please enter your full name."); 
    //         fullname.focus(); 
    //          return false; 
    //       } 
  
     //      if (mailaddr.value == "") { 
     //        window.alert("Please enter a valid email address."); 
    //         mailaddr.focus(); 
    //         return false; 
        //   } 

     //      if (subject.value == "") { 
     //        window.alert("Please enter a subject/reason for contacting us."); 
        //     subject.focus(); 
         //    return false; 
         //  } 
  
          // if (message.value == "") { 
            //  window.alert( "Please enter your message in the box."); 
             // message.focus(); 
            // return false; 
         //  } 
          // return true; 
    //   } 
 //  }
  //validateForm: function () {
  //var x = document.forms["myForm"]["fullname"].value;
 // if (x == "") {
  //  alert("Name must be filled out");
  //  return false;
 // }
//}


</script>


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
      .cancelbtn {
        float: inline-start;
        width: 20%;
      }
      /*#sendbtn_contact{
        width: 150px;
        height: 50px;
      }*/
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
        opacity: 0.9;
        border-radius: 4px;
        cursor: pointer;
        float: right;
        width: 150px;
        height: 50px;
      }

      #cbtn:hover,
      #sendbtn:hover {
        opacity: 1;
      }

    </style>

   
