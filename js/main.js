(() => {
  //compomet will go here
  const liveuser= {
    props: ['first_name', 'lastname', 'role ' ],
    template: "#activeuser"
methods: {
  logChildMsg(){
    console.log("hellp from the child component)
  }
};

runParentFunc(){

this.$emit('passFucCallUP')

}
created: {
  message: function() {
    console.log('sup from vue');
  }
}
  };
  const vm = new Vue({
    el: '#app',
    data: {
      message:"sup from vue!"
    },



created: {
  message: function() {
    console.log('sup from vue');
  }
}

    methods: {
      logParent(message) {
        console.log("from the parent", message);
      }
logMainMessage() {
  console.log("called form insde a child, lives in the parent", meeage);
}
      
    },
    components:  {
    user: liveuser
  }
})
})();
