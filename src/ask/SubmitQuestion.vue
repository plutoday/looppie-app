<template>
<div>
    <h1>This is Ask a question Page</h1>
    <div>
        <select class="question" v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <textarea v-model="message" placeholder="Please input your question" class="question"></textarea>
        <div class="question">
        <input v-model="message" placeholder="Answer Opition 1">
        <input type="radio" id="op1" value="op1" v-model="correct">
        <label for="one">This is correct answer</label>
        </div>
        <div class="question">
        <input v-model="message" placeholder="Answer Opition 2">
        <input type="radio" id="op1" value="op2" v-model="correct">
        <label for="one">This is correct answer</label>
        </div>
        <button id="save" >Submit</button>

    </div>

</div>
</template>

<script>
export default {
  name: 'Submit'
}
</script>

<style scoped>
.question {
display: block;
margin: 10px;
}
</style>