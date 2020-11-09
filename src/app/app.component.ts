import {Component, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular-ckeditor5';
  public Editor = ClassicEditor;
  config = {};

  ngOnInit(): void {
    this.config = {
      ignoreEmptyParagraph: true,
      extraPlugins: [
        editor => {
          return this.uploadAdapterPlugin(editor);
        }
      ]
    };
  }

  uploadAdapterPlugin(editor): void {
    editor.plugins.get('FileRepository').createUploadAdapter = loader => {
      console.log(`Do something`);
    };
  }
}
