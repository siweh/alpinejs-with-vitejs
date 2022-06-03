import './style.css'
import { LoveCounter } from './love-counter'
import * as fun from 'everyday-fun';
import Alpine from 'alpinejs'
window.Alpine = Alpine
import persist from '@alpinejs/persist'
 
Alpine.plugin(persist)

// console.log(persist);
// Alpine.data('loveCounter', LoveCounter);
Alpine.data('quoteApp', function(){
	return {
		init(){
			this.quote = fun.getRandomQuote()
		},
		quote : {}
	}
});

Alpine.start()



document.querySelector('#app').innerHTML = "I 💚 Alpine JS!"
