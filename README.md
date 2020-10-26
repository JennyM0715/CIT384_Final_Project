# CIT 384 FINAL PROJECT --- Mexicanology [Framework: Vue.js]

Members: Erik Niemans, Steve Guzman, Jennifer Martinez, Qardagh(Gordon) Nikadimos, and Lance Arjona.

Our group has decided to create a website, specifically a Mexican cuisine restaurant (Mexicanology) using Vue.js--JavaScript framework. Here on this website, people can see what we are all about, what dishes we serve for appetizers, breakfast, lunch, and dinner. People can also see what type of drinks can be served with their meals as well as what desserts we offer for those who crave sweets. We also have a contact us page so that people can give us feedback on how we can improve our hospitality. Lastly, people can sign up with us to receive email notices from us for offers and special events!

The Contact Us and Sign Up page will have a window pop up when the user clicks on the “Send Message” or “Sign Up” button.

## Project setup on WINDOWS OS:

[Pre-installation set up]

1. Settings --> Apps --> Programs and Features --> Turn on Windows features on or off -->Enable Windows Subsystem for Linux
2. install ubuntu using Microsoft store

**\***in Ubuntu terminal, typ in these commands:

1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash
2. nvm
3. restart ubuntu
4. nvm
5. nvm install --lts
6. npm install -g yarn OR npm install -g @vue/cli

7) vue create <project name>

   1. Manually select features
      --get rid of Linter/Fromater
   2. Click on Router
   3. click 2.X
   4. history mode? Y
   5. prefer to place config for babel..? in a dedicated config file
   6. save for future preset? N

8) yarn add bootstrap
9) yarn install bootstrap
   OR
10) npm install vue bootstrap-vue bootstrap
11) npm i bootstrap jquery popper.js

11. code . (opens Visual Studio Code)
12. npm run serve

**\***in VS CODE :

13. look for extension Remote-WSL and install it
14. Look for Vetur and install it

/_Go to main.js file and enter these code _/

15. import 'bootstrap';
16. import 'bootstrap/dist/css/bootstrap.min.css';
17. import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
18. Vue.use(BootstrapVue)
19. Vue.use(IconsPlugin)
