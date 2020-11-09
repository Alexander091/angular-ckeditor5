import { Component, OnInit } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";
  editor = ClassicEditor;
  config = {};

  ngOnInit() {
    // this.config = {
    //   ignoreEmptyParagraph: true,
    //   extraPlugins: [
    //     editor => {
    //       return this.uploadAdapterPlugin(editor);
    //     }
    //   ]
    // };
  }

  // uploadAdapterPlugin(editor) {
  //   editor.plugins.get('FileRepository').createUploadAdapter = loader => {
  //     console.log(`Do something`)
  //   };
  // }
}
