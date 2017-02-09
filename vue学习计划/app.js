// let list = [
// 	{
// 		title:'吃饭打豆豆1'
// 	},
// 	{
// 		title:'吃饭打豆豆2'
// 	},
// 	{
// 		title:'吃饭打豆豆3'
// 	},
// 	{
// 		title:'吃饭打豆豆4'
// 	},
// 	{
// 		title:'吃饭打豆豆5'
// 	}
// ];
let list = [
	 	{
		title:'吃饭打豆豆1',
		isChecked:false
	},
	{
		title:'吃饭打豆豆2',
		isChecked:true
	},
	{
		title:'吃饭打豆豆3',
		isChecked:true
	}
]
new Vue({
	el:'.main',
	data:{
		list:list,
		todo:'',
		edtorTodos:''  //记录正在编辑的数据
	},
	methods:{
		addTodo(ev){
				// 这里this指向根实例
				this.list.push({
					title:this.todo,
					isChecked:false
				})
				this.todo = "";
		},
		deleteTodo(todo){
			let index = this.list.indexOf(todo);
			this.list.splice(index,1);
		},
		edtortodo(todo){
			this.edtorTodos = todo;
		}
	}
});