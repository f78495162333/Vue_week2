import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.29/vue.esm-browser.min.js';

    createApp(
      {
        data() {
          return {
            url: 'https://vue3-course-api.hexschool.io/v2',
            path: 'mura_api',
            user: {
                username: '',
                password: '',
            }
          }
        },
        methods: {  
          login() {
            axios.post(`${this.url}/admin/signin`, this.user)
              .then((res) => {
                console.log(res.data.message);
                const { expired, token } = res.data
                console.log(expired,token);

                //登入後需把 expired、token 存在 cookie 內
                // document.cookie = `HaxToken=${token}; expires=${new Date(expired)};`;
                // window.location.href = `./week2/week2.html`;
              })
              .catch((err) => console.log(err.data.message));
          }
          
        }
      }
    ).mount('#app');