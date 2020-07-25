



var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      secNum: 6,
      pointerR: '',
      active:'' ,
      bingo:'',
      show: false,
      reward:'',
      changeColor:'backgroundColor:red',
      Products: [
        {"reward": "現金100",
         "icon": "<i class='fas fa-film fa-3x'></i>",
         "number": "0"  
        },
        {"reward": "現金300",
         "icon": "<i class='fas fa-birthday-cake fa-3x'></i>",
         "number": "4"  
        },
        {"reward": "現金500",
         "icon": "<i class='fas fa-star fa-3x'></i>",
         "number": "5"  
        },
        {"reward": "禮券1000",
         "icon": "<i class='fas fa-baby fa-3x'></i>",
         "number": "4"  
        },
        {"reward": "銘謝惠顧",
         "icon": "<i class='fas fa-fighter-jet fa-3x'></i>",
         "number": "1"  
        },
        {"reward": "特休10天",
         "icon": "<i class='fas fa-wifi fa-3x'></i>",
         "number": "5"  
        }
        ]
    },
    methods:{
      setClass(key){
        return `sector s${key}`
      },
      Play(){
        let vm = this
        let randomDeg = Math.floor(Math.random()*(this.secNum + 1));
        vm.active = randomDeg
        vm.reward = vm.Products[randomDeg].reward 
        // console.log(randomDeg,vm.active)
        vm.pointerR = `transform: rotate(${randomDeg * (360/this.secNum) - 90 + 720}deg)` 
        // console.log(this.pointerR)
        vm.show = true
        setTimeout(()=>{
          vm.pointerR = `transform: rotate(-90deg)`
          vm.active = ''
          vm.show = false
        }  ,3000)  
      }
    }
  })