import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmailService } from 'src/app/_services/email.service';

import * as prettyBytes from 'pretty-bytes';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit, OnDestroy {
  public templates;
  public selectedTemplate;
  public templateVars = [];
  public loading: boolean = false;

  public selectedRow;

  private _templates = new BehaviorSubject(false);
  public template$ = this._templates.asObservable();

  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    console.log('%cEmailComponent', 'background:green; color:white;');
    this._init();
    console.log(prettyBytes(123_812_671));
  }
  ngOnDestroy(): void {
    console.log('%cEmailComponent', 'background:red; color:white;');
  }
  // ============================================================================
  onSelectTemplate(evt) {
    console.log('onRowSelect:', evt.data);
    let { filename } = evt.data;

    this.emailService.getTemplate(filename).subscribe(
      t => {
        console.log({ t });
        this.selectedTemplate = t['file'];

        let templateVars = t['file'].match(/(@[\w.]+)/g);
        this.templateVars = templateVars.map((e) => { return e.split('@')[1]; });

        let rr = "<span style='color:red'>$&</span>";
        let replaced = t['file'];
        templateVars.forEach(element => {
          replaced = replaced.replaceAll(element, rr);
        });

        console.log({ templateVars });
        console.log(replaced);
        this.selectedTemplate = replaced;
      },
      e => console.error(e)
    )
  }
  onRowUnSelect(evt) {
    console.log('onRowUnselect:', evt);
  }
  // ============================================================================
  private _init() {
    this.loading = true;
    this.emailService.getTemplates().subscribe(
      t => {
        this.templates = t['templates'];
        this.loading = false;
      },
      e => console.error(e)
    )
  }
}
