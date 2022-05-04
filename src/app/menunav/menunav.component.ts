import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { tap } from 'rxjs/operators';

interface ISubMenuItems {
  item: string,
  link: string,
  perm: string | Array<string>
  items?: [],
};

@Component({
  selector: 'app-menunav',
  templateUrl: './menunav.component.html',
  styleUrls: ['./menunav.component.css']
})
export class MenunavComponent implements OnInit, OnDestroy {

  public menu: MenuItem[];

  constructor(
    private http:HttpClient
  ) { }
  
  ngOnInit(): void {
    console.log('%cMenunavComponent', 'background-color:green; color:white;');
    this._init();
  }
  ngOnDestroy(): void {
    console.log('%cMenunavComponent', 'background-color:red; color:white;')
  }
// ============================================================================
  menuCommand(evt) {
    console.log('menuCommand:', evt);
  }
// ============================================================================
  private _init() {
    this.http.get<any[]>('/assets/data/main_menu.json')
      .subscribe(m =>{
      console.log('main_menu:', m);
      let submenu = [];
      this.menu = m.map( e => {
        submenu = this.createSubmenu(e.items);
        return { label:e.menu, items:submenu }
      });
      /*
      this.menu  = [
        {label: 'Admin',
          items: [
            {label: 'Edit Users', icon: 'pi pi-users'},
            {label:'Edit Roles', icon:'pi pi-fw pi-users'}
          ]
        },
        {label:'S&A Inventory',
          items: [
            {label:'CBG', command:this.menuCommand},
            {label:'Manual/FAQ', url:'http://books.google.com'},
            {label:'Inventory Management',
              items:[
                {label:'Issue Equipment'},
                {label:'Equipment Management'}
              ]
            }
          ],
        },
        {label: 'Tables', icon:'pi pi-table', routerLink:'/tables'}
      ]
      */
    });
  }

  private createSubmenu(items:ISubMenuItems[]):Array<any> {
    let ret = items.map( i => {
      let subsub = [];
      if(i?.items && i.items.length) {
        subsub = this.createSubmenu(i.items);
      }

      if(subsub.length) {
        return { label:i.item, items:subsub };
      } else {
        return { label:i.item, routerLink:i.link }
      }
    });
    return ret;
  }
}
