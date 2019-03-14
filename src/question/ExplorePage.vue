<template>
<div id="content">
        <nav>
        <ul>
          <li class="nav-item" id="all">
            <p class="nav-link" v-on:click="getAllQuestions()">
            All Questions
            </p>
          </li>
          <li class="nav-item" id="TrendingTopic">
            <p class="nav-link" v-on:click="getQuestions('TrendingTopic', 20)">
            TrendingTopic
            </p>
          </li>
          <li class="nav-item" id="IQTest">
            <p class="nav-link" v-on:click="getQuestions('IQTest', 20)">
            IQTest
            </p>
          </li>
          <li class="nav-item" id="Food">
            <p class="nav-link" v-on:click="getQuestions('Food', 20)">
            Food
            </p>
          </li>
          <li class="nav-item" id="Sports">
            <p class="nav-link" v-on:click="getQuestions('Sports', 20)">
            Sports
            </p>
          </li>
          <li class="nav-item" id="Funny">
            <p class="nav-link" v-on:click="getQuestions('Funny', 20)">
            Funny
            </p>
          </li>
          <li class="nav-item" id="WhatWouldYouDo">
            <p class="nav-link" v-on:click="getQuestions('WhatWouldYouDo', 20)">
            WhatWouldYouDo
            </p>
          </li>
          <li class="nav-item" id="Movie">
            <p class="nav-link" v-on:click="getQuestions('Movie', 20)">
            Movie
            </p>
          </li>
          <li class="nav-item" id="Technology">
            <p class="nav-link" v-on:click="getQuestions('Technology', 20)">
            Technology
            </p>
          </li>
        </ul>
      </nav>
  <div>
    <div id="allquestions">
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'ExplorePage',
  data () {
    return {
      questions: [],
      input:'{"category":"0"}'
    }
  },

  methods: {
    getAllQuestions() {
      axios({ method: "GET", "url": "http://loopieserver.azurewebsites.net/allquestions", 
      "data": this.input, 
      "headers": { "content-type": "application/json" } 
      }).then(result => {
        this.displayResult(result, "all");
      }, error => {
        console.error(error);
      });
    },
    getQuestions(category, count) {
      axios({ 
        method: "POST", 
        "url": "http://loopieserver.azurewebsites.net/getquestions",
        "data": this.getJsonRequest("Luffy", category, count),
      "headers": { "content-type": "application/json" } 
      }).then( result => {
        this.displayResult(result, category);
      }, error => {
        console.error(error);
      });
    },
    getJsonRequest(userName, cate, c) {
      this.request = {"UserName":userName, "Properties":{"category":cate, "count":c}};
      return JSON.stringify(this.request);
    },
    displayResult(result, tabId) {
        var qs = document.getElementById("allquestions");
        qs.innerHTML = "";
        this.questions = result.data.Questions;
        var tab = document.getElementById(tabId);
        this.clear();
        tab.style.backgroundColor = "yellow";  
        for(let i = 0; i<this.questions.length;i++){
        var idiv = document.createElement("DIV");
        var t = document.createTextNode(this.questions[i].QuestionDescription);
        idiv.appendChild(t);
        qs.appendChild(idiv);  
        }
    },
    clear(){
        document.getElementById("all").style.backgroundColor = "#999";
        document.getElementById("TrendingTopic").style.backgroundColor = "#999";
        document.getElementById("IQTest").style.backgroundColor = "#999";
        document.getElementById("Food").style.backgroundColor = "#999";
        document.getElementById("Sports").style.backgroundColor = "#999";
        document.getElementById("Funny").style.backgroundColor = "#999";
        document.getElementById("WhatWouldYouDo").style.backgroundColor = "#999";
        document.getElementById("Movie").style.backgroundColor = "#999";
        document.getElementById("Technology").style.backgroundColor = "#999";
    },
  }
}
</script>

<style scoped>
nav {
  margin: 0;
  padding: 0;
  position: static;
  float: left;
   height: 550px;
}
ul {
  padding: 3px;
  padding-right: 0;
  display: inline-block;
  background-color: #999;


}
li {
    text-align: left;
}
.nav-item {
  display: block;
  margin: 5px;
  margin-right: 0;
  font-size: 20px;
  border: 5px solid #bbb;
  border-right: 0;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration:none;
  color: inherit;
  cursor: pointer;
}
.router-link-active {
  color: yellow;
}
p{
  padding: 0;
  margin: 0;
}
#allquestions {
 background-color: yellow;
 border: 1px solid #bbb;
 height: 550px;
 margin: 0;
 padding: 0;
}
template {
  margin: 0px;
  padding: 0;
}
#content {
  margin: 0px;
  padding: 0;
}
#allquestions div {
    margin: 80px;
    background-color: aquamarine;

}

</style>