import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  //******************** Angular Lesson 4 (DATA BINDING) ********************

  //---------- DATA BINDING ----------

  // ----- DATA BINDING ver 1: Display any key details -----
  onKeyup($event: KeyboardEvent) {
    console.log($event.keyCode);

    if ($event.keyCode == 13) { // --> 13 (Enter Key)
      console.log("Enter key pressed.");
    }
  }

  // ----- DATA BINDING ver 2: Display input string when enter key is triggered -----
  onKeyup2($event: Event) {
    console.log("Enter key pressed.");
    console.log(($event.target as HTMLInputElement).value);
  }

  // ----- DATA BINDING ver 3: Display username input when enter key is triggered -----
  onKeyup3(username: string) {
    console.log(username);
  }


  // ----- DATA BINDING ver 4: Data Binding with userName input -----
  userName: string = '';

  onKeyup4() {
    console.log(this.userName);
  }

  //---------- ONE WAY DATA BINDING ----------
  textValue: string = "Value is coming from component";

  onKeyup5() {
    console.log(this.textValue);
  }


}
