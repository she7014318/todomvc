(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	const vm = new Vue({
		el: '#app',
		data: {
			list: [
				{ id: 1, name: '吃饭', done: true },
				{ id: 2, name: '睡觉', done: false },
				{ id: 3, name: '打豆豆', done: false }
			],
			todoName: '',
			dblId: -1,
		},
		computed: {
			isShow: function (){
				console.log('重新计算了');
				return this.list.length
			}
		},
		methods: {
			// 删除功能
			del: function(id){
				// // 方式一，id传过来 index不是数组里的 id
				// this.list.splice(id,1)
				// // 方式二
				// let index = this.list.findIndex((item) => {return id == item.id})
				// console.log(index);
				// 方式三
				this.list = this.list.filter(item => id !== item.id)
			},
			// 添加功能
			add: function(){
				if(this.todoName.trim() !== ''){
					let id = this.list[this.list.length - 1].id + 1
					this.list.push({ id: id, name: this.todoName, done: false })
					this.todoName = ''
				}
			},
			// 双击显示编辑状态
			dbl: function(id){
				console.log(id);
				this.dblId = id
			},
			// 隐藏编辑状态
			hide: function(){
				this.dblId = -1
			}
		}
	})
})(window);
