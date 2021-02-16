<template>
<div class="container">
  <div class="card jumbotron">
    <div class="card-body">
      <h1>{{ titleText }}</h1><br>
      <p>{{ helpText }}</p>
      <p>{{ helpTextSuite }}</p>
      <input type="number" name="radius" id="radius"><br>
      <button @click="displayResult" class="mt-3">Calculez</button>
      <div v-if="calculBool" class="mt-3"><!-- *** cette div contenant le tableau qui ne s'affichera que si calculBool est true *** -->
        <table class="table table-dark">
          <tbody>
            <tr>
              <th scope="col">périmètre</th>
              <th scope="col">Aire</th>
              <th scope="col">Volume</th>
            </tr>
            <tr>
              <td><code>{{ circlePerimeter }} cm</code></td>
              <td><code>{{ circleArea }} cm2</code></td>
              <td><code>{{ sphereVolume }} cm3</code></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="alertInput" class="alert alert-danger mt-3">
          {{ alertInputText }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'Calculator',
  computed:{
    /**
     * import du state du composant global
     */
    ...mapState(['titleText', 'helpText', 'helpTextSuite', 'alertInputText', 'alertInput', 'circleArea', 'circlePerimeter', 'sphereVolume', 'calculBool']),
  },
  methods:{
    /**
     * méthode displayResult qui appellera this.$store.dispatch('obtainResult') si un calcul est a réaliser
     */
    displayResult(){
      let choice = document.getElementById('radius').value /** *** On capture la valeur du champs *** */
      this.$store.state.calculBool = true
      if (choice > 0 ) {/** *** On la valeur de choice *** */
          this.$store.state.radius = choice
           this.$store.dispatch('obtainResult')
           this.$store.state.calculBool = true/** *** On passe calculBool à true pour informer la div contenant le tableau qu'on lui demande d'apparaître *** */
           this.$store.state.alertInput = false
          setTimeout(() => {
            this.$store.state.calculBool = false
          }, 10000);
      }
      else{
        this.$store.state.calculBool = false
        this.$store.state.alertInput = true
        setTimeout(() => {
            this.$store.state.alertInput = false
          }, 2000);
      }
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    list-style: none;
  }
  table{
    position: absolute;
  }
  td, th{
    border: 1px solid black;
    padding: 15px;
  }
</style>
