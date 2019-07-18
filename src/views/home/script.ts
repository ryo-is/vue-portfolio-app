import { Component, Vue } from "vue-property-decorator"

@Component({
  components: {}
})
export default class Home extends Vue {
  public title: string = "Hello Vue!!!"

  public created(): void {
    console.log(this)
  }
}
