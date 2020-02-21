var app = new Vue({
  el: '#app',
  data: {
    todoList: [],
    newTodo: '',
    visibility: 'all'
  },
  created: function () {
    this.getData();
  },
  methods: {
    getData: function () {
      this.todoList = JSON.parse(localStorage.getItem("todoData")) || [];
    },
    saveData: function () {
      let toStr = JSON.stringify(this.todoList);
      localStorage.setItem("todoData", toStr);
    },
    //新增事項
    addTodo: function (todo) {
      this.todoList.push({ content: todo, completed: false });
      this.saveData();
      this.newTodo = '';
    },
    //刪除
    removeTodo: function (todo) {
      this.todoList.splice(this.todoList.indexOf(todo), 1);
      this.saveData();
    },
    //清除全部
    clear:function(){
      this.todoList = []
      this.saveData()
    },
    //判斷處理狀況
    checkList: function (todo) {
      if (this.visibility == 'all') {
        console.log(todo.content)
        return true; //也可以寫todo.content（我不知道為什麼）;
      } else if (this.visibility == 'done') {
        return todo.completed;
      } else if (this.visibility == 'undone') {
        return !todo.completed;
      }
    }
}
}

)