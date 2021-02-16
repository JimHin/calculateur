import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/**
 * Définition des propriétés du state. radius pour le rayon, 
 * Les différents textes nécessaires, un booléen représentant l'état d'une alerte, 
 * les trois résultats attendus
 * Un booléen qui affichera le tableau à true et le masquera si un résultat est attendu
 */
export default new Vuex.Store({
  state: {
    radius: 0,
    titleText: "Calculateur de dimensions Euclidiennes pour un cercle",
    helpText: "Veuillez saisir un entier positif non nul en guise de rayon (cm)",
    helpTextSuite: "Enfin, cliquez sur le bouton résultats pour obtenir le périmètre et l'aire du cercle et le volume de la sphère correspondante",
    alertInputText: "Entrée invalide. Vous devez saisir un nombre entier positif non nul.",
    alertInput: false,
    circlePerimeter: 0,
    circleArea: 0,
    sphereVolume: 0,
    calculBool: false
  },
  /**
   * Les trois calculs nécessaires pour obtenir le perimètre, l'aire et le volume
   * On doit les déclarer dans mutations car ils changent la valeur d'une propriété du state, d'où le nom de mutations pour ces méthodes
   */
  mutations: {
    CALCUL_CIRCLE_PERIMETER(state){
      state.circlePerimeter = state.radius * 2 * Math.PI
    },
    CALCUL_CIRCLE_AREA(state){
      state.circleArea = Math.pow(state.radius, 2) * Math.PI
    },
    CALCUL_SPHERE_VOLUME(state){
      state.sphereVolume = (4 * Math.PI * Math.pow(state.radius, 3)) / 3
    }
  },
  /**
   * Une action permet de grouper ces trois calculs pour un résultat simultanée
   * on l'appellera dans le composant Calculator.vue avec l'expression this.$store.dispatch('obtainResult')
   */
  actions: {
    obtainResult(context){
        context.commit('CALCUL_CIRCLE_PERIMETER')
        context.commit('CALCUL_CIRCLE_AREA')
        context.commit('CALCUL_SPHERE_VOLUME')
      }
  },
  modules: {
  }
})
